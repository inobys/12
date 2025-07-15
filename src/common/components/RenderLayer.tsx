import { h, Component, CSSProperties } from 'preact';

export declare interface RenderLayerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: Function;
  /** 是否禁用 position: absolute 定位，默认定位是 absolute 的 */
  noPositionAbsolute?: boolean;
  /** 绑定的指定面板名称 */
  bindPanelName?: string;
}

const css: CSSProperties = {
  position: 'absolute',
  '-pixui-render-layer': 'composite',
};

export default class RenderLayer extends Component<RenderLayerProps> {
  protected firstAttached = true;
  protected appendUIComponentsStatus = false;


  render() {
    let { className, style, children, noPositionAbsolute, ...props } = this.props;
    className = ['pixui-renderlayer', className].filter((c) => !!c).join(' ');
    style = { ...css, ...(style || {}) };
    if (noPositionAbsolute) delete style.position;
    return (
      // @ts-ignore
      <div className={className} style={style} {...props}>
        {this.props.bindPanelName ? (
          // @ts-ignore
          <pixslot src="pixui://method:placeholder" style={{ position: 'absolute', width: '0', height: '0' }}>
            {children}
            {/* @ts-ignore */}
          </pixslot>
        ) : (
          children
        )}
      </div>
    );
  }
}
