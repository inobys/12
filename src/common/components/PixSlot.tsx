import { h, Component, CSSProperties } from 'preact';
import CSharp, { com, UnityEngine } from 'csharp';
import { GameletAPI } from 'gamelet-pixui-frame';

declare interface Vector {
  x: number;
  y: number;
  z: number;
}

declare interface EffectNodeProps {
  effectName?: string;
  path?: string;
  position?: Vector;
  scale?: Vector;
  sortingOrder?: number;
  // 是否开启 UI 层级管理
  appendUIComponents?: true;
}

declare interface PixSlotLoadEvent {
  target?: { attachment?: { handle: number } };
  [key: string]: any;
}

export declare type PixSlotProps = {
  /** 特效资源路径 */
  effectName: string;
  src?: string;
  version?: '0.0.0' | 'editor' | string;
  className?: string;
  style?: CSSProperties;
  /** 将挂载的节点的 GameObject 对象传入指定的对象的 current 字段，或者传入到回调函数 */
  withGameObject?: { current?: CSharp.UnityEngine.GameObject } | ((go: CSharp.UnityEngine.GameObject, attachment: CSharp.com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment) => any);
  /** 设置延迟加载的时间，单位为毫秒，0 表示不需要延迟加载 */
  delayLoad?: number;
  /** 每次 src 属性被修改时会派发onload事件 */
  onload?: (e: any) => any;
  onLoad?: (e: any) => any;
  /** 资源挂载到 slot 节点上时触发 */
  onAttach?: (attachment: com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment) => void;
  /** src为空时会派发onerror；原生资源无法成功挂载也会派发onerror，与src为空的区别此时e.attachment.handle不为0 */
  onerror?: (e: any) => any;
} & EffectNodeProps;

export default class PixSlot extends Component<PixSlotProps, { delay?: number }> {
  /** 挂载的动效名称（prefab 名称） */
  protected effectName: string;
  /** 实际加载的资源路径 */
  protected src: string;
  /** 是否已完成挂载 */
  protected attached = false;

  /** 这是 placeholder 的 GameObject 对象 */
  protected gameobject?: UnityEngine.GameObject;

  protected slotRef: { current?: { src: string } } = {};

  constructor(props: PixSlotProps) {
    super(props);
    this.effectName = props.effectName;
    // 直接指定 src 路径
    if (props.src) this.src = props.src;
    // @ts-ignore unity-editor 版本
    else if (this.props.version === 'editor' || window.STUB_IS_UNITY_EDITOR === true) {
      this.src = `pixui://method:editor/Assets/Actions/Resources/Gamelet${GameletAPI.getAppId()}${GameletAPI.getAppName()}/Prefabs/${this.props.effectName}.prefab`;
    } else {
      this.src = `pixui://method:gamelet/${this.props.effectName.toLocaleLowerCase()}.prefab`;
    }

    if ((this.props.delayLoad || 0) > 0) {
      this.state = { delay: this.props.delayLoad };
      setTimeout(() => this.setState({ delay: 0 }), this.state.delay);
      console.log('[PixSlot]', '延迟', this.props.delayLoad, 'ms 加载src =', this.src);
    } else {
      console.log('[PixSlot]', 'src =', this.src);
    }
  }

  componentWillUnmount() {
  }

  getGameObject = (e: PixSlotLoadEvent): [CSharp.UnityEngine.GameObject, CSharp.com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment] | undefined => {
    if (!e.target?.attachment) return;
    if (!CSharp) {
      console.error('[PixSlot][getGameObject]', '未能成功加载 CSharp');
      return;
    }
    // @ts-ignore
    const windowId = external.id;
    const { handle } = e.target.attachment;
    const attachment = CSharp.com.tencent.pandora.CSharpInterface.GetSlotAttachmentByHandle(windowId, handle);
    if (!attachment) {
      console.error('[PixSlot][getGameObject]', `无法获取挂载对象: GetSlotAttachmentByHandle(${windowId}, ${handle})`);
      return;
    }

    // @ts-ignore
    const go = attachment.GetMountingGameObject() as CSharp.UnityEngine.GameObject;
    if (!go) console.error('[PixSlot][getGameObject]', '无法获取挂载节点的 GameObject 对象');
    return [go, attachment];
  };

  /** slot 资源挂载成功 */
  onAttach = (attachment: com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment) => {
    if (this.attached) return;
    if (!attachment || !this.gameobject) return;
    this.attached = true;
    console.log('[PixSlot][onAttach]', 'attachment =', attachment.ToString());

    this.props.onAttach?.(attachment);
  };

  onLoad = (e: PixSlotLoadEvent, ...rest: any[]) => {
    console.log('[PixSlot][onLoad]', '加载资源：', this.slotRef.current?.src || this.src);

    const out = this.getGameObject(e);
    if (!out) return;
    const [go, attachment] = out;
    this.gameobject = go;

    const { withGameObject } = this.props;
    if (typeof withGameObject === 'function') go && withGameObject(go, attachment);
    else if (withGameObject && go) withGameObject.current = go;

    const onLoad: any = this.props.onLoad || this.props.onload;
    onLoad?.(e, ...rest);

    // @ts-ignore
    attachment.add_onAttach(this.onAttach);
  };

  onError = (...args: any[]) => {
    // @ts-ignore
    console.error('[PixSlot][onError]', '资源加载失败：', this.slotRef.current?.src || this.src, ...args);
    // @ts-ignore
    this.props.onerror?.(...args);
  };

  render() {
    if (!this.src) return null;
    if ((this.state.delay || 0) > 0) return null;
    const className = ['pixui-slot slot', this.props.className, this.effectName].filter((c) => !!c).join(' ');
    return (
      // @ts-ignore
      <pixslot className={className} src={this.src} onload={this.onLoad} onerror={this.onError} style={this.props.style} ref={this.slotRef}>
        {this.props.children}
        {/* @ts-ignore */}
      </pixslot>
    );
  }
}
