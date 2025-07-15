
declare module 'csharp' {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    namespace CSharp {
        interface $Ref<T> {
            value: T
        }
        namespace System {
            interface Array$1<T> extends System.Array {
                get_Item(index: number):T;
                set_Item(index: number, value: T):void;
            }
        }
        interface $Task<T> {}
        namespace System {
            class Object
            {
                protected [__keep_incompatibility]: never;
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public GetHashCode () : number
                public GetType () : System.Type
                public ToString () : string
                public static ReferenceEquals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            class ValueType extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Void extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICloneable
            {
            }
            interface MulticastDelegate
            { 
            (...args:any[]) : any; 
            Invoke?: (...args:any[]) => any;
            }
            var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
            class Boolean extends System.ValueType implements System.IConvertible, System.IComparable, System.IComparable$1<boolean>, System.IEquatable$1<boolean>
            {
                protected [__keep_incompatibility]: never;
            }
            interface IConvertible
            {
            }
            interface IComparable
            {
            }
            interface IComparable$1<T>
            {
            }
            interface IEquatable$1<T>
            {
            }
            class Array extends System.Object implements System.Collections.IEnumerable, System.ICloneable, System.Collections.ICollection, System.Collections.IList
            {
                protected [__keep_incompatibility]: never;
                public get Length(): number;
                public get LongLength(): bigint;
                public get Rank(): number;
                public get IsSynchronized(): boolean;
                public get SyncRoot(): any;
                public get IsFixedSize(): boolean;
                public get IsReadOnly(): boolean;
                public GetLength ($dimension: number) : number
                public GetLongLength ($dimension: number) : bigint
                public GetLowerBound ($dimension: number) : number
                public GetValue (...indices: number[]) : any
                public SetValue ($value: any, ...indices: number[]) : void
                public GetEnumerator () : System.Collections.IEnumerator
                public GetUpperBound ($dimension: number) : number
                public GetValue ($index: number) : any
                public GetValue ($index1: number, $index2: number) : any
                public GetValue ($index1: number, $index2: number, $index3: number) : any
                public GetValue ($index: bigint) : any
                public GetValue ($index1: bigint, $index2: bigint) : any
                public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
                public SetValue ($value: any, $index: bigint) : void
                public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
                public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
                public SetValue ($value: any, $index: number) : void
                public SetValue ($value: any, $index1: number, $index2: number) : void
                public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
                public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
                public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
                public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
                public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
                public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
                public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
                public GetValue (...indices: bigint[]) : any
                public SetValue ($value: any, ...indices: bigint[]) : void
                public static BinarySearch ($array: System.Array, $value: any) : number
                public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
                public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
                public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
                public static Clear ($array: System.Array, $index: number, $length: number) : void
                public Clone () : any
                public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
                public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
                public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
                public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
                public static IndexOf ($array: System.Array, $value: any) : number
                public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
                public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
                public Initialize () : void
                public static LastIndexOf ($array: System.Array, $value: any) : number
                public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
                public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
                public static Reverse ($array: System.Array) : void
                public static Reverse ($array: System.Array, $index: number, $length: number) : void
                public static Sort ($array: System.Array) : void
                public static Sort ($keys: System.Array, $items: System.Array) : void
                public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
                public static Sort ($array: System.Array, $index: number, $length: number) : void
                public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
                public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
                public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
                public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
                public CopyTo ($array: System.Array, $index: number) : void
                public CopyTo ($array: System.Array, $index: bigint) : void
                public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            }
            class Int32 extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            interface IFormattable
            {
            }
            class Int64 extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>
            {
                protected [__keep_incompatibility]: never;
            }
            class Type extends System.Reflection.MemberInfo implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
            }
            interface Comparison$1<T>
            { 
            (x: T, y: T) : number; 
            Invoke?: (x: T, y: T) => number;
            }
            interface Predicate$1<T>
            { 
            (obj: T) : boolean; 
            Invoke?: (obj: T) => boolean;
            }
            interface Action$1<T>
            { 
            (obj: T) : void; 
            Invoke?: (obj: T) => void;
            }
            interface Converter$2<TInput, TOutput>
            { 
            (input: TInput) : TOutput; 
            Invoke?: (input: TInput) => TOutput;
            }
            class String extends System.Object implements System.IConvertible, System.IComparable, System.Collections.IEnumerable, System.ICloneable, System.IComparable$1<string>, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class Char extends System.ValueType implements System.IConvertible, System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class MarshalByRefObject extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IDisposable
            {
            }
            class Enum extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable
            {
                protected [__keep_incompatibility]: never;
            }
            class DateTime extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<Date>, System.IEquatable$1<Date>
            {
                protected [__keep_incompatibility]: never;
            }
            class Byte extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt64 extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt32 extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class Single extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class IntPtr extends System.ValueType implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            interface IAsyncResult
            {
            }
            interface AsyncCallback
            { 
            (ar: System.IAsyncResult) : void; 
            Invoke?: (ar: System.IAsyncResult) => void;
            }
            var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
            class UInt16 extends System.ValueType implements System.IFormattable, System.IConvertible, System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            interface Func$2<T, TResult>
            { 
            (arg1: T) : TResult; 
            Invoke?: (arg1: T) => TResult;
            }
            class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
            }
            interface Action$2<T1, T2>
            { 
            (arg1: T1, arg2: T2) : void; 
            Invoke?: (arg1: T1, arg2: T2) => void;
            }
        }
        namespace UnityEngine.Events {
            class UnityEventBase extends System.Object implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public GetPersistentEventCount () : number
                public GetPersistentTarget ($index: number) : UnityEngine.Object
                public GetPersistentMethodName ($index: number) : string
                public SetPersistentListenerState ($index: number, $state: UnityEngine.Events.UnityEventCallState) : void
                public RemoveAllListeners () : void
                public static GetValidMethodInfo ($obj: any, $functionName: string, $argumentTypes: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            }
            class UnityEvent extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public AddListener ($call: UnityEngine.Events.UnityAction) : void
                public RemoveListener ($call: UnityEngine.Events.UnityAction) : void
                public Invoke () : void
                public constructor ()
            }
            interface UnityAction
            { 
            () : void; 
            Invoke?: () => void;
            }
            var UnityAction: { new (func: () => void): UnityAction; }
            class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public AddListener ($call: UnityEngine.Events.UnityAction$1<T0>) : void
                public RemoveListener ($call: UnityEngine.Events.UnityAction$1<T0>) : void
                public Invoke ($arg0: T0) : void
            }
            interface UnityAction$1<T0>
            { 
            (arg0: T0) : void; 
            Invoke?: (arg0: T0) => void;
            }
            enum UnityEventCallState
            { Off = 0, EditorAndRuntime = 1, RuntimeOnly = 2 }
        }
        namespace UnityEngine {
            interface ISerializationCallbackReceiver
            {
            }
            class Object extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                public set name(value: string);
                public get hideFlags(): UnityEngine.HideFlags;
                public set hideFlags(value: UnityEngine.HideFlags);
                public static Destroy ($obj: UnityEngine.Object, $t: number) : void
                public static Destroy ($obj: UnityEngine.Object) : void
                public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
                public static DestroyImmediate ($obj: UnityEngine.Object) : void
                public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
                public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
                public static DestroyObject ($obj: UnityEngine.Object, $t: number) : void
                public static DestroyObject ($obj: UnityEngine.Object) : void
                public GetInstanceID () : number
                public static op_Implicit ($exists: UnityEngine.Object) : boolean
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
                public static Clone ($original: UnityEngine.Object) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
                public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
                public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public constructor ()
            }
            class Component extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get transform(): UnityEngine.Transform;
                public get gameObject(): UnityEngine.GameObject;
                public get tag(): string;
                public set tag(value: string);
                public GetComponent ($type: System.Type) : UnityEngine.Component
                public GetComponent ($type: string) : UnityEngine.Component
                public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
                public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentInParent ($t: System.Type) : UnityEngine.Component
                public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                public CompareTag ($tag: string) : boolean
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                public SendMessageUpwards ($methodName: string, $value: any) : void
                public SendMessageUpwards ($methodName: string) : void
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $value: any) : void
                public SendMessage ($methodName: string) : void
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                public BroadcastMessage ($methodName: string) : void
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public constructor ()
            }
            class Behaviour extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            class MonoBehaviour extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                public get useGUILayout(): boolean;
                public set useGUILayout(value: boolean);
                public Invoke ($methodName: string, $time: number) : void
                public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
                public CancelInvoke () : void
                public CancelInvoke ($methodName: string) : void
                public IsInvoking ($methodName: string) : boolean
                public IsInvoking () : boolean
                public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
                public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
                public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
                public StopCoroutine ($methodName: string) : void
                public StopCoroutine ($routine: System.Collections.IEnumerator) : void
                public StopCoroutine ($routine: UnityEngine.Coroutine) : void
                public StopAllCoroutines () : void
                public static print ($message: any) : void
                public constructor ()
            }
            class Texture extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public static get masterTextureLimit(): number;
                public static set masterTextureLimit(value: number);
                public static get anisotropicFiltering(): UnityEngine.AnisotropicFiltering;
                public static set anisotropicFiltering(value: UnityEngine.AnisotropicFiltering);
                public get width(): number;
                public set width(value: number);
                public get height(): number;
                public set height(value: number);
                public get dimension(): UnityEngine.Rendering.TextureDimension;
                public set dimension(value: UnityEngine.Rendering.TextureDimension);
                public get filterMode(): UnityEngine.FilterMode;
                public set filterMode(value: UnityEngine.FilterMode);
                public get anisoLevel(): number;
                public set anisoLevel(value: number);
                public get wrapMode(): UnityEngine.TextureWrapMode;
                public set wrapMode(value: UnityEngine.TextureWrapMode);
                public get mipMapBias(): number;
                public set mipMapBias(value: number);
                public get texelSize(): UnityEngine.Vector2;
                public static SetGlobalAnisotropicFilteringLimits ($forcedMin: number, $globalMax: number) : void
                public GetNativeTexturePtr () : System.IntPtr
                public constructor ()
            }
            class Texture2D extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
                public get mipmapCount(): number;
                public get format(): UnityEngine.TextureFormat;
                public static get whiteTexture(): UnityEngine.Texture2D;
                public static get blackTexture(): UnityEngine.Texture2D;
                public get alphaIsTransparency(): boolean;
                public set alphaIsTransparency(value: boolean);
                public static CreateExternalTexture ($width: number, $height: number, $format: UnityEngine.TextureFormat, $mipmap: boolean, $linear: boolean, $nativeTex: System.IntPtr) : UnityEngine.Texture2D
                public UpdateExternalTexture ($nativeTex: System.IntPtr) : void
                public SetPixel ($x: number, $y: number, $color: UnityEngine.Color) : void
                public GetPixel ($x: number, $y: number) : UnityEngine.Color
                public GetPixelBilinear ($u: number, $v: number) : UnityEngine.Color
                public SetPixels ($colors: System.Array$1<UnityEngine.Color>) : void
                public SetPixels ($colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
                public SetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
                public SetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color>) : void
                public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>) : void
                public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
                public SetPixels32 ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color32>) : void
                public SetPixels32 ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
                public LoadImage ($data: System.Array$1<number>, $markNonReadable: boolean) : boolean
                public LoadImage ($data: System.Array$1<number>) : boolean
                public LoadRawTextureData ($data: System.Array$1<number>) : void
                public LoadRawTextureData ($data: System.IntPtr, $size: number) : void
                public GetRawTextureData () : System.Array$1<number>
                public GetPixels () : System.Array$1<UnityEngine.Color>
                public GetPixels ($miplevel: number) : System.Array$1<UnityEngine.Color>
                public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $miplevel: number) : System.Array$1<UnityEngine.Color>
                public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number) : System.Array$1<UnityEngine.Color>
                public GetPixels32 ($miplevel: number) : System.Array$1<UnityEngine.Color32>
                public GetPixels32 () : System.Array$1<UnityEngine.Color32>
                public Apply ($updateMipmaps: boolean, $makeNoLongerReadable: boolean) : void
                public Apply ($updateMipmaps: boolean) : void
                public Apply () : void
                public Resize ($width: number, $height: number, $format: UnityEngine.TextureFormat, $hasMipMap: boolean) : boolean
                public Resize ($width: number, $height: number) : boolean
                public Compress ($highQuality: boolean) : void
                public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number, $maximumAtlasSize: number, $makeNoLongerReadable: boolean) : System.Array$1<UnityEngine.Rect>
                public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number, $maximumAtlasSize: number) : System.Array$1<UnityEngine.Rect>
                public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number) : System.Array$1<UnityEngine.Rect>
                public static GenerateAtlas ($sizes: System.Array$1<UnityEngine.Vector2>, $padding: number, $atlasSize: number, $results: System.Collections.Generic.List$1<UnityEngine.Rect>) : boolean
                public ReadPixels ($source: UnityEngine.Rect, $destX: number, $destY: number, $recalculateMipMaps: boolean) : void
                public ReadPixels ($source: UnityEngine.Rect, $destX: number, $destY: number) : void
                public EncodeToPNG () : System.Array$1<number>
                public EncodeToJPG ($quality: number) : System.Array$1<number>
                public EncodeToJPG () : System.Array$1<number>
                public EncodeToEXR ($flags: UnityEngine.Texture2D.EXRFlags) : System.Array$1<number>
                public EncodeToEXR () : System.Array$1<number>
                public constructor ($width: number, $height: number)
                public constructor ($width: number, $height: number, $format: UnityEngine.TextureFormat, $mipmap: boolean)
                public constructor ($width: number, $height: number, $format: UnityEngine.TextureFormat, $mipmap: boolean, $linear: boolean)
                public constructor ()
            }
            class GameObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get transform(): UnityEngine.Transform;
                public get layer(): number;
                public set layer(value: number);
                public get activeSelf(): boolean;
                public get activeInHierarchy(): boolean;
                public get isStatic(): boolean;
                public set isStatic(value: boolean);
                public get tag(): string;
                public set tag(value: string);
                public get scene(): UnityEngine.SceneManagement.Scene;
                public get gameObject(): UnityEngine.GameObject;
                public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
                public GetComponent ($type: System.Type) : UnityEngine.Component
                public GetComponent ($type: string) : UnityEngine.Component
                public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
                public GetComponentInParent ($type: System.Type) : UnityEngine.Component
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public SetActive ($value: boolean) : void
                public CompareTag ($tag: string) : boolean
                public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
                public static FindWithTag ($tag: string) : UnityEngine.GameObject
                public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                public SendMessageUpwards ($methodName: string, $value: any) : void
                public SendMessageUpwards ($methodName: string) : void
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $value: any) : void
                public SendMessage ($methodName: string) : void
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                public BroadcastMessage ($methodName: string) : void
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public AddComponent ($componentType: System.Type) : UnityEngine.Component
                public static Find ($name: string) : UnityEngine.GameObject
                public constructor ($name: string)
                public constructor ()
                public constructor ($name: string, ...components: System.Type[])
            }
            interface ICanvasRaycastFilter
            {
            }
            class Shader extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get isSupported(): boolean;
                public get maximumLOD(): number;
                public set maximumLOD(value: number);
                public static get globalMaximumLOD(): number;
                public static set globalMaximumLOD(value: number);
                public static get globalRenderPipeline(): string;
                public static set globalRenderPipeline(value: string);
                public get renderQueue(): number;
                public static Find ($name: string) : UnityEngine.Shader
                public static EnableKeyword ($keyword: string) : void
                public static DisableKeyword ($keyword: string) : void
                public static IsKeywordEnabled ($keyword: string) : boolean
                public static SetGlobalBuffer ($nameID: number, $buffer: UnityEngine.ComputeBuffer) : void
                public static PropertyToID ($name: string) : number
                public static WarmupAllShaders () : void
                public static SetGlobalFloat ($name: string, $value: number) : void
                public static SetGlobalFloat ($nameID: number, $value: number) : void
                public static SetGlobalInt ($name: string, $value: number) : void
                public static SetGlobalInt ($nameID: number, $value: number) : void
                public static SetGlobalVector ($name: string, $value: UnityEngine.Vector4) : void
                public static SetGlobalVector ($nameID: number, $value: UnityEngine.Vector4) : void
                public static SetGlobalColor ($name: string, $value: UnityEngine.Color) : void
                public static SetGlobalColor ($nameID: number, $value: UnityEngine.Color) : void
                public static SetGlobalMatrix ($name: string, $value: UnityEngine.Matrix4x4) : void
                public static SetGlobalMatrix ($nameID: number, $value: UnityEngine.Matrix4x4) : void
                public static SetGlobalTexture ($name: string, $value: UnityEngine.Texture) : void
                public static SetGlobalTexture ($nameID: number, $value: UnityEngine.Texture) : void
                public static SetGlobalBuffer ($name: string, $buffer: UnityEngine.ComputeBuffer) : void
                public static SetGlobalFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public static SetGlobalFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                public static SetGlobalFloatArray ($name: string, $values: System.Array$1<number>) : void
                public static SetGlobalFloatArray ($nameID: number, $values: System.Array$1<number>) : void
                public static SetGlobalVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static SetGlobalVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static SetGlobalVectorArray ($name: string, $values: System.Array$1<UnityEngine.Vector4>) : void
                public static SetGlobalVectorArray ($nameID: number, $values: System.Array$1<UnityEngine.Vector4>) : void
                public static SetGlobalMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public static SetGlobalMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public static SetGlobalMatrixArray ($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                public static SetGlobalMatrixArray ($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                public static GetGlobalFloat ($name: string) : number
                public static GetGlobalFloat ($nameID: number) : number
                public static GetGlobalInt ($name: string) : number
                public static GetGlobalInt ($nameID: number) : number
                public static GetGlobalVector ($name: string) : UnityEngine.Vector4
                public static GetGlobalVector ($nameID: number) : UnityEngine.Vector4
                public static GetGlobalColor ($name: string) : UnityEngine.Color
                public static GetGlobalColor ($nameID: number) : UnityEngine.Color
                public static GetGlobalMatrix ($name: string) : UnityEngine.Matrix4x4
                public static GetGlobalMatrix ($nameID: number) : UnityEngine.Matrix4x4
                public static GetGlobalTexture ($name: string) : UnityEngine.Texture
                public static GetGlobalTexture ($nameID: number) : UnityEngine.Texture
                public static GetGlobalFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public static GetGlobalFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                public static GetGlobalFloatArray ($name: string) : System.Array$1<number>
                public static GetGlobalFloatArray ($nameID: number) : System.Array$1<number>
                public static GetGlobalVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static GetGlobalVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static GetGlobalVectorArray ($name: string) : System.Array$1<UnityEngine.Vector4>
                public static GetGlobalVectorArray ($nameID: number) : System.Array$1<UnityEngine.Vector4>
                public static GetGlobalMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public static GetGlobalMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public static GetGlobalMatrixArray ($name: string) : System.Array$1<UnityEngine.Matrix4x4>
                public static GetGlobalMatrixArray ($nameID: number) : System.Array$1<UnityEngine.Matrix4x4>
                public constructor ()
            }
            class Vector2 extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public x : number
                public y : number
                public static kEpsilon : number
                public get normalized(): UnityEngine.Vector2;
                public get magnitude(): number;
                public get sqrMagnitude(): number;
                public static get zero(): UnityEngine.Vector2;
                public static get one(): UnityEngine.Vector2;
                public static get up(): UnityEngine.Vector2;
                public static get down(): UnityEngine.Vector2;
                public static get left(): UnityEngine.Vector2;
                public static get right(): UnityEngine.Vector2;
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                public Set ($newX: number, $newY: number) : void
                public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
                public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
                public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
                public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public Scale ($scale: UnityEngine.Vector2) : void
                public Normalize () : void
                public ToString () : string
                public ToString ($format: string) : string
                public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
                public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
                public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
                public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
                public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
                public static SqrMagnitude ($a: UnityEngine.Vector2) : number
                public SqrMagnitude () : number
                public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
                public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
                public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
                public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
                public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
                public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
                public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
                public constructor ($x: number, $y: number)
                public constructor ()
            }
            class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                public get position(): UnityEngine.Vector3;
                public set position(value: UnityEngine.Vector3);
                public get localPosition(): UnityEngine.Vector3;
                public set localPosition(value: UnityEngine.Vector3);
                public get eulerAngles(): UnityEngine.Vector3;
                public set eulerAngles(value: UnityEngine.Vector3);
                public get localEulerAngles(): UnityEngine.Vector3;
                public set localEulerAngles(value: UnityEngine.Vector3);
                public get right(): UnityEngine.Vector3;
                public set right(value: UnityEngine.Vector3);
                public get up(): UnityEngine.Vector3;
                public set up(value: UnityEngine.Vector3);
                public get forward(): UnityEngine.Vector3;
                public set forward(value: UnityEngine.Vector3);
                public get rotation(): UnityEngine.Quaternion;
                public set rotation(value: UnityEngine.Quaternion);
                public get localRotation(): UnityEngine.Quaternion;
                public set localRotation(value: UnityEngine.Quaternion);
                public get localScale(): UnityEngine.Vector3;
                public set localScale(value: UnityEngine.Vector3);
                public get parent(): UnityEngine.Transform;
                public set parent(value: UnityEngine.Transform);
                public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
                public get localToWorldMatrix(): UnityEngine.Matrix4x4;
                public get root(): UnityEngine.Transform;
                public get childCount(): number;
                public get lossyScale(): UnityEngine.Vector3;
                public get hasChanged(): boolean;
                public set hasChanged(value: boolean);
                public get hierarchyCapacity(): number;
                public set hierarchyCapacity(value: number);
                public get hierarchyCount(): number;
                public SetParent ($parent: UnityEngine.Transform) : void
                public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
                public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
                public Translate ($translation: UnityEngine.Vector3) : void
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                public Translate ($x: number, $y: number, $z: number) : void
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
                public Rotate ($eulerAngles: UnityEngine.Vector3) : void
                public Rotate ($eulerAngles: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
                public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
                public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
                public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
                public LookAt ($target: UnityEngine.Transform) : void
                public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
                public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
                public LookAt ($worldPosition: UnityEngine.Vector3) : void
                public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public DetachChildren () : void
                public SetAsFirstSibling () : void
                public SetAsLastSibling () : void
                public SetSiblingIndex ($index: number) : void
                public GetSiblingIndex () : number
                public Find ($name: string) : UnityEngine.Transform
                public IsChildOf ($parent: UnityEngine.Transform) : boolean
                public GetEnumerator () : System.Collections.IEnumerator
                public GetChild ($index: number) : UnityEngine.Transform
                public SetPositionOpt ($pos: UnityEngine.Vector3) : void
                public SetLocalPositionOpt ($pos: UnityEngine.Vector3) : void
                public SetRotationOpt ($rot: UnityEngine.Quaternion) : void
                public SetLocalRotationOpt ($rot: UnityEngine.Quaternion) : void
            }
            enum HideFlags
            { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
            class Vector3 extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public static kEpsilon : number
                public x : number
                public y : number
                public z : number
                public get normalized(): UnityEngine.Vector3;
                public get magnitude(): number;
                public get sqrMagnitude(): number;
                public static get zero(): UnityEngine.Vector3;
                public static get one(): UnityEngine.Vector3;
                public static get forward(): UnityEngine.Vector3;
                public static get back(): UnityEngine.Vector3;
                public static get up(): UnityEngine.Vector3;
                public static get down(): UnityEngine.Vector3;
                public static get left(): UnityEngine.Vector3;
                public static get right(): UnityEngine.Vector3;
                public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
                public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
                public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                public Set ($new_x: number, $new_y: number, $new_z: number) : void
                public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public Scale ($scale: UnityEngine.Vector3) : void
                public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
                public Normalize () : void
                public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
                public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
                public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
                public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
                public static Magnitude ($a: UnityEngine.Vector3) : number
                public static SqrMagnitude ($a: UnityEngine.Vector3) : number
                public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public ToString () : string
                public ToString ($format: string) : string
                public constructor ($x: number, $y: number, $z: number)
                public constructor ($x: number, $y: number)
                public constructor ()
            }
            class Quaternion extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum PrimitiveType
            { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
            enum SendMessageOptions
            { RequireReceiver = 0, DontRequireReceiver = 1 }
            class Matrix4x4 extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public m00 : number
                public m10 : number
                public m20 : number
                public m30 : number
                public m01 : number
                public m11 : number
                public m21 : number
                public m31 : number
                public m02 : number
                public m12 : number
                public m22 : number
                public m32 : number
                public m03 : number
                public m13 : number
                public m23 : number
                public m33 : number
                public get inverse(): UnityEngine.Matrix4x4;
                public get transpose(): UnityEngine.Matrix4x4;
                public get isIdentity(): boolean;
                public get determinant(): number;
                public static get zero(): UnityEngine.Matrix4x4;
                public static get identity(): UnityEngine.Matrix4x4;
                public static Inverse ($m: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
                public static Transpose ($m: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
                public static Determinant ($m: UnityEngine.Matrix4x4) : number
                public SetTRS ($pos: UnityEngine.Vector3, $q: UnityEngine.Quaternion, $s: UnityEngine.Vector3) : void
                public static TRS ($pos: UnityEngine.Vector3, $q: UnityEngine.Quaternion, $s: UnityEngine.Vector3) : UnityEngine.Matrix4x4
                public static Ortho ($left: number, $right: number, $bottom: number, $top: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
                public static Perspective ($fov: number, $aspect: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
                public static LookAt ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $up: UnityEngine.Vector3) : UnityEngine.Matrix4x4
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                public static op_Multiply ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
                public static op_Multiply ($lhs: UnityEngine.Matrix4x4, $v: UnityEngine.Vector4) : UnityEngine.Vector4
                public static op_Equality ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : boolean
                public static op_Inequality ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : boolean
                public GetColumn ($i: number) : UnityEngine.Vector4
                public GetRow ($i: number) : UnityEngine.Vector4
                public SetColumn ($i: number, $v: UnityEngine.Vector4) : void
                public SetRow ($i: number, $v: UnityEngine.Vector4) : void
                public MultiplyPoint ($v: UnityEngine.Vector3) : UnityEngine.Vector3
                public MultiplyPoint3x4 ($v: UnityEngine.Vector3) : UnityEngine.Vector3
                public MultiplyVector ($v: UnityEngine.Vector3) : UnityEngine.Vector3
                public static Scale ($v: UnityEngine.Vector3) : UnityEngine.Matrix4x4
                public static Translate ($v: UnityEngine.Vector3) : UnityEngine.Matrix4x4
                public ToString () : string
                public ToString ($format: string) : string
            }
            enum Space
            { World = 0, Self = 1 }
            class SystemInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static unsupportedIdentifier : string
                public static get batteryLevel(): number;
                public static get batteryStatus(): UnityEngine.BatteryStatus;
                public static get operatingSystem(): string;
                public static get operatingSystemFamily(): UnityEngine.OperatingSystemFamily;
                public static get processorType(): string;
                public static get processorFrequency(): number;
                public static get processorCount(): number;
                public static get systemMemorySize(): number;
                public static get graphicsMemorySize(): number;
                public static get graphicsDeviceName(): string;
                public static get graphicsDeviceVendor(): string;
                public static get graphicsDeviceID(): number;
                public static get graphicsDeviceVendorID(): number;
                public static get graphicsDeviceType(): UnityEngine.Rendering.GraphicsDeviceType;
                public static get graphicsUVStartsAtTop(): boolean;
                public static get graphicsDeviceVersion(): string;
                public static get graphicsShaderLevel(): number;
                public static get graphicsMultiThreaded(): boolean;
                public static get supportsShadows(): boolean;
                public static get supportsRawShadowDepthSampling(): boolean;
                public static get supportsMotionVectors(): boolean;
                public static get supportsRenderToCubemap(): boolean;
                public static get supportsImageEffects(): boolean;
                public static get supports3DTextures(): boolean;
                public static get supports2DArrayTextures(): boolean;
                public static get supports3DRenderTextures(): boolean;
                public static get supportsCubemapArrayTextures(): boolean;
                public static get supportsTimerQuery(): boolean;
                public static get copyTextureSupport(): UnityEngine.Rendering.CopyTextureSupport;
                public static get supportsComputeShaders(): boolean;
                public static get supportsInstancing(): boolean;
                public static get supportsSparseTextures(): boolean;
                public static get supportedRenderTargetCount(): number;
                public static get usesReversedZBuffer(): boolean;
                public static get npotSupport(): UnityEngine.NPOTSupport;
                public static get deviceUniqueIdentifier(): string;
                public static get deviceName(): string;
                public static get deviceModel(): string;
                public static get supportsAccelerometer(): boolean;
                public static get supportsGyroscope(): boolean;
                public static get supportsLocationService(): boolean;
                public static get supportsVibration(): boolean;
                public static get supportsAudio(): boolean;
                public static get deviceType(): UnityEngine.DeviceType;
                public static get maxTextureSize(): number;
                public static get maxCubemapSize(): number;
                public static SupportsRenderTextureFormat ($format: UnityEngine.RenderTextureFormat) : boolean
                public static SupportsTextureFormat ($format: UnityEngine.TextureFormat) : boolean
                public constructor ()
            }
            enum BatteryStatus
            { Unknown = 0, Charging = 1, Discharging = 2, NotCharging = 3, Full = 4 }
            enum OperatingSystemFamily
            { Other = 0, MacOSX = 1, Windows = 2, Linux = 3 }
            enum RenderTextureFormat
            { ARGB32 = 0, Depth = 1, ARGBHalf = 2, Shadowmap = 3, RGB565 = 4, ARGB4444 = 5, ARGB1555 = 6, Default = 7, ARGB2101010 = 8, DefaultHDR = 9, ARGB64 = 10, ARGBFloat = 11, RGFloat = 12, RGHalf = 13, RFloat = 14, RHalf = 15, R8 = 16, ARGBInt = 17, RGInt = 18, RInt = 19, BGRA32 = 20, RGB111110Float = 22, RG32 = 23, RGBAUShort = 24, RG16 = 25 }
            enum TextureFormat
            { Alpha8 = 1, ARGB4444 = 2, RGB24 = 3, RGBA32 = 4, ARGB32 = 5, RGB565 = 7, R16 = 9, DXT1 = 10, DXT5 = 12, RGBA4444 = 13, BGRA32 = 14, RHalf = 15, RGHalf = 16, RGBAHalf = 17, RFloat = 18, RGFloat = 19, RGBAFloat = 20, YUY2 = 21, RGB9e5Float = 22, BC4 = 26, BC5 = 27, BC6H = 24, BC7 = 25, DXT1Crunched = 28, DXT5Crunched = 29, PVRTC_RGB2 = 30, PVRTC_RGBA2 = 31, PVRTC_RGB4 = 32, PVRTC_RGBA4 = 33, ETC_RGB4 = 34, ATC_RGB4 = 35, ATC_RGBA8 = 36, EAC_R = 41, EAC_R_SIGNED = 42, EAC_RG = 43, EAC_RG_SIGNED = 44, ETC2_RGB = 45, ETC2_RGBA1 = 46, ETC2_RGBA8 = 47, ASTC_RGB_4x4 = 48, ASTC_RGB_5x5 = 49, ASTC_RGB_6x6 = 50, ASTC_RGB_8x8 = 51, ASTC_RGB_10x10 = 52, ASTC_RGB_12x12 = 53, ASTC_RGBA_4x4 = 54, ASTC_RGBA_5x5 = 55, ASTC_RGBA_6x6 = 56, ASTC_RGBA_8x8 = 57, ASTC_RGBA_10x10 = 58, ASTC_RGBA_12x12 = 59, ETC_RGB4_3DS = 60, ETC_RGBA8_3DS = 61, RG16 = 62, R8 = 63, PVRTC_2BPP_RGB = -127, PVRTC_2BPP_RGBA = -127, PVRTC_4BPP_RGB = -127, PVRTC_4BPP_RGBA = -127 }
            enum NPOTSupport
            { None = 0, Restricted = 1, Full = 2 }
            enum DeviceType
            { Unknown = 0, Handheld = 1, Console = 2, Desktop = 3 }
            enum AnisotropicFiltering
            { Disable = 0, Enable = 1, ForceEnable = 2 }
            enum FilterMode
            { Point = 0, Bilinear = 1, Trilinear = 2 }
            enum TextureWrapMode
            { Repeat = 0, Clamp = 1 }
            class Color extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public r : number
                public g : number
                public b : number
                public a : number
                public static get red(): UnityEngine.Color;
                public static get green(): UnityEngine.Color;
                public static get blue(): UnityEngine.Color;
                public static get white(): UnityEngine.Color;
                public static get black(): UnityEngine.Color;
                public static get yellow(): UnityEngine.Color;
                public static get cyan(): UnityEngine.Color;
                public static get magenta(): UnityEngine.Color;
                public static get gray(): UnityEngine.Color;
                public static get grey(): UnityEngine.Color;
                public static get clear(): UnityEngine.Color;
                public get grayscale(): number;
                public get linear(): UnityEngine.Color;
                public get gamma(): UnityEngine.Color;
                public get maxColorComponent(): number;
                public ToString () : string
                public ToString ($format: string) : string
                public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
                public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
                public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
                public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
                public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
                public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
                public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
                public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
                public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
                public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
                public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
                public constructor ($r: number, $g: number, $b: number, $a: number)
                public constructor ($r: number, $g: number, $b: number)
                public constructor ()
            }
            class Color32 extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public r : number
                public g : number
                public b : number
                public a : number
                public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Color32
                public static op_Implicit ($c: UnityEngine.Color32) : UnityEngine.Color
                public static Lerp ($a: UnityEngine.Color32, $b: UnityEngine.Color32, $t: number) : UnityEngine.Color32
                public static LerpUnclamped ($a: UnityEngine.Color32, $b: UnityEngine.Color32, $t: number) : UnityEngine.Color32
                public ToString () : string
                public ToString ($format: string) : string
                public constructor ($r: number, $g: number, $b: number, $a: number)
                public constructor ()
            }
            class Rect extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public static get zero(): UnityEngine.Rect;
                public get x(): number;
                public set x(value: number);
                public get y(): number;
                public set y(value: number);
                public get position(): UnityEngine.Vector2;
                public set position(value: UnityEngine.Vector2);
                public get center(): UnityEngine.Vector2;
                public set center(value: UnityEngine.Vector2);
                public get min(): UnityEngine.Vector2;
                public set min(value: UnityEngine.Vector2);
                public get max(): UnityEngine.Vector2;
                public set max(value: UnityEngine.Vector2);
                public get width(): number;
                public set width(value: number);
                public get height(): number;
                public set height(value: number);
                public get size(): UnityEngine.Vector2;
                public set size(value: UnityEngine.Vector2);
                public get xMin(): number;
                public set xMin(value: number);
                public get yMin(): number;
                public set yMin(value: number);
                public get xMax(): number;
                public set xMax(value: number);
                public get yMax(): number;
                public set yMax(value: number);
                public static MinMaxRect ($xmin: number, $ymin: number, $xmax: number, $ymax: number) : UnityEngine.Rect
                public Set ($x: number, $y: number, $width: number, $height: number) : void
                public Contains ($point: UnityEngine.Vector2) : boolean
                public Contains ($point: UnityEngine.Vector3) : boolean
                public Contains ($point: UnityEngine.Vector3, $allowInverse: boolean) : boolean
                public Overlaps ($other: UnityEngine.Rect) : boolean
                public Overlaps ($other: UnityEngine.Rect, $allowInverse: boolean) : boolean
                public static NormalizedToPoint ($rectangle: UnityEngine.Rect, $normalizedRectCoordinates: UnityEngine.Vector2) : UnityEngine.Vector2
                public static PointToNormalized ($rectangle: UnityEngine.Rect, $point: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Inequality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
                public static op_Equality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
                public ToString () : string
                public ToString ($format: string) : string
                public constructor ($x: number, $y: number, $width: number, $height: number)
                public constructor ($position: UnityEngine.Vector2, $size: UnityEngine.Vector2)
                public constructor ($source: UnityEngine.Rect)
                public constructor ()
            }
            class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                public get rect(): UnityEngine.Rect;
                public get anchorMin(): UnityEngine.Vector2;
                public set anchorMin(value: UnityEngine.Vector2);
                public get anchorMax(): UnityEngine.Vector2;
                public set anchorMax(value: UnityEngine.Vector2);
                public get anchoredPosition3D(): UnityEngine.Vector3;
                public set anchoredPosition3D(value: UnityEngine.Vector3);
                public get anchoredPosition(): UnityEngine.Vector2;
                public set anchoredPosition(value: UnityEngine.Vector2);
                public get sizeDelta(): UnityEngine.Vector2;
                public set sizeDelta(value: UnityEngine.Vector2);
                public get pivot(): UnityEngine.Vector2;
                public set pivot(value: UnityEngine.Vector2);
                public get offsetMin(): UnityEngine.Vector2;
                public set offsetMin(value: UnityEngine.Vector2);
                public get offsetMax(): UnityEngine.Vector2;
                public set offsetMax(value: UnityEngine.Vector2);
                public static add_reapplyDrivenProperties ($value: UnityEngine.RectTransform.ReapplyDrivenProperties) : void
                public static remove_reapplyDrivenProperties ($value: UnityEngine.RectTransform.ReapplyDrivenProperties) : void
                public GetLocalCorners ($fourCornersArray: System.Array$1<UnityEngine.Vector3>) : void
                public GetWorldCorners ($fourCornersArray: System.Array$1<UnityEngine.Vector3>) : void
                public SetInsetAndSizeFromParentEdge ($edge: UnityEngine.RectTransform.Edge, $inset: number, $size: number) : void
                public SetSizeWithCurrentAnchors ($axis: UnityEngine.RectTransform.Axis, $size: number) : void
                public constructor ()
            }
            class Vector4 extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Sprite extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get bounds(): UnityEngine.Bounds;
                public get rect(): UnityEngine.Rect;
                public get pixelsPerUnit(): number;
                public get texture(): UnityEngine.Texture2D;
                public get associatedAlphaSplitTexture(): UnityEngine.Texture2D;
                public get textureRect(): UnityEngine.Rect;
                public get textureRectOffset(): UnityEngine.Vector2;
                public get packed(): boolean;
                public get packingMode(): UnityEngine.SpritePackingMode;
                public get packingRotation(): UnityEngine.SpritePackingRotation;
                public get pivot(): UnityEngine.Vector2;
                public get border(): UnityEngine.Vector4;
                public get vertices(): System.Array$1<UnityEngine.Vector2>;
                public get triangles(): System.Array$1<number>;
                public get uv(): System.Array$1<UnityEngine.Vector2>;
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4) : UnityEngine.Sprite
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType) : UnityEngine.Sprite
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number) : UnityEngine.Sprite
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number) : UnityEngine.Sprite
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2) : UnityEngine.Sprite
                public OverrideGeometry ($vertices: System.Array$1<UnityEngine.Vector2>, $triangles: System.Array$1<number>) : void
                public constructor ()
            }
            enum SpriteMeshType
            { FullRect = 0, Tight = 1 }
            class Bounds extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum SpritePackingMode
            { Tight = 0, Rectangle = 1 }
            enum SpritePackingRotation
            { None = 0, Any = 15 }
            class TextGenerator extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class Font extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum TextAnchor
            { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
            enum HorizontalWrapMode
            { Wrap = 0, Overflow = 1 }
            enum VerticalWrapMode
            { Truncate = 0, Overflow = 1 }
            enum FontStyle
            { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
            class TextGenerationSettings extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Material extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get shader(): UnityEngine.Shader;
                public set shader(value: UnityEngine.Shader);
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get mainTexture(): UnityEngine.Texture;
                public set mainTexture(value: UnityEngine.Texture);
                public get mainTextureOffset(): UnityEngine.Vector2;
                public set mainTextureOffset(value: UnityEngine.Vector2);
                public get mainTextureScale(): UnityEngine.Vector2;
                public set mainTextureScale(value: UnityEngine.Vector2);
                public get passCount(): number;
                public get renderQueue(): number;
                public set renderQueue(value: number);
                public get shaderKeywords(): System.Array$1<string>;
                public set shaderKeywords(value: System.Array$1<string>);
                public get globalIlluminationFlags(): UnityEngine.MaterialGlobalIlluminationFlags;
                public set globalIlluminationFlags(value: UnityEngine.MaterialGlobalIlluminationFlags);
                public get enableInstancing(): boolean;
                public set enableInstancing(value: boolean);
                public get doubleSidedGI(): boolean;
                public set doubleSidedGI(value: boolean);
                public HasProperty ($propertyName: string) : boolean
                public HasProperty ($nameID: number) : boolean
                public GetTag ($tag: string, $searchFallbacks: boolean, $defaultValue: string) : string
                public GetTag ($tag: string, $searchFallbacks: boolean) : string
                public SetOverrideTag ($tag: string, $val: string) : void
                public SetShaderPassEnabled ($passName: string, $enabled: boolean) : void
                public GetShaderPassEnabled ($passName: string) : boolean
                public Lerp ($start: UnityEngine.Material, $end: UnityEngine.Material, $t: number) : void
                public SetPass ($pass: number) : boolean
                public GetPassName ($pass: number) : string
                public FindPass ($passName: string) : number
                public CopyPropertiesFromMaterial ($mat: UnityEngine.Material) : void
                public EnableKeyword ($keyword: string) : void
                public DisableKeyword ($keyword: string) : void
                public IsKeywordEnabled ($keyword: string) : boolean
                public SetFloat ($name: string, $value: number) : void
                public SetFloat ($nameID: number, $value: number) : void
                public SetInt ($name: string, $value: number) : void
                public SetInt ($nameID: number, $value: number) : void
                public SetColor ($name: string, $value: UnityEngine.Color) : void
                public SetColor ($nameID: number, $value: UnityEngine.Color) : void
                public SetVector ($name: string, $value: UnityEngine.Vector4) : void
                public SetVector ($nameID: number, $value: UnityEngine.Vector4) : void
                public SetMatrix ($name: string, $value: UnityEngine.Matrix4x4) : void
                public SetMatrix ($nameID: number, $value: UnityEngine.Matrix4x4) : void
                public SetTexture ($name: string, $value: UnityEngine.Texture) : void
                public SetTexture ($nameID: number, $value: UnityEngine.Texture) : void
                public SetBuffer ($name: string, $value: UnityEngine.ComputeBuffer) : void
                public SetBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer) : void
                public SetTextureOffset ($name: string, $value: UnityEngine.Vector2) : void
                public SetTextureOffset ($nameID: number, $value: UnityEngine.Vector2) : void
                public SetTextureScale ($name: string, $value: UnityEngine.Vector2) : void
                public SetTextureScale ($nameID: number, $value: UnityEngine.Vector2) : void
                public SetFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public SetFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                public SetFloatArray ($name: string, $values: System.Array$1<number>) : void
                public SetFloatArray ($nameID: number, $values: System.Array$1<number>) : void
                public SetColorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public SetColorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public SetColorArray ($name: string, $values: System.Array$1<UnityEngine.Color>) : void
                public SetColorArray ($nameID: number, $values: System.Array$1<UnityEngine.Color>) : void
                public SetVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public SetVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public SetVectorArray ($name: string, $values: System.Array$1<UnityEngine.Vector4>) : void
                public SetVectorArray ($nameID: number, $values: System.Array$1<UnityEngine.Vector4>) : void
                public SetMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public SetMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public SetMatrixArray ($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                public SetMatrixArray ($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                public GetFloat ($name: string) : number
                public GetFloat ($nameID: number) : number
                public GetInt ($name: string) : number
                public GetInt ($nameID: number) : number
                public GetColor ($name: string) : UnityEngine.Color
                public GetColor ($nameID: number) : UnityEngine.Color
                public GetVector ($name: string) : UnityEngine.Vector4
                public GetVector ($nameID: number) : UnityEngine.Vector4
                public GetMatrix ($name: string) : UnityEngine.Matrix4x4
                public GetMatrix ($nameID: number) : UnityEngine.Matrix4x4
                public GetFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public GetFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                public GetFloatArray ($name: string) : System.Array$1<number>
                public GetFloatArray ($nameID: number) : System.Array$1<number>
                public GetVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public GetVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public GetColorArray ($name: string) : System.Array$1<UnityEngine.Color>
                public GetColorArray ($nameID: number) : System.Array$1<UnityEngine.Color>
                public GetColorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public GetColorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public GetVectorArray ($name: string) : System.Array$1<UnityEngine.Vector4>
                public GetVectorArray ($nameID: number) : System.Array$1<UnityEngine.Vector4>
                public GetMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public GetMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public GetMatrixArray ($name: string) : System.Array$1<UnityEngine.Matrix4x4>
                public GetMatrixArray ($nameID: number) : System.Array$1<UnityEngine.Matrix4x4>
                public GetTexture ($name: string) : UnityEngine.Texture
                public GetTexture ($nameID: number) : UnityEngine.Texture
                public GetTextureOffset ($name: string) : UnityEngine.Vector2
                public GetTextureOffset ($nameID: number) : UnityEngine.Vector2
                public GetTextureScale ($name: string) : UnityEngine.Vector2
                public GetTextureScale ($nameID: number) : UnityEngine.Vector2
                public constructor ($shader: UnityEngine.Shader)
                public constructor ($source: UnityEngine.Material)
                public constructor ()
            }
            class Camera extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                public static onPreCull : UnityEngine.Camera.CameraCallback
                public static onPreRender : UnityEngine.Camera.CameraCallback
                public static onPostRender : UnityEngine.Camera.CameraCallback
                public get fieldOfView(): number;
                public set fieldOfView(value: number);
                public get nearClipPlane(): number;
                public set nearClipPlane(value: number);
                public get farClipPlane(): number;
                public set farClipPlane(value: number);
                public get renderingPath(): UnityEngine.RenderingPath;
                public set renderingPath(value: UnityEngine.RenderingPath);
                public get actualRenderingPath(): UnityEngine.RenderingPath;
                public get allowHDR(): boolean;
                public set allowHDR(value: boolean);
                public get forceIntoRenderTexture(): boolean;
                public set forceIntoRenderTexture(value: boolean);
                public get allowMSAA(): boolean;
                public set allowMSAA(value: boolean);
                public get orthographicSize(): number;
                public set orthographicSize(value: number);
                public get orthographic(): boolean;
                public set orthographic(value: boolean);
                public get opaqueSortMode(): UnityEngine.Rendering.OpaqueSortMode;
                public set opaqueSortMode(value: UnityEngine.Rendering.OpaqueSortMode);
                public get transparencySortMode(): UnityEngine.TransparencySortMode;
                public set transparencySortMode(value: UnityEngine.TransparencySortMode);
                public get transparencySortAxis(): UnityEngine.Vector3;
                public set transparencySortAxis(value: UnityEngine.Vector3);
                public get activeRTFlags(): number;
                public set activeRTFlags(value: number);
                public get depth(): number;
                public set depth(value: number);
                public get aspect(): number;
                public set aspect(value: number);
                public get cullingMask(): number;
                public set cullingMask(value: number);
                public get eventMask(): number;
                public set eventMask(value: number);
                public get backgroundColor(): UnityEngine.Color;
                public set backgroundColor(value: UnityEngine.Color);
                public get rect(): UnityEngine.Rect;
                public set rect(value: UnityEngine.Rect);
                public get pixelRect(): UnityEngine.Rect;
                public set pixelRect(value: UnityEngine.Rect);
                public get targetTexture(): UnityEngine.RenderTexture;
                public set targetTexture(value: UnityEngine.RenderTexture);
                public get activeTexture(): UnityEngine.RenderTexture;
                public get pixelWidth(): number;
                public get pixelHeight(): number;
                public get cameraToWorldMatrix(): UnityEngine.Matrix4x4;
                public get worldToCameraMatrix(): UnityEngine.Matrix4x4;
                public set worldToCameraMatrix(value: UnityEngine.Matrix4x4);
                public get projectionMatrix(): UnityEngine.Matrix4x4;
                public set projectionMatrix(value: UnityEngine.Matrix4x4);
                public get nonJitteredProjectionMatrix(): UnityEngine.Matrix4x4;
                public set nonJitteredProjectionMatrix(value: UnityEngine.Matrix4x4);
                public get useJitteredProjectionMatrixForTransparentRendering(): boolean;
                public set useJitteredProjectionMatrixForTransparentRendering(value: boolean);
                public get velocity(): UnityEngine.Vector3;
                public get clearFlags(): UnityEngine.CameraClearFlags;
                public set clearFlags(value: UnityEngine.CameraClearFlags);
                public get stereoEnabled(): boolean;
                public get stereoSeparation(): number;
                public set stereoSeparation(value: number);
                public get stereoConvergence(): number;
                public set stereoConvergence(value: number);
                public get cameraType(): UnityEngine.CameraType;
                public set cameraType(value: UnityEngine.CameraType);
                public get stereoMirrorMode(): boolean;
                public set stereoMirrorMode(value: boolean);
                public get stereoTargetEye(): UnityEngine.StereoTargetEyeMask;
                public set stereoTargetEye(value: UnityEngine.StereoTargetEyeMask);
                public get stereoActiveEye(): UnityEngine.Camera.MonoOrStereoscopicEye;
                public get targetDisplay(): number;
                public set targetDisplay(value: number);
                public static get main(): UnityEngine.Camera;
                public static get current(): UnityEngine.Camera;
                public static get allCameras(): System.Array$1<UnityEngine.Camera>;
                public static get allCamerasCount(): number;
                public get useOcclusionCulling(): boolean;
                public set useOcclusionCulling(value: boolean);
                public get cullingMatrix(): UnityEngine.Matrix4x4;
                public set cullingMatrix(value: UnityEngine.Matrix4x4);
                public get layerCullDistances(): System.Array$1<number>;
                public set layerCullDistances(value: System.Array$1<number>);
                public get layerCullSpherical(): boolean;
                public set layerCullSpherical(value: boolean);
                public get depthTextureMode(): UnityEngine.DepthTextureMode;
                public set depthTextureMode(value: UnityEngine.DepthTextureMode);
                public get clearStencilAfterLightingPass(): boolean;
                public set clearStencilAfterLightingPass(value: boolean);
                public get commandBufferCount(): number;
                public get costCull(): number;
                public get costDraw(): number;
                public get costRenderOpaqueGeometry(): number;
                public get costRenderTransparentGeometry(): number;
                public SetTargetBuffers ($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer) : void
                public SetTargetBuffers ($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer, $action: number) : void
                public SetTargetBuffers ($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer) : void
                public SetTargetBuffers ($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer, $action: number) : void
                public ResetWorldToCameraMatrix () : void
                public ResetProjectionMatrix () : void
                public ResetAspect () : void
                public GetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
                public SetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
                public ResetStereoViewMatrices () : void
                public GetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
                public SetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
                public CalculateFrustumCorners ($viewport: UnityEngine.Rect, $z: number, $eye: UnityEngine.Camera.MonoOrStereoscopicEye, $outCorners: System.Array$1<UnityEngine.Vector3>) : void
                public ResetStereoProjectionMatrices () : void
                public ResetTransparencySortSettings () : void
                public WorldToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public WorldToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public ViewportToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public ScreenToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public ScreenToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public ViewportToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public ViewportPointToRay ($position: UnityEngine.Vector3) : UnityEngine.Ray
                public ScreenPointToRay ($position: UnityEngine.Vector3) : UnityEngine.Ray
                public static GetAllCameras ($cameras: System.Array$1<UnityEngine.Camera>) : number
                public Render () : void
                public RenderWithShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
                public SetReplacementShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
                public ResetReplacementShader () : void
                public ResetCullingMatrix () : void
                public RenderDontRestore () : void
                public static SetupCurrent ($cur: UnityEngine.Camera) : void
                public RenderToCubemap ($cubemap: UnityEngine.Cubemap) : boolean
                public RenderToCubemap ($cubemap: UnityEngine.Cubemap, $faceMask: number) : boolean
                public RenderToCubemap ($cubemap: UnityEngine.RenderTexture) : boolean
                public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number) : boolean
                public CopyFrom ($other: UnityEngine.Camera) : void
                public AddCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
                public RemoveCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
                public RemoveCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : void
                public RemoveAllCommandBuffers () : void
                public GetCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
                public CalculateObliqueMatrix ($clipPlane: UnityEngine.Vector4) : UnityEngine.Matrix4x4
                public constructor ()
            }
            class Animator extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                public get isOptimizable(): boolean;
                public get isHuman(): boolean;
                public get hasRootMotion(): boolean;
                public get humanScale(): number;
                public get isInitialized(): boolean;
                public get deltaPosition(): UnityEngine.Vector3;
                public get deltaRotation(): UnityEngine.Quaternion;
                public get velocity(): UnityEngine.Vector3;
                public get angularVelocity(): UnityEngine.Vector3;
                public get rootPosition(): UnityEngine.Vector3;
                public set rootPosition(value: UnityEngine.Vector3);
                public get rootRotation(): UnityEngine.Quaternion;
                public set rootRotation(value: UnityEngine.Quaternion);
                public get applyRootMotion(): boolean;
                public set applyRootMotion(value: boolean);
                public get linearVelocityBlending(): boolean;
                public set linearVelocityBlending(value: boolean);
                public get updateMode(): UnityEngine.AnimatorUpdateMode;
                public set updateMode(value: UnityEngine.AnimatorUpdateMode);
                public get hasTransformHierarchy(): boolean;
                public get gravityWeight(): number;
                public get bodyPosition(): UnityEngine.Vector3;
                public set bodyPosition(value: UnityEngine.Vector3);
                public get bodyRotation(): UnityEngine.Quaternion;
                public set bodyRotation(value: UnityEngine.Quaternion);
                public get stabilizeFeet(): boolean;
                public set stabilizeFeet(value: boolean);
                public get layerCount(): number;
                public get parameters(): System.Array$1<UnityEngine.AnimatorControllerParameter>;
                public get parameterCount(): number;
                public get feetPivotActive(): number;
                public set feetPivotActive(value: number);
                public get pivotWeight(): number;
                public get pivotPosition(): UnityEngine.Vector3;
                public get isMatchingTarget(): boolean;
                public get speed(): number;
                public set speed(value: number);
                public get targetPosition(): UnityEngine.Vector3;
                public get targetRotation(): UnityEngine.Quaternion;
                public get cullingMode(): UnityEngine.AnimatorCullingMode;
                public set cullingMode(value: UnityEngine.AnimatorCullingMode);
                public get playbackTime(): number;
                public set playbackTime(value: number);
                public get recorderStartTime(): number;
                public set recorderStartTime(value: number);
                public get recorderStopTime(): number;
                public set recorderStopTime(value: number);
                public get recorderMode(): UnityEngine.AnimatorRecorderMode;
                public get runtimeAnimatorController(): UnityEngine.RuntimeAnimatorController;
                public set runtimeAnimatorController(value: UnityEngine.RuntimeAnimatorController);
                public get hasBoundPlayables(): boolean;
                public get avatar(): UnityEngine.Avatar;
                public set avatar(value: UnityEngine.Avatar);
                public get playableGraph(): UnityEngine.Experimental.Director.PlayableGraph;
                public get layersAffectMassCenter(): boolean;
                public set layersAffectMassCenter(value: boolean);
                public get leftFeetBottomHeight(): number;
                public get rightFeetBottomHeight(): number;
                public get logWarnings(): boolean;
                public set logWarnings(value: boolean);
                public get fireEvents(): boolean;
                public set fireEvents(value: boolean);
                public GetFloat ($name: string) : number
                public GetFloat ($id: number) : number
                public SetFloat ($name: string, $value: number) : void
                public SetFloat ($name: string, $value: number, $dampTime: number, $deltaTime: number) : void
                public SetFloat ($id: number, $value: number) : void
                public SetFloat ($id: number, $value: number, $dampTime: number, $deltaTime: number) : void
                public GetBool ($name: string) : boolean
                public GetBool ($id: number) : boolean
                public SetBool ($name: string, $value: boolean) : void
                public SetBool ($id: number, $value: boolean) : void
                public GetInteger ($name: string) : number
                public GetInteger ($id: number) : number
                public SetInteger ($name: string, $value: number) : void
                public SetInteger ($id: number, $value: number) : void
                public SetTrigger ($name: string) : void
                public SetTrigger ($id: number) : void
                public ResetTrigger ($name: string) : void
                public ResetTrigger ($id: number) : void
                public IsParameterControlledByCurve ($name: string) : boolean
                public IsParameterControlledByCurve ($id: number) : boolean
                public GetIKPosition ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Vector3
                public SetIKPosition ($goal: UnityEngine.AvatarIKGoal, $goalPosition: UnityEngine.Vector3) : void
                public GetIKRotation ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Quaternion
                public SetIKRotation ($goal: UnityEngine.AvatarIKGoal, $goalRotation: UnityEngine.Quaternion) : void
                public GetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal) : number
                public SetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
                public GetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal) : number
                public SetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
                public GetIKHintPosition ($hint: UnityEngine.AvatarIKHint) : UnityEngine.Vector3
                public SetIKHintPosition ($hint: UnityEngine.AvatarIKHint, $hintPosition: UnityEngine.Vector3) : void
                public GetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint) : number
                public SetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint, $value: number) : void
                public SetLookAtPosition ($lookAtPosition: UnityEngine.Vector3) : void
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number) : void
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number) : void
                public SetLookAtWeight ($weight: number, $bodyWeight: number) : void
                public SetLookAtWeight ($weight: number) : void
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number, $clampWeight: number) : void
                public SetBoneLocalRotation ($humanBoneId: UnityEngine.HumanBodyBones, $rotation: UnityEngine.Quaternion) : void
                public GetLayerName ($layerIndex: number) : string
                public GetLayerIndex ($layerName: string) : number
                public GetLayerWeight ($layerIndex: number) : number
                public SetLayerWeight ($layerIndex: number, $weight: number) : void
                public GetCurrentAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
                public GetNextAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
                public GetAnimatorTransitionInfo ($layerIndex: number) : UnityEngine.AnimatorTransitionInfo
                public GetCurrentAnimatorClipInfoCount ($layerIndex: number) : number
                public GetCurrentAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
                public GetCurrentAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
                public GetNextAnimatorClipInfoCount ($layerIndex: number) : number
                public GetNextAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
                public GetNextAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
                public IsInTransition ($layerIndex: number) : boolean
                public GetParameter ($index: number) : UnityEngine.AnimatorControllerParameter
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number) : void
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number) : void
                public InterruptMatchTarget ($completeMatch: boolean) : void
                public InterruptMatchTarget () : void
                public CrossFadeInFixedTime ($stateName: string, $transitionDuration: number, $layer: number) : void
                public CrossFadeInFixedTime ($stateName: string, $transitionDuration: number) : void
                public CrossFadeInFixedTime ($stateName: string, $transitionDuration: number, $layer: number, $fixedTime: number) : void
                public CrossFadeInFixedTime ($stateNameHash: number, $transitionDuration: number, $layer: number, $fixedTime: number) : void
                public CrossFadeInFixedTime ($stateNameHash: number, $transitionDuration: number, $layer: number) : void
                public CrossFadeInFixedTime ($stateNameHash: number, $transitionDuration: number) : void
                public CrossFade ($stateName: string, $transitionDuration: number, $layer: number) : void
                public CrossFade ($stateName: string, $transitionDuration: number) : void
                public CrossFade ($stateName: string, $transitionDuration: number, $layer: number, $normalizedTime: number) : void
                public CrossFade ($stateNameHash: number, $transitionDuration: number, $layer: number, $normalizedTime: number) : void
                public CrossFade ($stateNameHash: number, $transitionDuration: number, $layer: number) : void
                public CrossFade ($stateNameHash: number, $transitionDuration: number) : void
                public PlayInFixedTime ($stateName: string, $layer: number) : void
                public PlayInFixedTime ($stateName: string) : void
                public PlayInFixedTime ($stateName: string, $layer: number, $fixedTime: number) : void
                public PlayInFixedTime ($stateNameHash: number, $layer: number, $fixedTime: number) : void
                public PlayInFixedTime ($stateNameHash: number, $layer: number) : void
                public PlayInFixedTime ($stateNameHash: number) : void
                public Play ($stateName: string, $layer: number) : void
                public Play ($stateName: string) : void
                public Play ($stateName: string, $layer: number, $normalizedTime: number) : void
                public Play ($stateNameHash: number, $layer: number, $normalizedTime: number) : void
                public Play ($stateNameHash: number, $layer: number) : void
                public Play ($stateNameHash: number) : void
                public SetTarget ($targetIndex: UnityEngine.AvatarTarget, $targetNormalizedTime: number) : void
                public GetBoneTransform ($humanBoneId: UnityEngine.HumanBodyBones) : UnityEngine.Transform
                public StartPlayback () : void
                public StopPlayback () : void
                public StartRecording ($frameCount: number) : void
                public StopRecording () : void
                public HasState ($layerIndex: number, $stateID: number) : boolean
                public static StringToHash ($name: string) : number
                public Update ($deltaTime: number) : void
                public Rebind () : void
                public ApplyBuiltinRootMotion () : void
                public constructor ()
            }
            enum TouchScreenKeyboardType
            { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8 }
            class Event extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get mousePosition(): UnityEngine.Vector2;
                public set mousePosition(value: UnityEngine.Vector2);
                public get delta(): UnityEngine.Vector2;
                public set delta(value: UnityEngine.Vector2);
                public get shift(): boolean;
                public set shift(value: boolean);
                public get control(): boolean;
                public set control(value: boolean);
                public get alt(): boolean;
                public set alt(value: boolean);
                public get command(): boolean;
                public set command(value: boolean);
                public get capsLock(): boolean;
                public set capsLock(value: boolean);
                public get numeric(): boolean;
                public set numeric(value: boolean);
                public get functionKey(): boolean;
                public static get current(): UnityEngine.Event;
                public static set current(value: UnityEngine.Event);
                public get isKey(): boolean;
                public get isMouse(): boolean;
                public get isScrollWheel(): boolean;
                public get rawType(): UnityEngine.EventType;
                public get type(): UnityEngine.EventType;
                public set type(value: UnityEngine.EventType);
                public get button(): number;
                public set button(value: number);
                public get modifiers(): UnityEngine.EventModifiers;
                public set modifiers(value: UnityEngine.EventModifiers);
                public get pressure(): number;
                public set pressure(value: number);
                public get clickCount(): number;
                public set clickCount(value: number);
                public get character(): number;
                public set character(value: number);
                public get commandName(): string;
                public set commandName(value: string);
                public get keyCode(): UnityEngine.KeyCode;
                public set keyCode(value: UnityEngine.KeyCode);
                public get displayIndex(): number;
                public set displayIndex(value: number);
                public static KeyboardEvent ($key: string) : UnityEngine.Event
                public Use () : void
                public GetTypeForControl ($controlID: number) : UnityEngine.EventType
                public static PopEvent ($outEvent: UnityEngine.Event) : boolean
                public static GetEventCount () : number
                public constructor ()
                public constructor ($displayIndex: number)
                public constructor ($other: UnityEngine.Event)
            }
            class RectOffset extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Animation extends UnityEngine.Behaviour implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                public get clip(): UnityEngine.AnimationClip;
                public set clip(value: UnityEngine.AnimationClip);
                public get playAutomatically(): boolean;
                public set playAutomatically(value: boolean);
                public get wrapMode(): UnityEngine.WrapMode;
                public set wrapMode(value: UnityEngine.WrapMode);
                public get isPlaying(): boolean;
                public get animatePhysics(): boolean;
                public set animatePhysics(value: boolean);
                public get cullingType(): UnityEngine.AnimationCullingType;
                public set cullingType(value: UnityEngine.AnimationCullingType);
                public get localBounds(): UnityEngine.Bounds;
                public set localBounds(value: UnityEngine.Bounds);
                public Stop () : void
                public Stop ($name: string) : void
                public Rewind ($name: string) : void
                public Rewind () : void
                public Sample () : void
                public IsPlaying ($name: string) : boolean
                public get_Item ($name: string) : UnityEngine.AnimationState
                public Play () : boolean
                public Play ($mode: UnityEngine.PlayMode) : boolean
                public Play ($animation: string, $mode: UnityEngine.PlayMode) : boolean
                public Play ($animation: string) : boolean
                public CrossFade ($animation: string, $fadeLength: number, $mode: UnityEngine.PlayMode) : void
                public CrossFade ($animation: string, $fadeLength: number) : void
                public CrossFade ($animation: string) : void
                public Blend ($animation: string, $targetWeight: number, $fadeLength: number) : void
                public Blend ($animation: string, $targetWeight: number) : void
                public Blend ($animation: string) : void
                public CrossFadeQueued ($animation: string, $fadeLength: number, $queue: UnityEngine.QueueMode, $mode: UnityEngine.PlayMode) : UnityEngine.AnimationState
                public CrossFadeQueued ($animation: string, $fadeLength: number, $queue: UnityEngine.QueueMode) : UnityEngine.AnimationState
                public CrossFadeQueued ($animation: string, $fadeLength: number) : UnityEngine.AnimationState
                public CrossFadeQueued ($animation: string) : UnityEngine.AnimationState
                public PlayQueued ($animation: string, $queue: UnityEngine.QueueMode, $mode: UnityEngine.PlayMode) : UnityEngine.AnimationState
                public PlayQueued ($animation: string, $queue: UnityEngine.QueueMode) : UnityEngine.AnimationState
                public PlayQueued ($animation: string) : UnityEngine.AnimationState
                public AddClip ($clip: UnityEngine.AnimationClip, $newName: string) : void
                public AddClip ($clip: UnityEngine.AnimationClip, $newName: string, $firstFrame: number, $lastFrame: number, $addLoopFrame: boolean) : void
                public AddClip ($clip: UnityEngine.AnimationClip, $newName: string, $firstFrame: number, $lastFrame: number) : void
                public RemoveClip ($clip: UnityEngine.AnimationClip) : void
                public RemoveClip ($clipName: string) : void
                public GetClipCount () : number
                public SyncLayer ($layer: number) : void
                public GetEnumerator () : System.Collections.IEnumerator
                public GetClip ($name: string) : UnityEngine.AnimationClip
                public constructor ()
            }
            class Motion extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimationClip extends UnityEngine.Motion
            {
                protected [__keep_incompatibility]: never;
            }
            enum WrapMode
            { Once = 1, Loop = 2, PingPong = 4, Default = 0, ClampForever = 8, Clamp = 1 }
            class TrackedReference extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimationState extends UnityEngine.TrackedReference
            {
                protected [__keep_incompatibility]: never;
            }
            enum PlayMode
            { StopSameLayer = 0, StopAll = 4 }
            enum QueueMode
            { CompleteOthers = 0, PlayNow = 2 }
            enum AnimationPlayMode
            { Stop = 0, Queue = 1, Mix = 2 }
            enum AnimationCullingType
            { AlwaysAnimate = 0, BasedOnRenderers = 1, BasedOnClipBounds = 2, BasedOnUserBounds = 3 }
            class AnimationInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum AnimatorUpdateMode
            { Normal = 0, AnimatePhysics = 1, UnscaledTime = 2 }
            enum AvatarIKGoal
            { LeftFoot = 0, RightFoot = 1, LeftHand = 2, RightHand = 3 }
            enum AvatarIKHint
            { LeftKnee = 0, RightKnee = 1, LeftElbow = 2, RightElbow = 3 }
            enum HumanBodyBones
            { Hips = 0, LeftUpperLeg = 1, RightUpperLeg = 2, LeftLowerLeg = 3, RightLowerLeg = 4, LeftFoot = 5, RightFoot = 6, Spine = 7, Chest = 8, UpperChest = 54, Neck = 9, Head = 10, LeftShoulder = 11, RightShoulder = 12, LeftUpperArm = 13, RightUpperArm = 14, LeftLowerArm = 15, RightLowerArm = 16, LeftHand = 17, RightHand = 18, LeftToes = 19, RightToes = 20, LeftEye = 21, RightEye = 22, Jaw = 23, LeftThumbProximal = 24, LeftThumbIntermediate = 25, LeftThumbDistal = 26, LeftIndexProximal = 27, LeftIndexIntermediate = 28, LeftIndexDistal = 29, LeftMiddleProximal = 30, LeftMiddleIntermediate = 31, LeftMiddleDistal = 32, LeftRingProximal = 33, LeftRingIntermediate = 34, LeftRingDistal = 35, LeftLittleProximal = 36, LeftLittleIntermediate = 37, LeftLittleDistal = 38, RightThumbProximal = 39, RightThumbIntermediate = 40, RightThumbDistal = 41, RightIndexProximal = 42, RightIndexIntermediate = 43, RightIndexDistal = 44, RightMiddleProximal = 45, RightMiddleIntermediate = 46, RightMiddleDistal = 47, RightRingProximal = 48, RightRingIntermediate = 49, RightRingDistal = 50, RightLittleProximal = 51, RightLittleIntermediate = 52, RightLittleDistal = 53, LastBone = 55 }
            class ScriptableObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class StateMachineBehaviour extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimatorStateInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimatorTransitionInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimatorClipInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimatorControllerParameter extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum AvatarTarget
            { Root = 0, Body = 1, LeftFoot = 2, RightFoot = 3, LeftHand = 4, RightHand = 5 }
            class MatchTargetWeightMask extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum AnimatorCullingMode
            { AlwaysAnimate = 0, CullUpdateTransforms = 1, CullCompletely = 2, BasedOnRenderers = 1 }
            enum AnimatorRecorderMode
            { Offline = 0, Playback = 1, Record = 2 }
            class RuntimeAnimatorController extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Avatar extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class AssetBundle extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get mainAsset(): UnityEngine.Object;
                public get isStreamedSceneAssetBundle(): boolean;
                public static LoadFromFileAsync ($path: string, $crc: number, $offset: bigint) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromFileAsync ($path: string, $crc: number) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromFileAsync ($path: string) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromFile ($path: string, $crc: number, $offset: bigint) : UnityEngine.AssetBundle
                public static LoadFromFile ($path: string, $crc: number) : UnityEngine.AssetBundle
                public static LoadFromFile ($path: string) : UnityEngine.AssetBundle
                public static LoadFromMemoryAsync ($binary: System.Array$1<number>, $crc: number) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromMemoryAsync ($binary: System.Array$1<number>) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromMemory ($binary: System.Array$1<number>, $crc: number) : UnityEngine.AssetBundle
                public static LoadFromMemory ($binary: System.Array$1<number>) : UnityEngine.AssetBundle
                public Contains ($name: string) : boolean
                public LoadAsset ($name: string) : UnityEngine.Object
                public LoadAsset ($name: string, $type: System.Type) : UnityEngine.Object
                public LoadAssetAsync ($name: string) : UnityEngine.AssetBundleRequest
                public LoadAssetAsync ($name: string, $type: System.Type) : UnityEngine.AssetBundleRequest
                public LoadAssetWithSubAssets ($name: string) : System.Array$1<UnityEngine.Object>
                public LoadAssetWithSubAssets ($name: string, $type: System.Type) : System.Array$1<UnityEngine.Object>
                public LoadAssetWithSubAssetsAsync ($name: string) : UnityEngine.AssetBundleRequest
                public LoadAssetWithSubAssetsAsync ($name: string, $type: System.Type) : UnityEngine.AssetBundleRequest
                public LoadAllAssets () : System.Array$1<UnityEngine.Object>
                public LoadAllAssets ($type: System.Type) : System.Array$1<UnityEngine.Object>
                public LoadAllAssetsAsync () : UnityEngine.AssetBundleRequest
                public LoadAllAssetsAsync ($type: System.Type) : UnityEngine.AssetBundleRequest
                public Unload ($unloadAllLoadedObjects: boolean) : void
                public GetAllAssetNames () : System.Array$1<string>
                public GetAllScenePaths () : System.Array$1<string>
                public constructor ()
            }
            class YieldInstruction extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class AsyncOperation extends UnityEngine.YieldInstruction
            {
                protected [__keep_incompatibility]: never;
            }
            class AssetBundleCreateRequest extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            class AssetBundleRequest extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            class Collider extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            class BoxCollider extends UnityEngine.Collider
            {
                protected [__keep_incompatibility]: never;
                public get center(): UnityEngine.Vector3;
                public set center(value: UnityEngine.Vector3);
                public get size(): UnityEngine.Vector3;
                public set size(value: UnityEngine.Vector3);
                public constructor ()
            }
            class Collider2D extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class BoxCollider2D extends UnityEngine.Collider2D
            {
                protected [__keep_incompatibility]: never;
                public get size(): UnityEngine.Vector2;
                public set size(value: UnityEngine.Vector2);
                public get edgeRadius(): number;
                public set edgeRadius(value: number);
                public get autoTiling(): boolean;
                public set autoTiling(value: boolean);
                public constructor ()
            }
            class ColorUtility extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static TryParseHtmlString ($htmlString: string, $color: $Ref<UnityEngine.Color>) : boolean
                public static ToHtmlStringRGB ($color: UnityEngine.Color) : string
                public static ToHtmlStringRGBA ($color: UnityEngine.Color) : string
                public constructor ()
            }
            class Canvas extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                public get renderMode(): UnityEngine.RenderMode;
                public set renderMode(value: UnityEngine.RenderMode);
                public get isRootCanvas(): boolean;
                public get worldCamera(): UnityEngine.Camera;
                public set worldCamera(value: UnityEngine.Camera);
                public get pixelRect(): UnityEngine.Rect;
                public get scaleFactor(): number;
                public set scaleFactor(value: number);
                public get referencePixelsPerUnit(): number;
                public set referencePixelsPerUnit(value: number);
                public get overridePixelPerfect(): boolean;
                public set overridePixelPerfect(value: boolean);
                public get pixelPerfect(): boolean;
                public set pixelPerfect(value: boolean);
                public get planeDistance(): number;
                public set planeDistance(value: number);
                public get renderOrder(): number;
                public get overrideSorting(): boolean;
                public set overrideSorting(value: boolean);
                public get sortingOrder(): number;
                public set sortingOrder(value: number);
                public get targetDisplay(): number;
                public set targetDisplay(value: number);
                public get normalizedSortingGridSize(): number;
                public set normalizedSortingGridSize(value: number);
                public get sortingLayerID(): number;
                public set sortingLayerID(value: number);
                public get cachedSortingLayerValue(): number;
                public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
                public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
                public get sortingLayerName(): string;
                public set sortingLayerName(value: string);
                public get rootCanvas(): UnityEngine.Canvas;
                public static GetDefaultCanvasMaterial () : UnityEngine.Material
                public static GetETC1SupportedCanvasMaterial () : UnityEngine.Material
                public static add_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static remove_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static ForceUpdateCanvases () : void
                public constructor ()
            }
            enum RenderMode
            { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
            enum AdditionalCanvasShaderChannels
            { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
            enum RenderingPath
            { UsePlayerSettings = -1, VertexLit = 0, Forward = 1, DeferredLighting = 2, DeferredShading = 3 }
            enum TransparencySortMode
            { Default = 0, Perspective = 1, Orthographic = 2, CustomAxis = 3 }
            class RenderTexture extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            class RenderBuffer extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public GetNativeRenderBufferPtr () : System.IntPtr
            }
            enum CameraClearFlags
            { Skybox = 1, Color = 2, SolidColor = 2, Depth = 3, Nothing = 4 }
            enum CameraType
            { Game = 1, SceneView = 2, Preview = 4, VR = 8 }
            enum StereoTargetEyeMask
            { None = 0, Left = 1, Right = 2, Both = 3 }
            class Ray extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Cubemap extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            enum DepthTextureMode
            { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
            class ComputeShader extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public FindKernel ($name: string) : number
                public HasKernel ($name: string) : boolean
                public GetKernelThreadGroupSizes ($kernelIndex: number, $x: $Ref<number>, $y: $Ref<number>, $z: $Ref<number>) : void
                public SetFloat ($name: string, $val: number) : void
                public SetFloat ($nameID: number, $val: number) : void
                public SetInt ($name: string, $val: number) : void
                public SetInt ($nameID: number, $val: number) : void
                public SetBool ($name: string, $val: boolean) : void
                public SetBool ($nameID: number, $val: boolean) : void
                public SetVector ($name: string, $val: UnityEngine.Vector4) : void
                public SetVector ($nameID: number, $val: UnityEngine.Vector4) : void
                public SetFloats ($name: string, ...values: number[]) : void
                public SetFloats ($nameID: number, ...values: number[]) : void
                public SetInts ($name: string, ...values: number[]) : void
                public SetInts ($nameID: number, ...values: number[]) : void
                public SetTexture ($kernelIndex: number, $name: string, $texture: UnityEngine.Texture) : void
                public SetTexture ($kernelIndex: number, $nameID: number, $texture: UnityEngine.Texture) : void
                public SetTextureFromGlobal ($kernelIndex: number, $name: string, $globalTextureName: string) : void
                public SetTextureFromGlobal ($kernelIndex: number, $nameID: number, $globalTextureNameID: number) : void
                public SetBuffer ($kernelIndex: number, $name: string, $buffer: UnityEngine.ComputeBuffer) : void
                public SetBuffer ($kernelIndex: number, $nameID: number, $buffer: UnityEngine.ComputeBuffer) : void
                public Dispatch ($kernelIndex: number, $threadGroupsX: number, $threadGroupsY: number, $threadGroupsZ: number) : void
                public DispatchIndirect ($kernelIndex: number, $argsBuffer: UnityEngine.ComputeBuffer) : void
                public DispatchIndirect ($kernelIndex: number, $argsBuffer: UnityEngine.ComputeBuffer, $argsOffset: number) : void
                public constructor ()
            }
            class ComputeBuffer extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum EventType
            { MouseDown = 0, MouseUp = 1, MouseMove = 2, MouseDrag = 3, KeyDown = 4, KeyUp = 5, ScrollWheel = 6, Repaint = 7, Layout = 8, DragUpdated = 9, DragPerform = 10, DragExited = 15, Ignore = 11, Used = 12, ValidateCommand = 13, ExecuteCommand = 14, ContextClick = 16, MouseEnterWindow = 20, MouseLeaveWindow = 21, mouseDown = 0, mouseUp = 1, mouseMove = 2, mouseDrag = 3, keyDown = 4, keyUp = 5, scrollWheel = 6, repaint = 7, layout = 8, dragUpdated = 9, dragPerform = 10, ignore = 11, used = 12 }
            enum EventModifiers
            { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
            enum KeyCode
            { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
            class EventProvider extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static WriteCustomEvent ($value: number, $text: string) : void
                public constructor ()
            }
            class Input extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get compensateSensors(): boolean;
                public static set compensateSensors(value: boolean);
                public static get gyro(): UnityEngine.Gyroscope;
                public static get mousePosition(): UnityEngine.Vector3;
                public static get mouseScrollDelta(): UnityEngine.Vector2;
                public static get mousePresent(): boolean;
                public static get simulateMouseWithTouches(): boolean;
                public static set simulateMouseWithTouches(value: boolean);
                public static get anyKey(): boolean;
                public static get anyKeyDown(): boolean;
                public static get inputString(): string;
                public static get acceleration(): UnityEngine.Vector3;
                public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
                public static get accelerationEventCount(): number;
                public static get touches(): System.Array$1<UnityEngine.Touch>;
                public static get touchCount(): number;
                public static get touchPressureSupported(): boolean;
                public static get stylusTouchSupported(): boolean;
                public static get touchSupported(): boolean;
                public static get multiTouchEnabled(): boolean;
                public static set multiTouchEnabled(value: boolean);
                public static get location(): UnityEngine.LocationService;
                public static get compass(): UnityEngine.Compass;
                public static get deviceOrientation(): UnityEngine.DeviceOrientation;
                public static get imeCompositionMode(): UnityEngine.IMECompositionMode;
                public static set imeCompositionMode(value: UnityEngine.IMECompositionMode);
                public static get compositionString(): string;
                public static get imeIsSelected(): boolean;
                public static get compositionCursorPos(): UnityEngine.Vector2;
                public static set compositionCursorPos(value: UnityEngine.Vector2);
                public static get backButtonLeavesApp(): boolean;
                public static set backButtonLeavesApp(value: boolean);
                public static GetAxis ($axisName: string) : number
                public static GetAxisRaw ($axisName: string) : number
                public static GetButton ($buttonName: string) : boolean
                public static GetButtonDown ($buttonName: string) : boolean
                public static GetButtonUp ($buttonName: string) : boolean
                public static GetKey ($name: string) : boolean
                public static GetKey ($key: UnityEngine.KeyCode) : boolean
                public static GetKeyDown ($name: string) : boolean
                public static GetKeyDown ($key: UnityEngine.KeyCode) : boolean
                public static GetKeyUp ($name: string) : boolean
                public static GetKeyUp ($key: UnityEngine.KeyCode) : boolean
                public static GetJoystickNames () : System.Array$1<string>
                public static IsJoystickPreconfigured ($joystickName: string) : boolean
                public static GetMouseButton ($button: number) : boolean
                public static GetMouseButtonDown ($button: number) : boolean
                public static GetMouseButtonUp ($button: number) : boolean
                public static ResetInputAxes () : void
                public static GetAccelerationEvent ($index: number) : UnityEngine.AccelerationEvent
                public static GetTouch ($index: number) : UnityEngine.Touch
                public constructor ()
            }
            class Gyroscope extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class AccelerationEvent extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Touch extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LocationService extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Compass extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum DeviceOrientation
            { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
            enum IMECompositionMode
            { Auto = 0, On = 1, Off = 2 }
            class Light extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                public get type(): UnityEngine.LightType;
                public set type(value: UnityEngine.LightType);
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get colorTemperature(): number;
                public set colorTemperature(value: number);
                public get intensity(): number;
                public set intensity(value: number);
                public get bounceIntensity(): number;
                public set bounceIntensity(value: number);
                public get shadows(): UnityEngine.LightShadows;
                public set shadows(value: UnityEngine.LightShadows);
                public get shadowStrength(): number;
                public set shadowStrength(value: number);
                public get shadowResolution(): UnityEngine.Rendering.LightShadowResolution;
                public set shadowResolution(value: UnityEngine.Rendering.LightShadowResolution);
                public get shadowCustomResolution(): number;
                public set shadowCustomResolution(value: number);
                public get shadowBias(): number;
                public set shadowBias(value: number);
                public get shadowNormalBias(): number;
                public set shadowNormalBias(value: number);
                public get shadowNearPlane(): number;
                public set shadowNearPlane(value: number);
                public get range(): number;
                public set range(value: number);
                public get spotAngle(): number;
                public set spotAngle(value: number);
                public get cookieSize(): number;
                public set cookieSize(value: number);
                public get cookie(): UnityEngine.Texture;
                public set cookie(value: UnityEngine.Texture);
                public get flare(): UnityEngine.Flare;
                public set flare(value: UnityEngine.Flare);
                public get renderMode(): UnityEngine.LightRenderMode;
                public set renderMode(value: UnityEngine.LightRenderMode);
                public get alreadyLightmapped(): boolean;
                public set alreadyLightmapped(value: boolean);
                public get isBaked(): boolean;
                public get cullingMask(): number;
                public set cullingMask(value: number);
                public get areaSize(): UnityEngine.Vector2;
                public set areaSize(value: UnityEngine.Vector2);
                public get lightmapBakeType(): UnityEngine.LightmapBakeType;
                public set lightmapBakeType(value: UnityEngine.LightmapBakeType);
                public get commandBufferCount(): number;
                public AddCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
                public AddCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $shadowPassMask: UnityEngine.Rendering.ShadowMapPass) : void
                public RemoveCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
                public RemoveCommandBuffers ($evt: UnityEngine.Rendering.LightEvent) : void
                public RemoveAllCommandBuffers () : void
                public GetCommandBuffers ($evt: UnityEngine.Rendering.LightEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
                public static GetLights ($type: UnityEngine.LightType, $layer: number) : System.Array$1<UnityEngine.Light>
                public constructor ()
            }
            enum LightType
            { Spot = 0, Directional = 1, Point = 2, Area = 3 }
            enum LightShadows
            { None = 0, Hard = 1, Soft = 2 }
            class Flare extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum LightRenderMode
            { Auto = 0, ForcePixel = 1, ForceVertex = 2 }
            enum LightmapBakeType
            { Realtime = 4, Baked = 2, Mixed = 1 }
            enum LightmappingMode
            { Realtime = 4, Baked = 2, Mixed = 1 }
            class LayerMask extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public get value(): number;
                public set value(value: number);
                public static op_Implicit ($mask: UnityEngine.LayerMask) : number
                public static op_Implicit ($intVal: number) : UnityEngine.LayerMask
                public static LayerToName ($layer: number) : string
                public static NameToLayer ($layerName: string) : number
                public static GetMask (...layerNames: string[]) : number
            }
            enum MaterialGlobalIlluminationFlags
            { None = 0, RealtimeEmissive = 1, BakedEmissive = 2, EmissiveIsBlack = 4, AnyEmissive = 3 }
            class Mathf extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public static PI : number
                public static Infinity : number
                public static NegativeInfinity : number
                public static Deg2Rad : number
                public static Rad2Deg : number
                public static Epsilon : number
                public static ClosestPowerOfTwo ($value: number) : number
                public static GammaToLinearSpace ($value: number) : number
                public static LinearToGammaSpace ($value: number) : number
                public static CorrelatedColorTemperatureToRGB ($kelvin: number) : UnityEngine.Color
                public static IsPowerOfTwo ($value: number) : boolean
                public static NextPowerOfTwo ($value: number) : number
                public static PerlinNoise ($x: number, $y: number) : number
                public static FloatToHalf ($val: number) : number
                public static HalfToFloat ($val: number) : number
                public static Sin ($f: number) : number
                public static Cos ($f: number) : number
                public static Tan ($f: number) : number
                public static Asin ($f: number) : number
                public static Acos ($f: number) : number
                public static Atan ($f: number) : number
                public static Atan2 ($y: number, $x: number) : number
                public static Sqrt ($f: number) : number
                public static Abs ($f: number) : number
                public static Abs ($value: number) : number
                public static Min ($a: number, $b: number) : number
                public static Min (...values: number[]) : number
                public static Max ($a: number, $b: number) : number
                public static Max (...values: number[]) : number
                public static Pow ($f: number, $p: number) : number
                public static Exp ($power: number) : number
                public static Log ($f: number, $p: number) : number
                public static Log ($f: number) : number
                public static Log10 ($f: number) : number
                public static Ceil ($f: number) : number
                public static Floor ($f: number) : number
                public static Round ($f: number) : number
                public static CeilToInt ($f: number) : number
                public static FloorToInt ($f: number) : number
                public static RoundToInt ($f: number) : number
                public static Sign ($f: number) : number
                public static Clamp ($value: number, $min: number, $max: number) : number
                public static Clamp01 ($value: number) : number
                public static Lerp ($a: number, $b: number, $t: number) : number
                public static LerpUnclamped ($a: number, $b: number, $t: number) : number
                public static LerpAngle ($a: number, $b: number, $t: number) : number
                public static MoveTowards ($current: number, $target: number, $maxDelta: number) : number
                public static MoveTowardsAngle ($current: number, $target: number, $maxDelta: number) : number
                public static SmoothStep ($from: number, $to: number, $t: number) : number
                public static Gamma ($value: number, $absmax: number, $gamma: number) : number
                public static Approximately ($a: number, $b: number) : boolean
                public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
                public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
                public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
                public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
                public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
                public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
                public static Repeat ($t: number, $length: number) : number
                public static PingPong ($t: number, $length: number) : number
                public static InverseLerp ($a: number, $b: number, $value: number) : number
                public static DeltaAngle ($current: number, $target: number) : number
            }
            class Mesh extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                public get isReadable(): boolean;
                public get blendShapeCount(): number;
                public get vertexBufferCount(): number;
                public get bounds(): UnityEngine.Bounds;
                public set bounds(value: UnityEngine.Bounds);
                public get vertexCount(): number;
                public get subMeshCount(): number;
                public set subMeshCount(value: number);
                public get boneWeights(): System.Array$1<UnityEngine.BoneWeight>;
                public set boneWeights(value: System.Array$1<UnityEngine.BoneWeight>);
                public get bindposes(): System.Array$1<UnityEngine.Matrix4x4>;
                public set bindposes(value: System.Array$1<UnityEngine.Matrix4x4>);
                public get vertices(): System.Array$1<UnityEngine.Vector3>;
                public set vertices(value: System.Array$1<UnityEngine.Vector3>);
                public get normals(): System.Array$1<UnityEngine.Vector3>;
                public set normals(value: System.Array$1<UnityEngine.Vector3>);
                public get tangents(): System.Array$1<UnityEngine.Vector4>;
                public set tangents(value: System.Array$1<UnityEngine.Vector4>);
                public get uv(): System.Array$1<UnityEngine.Vector2>;
                public set uv(value: System.Array$1<UnityEngine.Vector2>);
                public get uv2(): System.Array$1<UnityEngine.Vector2>;
                public set uv2(value: System.Array$1<UnityEngine.Vector2>);
                public get uv3(): System.Array$1<UnityEngine.Vector2>;
                public set uv3(value: System.Array$1<UnityEngine.Vector2>);
                public get uv4(): System.Array$1<UnityEngine.Vector2>;
                public set uv4(value: System.Array$1<UnityEngine.Vector2>);
                public get colors(): System.Array$1<UnityEngine.Color>;
                public set colors(value: System.Array$1<UnityEngine.Color>);
                public get colors32(): System.Array$1<UnityEngine.Color32>;
                public set colors32(value: System.Array$1<UnityEngine.Color32>);
                public get triangles(): System.Array$1<number>;
                public set triangles(value: System.Array$1<number>);
                public Clear ($keepVertexLayout: boolean) : void
                public Clear () : void
                public SetTriangles ($triangles: System.Array$1<number>, $submesh: number) : void
                public SetTriangles ($triangles: System.Array$1<number>, $submesh: number, $calculateBounds: boolean) : void
                public SetTriangles ($triangles: System.Collections.Generic.List$1<number>, $submesh: number) : void
                public SetTriangles ($triangles: System.Collections.Generic.List$1<number>, $submesh: number, $calculateBounds: boolean) : void
                public SetIndices ($indices: System.Array$1<number>, $topology: UnityEngine.MeshTopology, $submesh: number) : void
                public SetIndices ($indices: System.Array$1<number>, $topology: UnityEngine.MeshTopology, $submesh: number, $calculateBounds: boolean) : void
                public ClearBlendShapes () : void
                public GetBlendShapeName ($shapeIndex: number) : string
                public GetBlendShapeFrameCount ($shapeIndex: number) : number
                public GetBlendShapeFrameWeight ($shapeIndex: number, $frameIndex: number) : number
                public GetBlendShapeFrameVertices ($shapeIndex: number, $frameIndex: number, $deltaVertices: System.Array$1<UnityEngine.Vector3>, $deltaNormals: System.Array$1<UnityEngine.Vector3>, $deltaTangents: System.Array$1<UnityEngine.Vector3>) : void
                public AddBlendShapeFrame ($shapeName: string, $frameWeight: number, $deltaVertices: System.Array$1<UnityEngine.Vector3>, $deltaNormals: System.Array$1<UnityEngine.Vector3>, $deltaTangents: System.Array$1<UnityEngine.Vector3>) : void
                public GetNativeVertexBufferPtr ($bufferIndex: number) : System.IntPtr
                public GetNativeIndexBufferPtr () : System.IntPtr
                public RecalculateBounds () : void
                public RecalculateNormals () : void
                public RecalculateTangents () : void
                public GetTopology ($submesh: number) : UnityEngine.MeshTopology
                public GetIndexStart ($submesh: number) : number
                public GetIndexCount ($submesh: number) : number
                public CombineMeshes ($combine: System.Array$1<UnityEngine.CombineInstance>, $mergeSubMeshes: boolean, $useMatrices: boolean, $hasLightmapData: boolean) : void
                public CombineMeshes ($combine: System.Array$1<UnityEngine.CombineInstance>, $mergeSubMeshes: boolean, $useMatrices: boolean) : void
                public CombineMeshes ($combine: System.Array$1<UnityEngine.CombineInstance>, $mergeSubMeshes: boolean) : void
                public CombineMeshes ($combine: System.Array$1<UnityEngine.CombineInstance>) : void
                public MarkDynamic () : void
                public UploadMeshData ($markNoLogerReadable: boolean) : void
                public GetBlendShapeIndex ($blendShapeName: string) : number
                public GetVertices ($vertices: System.Collections.Generic.List$1<UnityEngine.Vector3>) : void
                public SetVertices ($inVertices: System.Collections.Generic.List$1<UnityEngine.Vector3>) : void
                public GetNormals ($normals: System.Collections.Generic.List$1<UnityEngine.Vector3>) : void
                public SetNormals ($inNormals: System.Collections.Generic.List$1<UnityEngine.Vector3>) : void
                public GetTangents ($tangents: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public SetTangents ($inTangents: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public GetColors ($colors: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public SetColors ($inColors: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public GetColors ($colors: System.Collections.Generic.List$1<UnityEngine.Color32>) : void
                public SetColors ($inColors: System.Collections.Generic.List$1<UnityEngine.Color32>) : void
                public SetUVs ($channel: number, $uvs: System.Collections.Generic.List$1<UnityEngine.Vector2>) : void
                public SetUVs ($channel: number, $uvs: System.Collections.Generic.List$1<UnityEngine.Vector3>) : void
                public SetUVs ($channel: number, $uvs: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public SetTrianglesRawData ($subMesh: number, $data: System.Array$1<number>, $trianglesCount: number) : void
                public SetVerticesRawData ($data: System.Array$1<number>, $verticesCount: number) : void
                public SetNormalRawData ($data: System.Array$1<number>, $normalCount: number) : void
                public SetTangentRawData ($data: System.Array$1<number>, $count: number) : void
                public SetColor32RawData ($data: System.Array$1<number>, $count: number) : void
                public SetUVsVector2RawData ($channel: number, $uvs: System.Array$1<number>, $uvsCount: number) : void
                public SetUVsVector3RawData ($channel: number, $uvs: System.Array$1<number>, $uvsCount: number) : void
                public SetUVsVector4RawData ($channel: number, $uvs: System.Array$1<number>, $uvsCount: number) : void
                public GetUVs ($channel: number, $uvs: System.Collections.Generic.List$1<UnityEngine.Vector2>) : void
                public GetUVs ($channel: number, $uvs: System.Collections.Generic.List$1<UnityEngine.Vector3>) : void
                public GetUVs ($channel: number, $uvs: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public GetUVDimesion ($channel: number) : number
                public GetTriangles ($submesh: number) : System.Array$1<number>
                public GetTriangles ($triangles: System.Collections.Generic.List$1<number>, $submesh: number) : void
                public GetIndices ($submesh: number) : System.Array$1<number>
                public GetIndices ($indices: System.Collections.Generic.List$1<number>, $submesh: number) : void
                public GetBindposes ($bindposes: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public GetBoneWeights ($boneWeights: System.Collections.Generic.List$1<UnityEngine.BoneWeight>) : void
                public constructor ()
            }
            enum MeshTopology
            { Triangles = 0, Quads = 2, Lines = 3, LineStrip = 4, Points = 5 }
            class CombineInstance extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class BoneWeight extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class MeshCollider extends UnityEngine.Collider
            {
                protected [__keep_incompatibility]: never;
                public get sharedMesh(): UnityEngine.Mesh;
                public set sharedMesh(value: UnityEngine.Mesh);
                public get convex(): boolean;
                public set convex(value: boolean);
                public get inflateMesh(): boolean;
                public set inflateMesh(value: boolean);
                public get skinWidth(): number;
                public set skinWidth(value: number);
                public constructor ()
            }
            class Coroutine extends UnityEngine.YieldInstruction
            {
                protected [__keep_incompatibility]: never;
            }
            class PolygonCollider2D extends UnityEngine.Collider2D
            {
                protected [__keep_incompatibility]: never;
                public get points(): System.Array$1<UnityEngine.Vector2>;
                public set points(value: System.Array$1<UnityEngine.Vector2>);
                public get pathCount(): number;
                public set pathCount(value: number);
                public get autoTiling(): boolean;
                public set autoTiling(value: boolean);
                public GetPath ($index: number) : System.Array$1<UnityEngine.Vector2>
                public SetPath ($index: number, $points: System.Array$1<UnityEngine.Vector2>) : void
                public GetTotalPointCount () : number
                public CreatePrimitive ($sides: number, $scale: UnityEngine.Vector2, $offset: UnityEngine.Vector2) : void
                public CreatePrimitive ($sides: number, $scale: UnityEngine.Vector2) : void
                public CreatePrimitive ($sides: number) : void
                public constructor ()
            }
            class Resources extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static FindObjectsOfTypeAll ($type: System.Type) : System.Array$1<UnityEngine.Object>
                public static Load ($path: string) : UnityEngine.Object
                public static Load ($path: string, $systemTypeInstance: System.Type) : UnityEngine.Object
                public static LoadAsync ($path: string) : UnityEngine.ResourceRequest
                public static LoadAsync ($path: string, $type: System.Type) : UnityEngine.ResourceRequest
                public static LoadAll ($path: string, $systemTypeInstance: System.Type) : System.Array$1<UnityEngine.Object>
                public static LoadAll ($path: string) : System.Array$1<UnityEngine.Object>
                public static GetBuiltinResource ($type: System.Type, $path: string) : UnityEngine.Object
                public static UnloadAsset ($assetToUnload: UnityEngine.Object) : void
                public static UnloadUnusedAssets () : UnityEngine.AsyncOperation
                public static IsResourceExisted ($path: string) : boolean
                public constructor ()
            }
            class ResourceRequest extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            class Renderer extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                public get isPartOfStaticBatch(): boolean;
                public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
                public get localToWorldMatrix(): UnityEngine.Matrix4x4;
                public get enabled(): boolean;
                public set enabled(value: boolean);
                public get shadowCastingMode(): UnityEngine.Rendering.ShadowCastingMode;
                public set shadowCastingMode(value: UnityEngine.Rendering.ShadowCastingMode);
                public get receiveShadows(): boolean;
                public set receiveShadows(value: boolean);
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                public get sharedMaterial(): UnityEngine.Material;
                public set sharedMaterial(value: UnityEngine.Material);
                public get materials(): System.Array$1<UnityEngine.Material>;
                public set materials(value: System.Array$1<UnityEngine.Material>);
                public get sharedMaterials(): System.Array$1<UnityEngine.Material>;
                public set sharedMaterials(value: System.Array$1<UnityEngine.Material>);
                public get bounds(): UnityEngine.Bounds;
                public get lightmapIndex(): number;
                public set lightmapIndex(value: number);
                public get realtimeLightmapIndex(): number;
                public set realtimeLightmapIndex(value: number);
                public get lightmapScaleOffset(): UnityEngine.Vector4;
                public set lightmapScaleOffset(value: UnityEngine.Vector4);
                public get motionVectorGenerationMode(): UnityEngine.MotionVectorGenerationMode;
                public set motionVectorGenerationMode(value: UnityEngine.MotionVectorGenerationMode);
                public get realtimeLightmapScaleOffset(): UnityEngine.Vector4;
                public set realtimeLightmapScaleOffset(value: UnityEngine.Vector4);
                public get isVisible(): boolean;
                public get lightProbeUsage(): UnityEngine.Rendering.LightProbeUsage;
                public set lightProbeUsage(value: UnityEngine.Rendering.LightProbeUsage);
                public get lightProbeProxyVolumeOverride(): UnityEngine.GameObject;
                public set lightProbeProxyVolumeOverride(value: UnityEngine.GameObject);
                public get probeAnchor(): UnityEngine.Transform;
                public set probeAnchor(value: UnityEngine.Transform);
                public get reflectionProbeUsage(): UnityEngine.Rendering.ReflectionProbeUsage;
                public set reflectionProbeUsage(value: UnityEngine.Rendering.ReflectionProbeUsage);
                public get sortingLayerName(): string;
                public set sortingLayerName(value: string);
                public get sortingLayerID(): number;
                public set sortingLayerID(value: number);
                public get sortingOrder(): number;
                public set sortingOrder(value: number);
                public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
                public GetPropertyBlock ($dest: UnityEngine.MaterialPropertyBlock) : void
                public GetClosestReflectionProbes ($result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>) : void
                public constructor ()
            }
            enum MotionVectorGenerationMode
            { Camera = 0, Object = 1, ForceNoMotion = 2 }
            class MaterialPropertyBlock extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class RectTransformUtility extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static RectangleContainsScreenPoint ($rect: UnityEngine.RectTransform, $screenPoint: UnityEngine.Vector2) : boolean
                public static ScreenPointToWorldPointInRectangle ($rect: UnityEngine.RectTransform, $screenPoint: UnityEngine.Vector2, $cam: UnityEngine.Camera, $worldPoint: $Ref<UnityEngine.Vector3>) : boolean
                public static ScreenPointToLocalPointInRectangle ($rect: UnityEngine.RectTransform, $screenPoint: UnityEngine.Vector2, $cam: UnityEngine.Camera, $localPoint: $Ref<UnityEngine.Vector2>) : boolean
                public static ScreenPointToRay ($cam: UnityEngine.Camera, $screenPos: UnityEngine.Vector2) : UnityEngine.Ray
                public static WorldToScreenPoint ($cam: UnityEngine.Camera, $worldPoint: UnityEngine.Vector3) : UnityEngine.Vector2
                public static CalculateRelativeRectTransformBounds ($root: UnityEngine.Transform, $child: UnityEngine.Transform) : UnityEngine.Bounds
                public static CalculateRelativeRectTransformBounds ($trans: UnityEngine.Transform) : UnityEngine.Bounds
                public static FlipLayoutOnAxis ($rect: UnityEngine.RectTransform, $axis: number, $keepPositioning: boolean, $recursive: boolean) : void
                public static FlipLayoutAxes ($rect: UnityEngine.RectTransform, $keepPositioning: boolean, $recursive: boolean) : void
                public static RectangleContainsScreenPoint ($rect: UnityEngine.RectTransform, $screenPoint: UnityEngine.Vector2, $cam: UnityEngine.Camera) : boolean
                public static PixelAdjustPoint ($point: UnityEngine.Vector2, $elementTransform: UnityEngine.Transform, $canvas: UnityEngine.Canvas) : UnityEngine.Vector2
                public static PixelAdjustRect ($rectTransform: UnityEngine.RectTransform, $canvas: UnityEngine.Canvas) : UnityEngine.Rect
            }
            class SpriteRenderer extends UnityEngine.Renderer
            {
                protected [__keep_incompatibility]: never;
                public get sprite(): UnityEngine.Sprite;
                public set sprite(value: UnityEngine.Sprite);
                public get drawMode(): UnityEngine.SpriteDrawMode;
                public set drawMode(value: UnityEngine.SpriteDrawMode);
                public get size(): UnityEngine.Vector2;
                public set size(value: UnityEngine.Vector2);
                public get adaptiveModeThreshold(): number;
                public set adaptiveModeThreshold(value: number);
                public get tileMode(): UnityEngine.SpriteTileMode;
                public set tileMode(value: UnityEngine.SpriteTileMode);
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get flipX(): boolean;
                public set flipX(value: boolean);
                public get flipY(): boolean;
                public set flipY(value: boolean);
                public constructor ()
            }
            enum SpriteDrawMode
            { Simple = 0, Sliced = 1, Tiled = 2 }
            enum SpriteTileMode
            { Continuous = 0, Adaptive = 1 }
            class SortingLayer extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public get id(): number;
                public get name(): string;
                public get value(): number;
                public static get layers(): System.Array$1<UnityEngine.SortingLayer>;
                public static GetLayerValueFromID ($id: number) : number
                public static GetLayerValueFromName ($name: string) : number
                public static NameToID ($name: string) : number
                public static IDToName ($id: number) : string
                public static IsValid ($id: number) : boolean
            }
            class SkinnedMeshRenderer extends UnityEngine.Renderer
            {
                protected [__keep_incompatibility]: never;
                public get bones(): System.Array$1<UnityEngine.Transform>;
                public set bones(value: System.Array$1<UnityEngine.Transform>);
                public get rootBone(): UnityEngine.Transform;
                public set rootBone(value: UnityEngine.Transform);
                public get quality(): UnityEngine.SkinQuality;
                public set quality(value: UnityEngine.SkinQuality);
                public get sharedMesh(): UnityEngine.Mesh;
                public set sharedMesh(value: UnityEngine.Mesh);
                public get updateWhenOffscreen(): boolean;
                public set updateWhenOffscreen(value: boolean);
                public get skinnedMotionVectors(): boolean;
                public set skinnedMotionVectors(value: boolean);
                public get localBounds(): UnityEngine.Bounds;
                public set localBounds(value: UnityEngine.Bounds);
                public BakeMesh ($mesh: UnityEngine.Mesh) : void
                public GetBlendShapeWeight ($index: number) : number
                public SetBlendShapeWeight ($index: number, $value: number) : void
                public constructor ()
            }
            enum SkinQuality
            { Auto = 0, Bone1 = 1, Bone2 = 2, Bone4 = 4 }
            enum TexGenMode
            { None = 0, SphereMap = 1, Object = 2, EyeLinear = 3, CubeReflect = 4, CubeNormal = 5 }
            class Texture3D extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
                public get depth(): number;
                public get format(): UnityEngine.TextureFormat;
                public GetPixels ($miplevel: number) : System.Array$1<UnityEngine.Color>
                public GetPixels () : System.Array$1<UnityEngine.Color>
                public GetPixels32 ($miplevel: number) : System.Array$1<UnityEngine.Color32>
                public GetPixels32 () : System.Array$1<UnityEngine.Color32>
                public SetPixels ($colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
                public SetPixels ($colors: System.Array$1<UnityEngine.Color>) : void
                public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
                public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>) : void
                public Apply ($updateMipmaps: boolean, $makeNoLongerReadable: boolean) : void
                public Apply ($updateMipmaps: boolean) : void
                public Apply () : void
                public constructor ($width: number, $height: number, $depth: number, $format: UnityEngine.TextureFormat, $mipmap: boolean)
                public constructor ()
            }
            class Time extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get time(): number;
                public static get timeSinceLevelLoad(): number;
                public static get deltaTime(): number;
                public static get fixedTime(): number;
                public static get unscaledTime(): number;
                public static get fixedUnscaledTime(): number;
                public static get unscaledDeltaTime(): number;
                public static get fixedUnscaledDeltaTime(): number;
                public static get fixedDeltaTime(): number;
                public static set fixedDeltaTime(value: number);
                public static get maximumDeltaTime(): number;
                public static set maximumDeltaTime(value: number);
                public static get smoothDeltaTime(): number;
                public static get maximumParticleDeltaTime(): number;
                public static set maximumParticleDeltaTime(value: number);
                public static get timeScale(): number;
                public static set timeScale(value: number);
                public static get frameCount(): number;
                public static get renderedFrameCount(): number;
                public static get realtimeSinceStartup(): number;
                public static get captureFramerate(): number;
                public static set captureFramerate(value: number);
                public static get inFixedTimeStep(): boolean;
                public constructor ()
            }
            class Rigidbody2D extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            class PropertyAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
            }
            class AudioClip extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Runtime.Serialization {
            interface ISerializable
            {
            }
            interface IDeserializationCallback
            {
            }
            class SerializationInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class StreamingContext extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.EventSystems {
            class UIBehaviour extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public IsActive () : boolean
                public IsDestroyed () : boolean
            }
            class EventTrigger extends UnityEngine.MonoBehaviour implements UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.IDropHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.ICancelHandler
            {
                protected [__keep_incompatibility]: never;
            }
            interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IEventSystemHandler
            {
            }
            interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IInitializePotentialDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IBeginDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IEndDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDropHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IScrollHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IUpdateSelectedHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ICancelHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            class AbstractEventData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class BaseEventData extends UnityEngine.EventSystems.AbstractEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class PointerEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class AxisEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class BaseRaycaster extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class RaycastResult extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections {
            interface IEnumerable
            {
            }
            interface ICollection extends System.Collections.IEnumerable
            {
            }
            interface IList extends System.Collections.IEnumerable, System.Collections.ICollection
            {
            }
            interface IEnumerator
            {
            }
            interface IComparer
            {
            }
            interface IDictionary extends System.Collections.IEnumerable, System.Collections.ICollection
            {
            }
            interface IDictionaryEnumerator extends System.Collections.IEnumerator
            {
            }
        }
        namespace System.Reflection {
            class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
                public get DeclaringType(): System.Type;
                public get MemberType(): System.Reflection.MemberTypes;
                public get Name(): string;
                public get ReflectedType(): System.Type;
                public get Module(): System.Reflection.Module;
                public get MetadataToken(): number;
                public IsDefined ($attributeType: System.Type, $inherit: boolean) : boolean
                public GetCustomAttributes ($inherit: boolean) : System.Array$1<any>
                public GetCustomAttributes ($attributeType: System.Type, $inherit: boolean) : System.Array$1<any>
            }
            interface ICustomAttributeProvider
            {
            }
            interface IReflect
            {
            }
            enum MemberTypes
            { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
            class Module extends System.Object implements System.Runtime.Serialization.ISerializable, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._Module
            {
                protected [__keep_incompatibility]: never;
            }
            class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
            }
            class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodInfo, System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Runtime.InteropServices {
            interface _MemberInfo
            {
            }
            interface _Type
            {
            }
            interface _Module
            {
            }
            interface _MethodBase
            {
            }
            interface _MethodInfo
            {
            }
            interface _Attribute
            {
            }
        }
        namespace System.Collections.Generic {
            interface IList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>
            {
            }
            interface ICollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>
            {
            }
            interface IEnumerable$1<T> extends System.Collections.IEnumerable
            {
            }
            interface IComparer$1<T>
            {
            }
            class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.IEnumerable, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.IDictionary, System.Runtime.Serialization.IDeserializationCallback
            {
                protected [__keep_incompatibility]: never;
                public get Count(): number;
                public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
                public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
                public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
                public get_Item ($key: TKey) : TValue
                public set_Item ($key: TKey, $value: TValue) : void
                public Add ($key: TKey, $value: TValue) : void
                public Clear () : void
                public ContainsKey ($key: TKey) : boolean
                public ContainsValue ($value: TValue) : boolean
                public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
                public OnDeserialization ($sender: any) : void
                public Remove ($key: TKey) : boolean
                public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
                public GetEnumerator () : System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>
                public constructor ()
                public constructor ($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>)
                public constructor ($capacity: number)
                public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            }
            class KeyValuePair$2<TKey, TValue> extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface IDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
            }
            interface IEqualityComparer$1<T>
            {
            }
            interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
            {
            }
            class List$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.ICollection, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.Generic.IList$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections.ObjectModel {
            class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.ICollection, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.Generic.IList$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.IO {
            class File extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static AppendAllText ($path: string, $contents: string) : void
                public static AppendAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
                public static AppendText ($path: string) : System.IO.StreamWriter
                public static Copy ($sourceFileName: string, $destFileName: string) : void
                public static Copy ($sourceFileName: string, $destFileName: string, $overwrite: boolean) : void
                public static Create ($path: string) : System.IO.FileStream
                public static Create ($path: string, $bufferSize: number) : System.IO.FileStream
                public static Create ($path: string, $bufferSize: number, $options: System.IO.FileOptions) : System.IO.FileStream
                public static Create ($path: string, $bufferSize: number, $options: System.IO.FileOptions, $fileSecurity: System.Security.AccessControl.FileSecurity) : System.IO.FileStream
                public static CreateText ($path: string) : System.IO.StreamWriter
                public static Delete ($path: string) : void
                public static Exists ($path: string) : boolean
                public static GetAccessControl ($path: string) : System.Security.AccessControl.FileSecurity
                public static GetAccessControl ($path: string, $includeSections: System.Security.AccessControl.AccessControlSections) : System.Security.AccessControl.FileSecurity
                public static GetAttributes ($path: string) : System.IO.FileAttributes
                public static GetCreationTime ($path: string) : Date
                public static GetCreationTimeUtc ($path: string) : Date
                public static GetLastAccessTime ($path: string) : Date
                public static GetLastAccessTimeUtc ($path: string) : Date
                public static GetLastWriteTime ($path: string) : Date
                public static GetLastWriteTimeUtc ($path: string) : Date
                public static Move ($sourceFileName: string, $destFileName: string) : void
                public static Open ($path: string, $mode: System.IO.FileMode) : System.IO.FileStream
                public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess) : System.IO.FileStream
                public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare) : System.IO.FileStream
                public static OpenRead ($path: string) : System.IO.FileStream
                public static OpenText ($path: string) : System.IO.StreamReader
                public static OpenWrite ($path: string) : System.IO.FileStream
                public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string) : void
                public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean) : void
                public static SetAccessControl ($path: string, $fileSecurity: System.Security.AccessControl.FileSecurity) : void
                public static SetAttributes ($path: string, $fileAttributes: System.IO.FileAttributes) : void
                public static SetCreationTime ($path: string, $creationTime: Date) : void
                public static SetCreationTimeUtc ($path: string, $creationTimeUtc: Date) : void
                public static SetLastAccessTime ($path: string, $lastAccessTime: Date) : void
                public static SetLastAccessTimeUtc ($path: string, $lastAccessTimeUtc: Date) : void
                public static SetLastWriteTime ($path: string, $lastWriteTime: Date) : void
                public static SetLastWriteTimeUtc ($path: string, $lastWriteTimeUtc: Date) : void
                public static ReadAllBytes ($path: string) : System.Array$1<number>
                public static ReadAllLines ($path: string) : System.Array$1<string>
                public static ReadAllLines ($path: string, $encoding: System.Text.Encoding) : System.Array$1<string>
                public static ReadAllText ($path: string) : string
                public static ReadAllText ($path: string, $encoding: System.Text.Encoding) : string
                public static WriteAllBytes ($path: string, $bytes: System.Array$1<number>) : void
                public static WriteAllLines ($path: string, $contents: System.Array$1<string>) : void
                public static WriteAllLines ($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding) : void
                public static WriteAllText ($path: string, $contents: string) : void
                public static WriteAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
                public static Encrypt ($path: string) : void
                public static Decrypt ($path: string) : void
            }
            class TextWriter extends System.MarshalByRefObject implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class StreamWriter extends System.IO.TextWriter implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class Stream extends System.MarshalByRefObject implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class FileStream extends System.IO.Stream implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum FileOptions
            { None = 0, Encrypted = 16384, DeleteOnClose = 67108864, SequentialScan = 134217728, RandomAccess = 268435456, Asynchronous = 1073741824, WriteThrough = -2147483648 }
            enum FileAttributes
            { Archive = 32, Compressed = 2048, Device = 64, Directory = 16, Encrypted = 16384, Hidden = 2, Normal = 128, NotContentIndexed = 8192, Offline = 4096, ReadOnly = 1, ReparsePoint = 1024, SparseFile = 512, System = 4, Temporary = 256 }
            enum FileMode
            { CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
            enum FileAccess
            { Read = 1, Write = 2, ReadWrite = 3 }
            enum FileShare
            { None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
            class TextReader extends System.MarshalByRefObject implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class StreamReader extends System.IO.TextReader implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum SearchOption
            { TopDirectoryOnly = 0, AllDirectories = 1 }
        }
        namespace System.Text {
            class Encoding extends System.Object implements System.ICloneable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Security.AccessControl {
            class ObjectSecurity extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class CommonObjectSecurity extends System.Security.AccessControl.ObjectSecurity
            {
                protected [__keep_incompatibility]: never;
            }
            class NativeObjectSecurity extends System.Security.AccessControl.CommonObjectSecurity
            {
                protected [__keep_incompatibility]: never;
            }
            class FileSystemSecurity extends System.Security.AccessControl.NativeObjectSecurity
            {
                protected [__keep_incompatibility]: never;
            }
            class FileSecurity extends System.Security.AccessControl.FileSystemSecurity
            {
                protected [__keep_incompatibility]: never;
            }
            enum AccessControlSections
            { None = 0, Audit = 1, Access = 2, Owner = 4, Group = 8, All = 15 }
        }
        namespace System.Collections.Generic.Dictionary$2 {
            class KeyCollection<TKey, TValue> extends System.Object implements System.Collections.IEnumerable, System.Collections.ICollection, System.Collections.Generic.ICollection$1<TKey>, System.Collections.Generic.IEnumerable$1<TKey>
            {
                protected [__keep_incompatibility]: never;
            }
            class ValueCollection<TKey, TValue> extends System.Object implements System.Collections.IEnumerable, System.Collections.ICollection, System.Collections.Generic.ICollection$1<TValue>, System.Collections.Generic.IEnumerable$1<TValue>
            {
                protected [__keep_incompatibility]: never;
            }
            class Enumerator<TKey, TValue> extends System.ValueType implements System.Collections.IEnumerator, System.IDisposable, System.Collections.Generic.IEnumerator$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IDictionaryEnumerator
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Puerts {
            class ILoader extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public FileExists ($filepath: string) : boolean
                public ReadFile ($filepath: string, $debugpath: $Ref<string>) : string
            }
            class JsEnv extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora {
            class CSharpInterface extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static NO_OPEN_APP : number
                public static NO_APPID : number
                public static get IsIOSPlatform(): boolean;
                public static get PauseDownloading(): boolean;
                public static set PauseDownloading(value: boolean);
                public static get PauseSocketSending(): boolean;
                public static set PauseSocketSending(value: boolean);
                public static get NeedShowFreeRecord(): boolean;
                public static set NeedShowFreeRecord(value: boolean);
                public static get currentRecorderPosition(): UnityEngine.Vector2;
                public static set currentRecorderPosition(value: UnityEngine.Vector2);
                public static get isApplePlatform(): boolean;
                public static get IsProductEnvironment(): boolean;
                public static get FirstPushMessage(): string;
                public static get LoginPlatform(): com.tencent.pandora.PlatformType;
                public static get ScreenWidth(): number;
                public static get ScreenHeight(): number;
                public static OpenImagePicker ($callback: com.tencent.pandora.LuaFunction, $clipWidth: number, $clipHeight: number, $type: number) : void
                public static OpenImagePicker ($callback: com.tencent.pandora.LuaFunction, $clipWidth: number, $clipHeight: number) : void
                public static PickVideo ($callback: com.tencent.pandora.LuaFunction, $clipWidth: number, $clipHeight: number) : void
                public static TextureEncodeToPNG ($texture: UnityEngine.Texture2D) : System.Array$1<number>
                public static NowMilliseconds () : bigint
                public static UnloadAssets ($obj: UnityEngine.Object) : void
                public static LoadGameObjectByResources ($path: string) : UnityEngine.GameObject
                public static PlaySound ($id: string) : void
                public static Report ($content: string, $id: number, $type: number) : void
                public static ReportError ($error: string, $id: number) : void
                public static ReportToTdm ($content: string, $id: string, $type: number, $appId: number) : void
                public static ReportToTdmEx ($content: string, $id: string, $type: number, $appId: number, $appPage: string) : void
                public static ReportLuaError ($error: string) : void
                public static ReportJsError ($error: string) : void
                public static CloneAndAddToParent ($template: UnityEngine.GameObject, $name: string, $parent: UnityEngine.GameObject) : UnityEngine.GameObject
                public static SetParent ($child: UnityEngine.GameObject, $parent: UnityEngine.GameObject) : void
                public static SetPanelParent ($panelName: string, $panelParent: UnityEngine.GameObject) : void
                public static IsDebug () : boolean
                public static IsApplicationDebug ($applicationId: number) : boolean
                public static IsDebugByInternalPlatformConfig () : boolean
                public static GetPlatformDescription () : string
                public static GetSDKVersion () : string
                public static UnloadUnusedAssets () : void
                public static WriteCookie ($fileName: string, $content: string) : boolean
                public static ReadCookie ($fileName: string) : string
                public static GetUserData () : com.tencent.pandora.UserData
                public static RefreshUserDataTokens () : void
                public static GetRemoteConfig () : com.tencent.pandora.RemoteConfig
                public static ShowPortrait ($panelName: string, $url: string, $go: UnityEngine.GameObject, $isCacheInMemory: boolean, $callId: number) : void
                public static ShowImage ($panelName: string, $url: string, $go: UnityEngine.GameObject, $isCacheInMemory: boolean, $callId: number) : void
                public static CacheImage ($url: string) : void
                public static IsImageCached ($url: string) : boolean
                public static LoadText ($url: string, $callId: number) : void
                public static LoadAssetBundle ($url: string, $callId: number) : void
                public static LoadImage ($url: string, $isCacheInMemory: boolean, $callId: number) : void
                public static GetAsset ($url: string) : any
                public static CacheAsset ($url: string, $callback: com.tencent.pandora.LuaFunction) : void
                public static IsAssetCached ($url: string) : boolean
                public static DeleteCacheAsset ($url: string) : void
                public static GetPandoraGameObject () : UnityEngine.GameObject
                public static ReleaseAsset ($url: string) : void
                public static ForceDeleteZeroReferenceAsset () : void
                public static ForceDeleteZeroReferenceTexture ($url: string) : void
                public static LoadWww ($url: string, $requestJson: string, $isPost: boolean, $callId: number) : void
                public static LoadWwwWithBinaryData ($url: string, $requestJson: string, $binaryData: System.Array$1<number>, $isPost: boolean, $callId: number) : void
                public static PostString ($url: string, $requestJson: string, $postData: string, $callId: number, $timeout?: number, $requestHeaders?: string) : void
                public static LoadRequestHttpPut ($url: string, $requestBody: System.Array$1<number>, $requestHead: string, $callId: number) : void
                public static LoadRequestHttpPost ($url: string, $requestData: System.Array$1<number>, $requestHeaders: string, $callId: number) : void
                public static CreatePanel ($callId: number, $panelName: string) : void
                public static CreatePanel ($callId: number, $panelName: string, $groupName?: string) : void
                public static GetPanel ($panelName: string) : UnityEngine.GameObject
                public static HidePanel ($panelName: string) : void
                public static HideAllPanel () : void
                public static DestroyPanel ($panelName: string) : void
                public static DestroyAllPanel () : void
                public static GetTotalSwitch () : boolean
                public static GetFunctionSwitch ($functionName: string) : boolean
                public static GetAppId ($moduleName: string) : number
                public static GetAppVersion ($appId: number) : string
                public static GetAppName ($appId: number) : string
                public static GetAppKey ($appId: number) : string
                public static GetAppSandboxFolderPath () : string
                public static GetApplicationCustomConfig ($applicationId: number, $key: string) : string
                public static GetApplicationAppName ($applicationId: number) : string
                public static GetApplicationUsePxFrame ($applicationId: number) : boolean
                public static GameCallLua ($jsonStr: string) : void
                public static CallBroker ($callId: number, $jsonStr: string, $commandId: number) : void
                public static CallBroker ($callId: number, $jsonStr: string, $commandId: number, $subCommandId?: number, $pandoraAppId?: number, $type?: number, $moduleId?: number) : void
                public static CallApplicationBroker ($callId: number, $jsonStr: string, $commandId: number, $subCommandId: number, $pandoraAppId: number, $type?: number, $moduleId?: number) : void
                public static CallAtm ($callId: number, $jsonStr: string, $commandId: number) : void
                public static ReportStatsByTdm ($json: string) : void
                public static ShowItemIcon ($image: UnityEngine.UI.Image, $itemId: number) : void
                public static ShowItemTips ($path: string, $itemId: number) : void
                public static GetCurrency () : System.Collections.Generic.Dictionary$2<string, string>
                public static Jump ($type: string, $content: string) : void
                public static AutoBinding ($obj: UnityEngine.GameObject, $tbl: com.tencent.pandora.LuaTable) : void
                public static AppKey () : string
                public static GetSeqId () : number
                public static GetCResourceResourceShader ($path: string) : UnityEngine.Shader
                public static GetGameletAppAssetbundleName ($appId: number, $appName: string, $assetName: string) : string
                public static GetGameletAppAssetbundleName ($platformId: string, $appId: number, $appName: string, $assetName: string) : string
                public static GetPanelGameObject ($assetInfo: com.tencent.pandora.RemoteConfig.AssetInfo, $callback: System.Action$1<UnityEngine.GameObject>) : void
                public static GetCurrentLanguage () : string
                public static GameCallJs ($jsonStr: string) : void
                public static GameCallJS_DispatchUIEvent ($appid: number, $eventId: string, $uiEvent: any) : void
                public static JsCallGame ($jsonStr: string) : void
                public static ShutDownPuerts () : void
                public static RestartPuerts () : void
                public static LoadGameObject ($url: string, $isCacheInMemory: boolean, $callback: com.tencent.pandora.JsEnvManager.LoadGameObjectCallbackDelegate) : void
                public static LoadGameObject ($url: string, $isCacheInMemory: boolean, $isProgramAsset: boolean, $callback: com.tencent.pandora.JsEnvManager.LoadGameObjectCallbackDelegate) : void
                public static CallGameWithReturn ($id: number, $dict: System.Collections.Generic.Dictionary$2<string, any>) : string
                public static GetEmptyDict () : System.Collections.Generic.Dictionary$2<string, any>
                public static IsPuertsRestart () : boolean
                public static PCreateVideoPlayerInstance ($videoObject: UnityEngine.GameObject) : com.tencent.pandora.PVideoPlayer
                public static PCreateVideoPlayerInstance ($videoObject: UnityEngine.GameObject, $coverImage: UnityEngine.GameObject) : com.tencent.pandora.PVideoPlayer
                public static PDestroyVideoPlayerInstance ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : void
                public static PPlayVideo ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $url: string, $loopPlay: boolean) : void
                public static PPlayVideo ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $url: string) : void
                public static PSeek ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $seekTime: number) : void
                public static PPauseVideo ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : void
                public static PResumeVideo ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : void
                public static PClearVideoContainer ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : void
                public static PVideoIsPause ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : boolean
                public static PVideoIsActive ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : boolean
                public static PVideoGetUrl ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : string
                public static PVideoGameObject ($pVideoPlayer: com.tencent.pandora.PVideoPlayer) : UnityEngine.GameObject
                public static PSetVideoGameObject ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $obj: UnityEngine.GameObject) : void
                public static PGetGraphicsDeviceType () : number
                public static PSetVideoEventDelegate ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $callback: com.tencent.pandora.PVideoPlayer.VideoEventDelegate) : void
                public static SetHardwareDecodec ($isHardware: boolean) : void
                public static EnabledCacheResource ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $enable: boolean, $path?: string) : void
                public static ClearDefaultCacheResource ($path?: string) : void
                public static SetEnableAlpha ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $enableAlpha: boolean) : void
                public static SetVideoAlpha ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $alpha: number) : void
                public static UseOldLuaCallback ($pVideoPlayer: com.tencent.pandora.PVideoPlayer, $useOldLuaCallback: boolean) : void
                public static LuaCallPx ($windowId: number, $jsonStr: string) : void
                public static RpcSetResult ($windowId: number, $jsonStr: string) : void
                public static SetPxEnable ($v: boolean) : void
                public static LoadPxWindow ($go: UnityEngine.GameObject, $action: string, $appPath: string, $appId: number, $withPuerts: boolean) : number
                public static LoadPxWindow ($go: UnityEngine.GameObject, $action: string, $appPath: string, $appId: number) : number
                public static LoadPxWindow ($go: UnityEngine.GameObject, $action: string, $appPath: string, $withPuerts: boolean) : number
                public static LoadPxWindow ($go: UnityEngine.GameObject, $action: string, $appPath: string) : number
                public static LoadPxWindow ($go: UnityEngine.GameObject, $url: string, $withPuerts: boolean) : number
                public static LoadPxWindow ($go: UnityEngine.GameObject, $url: string) : number
                public static GetWindowMount ($id: number) : UnityEngine.GameObject
                public static GetWindowRoot ($id: number) : UnityEngine.GameObject
                public static RemovePxWindow ($id: number) : void
                public static CreateScriptGlobal ($windowId: number, $name: string) : void
                public static SetScriptGlobalNumber ($windowId: number, $name: string, $key: string, $num: number) : void
                public static SetScriptGlobalString ($windowId: number, $name: string, $key: string, $str: string) : void
                public static SetScriptGlobalBoolean ($windowId: number, $name: string, $key: string, $v: boolean) : void
                public static GetScriptGlobalNumber ($windowId: number, $name: string, $key: string) : number
                public static GetScriptGlobalString ($windowId: number, $name: string, $key: string) : System.IntPtr
                public static GetScriptGlobalBoolean ($windowId: number, $name: string, $key: string) : boolean
                public static SetRoutingResponseToPxRule ($source: string, $routingToPx: boolean) : void
                public static GetSlotAttachmentByHandle ($windowId: number, $attachmentHandle: number) : com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment
                public static RepaintPixUIWindow ($windowId: number) : void
                public static GetAppIdByPixUIWindowId ($windowId: number) : number
                public static SaveFile ($fileName: string, $content: System.Array$1<number>) : boolean
                public static ReadFile ($fileName: string) : System.Array$1<number>
                public static CreateTextureReadableCopy ($texture: UnityEngine.Texture2D) : UnityEngine.Texture2D
                public static CallDataMing ($jsonStr: string) : void
                public static PandoraCallRecord ($jsonStr: string) : string
                public static CallMomentsLua ($jsonStr: string) : string
                public static SetAppInfo ($appID: string, $appKey: string, $openID: string) : number
                public static SetServerInfo ($url: string) : number
                public static Init () : number
                public static SetMode ($mode: number) : number
                public static Pause () : number
                public static Resume () : number
                public static JoinTeamRoom ($roomName: string, $msTimeout: number) : number
                public static JoinRangeRoom ($roomName: string, $msTimeout: number) : number
                public static JoinTeamRoom ($roomName: string, $token: string, $timestamp: number, $msTimeout: number) : number
                public static JoinNationalRoom ($roomName: string, $role: number, $msTimeout: number) : number
                public static ChangeRole ($role: number, $roomName?: string) : number
                public static JoinNationalRoom ($roomName: string, $token: string, $timestamp: number, $role: number, $msTimeout: number) : number
                public static QuitRoom ($roomName: string, $msTimeout: number) : number
                public static Poll () : number
                public static OpenMic () : number
                public static CloseMic () : number
                public static OpenSpeaker () : number
                public static CloseSpeaker () : number
                public static EnableRoomMicrophone ($roomName: string, $enable: boolean) : number
                public static EnableRoomSpeaker ($roomName: string, $enable: boolean) : number
                public static EnableMultiRoom ($enable: boolean) : number
                public static UpdateCoordinate ($roomName: string, $x: bigint, $y: bigint, $z: bigint, $r: bigint) : number
                public static ApplyMessageKey ($msTimeout: number) : number
                public static ApplyMessageKey ($token: string, $timestamp: number, $msTimeout: number) : number
                public static StartRecording ($filePath: string) : number
                public static StopRecording () : number
                public static UploadRecordedFile ($filePath: string, $msTimeout: number) : number
                public static DownloadRecordedFile ($fileID: string, $downloadFilePath: string, $msTimeout: number) : number
                public static UploadRecordedFile ($filePath: string, $msTimeout: number, $bPermanent: boolean) : number
                public static DownloadRecordedFile ($fileID: string, $downloadFilePath: string, $msTimeout: number, $bPermanent: boolean) : number
                public static PlayRecordedFile ($downloadFilePath: string) : number
                public static StopPlayFile () : number
                public static SpeechToText ($fileID: string, $language?: number, $msTimeout?: number) : number
                public static SpeechToText ($fileID: string, $token: string, $timestamp: number, $language?: number, $msTimeout?: number) : number
                public static ForbidMemberVoice ($member: number, $bEnable: boolean, $roomName?: string) : number
                public static EnableLog ($bEnable: boolean) : number
                public static SetDataFree ($enable: boolean) : number
                public static GetMicLevel () : number
                public static GetMicLevel ($bFadeOut: boolean) : number
                public static GetSpeakerLevel () : number
                public static SetSpeakerVolume ($vol: number) : number
                public static EnableSpeakerOn ($bEnable: boolean) : number
                public static SetMicVolume ($vol: number) : number
                public static SetVoiceEffects ($mode: number) : number
                public static IsSpeaking () : number
                public static EnableReverb ($bEnable: boolean) : number
                public static SetReverbMode ($mode: number) : number
                public static GetVoiceIdentify () : number
                public static SetBGMPath ($path: string) : number
                public static StartBGMPlay () : number
                public static StopBGMPlay () : number
                public static PauseBGMPlay () : number
                public static ResumeBGMPlay () : number
                public static SetBGMVol ($vol: number) : number
                public static GetBGMPlayState () : number
                public static EnableNativeBGMPlay ($bEnable: boolean) : number
                public static SetBitRate ($bitrate: number) : number
                public static getAudioDeviceConnectionState () : number
                public static EnableBluetoothSCO ($bEnable: boolean) : void
                public static CheckDeviceMuteState () : number
                public static GetMicState () : number
                public static GetSpeakerState () : number
                public static GetMuteResult () : number
                public static JoinTeamRoom_Token ($roomName: string, $token: string, $timestamp: number, $msTimeout: number) : number
                public static JoinNationalRoom_Token ($roomName: string, $token: string, $timestamp: number, $role: number, $msTimeout: number) : number
                public static ApplyMessageKey_Token ($token: string, $timestamp: number, $msTimeout: number) : number
                public static SpeechToText_Token ($fileID: string, $token: string, $timestamp: number, $language?: number, $msTimeout?: number) : number
                public static SetReportedPlayerInfo ($cszOpenID: System.Array$1<string>, $nMemberID: System.Array$1<number>, $nCount: number) : number
                public static ReportPlayer ($cszOpenID: System.Array$1<string>, $nCount: number, $strInfo: string) : number
                public static GetRoomMembers ($roomName: string) : number
                public static GetRoomMembers ($roomName: string, $len: number) : string
                public static EnableCivilVoice ($bEnable: boolean) : number
                public static StartSaveVoice () : number
                public static StopSaveVoice () : number
                public static SetRecSaveTs ($ts: number) : number
                public static SetPlayFileIndex ($fileid: string, $fileindex: number) : number
                public static StartPlaySaveVoiceTs ($ts: number) : number
                public static StopPlaySaveVoice () : number
                public static DelAllSaveVoiceFile ($fileid: string, $fileindex: number) : number
                public static SpeechTranslate ($fileID: string, $srcLang: number, $targetLang: number, $transType: number, $nTimeoutMS: number) : number
                public static RSTSStartRecording ($srcLang: number, $pTargetLangs: System.Array$1<number>, $nTargetLangCnt: number, $transType: number, $nTimeoutMS: number) : number
                public static RSTSStopRecording () : number
                public static EnableTranslate ($roomname: string, $enable: boolean, $myLang: number, $transType: number) : number
                public static EnableWXMiniApp ($roomName: string, $enable: boolean) : number
                public static UpdateSelfInfo ($roomName: string, $info: string) : number
                public static QueryWXMembers ($roomName: string) : number
                public static QueryUserInfo ($roomName: string, $memberID: number, $openID: string) : number
                public static SetCivilBinPath ($path: string) : number
                public static SetPlayerVolume ($playerid: string, $vol: number) : number
                public static GetPlayerVolume ($playerid: string) : number
                public static EnableKeyWordsDetect ($bEnable: boolean) : number
                public static EnableMagicVoice ($roomName: string, $magicType: string, $enable: boolean) : number
                public static TextToStreamSpeechStart ($text: string, $voiceType: string, $nTimeoutMS: number) : number
                public static TextToStreamSpeechStop () : number
                public static TestMic () : number
                public static SetAlbumName ($albumName: string) : void
                public static CheckSDKPermission ($type: string) : number
                public static RequestSDKPermission ($eventID: number, $type: string) : void
                public static EnableInGameAudio ($enable: boolean) : void
                public static EnableBgmMix ($mixing: boolean) : void
                public static SetCoverSize ($width: number, $height: number) : void
                public static GenerateMomentsVideo ($videoTimeStampListJson: string) : void
                public static GenerateVideoCover ($eventID: number, $videopath: string, $timeUs: bigint) : void
                public static GetVideoMd5 ($eventID: number, $videopathJson: string) : void
                public static SetWatermark ($path: string, $x: number, $y: number) : void
                public static ShowRecorderDialog ($x: number, $y: number) : void
                public static CloseRecorderDialog () : void
                public static GetFreeDiskSpace () : number
                public static DeleteVideoByAlbum ($eventID: number, $albumName: string, $srcPath: string) : void
                public static MoveVideoToAlbum ($eventID: number, $albumName: string, $srcPath: string) : void
                public static StartRecorder () : void
                public static StopRecorder () : void
                public static LockRecorderPosition () : void
                public static UnLockRecorderPosition () : void
                public static SetVideoQuality ($quality: number) : void
                public static IsRecording () : boolean
                public static IsRecorderDialogShow () : boolean
                public static UpdateRedDot ($showRedDot: boolean) : void
                public static GetDeviceInfo () : string
                public static NotifySpaceNotEnough () : void
                public static ShowConsole () : void
                public static ClipVideo ($eventID: number, $videoEditJson: string) : void
                public static GetFilePathFromUri ($URIStr: string) : string
                public static MoveAlbumToLocal ($eventID: number, $albumPath: string, $localPath: string) : void
                public static CheckAlbumVideoExist ($uriStr: string) : boolean
                public static DeleteDirectory ($path: string) : void
                public static CreateDirectory ($path: string) : void
                public static MoveFile ($sourceFileName: string, $destFileName: string) : void
                public static FileExists ($path: string) : boolean
                public static DirectoryExists ($path: string) : boolean
                public static DirectoryGetFiles ($path: string) : System.Array$1<string>
                public static DirectoryGetFiles ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<string>
                public static DirectoryGetFiles ($path: string, $searchPattern: string) : System.Array$1<string>
                public static FileDelete ($path: string) : void
                public static SetSystemAudioEnable ($enable: boolean) : void
                public static EnableHookPresent ($enable: boolean) : void
                public static SetLifeCycleBroadcastEnable ($enable: boolean) : void
                public static GetPandoraRoot () : string
                public static GetAssetPoolKey ($url: string, $isProgramAsset: boolean) : string
                public static GetCachedAssetPath ($url: string, $isProgramAsset?: boolean) : string
                public static OnCheckSDKFeature ($sdkFeature: number) : void
                public static OnFinishCheckSDKPremission ($bResult: boolean) : void
                public static OnStartMomentsRecording ($status: number) : void
                public static OnStopMomentsRecording ($duration: bigint) : void
                public static UseCommonHook ($use: boolean) : void
                public static SetRecordNotifyDelegate ($recordNotify: com.tencent.pandora.RecordNotify) : void
                public static SetWwiseListenerStatus ($isMultiple: boolean) : void
                public static StartLive ($strURL: string) : boolean
                public static StopLive () : boolean
                public static SetEnableLive ($isEnable: boolean) : void
                public static SetEnableRecorderMutex ($isEnable: boolean) : void
                public static GetEnableRecorderMutex () : boolean
                public static ActiveLiveModule () : void
                public static IsLiving () : boolean
                public static IsSupportLive () : boolean
                public static IsSupportH265 () : boolean
                public static UseH265 ($bEnable: boolean) : boolean
                public static SetVideoBitrate ($nBitrate: number) : boolean
                public static SetVideoFramerate ($nFramerate: number) : boolean
                public static SetGameLiveVideoQuality ($quality: number) : boolean
                public static IsSupportHEVC () : boolean
                public static GetEnableHEVC () : boolean
                public static SetEnableHEVC ($isEnable: boolean) : void
                public static SetEnableFaac ($bEnable: boolean) : void
                public static GetEnableFaac () : boolean
                public static EnableJaveGC ($bEnable: boolean) : void
                public static EnableCSharpGC ($bEnable: boolean) : void
                public static EnableUnityGC ($bEnable: boolean) : void
                public static SetEnableRecordHook ($bEnable: boolean) : void
                public static TClocdUploadStart ($pszSignature: string, $pszFilePath: string, $pszCoverPath: string, $beEnableResume: boolean, $beEnableHttps: boolean, $pszFileName: string) : number
                public static TClocdUploadMediaStart ($pszSignature: string, $pszFilePath: string, $beEnableResume: boolean, $beEnableHttps: boolean, $pszFileName: string) : number
                public static TClocdUploadStop ($nSessionId: number) : void
                public static PlayVideo ($videoObject: UnityEngine.GameObject, $url: string) : void
                public static PlayVideo ($videoObject: UnityEngine.GameObject, $url: string, $loopPlay?: boolean) : void
                public static PauseVideo () : void
                public static ResumeVideo () : void
                public static Seek ($seekTime: number) : void
                public static ClearVideoContainer () : void
                public static ResetVideoContainer ($videoObject: UnityEngine.GameObject) : void
                public static GameBackgroundSoundSwitch ($pause: boolean) : void
                public static ReCreateBulletScreen ($bulletScreenObject: com.tencent.pandora.BulletScreen) : void
                public static StartBulletScreen ($bulletScreenObject: com.tencent.pandora.BulletScreen) : void
                public static StopBulletScreen ($bulletScreenObject: com.tencent.pandora.BulletScreen) : void
                public static InsertBulletTextElement ($bulletScreenObject: com.tencent.pandora.BulletScreen, $content: string) : void
                public static InsertBulletTextElement ($bulletScreenObject: com.tencent.pandora.BulletScreen, $contents: System.Array$1<string>) : void
                public static RefreshLineInfo ($bulletScreenObject: com.tencent.pandora.BulletScreen, $moveState: boolean, $lineIndex: number) : void
                public static RefreshElementInfo ($bulletScreenObject: com.tencent.pandora.BulletScreen, $elmementPositionX: number, $elementLineIndex: number, $elementSpeed: number) : void
                public static StartRecord ($videoPath: string, $width: number, $height: number, $frameRate: number, $encodingBitRate: number) : void
                public static StopRecord () : void
                public static GetGraphicsDeviceType () : number
                public static NotifyCloseAllPanel () : void
                public static GetPlatformDesc () : string
                public static IOSPay ($jsonParams: string) : boolean
                public static AndroidPay ($jsonParams: string) : boolean
                public static AsyncSetImage ($panelName: string, $url: string, $image: UnityEngine.UI.Image, $callId: number) : void
                public static AsyncSetImageAlwaysFromRemote ($panelName: string, $url: string, $image: UnityEngine.UI.Image, $callId: number) : void
                public static ShowGameImg ($djType: number, $djID: number, $go: UnityEngine.GameObject, $callId: number) : void
                public static GetTextureBase64Data ($texture: UnityEngine.Texture2D) : string
                public static SendHttpRequest ($url: string, $reqParams: string, $isPost: boolean, $callId: number) : void
                public static UploadImage ($url: string, $postTable: com.tencent.pandora.LuaTable, $callId: number) : void
                public static ShowGameIcon ($go: UnityEngine.GameObject, $rankClass: number, $rankGrade: number) : number
                public static GetGameImgPath ($rankClass: number, $rankGrade: number) : string
                public static ShowGameImgByPath ($go: UnityEngine.GameObject, $iconPath: string, $addMaterial: boolean) : number
                public static ShowGameImgByPath ($go: UnityEngine.GameObject, $iconPath: string) : number
                public static QueryFriendsList () : string
                public static QuerySearchConfig () : string
                public static QueryRankShowName ($rankClass: number, $rankShowGrade: number) : string
                public static AsyncDownloadImage ($url: string, $callId: number) : void
                public static IsImageDownloaded ($url: string) : boolean
                public static CallGame ($strCmdJson: string) : void
                public static CallGame ($callId: number, $luatable: com.tencent.pandora.LuaTable) : string
                public static StreamReport ($msg: string, $reportType: number, $returnCode: number) : void
                public static AssembleFont ($panelName: string, $jsonFontTable: string) : number
                public static GetPanelParent ($panelParentName: string) : UnityEngine.GameObject
                public static AddClick ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddDragEndEvent ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddUGUIOnClickDown ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddUGUIOnClickUp ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddUGUIOnValueChanged ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddSliderOnValueChanged ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddIputFieldOnValueChanged ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddBeginDragEvent ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddDragEvent ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static AddNewEndDragEvent ($go: UnityEngine.GameObject, $luaFunc: com.tencent.pandora.LuaFunction) : void
                public static DoCmdFromGame ($jsonData: string) : void
                public static NotifyIOSPayFinish ($jsonData: string) : void
                public static NotifyAndroidPayFinish ($jsonData: string) : void
                public static NotifyPushData ($commandId: number, $jsonData: string) : void
                public static NotifyServerConnected () : void
                public static SetPosition ($go: UnityEngine.GameObject, $x: number, $y: number, $z: number) : void
                public static SetScale ($go: UnityEngine.GameObject, $x: number, $y: number, $z: number) : void
                public static SetPosZ ($go: UnityEngine.GameObject, $z: number) : void
                public static SetTextString ($go: UnityEngine.GameObject, $componentName: string, $sText: string) : void
                public static Vibrate () : void
                public static CustomSetActive ($obj: UnityEngine.GameObject, $bActive: boolean) : void
                public static CustomDestroyObject ($target: UnityEngine.GameObject, $delay?: number) : void
                public static SetShader ($obj: UnityEngine.GameObject) : boolean
                public static SetAvatarImage ($image: UnityEngine.GameObject, $avatarCfgId: number, $extraScale?: number, $extraOffy?: number) : void
                public static SetParticleOrderInChildren ($obj: UnityEngine.GameObject, $order?: number) : boolean
                public static GetCanvasOrderByParent ($obj: UnityEngine.GameObject) : number
                public static CalculateSign ($commandId: number, $body: string, $source: number) : string
                public static LoadWwwWithText ($url: string, $requestJson: string, $callId: number) : void
                public static UploadBinaryFileToVod ($url: string, $requestHead: string, $filePath: string, $callId: number) : void
                public static GenerateCosAuthorization ($secretId: string, $secretKey: string, $signTime: string, $httpMethod: string, $httpUri: string, $httpHeaders: string, $httpParameters: string) : string
                public static GenerateVodCommonSignature ($secretKey: string, $method: string, $host: string, $uri: string, $paramJson: string) : string
                public static CallBrokerFull ($callId: number, $jsonStr: string, $commandId: number, $type: number, $moduleId: number) : void
                public static SetShaderToPixUI ($shader: UnityEngine.Shader) : void
                public static InitRecordShareSDK () : void
                public static OpenURL ($scheme: string) : void
                public static ShareToSchema ($url: string) : boolean
                public static ShareUrlToWeiShi ($paramJson: string) : void
                public static GoToAppStore ($packageName: string, $myappDownloadURL: string) : void
                public static ShareToYingDi ($url: string) : boolean
                public static ShareVideoToWeiShi ($videoId: string, $videoPath: string) : void
                public static SynchronizeVideoToWeiShi ($paramJson: string) : void
                public static MsdkTeaEncode ($rawData: string) : string
                public static MsdkTeaDecode ($encodedDataBytes: System.Array$1<number>) : string
                public static GetUserAgent () : string
                public static GetSystemInfo () : string
                public static GetFileMd5 ($fileName: string) : string
                public static IsPreLogin () : boolean
                public constructor ()
            }
            class LuaVar extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class LuaFunction extends com.tencent.pandora.LuaVar implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class UserData extends System.Collections.Generic.Dictionary$2<string, string> implements System.Collections.IEnumerable, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<string, string>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<string, string>>, System.Collections.Generic.IDictionary$2<string, string>, System.Collections.IDictionary, System.Runtime.Serialization.IDeserializationCallback
            {
                protected [__keep_incompatibility]: never;
                public get sCountry(): string;
                public set sCountry(value: string);
                public get sAMSAppName(): string;
                public set sAMSAppName(value: string);
                public get sGameResVer(): string;
                public set sGameResVer(value: string);
                public get sUniqueRoleId(): string;
                public set sUniqueRoleId(value: string);
                public get sIsForeigner(): string;
                public set sIsForeigner(value: string);
                public get sLanguage(): string;
                public set sLanguage(value: string);
                public get sRoleId(): string;
                public set sRoleId(value: string);
                public get sOpenId(): string;
                public set sOpenId(value: string);
                public get sServiceType(): string;
                public set sServiceType(value: string);
                public get sAcountType(): string;
                public set sAcountType(value: string);
                public get sArea(): string;
                public set sArea(value: string);
                public get sPartition(): string;
                public set sPartition(value: string);
                public get sAppId(): string;
                public set sAppId(value: string);
                public get sAccessToken(): string;
                public set sAccessToken(value: string);
                public get sPayToken(): string;
                public set sPayToken(value: string);
                public get sGameVer(): string;
                public set sGameVer(value: string);
                public get sPlatID(): string;
                public set sPlatID(value: string);
                public get sQQInstalled(): string;
                public set sQQInstalled(value: string);
                public get sWXInstalled(): string;
                public set sWXInstalled(value: string);
                public get sGameName(): string;
                public set sGameName(value: string);
                public get sMSDKGameID(): string;
                public set sMSDKGameID(value: string);
                public get sSdkVersion(): string;
                public set sSdkVersion(value: string);
                public get sLevel(): string;
                public set sLevel(value: string);
                public get sVender(): string;
                public set sVender(value: string);
                public get sSign(): string;
                public set sSign(value: string);
                public get sExtend(): string;
                public set sExtend(value: string);
                public get sBrokerHost(): string;
                public set sBrokerHost(value: string);
                public get sBrokerIp(): string;
                public set sBrokerIp(value: string);
                public get sBrokerPort(): string;
                public set sBrokerPort(value: string);
                public get sOS(): string;
                public get sChannelID(): string;
                public IsRoleEmpty () : boolean
                public Clean () : void
                public Assign ($data: System.Collections.Generic.Dictionary$2<string, string>) : void
                public CalculateSign () : void
                public IsValidate () : boolean
                public Compare ($userdata: com.tencent.pandora.UserData) : boolean
                public constructor ()
            }
            class RemoteConfig extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public totalSwitch : boolean
                public isDebug : boolean
                public brokerHost : string
                public brokerPort : number
                public functionSwitchDict : System.Collections.Generic.Dictionary$2<string, boolean>
                public assetInfoListDict : System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>>
                public assetInfoDict : System.Collections.Generic.Dictionary$2<string, com.tencent.pandora.RemoteConfig.AssetInfo>
                public groupTypeInfo : System.Collections.Generic.Dictionary$2<string, com.tencent.pandora.RemoteConfig.GroupAssetType>
                public jsAssetInfoListDict : System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>>
                public groupInfoDict : System.Collections.Generic.Dictionary$2<string, com.tencent.pandora.RemoteConfig.GroupInfo>
                public md5ToGroupInfoDict : System.Collections.Generic.Dictionary$2<string, string>
                public urlToGroupInfoDict : System.Collections.Generic.Dictionary$2<string, string>
                public frameList : System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>
                public get IsEmpty(): boolean;
                public set IsEmpty(value: boolean);
                public get IsError(): boolean;
                public set IsError(value: boolean);
                public get IsUseLua(): boolean;
                public set IsUseLua(value: boolean);
                public get IsUseJs(): boolean;
                public set IsUseJs(value: boolean);
                public get EnabelResourceIsolation(): boolean;
                public set EnabelResourceIsolation(value: boolean);
                public GetFunctionSwitch ($functionName: string) : boolean
                public GetAssetPath ($assetName: string) : string
                public GetAssetInfo ($name: string, $appid: number) : com.tencent.pandora.RemoteConfig.AssetInfo
                public GetAssetInfo ($name: string) : com.tencent.pandora.RemoteConfig.AssetInfo
                public GetAssetInfo ($name: string, $groupName: string) : com.tencent.pandora.RemoteConfig.AssetInfo
                public GetGroupNameByUrl ($url: string) : string
                public IsPuertsFrameAsset ($assetProgramName: string, $assetType: com.tencent.pandora.AssetType) : boolean
                public IsFrameAssetByUrl ($asseturl: string) : boolean
                public ParseUShortField ($content: System.Collections.Generic.Dictionary$2<string, any>, $fieldName: string, $defaultValue?: number) : number
                public ConfigLocalAsset ($localDict: $Ref<System.Collections.Generic.Dictionary$2<string, com.tencent.pandora.RemoteConfig.AssetInfo>>, $localListDict: $Ref<System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>>>) : void
                public ConfigLocalAsset ($localAsset: System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.ProgramAsset>>, $localDict: $Ref<System.Collections.Generic.Dictionary$2<string, com.tencent.pandora.RemoteConfig.AssetInfo>>, $localListDict: $Ref<System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>>>) : void
                public GetLocalAssetInfoList ($localProgramList: System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.ProgramAsset>) : System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>
            }
            class LuaTable extends com.tencent.pandora.LuaVar implements System.Collections.Generic.IEnumerable$1<com.tencent.pandora.LuaTable.TablePair>, System.Collections.IEnumerable, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class PVideoPlayer extends UnityEngine.MonoBehaviour implements com.tencent.pandora.IVideoPlayer
            {
                protected [__keep_incompatibility]: never;
            }
            interface IVideoPlayer
            {
            }
            interface RecordNotify
            { 
            (jsonResult: string) : void; 
            Invoke?: (jsonResult: string) => void;
            }
            var RecordNotify: { new (func: (jsonResult: string) => void): RecordNotify; }
            class BulletScreen extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            enum PlatformType
            { InternalPlatform = 0, OpenPlatformWithSocket = 1 }
            class Logger extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public static Log ($message: string) : void
                public static LogInfo ($message: string) : void
                public static LogWarning ($message: string) : void
                public static LogError ($message: string) : void
                public constructor ()
            }
            class JsEnvManager extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get InterputProgress(): boolean;
                public static set InterputProgress(value: boolean);
                public static get ResponsePxWindowShutdown(): boolean;
                public static set ResponsePxWindowShutdown(value: boolean);
                public static IsInitialized () : boolean
                public static GetJsEnv () : Puerts.JsEnv
                public static AddCUIEventDispatchDelegate ($eventDispatchDelegate: com.tencent.pandora.JsEnvManager.CUIEventDispatchDelegate) : void
                public static AddCommandFromGameDelegate ($cmdFromGameDelegate: com.tencent.pandora.JsEnvManager.CommandFromGameDelegate) : void
                public static AddExecuteCallbackDelegate ($callback: com.tencent.pandora.JsEnvManager.ExecuteCallbackDelegate) : void
                public static AddRefreshTimestampDelegate ($callback: com.tencent.pandora.JsEnvManager.RefreshTimestampDelegate) : void
                public static AddSetApplicationConfigDelegate ($callback: com.tencent.pandora.JsEnvManager.SetApplicationConfigDelegate) : void
                public static AddJsUsingAction ($callback: com.tencent.pandora.JsEnvManager.SetJsAddUsingAction) : void
                public static ExecuteJsUsingAction ($env: Puerts.JsEnv) : void
                public static AddGetBuiltinModulesDelegate ($callback: com.tencent.pandora.JsEnvManager.GetBuiltInModulesDelegate) : void
                public static Initialize () : void
                public static DoFile ($pathName: string, $addPuertsPrefix?: boolean) : void
                public static DoJsFileInFileInfoList ($group: string, $fileInfoList: System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>) : void
                public static CallJsFunction ($functionName: string, ...args: any[]) : void
                public static Shutdown () : void
                public static GC () : void
                public static ReportJsError ($errMsg: string) : void
                public static IsBuiltinModule ($moduleName: string) : boolean
                public static DisposeJsEnv ($jsenv: Puerts.JsEnv, $windowId: number) : void
                public constructor ()
            }
            class IPuerPixUILoader extends Puerts.ILoader
            {
                protected [__keep_incompatibility]: never;
            }
            class JsSrcLoader extends com.tencent.pandora.IPuerPixUILoader
            {
                protected [__keep_incompatibility]: never;
                public get PuertJsSchema(): string;
                public set PuertJsSchema(value: string);
                public AddLoader ($loader: com.tencent.pandora.AbstractPuertsLoader) : void
                public constructor ()
            }
            class AbstractPuertsLoader extends com.tencent.pandora.IPuerPixUILoader
            {
                protected [__keep_incompatibility]: never;
            }
            enum AssetType
            { Lua = 0, Js = 1, Prefab = 2, Image = 3, Assetbundle = 4, Text = 5, Portrait = 6, Audio = 7, Binary = 8, RawData = 9, Zip = 10 }
            class LocalDirectoryHelper extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Initialize () : void
                public static CreateIfNotExists () : void
                public static GetPandoraRoot () : string
                public static GetLogFolderPath () : string
                public static GetSettingsFolderPath () : string
                public static GetProgramAssetFolderPath () : string
                public static GetCookieFolderPath () : string
                public static GetProgramAssetMetaPath () : string
                public static GetAssetFolderPath () : string
                public static GetAppSandboxFolderPath () : string
                public static GetStreamingAssetsUrl () : string
                public static IsStreamingAssetsExists ($name: string) : boolean
                public static DeleteExpiredCookie () : void
                public static DeleteExpiredAsset () : void
                public static DeleteExpiredLog () : void
                public static Clean () : void
                public static DeleteCookies () : void
                public static DeleteLogs () : void
                public static DeleteAssetByUrl ($url: string) : void
                public constructor ()
            }
            class TypeWritterEffect extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public OnFinished : UnityEngine.Events.UnityEvent
                public get DisplayInterval(): number;
                public set DisplayInterval(value: number);
                public get SupportRichText(): boolean;
                public set SupportRichText(value: boolean);
                public StartDisplay () : void
                public constructor ()
            }
            class EventTriggerListener extends UnityEngine.EventSystems.EventTrigger implements UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.IDropHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.ICancelHandler
            {
                protected [__keep_incompatibility]: never;
                public onClick : com.tencent.pandora.EventTriggerListener.VoidDelegate
                public onDown : com.tencent.pandora.EventTriggerListener.VoidDelegate
                public onUp : com.tencent.pandora.EventTriggerListener.VoidDelegate
                public onBeginDrag : com.tencent.pandora.EventTriggerListener.VoidDelegate
                public onDrag : com.tencent.pandora.EventTriggerListener.VoidDelegate
                public onNewEndDrag : com.tencent.pandora.EventTriggerListener.VoidDelegate
                public onEndDrag : com.tencent.pandora.EventTriggerListener.VoidDelegateDrag
                public static Get ($go: UnityEngine.GameObject) : com.tencent.pandora.EventTriggerListener
                public static Get ($transform: UnityEngine.Transform) : com.tencent.pandora.EventTriggerListener
                public constructor ()
            }
            enum AccountType
            { QQ = 0, WX = 1, TTPP = 2, FACEBOOK = 3, GOOGLE = 4 }
            class AssetManager extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Initialize () : void
                public static LoadRemoteConfig ($userData: com.tencent.pandora.UserData, $callback: System.Action$1<com.tencent.pandora.RemoteConfig>) : void
                public static LoadWww ($url: string, $requestJson: string, $isPost: boolean, $callback: System.Action$1<string>) : void
                public static LoadWww ($url: string, $requestJson: string, $binaryData: System.Array$1<number>, $isPost: boolean, $callback: System.Action$1<string>) : void
                public static PostString ($url: string, $requestJson: string, $postData: string, $callback: System.Action$1<string>, $timeout: number, $requestHeaders: string) : void
                public static LoadWww ($url: string, $requestJson: string, $callback: System.Action$1<string>) : void
                public static LoadRequestHttpPut ($url: string, $requestBody: System.Array$1<number>, $requestHead: string, $callback: System.Action$2<string, string>) : void
                public static LoadRequestHttpPost ($url: string, $requestData: System.Array$1<number>, $requestHeaders: string, $callback: System.Action$1<string>) : void
                public static LoadBinaryFile ($filePath: string, $callback: System.Action$2<boolean, System.Array$1<number>>) : void
                public static CacheAsset ($url: string, $callback: System.Action$1<string>) : void
                public static SetProgramAssetProgressCallback ($callback: System.Action$1<System.Collections.Generic.Dictionary$2<string, string>>) : void
                public static LoadProgramAssetList ($group: string, $assetInfoList: System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>, $callback: System.Action$2<string, System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>>, $isJsGroup?: boolean, $needLoadToMemory?: boolean) : void
                public static VerifyProgramAsset ($url: string, $assetMd5: string) : boolean
                public static GetPanelGameObject ($assetInfo: com.tencent.pandora.RemoteConfig.AssetInfo, $callback: System.Action$1<UnityEngine.GameObject>) : void
                public static GetBinary ($url: string, $callback: System.Action$1<any>) : void
                public static GetZip ($url: string, $callback: System.Action$1<any>) : void
                public static GetText ($url: string, $callback: System.Action$1<string>) : void
                public static GetRawData ($url: string, $callback: System.Action$1<System.Array$1<number>>) : void
                public static GetGameObject ($url: string, $isCacheInMemory: boolean, $callback: System.Action$1<UnityEngine.GameObject>) : void
                public static GetGameObject ($url: string, $isCacheInMemory: boolean, $isProgramAsset: boolean, $callback: System.Action$1<UnityEngine.GameObject>) : void
                public static GetAssetBundle ($url: string, $callback: System.Action$1<UnityEngine.AssetBundle>) : void
                public static GetImage ($url: string, $isCacheInMemory: boolean, $callback: System.Action$1<UnityEngine.Texture2D>) : void
                public static GetPortrait ($url: string, $isCacheInMemory: boolean, $callback: System.Action$1<UnityEngine.Texture2D>) : void
                public static GetAudioClip ($url: string, $isCacheInMemory: boolean, $callback: System.Action$1<UnityEngine.AudioClip>) : void
                public static LoadAsset ($url: string, $callback: System.Action$1<string>) : void
                public static GetLuaBytes ($name: string) : System.Array$1<number>
                public static DeleteCachedAsset ($url: string, $isProgramAsset?: boolean) : void
                public static IsLoadProgramAssetFromStreamingAssetsFolder () : boolean
                public static ReleaseLuaAsset ($name: string) : void
                public static ReleaseProgramAsset ($assetInfo: com.tencent.pandora.RemoteConfig.AssetInfo) : void
                public static ReleaseAsset ($url: string) : void
                public static GetAsset ($url: string) : any
                public static IsProgramAssetCached ($assetInfoList: System.Collections.Generic.List$1<com.tencent.pandora.RemoteConfig.AssetInfo>) : boolean
                public static IsAssetCached ($url: string, $isProgramAsset?: boolean) : boolean
                public static GetCachedName ($url: string) : string
                public static GetCachedAssetUrl ($url: string, $isProgramAsset: boolean) : string
                public static GetCachedAssetPath ($url: string, $isProgramAsset?: boolean) : string
                public static GetAssetPoolKey ($url: string, $isProgramAsset: boolean) : string
                public static Clear () : void
                public static DeleteZeroReferenceAsset ($isForce?: boolean) : void
                public static ForceDeleteZeroReferenceTexture ($url: string) : void
                public static WriteAllBytes ($path: string, $bytes: System.Array$1<number>, $errorCode: number) : void
                public static GetGameletAppAssetbundleName ($appId: number, $appName: string, $assetName: string) : string
                public static GetGameletAppAssetbundleName ($platformId: string, $appId: number, $appName: string, $assetName: string) : string
                public constructor ()
            }
            class AbstractLoader extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class AssetLoader extends com.tencent.pandora.AbstractLoader
            {
                protected [__keep_incompatibility]: never;
                public LoadScriptAssetList ($configList: System.Collections.Generic.List$1<com.tencent.pandora.AssetConfig>, $callback: System.Action$1<System.Collections.Generic.List$1<string>>) : void
                public LoadAsset ($config: com.tencent.pandora.AssetConfig, $callback: System.Action$1<string>) : void
                public constructor ()
            }
            class AssetConfig extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class LongPressOrClickEventTrigger extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public durationThreshold : number
                public get onLongPress(): com.tencent.pandora.UGUIEventListener.VoidDelegate;
                public set onLongPress(value: com.tencent.pandora.UGUIEventListener.VoidDelegate);
                public get onClick(): com.tencent.pandora.UGUIEventListener.VoidDelegate;
                public set onClick(value: com.tencent.pandora.UGUIEventListener.VoidDelegate);
                public get onCancle(): com.tencent.pandora.UGUIEventListener.VoidDelegate;
                public set onCancle(value: com.tencent.pandora.UGUIEventListener.VoidDelegate);
                public SetDurationThreshold ($time: number) : void
                public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public constructor ()
            }
            class PanelManager extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static SUCCESS : number
                public static ERROR_ASSET_NOT_EXISTS : number
                public static ERROR_NO_PARENT : number
                public static ERROR_ALREADY_EXISTS : number
                public static Initialize () : void
                public static SetPanelParent ($name: string, $parent: UnityEngine.GameObject) : void
                public static GetPanelParent ($name: string) : UnityEngine.GameObject
                public static GetPanel ($name: string) : UnityEngine.GameObject
                public static CreatePanel ($name: string, $groupName: string, $callback: System.Action$1<number>) : void
                public static OnGetGameObject ($go: UnityEngine.GameObject, $groupName: string, $callback: System.Action$1<number>) : void
                public static ShowPortrait ($panelName: string, $url: string, $go: UnityEngine.GameObject, $isCacheInMemory: boolean, $callback: System.Action$1<number>) : void
                public static ShowImage ($panelName: string, $url: string, $go: UnityEngine.GameObject, $isCacheInMemory: boolean, $callback: System.Action$1<number>) : void
                public static Hide ($name: string) : void
                public static HideAll () : void
                public static Destroy ($name: string) : void
                public static DestroyAll () : void
                public static GetPanelAssetFullName ($name: string) : string
                public constructor ()
            }
            class PanelOnDestroyHook extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public luaCallbackOnDestroy : com.tencent.pandora.LuaFunction
                public constructor ()
            }
            class UGUIEventListener extends UnityEngine.MonoBehaviour implements UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IPointerUpHandler
            {
                protected [__keep_incompatibility]: never;
                public onClick : com.tencent.pandora.UGUIEventListener.VoidDelegate
                public onDrag : com.tencent.pandora.UGUIEventListener.VectorDelegate
                public onPointerUp : com.tencent.pandora.UGUIEventListener.VoidDelegate
                public onPointerDown : com.tencent.pandora.UGUIEventListener.VoidDelegate
                public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerUp ($evtdata: UnityEngine.EventSystems.PointerEventData) : void
                public constructor ()
            }
            class WaterfallScrollViewHelper extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IEndDragHandler
            {
                protected [__keep_incompatibility]: never;
                public itemTemplate : UnityEngine.GameObject
                public itemPool : UnityEngine.GameObject
                public _itemFillDelegate : System.Action$2<UnityEngine.GameObject, number>
                public _itemRecycleDelegate : System.Action$1<UnityEngine.GameObject>
                public onReachTop : UnityEngine.Events.UnityEvent
                public onReachBottom : UnityEngine.Events.UnityEvent
                public get ItemDefaultHeight(): number;
                public set ItemDefaultHeight(value: number);
                public get ItemCount(): number;
                public set ItemCount(value: number);
                public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public SetItemFillDelegate ($itemFillDelegate: System.Action$2<UnityEngine.GameObject, number>) : void
                public SetItemRecycleDelegate ($itemRecycleDelegate: System.Action$1<UnityEngine.GameObject>) : void
                public Fill () : void
                public RefreshLayout ($index: number) : void
                public Forward () : void
                public Backward () : void
                public RefreshUpBundary () : void
                public RefreshBottomBundary () : void
                public Clear () : void
                public constructor ()
            }
        }
        namespace UnityEngine.UI {
            class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICanvasElement
            {
            }
            class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            interface IClippable
            {
            }
            interface IMaskable
            {
            }
            interface IMaterialModifier
            {
            }
            class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.ISerializationCallbackReceiver, UnityEngine.UI.ILayoutElement, UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public m_isNotUseCustomMatPool : boolean
                public static s_customMatDic : System.Collections.Generic.Dictionary$2<number, UnityEngine.Material>
                public static s_customMatAlphaSplitDic : System.Collections.Generic.Dictionary$2<number, UnityEngine.Material>
                public get sprite(): UnityEngine.Sprite;
                public set sprite(value: UnityEngine.Sprite);
                public get overrideSprite(): UnityEngine.Sprite;
                public set overrideSprite(value: UnityEngine.Sprite);
                public get type(): UnityEngine.UI.Image.Type;
                public set type(value: UnityEngine.UI.Image.Type);
                public get preserveAspect(): boolean;
                public set preserveAspect(value: boolean);
                public get fillCenter(): boolean;
                public set fillCenter(value: boolean);
                public get fillMethod(): UnityEngine.UI.Image.FillMethod;
                public set fillMethod(value: UnityEngine.UI.Image.FillMethod);
                public get fillAmount(): number;
                public set fillAmount(value: number);
                public get fillClockwise(): boolean;
                public set fillClockwise(value: boolean);
                public get fillOrigin(): number;
                public set fillOrigin(value: number);
                public get alphaHitTestMinimumThreshold(): number;
                public set alphaHitTestMinimumThreshold(value: number);
                public static get defaultETC1GraphicMaterial(): UnityEngine.Material;
                public get mainTexture(): UnityEngine.Texture;
                public get hasBorder(): boolean;
                public get pixelsPerUnit(): number;
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public GetCustomMatWithDic ($matDic: System.Collections.Generic.Dictionary$2<number, UnityEngine.Material>, $sourceMat: UnityEngine.Material, $isUseAlphaSplit: boolean) : UnityEngine.Material
                public OnBeforeSerialize () : void
                public OnAfterDeserialize () : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public IsRaycastLocationValid ($screenPoint: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
            }
            interface ILayoutElement
            {
            }
            class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public static get allSelectables(): System.Collections.Generic.List$1<UnityEngine.UI.Selectable>;
                public get navigation(): UnityEngine.UI.Navigation;
                public set navigation(value: UnityEngine.UI.Navigation);
                public get transition(): UnityEngine.UI.Selectable.Transition;
                public set transition(value: UnityEngine.UI.Selectable.Transition);
                public get colors(): UnityEngine.UI.ColorBlock;
                public set colors(value: UnityEngine.UI.ColorBlock);
                public get spriteState(): UnityEngine.UI.SpriteState;
                public set spriteState(value: UnityEngine.UI.SpriteState);
                public get animationTriggers(): UnityEngine.UI.AnimationTriggers;
                public set animationTriggers(value: UnityEngine.UI.AnimationTriggers);
                public get targetGraphic(): UnityEngine.UI.Graphic;
                public set targetGraphic(value: UnityEngine.UI.Graphic);
                public get interactable(): boolean;
                public set interactable(value: boolean);
                public get image(): UnityEngine.UI.Image;
                public set image(value: UnityEngine.UI.Image);
                public get animator(): UnityEngine.Animator;
                public IsInteractable () : boolean
                public FindSelectable ($dir: UnityEngine.Vector3) : UnityEngine.UI.Selectable
                public FindSelectableOnLeft () : UnityEngine.UI.Selectable
                public FindSelectableOnRight () : UnityEngine.UI.Selectable
                public FindSelectableOnUp () : UnityEngine.UI.Selectable
                public FindSelectableOnDown () : UnityEngine.UI.Selectable
                public OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
                public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public Select () : void
            }
            class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
                public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public get cachedTextGenerator(): UnityEngine.TextGenerator;
                public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
                public get mainTexture(): UnityEngine.Texture;
                public get font(): UnityEngine.Font;
                public set font(value: UnityEngine.Font);
                public get text(): string;
                public set text(value: string);
                public get supportRichText(): boolean;
                public set supportRichText(value: boolean);
                public get resizeTextForBestFit(): boolean;
                public set resizeTextForBestFit(value: boolean);
                public get resizeTextMinSize(): number;
                public set resizeTextMinSize(value: number);
                public get resizeTextMaxSize(): number;
                public set resizeTextMaxSize(value: number);
                public get alignment(): UnityEngine.TextAnchor;
                public set alignment(value: UnityEngine.TextAnchor);
                public get alignByGeometry(): boolean;
                public set alignByGeometry(value: boolean);
                public get fontSize(): number;
                public set fontSize(value: number);
                public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
                public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
                public get verticalOverflow(): UnityEngine.VerticalWrapMode;
                public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
                public get lineSpacing(): number;
                public set lineSpacing(value: number);
                public get fontStyle(): UnityEngine.FontStyle;
                public set fontStyle(value: UnityEngine.FontStyle);
                public get pixelsPerUnit(): number;
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public FontTextureChanged () : void
                public GetGenerationSettings ($extents: UnityEngine.Vector2) : UnityEngine.TextGenerationSettings
                public static GetTextAnchorPivot ($anchor: UnityEngine.TextAnchor) : UnityEngine.Vector2
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
            }
            class Navigation extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.Navigation>
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorBlock extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.ColorBlock>
            {
                protected [__keep_incompatibility]: never;
            }
            class SpriteState extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.SpriteState>
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimationTriggers extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class InputField extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public get shouldHideMobileInput(): boolean;
                public set shouldHideMobileInput(value: boolean);
                public get text(): string;
                public set text(value: string);
                public get isFocused(): boolean;
                public get caretBlinkRate(): number;
                public set caretBlinkRate(value: number);
                public get caretWidth(): number;
                public set caretWidth(value: number);
                public get textComponent(): UnityEngine.UI.Text;
                public set textComponent(value: UnityEngine.UI.Text);
                public get placeholder(): UnityEngine.UI.Graphic;
                public set placeholder(value: UnityEngine.UI.Graphic);
                public get caretColor(): UnityEngine.Color;
                public set caretColor(value: UnityEngine.Color);
                public get customCaretColor(): boolean;
                public set customCaretColor(value: boolean);
                public get selectionColor(): UnityEngine.Color;
                public set selectionColor(value: UnityEngine.Color);
                public get onEndEdit(): UnityEngine.UI.InputField.SubmitEvent;
                public set onEndEdit(value: UnityEngine.UI.InputField.SubmitEvent);
                public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
                public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
                public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
                public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
                public get characterLimit(): number;
                public set characterLimit(value: number);
                public get contentType(): UnityEngine.UI.InputField.ContentType;
                public set contentType(value: UnityEngine.UI.InputField.ContentType);
                public get lineType(): UnityEngine.UI.InputField.LineType;
                public set lineType(value: UnityEngine.UI.InputField.LineType);
                public get inputType(): UnityEngine.UI.InputField.InputType;
                public set inputType(value: UnityEngine.UI.InputField.InputType);
                public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
                public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
                public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
                public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
                public get readOnly(): boolean;
                public set readOnly(value: boolean);
                public get multiLine(): boolean;
                public get asteriskChar(): number;
                public set asteriskChar(value: number);
                public get wasCanceled(): boolean;
                public get caretPosition(): number;
                public set caretPosition(value: number);
                public get selectionAnchorPosition(): number;
                public set selectionAnchorPosition(value: number);
                public get selectionFocusPosition(): number;
                public set selectionFocusPosition(value: number);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public MoveTextEnd ($shift: boolean) : void
                public MoveTextStart ($shift: boolean) : void
                public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public ProcessEvent ($e: UnityEngine.Event) : void
                public OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public ForceLabelUpdate () : void
                public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public ActivateInputField () : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public DeactivateInputField () : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
            }
            enum CanvasUpdate
            { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
            class Toggle extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public toggleTransition : UnityEngine.UI.Toggle.ToggleTransition
                public graphic : UnityEngine.UI.Graphic
                public onValueChanged : UnityEngine.UI.Toggle.ToggleEvent
                public get group(): UnityEngine.UI.ToggleGroup;
                public set group(value: UnityEngine.UI.ToggleGroup);
                public get isOn(): boolean;
                public set isOn(value: boolean);
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
                public get allowSwitchOff(): boolean;
                public set allowSwitchOff(value: boolean);
                public NotifyToggleOn ($toggle: UnityEngine.UI.Toggle) : void
                public UnregisterToggle ($toggle: UnityEngine.UI.Toggle) : void
                public RegisterToggle ($toggle: UnityEngine.UI.Toggle) : void
                public AnyTogglesOn () : boolean
                public ActiveToggles () : System.Collections.Generic.IEnumerable$1<UnityEngine.UI.Toggle>
                public SetAllTogglesOff () : void
            }
            class LayoutGroup extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
                public get padding(): UnityEngine.RectOffset;
                public set padding(value: UnityEngine.RectOffset);
                public get childAlignment(): UnityEngine.TextAnchor;
                public set childAlignment(value: UnityEngine.TextAnchor);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public SetLayoutHorizontal () : void
                public SetLayoutVertical () : void
            }
            interface ILayoutGroup extends UnityEngine.UI.ILayoutController
            {
            }
            interface ILayoutController
            {
            }
            class GridLayoutGroup extends UnityEngine.UI.LayoutGroup implements UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
                public get startCorner(): UnityEngine.UI.GridLayoutGroup.Corner;
                public set startCorner(value: UnityEngine.UI.GridLayoutGroup.Corner);
                public get startAxis(): UnityEngine.UI.GridLayoutGroup.Axis;
                public set startAxis(value: UnityEngine.UI.GridLayoutGroup.Axis);
                public get cellSize(): UnityEngine.Vector2;
                public set cellSize(value: UnityEngine.Vector2);
                public get spacing(): UnityEngine.Vector2;
                public set spacing(value: UnityEngine.Vector2);
                public get constraint(): UnityEngine.UI.GridLayoutGroup.Constraint;
                public set constraint(value: UnityEngine.UI.GridLayoutGroup.Constraint);
                public get constraintCount(): number;
                public set constraintCount(value: number);
            }
            class HorizontalOrVerticalLayoutGroup extends UnityEngine.UI.LayoutGroup implements UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
            }
            class HorizontalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup implements UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
            }
            class VerticalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup implements UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
            }
            class RawImage extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public get mainTexture(): UnityEngine.Texture;
                public get texture(): UnityEngine.Texture;
                public set texture(value: UnityEngine.Texture);
                public get uvRect(): UnityEngine.Rect;
                public set uvRect(value: UnityEngine.Rect);
            }
            class Scrollbar extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public get handleRect(): UnityEngine.RectTransform;
                public set handleRect(value: UnityEngine.RectTransform);
                public get direction(): UnityEngine.UI.Scrollbar.Direction;
                public set direction(value: UnityEngine.UI.Scrollbar.Direction);
                public get value(): number;
                public set value(value: number);
                public get size(): number;
                public set size(value: number);
                public get numberOfSteps(): number;
                public set numberOfSteps(value: number);
                public get onValueChanged(): UnityEngine.UI.Scrollbar.ScrollEvent;
                public set onValueChanged(value: UnityEngine.UI.Scrollbar.ScrollEvent);
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public SetDirection ($direction: UnityEngine.UI.Scrollbar.Direction, $includeRectLayouts: boolean) : void
            }
            class ScrollRect extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IScrollHandler, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
                public get content(): UnityEngine.RectTransform;
                public set content(value: UnityEngine.RectTransform);
                public get horizontal(): boolean;
                public set horizontal(value: boolean);
                public get vertical(): boolean;
                public set vertical(value: boolean);
                public get movementType(): UnityEngine.UI.ScrollRect.MovementType;
                public set movementType(value: UnityEngine.UI.ScrollRect.MovementType);
                public get elasticity(): number;
                public set elasticity(value: number);
                public get inertia(): boolean;
                public set inertia(value: boolean);
                public get decelerationRate(): number;
                public set decelerationRate(value: number);
                public get scrollSensitivity(): number;
                public set scrollSensitivity(value: number);
                public get viewport(): UnityEngine.RectTransform;
                public set viewport(value: UnityEngine.RectTransform);
                public get horizontalScrollbar(): UnityEngine.UI.Scrollbar;
                public set horizontalScrollbar(value: UnityEngine.UI.Scrollbar);
                public get verticalScrollbar(): UnityEngine.UI.Scrollbar;
                public set verticalScrollbar(value: UnityEngine.UI.Scrollbar);
                public get horizontalScrollbarVisibility(): UnityEngine.UI.ScrollRect.ScrollbarVisibility;
                public set horizontalScrollbarVisibility(value: UnityEngine.UI.ScrollRect.ScrollbarVisibility);
                public get verticalScrollbarVisibility(): UnityEngine.UI.ScrollRect.ScrollbarVisibility;
                public set verticalScrollbarVisibility(value: UnityEngine.UI.ScrollRect.ScrollbarVisibility);
                public get horizontalScrollbarSpacing(): number;
                public set horizontalScrollbarSpacing(value: number);
                public get verticalScrollbarSpacing(): number;
                public set verticalScrollbarSpacing(value: number);
                public get onValueChanged(): UnityEngine.UI.ScrollRect.ScrollRectEvent;
                public set onValueChanged(value: UnityEngine.UI.ScrollRect.ScrollRectEvent);
                public get velocity(): UnityEngine.Vector2;
                public set velocity(value: UnityEngine.Vector2);
                public get normalizedPosition(): UnityEngine.Vector2;
                public set normalizedPosition(value: UnityEngine.Vector2);
                public get horizontalNormalizedPosition(): number;
                public set horizontalNormalizedPosition(value: number);
                public get verticalNormalizedPosition(): number;
                public set verticalNormalizedPosition(value: number);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public StopMovement () : void
                public OnScroll ($data: UnityEngine.EventSystems.PointerEventData) : void
                public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public SetLayoutHorizontal () : void
                public SetLayoutVertical () : void
            }
            class Slider extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public get fillRect(): UnityEngine.RectTransform;
                public set fillRect(value: UnityEngine.RectTransform);
                public get handleRect(): UnityEngine.RectTransform;
                public set handleRect(value: UnityEngine.RectTransform);
                public get direction(): UnityEngine.UI.Slider.Direction;
                public set direction(value: UnityEngine.UI.Slider.Direction);
                public get minValue(): number;
                public set minValue(value: number);
                public get maxValue(): number;
                public set maxValue(value: number);
                public get wholeNumbers(): boolean;
                public set wholeNumbers(value: boolean);
                public get value(): number;
                public set value(value: number);
                public get normalizedValue(): number;
                public set normalizedValue(value: number);
                public get onValueChanged(): UnityEngine.UI.Slider.SliderEvent;
                public set onValueChanged(value: UnityEngine.UI.Slider.SliderEvent);
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public SetDirection ($direction: UnityEngine.UI.Slider.Direction, $includeRectLayouts: boolean) : void
            }
            class Dropdown extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IPointerClickHandler, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.ICancelHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IDeselectHandler
            {
                protected [__keep_incompatibility]: never;
                public get template(): UnityEngine.RectTransform;
                public set template(value: UnityEngine.RectTransform);
                public get captionText(): UnityEngine.UI.Text;
                public set captionText(value: UnityEngine.UI.Text);
                public get captionImage(): UnityEngine.UI.Image;
                public set captionImage(value: UnityEngine.UI.Image);
                public get itemText(): UnityEngine.UI.Text;
                public set itemText(value: UnityEngine.UI.Text);
                public get itemImage(): UnityEngine.UI.Image;
                public set itemImage(value: UnityEngine.UI.Image);
                public get options(): System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>;
                public set options(value: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>);
                public get onValueChanged(): UnityEngine.UI.Dropdown.DropdownEvent;
                public set onValueChanged(value: UnityEngine.UI.Dropdown.DropdownEvent);
                public get value(): number;
                public set value(value: number);
                public RefreshShownValue () : void
                public AddOptions ($options: System.Collections.Generic.List$1<UnityEngine.UI.Dropdown.OptionData>) : void
                public AddOptions ($options: System.Collections.Generic.List$1<string>) : void
                public AddOptions ($options: System.Collections.Generic.List$1<UnityEngine.Sprite>) : void
                public ClearOptions () : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public OnCancel ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public Show () : void
                public Hide () : void
            }
            class CanvasScaler extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
                public get uiScaleMode(): UnityEngine.UI.CanvasScaler.ScaleMode;
                public set uiScaleMode(value: UnityEngine.UI.CanvasScaler.ScaleMode);
                public get referencePixelsPerUnit(): number;
                public set referencePixelsPerUnit(value: number);
                public get scaleFactor(): number;
                public set scaleFactor(value: number);
                public get referenceResolution(): UnityEngine.Vector2;
                public set referenceResolution(value: UnityEngine.Vector2);
                public get screenMatchMode(): UnityEngine.UI.CanvasScaler.ScreenMatchMode;
                public set screenMatchMode(value: UnityEngine.UI.CanvasScaler.ScreenMatchMode);
                public get matchWidthOrHeight(): number;
                public set matchWidthOrHeight(value: number);
                public get physicalUnit(): UnityEngine.UI.CanvasScaler.Unit;
                public set physicalUnit(value: UnityEngine.UI.CanvasScaler.Unit);
                public get fallbackScreenDPI(): number;
                public set fallbackScreenDPI(value: number);
                public get defaultSpriteDPI(): number;
                public set defaultSpriteDPI(value: number);
                public get dynamicPixelsPerUnit(): number;
                public set dynamicPixelsPerUnit(value: number);
            }
            class Clipping extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static FindCullAndClipWorldRect ($rectMaskParents: System.Collections.Generic.List$1<UnityEngine.UI.RectMask2D>, $validRect: $Ref<boolean>) : UnityEngine.Rect
            }
            class RectMask2D extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.IClipper, UnityEngine.ICanvasRaycastFilter
            {
                protected [__keep_incompatibility]: never;
                public get canvasRect(): UnityEngine.Rect;
                public get rectTransform(): UnityEngine.RectTransform;
                public IsRaycastLocationValid ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
                public PerformClipping () : void
                public AddClippable ($clippable: UnityEngine.UI.IClippable) : void
                public RemoveClippable ($clippable: UnityEngine.UI.IClippable) : void
            }
            interface IClipper
            {
            }
            class FontData extends System.Object implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public static get defaultFontData(): UnityEngine.UI.FontData;
                public get font(): UnityEngine.Font;
                public set font(value: UnityEngine.Font);
                public get fontSize(): number;
                public set fontSize(value: number);
                public get fontStyle(): UnityEngine.FontStyle;
                public set fontStyle(value: UnityEngine.FontStyle);
                public get bestFit(): boolean;
                public set bestFit(value: boolean);
                public get minSize(): number;
                public set minSize(value: number);
                public get maxSize(): number;
                public set maxSize(value: number);
                public get alignment(): UnityEngine.TextAnchor;
                public set alignment(value: UnityEngine.TextAnchor);
                public get alignByGeometry(): boolean;
                public set alignByGeometry(value: boolean);
                public get richText(): boolean;
                public set richText(value: boolean);
                public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
                public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
                public get verticalOverflow(): UnityEngine.VerticalWrapMode;
                public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
                public get lineSpacing(): number;
                public set lineSpacing(value: number);
                public constructor ()
            }
            class GraphicRaycaster extends UnityEngine.EventSystems.BaseRaycaster
            {
                protected [__keep_incompatibility]: never;
                public get sortOrderPriority(): number;
                public get renderOrderPriority(): number;
                public get ignoreReversedGraphics(): boolean;
                public set ignoreReversedGraphics(value: boolean);
                public get blockingObjects(): UnityEngine.UI.GraphicRaycaster.BlockingObjects;
                public set blockingObjects(value: UnityEngine.UI.GraphicRaycaster.BlockingObjects);
                public get eventCamera(): UnityEngine.Camera;
            }
            class LayoutUtility extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetMinSize ($rect: UnityEngine.RectTransform, $axis: number) : number
                public static GetPreferredSize ($rect: UnityEngine.RectTransform, $axis: number) : number
                public static GetFlexibleSize ($rect: UnityEngine.RectTransform, $axis: number) : number
                public static GetMinWidth ($rect: UnityEngine.RectTransform) : number
                public static GetPreferredWidth ($rect: UnityEngine.RectTransform) : number
                public static GetFlexibleWidth ($rect: UnityEngine.RectTransform) : number
                public static GetMinHeight ($rect: UnityEngine.RectTransform) : number
                public static GetPreferredHeight ($rect: UnityEngine.RectTransform) : number
                public static GetFlexibleHeight ($rect: UnityEngine.RectTransform) : number
                public static GetLayoutProperty ($rect: UnityEngine.RectTransform, $property: System.Func$2<UnityEngine.UI.ILayoutElement, number>, $defaultValue: number) : number
                public static GetLayoutProperty ($rect: UnityEngine.RectTransform, $property: System.Func$2<UnityEngine.UI.ILayoutElement, number>, $defaultValue: number, $source: $Ref<UnityEngine.UI.ILayoutElement>) : number
            }
            class Mask extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.IMaterialModifier
            {
                protected [__keep_incompatibility]: never;
                public get rectTransform(): UnityEngine.RectTransform;
                public get showMaskGraphic(): boolean;
                public set showMaskGraphic(value: boolean);
                public get graphic(): UnityEngine.UI.Graphic;
                public MaskEnabled () : boolean
                public IsRaycastLocationValid ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
                public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
            }
            class MaskUtilities extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Notify2DMaskStateChanged ($mask: UnityEngine.Component) : void
                public static NotifyStencilStateChanged ($mask: UnityEngine.Component) : void
                public static FindRootSortOverrideCanvas ($start: UnityEngine.Transform) : UnityEngine.Transform
                public static GetStencilDepth ($transform: UnityEngine.Transform, $stopAfter: UnityEngine.Transform) : number
                public static IsDescendantOrSelf ($father: UnityEngine.Transform, $child: UnityEngine.Transform) : boolean
                public static GetRectMaskForClippable ($clippable: UnityEngine.UI.IClippable) : UnityEngine.UI.RectMask2D
                public static GetRectMasksForClip ($clipper: UnityEngine.UI.RectMask2D, $masks: System.Collections.Generic.List$1<UnityEngine.UI.RectMask2D>) : void
                public constructor ()
            }
            class BaseMeshEffect extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.IMeshModifier
            {
                protected [__keep_incompatibility]: never;
            }
            interface IMeshModifier
            {
            }
            class Shadow extends UnityEngine.UI.BaseMeshEffect implements UnityEngine.UI.IMeshModifier
            {
                protected [__keep_incompatibility]: never;
                public get effectColor(): UnityEngine.Color;
                public set effectColor(value: UnityEngine.Color);
                public get effectDistance(): UnityEngine.Vector2;
                public set effectDistance(value: UnityEngine.Vector2);
                public get useGraphicAlpha(): boolean;
                public set useGraphicAlpha(value: boolean);
            }
            class Outline extends UnityEngine.UI.Shadow implements UnityEngine.UI.IMeshModifier
            {
                protected [__keep_incompatibility]: never;
            }
            class VertexHelper extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.LuaTable {
            class TablePair extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.RemoteConfig {
            class AssetInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum GroupAssetType
            { Lua = 0, Js = 1, Frame = 2 }
            class GroupInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class ProgramAsset extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.JsEnvManager {
            interface LoadGameObjectCallbackDelegate
            { 
            (obj: UnityEngine.GameObject) : void; 
            Invoke?: (obj: UnityEngine.GameObject) => void;
            }
            var LoadGameObjectCallbackDelegate: { new (func: (obj: UnityEngine.GameObject) => void): LoadGameObjectCallbackDelegate; }
            interface CUIEventDispatchDelegate
            { 
            (appid: number, eventStr: string, obj: any) : void; 
            Invoke?: (appid: number, eventStr: string, obj: any) => void;
            }
            var CUIEventDispatchDelegate: { new (func: (appid: number, eventStr: string, obj: any) => void): CUIEventDispatchDelegate; }
            interface CommandFromGameDelegate
            { 
            (jsonStr: string) : void; 
            Invoke?: (jsonStr: string) => void;
            }
            var CommandFromGameDelegate: { new (func: (jsonStr: string) => void): CommandFromGameDelegate; }
            interface ExecuteCallbackDelegate
            { 
            (id: number, jsonStr: string) : void; 
            Invoke?: (id: number, jsonStr: string) => void;
            }
            var ExecuteCallbackDelegate: { new (func: (id: number, jsonStr: string) => void): ExecuteCallbackDelegate; }
            interface RefreshTimestampDelegate
            { 
            (timestamp: number) : void; 
            Invoke?: (timestamp: number) => void;
            }
            var RefreshTimestampDelegate: { new (func: (timestamp: number) => void): RefreshTimestampDelegate; }
            interface SetApplicationConfigDelegate
            { 
            (jsonStr: string) : void; 
            Invoke?: (jsonStr: string) => void;
            }
            var SetApplicationConfigDelegate: { new (func: (jsonStr: string) => void): SetApplicationConfigDelegate; }
            interface SetJsAddUsingAction
            { 
            (env: Puerts.JsEnv) : void; 
            Invoke?: (env: Puerts.JsEnv) => void;
            }
            var SetJsAddUsingAction: { new (func: (env: Puerts.JsEnv) => void): SetJsAddUsingAction; }
            interface GetBuiltInModulesDelegate
            { 
            () : System.Array$1<string>; 
            Invoke?: () => System.Array$1<string>;
            }
            var GetBuiltInModulesDelegate: { new (func: () => System.Array$1<string>): GetBuiltInModulesDelegate; }
        }
        namespace com.tencent.pandora.PVideoPlayer {
            interface VideoEventDelegate
            { 
            (eventId: number, arg1: number, arg2: number, msg: string) : void; 
            Invoke?: (eventId: number, arg1: number, arg2: number, msg: string) => void;
            }
            var VideoEventDelegate: { new (func: (eventId: number, arg1: number, arg2: number, msg: string) => void): VideoEventDelegate; }
        }
        namespace com.tencent.pandora.pixui.frame.PxSlotMgr {
            class Attachment extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
                GetMountingGameObject: () => UnityEngine.GameObject;
            }
        }
        namespace com.tencent.pandora.EventTriggerListener {
            interface VoidDelegate
            { 
            (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) : void; 
            Invoke?: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void;
            }
            var VoidDelegate: { new (func: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void): VoidDelegate; }
            interface VoidDelegateDrag
            { 
            (go: UnityEngine.GameObject) : void; 
            Invoke?: (go: UnityEngine.GameObject) => void;
            }
            var VoidDelegateDrag: { new (func: (go: UnityEngine.GameObject) => void): VoidDelegateDrag; }
        }
        namespace UnityEngine.SceneManagement {
            class Scene extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Rendering {
            enum GraphicsDeviceType
            { OpenGL2 = 0, Direct3D9 = 1, Direct3D11 = 2, PlayStation3 = 3, Null = 4, Xbox360 = 6, OpenGLES2 = 8, OpenGLES3 = 11, PlayStationVita = 12, PlayStation4 = 13, XboxOne = 14, PlayStationMobile = 15, Metal = 16, OpenGLCore = 17, Direct3D12 = 18, N3DS = 19, Vulkan = 21 }
            enum CopyTextureSupport
            { None = 0, Basic = 1, Copy3D = 2, DifferentTypes = 4, TextureToRT = 8, RTToTexture = 16 }
            enum TextureDimension
            { Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
            enum OpaqueSortMode
            { Default = 0, FrontToBack = 1, NoDistanceSort = 2 }
            enum CameraEvent
            { BeforeDepthTexture = 0, AfterDepthTexture = 1, BeforeDepthNormalsTexture = 2, AfterDepthNormalsTexture = 3, BeforeGBuffer = 4, AfterGBuffer = 5, BeforeLighting = 6, AfterLighting = 7, BeforeFinalPass = 8, AfterFinalPass = 9, BeforeForwardOpaque = 10, AfterForwardOpaque = 11, BeforeImageEffectsOpaque = 12, AfterImageEffectsOpaque = 13, BeforeSkybox = 14, AfterSkybox = 15, BeforeForwardAlpha = 16, AfterForwardAlpha = 17, BeforeImageEffects = 18, AfterImageEffects = 19, AfterEverything = 20, BeforeReflections = 21, AfterReflections = 22 }
            class CommandBuffer extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum LightShadowResolution
            { FromQualitySettings = -1, Low = 0, Medium = 1, High = 2, VeryHigh = 3 }
            enum LightEvent
            { BeforeShadowMap = 0, AfterShadowMap = 1, BeforeScreenspaceMask = 2, AfterScreenspaceMask = 3, BeforeShadowMapPass = 4, AfterShadowMapPass = 5 }
            enum ShadowMapPass
            { PointlightPositiveX = 1, PointlightNegativeX = 2, PointlightPositiveY = 4, PointlightNegativeY = 8, PointlightPositiveZ = 16, PointlightNegativeZ = 32, DirectionalCascade0 = 64, DirectionalCascade1 = 128, DirectionalCascade2 = 256, DirectionalCascade3 = 512, Spotlight = 1024, Pointlight = 63, Directional = 960, All = 2047 }
            enum ShadowCastingMode
            { Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
            enum LightProbeUsage
            { Off = 0, BlendProbes = 1, UseProxyVolume = 2 }
            enum ReflectionProbeUsage
            { Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
            class ReflectionProbeBlendInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum ShaderHardwareTier
            { Tier1 = 0, Tier2 = 1, Tier3 = 2 }
        }
        namespace UnityEngine.Texture2D {
            enum EXRFlags
            { None = 0, OutputAsFloat = 1, CompressZIP = 2, CompressRLE = 4, CompressPIZ = 8 }
        }
        namespace UnityEngine.RectTransform {
            interface ReapplyDrivenProperties
            { 
            (driven: UnityEngine.RectTransform) : void; 
            Invoke?: (driven: UnityEngine.RectTransform) => void;
            }
            var ReapplyDrivenProperties: { new (func: (driven: UnityEngine.RectTransform) => void): ReapplyDrivenProperties; }
            enum Edge
            { Left = 0, Right = 1, Top = 2, Bottom = 3 }
            enum Axis
            { Horizontal = 0, Vertical = 1 }
        }
        namespace UnityEngine.UI.Button {
            class ButtonClickedEvent extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
        namespace UnityEngine.UI.Image {
            enum Type
            { Simple = 0, Sliced = 1, Tiled = 2, Filled = 3 }
            enum FillMethod
            { Horizontal = 0, Vertical = 1, Radial90 = 2, Radial180 = 3, Radial360 = 4 }
        }
        namespace UnityEngine.UI.Selectable {
            enum Transition
            { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        }
        namespace UnityEngine.UI.InputField {
            class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            interface OnValidateInput
            { 
            (text: string, charIndex: number, addedChar: number) : number; 
            Invoke?: (text: string, charIndex: number, addedChar: number) => number;
            }
            var OnValidateInput: { new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput; }
            enum ContentType
            { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
            enum LineType
            { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
            enum InputType
            { Standard = 0, AutoCorrect = 1, Password = 2 }
            enum CharacterValidation
            { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        }
        namespace UnityEngine.UI.Toggle {
            enum ToggleTransition
            { None = 0, Fade = 1 }
            class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
        namespace UnityEngine.UI.GridLayoutGroup {
            enum Corner
            { UpperLeft = 0, UpperRight = 1, LowerLeft = 2, LowerRight = 3 }
            enum Axis
            { Horizontal = 0, Vertical = 1 }
            enum Constraint
            { Flexible = 0, FixedColumnCount = 1, FixedRowCount = 2 }
        }
        namespace UnityEngine.UI.Scrollbar {
            enum Direction
            { LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
            class ScrollEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI.ScrollRect {
            enum MovementType
            { Unrestricted = 0, Elastic = 1, Clamped = 2 }
            enum ScrollbarVisibility
            { Permanent = 0, AutoHide = 1, AutoHideAndExpandViewport = 2 }
            class ScrollRectEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.Vector2> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI.Slider {
            enum Direction
            { LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
            class SliderEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI.Dropdown {
            class OptionData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class DropdownEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Experimental.Director {
            class PlayableGraph extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Canvas {
            interface WillRenderCanvases
            { 
            () : void; 
            Invoke?: () => void;
            }
            var WillRenderCanvases: { new (func: () => void): WillRenderCanvases; }
        }
        namespace UnityEngine.Camera {
            interface CameraCallback
            { 
            (cam: UnityEngine.Camera) : void; 
            Invoke?: (cam: UnityEngine.Camera) => void;
            }
            var CameraCallback: { new (func: (cam: UnityEngine.Camera) => void): CameraCallback; }
            enum StereoscopicEye
            { Left = 0, Right = 1 }
            enum MonoOrStereoscopicEye
            { Left = 0, Right = 1, Mono = 2 }
        }
        namespace UnityEngine.UI.CanvasScaler {
            enum ScaleMode
            { ConstantPixelSize = 0, ScaleWithScreenSize = 1, ConstantPhysicalSize = 2 }
            enum ScreenMatchMode
            { MatchWidthOrHeight = 0, Expand = 1, Shrink = 2 }
            enum Unit
            { Centimeters = 0, Millimeters = 1, Inches = 2, Points = 3, Picas = 4 }
        }
        namespace UnityEngine.UI.GraphicRaycaster {
            enum BlockingObjects
            { None = 0, TwoD = 1, ThreeD = 2, All = 3 }
        }
        namespace Assets.Scripts.UI {
            class CUIComponent extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public m_belongedFormScript : Assets.Scripts.UI.CUIFormScript
                public m_widgets : System.Array$1<UnityEngine.GameObject>
                public SetBelongedComponentContainer ($belongedComponentContainer: Assets.Scripts.UI.IUIComponentContainer) : void
                public GetBelongedComponentContainer () : Assets.Scripts.UI.IUIComponentContainer
                public GetSortingOrder () : number
                public constructor ()
            }
            class CUIAnimationScript extends Assets.Scripts.UI.CUIComponent
            {
                protected [__keep_incompatibility]: never;
                public m_animName : string
                public m_eventIDs : System.Array$1<Assets.Scripts.UI.enUIEventID>
                public m_eventParams : System.Array$1<Assets.Scripts.UI.stUIEventParams>
                public m_eventCustomizedParams : System.Array$1<any>
                public get EventAnimationName(): string;
                public constructor ()
            }
            enum enUIEventID
            { None = 0, VersionUpdate_OnAnnouncementListElementDown = 1, VersionUpdate_OnAnnouncementListElementDragStart = 2, VersionUpdate_OnAnnouncementListElementDrag = 3, VersionUpdate_OnAnnouncementListElementDragEnd = 4, VersionUpdate_OnAnnouncementListElementUp = 5, Common_OpenUrl = 6, Common_ParticlHide = 7, Common_ParticlShow = 8, Common_ParticlTimer = 9, VersionUpdate_OnAnnouncementListTimerUpdate = 10, Common_SpeechBan_OpenHelp = 11, Common_WifiCheckTimer = 12, Common_ShowOrHideWifiInfo = 13, Common_BattleWifiCheckTimer = 14, Common_BattleShowOrHideWifiInfo = 15, Common_NewHeroOrSkinFormClose = 16, Common_RedDotParsEvent = 17, VersionUpdate_ConfirmYYBSaveUpdateApp = 18, VersionUpdate_JumpToHomePage = 19, VersionUpdate_ConfirmUpdateApp = 20, VersionUpdate_QuitApp = 21, VersionUpdate_CancelUpdateApp = 22, VersionUpdate_ConfirmUpdateResource = 23, VersionUpdate_RetryCheckAppVersion = 24, VersionUpdate_ConfirmUpdateAppNoWifi = 25, VersionUpdate_RetryRequestResourceDownloadUrl = 26, VersionUpdate_RetryCheckFirstExtractResource = 27, VersionUpdate_RetryCheckResourceVersion = 28, VersionUpdate_RetryFixResource = 29, Cheat_TriggerDown = 30, Cheat_TriggerUp = 31, Cheat_OnIIPSServerSelectChanged = 32, Cheat_CheatFormClosed = 33, Cheat_ClearCache = 34, Cheat_TDirChanged = 35, Cheat_OnErrorLogSelectChanged = 36, Cheat_HideErrorLogPanel = 37, Cheat_AppearErrorLogPanel = 38, Cheat_ClearErrorLog = 39, Cheat_MaintainBlock = 40, Cheat_JoystickConfigChanged = 41, Cheat_SaveReplayPhoto = 42, Cheat_StartReplay = 43, Cheat_DeletePlayerPrefs = 44, UI_OnFormPriorityChanged = 45, UI_OnFormVisibleChanged = 46, UI_OnFormCloseWithAnimation = 47, UI_OnFormHandleScreenResolutionChangedComplete = 48, CheckDevice_Quit = 49, StartOfflineMode = 50, Tips_Close = 51, VersionUpdate_OnAnnouncementListElementEnable = 52, VersionUpdate_SwitchAnnouncementListElementToFront = 53, VersionUpdate_SwitchAnnouncementListElementToBehind = 54, VersionUpdate_OnAnnouncementListSelectChanged = 55, VersionUpdate_UpdateToPreviousVersion = 56, VersionUpdate_OnConfirmFixResource = 57, VersionUpdate_OnUpdateHelper = 58, UI_OnFormClose = 59, Tips_ItemInfoOpen = 60, Tips_ItemInfoClose = 61, Tips_ItemSourceInfoOpen = 62, Tips_ItemSourceElementClick = 63, Tips_Skill_FormOpen = 64, Tips_Skill_FormClose = 65, Tips_CommonInfoOpen = 66, Tips_CommonInfoClose = 67, LaunchState_Quit = 68, UIComponent_AutoScroller_Scroll_Finish = 70, UIFade_ResetLobbyFormFadeRecover = 73, UIFade_CloseFormWithAniPopUp = 74, UIFade_CloseFormWithAni = 75, UIFade_OpenFormWitAni_Hero = 76, UIFade_OpenFormWitAni_Symbol = 77, UIFade_OpenFormWitAni_Skill = 78, UIFade_OpenFormWitAni_Equip = 79, UIFade_OpenFormWitAni_ChatSetting = 80, UIFade_OpenFormWitAni_Chengjiu = 81, UIFade_OpenFormWitAni_BattleTeam = 82, UIFade_OpenFormWitAni_Bag = 83, UIFade_OpenFormWitAni_Mishu = 84, UIFade_OpenFormWitAni_Shop = 85, UIFade_OpenFormWitAni_OB = 86, UIFade_OpenFormWitAni_Charge = 87, UIFade_OpenFormWitAni_Friend = 88, UIFade_OpenFormWitAni_Mail = 89, UIFade_OpenFormWitAni_Setting = 90, UIFade_OpenFormWitAni_PvpEntry = 91, UIFade_OpenFormWitAni_LadderEntry = 92, UIFade_OpenFormWitAni_PveEntry = 93, UIFade_OpenFormWitAni_UnionBattleEntry = 94, Common_FullScreenVideo_Form_Click_Close = 95, Common_FullScreenVideo_Click_Play = 96, Common_FullScreenVideo_ClickScreen = 97, Common_FullScreenVideo_ClickScreen_TimerUp = 98, Common_OpenUrlWithX5Web = 99, Bag_OpenForm = 100, Bag_OnCloseForm = 101, Bag_MenuSelect = 102, Bag_SelectItem = 103, Bag_SaleItem = 104, Bag_UseItem = 105, Bag_OpenSaleForm = 106, Bag_CloseSaleForm = 107, Bag_SaleForm_CountDown = 108, Bag_SaleForm_CountUp = 109, Bag_SaleForm_CountMax = 110, Bag_SaleForm_ConfirSale = 111, Bag_AddExp_HoldStart = 112, Bag_AddExp_Hold = 113, Bag_AddExp_HoldEnd = 114, Bag_AddExp_Click = 115, Bag_ItemElement_Enable = 116, Bag_OpenUseForm = 117, Bag_UseForm_CountDown = 118, Bag_UseForm_CountUp = 119, Bag_UseForm_CountMax = 120, Bag_UseItemWithAnimation = 121, Bag_OnUseItemAnimationPlayOver = 122, Bag_UseItemWithAnimationConfirm = 123, Bag_OnSecurePwdConfirmUse = 124, Bag_OnSecurePwdConfirmUseWithAnimation = 125, Bag_OnSecurePwdConfirmSale = 127, Bag_OnClickCheckLiuShui = 128, Bag_OnDazeItemTimerEnd = 129, Bag_OnGotoMallWithDazeItemOutTimeMessageBox = 130, Bag_OnOpenHeroExpCardForm = 131, Bag_OnUseToOneHero = 132, Bag_OnUseToAllHero = 133, Bag_OnConfirmToExchangeEffectToDiamond = 134, Bag_DefineGiftPick_OnClickToAddItem = 135, Bag_DefineGiftPick_OnClickToDecreaseItem = 136, Bag_DefineGiftPick_OnTotalCountChange = 137, Bag_DefineGiftPick_OnConfirmToUse = 138, Bag_DefineGiftPick_OnUseableListEnable = 139, Bag_DefineGiftPick_OnConfirmJumpToMailGift = 140, Bag_OnConfirmToUseExperienceCard = 141, HeroInfo_OpenFormFromHeroShop = 142, HeroInfo_OpenFormFromSkinShop = 143, HeroInfo_OpenFormFromHeroCrystalShop = 144, HeroInfo_OpenFormFromSkinCrystalShop = 145, HeroView_AppearForm = 146, HeroView_SwitchDisplayType = 147, HeroView_SortTypeClick = 148, HeroView_SortTypeSelect = 149, HeroInfo_OpenForm = 150, HeroInfo_CloseForm = 151, HeroInfo_StepUp = 152, HeroInfo_OpenCustomEquipPanel = 153, HeroInfo_ViewProperty = 154, HeroView_OpenForm = 155, HeroView_CloseForm = 156, HeroView_MenuSelect = 157, HeroView_ItemSelect = 158, HeroInfo_MenuSelect = 159, HeroInfo_Appear = 160, HeroView_SecurePwdConfirmBuyHeroForFriend = 161, HeroView_SecurePwdConfirmBuyHeroSkinForFriend = 162, HeroInfo_GotoRank_God = 163, HeroInfo_StarUp = 164, HeroView_BuyHeroForFriend = 165, HeroInfo_TurnLeft = 166, HeroInfo_TurnRight = 167, HeroInfo_ModelDrag = 168, HeroInfo_ConfirmStarUp = 169, HeroInfo_ModelClick = 170, HeroInfo_MenuSelect_Dummy = 171, HeroView_ConfirmBuyHeroForFriend = 172, HeroView_ItemEnable = 173, HeroView_BuyHero = 174, HeroView_OpenBuyHeroForFriend = 175, HeroView_ConfirmBuyHero = 176, HeroInfo_ViewStory = 177, HeroInfo_FormClose = 178, HeroInfo_Advance = 179, EquipInfo_OpenForm = 180, EquipInfo_CloseForm = 181, EquipInfo_Equip = 182, EquipInfo_ShowCombinePanel = 183, EquipInfo_CombineMenuSelect = 184, EquipInfo_CombineMaterialClick = 185, EquipInfo_CombineConfirm = 186, HeroView_Own_Flag_Change = 187, HeroInfo_OpenSkinUrl = 188, HeroView_OpenStoryUrl = 189, HeroInfo_OnClickModifyInfo = 190, HeroView_OpenStoryUrl1 = 191, HeroInfo_SkinFeatureTabSelect = 195, HeroView_BuyHeroOrSkin_CheckCopyright = 196, Bag_OnOpenPresentForm = 197, Bag_OnOpenConfirmPresentForm = 198, Bag_ConfirmPresent = 199, Adv_OpenChapterForm = 200, Adv_SelectChapter = 201, Adv_OpenLevelForm = 202, Adv_SelectChapterExternal = 203, Adv_GetSectionReward = 205, Adv_OpenChooseHeroForm = 206, Adv_Mopup = 207, Adv_MopupTenTimes = 208, Adv_OpenTaskPanel = 209, Adv_ChooseHeroReady = 210, Adv_ConfirmDiamondMopup = 211, Adv_DifficultyNormal = 212, Adv_DifficultyElite = 213, Adv_BuyPlayTime = 214, Adv_GetChapterReward = 215, Adv_CloseChapterForm = 216, Adv_ChapterStartDrag = 217, Adv_ConfirmBuyPlayTime = 218, Adv_ConfirmItemFullMopup = 219, Adv_ConfirmItemFullAdv = 220, Adv_ChapterScroll = 221, Adv_OpenChapterRewardPanel = 222, Adv_CloseChapterRewardPanel = 223, Adv_CloseSettleForm = 224, Adv_ConfirmTeamPowerCheck = 225, Adv_ConfirmTeamNumCheck = 226, Adv_SelectPreChapter = 227, Adv_SelectNextChapter = 228, Adv_ExploreScroll = 229, Adv_ExploreSelect = 230, Adv_SelectLevel = 231, Adv_SelectDifficult = 232, Adv_OpenVideoUrl = 233, Lobby_OnLobbyOpenAnimEnd = 248, Lobby_ChangeGameHelperUI = 249, Lobby_ToggleSysBtn = 250, Lobby_OpenLobbyForm = 251, Lobby_OpenSysEntryForm = 252, Lobby_ConfirmErrExit = 253, Lobby_OnMouseDown = 254, Lobby_OnMouseClick = 255, Lobby_OnDragStart = 256, Lobby_OnDragging = 257, Lobby_OnDragEnd = 258, Lobby_OnMouseUp = 259, Lobby_OpenTopLobbyForm = 260, Lobby_OnLobbyAllEsportsNtfClick = 261, Lobby_OnClick_Daji_MatchTipes = 262, Lobby_OnClick_BirthdayWeal = 263, Lobby_CloseTopLobbyForm = 270, Lobby_UnlockAnimation_End = 271, Lobby_LobbyFormShow = 272, Lobby_LobbyFormHide = 273, Lobby_ShowMoreBtn = 274, Lobby_HideMoreBtn = 275, Lobby_UnlockAnimation_Start = 276, Lobby_MysteryShopClose = 277, Lobby_RankingListElementEnable = 278, Lobby_Close = 279, Lobby_PrepareFight_Sub = 280, Lobby_PrepareFight_Origin = 281, Lobby_GotoBattleWebHome = 282, Lobby_GotoZhiBo = 283, Lobby_OpenBattleWebHomeInLobbyClick = 284, Lobby_Custom_Team = 286, Lobby_PandoraEntrace = 287, Lobby_ClosePandoraEntraceForm = 288, Lobby_OpenLobbyFinalCompleted = 290, Lobby_LoadPvpBtnEntry = 291, Lobby_OnConfirmRecoverGame = 292, Lobby_OnCancelRecoverGame = 293, Lobby_OnClickInBattleChat = 294, Lobby_OnClickChatEntryPanel = 295, Lobby_OnClickGameHelperBtn = 296, Lobby_OnClickGameHelperBtn_SwitchStateChange = 297, Lobby_OnClickNewGameModeEntryBtn = 298, Lobby_OnLobbyBottomAppear = 299, Room_OpenCreateForm = 300, Room_CloseCreateForm = 301, Room_CreateRoom = 302, Room_CloseForm = 303, Room_SelectMap = 304, Room_OpenInvite = 305, Room_StartGame = 306, Room_AddRobot = 307, Room_ChangePos = 308, Room_KickPlayer = 309, Room_LeaveRoom = 310, Room_AddFriend = 311, Room_ShareRoom = 312, Room_ChangePos_TimeUp = 313, Room_WeChatLive = 314, Room_ChangePos_Confirm = 315, Room_ChangePos_Refuse = 316, Room_ChangePos_Box_TimerChange = 317, Room_On_Close = 318, Room_Observe_Fold = 319, Room_Observe_Seat = 320, Room_Observe_Kick = 321, Room_Observe_Swap = 322, Room_Play_Again_With_Friend = 323, Room_Play_Again_With_Stranger = 324, Room_Grouping_By_Ramdom = 325, Room_Grouping_By_Rank = 326, Room_TaoSha_Mode_Confirm = 327, Room_TaoSha_Mode_Cancel = 328, Room_Difficulty_Confirm = 329, Room_Difficulty_Cancel = 330, Room_TaoSha_Click_Fake_PlayerNum_Slider = 331, Room_Show_Cant_Use_Grouping_Tips = 332, Room_ChangeGameHelperUI = 333, Room_CustomCheckBoxClicked = 334, Room_Project8BanTypeBtnClick = 335, Room_Project8BanTypeListSelect = 336, Room_ResetSwapView = 337, Room_ChgRoomPosBeginAsSender = 338, Room_ChgRoomPosBeginAsReceiver = 339, Room_CustomRoomNtf = 340, Room_UpdateExtraCampBanButton = 341, Lobby_PandoraEntrace2 = 342, Lobby_ClosePandoraEntraceForm2 = 343, Lobby_ActiveEntryTipsTimeUp = 344, Lobby_ActiveEntry_ClickEntry = 345, Room_QQLive = 346, Invite_RecentPlayListElementEnable = 347, Invite_DownloadExtraCancel = 348, Invite_DownloadExtraIfs = 349, Room_SGameLive = 350, Invite_SendInvite = 351, Invite_SelectInvite = 352, Invite_DeselectInvite = 353, Invite_AcceptInvite = 354, Invite_RejectInvite = 355, Invite_SendInviteFriend = 356, Invite_FriendListElementEnable = 357, Invite_TabChange = 358, Invite_GuildMemberListElementEnable = 359, Invite_SendInviteGuildMember = 360, Invite_RefreshGameStateTimeout = 361, Invite_RecentGuildMemberListElementEnable = 362, Invite_TeamReverse_Close = 363, Invite_AddToMsgCenter = 364, Invite_LBSListElementEnable = 365, Invite_SendInviteLBS = 366, Invite_TimeOut = 367, Invite_RefuseReason_ClickDown = 368, Invite_RefuseReason_ClickList = 369, Invite_RefuseReason_Send = 370, Invite_Form_Closed = 371, Invite_RefuseReason_ItemEnable = 372, Invite_RefuseReason_BgClick = 373, Invite_Reverse_Lobby_CloseTip = 374, Invite_Reverse_Lobby_MsgBox = 375, Invite_Reverse_Lobby_MsgBox_Ok = 376, Invite_Reverse_Lobby_MsgBox_Cancle = 377, Invite_Reverse_InBat_TabChange = 378, Invite_TeamReverse_Open = 379, Invite_Reverse_InBat_Accept = 380, Invite_Reverse_InBat_Refuse = 381, Invite_Reverse_InBat_NoMore_Receive = 382, Invite_Reverse_InBat_ReserveData_Enable = 383, InBattle_Chat_History_Enable = 384, Invite_HangOnInvite = 385, Invite_RecentListElementEnable = 386, Invite_OpenPlayerDetailInfo = 387, Invite_SendInviteRecent = 388, Invite_No_Disturb_In_Minutes_Chg = 389, Invite_ChangeInviteTab = 390, Invite_CloseAll = 391, Matching_OnConfirmBoxClose = 392, Matching_Click_TuWeiHelp = 393, Matching_BranchBubble_Timeup = 394, Matching_Toggle_NeedCombineChange = 395, Matching_OpenVedioUrl = 396, Matching_StartWuJunTrain = 397, Matching_ClickFiveArmyHelp = 398, Matching_ClickCloneRuleHelp = 399, Matching_OpenEntry = 400, Matching_PVE_ChooseMode = 401, Matching_PVE_ChooseMode_Difficulty = 402, Matching_PVE_UseReward = 403, Matching_PVE_AutoMatch = 404, Matching_ChangeGameHelperUI = 405, Matching_RemindPlayerPrepare = 406, Matching_RemindPlayerTimerEnd = 407, Matching_StartMulti = 408, Matching_ChangeReady = 409, Matching_KickPlayer = 410, Matching_OpenPveEntry = 411, Matching_LeaveTeam = 412, Matching_LeaveTeamOK = 413, Matching_LeaveTeamAndCreatRoom = 414, Matching_LeaveTeamOKAndCreatRoom = 415, Matching_ReqLeave = 416, Matching_TimeUpdate = 417, Matchingt_ShowConfirmHead = 418, Matching_Begin1v1Confirm = 419, Matching_Robot1V1 = 420, Matching_Begin1v1 = 421, Matching_Begin5v5Team = 422, Matching_Begin3v3Team = 423, Matching_Begin5v5LadderIn2 = 424, Matching_Begin5v5LadderIn5 = 425, Matching_RejectMatch = 426, Matching_ConfirmMatch = 427, Matching_OpenConfirmBox = 428, Matching_BtnGroup_Click = 429, Matching_BtnGroup_ClickClose = 430, Matching_Robot_BtnGroup_Click = 431, Matching_RobotTeamENTERTAINMENT = 435, Matching_RobotTeamVERSUS = 436, Matching_OpenLadder = 437, Matching_Toggle_CityMatchEnable = 438, Matching_ADButton = 439, Matching_ADForm_Close = 440, Matching_OnConfirmTimeout = 441, Matching_RuleView = 442, Matching_Guide_1v1 = 443, Matching_Guide_3v3 = 444, Matching_Guide_Casting = 445, Matching_Training = 446, Matching_GuidePanel = 447, Matching_Guide_5v5_Second = 448, Matching_Guide_5v5 = 449, PvPSettle_Confirm = 450, PvPSettle_AddFriend = 451, PvPSettle_TabChanged = 452, PvPSettle_ShowStatistics = 453, PvPSettle_ShowData = 454, PvPSettle_HideData = 455, PvPSettle_ShowAchievementTips = 456, PvPSettle_Again = 457, PvPSettle_ShowRankPointTips = 458, PvPSettle_HideRankPointTips = 459, PvPSettle_ShowReportPlayer = 460, PvPSettle_CloseReportPlayer = 461, PvPSettle_DoReporting = 462, PvPSettle_LadderSettleClickContinue = 463, PvPSettle_LadderSettleAgain = 464, PvPSettle_OnChangeStateTimerEnd = 465, PvPSettle_Profit_Extra_Click = 466, PvPSettle_Profit_Limit_Click = 467, LadderSettle_OpenHonerTitleInfo = 468, Matching_AutoScroller_Scroll_Finish = 469, Matching_Guide_Jungle = 470, MatchingExt_BeginMelee = 471, Matching_Waiting = 472, MatchingExt_BeginEnterTrainMent = 473, Matching_EnterTainMentMore = 474, Matching_Guide_1v1_ChooseHeroType = 475, Matching_Guide_5v5_ChooseHeroType = 476, Matching_ClickFogHelp = 477, Matching_Guide_1v1_Confirm = 478, Matching_Guide_3v3_Confirm = 479, Matching_Guide_5v5_Confirm = 480, Matching_Guide_Casting_Confirm = 481, Matching_Guide_Jungle_Confirm = 482, Matching_Click_Confirm_Promise = 483, Matching_Form_Close = 484, Matching_voice_pressSpeaker = 485, Matching_voice_pressMic = 486, Matching_Open_LevelStrategy_Url = 487, Matching_Back_To_Lobby = 488, Matching_Back_To_Team = 489, Matching_MiniChat_Ele_Enable = 490, Matching_OpenEntertainmentCalendar = 491, Matching_EntertainmentFuncUnlock = 492, Matching_HeroGuideLevel = 493, Matching_HeroGuideLevelConfirm = 494, Matching_Form_Open = 495, Matching_TopForm_Open = 496, Matching_TopForm_Close = 497, Matching_BeginUseNickNameMode = 498, Matching_ClickNickNameHelp = 499, PvpSettle_Clean_Battlefield_End = 500, Task_CloseForm = 501, Task_Submit = 502, Task_JumpForm = 503, Task_LinkPve = 505, Task_LinkMall = 506, Task_LinkBurnPve = 507, Task_LinkActivityPve = 508, Task_TabChanged = 509, Task_Refresh = 510, Task_Refresh_OK = 511, Task_Refresh_Cancle = 512, Task_Finish_Ok = 513, Task_List_ElementEnable = 514, Task_Week_Reaward1 = 515, Task_Week_Reaward2 = 516, Task_Day_Reaward = 517, Task_Award_Get_Confirm = 520, Task_Mentor_Close = 521, Task_Mentor_GetReward = 522, Task_Usual_OneKeyAward = 523, Task_Trial_OneKeyAward = 524, MiShu_BannerItemViewShowed = 526, MiShu_OnFormClosed = 527, MiShu_Setting_Click_Qury = 528, MiShu_TodoList_ManagerItemChange = 529, MiShu_OnClickMiShu = 530, MiShu_OnCheckTalk = 531, MiShu_OnClickGoto = 532, MiShu_OnCloseTalk = 533, MiShu_OnCheckFirstWin = 534, MiShu_OnClickMiJi = 536, MiShu_OnCloseBackflowTalk = 537, Task_Day_Question = 538, MiShu_OnClickOpenForm = 539, MiShu_OnClickShowGRobot = 540, MiShu_OnClickBannerItem = 541, MiShu_OnClickOneKeyAward = 542, MiShu_OnConfirmOneKeyAward = 543, GrowTask_Open = 544, GrowTask_OnClose = 545, MiShu_OnClickShowFriendRequest = 546, MiShu_OnClickShow_NewFans = 547, MiShu_OnClickShow_NewRemoteMoment = 548, MiShu_OnClick_TodoListManager = 549, AddedSkill_OpenForm = 550, AddedSkill_CloseForm = 551, AddedSkill_GetDetail = 552, AddedSkill_Selected = 553, AddedSkill_ShowChuanSongHelp = 554, AddedSkill_OnClickVedioUrlBtn = 555, MiShu_OnClick_To_JumpForm_WxWeeklyVideo = 579, MiShu_OnClick_To_JumpForm_Mall_GiftTab = 580, MiShu_OnClick_To_JumpForm_GiftRecord_PresentList = 581, MiShu_OnClick_To_JumpForm_GiftRecord_AskForList = 582, MiShu_OnClick_To_JumpForm_Mall_DebrisShopTab = 583, MiShu_OnClick_To_JumpForm_Mall_Gift_FriendNews = 584, MiShu_OnClick_To_JumpForm_Mall_HotRecommend_BuySkin = 585, MiShu_OnClick_To_JumpForm_HawkEyes = 586, MiShu_OnClick_To_JumpForm_NewVersion = 587, MiShu_OnClick_To_JumpForm_GiftRecord_FriendBirthdayInvitationCardList = 588, MiShu_OnClick_To_JumpForm_NobeKeepLevelGiftTips = 589, MiShu_OnClick_To_JumpForm_WishList = 590, MiShu_OnClick_To_JumpForm_WxDailyVideo = 591, MiShu_OnClick_To_JumpForm_Common = 592, MiShu_OnClick_TodoItem_Close = 593, MiShu_OnClick_SwitchToJueWu = 594, MiShu_OnClick_SwitchToMiShu = 595, MiShu_OnClick_JueWu_Entry = 596, MiShu_OnClick_JueWu_Entry_Txt = 597, MiShu_OnJueWu_OpenPopForm = 599, MiShu_OnJueWuBall_AnimEnd = 600, HeroChoose_OpenChoose = 601, HeroChoose_ChooseConfirm = 602, Dialogue_NextPage = 700, Dialogue_SkipPages = 701, Dialogue_AnyWhereClick = 702, Settle_ClickForm = 800, Settle_Back = 801, Settle_CloseLvlUp = 802, Settle_CloseWinForm = 803, Settle_EscapeAnim = 804, Settle_ShowExpForm = 805, Settle_ShowRewardForm = 806, Settle_BattleAgain = 807, Settle_NextLevel = 808, Settle_BackToLobby = 809, Settle_OpenLvlUp = 810, Settle_AnimEnd = 811, Settle_ClickItemDetailEnd = 812, Settle_OnGameEnd = 813, Settle_PVESettleNext = 814, Settle_AllEsports_StepTeamMap_Continue = 815, Settle_AllEsports_Promotion_End = 816, Friend_BlackListLoathGroupHelp = 898, Friend_SingleNodeBlackListTabChg = 899, Friend_OpenForm = 900, Friend_CloseForm = 901, Friend_Open_SerchFriendMenu = 902, Friend_SerchFriend = 903, Friend_RequestBeFriend = 904, Friend_Accept_RequestFriend = 905, Friend_Refuse_RequestFriend = 906, Friend_DelFriend = 907, Friend_SendPower = 908, Friend_CheckInfo = 909, Friend_InvitePK = 910, Friend_OpenAddFriendForm = 911, Friend_SendPowerAll = 912, Friend_Tab_Change = 913, Friend_Tab_Friend = 914, Friend_Tab_FriendRequest = 915, Friend_DelFriend_OK = 916, Friend_DelFriend_Cancle = 917, Friend_InviteGuild = 918, Friend_RecommendGuild = 919, Friend_List_ElementEnable = 920, Friend_Request_ElementEnable = 921, Friend_Recommand_ElementEnable = 922, Friend_Search_Tab_Change = 923, Friend_Close_AddForm = 924, Friend_AddAll_SNS_Friend = 925, Friend_Invite_SNS_Friend = 926, Friend_SNSList_ElementEnable = 927, Friend_SendCoin = 928, Friend_SNS_SendCoin = 929, Friend_Share_SendCoin = 930, Friend_SNS_ReCall = 931, Friend_SNS_Share_Switch_Click = 932, Friend_SNS_Add_Switch_Click = 933, Friend_Verify_Close = 934, Friend_Verify_Send = 935, Friend_Chat_Button = 936, Friend_Show_Rule = 937, Friend_Block = 938, Friend_CancleBlock = 939, Friend_CancleBlock_Ok = 940, Friend_CancleBlock_Cancle = 941, Friend_Block_Ok = 942, Friend_Block_Cancle = 943, Friend_Gift = 944, Friend_OB_Click = 945, Friend_LBS_NoShare = 946, Friend_LBS_Nan = 947, Friend_LBS_Nv = 948, Friend_LBS_Refresh = 949, Friend_LBS_CheckInfo = 950, Friend_Room_AddFriend = 951, IntimacyRela_Menu_Btn_Click = 952, IntimacyRela_Show_Drop_List = 953, IntimacyRela_Drop_ListElement_Click = 954, IntimacyRela_OK = 955, IntimacyRela_Cancle = 956, IntimacyRela_Menu_Close = 957, IntimacyRela_Item_Enable = 958, IntimacyRela_FristChoise = 959, IntimacyRela_Drop_ListElement_Enable = 960, IntimacyRela_Delete_Relation = 961, IntimacyRela_PrevState = 962, IntimacyRela_LoadingClick = 963, IntimacyRela_Delete_Relation_OK = 964, IntimacyRela_CheckShouldShowTips = 965, IntimacyRela_ShareLevelUp = 967, IntimacyRela_ShareLevelUpMenu_OK = 968, IntimacyRela_ShareLevelUpMenu_Share = 969, Friend_Recruit_zmzBtn = 970, Friend_Recruit_bzmzBtn = 971, Friend_Recruit_bzmRoleBtn = 972, Friend_Recruit_RecruitBtn = 973, Friend_Recruit_zmzListEnable = 974, Friend_Recruit_zmzItemClickDown = 975, Friend_Recruit_TabChange = 976, Friend_Recommend_CheckInfo = 977, Friend_Reserve = 978, Friend_Reserve_Ok = 979, Friend_Reserve_Cancle = 980, Friend_Reserve_InBat_Accept = 981, Friend_Reserve_InBat_Refuse = 982, Friend_Reserve_InBat_NoMore = 983, Friend_OpenBlacklist = 984, Friend_OpenRquestlist = 985, Friend_SingleList_ElementEnable = 986, Friend_Del_Friend_Validate = 987, Friend_OnClick_FuzzySearch = 988, Friend_OnClick_CloseFuzzySearch = 989, Friend_GotoFriendFinder = 990, Friend_SearchFriendClipboardConfirm = 991, Friend_SearchFriendClipboardCancel = 992, Friend_OnClickAddSnsFriend = 993, Friend_SNS_ReCall_OK = 994, Friend_SNS_ReCall_Cancel = 995, Friend_OpenWishList = 996, Friend_OnOpenCallbackForm = 997, Friend_OnCallBackElementEnable = 998, Friend_OnFuzzySearchClick = 999, Friend_OnFuzzySearchClear = 1000, Team_CloseForm = 1001, Team_HeroClick = 1002, Team_LibrarySelectionChanged = 1003, Team_TeamSelectionChanged = 1004, Team_ConfirmSelection = 1005, Battle_OnCameraAxisChanged = 1006, Battle_OnCameraAxisReleased = 1007, Battle_OnCameraAxisPushed = 1008, Battle_OnPanelCameraStartDrag = 1009, Battle_OnPanelCameraDraging = 1010, Battle_OnPanelCameraEndDrag = 1011, Battle_OnWinLoseVideoEnd = 1012, Battle_OnCameraOffsetButtonDown = 1013, Battle_OnCameraOffsetButtonUp = 1014, Battle_OnCameraOffsetButtonDrag = 1015, Battle_OnCameraOffsetButtonClick = 1016, Fight_Record_DaShiJian_Icon_PressDown = 1018, Fight_Record_DaShiJian_Icon_PressUp = 1019, Fight_Record_Close_DaShiJian = 1020, Battle_JointSkillButton_Drag = 1030, Battle_JointSkillButton_Up = 1031, NBTask_ClickHelpTips = 1049, Friend_OnOpenFriendRecallForm = 1050, Friend_OnClickFriendRecallBtn = 1051, Friend_OnLobbyOpenFriendForm = 1052, Friend_OnCloseFriendRecallForm = 1053, Friend_OnCloseingFriendRecallForm = 1054, Friend_WishSquare_BtnClick = 1055, Battle_OnOpenTaskTip = 1070, Battle_OnCloseTaskTip = 1071, Battle_ContinueGameGuideTimerChange = 1080, Battle_ContinueGameTimeOutTimerChange = 1081, Battle_ContinueGameSettleTimerChange = 1082, Battle_OnOpenDropItemDetail = 1083, Battle_OnCloseDropItemDetail = 1084, Battle_OnCloseWinContinueGameTimeOutForm = 1087, Battle_OnCloseWinContinueGameGuideForm = 1088, Battle_OnCloseWinContinueGameForm = 1089, Battle_OnOpenWinContinueGameForm = 1090, Battle_OnClickContinueGame = 1091, Battle_OnQuitExtendFrameState = 1092, Battle_OnOpenWinContinueGameGuideForm = 1093, Battle_OnOpenWinContinueGameTimeOutForm = 1094, Battle_UseReviveCoin_Confirm_Fail = 1095, Battle_UseReviveCoin_Confirm = 1096, Battle_SysReturnLobby_Confirm = 1097, Battle_UseReviveCoin = 1098, Battle_StateViewClickHeroIcon = 1099, Battle_OpenSysMenu = 1100, Battle_PickHeroHead = 1101, Battle_SwitchAutoAI = 1102, Battle_ChgFreeCamera = 1103, Battle_OnAxisChanged = 1104, Battle_OnSkillButtonDown = 1105, Battle_OnSkillButtonUp = 1106, Battle_SysReturnLobby = 1107, Battle_SysQuitGame = 1108, Battle_SysReturnGame = 1109, Battle_ToggleStatView = 1110, Battle_CloseStatView = 1111, Battle_HeroInfoSwitch = 1112, Battle_OnSkillButtonDragged = 1113, Battle_HeroInfoPanelOpen = 1114, Battle_HeroInfoPanelClose = 1115, Battle_ClickMiniMap = 1116, Battle_ClickReault = 1117, Battle_ClickBigMap = 1118, Battle_OnWinLoseClosed = 1119, Battle_MultiHashInvalid = 1120, Battle_OnUITypeChangeComplete = 1121, Battle_ResetGyro = 1122, Battle_EscOpenAnimation = 1123, Battle_ShareTaoShaWinLose = 1124, Battle_CloseShareTaoShaWinLose = 1125, Battle_TaoShaToggleDetailChengJiu = 1126, Battle_ToggleAutoBattle = 1127, Battle_OnClickToCapture = 1128, Battle_OpenCapture = 1129, Battle_StartCameraDrag = 1130, Battle_CameraDraging = 1131, Battle_EndCameraDrag = 1132, Battle_OnSkillButtonHold = 1133, Battle_OnSkillButtonHoldEnd = 1134, Battle_OnAtkSelectHeroDown = 1135, Battle_OnAtkSelectHeroUp = 1136, Battle_OnAtkSelectSoldierDown = 1137, Battle_OnAtkSelectSoldierUp = 1138, Battle_OnLastHitButtonDown = 1139, Battle_ActivateForm = 1140, Battle_OnLastHitButtonUp = 1141, Battle_OnHideForm = 1142, Battle_OnAppearForm = 1143, Battle_OnAttackOrganButtonDown = 1144, Battle_OnAttackOrganButtonUp = 1145, Battle_JointSkillButton_Down = 1146, Battle_JointSkillButton_UpAndClick = 1147, Battle_PVE_TANK_Button_Down = 1148, Battle_PVE_TANK_Button_UpAndClick = 1149, Battle_OpenForm = 1150, Battle_CloseForm = 1151, Battle_OnCloseForm = 1152, Battle_OnOpMode = 1153, Battle_OnDragonBorn = 1154, Battle_OnOpenDragonTip = 1155, Battle_OnCloseDragonTip = 1156, Battle_OnFloatTextAnimEnd = 1157, Battle_FPSAndLagUpdate = 1158, Battle_Hold_MiniMap = 1159, Battle_Drag_SignalPanel = 1160, Battle_Click_MiniMap_Up = 1161, Battle_Drag_SignalPanel_End = 1162, Battle_Disable_Alert = 1163, Battle_ConfirmSysReturnLobby = 1164, Battle_OnSignalButtonClicked = 1165, Battle_OnSignalTipsListElementEnable = 1166, Battle_Down_MiniMap = 1167, Battle_OnListTipsListElementEnable = 1168, Battle_TaskPanel_SlideEnd = 1169, Battle_RevivieTimer = 1170, Battle_Click_Scene = 1171, Battle_SkillLevelUpEffectPlayEnd = 1172, Battle_EquipBoughtEffectPlayEnd = 1173, Battle_BattleStatViewSortClick = 1174, Battle_CloseBigMap = 1175, Battle_PauseMultiGame = 1176, Battle_ResumeMultiGame = 1177, Training_HelperType2_Cheat = 1178, Battle_PickDropItem = 1179, Battle_Pause_Game = 1180, Battle_Resume_Game = 1181, Battle_Voice_Btn = 1182, Battle_BuffSkillBtn_Up = 1183, Battle_LearnSkillBtn_Click = 1184, Battle_BuffSkillBtn_Down = 1185, Battle_Disable_Down = 1186, Battle_Disable_Up = 1187, Training_HelperOpen = 1188, Training_HelperClose = 1189, Training_HelperInit = 1190, Training_HelperUninit = 1191, Training_HelperCheat = 1192, Battle_Surrender = 1193, Battle_Surrender_Confirm = 1194, Battle_Surrender_Against = 1195, Battle_Surrender_CountDown = 1196, Battle_Surrender_TimeUp = 1197, Battle_Surrender_TimeStart = 1198, Battle_ReviveTimeChange = 1199, Purchase_OpenBuyActionPoint = 1200, Purchase_OpenBuyCoin = 1201, Purchase_OpenBuySkillPt = 1202, Purchase_BuyActPt = 1204, Purchase_BuyCoinOne = 1205, Purchase_BuyCoinTen = 1206, Purchase_BuySkillPt = 1207, Purchase_CloseBuyActionPoint = 1208, Purchase_CloseBuyCoin = 1209, Purchase_CloseBuySkillPt = 1210, Purchase_CloseBuyDiamond = 1212, Purchase_BuySymbolPage = 1213, Purchase_BuyDiamond = 1214, Battle_ShowDropBox = 1215, Battle_CloseDropBox = 1216, Battle_AutoSurrender = 1217, Battle_AutoSurrenderBtnShow = 1218, Battle_AutoSurrenderBtnHide = 1219, Training_OnStartDragMove = 1220, Training_OnDragMoving = 1221, Training_OnDragMoveEnd = 1222, Battle_OnRightAxisChanged = 1223, Training_OnPlayHeroVideo = 1224, BigMap_Click_5_XiaoZhuZai = 1225, BigMap_Click_5_YuanGuBaoJun = 1226, BigMap_Click_5_Dalong = 1230, BigMap_Click_5_Xiaolong = 1231, BigMap_Click_3_long = 1232, BigMap_Click_Organ = 1233, BigMap_Click_Hero = 1234, BigMap_Click_Map = 1235, BigMap_Open_BigMap = 1236, BigMap_Click_Eye = 1237, Battle_3DTouch_Left = 1238, Battle_3DTouch_Right = 1239, Battle_3DTouch_FullScreen = 1240, Battle_3DTouch_FullScreen_Scene = 1241, BigMap_Click_Solider = 1242, BigMap_Hold_EmptyArea = 1243, BigMap_HoldEnd = 1244, BigMap_SignalPanel_Up_0 = 1245, BigMap_SignalPanel_Up_1 = 1246, BigMap_SignalPanel_Up_2 = 1247, BigMap_SignalPanel_Up_3 = 1248, BigMap_SignalPanel_Drag = 1249, BigMap_Switch_BigMap = 1250, Battle_OpeningTipToggleChange = 1251, Battle_OpeningTipFormClose = 1252, Battle_MiniPicClick = 1255, Battle_ViewChangeHero = 1260, Battle_OpenAutoLearnSkillForm = 1261, Battle_CloseAutoLearnSkillForm = 1262, Battle_ColorMaskTimeUp = 1263, Battle_Dragon_Click = 1264, Battle_EmptyClickPanelClose = 1265, Level_Running_Open_Skill_Choose = 1266, Level_Running_Close_Skill_Choose = 1267, Level_Running_Skill_Choosen = 1268, Level_Fight_In_Waves_Open_Skill_Choose = 1269, Level_Fight_In_Waves_Close_Skill_Choose = 1270, Level_Fight_In_Waves_Skill_Choosen = 1271, Level_Runing_Open_State_View = 1272, Battle_ClickVoiceAndTextChat = 1291, Battle_DoubleClick = 1292, Battle_TriggerUnLoadUnUsedAssets = 1293, Battle_PVESwitchHeroSortType = 1294, Battle_PVEBigInfo = 1295, Battle_PVESmallInfo = 1296, Battle_PVE_Btn_Help = 1297, Battle_PVE_Btn_Help_Real_Revive = 1298, Battle_PVE_Btn_DeadInfo = 1299, Lottery_OpenForm = 1300, Lottery_CloseForm = 1301, Lottery_Coin_BuyOneFree = 1302, Lottery_Coin_BuyOne = 1303, Lottery_Coin_BuyTen = 1304, Lottery_Gold_BuyOneFree = 1305, Lottery_Gold_BuyOne = 1306, Lottery_Gold_BuyTen = 1307, Lottery_Coin_Free_Draw_CD_UP = 1308, Lottery_Gold_Free_Draw_CD_UP = 1309, Lottery_CloseResultForm = 1310, Lottery_Coin_OpenForm = 1311, Lottery_Coin_CloseForm = 1312, Lottery_Coin_Quick_Buy = 1313, Lottery_Coin_Quick_Sale = 1314, Lottery_Coin_Select_Sale = 1315, Lottery_Show_Reward = 1316, Lottery_Coin_Diamond_Buy = 1317, Lottery_Show_Reward_End = 1318, Lottery_Show_Hero = 1319, Lottery_Show_Skin = 1320, Lottery_Refresh_3D_Model_Timer_Up = 1321, Lottery_Coin_Quick_Buy_Confirm = 1322, Lottery_Coin_Quick_Buy_Pause = 1323, Lottery_Show_Reward_Start = 1324, Lottery_Common_BuyFiveSymbol = 1325, Lottery_Senior_BuyOneSymbol = 1326, Lottery_Close_FX = 1327, Lottery_Symbol_Boom = 1328, Lottery_BuySymbolConfirm = 1329, Lottery_Senior_BuyFiveSymbol = 1330, Lottery_Senior_BuyFreeSymbol = 1331, Lottery_Common_BuyOneSymbol = 1332, Lottery_Open_Form = 1333, Lottery_Close_Form = 1334, Lottery_Action_Mask_Reset = 1335, Lottery_Skip_Animation = 1336, BattleCapture_OpenPreviewForm = 1350, BattleCapture_OnClickHidePreviewForm = 1351, BattleCapture_OnCickPreviousButton = 1352, BattleCapture_OnClickNextButton = 1353, BattleCapture_OnPreviewFormClose = 1354, Mail_OnClickJumpToCampButton = 1397, Mail_OnSysFormOpen = 1398, Mail_OnSysFormClose = 1399, Mail_OpenForm = 1400, Mail_CloseForm = 1401, Mail_MenuClick = 1402, Mail_SysReadAll = 1403, Mail_FriendAccessAll = 1404, Mail_SysAccess = 1405, Mail_SysRead = 1406, Mail_FriendRead = 1407, Mail_FriendOpenForm = 1408, Mail_SysOpenForm = 1409, Mail_SysCloseForm = 1411, Mail_SysDelete = 1412, Mail_SysAccessAll = 1413, Mail_FriendAccess = 1414, Mail_AskForFlagListElementEnable = 1415, Mail_MsgCenterDeleteAll = 1417, Mail_JumpForm = 1418, Mail_JumpUrl = 1419, Mail_Form_OnClose = 1420, Mail_Open_Mail_Write_Form = 1421, Mail_Send_Guild_Mail = 1422, Mail_Delete = 1423, Mail_Invite = 1424, Mail_SwitchFriendAskForFlag = 1425, Mail_AskForRead = 1426, Mail_AskForRefuse = 1427, Mail_AskForAccept = 1428, Mail_AskForAcceptConfirm = 1429, Mail_AskForDel = 1430, Mail_SwitchAllAskForFlag = 1431, Mail_AskForSecurePwdConfirm = 1432, Mail_FriendAgreePipei = 1433, Mail_SysDeleteAllConfirm = 1434, Mail_DeleteConfirm = 1435, Mail_FriendMailJump2PlayerInfo = 1436, Mail_MsgMailJump2PlayerInfo = 1437, Mail_OpenAskForFlagListForm = 1438, Mail_GotoGiftCenter = 1439, Mail_Freind_ListElementEnable = 1440, Mail_System_ListElementEnable = 1441, Mail_Msg_ListElementEnable = 1442, Mail_Allege_UploadVideo = 1443, Mail_Allege_NotUploadVideo = 1444, Friend_IntimacyUpByProp_Form_Closed = 1445, Mail_Allege_CancelUploadVideo = 1446, Mail_JumpToFormBag = 1447, GiftCenter_MyGiftConfirmDelToCheckPwd = 1448, GiftCenter_MyGiftConfirmDelNotGet = 1449, GiftCenter_MenuSelect = 1450, GiftCenter_AskForElementEnable = 1451, GiftCenter_MyGiftDeleteClick = 1452, GiftCenter_MyGiftSendBacnClick = 1453, GiftCenter_MyGiftItemGetClick = 1454, GiftCenter_MyGiftSkinViewClick = 1455, GiftCenter_MyGiftElementEnable = 1456, GiftCenter_SendHistoryElementEnable = 1457, GiftCenter_ReviceLetterElementEnable = 1458, GiftCenter_OnClickToEnterSelectDelObj = 1459, GiftCenter_SendHistoryDeleteClick = 1460, GiftCenter_MyGiftShareClick = 1461, GiftCenter_MyGiftAskFriendClick = 1462, GiftCenter_PresentSuccAndShareToFriend = 1463, GiftCenter_BuyGiftSkin_MenuSelect = 1464, GiftCenter_BuyGiftSkin_MenuEnable = 1465, GiftCenter_AskForPayClick = 1466, GiftCenter_AskForMailJump2PlayerInfo = 1467, GiftCenter_MyGiftMailJump2PlayerInfo = 1468, GiftCenter_GiftSentHistoryJump2PlayerInfo = 1469, GiftCenter_GiftThanksMailJump2PlayerInfo = 1470, GiftCenter_GiftOpenAnimationPlayOver = 1471, GiftCenter_GiftSendAnimationPlayOver = 1472, GiftCenter_ReceiveLetterDeleteClick = 1473, GiftCenter_OnRollingMsgToggleClose = 1474, GiftCenter_ShareImageClick = 1475, VersionUpdate_RestartApp = 1480, Chat_Timer_Refresh_FriendList = 1492, Chat_iOS_SendMessageDirectly = 1493, Chat_Settle_SrvAIAutoLeave = 1494, Chat_LefCustomTeamMemberList_TimerRefresh = 1495, Chat_LefCustomTeamMemberList_Elem_Enable = 1496, Chat_ClearFriendChatRecordComfirm = 1497, Chat_OnCloseChatAnimEnd = 1498, Chat_ClickCloseForm = 1499, Chat_OpenForm = 1500, Chat_CloseForm = 1501, Chat_Tab_Change = 1502, Chat_ToolBar_Voice = 1503, Chat_ToolBar_Input = 1504, Chat_ToolBar_Face = 1505, Chat_ToolBar_Add = 1506, Chat_Conent_Head_Icon = 1507, Chat_FriendTab_Item = 1508, Chat_ToolBar_Input_Start_Edit = 1509, Chat_ToolBar_Input_End_Edit = 1510, Chat_Tab_FriendClick = 1511, Chat_Tab_FriendItem_Refresh = 1512, Chat_Tab_ChatItem_Refresh = 1513, Chat_LeftFriendList_Select_Change = 1514, Chat_EntryPanel_Click = 1515, Chat_Text_Send = 1516, Chat_FaceList_Selected = 1517, Chat_ScreenButton_Click = 1518, Chat_SendButton_Click = 1519, Chat_ClearText_Click = 1520, Chat_LeftFriendList_Elem_Enable = 1521, Chat_BigList_Elem_Enable = 1522, Chat_RoomChat_Elem_Enable = 1523, Chat_GuildChat_Elem_Enable = 1524, Chat_Hero_Select_OpenForm = 1525, Chat_Hero_Select_CloseForm = 1526, Chat_Hero_Select_Bottom_BtnClick = 1527, Chat_Hero_Select_TabChange = 1528, Chat_Hero_Select_TemplateList_Click = 1529, Chat_Hero_Select_List_ElementEnable = 1530, Chat_Cost_Send = 1531, Chat_Timer_Changed = 1532, Chat_Hero_Select_Tab_Input = 1533, Chat_Hero_Select_Tab_Voice = 1534, Chat_Hero_Select_Send_Text = 1535, Mini_Player_Info_Open_Form = 1536, Mini_Player_Info_AddFriend = 1537, Mini_Player_Info_Profile = 1538, Mini_Player_Info_Invite_5V5_PaiWei = 1539, Mini_Player_Info_Invite_5v5_PiPei = 1540, Mini_Player_Info_CloseForm = 1541, Chat_Form_Revert_To_Visible = 1542, Chat_Form_Revert_To_Hide = 1543, Chat_Form_Open_Mini_Player_Info_Form = 1544, Mini_Player_Info_OnCloseForm = 1545, Chat_Team_Template_List_ElementEnable = 1550, Chat_Team_Template_List_ElementSelect = 1551, Chat_Team_Template_Short_Cut_Switch = 1552, Chat_RefreshGuildMemberGameStateTimeout = 1553, Chat_Form_ClickChangeChannel = 1554, Chat_Offline_Open = 1555, Chat_Offline_StopRecord = 1556, Chat_Offline_CancelRecord = 1557, Chat_Offline_TimeChg = 1558, Chat_Offline_TimeEnd = 1559, Chat_offline_DownloadVoiceEnd = 1560, Chat_offline_TipsTimerEnd = 1561, Chat_offline_CloseStartTips = 1562, Chat_offline_SendTextSvr = 1563, Chat_offline_CancelSendTextSvr = 1564, Chat_RecruitElem_Click = 1565, Chat_TeamRecruitElem_Click = 1566, Chat_Form_KingCup_OpenH5 = 1567, Chat_Form_LBS_Setting_Open = 1568, Chat_Form_LBS_SubChannel_Chg = 1569, Chat_LeftEsportsGuildMemberList_Elem_Enable = 1571, Chat_EsportsCertiChannel_RecruitOnlyToggle = 1572, Chat_Announcement_Close = 1573, Chat_BanLimit_Open_Custom_Service = 1574, Chat_Hero_Select_Chat_Bubble_Close = 1580, Chat_Hero_Select_OpenSpeaker = 1581, Chat_Hero_Select_OpenMic = 1582, Chat_ClickBubble = 1583, Chat_Guild_Recruit_List_Element_Enabled = 1584, Chat_Complaints = 1585, Chat_ComplaintsOK = 1586, Chat_SoundInput_Click = 1587, Chat_LockScreen = 1588, Chat_LeftGuildList_Elem_Enable = 1589, Chat_RighList_Elem_Enable = 1590, Chat_LockScreen_SliderValueChange = 1591, Chat_Item_Speaker_Click = 1592, Chat_SoundInput_Click_Up = 1593, Chat_Click_SoundChatEntity = 1594, Chat_SoundInput_Drag = 1595, Chat_Guild_Left_Item_Click = 1596, Chat_FuzzySearch_Click = 1597, Chat_FuzzySearch_Clear = 1598, Chat_ClearFriendChatRecord = 1599, Settings_OpenForm = 1600, Settings_ReqLogout = 1601, Settings_ConfirmLogout = 1602, Settings_SettingTypeChange = 1603, Settings_CloseForm = 1604, Settings_CameraHeight = 1605, Settings_ClickChildPrivacy = 1606, Settings_PrivacyPolicy = 1607, Settings_TermOfService = 1608, Settings_Contract = 1609, Settings_UpdateTimer = 1610, Settings_ConfirmQuality_Accept = 1611, Settings_ConfirmQuality_Cancel = 1612, Settings_SurrenderCDReady = 1613, Settings_OpenNetworkAccelerator = 1614, Settings_AutomaticOpenNetworkAccelerator = 1615, Settings_ClickMoveCameraGuide = 1616, Settings_KingTimeCourse = 1617, Settings_ClickSkillCancleTypeHelp = 1618, Settings_OnClickReplayKitHelp = 1619, Settings_OnSmartCastChange = 1620, Settings_OnLunPanCastChange = 1621, Settings_OnPickNearestChange = 1622, Settings_OnPickMinHpChange = 1623, Settings_OnCommonAttackType1Change = 1624, Settings_OnCommonAttackType2Change = 1625, Settings_OnSkillCanleType1Change = 1626, Settings_OnSkillCanleType2Change = 1627, Settings_OnJoyStickMoveChange = 1628, Settings_OnJoyStickNoMoveChange = 1629, Settings_OnRightJoyStickBtnLocChange = 1630, Settings_OnRightJoyStickFingerLocChange = 1631, Settings_Slider_onHallMusicChange = 1632, Settings_Slider_onSoundEffectChange = 1633, Settings_Slider_onModelLODChange = 1634, Settings_Slider_onParticleLODChange = 1635, Settings_OnPickRealMinHpChange = 1636, Settings_Slider_onSkillTipChange = 1637, Settings_Slider_onFpsChange = 1638, Settings_Slider_onVoiceChange = 1639, Settings_Slider_onInputChatChange = 1640, Settings_Slider_onVibrateChange = 1641, Settings_Slider_onMoveCameraChange = 1642, Settings_Slider_onReplayKitEnableChange = 1643, Settings_Slider_onReplayKitEnableAutoModeChange = 1644, Settings_Slider_onHDBarChange = 1645, Settings_Slider_onLunpanSensitivityChange = 1646, Settings_Slider_onCameraSensitivityChange = 1647, Settings_Slider_onHallMusicSensitivityChange = 1648, Settings_Slider_onSoundSensitivityChange = 1649, Settings_Slider_onVoiceSensitivityChange = 1650, Settings_Slider_onRecordKingTimeEnableChange = 1651, Settings_Slider_onRecordCommonModeChange = 1652, Settings_Slider_onSecurePwdEnableChange = 1653, Settings_Slider_OnHeroInfoBarChange = 1654, Settings_OnClickHeroInfoBarHelp = 1655, Settings_Slider_OnLockEnemyHeroChange = 1656, Settings_Slider_OnShowEnemyHeroChange = 1657, Settings_Slider_OnHeroSelectSortTypeChange = 1658, Settings_Toggle_OnClickHeroSelectSortTypeProficiency = 1659, Settings_Slider_OnInBattleVoiceInputChange = 1660, Settings_OnLastHitAndAttackOrganModeChange = 1661, Settings_Toggle_OnClickHeroSelectSortTypeDefault = 1662, Settings_Slider_onFowChange = 1663, Settings_OnClickLockEnemyHeroHelp = 1664, Settings_OnClickLastHitModeHelp = 1665, Settings_OnClickShowEnemyHeroHelp = 1666, Settings_Slider_On3DTouchBarChange = 1667, Settings_ReplayKitCourse = 1668, Settings_Slider_onRecordReplayKitEnableChange = 1669, Settings_OnClickBPHeroSelectHelpBtn = 1670, Settings_Slider_OnRecordSetOnlyRecordGameMusicEnableChange = 1671, Settings_Slider_ShowEquipInfo = 1672, Settings_Slider_OnRecordSetVideoHighQualityEnableChange = 1673, Settings_Slider_OnPrivacyHistoryBarChange = 1674, Settings_Slider_OnPrivacyWatchingBarChange = 1675, Settings_Slider_OnPrivacyVipLevelVarChange = 1676, Settings_OnRecordFreeRecordHelpBtnClick = 1677, Settings_OnCheckMna = 1678, Settings_OnClickRecommendEquipDesHelp = 1679, Settings_OnClickGuiZuLevelHelp = 1680, Settings_OnCheckMnaTimeOut = 1681, Settings_Slider_onSecurePwdMianMiEnableChange = 1682, Settings_OnUse60FPSCancle = 1683, Settings_OnMiniMapLeftRightModeChg = 1684, Settings_OnClickMiniMapHelpBtn = 1686, Settings_Slider_AntiDisturb = 1687, Settings_Slider_AllowReserv = 1688, Settings_OnClickNoTeamMessageHelpBtn = 1689, Settings_Toggle_OnEquipLeftRightMode = 1690, Settings_Toggle_OnEquipRightMode = 1691, Settings_OnClickEquipPosHelpBtn = 1692, Settings_OnConfirmAntiDisturb = 1693, Settings_OnCancelAntiDisturb = 1694, Settings_OnStrangerInviteChange = 1695, Settings_Onclick_StrangerInviteHelp = 1696, Settings_Toggle_OnIntimacyRelationChange = 1697, Settings_Slider_OnUseFPSChange = 1698, Settings_OnUseFPSConfirm = 1699, Shop_OpenForm = 1700, Shop_CloseForm = 1701, Shop_SelectTab = 1702, Shop_SelectItem = 1703, Shop_CloseItemForm = 1704, Shop_BuyItem = 1705, Shop_ManualRefresh = 1706, Shop_ConfirmManualRefresh = 1707, Shop_CancelManualRefresh = 1708, Shop_SaleTipCancel = 1709, Shop_SaleTipConfirm = 1710, Shop_AutoRefreshTimerTimeUp = 1711, Shop_MysteryShopActive = 1712, Shop_OpenMysteryShop = 1713, Shop_OpenFormBySaleCancel = 1714, Shop_Refresh = 1715, Shop_RefuseMysteryShop = 1716, Shop_AcceptMysteryShop = 1717, Shop_CloseMysteryShop = 1718, Shop_ReturnToShopForm = 1719, Shop_Fixed_Shop_Character_Click = 1720, Shop_Mystery_Shop_Character_Click = 1721, Shop_Character_Tip_Time_Up = 1723, Shop_Page_Up = 1724, Shop_Page_Down = 1725, Shop_OpenHonorShop = 1726, Shop_GetBurningCoin = 1727, Shop_GetBurningCoinConfirm = 1728, Shop_GetArenaCoin = 1729, Shop_GetArenaCoinConfirm = 1730, Shop_OpenArenaShop = 1731, Shop_OpenBurningShop = 1732, Shop_OpenGuildShop = 1733, Shop_BuyItem_Confirm = 1734, Shop_SelectSubTab = 1735, Shop_BuyItem_Slider_Chg = 1736, Shop_BuyItem_Slider_Add = 1737, Shop_BuyItem_Slider_Sub = 1738, ActivityPve_OpenForm = 1800, ActivityPve_CloseForm = 1801, ActivityPve_CommonLevelChange = 1802, ActivityPve_OpenLevelForm = 1804, ActivityPve_CloseLevelForm = 1805, ActivityPve_LevelSelect = 1806, Explore_OpenForm = 1807, Explore_ClsoeForm = 1808, Explore_HeroChooseOpenForm = 1809, Explore_ChooseHeroReady = 1810, ActivityPve_OpenZhuangZi = 1811, ActivityPve_CloseZhuangZi = 1812, ActivityPve_ZhuangZiLevelChange = 1813, Qualifying_OpenForm = 1900, Qualifying_CloseForm = 1901, Qualifying_MenuSelect = 1902, Qualifying_HeroInfoSelect = 1903, Qualifying_BattleAreaBtnDown = 1904, Qualifying_BattleAreaBtnUp = 1905, Qualifying_RankListSelect = 1906, Qualifying_RankListElementInit = 1907, Battle_OnPerfectDragCheckStart = 1947, Battle_OnPerfectDragCheckDrag = 1948, Battle_OnPerfectDragCheckEnd = 1949, Battle_OnPerfectMomentListElementEnable = 1950, Battle_OnTopPerfectMomentListElementEnable = 1951, Battle_OnPerfectMomentListElementClick = 1952, SoundProfiler_Open = 1953, SoundProfiler_Close = 1954, SoundProfiler_Init = 1955, SoundProfiler_Uninit = 1956, SoundProfiler_HistoryOpen = 1957, SoundProfiler_HistoryClose = 1958, SoundProfiler_SwitchPanel = 1959, SoundProfiler_Drag = 1960, FucUnlock_CloseForm = 2000, FucUnlock_TimerUp = 2001, StrSenderBox_OnSend = 2048, SearchBox_CloseForm = 2049, SendMsgAlert_Display = 2050, HeroSelect_SwapHeroReq = 2080, HeroSelect_SwapHeroAllow = 2081, HeroSelect_SwapHeroCanel = 2082, HeroSelect_ShowActivityDescBtnDown = 2083, HeroSelect_ShowActivityDescBtnUp = 2084, HeroSelect_SelectHero = 2102, HeroSelect_SelectTeamHero = 2103, HeroSelect_ConfirmHeroSelect = 2104, HeroSelect_Del_Hero = 2105, HeroSelect_Skill_Down = 2106, HeroSelect_Skill_Up = 2107, HeroSelect_ModelDrag = 2108, HeroSelect_ModelClick = 2109, HeroSelect_ReqCloseForm = 2111, HeroSelect_FormClose = 2112, HeroSelect_OpenFullHeroList = 2113, HeroSelect_CloseFullHeroList = 2114, HeroSelect_MenuSelect = 2115, HeroSelect_RefreshSkinPanel = 2116, HeroSelect_SelAiHeroConfirm = 2117, HeroSelect_StartGameOnAiTrainingAdjState = 2118, HeroSelect_SkinSelect = 2119, ROLE_CREATE = 2200, ROLE_CREATE_CHANGED = 2201, ROLE_CREATE_RANDOM = 2202, GAME_DIFF_SELECT = 2203, GAME_DIFF_CONFIRM = 2204, ROLE_CREATE_TIMER_CHANGE = 2205, ROLE_HeroType_Select = 2206, ROLE_HeroType_Confirm = 2207, HeroSelect_AddedSkillSelected = 2220, HeroSelect_AddedSkillOpenForm = 2221, HeroSelect_AddedSkillCloseForm = 2222, HeroSelect_AddedSkillConfirm = 2223, HeroSelect_LeftHeroItemEnable = 2224, HeroSelect_RandomHero = 2225, HeroSelect_OnTimerCountDown = 2226, HeroSelect_UseHeroExpCard = 2227, HeroSelect_UseHeroExpCardChanel = 2228, HeroSelect_HeroJobMenuSelect = 2229, HeroSelect_FullHeroTipsComplete = 2230, HeroSelect_ChangeRcmdEquipPlan = 2231, HeroSelect_SendBattleHistory = 2232, HeroSelect_CancelConfirm = 2233, HeroSelect_ShowJobBuffDescBtnDown = 2234, HeroSelect_ShowJobBuffDescBtnUp = 2235, HeroSelect_HoverOnPlayerBegin = 2236, HeroSelect_HoverOnPlayerEnd = 2237, HeroSelect_RoadChangeOpenForm = 2238, HeroSelect_RoadChangeSelectHero = 2239, HeroSelect_RoadChangeSelectRoad = 2240, HeroSelect_AvatarWeargroupSelect = 2241, HeroSelect_ShowPkAiBuffDescBtnDown = 2242, HeroSelect_ShowPkAiBuffDescBtnUp = 2243, HeroSelect_PkAiRoadChgOpenForm = 2244, HeroSelect_PkAiRoadChgConfirm = 2245, HeroSelect_PkAiRoadChgSelRoad = 2246, HeroSelect_ShowHeroLstForAi = 2247, HeroSelect_BanPick_CancelReqHelpSelectHero = 2248, HeroSelect_RoadMap_Show = 2249, HeroSelect_PkAiRoadChgCancel = 2250, HeroSelect_BanPick_FormClose = 2251, HeroSelect_BanPick_HeroJobMenuSelect = 2252, HeroSelect_BanPick_SkinSelect = 2254, HeroSelect_BanPick_SelectHero = 2255, HeroSelect_BanPick_CenterHeroItemEnable = 2256, HeroSelect_BanPick_ConfirmHeroSelect = 2257, HeroSelect_BanPick_SwapHeroReq = 2258, HeroSelect_BanPick_SwapHeroAllow = 2259, HeroSelect_BanPick_SwapHeroCanel = 2260, HeroSelect_BanPick_Symbol_PageDownBtnClick = 2261, HeroSelect_BanPick_SymbolPageSelect = 2262, HeroSelect_BanPick_Symbol_ViewProp_Down = 2263, HeroSelect_BanPick_Symbol_ViewProp_Up = 2264, HeroSelect_BanPick_AddedSkillOpenForm = 2265, HeroSelect_BanPick_AddedSkillSelected = 2266, HeroSelect_BanPick_AddedSkillConfirm = 2267, HeroSelect_BanPick_AddedSkillCloseForm = 2268, HeroSelect_BanPick_OnTimerCountDown = 2269, HeroSelect_BanPick_UseHeroExpCard = 2270, HeroSelect_BanPick_UseHeroExpCardChanel = 2271, HeroSelect_BanPick_ChangeRcmdEquipPlan = 2272, HeroSelect_BanPick_SendBattleHistory = 2273, HeroSelect_BanPick_SendBattleHistoryTimeOut = 2274, HeroSelect_BanPick_SendWantToBanHero = 2275, HeroSelect_BanPick_SendWantToPickHero = 2276, HeroSelect_BanPick_OpenHelpSelectHeroMsgBox = 2277, HeroSelect_BanPick_ConfirmHelpSelectHeroMsgBox = 2278, HeroSelect_BanPick_AvatarWearGroupSelect = 2279, BattleHeroInfo_InfoTypeChange = 2280, BattleMatchInfo_InfoTypeChange = 2281, HeroSelect_BanPick_DoHelpBanHeroClick = 2282, BattleHeroInfo_NextHeroTip = 2283, BattleHeroInfo_PreHeroTip = 2284, HeroSelect_ComBan_OpenForm = 2285, HeroSelect_ComBan_JobMenuSelect = 2286, HeroSelect_ComBan_HeroListEleEnable = 2287, HeroSelect_ComBan_HeroSelect = 2288, HeroSelect_ComBan_HeroDel = 2289, HeroSelect_ComBan_WantBanHero = 2290, HeroSelect_ComBan_Confirm = 2291, HeroSelect_ComBan_OnCloseForm = 2292, HeroSelect_BanPick_OnTimerCountEnd = 2294, HeroSelect_BanPick_ReplayConfirm = 2295, HeroSelect_BanPick_ReplayCancel = 2296, HeroSelect_BanPick_ChangeShowModelMode = 2297, HeroSelect_BanPick_SelectRoadType = 2298, HeroSelect_BanPick_RoadSettingClose = 2299, Symbol_OpenForm = 2300, Symbol_CloseForm = 2301, Symbol_MenuSelect = 2302, Symbol_BagItemEnable = 2303, Symbol_BagShow = 2304, Symbol_BagViewHide = 2305, Symbol_View = 2306, Symbol_Off = 2307, Symbol_PageAddClick = 2308, Symbol_ChangeConfirm = 2309, Symbol_PageItemSelect = 2310, Symbol_PageDownBtnClick = 2311, Symbol_ViewProp_Down = 2312, Symbol_ViewProp_Up = 2313, Symbol_ChangePageName = 2314, Symbol_ConfirmChgPageName = 2315, Symbol_SymbolPageDownBtnClick = 2316, Symbol_BagItemClick = 2317, Symbol_ChangeSymbolClick = 2318, Symbol_OpenUnlockLvlTip = 2319, Symbol_SwitchPropPanel = 2320, Symbol_PageClear = 2321, Symbol_FormClose = 2322, Symbol_PageClearConfirm = 2323, Symbol_RevertToVisible = 2324, Symbol_OpenForm_ToMakeTab = 2325, Symbol_Update_Sub_Module = 2326, Symbol_View_NotWear_Item = 2327, Symbol_Jump_To_MiShu = 2328, Symbol_SymbolForm_PageChangeName = 2329, SymbolMake_ListItemEnable = 2330, SymbolMake_ListItemClick = 2331, SymbolMake_OnItemMakeClick = 2332, SymbolMake_OnItemBreakClick = 2333, SymbolMake_OnItemBreakConfirm = 2334, SymbolMake_OnBreakExcessSymbolClick = 2335, SymbolMake_LevelTabSelect = 2336, SymbolMake_TypeTabSelect = 2337, SymbolMake_OnBreakExcessSymbolConfirm = 2338, SymbolMake_TypeMenuSelect = 2339, SymbolMake_LevelMenuSelect = 2340, SymbolMake_OnItemMakeConfirm = 2341, SymbolMake_ItemBreakAnimatorEnd = 2342, SymbolMake_SelectBreakLvlItem = 2343, SymbolMake_CoinNotEnoughGotoSymbolMall = 2344, SymbolMake_OnSecurePwdItemBreakConfirm = 2345, SymbolMake_OnSecurePwdDegradeSymbolConfirm = 2346, Symbol_LevelUp = 2347, Symbol_LevelUpPage = 2348, Symbol_PromptBuyGrid = 2350, Symbol_ConfirmBuyGrid = 2351, Symbol_ConfirmWhenMoneyNotEnough = 2352, Symbol_OpenUpgradePayForm = 2353, Symbol_CloseUpgradePayForm = 2354, Symbol_UpgradeNumChanged = 2355, Symbol_UpgradeNumChangeByStep = 2356, Symbol_ConfirmUpgrade = 2357, Symbol_BreakItemEnable = 2360, Symbol_BreakItemSelectChange = 2361, Symbol_OpenBreakDetailForm = 2362, Symbol_BreakDetailFormConfirm = 2363, Symbol_BreakDetailFormCancle = 2364, Symbol_BreakListItemSelToggle = 2365, SymbolRcmd_OpenChangeHeroForm = 2370, SymbolRcmd_HeroListItemClick = 2371, SymbolRcmd_LevelListIndexChange = 2372, SymbolRcmd_HeroTypeChange = 2373, SymbolRcmd_HeroOwnFlagChange = 2374, SymbolRcmd_HeroListItemEnable = 2375, SymbolRcmd_RcmdListItemEnable = 2376, SymbolPage_PageItemEnable = 2377, SymbolPage_PageItemChangeName = 2378, SymbolPage_PageItemUse = 2379, SymbolPage_BatchApply = 2380, Symbol_JumpToGetSymbol = 2390, Symbol_OnClick_Check_Symbol_LiuShui = 2391, Symbol_OnClick_Help = 2392, Symbol_PageMenu_Change = 2393, Symbol_OnCloseImgGuide = 2394, Symbol_TakeOff_Open = 2395, Symbol_TakeOff_Close = 2396, Symbol_TakeOff_Confirm = 2397, Symbol_TakeOff_Toggle_ValueChanged = 2398, SymbolPage_Btn_Social = 2399, Guild_OpenForm = 2400, Guild_CloseForm = 2401, Guild_Guild_Join = 2402, Guild_Guild_Search_In_Preview_Panel = 2403, Guild_Guild_Help = 2404, Guild_PrepareGuild_Create = 2405, Guild_PrepareGuild_Create_Cancel = 2406, Guild_PrepareGuild_Create_Confirm = 2407, Guild_PrepareGuild_Tip_Cancel = 2408, Guild_PrepareGuild_Join = 2409, Guild_PrepareGuild_Join_Confirm = 2410, Guild_PrepareGuild_Join_Cancel = 2411, Guild_Guild_Select_In_Guild_List = 2412, Guild_Prepare_Guild_Select = 2413, Guild_Info_Member_Info = 2414, Guild_Captain_DisMiss = 2415, Guild_List_View_Change_Tab = 2416, Guild_Info_View_Change_Tab = 2417, Guild_List_OnClose = 2418, Guild_Info_OnClose = 2419, Guild_Pandora_Rcmd_Standalone_Close_Form = 2420, Guild_PrepareGuild_Timeout = 2421, Guild_PrepareGuild_Create_Modify_Icon = 2422, Guild_PrepareGuild_Create_Icon_Selected = 2423, Guild_Task_Help = 2424, Guild_Guild_Setting_Open = 2425, Guild_Guild_Setting_Confirm = 2427, Guild_Guild_Application_Pass = 2428, Guild_Guild_Application_Reject = 2429, Guild_Guild_Apply_Quit = 2430, Guild_Guild_Apply_Quit_Confirm = 2431, Guild_Guild_Apply_Quit_Cancel = 2432, Guild_Guild_Apply_Time_Up = 2433, Guild_Accept_Invite = 2434, Guild_HyperLink_Click = 2435, Guild_Hyperlink_Search_Guild = 2436, Guild_Recommend_Invite = 2437, Guild_Recommend_Reject = 2438, Guild_Hyperlink_Search_PrepareGuild = 2439, Guild_Preview_Guild_List_Element_Select = 2440, Guild_Construct_Upgrade = 2441, Guild_Construct_View = 2442, Guild_Construct_Guide = 2443, Guild_Position_Appoint = 2445, Guild_Position_Appoint_Confirm = 2446, Guild_Position_Fire_Member = 2447, Guild_Position_Fire_Member_Confirm = 2448, Guild_Position_Chairman_Transfer = 2450, Guild_Position_Chairman_Transfer_Confirm = 2451, Guild_Is_Show_In_Recommend_Cancel = 2455, Guild_LBS_Set_Common = 2456, Guild_Guild_Search_In_Guild_List_Panel = 2457, Guild_Guild_Search_In_Prepare_Guild_List_Panel = 2458, Guild_Only_Friend_Slider_Value_Changed = 2459, Guild_LBS_Setting_Open = 2460, Guild_LBS_Setting_Province_List_Chg = 2461, Guild_Rankpoint_Help = 2462, Guild_Rankpoint_Enter_Matching = 2463, Guild_Rankpoint_Rank_List_Tab_Change = 2464, Guild_Rankpoint_Open_Rankpoint_Rank_Form = 2465, Guild_Rankpoint_Rank_List_Element_Enabled = 2467, Guild_Symbol_Open_Symbol_Form = 2470, Guild_Symbol_Open_Or_Upgrade_Symbol = 2471, Guild_Symbol_Symbol_List_Select_Change = 2472, Guild_Symbol_Open_Rule = 2473, Guild_LBS_Setting_Zone_List_Chg = 2474, Guild_Prepare_Guild_List_Element_Enabled = 2476, Guild_Requesst_More_Prepare_Guild_List = 2477, Guild_Guild_List_Element_Enabled = 2478, Guild_Request_More_Guild_List = 2479, Guild_Add_Friend = 2482, Guild_Guild_Setting_Open_Icon_Form = 2483, Guild_Guild_Setting_Guild_Icon_Selected = 2484, Guild_Is_Show_In_Recommend = 2485, Guild_Open_Modify_Guild_Bulletin_Form = 2486, Guild_Confirm_Modify_Guild_Bulletin = 2487, Guild_Confirm_Modify_Guild_GongGao = 2489, Guild_Preview_Request_Ranking_List = 2490, Guild_Preview_Guild_List_Element_Enabled = 2491, Guild_Preview_Request_More_Guild_List = 2492, Guild_Extend_Member_Limit = 2493, Guild_Extend_Member_Limit_Confirm = 2494, Guild_Guild_Member_List_Element_Enabled = 2495, Guild_Send_Guild_Match_Invite_To_Platform_Group = 2496, Guild_Send_Guild_Match_Invite_Btn_Timer_Up = 2497, Guild_Cancel_Jump_To_Pandora_Rcmd_Standalone = 2498, Guild_Guild_Member_Extra_List_Element_Enabled = 2499, Guild_Send_Guild_Match_Invite_To_Platform_GroupConform = 2500, Guild_LBS_Setting_City_List_Chg = 2501, Guild_FVRank_Menu_Click = 2502, Guild_FVRank_ListEnable = 2503, Guild_Member_Menu_Click = 2504, Guild_PersonFightReward_Open = 2505, Guild_PersonFightReward_ListEnable = 2506, Guild_PersonFightReward_ClickGet = 2507, Guild_Promote_ListEnable = 2508, Guild_Promote_Click = 2509, Guild_Promote_Click_Confirm = 2510, Guild_ZhanBei_ListEnable = 2511, Guild_ZhanBei_Click = 2512, Guild_ZhanBei_Click_Confirm = 2513, Guild_ZhanBei_MenuClick = 2514, Guild_Overview_Donate = 2515, Guild_Member_List_Expand_Click = 2516, Guild_Captain_DisMiss_Confirm = 2517, Guild_LBS_Setting_Open_CreateGuild = 2518, Guild_Donate_Menu_Click = 2520, Guild_Donate = 2521, Guild_Donate_Confirm = 2522, Guild_Donate_Cancel = 2523, Guild_Rank_ClickSelf = 2524, Guild_LBS_Rank_Reward_Show = 2525, Guild_V52_LETTER_END = 2526, Guild_LevelUpd_ByCoupon = 2527, Guild_LevelUpd_ByGuildMoney = 2528, Guild_LevelUpd_ByCoupon_Confirm = 2529, Guild_LevelUpd_ByGuildMoney_Confirm = 2530, Guild_List_OnOpen = 2531, Guild_Info_OnOpen = 2532, Guild_Info_HuoyueRule = 2533, Guild_Rodeo_Rule = 2534, Guild_Rank_ShowPlayerDetailInfo = 2535, Guild_Week_Reward_Open = 2536, Guild_LBS_Set_Common_Confirm = 2537, Guild_Overview_LBSRegretTimeUp = 2538, Guild_RankingLBSSet_DropList_Chg = 2539, Guild_RankingLBSSet_Open = 2540, Guild_RankingLBSSet_Province_Chg = 2541, Guild_Setting_MenuClick = 2542, Guild_Setting_JoinGuild_Modify = 2543, HeroAwake_Open = 2580, HeroAwake_StartAwake = 2581, HeroAwake_FinishTask = 2582, Burn_Reset = 2600, Burn_Challenge = 2601, Burn_CloseEnemyInfo = 2602, Burn_LevelButton = 2603, Burn_BoxButton = 2604, Burn_Return = 2605, Burn_OpenForm = 2606, Burn_BuffClick = 2607, Burn_SettleConfirm = 2608, Burn_WinLoseConfirm = 2609, Burn_GotoShop = 2610, Burn_Info_Open = 2611, Burn_Info_Close = 2612, Burn_Reset_Ok = 2613, Burn_Reset_Cancel = 2614, Burn_OnCloseForm = 2615, Burn_OnAutoRun = 2616, Burn_OnAutoTick = 2617, Burn_OnAutoTick2 = 2618, Burn_OnStopAutoConfirm = 2619, Burn_OnStopAuto = 2620, Hyper_Link_Click = 2701, Net_ReconnectConfirm = 2800, Net_ReconnectCancel = 2801, Net_ReconnectClosed = 2802, Net_SvrNtfReloginNow = 2803, Net_SingleGameFinishError = 2804, SkillTips_Open = 2900, SkillTips_Close = 2901, HeroSelect_Training_ReqCloseForm = 2911, HeroSelect_Training_FormClose = 2912, HeroSelect_Training_OpenFullHeroList = 2913, HeroSelect_Training_CloseFullHeroList = 2914, HeroSelect_Training_MenuSelect = 2915, HeroSelect_Training_RefreshSkinPanel = 2916, HeroSelect_Training_SkinSelect = 2919, HeroSelect_Training_AddedSkillSelected = 2920, HeroSelect_Training_AddedSkillOpenForm = 2921, HeroSelect_Training_AddedSkillCloseForm = 2922, HeroSelect_Training_AddedSkillConfirm = 2923, HeroSelect_Training_LeftHeroItemEnable = 2924, HeroSelect_Training_RandomHero = 2925, HeroSelect_Training_OnTimerCountDown = 2926, HeroSelect_Training_UseHeroExpCard = 2927, HeroSelect_Training_UseHeroExpCardChanel = 2928, HeroSelect_Training_HeroJobMenuSelect = 2929, HeroSelect_Training_FullHeroTipsComplete = 2930, HeroSelect_Training_ChangeRcmdEquipPlan = 2931, HeroSelect_Training_SendBattleHistory = 2932, HeroSelect_Training_CancelConfirm = 2933, HeroSelect_Training_SelectHero = 2942, HeroSelect_Training_SelectTeamHero = 2943, HeroSelect_Training_ConfirmHeroSelect = 2944, HeroSelect_Training_Del_Hero = 2945, HeroSelect_Training_Skill_Down = 2946, HeroSelect_Training_Skill_Up = 2947, HeroSelect_Training_ModelDrag = 2948, HeroSelect_Training_ModelClick = 2949, HeroSelect_Training_Symbol_PageDownBtnClick = 2951, HeroSelect_Training_FreeUseSkin_Help = 2952, HeroSkin_AvatarsOutdateJump = 2997, HeroSkin_WearAndSave = 2998, HeroSkin_OnCloseBuySkinFormOriginal = 2999, HeroSkin_Wear = 3000, HeroSkin_ItemEnable = 3001, HeroSkin_ItemSelect = 3002, HeroSkin_Buy = 3003, HeroSkin_BuyConfirm = 3004, HeroSkin_LoadNewHeroOrSkin3DModel = 3005, HeroSkin_OpenBuySkinForm = 3006, HeroSkin_OnCloseBuySkinForm = 3007, HeroCount_Buy = 3008, HeroCount_CancelBuy = 3009, HeroSkin_BundleBuy = 3010, HeroSkin_BundleBuyConfirm = 3011, HeroSkin_UseDazeItemFormOpen = 3012, HeroSkin_UseDazeItemSelectItem = 3013, HeroSkin_UseDazeItemFormClose = 3014, HeroSkin_Buy_PriceListEnable = 3015, HeroSkin_AvatarBuyAndWear = 3016, HeroSkin_OpenBuyHeroSkinForFriend = 3050, HeroSkin_BuyHeroSkinForFriend = 3051, HeroSkin_ConfirmBuyHeroSkinForFriend = 3052, HeroSkin_SearchFriend = 3053, HeroSkin_OnFriendListElementEnable = 3054, HeroSkin_OnUseSkinExpCard = 3055, GiftCenter_BuyForFriend_PresentAsk_Skin = 3056, GiftCenter_BuyForFriend_PresentAsk_Hero = 3057, HeroView_OpenAskForFriend = 3058, HeroSkin_OpenAskForFriend = 3059, HeroView_AskForHero = 3060, HeroSkin_AskForHeroSkin = 3061, HeroSkin_LeaveMsgTypeSelect = 3062, IntimacyProp_LeaveMsgForFriend = 3063, IntimacyProp_UseHorncastToggle = 3064, OnUseIntimacyProp_Count_Up = 3065, OnUseIntimacyProp_Count_Down = 3066, OnUseIntimacyProp_Count_Max = 3067, OnUseIntimacyProp_Confirm = 3068, OnSendIntimacyProp_OpenSendToFriend = 3069, HeroProp_OpenAskForFriend = 3070, HeroView_AskForProp = 3071, HeroView_AddPropCount = 3072, HeroView_DecreasePropCount = 3073, OnUseIntimacyProp_Slider_Change = 3074, HeroSkin_ClearSearchFriend = 3075, OnUseIntimacyProp_Amount_Limit = 3076, HeroSkin_AskForWXFriend = 3077, HeroSkin_AskForQQFriend = 3078, HeroView_FilterTypeClick = 3079, HeroView_FilterTypeSelect = 3080, SuoYao_SendToPlatform = 3081, AskForFlagListManager_Search = 3082, AskForFlagListManager_ClearSearch = 3083, Ranking_OpenForm = 3100, Ranking_CloseForm = 3101, Ranking_ChangePage = 3102, Ranking_Page0Scroll = 3103, Ranking_Page1Scroll = 3104, Ranking_DragModel = 3105, Ranking_ClickModel = 3106, Ranking_HoldDetail = 3107, Ranking_HoldDetailOff = 3108, Ranking_ElementEnable = 3109, Ranking_AddFriend = 3110, Ranking_ClickCloseBtn = 3113, Ranking_ChangeView = 3114, Ranking_ShowAllRankType = 3115, Ranking_OnCloseBestNumberOne = 3116, Ranking_ChangeRankTypeToLadder = 3117, Ranking_ChangeRankTypeToHeroCount = 3118, Ranking_ChangeRankTypeToSkinCount = 3119, Ranking_ChangeRankTypeToAchievement = 3120, Ranking_ChangeRankTypeToWinCount = 3121, Ranking_ChangeRankTypeToConWinCount = 3122, Ranking_ChangeRankTypeToVip = 3123, Ranking_Friend_SNS_SendCoin = 3124, Ranking_Friend_GAME_SendCoin = 3125, Ranking_ChangeRankTypeToArena = 3126, Ranking_ChangeRankTypeToGod = 3127, Ranking_ArenaElementEnable = 3128, Ranking_ArenaAddFriend = 3129, Ranking_HeroChg_Title_Click = 3130, Ranking_HeroChg_Hero_Item_Enable = 3131, Ranking_HeroChg_Hero_Click = 3132, Ranking_Open_HeroChg_Form = 3133, Ranking_Open_HeroChg_Rule_Form = 3134, Ranking_Open_HeroChg_Detail_Form = 3135, Ranking_Click_HeroChg_Detail_Tab = 3136, Ranking_Click_Detail_Equip = 3137, Ranking_Detail_Symbol_Enable = 3138, Ranking_Close_Detail_Form = 3139, Ranking_ChangeRankTypeToMentorPoint = 3140, Ranking_UseRankGodEquip = 3141, Ranking_OnCloseAnimEnd = 3142, Ranking_ChangeRankTypeToNumberOne = 3143, Ranking_NumberOnewAreaChange = 3144, Ranking_OfficialComElementEnable = 3145, Ranking_OnOpenLastWeekFightValueDetail = 3146, Ranking_BestNumberOne = 3147, Ranking_OnOpenBestNumberOne = 3148, Ranking_ChangeRankTypeToZhanDouLi = 3149, Ranking_ChangeRankTypeToMasterMatchScore = 3150, Ranking_ChangeRankTypeToTaoSha = 3151, Ranking_OnTaoShaPlayerNumTypeChange = 3152, Ranking_OnProject8PlayerNumTypeChange = 3153, Ranking_OnClickChatWithFriend = 3154, Ranking_Friend_Follow_SendCoin = 3157, Ranking_ChangeRankTypeToPVEScore = 3158, Ranking_ChangeRankTypeToBattlePassLevel = 3159, Ranking_Click_WXPrivilege = 3160, Ranking_ChangeRankTypeToProHero = 3161, Ranking_ChangeRankTypeToProPlayer = 3162, Ranking_ChangeRankTypeToProClub = 3163, Ranking_ProPlayerElementEnable = 3164, Ranking_ProPlayerRankTypeSelect = 3165, Ranking_ProPlayerRankDropClick = 3166, Ranking_ProPlayerRankUseDetail = 3167, Ranking_ProPlayerFollowConfirm = 3168, Rakning_ChangeRankTypeToProject8 = 3169, Player_Info_Project8HistoryItemEnabled = 3170, Player_Info_Project8MainTab_Changed = 3171, Player_Info_Project8DropList_Changed = 3172, Player_Info_OpenWithProject8Tab = 3173, Player_Info_Project8Menu_Click = 3174, Player_Info_OpenWithBattleRoyalTab = 3175, Player_Info_OpenWithPveInfoTab = 3176, PlayerInfo_UGC_List_Click = 3177, PlayerInfo_UGC_List_Enable = 3178, PlayerInfo_UGC_Menu_Click = 3179, PlayerInfo_JumpCompetitionMember = 3180, PlayerInfo_JumpMerchantPrivilege = 3181, PlayerInfo_UGC_Jump = 3182, PlayerInfo_PVE_ViewDetail = 3183, PlayerInfo_On3DTimerTimeUp = 3184, PlayerInfo_PVE_LeftMenu_Enable = 3185, PlayerInfo_PVE_PlayerListEnable = 3186, PlayerInfo_PVE_DropList_Click = 3187, PlayerInfo_PVE_DropList_Open = 3188, PlayerInfo_PVE_Diffcult_List_Click = 3189, Player_Info_OnClickChangeShowOpenning = 3190, Player_Info_OnClickChangeHeroShowType = 3191, Player_Info_OnDrag3DModelEnd = 3192, Player_Info_OpenHelper = 3193, Player_Info_OpenXinYue = 3194, Player_Info_OpenBuLuo = 3195, Player_Info_ChangeTeamPos = 3196, Player_Info_ChangeMarkName = 3197, Player_Info_ChangeName = 3198, Player_Info_ChangeHeadIcon = 3199, Player_Info_OpenForm = 3200, Player_Info_CloseForm = 3201, Player_Info_Tab_Change = 3202, Player_Info_Open_Pvp_Info = 3203, Player_Info_Open_Base_Info = 3204, Player_Info_Quit_Game = 3205, Player_Info_Quit_Game_Confirm = 3206, Player_Info_Show_Rule = 3208, Player_Info_License_ListItem_Enable = 3210, Player_Info_Common_Hero_Enable = 3211, Player_Info_Update_Sub_Module = 3212, Player_Info_Honor_Item_Enable = 3213, Player_Info_Honor_Select_Change = 3214, Player_Info_Honor_Chosen = 3215, Player_Info_PvpHistory_Item_Enable = 3216, Player_Info_PvpHistory_Click_DetailInfo = 3217, Player_Info_PvpHistory_Click_Close_Detail = 3218, Player_Info_PvpHistory_Click_Statistics = 3219, Player_Info_PvpHistory_Click_AddFriend = 3220, Player_Info_Pvp_MainList_Click = 3221, Player_Info_Pvp_SubList_Click = 3222, Player_Info_Pvp_SubList_Show = 3223, Player_Info_Pvp_Graph_Show = 3224, Player_Info_Pvp_Detail_Show = 3225, Player_Info_Pvp_Share = 3226, Player_Info_Common_Hero_Main_List_Click = 3227, Player_Info_Common_Hero_Sub_List_Click = 3228, Player_Info_Common_Hero_Sort_List_Click = 3229, Player_Info_Common_Hero_Detail_List_Enable = 3230, Player_Info_Common_Hero_Sub_List_Show = 3231, Player_Info_Credit_Score_Reward_Enable = 3232, Player_Info_Achievement_Trophy_Click = 3233, Player_Info_Pvp_Branch_Click = 3234, Player_Info_Pvp_Rule = 3235, Player_Info_3dImageLoaded = 3236, Ranking_ChangeRankTypeToHawkEyes = 3237, Player_Info_OpenHawkEyes = 3238, Player_Info_Click_Tab_PveInfo = 3239, Player_Info_PvpHistory_OpenPlayerDetailInfo = 3240, Player_Info_PvpHistory_FightScoreDown = 3241, Player_Info_PvpHistory_FightScoreUp = 3242, Player_Info_Credit_Score_Click_Credit_Score_Rule = 3243, Player_Info_On_Form_Open = 3244, Player_Info_OnClick_Other_Head = 3246, Player_Info_OnClick_Show_BigHead = 3247, Player_Info_OnBigHead_Loaded = 3248, Player_Info_OnBigHead_Load_TimerOut = 3249, Player_Info_OnBigHead_Click_Report = 3250, Player_Info_OnBigHead_ReportConfirm = 3251, Player_Info_OnBigHead_ReportToggleEnable = 3252, Player_Info_OnBigHead_ReportCancle = 3253, Player_Info_CopyPlayerName = 3254, Player_Info_OnBigHead_LoadError = 3255, Player_Info_Friend_Element_Enable = 3256, Player_Info_hero_Element_Enable = 3257, Player_Info_FiveCamp_Click_Hero_Tab = 3258, Player_Info_FiveCamp_Click_Friend_Tab = 3259, Player_Info_FiveCamp_Click_Share_Myself = 3260, Player_Info_FiveCamp_Click_Share_With_Friend = 3261, Player_Info_OpenWithFiveCampInfoTab = 3262, Player_Info_Commmon_Hero_Switch_Only_Show_CurSeason = 3263, Player_Info_PvpHistory_Switch_Hero = 3264, Player_Info_Pvp_TaoSha_TeamTypeChange = 3265, Player_Info_Pvp_TaoSha_ClickShare_Myself = 3266, Player_Info_Apply_Join_Guild = 3267, Player_Info_Invite_Join_Guild = 3268, Player_Info_Jump_To_Credit_Area = 3269, Player_Info_ChatWithFriend = 3270, Player_Info_Credit_Score_Show_Help = 3271, Player_Info_Credit_Score_HistoryData_Enable = 3272, Player_Info_JumpToGiftCenter = 3273, Player_Info_OpenHistoryCreditForm = 3274, Player_Info_Click_Tab_Personal_Space = 3275, Player_Info_Click_Tab_GameData = 3276, Player_Info_Click_Tab_ContactData = 3277, Player_Info_Click_Tab_History = 3278, Player_Info_Click_Tab_Hero = 3279, Player_Info_Click_Tab_Battle = 3280, Player_Info_Click_Tab_Credit = 3281, Player_Info_Click_Tab_Honor = 3282, Player_Info_Click_Tab_BusinessCard = 3283, Player_Info_Click_Tab_Photograph = 3284, Player_Info_Click_Tab_Relationship = 3285, Player_Info_Click_Tab_Mentor = 3286, Player_Info_Click_PersonalSpaceCommonHero = 3287, Player_Info_Click_PersonalSpaceMoreNode = 3288, Player_Info_Click_PersonalSpaceOpenHeroSelectForm = 3289, Player_Info_Click_PersonalSpaceCloseHeroSelectForm = 3290, Player_Info_PersonalSpace_HeroElementEnable = 3291, Player_Info_PersonalSpace_SkinElementEnable = 3292, Player_Info_Click_PersonalSpaceChooseHero = 3293, Player_Info_Click_PersonalSpaceChooseSkin = 3294, Player_Info_PersonalSpace_OnHeroSelectTabChange = 3295, Player_Info_PersonalSpace_OnHeroSelectMenuChange = 3296, Player_Info_Click_PersonalSpaceSaveSelectHero = 3297, Player_Info_Click_PersonalSpaceCancelSelectHero = 3298, Player_Info_Click_Tab_Space = 3299, Arena_OpenForm = 3300, Arena_TeamConfig = 3301, Arena_ChangeHeroList = 3302, Arena_BuyChangeTimes = 3303, Arena_ConfirmBuyChangeTimes = 3304, Arena_ResetCD = 3305, Arena_OpenPlayerInfoForm = 3306, Arena_OpenRankInfoForm = 3307, Arena_OpenRecordForm = 3308, Arena_OpenShopForm = 3309, Arena_StartFight = 3310, Arena_RankInfoMenuClick = 3311, Arena_ReciveDefTeamInfo = 3312, Arena_RankElementEnable = 3313, Arena_CDTimeEnd = 3314, Arena_RecordElementEnable = 3315, Arena_ResetByNewDay = 3316, Arena_ConfirmBuyResetCD = 3317, Arena_ConfirmResutlForm = 3318, Arena_OpenTips = 3319, Arena_CloseTps = 3320, Arena_OnClose = 3321, Login_Platform_QQ = 3401, Login_Platform_WX = 3402, Login_Platform_Guest = 3403, Login_Platform_WTLogin = 3404, Login_Platform_Quit = 3405, Login_Start_Game = 3406, Login_Select_Server = 3407, Login_Platform_Logout = 3408, Login_Install_Weixin = 3409, Login_Trans_Visitor_Yes = 3410, Login_Trans_Visitor_No = 3411, Login_Change_Account_Yes = 3412, Login_Change_Account_No = 3413, Login_Enable_Start_Btn_Timer_End = 3414, Login_Platform_None = 3415, Login_Platform_QRWechat = 3416, Login_Lobby_Change_Account_Yes = 3417, Login_Platform_QRWechat_Editor = 3418, Login_Platform_QRWechat_Editor_Close = 3419, Login_Change_Account_Yes_Custom = 3420, Login_Platform_AwesomiumLogin = 3421, Login_Platform_AwesomiumLogin_Close = 3422, Login_Lobby_Change_Account_No = 3423, Login_Lobby_Platform_QRWechat = 3424, Login_KF_Area_Help = 3425, Login_From_3APP_ChangeAccount_Yes = 3426, Login_From_3APP_ChangeAccount_No = 3427, LoginLobby_From_3APP_ChangeAccount_Yes = 3428, LoginLobby_From_3APP_ChangeAccount_No = 3429, Login_Platform_Facebook = 3430, Login_OpenChangeLanguageUI = 3431, Login_Platform_WX_IOS_YYX = 3432, Login_Platform_WX_Android_YYX = 3433, Login_Platform_QQ_IOS_YYX = 3434, Login_Platform_QQ_Android_YYX = 3435, Login_OpenUserProtocolView = 3440, Login_OpenUserProtocolConfirm = 3441, Login_UserProtocolRefuse = 3442, Login_UserProtocolAccept = 3443, Login_UserProtocolRefuseMsgBox = 3444, Login_Panel_Drag = 3445, Login_Play_OP_Mov = 3446, Login_OpenLoginPrivacyViewUrl = 3447, Login_OpenOfflineMode = 3448, Login_OpenAgeTip = 3449, Login_MuteMusicButtonSwitch = 3450, Login_OpenLoginChildPrivacyViewUrl = 3451, The_Common_Jump_TGA = 3452, Login_JumpToCamp = 3453, Login_ChangeMainBodyTip = 3454, Login_ChangeMainBodyConfirm = 3455, Login_Platform_QRQQ = 3456, Login_Platform_ShowQRLogin = 3457, Login_Platform_CloseQRLogin = 3458, Login_JumpToCampWithoutUrl = 3459, Login_OnAccountBan = 3460, TDir_ZoneGroupSelect = 3500, TDir_ZoneSelect = 3501, TDir_LastZoneSelect = 3502, TDir_ShowZoneSelect = 3503, TDir_BackToStartGame = 3504, TDir_ConnectLobby = 3505, Camp_JumpToCampTipChange = 3520, Ranking_ChangeRankTypeToOfficialCompetition = 3555, Ranking_ChangeRankTypeToPopularity = 3556, Newbie_CloseIntroForm = 3600, Newbie_CloseGestureGuide = 3601, Newbie_CloseJoyStickGuide = 3602, Newbie_CloseSettle = 3603, Newbie_ConfirmAdvanceGuide = 3604, Newbie_RejectAdvanceGuide = 3605, Newbie_AchieveFormClose = 3606, Newbie_CloseIntroForm2 = 3607, Newbie_CloseTyrantAlert = 3608, Newbie_CloseTyrantTip = 3609, Newbie_CloseTyrantTip2 = 3610, Newbie_ShowAchieve = 3611, Newbie_HeroGiftGuideStartOrEnd = 3612, Matching_GuideAdvanceConfirm = 3613, Newbie_Guide_Transfer_CloseAnimEnd = 3614, Newbie_OldPlayerFirstFormClose = 3615, Newbie_GuideToTrain_ClickCancle = 3618, Newbie_GuideToTrain_ClickConfirm = 3619, Newbie_BannerIntroDlg_Close = 3620, Newbie_BannerIntroDlg_ClickConfirm = 3621, Newbie_BannerIntroDlg_SelectElemChange = 3622, Newbie_ClickVictoryTips = 3623, Newbie_ClickCompleteNewbieGuide = 3624, Newbie_ClickNotCompleteNewbieGuide = 3625, Newbie_ClickProfitContinue = 3626, Newbie_WeakGuideTimeout = 3627, Newbie_CommomBubbleTimeout = 3628, Newbie_OnWeakGuideFormClose = 3629, Newbie_ClickLevelUpContinue = 3630, Newbie_ClickGetAwardHeroContinue = 3631, Newbie_ClickVictoryTipsClose = 3632, Newbie_ComboGuide_OnClick_GotoFinish = 3633, Newbie_ComboGuide_OnClick_ShowDetailTaskInfo = 3634, Newbie_HeroSkillTip_OnClick_Close = 3635, Newbie_HeroSkillTip_EndAni_Finish = 3636, Newbie_ComboGuide_OnClick_Intro_Continue = 3637, Newbie_GuideForm_Closed = 3638, Newbie_CommonGuide_BubbleTips_TimeOut = 3639, Newbie_CommonGuide_Form_Interact_TimeOut = 3670, Newbie_CommonGuide_Battle_GuideForm_Close = 3671, Newbie_CommonGuide_BubbleTips_OnClickCancle = 3672, Newbie_BannerIntroDlg_ClickCancle = 3673, Newbie_WeakGuideAutoCompleteCurStep = 3674, VideoGuide_OnClick_LeftBtn = 3675, VideoGuide_OnClick_RightBtn = 3676, VideoGuide_OnClick_ConfirmBtn = 3677, VideoGuide_OnClick_CancleBtn = 3678, VideoGuide_OnTimerStart = 3679, VideoGuide_OnTimerUp = 3680, Newbie_BannerImgGuideFormClosed = 3681, Newbie_PlayFullScreenVideoComplete = 3682, Newbie_PlayGuideVideoComplete = 3683, Newbie_PlayGuideVideoInterrupt = 3684, Newbie_BannerImgGuideComplete = 3685, VideoGuide_FormClose = 3686, VideoGuide_ClickSpeedUpBtn = 3687, VideoGuide_ClickRecoverSpeedBtn = 3688, Newbie_CommonGuide_Show_Banner_Dlg = 3689, Newbie_CommonGuide_Show_Video_Guide = 3690, Newbie_BubbleTips_Clicked = 3691, Newbie_Battle_BannerGuide_Complete = 3693, Newbie_Battle_VideoGuide_Complete = 3694, Newbie_Battle_ConfirmGuide_Yes = 3695, Newbie_Battle_ConfirmGuide_No = 3696, Newbie_WeakGuide_ClickAnyWhereMask = 3697, Newbie_GuideTips_ClickDetail = 3698, Newbie_CommonGuide_Bubble_Closed = 3699, Gear_Level_Up = 3700, Gear_Advance = 3701, Gear_Menu_Select = 3702, Gear_Item_Click = 3703, Gear_AdvMaterial_Click = 3704, Gear_Back_Advance = 3705, Gear_LvlUp_Max = 3706, HeroInfo_Hide = 3739, HeroInfo_AvatarGroupRecommendListSelect = 3740, HeroInfo_AvatarGroupRecommendListEnable = 3741, HeroInfo_OpenHeroLvlUpPanel = 3750, HeroInfo_OpenHeroStarUpPanel = 3751, HeroInfo_OpenHeroAdvPanel = 3752, HeroInfo_OpenBaseInfoPanel = 3753, HeroInfo_OpenSkinPanel = 3754, HeroInfo_OpenGearPanel = 3755, HeroInfo_LevelUp = 3757, HeroInfo_LevelUpMax = 3758, HeroInfo_GotoMall = 3759, HeroInfo_UpgradeFormClose = 3760, HeroInfo_Material_Direct_Buy = 3761, HeroInfo_Material_Direct_Buy_Confirm = 3762, HeroInfo_OpenPropPanel = 3763, HeroInfo_OpenBuyHeroForm = 3764, HeroInfo_SkillTipOpen = 3765, HeroInfo_SkillTipClose = 3766, HeroInfo_SymbolPropOpen = 3767, HeroInfo_SymbolPropClose = 3768, HeroInfo_Show2DImage = 3769, HeroInfo_Load2DImageError = 3771, HeroInfo_OpenBranchRoadForm = 3772, HeroInfo_ViewBranchRoadDetail = 3773, HeroInfo_OpenKnowMoreUrl = 3774, HeroInfo_OpenSkillVideoUrl = 3775, HeroInfo_OpenTeamFightPosUrl = 3776, HeroInfo_OpenResourceDemandUrl = 3777, HeroInfo_AvatarWearGroupSelect = 3778, HeroInfo_SwitchDetailedSkillDesc = 3779, HeroInfo_SwitchSimplifySkillDesc = 3780, HeroInfo_OpenHeroSkinShareForm = 3781, HeroInfo_SwitchSkillDesc = 3782, HeroInfo_SwitchSubSkillSet = 3783, HeroInfo_SwitchMainSkillSet = 3784, HeroInfo_CommonShare = 3785, HeroInfo_ShareTimerGo = 3787, HeroInfo_ShareAnimPausePlay = 3788, HeroInfo_ShareAnimReplay = 3789, HeroInfo_ShareAnimShare = 3790, HeroInfo_CancelShare = 3791, HeroInfo_PlayHeroVideoEnd = 3792, HeroInfo_ShowCameraType1 = 3793, HeroInfo_ShowCameraType2 = 3794, HeroInfo_ShowCameraTypeLockTips = 3795, HeroInfo_ShowHeroPanelInfoTips = 3796, HeroInfo_ClickVitoryTips = 3797, Quit_Game = 3798, Quit_GameCancel = 3799, Pay_OpenFirstPayPanel = 3800, Pay_OpenRenewalPanel = 3801, Pay_GetFirstPayReward = 3802, Pay_GetRenewalReward = 3803, Pay_OpenBuyDianQuanPanel = 3804, Pay_FirstPayDianQuan = 3805, Pay_RenewalDianQuan = 3806, Pay_ClickDianQuanGift = 3807, Pay_BuyDianQuanPanelClose = 3808, Pay_ClickGetNewHeroPanel = 3809, Pay_PlayHeroVideo = 3810, Pay_TehuiShop = 3811, Pay_GotoTehuiShop = 3812, Pay_OpenBuyDianQuanPanelinLobby = 3813, Pay_ClosePayDianQuanForm = 3814, Pay_OpenBuyDianQuanPanelWithLobby = 3820, Pay_RevertToVisiable = 3821, Pay_OpenKnowMoreUrl = 3822, Pay_OpenIosGuide = 3823, Pay_OpenBuyLimitGuide = 3824, Pay_OpenBuyLimitURL = 3825, Pay_GetFirstPayRewardConfirm = 3826, Pay_FirstCharge_Guide_Menu_Click = 3827, Pay_FirstCharge_Guide_JumpToMall = 3828, Pay_FirstCharge_Guide_Open = 3829, Pay_BuyDianQuanGift = 3830, Pay_WeChatTips_Close = 3831, Pay_WeChatCoupon_Get = 3832, Pay_OpenBuyDianQuanPanelCancel = 3833, Pay_GotoNobeView = 3834, Pay_OpenRule = 3835, Pay_Activity_High_Jump = 3836, Pay_Activity_Normal_Open = 3837, Pay_LiuShui_Open = 3838, Pay_ExceptionNobe_kf_url = 3839, PopUpPay_Form_Open = 3840, PopUpPay_Form_Close = 3841, TDir_QuitGame = 3900, TDir_TryAgain = 3901, Settings_OnClickShowSkinHelper = 3946, Settings_ReddotControllItemCloseConfirm = 3947, Settings_ReddotControllFormClose = 3948, Settings_ReddotControllItemChange = 3949, Settings_GyroRange = 3950, Settings_GyroSensitivity = 3951, Settings_OnGyroOpenChange = 3952, Settings_OnPrivacyBigHeadURLChange = 3953, Settings_OnClickBigHeadHelper = 3954, Settings_OnClickSubscribeBtn = 3955, Settings_KillDisplayPlayerName = 3956, Settings_PrivacyQQSnsAddFriend = 3957, Settings_HeroSelectShowHeroNameChange = 3958, Settings_PlayerOnlineStateChange = 3959, Settings_PlayerOnlineStateChangeHelp = 3960, Settings_OpenInputChatHelp = 3961, Settings_PlayerOnlineSetConfirm = 3962, Settings_PlayerOnlineSetCancel = 3963, Settings_DisplayUsedJob = 3964, Settings_OnClickDisplayUsedJob = 3965, Settings_OnFormOpened = 3966, Settings_OnOpSettingLoaded = 3967, Settings_Slider_OnFiveArmyHpModelChange = 3968, Settings_Slider_SceneBrightness = 3970, Settings_OnClickHelpQQZonePhotoSave = 3971, Settings_ToggleQQZonePhoto = 3972, Settings_SceneBrightnessHelp = 3973, Settings_SubscribeConfirmBtn = 3974, Settings_SubscribeCancelBtn = 3975, Settings_PreTeamRecruitSwitch = 3976, Settings_OnSecurePwdMianMiEnableChangeValidateConfirm = 3977, Settings_OnClickXgPushButton = 3978, Settings_OnClickXgPushSettings = 3979, Settings_OnJoyOffValueChange = 3980, Settings_OnSkillBtnOffValueChange = 3981, Settings_OnMTRChange = 3982, Settings_OnMTRConfirm = 3983, Settings_OnMTRClickHelp = 3984, Settings_OnShowCustomTeamLoadingFrameChange = 3985, Settings_OnShowCustomTeamLoadingFrameChangeHelp = 3986, Settings_Slider_onRecordTaoshaKingTimeEnableChange = 3987, Setting_OnInviteInTeamChange = 3988, Setting_OnAskForInviteInTeamChange = 3989, Setting_OnClickInviteInTeamRule = 3990, Setting_OnClickAskForInviteInTeamRule = 3991, Setting_OnMTRCancle = 3992, Settings_OnCareerBarChange = 3993, Settings_OnClickShareCapture = 3994, Settings_SkillDescSimplifyOrDetailed = 3995, Settings_OpenJoyStickCameraMoveConfirm = 3996, Settings_OpenCommonAtackType2Confirm = 3997, Settings_OnClickReddotControll = 3998, Settings_OnReddotControllElemEnable = 3999, Settings_OnVisitorRecordChanged = 4000, Settings_OnClickVisitorRecordRule = 4001, Settings_ShowJudgeBanBtn = 4002, Settings_Slider_onHDBloomChange = 4003, Settings_Slider_onHDLutChange = 4004, Settings_Slider_onHeroBloomChange = 4005, Settings_Slider_onUIFadeEffectChange = 4006, Setting_OnChangeEquipToLeftMode = 4007, Setting_OnChangeEquipToRightMode = 4008, Setting_Mna_Url = 4009, Settings_OnPrivacyShowSkinChange = 4010, Guild_Setting_Down_Join_Level_Num = 4011, Guild_Setting_Up_Join_Level_Num = 4012, Guild_Setting_Down_Join_Grade = 4013, Guild_Setting_Up_Join_Grade = 4014, Guild_Member_List_Sort_Click = 4015, Guild_Sign = 4020, Guild_Rankpoint_Season_Rank_List_Tab_Change = 4021, Guild_ApplyList_Save_Pref = 4022, Guild_Open_Transfer_Chairman_Without_Secure_Pwd_Confirm = 4023, Guild_Real_Transfer_Chairman = 4024, Guild_Apply_List_Element_Head_Selected = 4025, Guild_Recruit_Send_Recruit = 4026, Guild_Recruit_Send_Recruit_CD_Timeout = 4027, Guild_Recruit_Apply_Join = 4028, Guild_Apply_List_Element_Enabled = 4029, Guild_Open_Pandora_Rcmd_Standalone = 4030, Guild_Recruit_Input_Slogan = 4031, Guild_Lobby_Open_Log = 4032, Guild_BindPlatformGroup = 4040, Guild_UnBindPlatformGroup = 4041, Guild_JoinPlatformGroup = 4042, Guild_UnBindPlatformGroupConfirm = 4043, Guild_RemindPlatformGroup = 4044, Guild_Guide_Bind_PlatformGroup = 4045, Guild_Guide_Join_PlatformGroup = 4046, Guild_Copy_ID_To_Clipboard = 4047, Guild_GetHuoYueReward = 4048, Guild_ShowHuoYueRewardTips = 4049, Guild_Match_OpenMatchForm = 4050, Guild_Match_OpenMatchRecordForm = 4051, Guild_Match_StartGame = 4052, Guild_Match_OBGame = 4053, Guild_Match_RecordListElementClick = 4054, Guild_Match_SidebarTabChanged = 4055, Guild_Match_GuildScoreListElementEnabled = 4056, Guild_Match_MemberScoreListElementEnabled = 4057, Guild_Match_Invite = 4058, Guild_Match_Kick = 4059, Guild_Match_AppointOrCancelLeader = 4060, Guild_Match_AppointOrCancelLeaderConfirm = 4061, Guild_Match_Accept_Invite = 4062, Guild_Match_MemberInviteListElementEnabled = 4063, Guild_Match_RefreshGameStateTimeout = 4064, Guild_Match_Refuse_Invite = 4065, Guild_Match_ReadyGame = 4066, Guild_Match_CancelReadyGame = 4067, Guild_Match_OnMatchFormOpened = 4068, Guild_Match_OnMatchFormClosed = 4069, Guild_Match_KickConfirm = 4070, Guild_Match_ObWaitingTimeout = 4071, Guild_Match_RecordListElementEnabled = 4072, Guild_Match_RankSubTitleSliderValueChanged = 4073, Guild_Match_OpenMatchFormAndReadyGame = 4074, Guild_Match_Remind_Ready = 4075, Guild_Match_Open_Rule = 4076, Guild_Match_Team_List_Element_Enabled = 4077, Guild_Match_InviteConfirm = 4078, Guild_Match_RemindButtonCdOver = 4079, Guild_Match_OpenSignUpCardForm = 4080, Guild_Match_OpenSignUpListForm = 4081, Guild_Match_CreateSignUpCard = 4082, Guild_Match_OpenModifySignUpCardForm = 4083, Guild_Match_ModifySignUpCard = 4084, Guild_Match_ViewInvitation = 4085, Guild_Match_Quick_Invite = 4086, Guild_Match_AcceptInvitationBtnClick = 4087, Guild_Match_RefuseInvitationBtnClick = 4088, Guild_Match_Confirm_Change_Team = 4089, Guild_Match_SignUpCardPos1Click = 4090, Guild_Match_SignUpCardSelectPos1 = 4091, Guild_Match_SignUpCardPos2Click = 4092, Guild_Match_SignUpCardSelectPos2 = 4093, Guild_Match_SignUpListSortStateDesc = 4094, Guild_Match_SignUpListInviteBtnClick = 4095, Guild_Match_SignUpListElementEnabled = 4096, Guild_Match_SignUpListSortRankGradeDesc = 4097, Guild_Match_SignUpListSortLevelDesc = 4098, Guild_Match_SignUpListSortPosDesc = 4099, NameChange_OpenPlayerNameChangeForm = 4100, NameChange_OpenGuildNameChangeForm = 4101, NameChange_ChangeName = 4102, NameChange_GuideToMall = 4103, NameChange_BuyNameChangeCardConfirm = 4104, NameChange_OpenGameFriendMarkNameChangeForm = 4105, Guild_Match_OnMatchRecordFormClosed = 4150, Guild_Match_OnSignUpCardFormClosed = 4151, Guild_Match_OnSignUpListFormClosed = 4152, Guild_Match_OnInvitationFormClosed = 4153, Guild_Match_OnOnlineInvitationFormClosed = 4154, Guild_Memo_Click = 4155, Guild_Memo_HoldStart = 4156, Guild_Memo_HoldEnd = 4157, Guild_Memo_Timer_Change = 4158, Guild_Open_Modify_Guild_GongGao_Form = 4159, Guild_Info_Log_Item_Enable = 4160, Guild_Open_Rank_Entry = 4163, Guild_Rank_Entry_Rank_Point_List_Element_Enabled = 4164, Guild_Rank_Entry_Rank_Guild_Score_List_Element_Enabled = 4165, Guild_Match_Match_Open = 4166, Guild_Log_Open_Wish_List = 4169, Guild_Mission_Goto = 4170, Guild_Show_Week_RankPoint_Rank = 4171, Guild_Show_Game_Gain_Guild_Point_Rule = 4172, Guild_Log_Toggle_Click = 4173, Guild_Match_KingCup_Rule = 4174, Guild_Match_KingCup_Sign = 4175, Guild_Match_HeroSelectEnemyInfo_Open = 4176, Guild_Match_KingCup_Form_Open = 4177, Guild_Match_KingCup_Form_Close = 4178, Guild_Match_KingCup_SignUp_Ready_Confirm = 4179, Guild_Match_KingCup_SignUp_Confirm = 4180, Guild_Match_KingCup_Settle_Result_Animation_End = 4181, Guild_Match_KingCupPK_OpenURL = 4182, Guild_Match_KingCupPK_Letter = 4183, Speaker_Form_Open = 4200, Speaker_Form_Clsoe = 4201, Speaker_Send = 4202, Speaker_Tips_Open = 4203, Speaker_Tips_Close = 4204, Speaker_Tips_TimeUp = 4205, Speaker_EntryNode_Open = 4206, Speaker_EntryNode_TimeUp = 4267, Speaker_Form_Update = 4268, Speaker_OpenFactoryShop = 4269, ProgressBar_TimerGo = 4300, Common_Open_Tips = 4306, Common_InfoForm_TabChange = 4307, Common_CopyParamStr_To_ClipBoard = 4308, HeroSelectMultiple_HeroMenuSelect = 4400, HeroSelectMultiple_FormClose = 4401, HeroSelectMultiple_SelectHero = 4402, HeroSelectMultiple_ConfirmHeroSelect = 4403, HeroSelectMultiple_LeftHeroItemEnable = 4404, HeroSelectMultiple_LeftFullListHeroItemEnable = 4405, HeroSelectMultiple_ChangeHero = 4406, HeroSelectMultiple_RandomHero = 4407, HeroSelectMultiple_ChangeSymbolPage = 4408, HeroSelectMultiple_ChangeSkill = 4409, HeroSelectMultiple_ChangeRcmdEquip = 4410, HeroSelectMultiple_OpenHeroFullList = 4411, HeroSelectMultiple_CloseHeroFullList = 4412, HeroSelectMultiple_CloseAddedSkillPanel = 4413, HeroSelectMultiple_AddedSkillSelected = 4414, HeroSelectMultiple_AddedSkillConfirm = 4415, HeroSelectMultiple_ReqCloseForm = 4416, HeroSelectMultiple_Skill_Down = 4417, HeroSelectMultiple_Skill_Up = 4418, HeroSelectMultiple_MenuSelect = 4419, HeroSelectMultiple_RefreshSkinPanel = 4420, HeroSelectMultiple_SkinSelect = 4421, HeroSelectMultiple_ChangeOperateHero = 4422, HeroSelectMultiple_RandomAllHeros = 4423, HeroSelectMultiple_ShowJobBuffDescBtnDown = 4424, HeroSelectMultiple_ShowJobBuffDescBtnUp = 4425, HeroSelect_CpuPickByOwer_AddSkillOpen = 4500, HeroSelect_CpuPickByOwer_AddSkillSelected = 4501, HeroSelect_CpuPickByOwer_AddSkillChg = 4502, HeroSelect_CpuPickByOwer_OpenHeroListForAI = 4503, HeroSelect_CpuPickByOwer_SelAIHeroConfirm = 4504, HeroSelect_CpuPickByOwer_ReqCloseForm = 4505, HeroSelect_CpuPickByOwer_FormClose = 4506, HeroSelect_CpuPickByOwer_OpenFullHeroList = 4507, HeroSelect_CpuPickByOwer_CloseFullHeroList = 4508, HeroSelect_CpuPickByOwer_SelectHero = 4509, HeroSelect_CpuPickByOwer_LeftHeroItemEnable = 4510, HeroSelect_CpuPickByOwer_ConfirmHeroSelect = 4511, HeroSelect_CpuPickByOwer_Skill_Down = 4512, HeroSelect_CpuPickByOwer_Skill_Up = 4513, HeroSelect_CpuPickByOwer_MenuSelect = 4516, HeroSelect_CpuPickByOwer_RefreshSkinPanel = 4517, HeroSelect_CpuPickByOwer_SkinSelect = 4518, HeroSelect_CpuPickByOwer_HeroJobMenuSelect = 4519, HeroSelect_CpuPickByOwer_UseHeroExpCard = 4520, HeroSelect_CpuPickByOwer_UseHeroExpCardChanel = 4521, HeroSelect_CpuPickByOwer_ChangeRcmdEquipPlan = 4522, AutoLearnSkill_Save = 4800, AutoLearnSkill_Cancel = 4801, AutoLearnSkill_Reset = 4802, AutoLearnSkill_Edit = 4803, AutoLearnSkill_SetAutoLearnPrprity = 4804, AutoLearnSkill_LearnSkillTypeChange = 4805, AutoLearnSkill_ClickHelpBtn = 4806, AutoLearnSkill_OnLearnSkillEffEnd = 4807, Wealfare_OpenForm = 5001, Wealfare_CloseForm = 5002, Wealfare_ClickGet = 5003, Wealfare_Select = 5004, Wealfare_CheckInGet = 5005, Wealfare_MonthCheckInGet = 5006, Wealfare_MonthCheckFillConfirm = 5007, Wealfare_MonthCheckFillCancel = 5008, Wealfare_MonthCheckClickMore = 5009, Activity_OpenForm = 5011, Activity_CloseForm = 5012, Activity_Select = 5013, Activity_ClickGet = 5014, Activity_ClickMore = 5015, Activity_ClickGoto = 5016, Activity_Share_Click = 5017, Wealfare_DayCheckCellPress = 5020, Wealfare_DayCheckCellRelease = 5021, Wealfare_LevelAwardClick = 5022, Wealfare_DayCheckCellClicked = 5023, WealPandoraNoticeHttpTextLoadComplete = 5024, Activity_HeroShow_Back = 5050, Activity_AwardShow_Back = 5802, Activity_NoticeJump = 5052, Activity_BannerClick = 5053, Activity_SecondListElementInArea = 5055, Activity_PlayVideoFinished = 5056, Activity_JumpComponentClicked = 5057, IDIP_OpenForm = 5116, IDIP_CloseForm = 5117, IDIP_SelectItem = 5118, MSDK_NOTICE_CloseForm = 5119, IDIP_GOTO_COMPLETE = 5120, IDIP_QQVIP_OpenWealForm = 5121, MENU_PopupMenuFinish = 5122, WEB_OpenURL = 5123, WEB_OpenHome = 5124, OPEN_QQ_Buluo = 5125, NOBE_OPEN_Form = 5126, NOBE_TAB_Change = 5127, NOBE_CLOSE_Form = 5128, NOBE_PAY = 5129, NOBE_GOTO_STROE = 5130, NOBE_LEFT = 5131, NOBE_RIGHT = 5132, NOBE_LEFT_Nobe_Level = 5133, NOBE_RIGHT_Nobe_Level = 5134, NOBE_CHANGEHEAD_ICON_OPEN_FORM = 5135, NOBE_CHANGEHEAD_ICON_CLOSE_FORM = 5136, NOBE_CHANGEHEAD_ICON_Select_HeadIDX = 5137, WEB_IntegralHall = 5138, MSDK_NOTICE_Btn_Complete = 5139, Activity_Select_TitleMenu = 5140, GameCenter_OpenWXRight = 5141, Activity_Exchange = 5142, XinYue_Open = 5143, GameCenter_OpenQQRight = 5144, OPEN_HELPME = 5145, OPEN_HELPMEMONEY = 5146, GameCenter_OpenGuestRight = 5147, Pandroa_ShowActBox = 5148, Activity_PtExchange = 5149, Activity_ExchangeConfirm = 5150, Activity_PtExchangeConfirm = 5151, OPEN_TongCai = 5152, Activity_ExchangeCountReady = 5153, Activity_PtExchangeCountReady = 5154, Activity_OnAddExchangeCount = 5155, Activity_OnDecreseExchangeCount = 5156, Activity_OnMaxExchangeCount = 5157, Activity_ExchangeHeroSkinConfirm = 5158, NOBE_LevelUp_Form_Close = 5159, Activity_Banner_HoldStart = 5160, Activity_Banner_HoldEnd = 5161, IOS_COMMENT_CLOSE = 5162, IOS_COMMENT_GO = 5163, Activity_NewbieClass_ClickGet = 5164, Activity_ScrollPicTextEnalble = 5165, Activity_ScrollPicTextClick = 5166, SubScribe_Setting_ItemEnable = 5167, SubScribe_Setting_CloseForm = 5168, SubScribe_Setting_ItemChange = 5169, Activity_Exchange_IgnoreRedPoint = 5170, Activity_PtExchange_IgnoreRedPoint = 5171, OPEN_Open_Kf_Area = 5172, Activity_Weal_MainActivity_Day_Click = 5173, Activity_Weal_MainActivity_Day_Enable = 5174, Activity_Weal_MainActivity_MenuClick = 5175, Activity_Weal_MainActivity_MenuEnable = 5176, Activity_CloseBtnDown = 5177, Activity_Weal_MainActivity_GotBtn = 5178, Open_Hero_UI_URL = 5179, Open_MingWen_UI_URL = 5180, Activity_Weal_MainActivity_DuiHuanBtn_Click = 5181, Activity_Weal_MainActivity_HelpBtn = 5182, Activity_StepWeal_ClickRewardItem = 5183, IDIP_BANTIPS_HELP = 5184, Activity_MulTiOpt_OnClickToDraw = 5185, Activity_MulTiOpt_OpenConfirmJumpCharge = 5186, WebView_Load_Finish = 5187, Part_Reward_Element_Enable = 5188, Part_Exchange_Element_Enable = 5189, Part_PointsExchange_Element_Enable = 5190, NOBE_GROW_FORM_OPEN = 5191, NOBE_PRIVACY_FORM_OPEN = 5192, NOBE_HERO_DELTAIL = 5193, Activity_OneKeyAward = 5194, Fund_Animation_End = 5195, Nobe_Click_LevelKeepGift = 5196, Activity_Select_SubTitle = 5197, Activity_Subscribe_Click = 5198, Activity_CancelSubscribe_Click = 5199, HeadIcon_Change_Tab_Click = 5200, HeadIcon_Change_Icon_Click = 5201, HeadIcon_Change_Confirm = 5202, HeadIcon_Change_Form_Close = 5203, HeadIcon_Change_Form_Open = 5204, HeadIcon_Change_Item_Enable = 5205, SubScribe_PlayMode_Click = 5206, SubScribe_PlayMode_CancleClick = 5207, SubScribe_UGC_Click = 5208, SubScribe_UGC_CancleClick = 5209, SubScribe_PlayerInfoPVPHistory_Click = 5210, SubScribe_PlayerInfoPVPHistory_Preview = 5211, SubScribe_PlayerInfoPVPHistory_Subscribe = 5212, SubScribe_PlayerInfoPVPHistory_SubscribeCancel = 5213, SubScribe_PlayerInfoPVPHistory_SubscribeClose = 5214, SubScribe_NewVersion_JumpForm = 5215, NOBE_LEVEL_TIPS_OPEN = 5399, Matching_OnClickDifficultAI = 5400, Matching_OnEntertainmentClickMapHelp = 5401, Matching_ChatRecruitTeammate = 5402, Matching_SendChatRecruitMsg = 5403, Matching_OnClickPkAiLevelInfo = 5404, Matching_OnEntertainmentClickMapBannerImgHelp = 5405, Matching_OnInviteRuleRankElementSelect = 5406, Matching_OnOpenInviteRuleForm = 5407, Matching_OnOpenPlayerCard = 5408, Matching_OnClickOpenRcampusRoot = 5409, MatchingPreSelHero_OnOpenForm = 5430, MatchingPreSelHero_CancelFullHeroState = 5431, MatchingPreSelHero_DelSelectHero = 5432, MatchingPreSelHero_HeroJobMenuChange = 5433, MatchingPreSelHero_ClickHeroIcon = 5434, MatchingPreSelHero_HeroCellEnable = 5435, MatchingPreSelHero_ClickFullHeroState = 5436, MatchingPreSelHero_ClickSaveBtn = 5437, MatchingPreSelHero_OnCloseForm = 5438, MatchingPreSelHero_OnClickHelp = 5439, MatchingPreSelHero_ConfirmChangeFullHeroState = 5440, MatchingPreSelHero_ConfirmSavePreHeroInfo = 5441, MatchingPreSelHero_OnClickToFullBranchLevelDetail = 5442, MatchingPreSelHero_OnSwitchShowFullBranch = 5443, MatchingPreSelHero_OnUseOneKeyRecommend = 5444, MatchingPreSelHero_OnNotUseOneKeyRecommend = 5445, MatchingPreSelHero_OnUseOneKeyRecommend_ByPopUI = 5446, Matching_ForceStartBeginSingleMatchLadder = 5450, Matching_StartMultiMatchSkipLadderRankPreUpTimerCheck = 5451, Matching_OpenLadderRankPreUpHelpRule = 5452, Matching_SetShowLadderUpInfoBySingle = 5453, Matching_SetShowLadderUpInfoByTeam = 5454, Mall_GiftCenter_Open = 5500, Mall_GiftCenter_Close = 5501, Mall_GiftFadeInAnim_End = 5502, Mall_OnGiftMenuChanged = 5503, Mall_OnGiftSubMenueChanged = 5504, Mall_GiftSkinItemElementEnable = 5505, Mall_GiftSortClick = 5506, Mall_GiftSortChange = 5507, Mall_GiftShowDetail = 5508, Mall_GiftGive = 5509, Mall_OpenGiftForm = 5510, Mall_CloseGiftForm = 5511, Mall_GiftTypeElementEnable = 5512, Mall_GiftTypeElementClick = 5513, Mall_GiftSubTypeElementEnable = 5514, Mall_GiftJobTypeDownBtnClick = 5515, Mall_GiftSortTypeDownBtnClick = 5516, Mall_GiftSortTypeChanged = 5517, Mall_GiftHeroItemElementEnable = 5518, Mall_GiftPropItemElementEnable = 5519, Mall_WishingHouse_Close = 5520, Mall_WishingHouse_OpenListItemenable = 5521, Mall_WishingHouse_RewearedDatailUIItemEnable = 5522, Mall_WishingHouse_OpenListFreeOpenBtn = 5523, Mall_WishingHouse_OpenListAllOpenBtn = 5524, Mall_WishingHouse_ShowRewearDetatilUI = 5525, Mall_WishingHouse_OpenUI = 5526, Mall_WishingHouse_OpenPopUI = 5527, Mall_WishingHouse_ClickDetailUIItem = 5528, Mall_WishingHouse_ClickDetailBtn = 5529, Mall_WishingHouse_Confirm_Open = 5530, Mall_WishingHouse_Cancel_Open = 5531, Mall_WishingHouse_Hold_MallUI = 5532, Mall_WishingHouse_CloseDetailAeardUI = 5533, Mall_WishingHouse_ConfirmGotTheDetailReward = 5534, Mall_WishingHouse_XG_Push_Click = 5535, Mall_WishingHouse_XG_Push_ClickSetting = 5536, Mall_WishingHouse_XG_Push_Click_Confirm = 5537, Mall_WishingHouse_XG_Push_Click_Cancel = 5538, Mall_WishingHouse_Help = 5539, Mall_GiftTab_Split_Two_Btn = 5540, Mall_GiftTab_RevertTo_One_Btn = 5541, Mall_GiftTab_ClickTo_Add_WishList = 5542, GiftCenter_OnClickToSearchFriend = 5543, GiftCenter_OnClickToClearSearchFriendInput = 5544, GiftCenter_FriendItemEnable = 5545, GiftCenter_OnFriendItemSelected = 5546, GiftCenter_OnClickToChangeFriend = 5547, GiftCenter_OnClickToViewTalike = 5548, GiftCenter_OnClickToViewRecentHot = 5549, GiftCenter_OnClickHelpSystemItemToSearch = 5550, GiftCenter_OnClickToJumpPlayerInfoHeroTab = 5551, GiftCenter_OnClickToFilterHeroJob = 5552, GiftCenter_OnClickToSearchGift = 5553, GiftCenter_OnClickToClearSearchGiftInput = 5554, GiftCenter_OnBubbleTipTimeUp = 5555, GiftCenter_OnClickToJumpPlayerInfoWishTab = 5556, GiftCenter_OnHelpSystemChooseFriend = 5557, GiftCenter_OnClickToPresent = 5558, GiftCenter_OnClickToAddWish = 5559, GiftCenter_OnClickToOpenWishSquare = 5560, Mall_WishingHouse_OnGet_PlayAnimation = 5561, Mall_GiftOperateTypeElementClick = 5562, Mall_GiftJobTypeChanged = 5563, Mall_GiftRecord_Btn_Click = 5564, Mall_GiftChooseHeroBtnClick = 5565, Mall_GiftChooseHeroListItemClick = 5566, GiftCenter_OnClickToResetChooseHero = 5567, GiftCenter_OnClick_SearchGift_VoiceOfflineTranslation = 5568, GiftCenter_OnClick_SearchFriend_VoiceOfflineTranslation = 5569, GiftCenter_OnClick_VoiceOfflineTranslationResult_Send = 5570, GiftCenter_BuyGiftSkin_MsgTypeDownBtnClick = 5571, GiftCenter_BuyGiftSkin_MsgTypeChanged = 5572, GiftCenter_BuyGiftSkin_MsgConfirmBtnClick = 5573, GiftCenter_BuyGiftSkin_SoundInput_Click = 5574, GiftCenter_BuyGiftSkin_SoundInput_Click_Up = 5575, GiftCenter_BuyGiftSkin_Click_SoundChatEntity = 5576, Mall_Gift_Friend_Birthday_View_BtnClick = 5577, Mall_Gift_TurnLeft = 5578, Mall_Gift_TurnRight = 5579, GiftCenter_FriendTagList_ElementEnable = 5580, GiftCenter_OnClickToAskFor = 5581, GiftCenter_BuyGiftSkin_CancleConfirmSend = 5582, GiftCenter_BuyGiftSkin_CancleSendBuy = 5583, GiftCenter_OnClickToDeleteWish = 5584, Mall_Gift_Jump_WishList = 5585, Mall_AppearGiftForm = 5586, GiftCenter_PresentItemRspSucc = 5587, Mall_Gift_DownLoadPhotoSucc = 5588, Mall_Gift_DownLoadPhotoFail = 5589, GiftCenter_ViewGiftSkin_RebateGiftBtnClick = 5590, GiftCenter_SendAskChooseFriend_Form_Open = 5591, GiftCenter_SendAskChooseFriend_Form_Close = 5592, GiftCenter_BuyForFriend_PresentFriendBatchMode_ToggleValueChanged = 5593, GiftCenter_BuyForFriend_ToggleBtnClick = 5594, GiftCenter_BuyForFriend_MultiFriendPresent_BtnClick = 5595, GiftCenter_ComfirmBuyForFriend_ListElementEnable = 5596, GiftCenter_RebateBirthdayGift_Form_Open = 5597, GiftCenter_RebateBirthdayGift_Form_Close = 5598, Question_OnClickStartQuestion = 5600, Question_OnClickAnswer = 5601, Question_OnClickNextQuestion = 5602, Question_OnClickMasterAnswer = 5603, Question_OnErrorAnimEnd = 5604, Question_OnTrueAnimEnd = 5605, Question_OnShowRightAnswerAnimEnd = 5606, Question_OnClickContinue = 5607, Question_OnClickClose = 5608, Question_OnClickCloseConfirm = 5609, Question_OnLoginClickContinueQuestion = 5610, Question_OnLoginClickCancleQuestion = 5611, Question_OnClickAnswerExplainOK = 5612, Question_OnFormClose = 5613, Question_OnClickConfirmGotoNextQuestion = 5614, Question_OnClick_StartAdvancedQuestion = 5615, Question_OnClick_Zan_Questioner = 5616, Question_OnClick_Cai_Questioner = 5617, Question_OnClick_OtherHead = 5618, Question_OnClickAndvancedRule = 5619, Question_OnClickConfirmRefreshedTryAgain = 5620, Training_OpenEntry = 5700, Training_OpenBasisEntry = 5701, Training_OpenAdvancedEntry = 5702, Training_StartBasisTrainLevel = 5703, Training_StartAdvancedTrainLevel = 5704, Training_OnClickBack = 5705, Training_OnClickGetBasisReward = 5706, Training_OnClickRule = 5707, Training_Settle_ConditionGuide_OnClickBack = 5708, Training_Settle_ConditionGuide_OnClickPlayAgain = 5709, Training_Settle_ConditionGuide_OnClickShare = 5710, Training_Change_Panel = 5711, Training_Change_Dragon = 5712, Training_Change_Dragon_Evo = 5713, Training_Settle_Dragon_Evo = 5714, Training_Cancel_Dragon_Evo = 5715, Training_Settle_Form_Closed = 5716, Training_OpenHeroSelectForm = 5717, Training_CloseHeroSelectForm = 5718, HeroSelect_HeroShortVidoe = 5719, GameEntry_StartGame_Training = 5720, MiShuRobot_SoundInput_Click = 5800, MiShuRobot_SoundInput_Click_Up = 5801, MiShuRobot_SoundInput_Drag = 5802, MiShuRobot_MsgItem_Enable = 5803, MiShuRobot_OpenForm = 5804, MiShuRobot_OnFormClose = 5805, MiShuRobot_OnClickSend = 5806, MiShuRobot_OnClickSwitchSoundOff = 5807, MiShuRobot_OnclickSwitchInputMethod = 5809, MiShuRobot_OnMiShuDown = 5810, MiShuRobot_OnMiShuUp = 5811, MiShuRobot_OnShowSoundTipTimeUp = 5812, MiShuRobot_OnShowSoundTipTimeChange = 5813, MiShuRobot_OnClickCardUrl = 5814, MiShuRobot_OnClickShili = 5815, MiShuTips_OnClick_Text = 5816, TaoShaEntry_OpenEntry = 5900, TaoShaEntry_StartQuickMatch = 5901, TaoShaEntry_StartMultMatch = 5902, TaoShaEntry_OnClickRule = 5903, TaoShaEntry_OnClickStartTuWeiTrainLevel = 5904, TaoShaEntry_OnClickSelectType = 5905, TaoShaEntry_OnClickSelectTypeShowDetail = 5906, TaoShaEntry_OnClickGrade = 5907, TaoShaEntry_OnClickEnterTain = 5908, TaoShaEntry_OnFormClose = 5909, TaoShaEntry_OnUsualPlayerEnable = 5910, TaoShaEntry_OnClickShowBestTeamDetail = 5911, TaoShaEntry_OnClickPlayerHead = 5912, TaoShaEntry_OnEntryFormAutoMatchMemberChange = 5913, TaoShaEntry_OnClickGradeHelp = 5914, TaoShaEntry_OnClickShowUsualPlayer = 5915, TaoShaEntry_OnClickGetGradeReward = 5916, TaoShaEntry_OnClickEnterActivityMap = 5917, Mall_OpenForm = 6000, Mall_CloseForm = 6001, Mall_Mall_Tab_Change = 6002, Mall_Hide = 6003, Mall_Mall_Tab_Change_Notify_SubModule = 6004, Mall_Recommend_NewBieTips_Timer_Update = 6005, Mall_Recommend_NewBieTips_Timer_End = 6006, Mall_HotRecommendOnAnimation = 6007, Mall_PreviewableListItemClick = 6008, Mall_OnSetImgBgActive = 6009, HotRecommendClickBuyWhenIsInGiftCenter = 6010, Mall_Product_Buy = 6011, Mall_Continue_Show_Reward = 6012, Mall_Product_Confirm_Buy = 6013, Mall_Open_Item_Prop_Gifts_Tab = 6014, Mall_Open_Factory_Shop_Tab = 6015, Mall_Prepare_Continue_Show_Reward = 6016, Mall_Appear = 6017, Mall_GoToSymbolTab = 6018, Mall_Roulette_Tab_Change = 6019, Mall_Roulette_Buy_One = 6020, Mall_Roulette_Buy_Five = 6021, Mall_Roulette_Buy_One_Confirm = 6022, Mall_Roulette_Buy_Five_Confirm = 6023, Mall_Roulette_Spin_Change = 6024, Mall_Roulette_Spin_End = 6025, Mall_Roulette_Open_Extern_Reward_Tip = 6026, Mall_Roulette_Draw_Extern_Reward = 6027, Mall_Roulette_Reset_Reward_Draw_Cnt = 6028, Mall_Action_Mask_Reset = 6029, Mall_Roulette_Show_Reward_Item = 6030, Mall_Roulette_Show_Rule = 6031, Mall_Roulette_Tmp_Reward_Enable = 6032, Mall_Skip_Animation = 6033, Mall_Roulette_Close_Award_Form = 6034, Mall_GoToSkinTab = 6035, Mall_GoToTreasureTab = 6036, Mall_GotoCouponsTreasureTab = 6037, Mall_GotoDianmondTreasureTab = 6038, Mall_Skip_Mask_Reset = 6039, Mall_Get_AWARD_CLOSE_FORM = 6040, Mall_GoToGiftTab = 6041, Mall_GoToAvatarTab = 6042, Mall_GoToAppearanceTab = 6043, Mall_HeroItem_Enable = 6050, Mall_Hero_JobSelect = 6051, Mall_Hero_OnBuyBtnClick = 6052, Mall_SkinItem_Enable = 6053, Mall_Skin_JobSelect = 6054, Mall_Skin_OnBuyBtnClick = 6055, Mall_Jump_Form = 6056, Mall_Hero_Own_Flag_Change = 6057, Mall_Skin_Own_Flag_Change = 6058, Mall_FirstCharge_Guide_Open = 6059, Mall_Mystery_ItemEnable = 6060, Mall_GoToMysteryTab = 6061, Mall_Close_Mystery_Shop = 6062, Mall_Mystery_On_Open_Buy_Form = 6063, Mall_Mystery_On_Buy_Item = 6064, Mall_Mystery_On_Confirm_Buy_Item = 6065, Mall_Mystery_On_Roll_Discount = 6066, Mall_Mystery_On_Time_End = 6067, Mall_Mystery_On_Buy_Hero_Not_Own = 6068, Mall_Mystery_On_Default_Item_Click = 6069, Mall_Recommend_On_Lottery_Buy = 6070, Mall_Recommend_On_Lottery_Buy_Confirm = 6071, Mall_Recommend_Tab_Change = 6072, Mall_Recommend_On_Exchange = 6073, Mall_Recommend_On_Exchange_Confirm = 6074, Mall_Recommend_On_Buy = 6075, Mall_Recommend_On_Buy_Confirm = 6076, Mall_Recommend_Hero_Skill_Down = 6077, Mall_Recommend_Hero_Skill_Up = 6078, Mall_Recommend_Exchange_More = 6079, Mall_Recommend_List_Tab_Change = 6080, Mall_Recommend_Hero_List_Item_Enable = 6081, Mall_Recommend_Skin_List_Item_Enable = 6082, Mall_Recommend_Timer_End = 6083, Mall_GoToSuiPianHeroTab = 6084, Mall_GoToSuiPianSkinTab = 6085, Mall_GoToHotRecommendTab = 6086, Mall_Boutique_New_Arrival_Enable = 6087, Mall_Boutique_Hot_Sale_Enable = 6088, Mall_Boutique_Factory_Product_Click = 6089, Mall_Boutique_Factory_Product_Confirm_Buy = 6090, RefreshMallAvatarTab = 6091, Mall_Hero_Sort_Type_Select = 6092, Mall_Hero_Sort_Type_Change = 6093, Mall_Buy_Product_Confirm = 6094, Mall_Crystal_Form_Open = 6095, Mall_Crystal_List_Item_Enable = 6096, Mall_Crystal_On_Exchange = 6097, Mall_Crystal_On_Exchange_Confirm = 6098, Mall_CryStal_On_TabChange = 6099, Mall_Factory_On_TabChange = 6100, Mall_Recommend_Avatar_List_Item_Enable = 6101, Mall_Goods_Show_Item_Eable = 6102, Mall_Goods_Show_Job_Select = 6103, Mall_Goods_Show_Appear = 6104, Mall_Goods_Show_Own_Flag_Change = 6105, Mall_On_Jump_To_Refitroom_Avatar_Tab = 6106, Mall_OnClick_Open_ZhouBian = 6107, Mall_OnClick_Close_WeChatTips = 6108, Mall_OnClick_TurnTOPay = 6109, Mall_HotRecommend_ToggleChange = 6110, Mall_HotRecommend_ClickPrevious = 6111, Mall_HotRecommend_ClickNext = 6112, Mall_HotRecommend_ClickBattleEffectGift = 6113, Mall_HotRecommend_ClickCloseAnimation = 6114, Mall_SetTopCommonActive = 6115, Mall_HotRecommend_ClickPlayVideo = 6116, Mall_Recommend_Send_Lottery_Req = 6117, Mall_Recommend_Send_FreeLottery_Req = 6118, Mall_Avatar_ClickPrevious = 6119, Mall_Avatar_ClickNext = 6120, Mall_OnConfirmToExchangeCoin = 6121, Mall_OnCancelToExchangeCoin = 6122, Mall_Crystal_Form_Close = 6123, Mall_Crystal_Item_Select = 6124, Mall_Reward_Pool_Open_Form = 6125, Mall_Roulette_Reward_List_Element_Enable = 6126, Mall_Roulette_Reward_List_Item_Select = 6127, Mall_Reward_Pool_Close_Form = 6128, Mall_Roulette_Extern_Reward_Main_Open_Form = 6129, Mall_Roulette_Extern_Reward_Main_Close_Form = 6130, Mall_Roulette_Reward_Pool_Gift_Item_Select = 6131, Mall_Roulette_Discount_Time_End = 6132, Mall_Roulette_Scene_Jump_Anim_End = 6133, Mall_Roulette_Charge_State_Return_Idle_Click = 6134, Mall_Roulette_Award_Form_Back_Btn_Click = 6135, Mall_Crystal_OnShowHeroListInfoPanel = 6136, Mall_Crystal_OnHideHeroListInfoPanel = 6137, Mall_Crystal_Form_Appear = 6138, Mall_Crystal_Form_Hide = 6139, Mall_Mystery_On_Default_Item_Float_Anim_End = 6140, Mall_Reward_Pool_Appear_Form = 6141, Mall_Roulette_Draw_Down = 6142, Mall_Roulette_Draw_Up = 6143, Mall_Roulette_Draw_Move = 6144, Mall_Roulette_Buy_Cancel = 6145, Mall_Crystal_Model_Load_Succ = 6146, Mall_Roulette_Reward_LuckyEgg_Anim_End = 6147, Mall_Roulette_Common_Preview_DetailBtn_Click = 6148, Mall_Boutique_OnClickToAddWish = 6149, Mall_Boutique_OnClickToDeleteWish = 6150, Mall_OpenXianShiDianQuan = 6151, Mall_CloseXianShiDianQuan = 6152, Mall_XianShiDianQuanHeroJobSelect = 6153, Mall_XianShiDianQuanHero_OwnFlagChange = 6154, Mall_XianShiDianQuanSkinJobSelect = 6155, Mall_XianShiDianQuanSkin_OwnFlagChange = 6156, Mall_XianShiDianQuanHero_Buy = 6157, Mall_XianShiDianQuanSkin_Buy = 6158, Mall_XianShiDianQuanHero_SortTypeChanged = 6159, Mall_XianShiDianQuanSkin_SortTypeChanged = 6160, Mall_XianShiDianQuanFactory_TabChange = 6161, Mall_XianShiDianQuanHero_NoticeSetChange = 6162, Mall_XianShiDianQuanSkin_NoticeSetChange = 6163, Mall_XianShiDianQuanFactory_NoticeSetChange = 6164, Mall_XianShiDianQuan_ClickConfirmBuyInBuyHeroForm = 6165, Mall_XianShiDianQuan_ClickConfirmBuyInBuySkinForm = 6166, Mall_XianShiDianQuan_Hero_OnSendBuyReq = 6167, Mall_XianShiDianQuan_Skin_OnSendBuyReq = 6168, Mall_Factory_RecommendListSelect = 6169, Mall_Factory_RecommendPreviewClick = 6170, Mall_HeroSkin_Preview_Close = 6171, Mall_BattleEffect_Preview_Close = 6172, Mall_XianShiDianQuan_OnOpenRule = 6173, Mall_XianShiDianQuan_JumpActivity = 6174, Mall_Hero_List_Scroll = 6175, Mall_Skin_List_Scroll = 6176, Mall_Recommend_SuiPian_List_Scroll = 6177, Mall_Reward_Pool_Preview_Model_Load_Success = 6178, Mall_Reward_Pool_Preview_Detail_Click = 6179, Mall_Reward_Pool_Back_Btn_Click = 6180, Mall_Roulette_Exchange_MixScore_Open_Form = 6181, Mall_Roulette_Exchange_MixScore_Close_Form = 6182, MixScore_Exchange_OnAddBuyCount_Btn_Click = 6183, MixScore_Exchange_OnSubBuyCount_Btn_Click = 6184, MixScore_Exchange_OnSlideCountChange = 6185, MixScore_Exchange_Content_List_Element_Select = 6186, MixScore_Exchange_Buy_Btn_Click = 6187, MixScore_Exchange_Confirm_Buy = 6188, MixScore_Exchange_Cancle_Buy = 6189, Mall_Reward_Pool_Preview_Exchange_Click = 6190, Mall_GotoMixScoreTreasureTab = 6191, MixScore_Exchange_OnAddBuyCount_Btn_Hold = 6192, MixScore_Exchange_OnSubBuyCount_Btn_Hold = 6193, Mall_BeforeGotoMixScoreTreasureTab = 6194, Mall_Boutique_SuiPianShop_Btn_Click = 6195, Mall_Roulette_Discount_Time_Change = 6196, MixScore_Exchange_Rule_Btn_Click = 6197, Mall_Crystal_Goto_Roulette_Lobby = 6198, Mall_Roulette_CrystalShop_Btn_Click = 6199, Mall_Roulette_RewardPool_Btn_Click = 6200, BuyPick_Add = 6201, BuyPick_Dec = 6202, BuyPick_Max = 6203, BuyPick_Confirm = 6204, BuyPick_Cancel = 6205, BuyPick_QQ = 6206, BuyPick_QQVIP = 6207, BuyPick_QQ_VIP = 6208, DeepLink_OnClick = 6209, QQBOX_OnClick = 6210, BuyPick_ConfirmFactoryShopBuy = 6211, BuyPcik_factoyShopTipsForm = 6212, BuyPcik_factoyShopTipsCancelForm = 6213, BuyPick_CloseForm = 6214, BuyPick_OpenBuyItemForFriend = 6215, BuyPick_BuyForFriend = 6216, BuyPick_ConfirmBuyForFriend = 6217, BuyPick_SecurePwdConfirmBuyForFriend = 6218, BuyPick_LeaveMsgForFriend = 6219, BuyPick_AskFor = 6220, BuyPick_OnConfirmSeasonPassBuy = 6221, BuyPick_ClosePresentForm = 6222, BuyPick_SendPresentMsgToFriend = 6223, BuyPick_OnConfirmFactoryShopBuy = 6224, Buy_PickDialog_Minors_Tips_Confirm = 6225, Mall_Skin_Sort_Type_Select = 6226, Mall_Skin_Sort_Type_Change = 6227, BuyPick_HeroSkinAndSignature_Buy = 6228, BuyPick_HeroSkin_Jump_Get = 6229, Mall_SpecialDiscountListElementEnable = 6290, Mall_SpecialDiscountItemSelect = 6291, Mall_SpecialDiscountItemRemove = 6292, Mall_SpecialDiscountBuyClick = 6293, Mall_SpecialDiscountBuyFormOpen = 6294, Mall_SpecialDiscountBuyFormClose = 6295, Mall_SpecialDiscountBuyListElementEnable = 6296, Mall_SpecialDiscountBuyFormBuyClick = 6297, Mall_SpecialDiscountRuleBtnClick = 6298, Mall_SpecialDiscountHideTab = 6299, Trusteeship_followme = 6300, Trusteeship_Cancel = 6301, Trusteeship_AI = 6302, Trusteeship_CloseButDoNothing = 6303, Degrade_Quality_Accept = 6400, Degrade_Quality_Cancel = 6401, Degrade_FPS_Accept = 6402, Degrade_FPS_Cancel = 6403, Degrade_Resolution_Accept = 6404, Degrade_Resolution_Cancel = 6405, Share_NewHero = 7000, Share_CloseNewHeroorSkin = 7001, Share_CloseNewHeroShareForm = 7002, Share_ShareFriend = 7003, Share_ShareTimeLine = 7004, Share_ShareSavePic = 7005, Share_SharePVPScore = 7006, Share_SharePVPSCcoreClose = 7007, Share_ClosePVPSCoreOld = 7008, Share_MysteryDiscount = 7009, Share_ClosePVPAchievement = 7010, Share_ShowPVPSettleData = 7011, Share_ShowPVPSettleDataClose = 7012, Share_ShowUpdateGradeShare = 7013, Share_ShowUpdateGradeShareClose = 7014, Share_DownloadPlayConfirm = 7015, Share_DownloadPlayCancel = 7016, Share_SharePandoraPhoto = 7017, Share_ShareGameLine = 7018, Share_ClickCallSnsIntimacyFriend = 7019, Share_Capture_Friend = 7120, Share_Capture_Zone = 7121, Share_SubScribe_MsgBox_Confirm = 7122, Share_SubScribe_MsgBox_Open = 7123, Share_Capture_CloseForm = 7124, Share_ImageCloseForm = 7125, Share_PVPLadder_SelectShareType = 7126, Share_NewHeroVideo = 7127, Share_PlayerVideoTips = 7128, Share_PlayerVideoLoadSucc = 7129, Share_NewHeroVideoclosed = 7130, Notice_OnlyShowOneDay = 7131, Share_Projec8NewMap = 7132, Share_Projec8NewMapVideo = 7133, Share_Projec8NewMapClose = 7134, Share_HeroSkinPosterListSelectChange = 7135, Share_HeroSkinPosterListPrevious = 7136, Share_HeroSkinPosterListNext = 7137, Share_Projec8NewPet = 7138, Share_Projec8NewPetVideo = 7139, Share_Projec8NewPetClose = 7140, Share_OnConfirmToPlayVideo = 7141, Share_MVPVideoLoadSucc = 7142, Share_ONConfirmToPlayMVPVideo = 7143, Share_ShowPVPSettleData_Entry = 7144, Share_ShowSkinPosterShowerHttpImageLoaded = 7145, Share_HttpShareImageLoaded = 7146, Share_Roulette_CrystalItem = 7147, Share_SubScribe_QQFormNew_SubScribing = 7148, Share_SubScribe_QQFormNew_SubScribingCancel = 7149, Share_SubScribe_QQFormNew_Close = 7150, Share_SubScribe_Activity_Toggle = 7151, Share_SubScribe_Activity_BtnOn = 7152, Share_SubScribe_Activity_BtnOff = 7153, Share_NewHeroOrSkin_SetPersonalPoster_BtnClick = 7154, Share_NewSkin_SetActiveSignature_BtnClick = 7155, Share_NewSkin_SetActiveKOLStoreMark_BtnClick = 7156, Share_NewSkin_KOLStoreGuideShow_Time_Up = 7157, Share_CustomizeStrategy_Open = 7158, Share_CustomizeStrategy_Close = 7159, Share_CustomizeStratety_Select_FightCount = 7160, Share_CustomizeStratety_Select_WinRate = 7161, Share_CustomizeStratety_Select_Score = 7162, Share_CustomizeStratety_Select_GoldMedal = 7163, Share_CustomizeStratety_Select_SilverMedal = 7164, Share_CustomizeStratety_Select_MvpCount = 7165, Share_CustomizeStratety_Select_RadarGraph = 7166, Share_CustomizeStratety_Select_All = 7167, Share_Gift_Select_SenderInfo = 7168, Share_ShareYingdi = 7169, VOICE_HoldStart_VOCEBtn = 8000, VOICE_Hold_VOCEBtn = 8001, VOICE_HoldEnd_VOCEBtn = 8002, BannerImage_HoldStart = 8003, BannerImage_HoldEnd = 8004, VOICE_OpenSpeaker = 8005, VOICE_OpenMic = 8006, BannerImage_ClickItem = 8007, BannerImage_Item_Enable = 8008, Voice_Speak_SelectTeam = 8009, Voice_Speak_SelectMY = 8010, Voice_Mic_SelectTeam = 8011, Voice_Mic_SelectMY = 8012, Voice_WXLive_ShowListUI = 8013, Voice_WXLive_OpenMic = 8014, Voice_WXLive_OpenSpeak = 8015, Voice_WXLive_HideListUI = 8016, Voice_WXLive_MemberListEnable = 8017, Voice_WXLive_Inveited_Continue = 8018, Voice_WXLive_Inveited_Cancel = 8019, Voice_WXLive_Inveited_OpenWatch = 8020, Voice_Speak_SelectGameHelpeVoice = 8021, Voice_Mic_SelectGameHelpeVoice = 8022, Proj8Illu_OpenForm = 8100, Proj8Illu_MenuSelect = 8101, Proj8Illu_CloseForm = 8102, Proj8Illu_OnEquipItemClicked = 8103, Proj8Illu_OnHeroCampDetailClicked = 8104, Proj8Illu_CloseHeroCampDetail = 8105, Proj8Illu_OnCustomCampSelectedChanged = 8106, Proj8Illu_OnCustomCareerSelectedChanged = 8107, Proj8Illu_OnCustomHeroItemEnabled = 8108, Proj8Illu_OnCustomHeroItemClicked = 8109, Proj8Illu_OnCustomSelectedHeroClicked = 8110, Proj8Illu_OnArrangeUseBtnClicked = 8111, Proj8Illu_OnCustomArrangeResetBtnClicked = 8112, Proj8Illu_OnShapeItemSelected = 8113, Proj8Illu_OnShapeNavLeftClicked = 8114, Proj8Illu_OnShapeNavRightClicked = 8115, Proj8Illu_OnPresetArrangeFormOpen = 8116, Proj8Illu_OnPresetArrangeFormClose = 8117, Proj8Illu_OpenFormInLobby = 8118, Proj8Illu_OnSavePresetArrange = 8119, Proj8Illu_OpenHeroDetailPopup = 8120, Proj8Illu_CloseHeroDetailPopup = 8121, Proj8Illu_SwitchHeroNameAndCount = 8122, Proj8Illu_EquipItemEnabled = 8123, Proj8Illu_OpenFormWithMenu = 8124, Proj8Illu_OnEquipTypeSelectChange = 8125, Proj8Illu_OnTalentTypeSelectChange = 8126, Proj8Illu_OnTalentItemClicked = 8127, Proj8Illu_FormClosed = 8128, Proj8Illu_MainMenuClicked = 8129, Proj8Illu_SubMenuClicked = 8130, Proj8Illu_OnIlluHeroSortTypeChanged = 8131, Proj8Illu_ClickIlluHeroItem = 8132, Proj8Illu_ClickIlluHeroHelp = 8133, Proj8Illu_NavLeftIlluHeroSkin = 8134, Proj8Illu_NavRightIlluHeroSkin = 8135, Proj8Illu_ClickPropDetail = 8136, Proj8Illu_ClickSetSkin = 8137, Proj8Illu_ClickRuleDescSubMenu = 8138, Proj8Illu_ClickRuleDescMainMenu = 8139, Proj8Illu_RuleDescNavLeft = 8140, Proj8Illu_RuleDescNavRight = 8141, Proj8Illu_RuleDescVideoBtnClicked = 8142, Proj8Illu_OperateMenuClicked = 8143, Proj8Illu_OperatePlayVideo = 8144, Proj8Illu_OperatePauseVideo = 8145, Proj8Illu_ClickAchieve = 8146, Proj8Illu_ClickAchieveHelp = 8147, Proj8NB_CloseModalTips = 8150, Proj8NB_ClickIamNewbie = 8151, Proj8NB_ClickIamExpert = 8152, Proj8NB_CloseLetter = 8154, Proj8NB_OnPopup3_1Closed = 8155, Proj8NB_OnPopup2_1Closed = 8156, Proj8NB_OnPopup5_1Closed = 8157, Proj8NB_OnClickNextState = 8158, Proj8NB_OnClickWholeExplain = 8159, Proj8NB_ClickQuitGame = 8161, Proj8NB_OpenLetter = 8162, Proj8NB_OnPopup4_1Closed = 8163, Proj8NB_ClickGoOnNBMission = 8164, Proj8NB_ClickNotEnterNBMission = 8165, Proj8NB_ClickQuitChooseNewbieOrExpert = 8166, Proj8NB_OnTalentPicTipsClosed = 8167, Proj8NB_OnEquipVideoClosed = 8168, Proj8Illu_Relative_Click = 8200, Proj8Illu_Relative_SortTypeChanged = 8201, Proj8Illu_Relative_HelpClick = 8202, Proj8Illu_OpenRelativeRecommendPopup = 8204, Proj8Illu_CloseRelativeRecommendPopup = 8205, Proj8Illu_OpenArrangeDetailPopup = 8206, Proj8Illu_CloseArrangeDetailPopup = 8207, Particle_PlayLobbyBtnEffect = 9000, Particle_PlayLobbyBtnTopEffect = 9001, Particle_PlayLobbyBtnLeftEffect = 9002, Particle_PlayLobbyBtnRightEffect = 9003, ReviveHero_OnSelectBuff0 = 9010, ReviveHero_OnSelectBuff1 = 9011, ReviveHero_OnSelectBuff2 = 9012, ReviveHero_OnReviveBtnClick = 9013, ReviveHero_OnExitBtnClick = 9014, ReviveHero_OnConfirmRevive = 9015, ReviveHero_OnReviveFailed = 9016, ReviveHero_OnReviveTimeout = 9017, Ladder_StartMatching = 9050, Ladder_ShowHistory = 9051, Ladder_ShowRecent = 9052, Ladder_ShowRules = 9053, Ladder_ExpandHistoryItem = 9054, Ladder_ShrinkHistoryItem = 9055, Ladder_ConfirmSeasonRank = 9056, Ladder_ReqGetSeasonReward = 9057, Ladder_LadderGradeChange = 9058, Ladder_OnEntryFormOpened = 9059, Ladder_OnEntryFormClosed = 9060, Ladder_OnClickBpGuide = 9061, Ladder_OnClickShowRecentUsedHero = 9062, Ladder_OnClickHideRecentUsedHero = 9063, Ladder_ShowQingBaozhan = 9064, Ladder_ShowBraveScoreRule = 9065, Ladder_GetSkinReward = 9066, Ladder_LadderEntry_GetSkinReward = 9067, Ladder_LadderEntry_OpenProficiencyLimitRule = 9068, Ladder_OpenHeroProficiencyView = 9069, Ladder_GotoPvpMatchEntry = 9070, Ladder_GotoBuyHero = 9071, Ladder_HeroProficiencyTypeMenuSelect = 9072, Ladder_HeroProficiencyItemEnable = 9073, Ladder_OnSelectHistoryItemChanged = 9074, Ladder_OnClick_55_KaiHei_Help = 9075, Ladder_OnClick_ProficiencyReward = 9076, Ladder_OnLadderHistoryListItem_Enable = 9077, Festival55_Guide_Animation_End = 9078, Ladder_Settle_LadderShowInOver = 9079, Ladder_Settle_Grade_LevelUpStart_AnimOver = 9080, Ladder_Settle_Grade_LevelUpEnd_AnimOver = 9081, Ladder_Settle_Grade_LevelDownStart_AnimOver = 9082, Ladder_Settle_Grade_LevelDownEnd_AnimOver = 9083, Ladder_Settle_WangZheXing_AnimOver = 9084, Ladder_Settle_XingUp_AnimOver = 9085, Ladder_Settle_XingDown_AnimOver = 9086, Ladder_Copyright_View = 9087, Ladder_OpenSetMostuseHeroGuide = 9088, Ladder_OnGuideConfirmCountDownStartTimerCheck = 9089, Ladder_OnGuideConfirmCountDownUpTimerCheck = 9090, Ladder_OnGuideConfirm = 9091, Ladder_OnGuideAdjust = 9092, MasterMatch_OpenSetMostuseHeroGuide = 9093, Ladder_OnHistoryTagChange = 9094, Ladder_SeasonSettle_ShowSeasonAwardForm = 9095, Ladder_SeasonSettle_AfterShowSeasonAward = 9096, Ladder_OnEntryFormHide = 9097, Ladder_OnEntryFormApear = 9098, Ladder_SeasonSettle_ShowUIAnimationForm = 9099, NewLadderSys_KingSymbol_ClickPlayerEntryByOther = 9100, NewLadderSys_KingSymbol_ClickPlayerEntryBySelf = 9101, NewLadderSys_KingSymbol_EquipKingSymbol = 9102, NewLadderSys_KingSymbol_OpenKingSymbolDetial = 9103, NewLadderSys_KingSymbol_ClickRule = 9104, NewLadderSys_Entry_OpenBottomMenu = 9110, NewLadderSys_Entry_CloseBottomMenu = 9111, NewLadderSys_Honor_GetHonorAward = 9120, NewLadderSys_Honor_ShowHonorDetial = 9121, NewLadderSys_Adv_SwitchAdv = 9140, NewLadderSys_Adv_SwitchNormal = 9141, NewLadderSys_Adv_OpenAdvItemDetialForm = 9142, NewLadderSys_Adv_GetAdvItem = 9143, NewLadderSys_Adv_CloseAdvItemDetialForm = 9144, NewLadderSys_Adv_OpenAdvExploreForm = 9145, NewLadderSys_Adv_AdvExploreElementSelect = 9146, NewLadderSys_Adv_ClickHelp = 9147, NewLadderSys_HideCreditWarnTips = 9148, NewLadderSys_Adv_ClickVoice = 9149, NewLadderSys_ClickOpenBreakingNewsLobby = 9150, NewLadderSys_Settle_GradeUpStateOver = 9151, NewLadderSys_GradeProtectPnl_Down = 9152, NewLadderSys_GradeProtectPnl_Up = 9153, NewLadderSys_Click_Open_KingTitle_SelectForm = 9154, NewLadderSys_KingTitle_Select_Form_Closed = 9155, NewLadderSys_Set_KingTitle_Confirm = 9156, NewLadderSys_NotSet_KingTitle_Confirm = 9157, NewLadderSys_King_XingDown_AnimOver = 9158, NewLadderSys_King_XingUp_AnimOver = 9159, NewLadderSys_King_XingToKingStep_Anim_Over = 9160, NewLadderSys_King_Xing_ShowIn_Anim_Over = 9161, NewLadderSys_King_Step_Star_Anim_Over = 9162, NewLadderSys_King_Step_Txt_TimerUp = 9163, NewLadderSys_KingTitle_Select_Form_Share = 9164, NewLadderSys_Click_Open_KingTitle_ShareForm = 9165, NewLadderSys_Click_Open_KingTitle_ShareMessageBox = 9166, SettlementSys_ChijiAchievementCloseForm = 9300, SettlementSys_ChijiAchievementShare = 9301, SettlementSys_ChijiAchievementQuitShare = 9302, SettlementSys_ChijiAchievementShowTips = 9303, SettlementSys_ChijiScoreCloseForm = 9304, SettlementSys_ChijiAchievementCloseTips = 9305, SettlementSys_ChijiScorePhase2 = 9306, SettlementSys_Allege = 9307, SettlementSys_TaoShaOB_ChgSortType = 9308, SettlementSys_TaoShaOB_ShowCampDetail = 9309, SettlementSys_PVE_ClickShareContinue = 9310, SettlementSys_PVE_ShareOnFormClose = 9311, SettlementSys_PVE_ClickShareResult = 9312, SettlementSys_PVE_ClickCloseReward = 9313, SettlementSys_PVE_ClickShareChengJiu = 9314, SettlementSys_PVE_CloseShareResult = 9315, SettlementSys_PVE_CloseShareChengJiu = 9316, SettlementSys_PVE_OnShareChengjiuOpen = 9317, SettlementSys_PVE_OnShareChengjiuClose = 9318, SettlementSys_PVE_ClickToShowChengJiuShare = 9319, SettlementSys_PVE_TeamPlayerChange = 9320, SettlementSys_PVE_ClickContinueReward = 9321, SettlementSys_PVE_ClickContinueLose = 9322, SettlementSys_PVE_ClickLoseHelp = 9323, SettlementSys_Praying_FormClose = 9324, SettlementSys_Praying_ShareClicked = 9325, SettlementSys_PVE_DropBox_Animation_End = 9400, SettlementSys_PVE_Equip_Get_Animation_End = 9401, SettlementSys_OBReplayAgain = 9993, SettlementSys_AceReplayAgain = 9994, SettlementSys_Base_AITrainingAgain = 9995, SettlementSys_OnClickSurvey = 9996, SettlementSys_OpenShareMVPVideo = 9997, SettlementSys_ClickMatchTips = 9998, SettlementSys_ClickBackConfirm = 9999, SettlementSys_ProfitContinue = 10000, SettlementSys_ShowRankTip = 10001, SettlementSys_HideRankTip = 10002, SettlementSys_TimerEnd = 10003, SettlementSys_ClickBack = 10004, SettlementSys_ClickAgain = 10005, SettlementSys_ClickShare = 10006, SettlementSys_ClickStatistics = 10007, SettlementSys_ShowReport = 10008, SettlementSys_CloseReport = 10009, SettlementSys_DoReport = 10010, SettlementSys_OnCloseProfit = 10011, SettlementSys_OnCloseSettlement = 10012, SettlementSys_SwitchAddFriendReport = 10013, SettlementSys_ClickAddFriend = 10014, SettlementSys_ClickLadderContinue = 10015, SettlementSys_ClickShowAchievements = 10016, SettlementSys_LeftSwitchPVPAchievement = 10017, SettlementSys_RightSwitchPVPAchievement = 10018, SettlementSys_OpenSharePVPAchievement = 10019, SettlementSys_CloseSharePVPDefeat = 10020, SettlementSys_OpenSharePVPDefeat = 10021, SettlementSys_ShareDefeatAddBarrage = 10022, SettlementSys_ShareDefeatSelectBarrage = 10023, SettlementSys_ShareDefeatBarrageEnable = 10024, SettlementSys_CloseShareDefeatBarrage = 10025, SettlementSys_ClickItemDisplay = 10026, SettlementSys_AchiveHelpDown = 10027, SettlementSys_AchiveHelpUp = 10028, SettlementSys_SaveReplay = 10029, SettlementSys_ShowAddFriendBtn = 10030, SettlementSys_ShowReportBtn = 10031, SettlementSys_ShowDianLaBtn = 10032, SettlementSys_ClickDianLa = 10033, SettlementSys_OpenPlayerDetailInfo = 10034, SettlementSys_GetMoreGold = 10035, SettlementSys_Ladder_OnAnimatiorBravePanelShowInEnd = 10036, SettlementSys_Ladder_OnAnimatiorBraveProgressFillEnd = 10037, SettlementSys_Ladder_OnAnimatiorBraveDigitalJitterEnd = 10038, SettlementSys_Ladder_OnAnimatiorBraveDigitalReductionEnd = 10039, SettlementSys_Ladder_OnAnimatiorBraveDigitalRisingStarEnd = 10040, SettlementSys_Ladder_OnAnimatiorBraveProgressFillFull = 10041, SettlementSys_DoVideoReport = 10042, SettlementSys_VideoReportHelper = 10043, SettlementSys_FightScore_Donw = 10044, SettlementSys_FightSCore_Up = 10045, SettlementSys_SatisfiedReport = 10046, SettlementSys_SatisfiedReportChanged = 10047, SettlementSys_OpenSatisfiedReport = 10048, SettlementSys_ReportToggleEnable = 10049, SettlementSys_ReportToggleSelectChanged = 10050, SettlementSys_voice_pressSpeaker = 10051, SettlementSys_voice_pressMic = 10052, SettlementSys_HappyHouse_ClickContinue = 10053, SettlementSys_HappyHouse_Opened = 10054, SettlementSys_HappyHouse_Closed = 10055, SettlementSys_Base_Continue = 10056, SettlementSys_ProfitFadeInEnd = 10057, SettlementSys_HappyHouseFadeInEnd = 10058, SettlementSys_SettlementFadeInEnd = 10059, SettlementSys_ProfitFadeOutEnd = 10060, SettlementSys_HappyHouseFadeOutEnd = 10061, SettlementSys_SettlementFadeOutEnd = 10062, SettlementSys_DataShowTabChange = 10063, SettlementSys_OnShowSettlement = 10064, SettlementSys_Settle_ClickSwitchData = 10067, SettlementSys_Ladder_TimeOut = 10068, SettlementSys_Settle_DianZanInfoDown = 10069, SettlementSys_Settle_DianZanInfoUp = 10070, SettlementSys_Settle_TipsFadeOut = 10071, SettlementSys_Ladder_OnLevelProtectAnimEnd = 10072, SettlementSys_OnCloseDestoryGame = 10073, SettlementSys_OnCloseBackBase = 10074, SettlementSys_OnShowSubPage = 10075, SettlementSys_OnCloseSubPage = 10076, SettlementSys_CustomCompetitionResult_Continue = 10077, SettlementSys_CustomCompetitionResult_Show = 10078, SettlementSys_CustomCompetitionResult_Close = 10079, SettlementSys_Report_CheckPublicity = 10080, SettlementSys_CustomCompetition_BackTo_Lobby = 10081, SettlementSys_CustomCompetition_Animator_End = 10082, SettlementSys_ClickVictoryTips = 10083, SettlementSys_FiveArmySettleOnShow = 10084, SettlementSys_FiveArmySettleOnClose = 10085, SettlementSys_OnShowNextHero = 10086, SettlementSys_OnProfitShowNextHero = 10087, SettlementSys_OnTaoShaSelectPlayerChange = 10088, SettlementSys_OfficialComStatistic_Continue = 10089, SettlementSys_OfficialComStatistic_DataChg = 10090, SettlementSys_OfficialCompetition_BackTo_Lobby = 10091, SettlementSys_OfficialComStatistic_ShareChg = 10092, SettlementSys_OfficialComStatistic_Back = 10093, SettlementSys_CloseWonderfulMomentTips = 10094, SettlementSys_OpenWonderfulMoment = 10095, SettlementSys_TaoShaOB_CampListElmEnable = 10096, SettlementSys_TaoShaOB_BackToLobby = 10097, SettlementSys_LadderSettle_PlayResultAnimEnd = 10098, SettlementSys_Project8ClickLader = 10099, BattleEquip_Form_Open = 10100, BattleEquip_Form_Close = 10101, BattleEquip_TypeList_Select = 10102, BattleEquip_Item_Select = 10103, BattleEquip_BagItem_Select = 10104, BattleEquip_BuyBtn_Click = 10105, BattleEquip_SaleBtn_Click = 10106, BattleEquip_RecommendEquip_Buy = 10107, BattleEquip_OpenEquipTree = 10108, BattleEquip_CloseEquipTree = 10109, BattleEquip_SelectItemInEquipTree = 10110, BattleEquip_BackEquipListSelectedChanged = 10111, BattleEquip_BackEquipListScrollChanged = 10112, BattleEquip_BackEquipListMoveLeft = 10113, BattleEquip_BackEquipListMoveRight = 10114, BattleEquip_ShowOrHideInBattle = 10115, BattleEquip_ChangeSelfRcmEuipPlan = 10116, BattleEquip_OpenSelfRcmEuipPlanForm = 10117, BattleEquip_SetPreBuyEquip = 10118, BattleEquip_CanclePreBuyEquip = 10119, BattleEquip_SwitchEquipPanelShowMode = 10120, BattleEquip_ConsumeEquip = 10121, BattleEquip_ShowActiveSkill = 10122, BattleEquip_DropEquip = 10123, BattleEquip_CloseStore = 10124, BattleEquip_ClosePickUp = 10125, BattleEquip_PickUpEquip = 10126, BattleEquip_CloseBag = 10127, BattleEquip_ShowStore = 10128, BattleEquip_ShowBag = 10129, BattleEquip_ShowPickUp = 10130, BattleEquip_PickUpFilterChange = 10131, BattleEquip_StartDragShopItem = 10132, BattleEquip_EndDragShopItem = 10133, BattleEquip_StartDragBagItem = 10134, BattleEquip_EndDragBagItem = 10135, BattleEquip_StartDragPickUpItem = 10136, BattleEquip_EndDragPickUpItem = 10137, BattleEquip_DropShopItem = 10138, BattleEquip_DropBagItem = 10139, BattleEquip_DropPickUpItem = 10140, BattleEquip_DropBagGridItem = 10141, BattleEquip_PointEnterBagItem = 10142, BattleEquip_PointExitBagItem = 10143, BattleEquip_DropBackGround = 10144, BattleEquip_ConfirmBuyAndDrop = 10145, BattleEquip_ExpandChooseSkill7Click = 10146, BattleEquip_ChooseSkill7Select = 10147, BattleEquip_ExpandChooseSkill10Click = 10148, BattleEquip_ChooseSkill10Select = 10149, BattleEquip_OneClickBuy = 10150, BattleEquipPlan_SelectMenuList = 10151, BattleEquipPlan_ProfessionalEquipUseBtnClick = 10152, BattleEquipPlan_GodEquipUseBtnClick = 10153, BattleEquipPlan_HotEquipUseBtnClick = 10154, BattleEquip_TempUseEquipSelect = 10155, BattleEquip_FoldAllPaintChooseSkill = 10156, BattleEquip_ExpandPaintChooseSkillClick = 10157, BattleEquip_ChoosePaintSkillSelect = 10158, BattleEquip_Form_OnOpen = 10159, BattleEquip_Form_OnAppear = 10160, BattleEquip_Form_OnHide = 10161, BattleEquip_FoldAllChooseSkill = 10170, BattleEquip_DropOneEquip = 10171, BattleEquip_PickupEffectPlayEnd = 10172, BattleEquip_PickupPanelAnimEnd = 10173, BattleEquip_Pickup_ItemElement_Enable = 10174, BattleEquip_Pickup_QuicklySale_Click = 10176, BattleEquip_AddToConsumeBag = 10177, BattleEquip_SwitchInBag = 10178, BattleEquip_BaptizeBtn_Click = 10180, BattleEquip_PVETabList_IndexChange = 10181, BattleEquip_QuickEquipDesDisable = 10182, BattleEquip_GodArmyEnable = 10183, BattleEquip_SwitchSettingPanel = 10184, BattleEquip_SwitchEquipDetail = 10185, BattleEquip_SwitchGamingEquipRecm = 10186, BattleEquip_SwitchBuyEquipBroadcast = 10187, BattleEquip_SwitchSimpleComposePath = 10188, BattleEquip_SwitchPriceHint = 10189, BattleEquip_OpenPreviewEquipPanel = 10190, Battle_Guide_PanelMisson_1_Close = 10200, Battle_Guide_PanelMisson_2_Close = 10201, Battle_Guide_PanelMisson_3_Close = 10202, Battle_Guide_CloseTrainLevel_Award = 10203, Union_Battle_ClickEntry = 10300, Union_Battle_BattleEntryGroup_Click = 10301, Union_Battle_SubBattleEntryGroup_Click = 10302, Union_Battle_Click_SingleStartMatch = 10303, Union_Battle_Click_Rank = 10304, Union_Battle_ConfirmBuyItem = 10305, Union_Battle_Click_Rule = 10306, Union_Battle_RewardMatch_TimeUp = 10307, Union_Battle_BuyTiketClick = 10308, Union_Battle_Click_MatchType_Menu = 10309, Union_Battle_Click_DateType_Menu = 10310, Union_Battle_Rank_ClickDetail = 10311, Union_Battle_Rank_DateList_Element_Enable = 10312, Union_Battle_Rank_TeamList_Element_Enable = 10313, Union_battle_Click_StartOneMatchRound = 10314, Union_Battle_Click_RewardIntro = 10315, Union_Battle_Click_GetReward = 10316, Union_Battle_GotReward = 10317, Union_Battle_RewardIntro_ItemEnable = 10318, Union_Battle_Click_ExChgRewwad = 10319, Union_Battle_CliCk_LoseTips = 10320, Union_Battle_Click_GetRewardTips = 10321, Union_Battle_Click_BattleVideo = 10322, Union_Battle_Click_BattleNews = 10323, Union_Battle_EntrySecond_Visible = 10324, Union_Battle_EntrySecond_Hide = 10325, Union_Battle_Click_GiveUp = 10326, Union_Battle_Click_GiveUp_Confirm = 10327, Watch_Competition_On_Btn_Anim_End = 10385, CustomEquip_OpenForm = 10400, CustomEquip_FormClose = 10401, CustomEquip_UsageListSelect = 10402, CustomEquip_ItemClick = 10403, CustomEquip_ViewEquipTree = 10404, CustomEquip_ChangeHero = 10405, CustomEquip_ModifyEquip = 10406, CustomEquip_ConfirmModify = 10407, CustomEquip_CancleModify = 10408, CustomEquip_AddEquip = 10409, CustomEquip_DeleteEquip = 10410, CustomEquip_RevertDefault = 10411, CustomEquip_ViewGodEquip = 10412, CustomEquip_Expand = 10413, CustomEquip_PackUp = 10414, CustomEquip_HeroTypeListSelect = 10415, CustomEquip_HeroListItemEnable = 10416, CustomEquip_HeroListItemClick = 10417, CustomEquip_OwnFlagChange = 10418, CustomEquip_HotEquipItemEnable = 10419, CustomEquip_HotEquipUseBtnClick = 10420, CustomEquip_EditItemClick = 10421, CustomEquip_BackEquipTurnLeft = 10422, CustomEquip_BackEquipTurnRight = 10423, CustomEquip_BackEquipListElementEnable = 10424, CustomEquip_HotEquipReqTimeOut = 10425, CustomEquip_CircleTimerUp = 10426, CustomEquip_ShowConfirmRevertDefaultTip = 10427, CustomEquip_OnBackEquipListSelectChanged = 10428, CustomEquip_OnEquipTreeItemSelected = 10429, CustomEquip_OnEquipTreeClosed = 10430, CustomEquip_OnGodEquipTabChanged = 10431, CustomEquip_GodEquipSysUseBtnClick = 10432, CustomEquip_IWantJudgeBtnClick = 10433, CustomEquip_JudgeMarkSubmitBtnClick = 10434, CustomEquip_OpenJudgeRule = 10435, CustomEquip_OpenSelfEquipPlanForm = 10436, CustomEquip_ChangeCurEquipPlanName = 10437, CustomEquip_ChangeEquipPlanListItemName = 10438, CustomEquip_UseEquipPlanListItem = 10439, CustomEquip_ConfirmChgEquipPlanName = 10440, CustomEquip_GodEquipItemEnable = 10441, CustomEquip_GodEquipUseBtnClick = 10442, CustomEquip_GodEquipReqTimeOut = 10443, CustomEquip_ProfessionalEquipUseBtnClick = 10444, CustomEquip_ProfessionalEquipItemEnable = 10445, CustomEquip_HotEquipItemZanBtnClick = 10446, CustomEquip_HotEquipItemCaiBtnClick = 10447, CustomEquip_SelfEquipClickHotEquip = 10448, CustomEquip_SelfEquipHotItemEnable = 10449, CustomEquip_HotEquipUseBtnClickFailed = 10450, CustomEquip_OnClickHelp = 10451, CustomEquip_GodEquipItemZanBtnClick = 10452, CustomEquip_GodEquipItemCaiBtnClick = 10453, CustomEquip_UseEquipPlanListItem_Offline = 10454, CustomEquip_FoldUp = 10455, CustomEquip_ExchagneEquip = 10456, CustomEquip_OpenRecommendForm = 10457, CustomEquip_Recommend_Fold_PressDown = 10458, CustomEquip_EquipPlanPreview_PressDown = 10459, CustomEquip_Recommend_SuitClick = 10460, CustomEquip_Suit_ElementEnable = 10461, CustomEquip_Suit_UseEquip = 10462, CustomEquip_Suit_UseSymbol = 10463, CustomEquip_Suit_FoldBtn_PressDown = 10464, CustomEquip_Suit_UseEquip_Confirm = 10465, Plan_Form_Close = 10470, Plan_Form_Open = 10471, CustomEquip_Bg_Click = 10472, Plan_Equip_FoldBtn_PressDown = 10473, CustomEquip_FoldBtn_PressDown = 10474, CustomEquip_FoldBtn_PressUp = 10475, CustomEquip_EquipPlanPreview_PressUp = 10476, CustomEquip_Recommend_Fold_PressUp = 10477, Plan_Equip_FoldBtn_PressUp = 10478, CustomEquip_Suit_FoldBtn_PressUp = 10479, Plan_Suit_FoldBtn_PressDown = 10480, Plan_Suit_FoldBtn_PressUp = 10481, CustomSymbol_Recommend_SuitClick = 10482, CustomEquip_DeleteAllEquipInfo = 10483, Symbol_Part_ViewProp_Down = 10484, Symbol_Part_ViewProp_Up = 10485, CustomEquip_Open_CompleteEquip = 10486, CustomEquip_Open_CompleteEquip_Confirm = 10487, Settings_ExitCDReady = 10488, CustomEquip_Recommend_OnDropBtnClick = 10489, CustomEquip_Recommend_OnOneKeyUseBtnClick = 10490, CustomEquip_Suit_SymbolProp_PressUp = 10491, CustomEquip_Suit_SymbolProp_PressDown = 10492, Plan_Suit_SymbolProp_PressUp = 10493, Plan_Suit_SymbolProp_PressDown = 10494, ShenBing_Form_Close = 10495, ShenBing_Form_Open = 10496, ShenBing_Equip_FoldBtn_PressDown = 10497, ShenBing_Equip_FoldBtn_PressUp = 10498, CustomEquip_Recommend_Share = 10499, SevenCheck_OpenForm = 10500, SevenCheck_CloseForm = 10501, SevenCheck_Request = 10502, SevenCheck_LoginOpen = 10503, Day14Check_OnItemEnable = 10504, Day14Check_OnRequestCheck = 10505, Day14Check_CloseForm = 10506, Day14Check_LeftUIItemEnable = 10507, Day14Check_OpenForm = 10508, SettlementSys_MasterMatchOnClose = 10600, SettlementSys_MasterMatchShowBattleValue = 10601, SettlementSys_MasterMatchHideBattleValue = 10602, SettlementSys_OnViewFail = 10603, SettlementSys_LoathGroupAgainPrompt = 10604, SettlementSys_LoathGroupAgain = 10605, SettlementSys_OpenLoathGroupBtn = 10606, SettlementSys_AbilityShow_Camp_Switch = 10607, SettlementSys_AbilityShow_Ability_Switch = 10608, SettlementSys_AbilityShow_EvaluationOpen = 10609, SettlementSys_AbilityShow_EvaluationClose = 10610, SettlementSys_AbilityShow_FromHistory = 10611, SettlementSys_Profit5V5_BasePanel_Click = 10612, SettlementSys_Profit5V5_Icon_MouseOn = 10613, SettlementSys_Profit5V5_Icon_MouseOut = 10614, SettlementSys_Profit5V5_ProfiencyPanel_Click = 10615, SettlementSys_AbilityShow_Open = 10617, SettlementSys_ViolationInfo_Open = 10618, SettlementSys_AbilityShow_Rule_Open = 10619, SettlementSys_AbilityShow_Zhanli_MouseOn = 10620, SettlementSys_AbilityShow_Zhanli_MouseUp = 10621, SettlementSys_AbilityShow_OnBackClick = 10622, SettlementSys_MasterMatchProtectScoreAnim_End = 10623, SettlementSys_MasterMatchProtectScoreEnterAnim_end = 10624, SettlementSys_RemoteMoment_Original = 10625, SettlementSys_RemoteMoment_Ready = 10626, SettlementSys_MasterMatchScoreEnterAnim_end = 10627, SettlementSys_MasterMatch_ClickProtectScoreDetail = 10628, SettlementSys_LadderSettleClose = 10629, SettlementSys_OpenWatchThumbup = 10630, SettlementSys_OpenWatchThumbdown = 10631, SettlementSys_WatchThumbupClick = 10632, SettlementSys_WatchThumbdownClick = 10633, SettlementSys_LightPlayerTabClick = 10634, SettlementSys_LightPlayerBtnClick = 10635, SettlementSys_PartyGameRank_OnClose = 10636, SettlementSys_Profit5V5_AllEsportsAbility_Click = 10637, SettlementSys_Profit5V5_AllEsportsHighLight_Click = 10638, SettlementSys_SaveWonderfulMoment = 10639, SettlementSys_RealCloseWonderfulMomentTips = 10640, SettlementSys_Profit5V5_New_DetailMenuChange = 10641, SettlementSys_Profit5V5_New_HideShare = 10642, SettlementSys_Profit5V5_New_ShowAbilityShare = 10643, SettlementSys_Profit5V5_New_ShowAchievementShare = 10644, SettlementSys_Profit5V5_New_ShowHighLightShare = 10645, SettlementSys_Profit5V5_New_Share = 10646, SettlementSys_AbilityShow_OpenAbilityDetailTips = 10647, SettlementSys_AbilityShow_CloseAbilityDetailTips = 10648, SettlementSys_Profit5V5_New_ShowHeroLabelShare = 10649, SettlementSys_Profit5V5_New_Refresh = 10650, SettlementSys_ClickCampHeroTips = 10651, SettlementSys_OnClickCampHeroTipsClose = 10652, HawkEyes_ApplyEnter = 10800, HawkEyes_CheckRanking = 10801, HawkEyes_MockJudge = 10802, HawkEyes_BeginJudge = 10803, HawkEyes_MorePrivelege = 10804, HawkEyes_RulesCheck = 10805, HawkEyes_BeginJudgePure = 10806, HawkEyes_AskForHelp = 10807, HawkEyes_PrivilegeListOpenTips0 = 10808, HawkEyes_JudgeHistory = 10809, HawkEyes_AskHelpHistory = 10810, HawkEyes_PrivilegeListOpenTips1 = 10811, HawkEyes_PrivilegeListOpenTips2 = 10812, HawkEyes_SubTabChange = 10813, HawkEyes_HelpPageBtnClick = 10814, HawkEyes_JudgeWhenBlackedBtnClick = 10815, HawkEyes_JudgeChangeName = 10816, InBattleMsg_OpenForm = 11000, InBattleMsg_CloseForm = 11001, InBattleMsg_ClickBGMap = 11002, InBattleMsg_TabChange = 11003, InBattleMsg_ListElement_Enable = 11004, InBattleMsg_ListElement_Click = 11005, InBattle_InputChat_SwitchCamp = 11006, InBattle_InputChat_InputClick = 11007, InBatShortcut_OpenForm = 11008, InBatShortcut_CloseForm = 11009, InBatShortcut_LeftItem_Enable = 11010, InBatShortcut_Delete = 11011, InBatShortcut_Record = 11012, InBatShortcut_UseDefault = 11013, InBatShortcut_Change = 11014, InBatShortcut_OK = 11015, InBatShortcut_Cancle = 11016, InBatShortcut_RightTab_Change = 11017, InBatShortcut_RightItem_Enable = 11018, InBatShortcut_RightItem_Click = 11019, InBatShortcut_UseDefault_Ok = 11020, InBattleMsg_BeginSpeak = 11021, InBattleMsg_SpeakCDTimeChg = 11022, InBattleMsg_SpeakCDTimeEnd = 11023, InBattleMsg_ConfirmSendVoiceMsg = 11024, InBattleMsg_CancelSendVoiceMsg = 11025, InBattleMsg_EditVoiceMsg = 11026, InBattleMsg_SpeakDownloadTimeEnd = 11027, InBattle_InputChat_InputClick_Disable = 11028, InBattleMsg_SpeakTipsTimeEnd = 11029, InBattle_OnActionListItemEnable = 11030, InBattle_OnActionListItemSelected = 11031, InBattleMsgManager_OnMenuSelect = 11032, InBattleMsg_OnContentConfigChange = 11033, InBattleMsg_OnActivityMenuItemEnable = 11034, InBattleMsg_OnActivityMenuItemSelect = 11035, InBattleMsg_OnActivityItemClickPlay = 11036, InBattleMsg_OnHeroItemEnable = 11037, InBattleMsg_OnHeroItemSelect = 11038, InBattleMsg_OnHeroBattleMsgShiTingItemSelect = 11039, InBattleMsg_OnHeroBattleMsgShiTingItemClickPlay = 11040, InBattleMsg_OnHeroBattleMsgShiTingItemEnable = 11041, InBattleMsg_OnClickToJumpToGet = 11042, InBattleMsg_OnClickToResetThisHero = 11043, InBattleMsg_OnClickToJiHuoThisHero = 11044, InBattleMsg_OnActivityTimerEnd = 11045, InBattleMsg_OnHeroBattleMsgTimerEnd = 11046, InBattleMsg_OnHeroBattleMsgDataChange = 11047, InBattleMsg_OnEventBattleMsgDataChange = 11048, InBattleMsg_OnEventBattleMsgJumpToGet = 11049, InBattleMsg_OnJumpToRightTab = 11050, InBattleMsg_Form_OnAppear = 11051, InBattleMsg_OnBtnRuleClicked = 11052, InBattleMsg_ClearInputField = 11054, InBattleMsg_SearchBattleVoice = 11055, Task_ClickLevelNode = 12000, Task_ClickUnlockBtn = 12001, Task_ClickGetLevelReward = 12002, Task_ClickCheckLevelTask = 12003, Task_CloseCheckLevelTask = 12004, Task_LevelElemntEnable = 12005, Task_OnClick_ShowDetailUnlock = 12006, Task_Onclick_CloseDetailUnlock = 12007, Task_GetRewardViewMenuChange = 12008, Task_DayHuoyueGetAward_Complete = 12009, Task_WeekHuoyueGetAward_Complete = 12010, OB_Form_Open = 12100, OB_Form_Close = 12101, OB_Video_Tab_Click = 12102, OB_Video_Sub_Tab_Click = 12103, OB_Video_Enter = 12104, OB_Element_Enable = 12105, OB_Video_Editor_Click = 12106, OB_Video_Delete = 12107, OB_Video_Delete_Confirm = 12108, OB_Video_Enter_Confirm = 12109, OB_Video_Btn_VideoMgr_Click = 12110, OB_Video_Expired_Delete = 12111, OB_Video_Expired_DeleteConfirmed = 12112, OB_Video_Expired_DeleteCanceled = 12113, OB_Video_KingCup_ListElement_Enable = 12114, OB_Video_KingCup_ListElement_Click = 12115, OB_Video_KingCup_EnterConfirm = 12116, OB_AceReplay_SortingTypeChg = 12117, OB_AceReplay_Play = 12118, OB_HeroSetting_Default = 12119, OB_HeroSetting_Single = 12120, OB_HeroSetting_ChangeHero = 12121, OB_HeroSetting_SingleHeroChosen = 12122, OB_Video_Expert_ListElement_Enable = 12123, OB_Video_Expert_PlayPanel_Click = 12124, OB_Video_Expert_PlayPanel_EnterConfirm = 12125, OB_Video_Expert_SortingTypeChg = 12126, OB_Video_OpenPlayerDetailInfo = 12127, OB_AceReplay_PlayConfirm = 12128, OB_Video_FriendReplay_SortingTypeChg = 12129, OB_FriendReplay_PlayConfirm = 12130, OB_AceReplay_SeeResult = 12131, OB_Expert_EnterOB_SkipConfirm = 12132, OB_Expert_EnterOB_DontSkipConfirm = 12133, OB_Friend_EnterOB_SkipConfirm = 12134, OB_Friend_EnterOB_DontSkipConfirm = 12135, OB_Friend_EnterOB_SkipConfirm_ForTeam = 12136, OB_Friend_EnterOB_DontSkipConfirm_ForTeam = 12137, OB_Friend_EnterOB_SkipConfirm_ForReserve = 12138, OB_Friend_EnterOB_DontSkipConfirm_ForReserve = 12139, OB_Friend_ClickOB_ForReserve = 12140, Watch_CameraDraging = 13000, Watch_PickCampList_1 = 13001, Watch_PickCampList_2 = 13002, Watch_ClickPlay = 13003, Watch_ClickSpeedUp = 13004, Watch_ClickSpeedDown = 13005, Watch_Quit = 13006, Watch_ClickCampFold_1 = 13007, Watch_ClickCampFold_2 = 13008, Watch_ClickBottomFold = 13009, Watch_ClickReplayTalk = 13010, Watch_ClickCampFold_1_End = 13011, Watch_ClickCampFold_2_End = 13012, Watch_QuitConfirm = 13013, Watch_QuitCancel = 13014, Watch_FormClosed = 13015, Watch_HideView = 13016, Watch_JudgePause = 13017, Watch_SelectHorizonBoth = 13018, Watch_SelectHorizonCamp_1 = 13019, Watch_SelectHorizonCamp_2 = 13020, Watch_ClickBottomFold_End = 13021, Watch_ClickBottomEquipFold = 13022, Watch_ClickBottomEquipFold_Over = 13023, Watch_VideoReport_StartRecord = 13024, Watch_VideoReport_EndRecord = 13025, Watch_VideoReport_CloseMessage = 13026, Watch_VideoReport_ConfirmStart = 13027, Watch_VideoReport_CancelStart = 13028, Watch_CameraDragEnd = 13029, Watch_EquipDispTimeout1 = 13030, Watch_EquipDispTimeout2 = 13031, Watch_MenuAnimBtn = 13032, Watch_StartRecrodVR = 13033, Watch_StopRecrodVR = 13034, Watch_Competition_On_Pointer_Enter = 13035, Watch_Competition_On_Pointer_Exit = 13036, Watch_Competition_On_Begin_Drag = 13037, Watch_Competition_On_End_Drag = 13038, Watch_Competition_On_Hold_Start = 13039, Watch_Competition_On_EquipDis_Anim_End = 13040, Watch_VrSightBtnBigDragon = 13041, Watch_VrSightBtnRiverUp = 13042, Watch_VrSightBtnRiverDown = 13043, Watch_VrSightBtnCrystalBlue = 13044, Watch_VrSightBtnCircle = 13045, Watch_VrSightBtnAir = 13046, Watch_VrForward = 13047, Watch_VrBack = 13048, Watch_VrLeft = 13049, Watch_VrRight = 13050, Watch_VrUp = 13051, Watch_VrDown = 13052, Watch_VrZoomin = 13053, Watch_VrZoomout = 13054, Watch_VrReset = 13055, Watch_OBRollback = 13056, Watch_OBRollback_Confirm1 = 13057, Watch_OBRollback_Cancel1 = 13058, Watch_OBRollback_Confirm2 = 13059, Watch_OBRollback_Cancel2 = 13060, Watch_OBRollback_Giveup = 13061, Watch_TaoSha_TeamList_Enable = 13062, Watch_TaoSha_TeamList_Select = 13063, Watch_TaoSha_HeroList_Enable = 13064, Watch_TaoSha_HeroList_Select = 13065, Watch_TaoSha_TeamList_Hide = 13066, Watch_TaoSha_TeamList_Show = 13067, Watch_TaoSha_HeroInfoHud_Hide = 13068, Watch_TaoSha_HeroInfoHud_Show = 13069, Watch_TaoSha_FormClose = 13070, Watch_TaoSha_CloseVoteForm = 13071, Watch_TaoSha_ChgZoom = 13072, Watch_Live_FoldSideHero = 13073, Watch_Live_FoldSideHero_End = 13074, Watch_Live_Expand_HorizonMenu = 13075, Watch_Live_Expand_FormCtrlMenu = 13076, Watch_Live_Expand_SettingMenu = 13077, Watch_Live_Shrink_HorizonMenu = 13078, Watch_Live_Shrink_FormCtrlMenu = 13079, Watch_Competition_Drag_Drop_Obj_Start = 13080, Watch_Competition_Click_Horizon_Fold = 13081, Watch_Competition_SelectHorizonBoth = 13082, Watch_Competition_SelectHorizonCamp1 = 13083, Watch_Competition_SelectHorizonCamp2 = 13084, Watch_Live_Shrink_SettingMenu = 13086, Watch_Live_HideShow_MiniKillNotify = 13087, Watch_Live_HideShow_AllPart = 13088, Watch_Live_HideShow_Bottom_PlayersInfo = 13089, Watch_Live_HideShow_Bottom_ChartView = 13090, Watch_Live_HideShow_Bottom_FightData = 13091, Watch_Live_BottomAnimFinish = 13092, Watch_Live_Switch_Bottom_FightDataType = 13093, Watch_Live_SwitchZoomBySlider = 13094, Watch_Live_Expand_ZoomCtrlMenu = 13095, Watch_Live_Shrink_ZoomCtrlMenu = 13096, Watch_Live_SwitchZoom_Farthest = 13097, Watch_Live_SwitchZoom_Nearest = 13098, Watch_Live_Click_HeroInfoHud = 13099, Watch_Pick_Camp_Hero = 13100, Watch_Speed_OnDropListSortTypeChg = 13101, Watch_Speed_ResetSpeedUI = 13102, Watch_CameraStartDraging = 13103, Watch_Live_HideShow_Bottom_TimeProgress = 13104, Watch_Live_Spotlight_Switch = 13105, Competition_Pause_Confirm = 13106, ReplayKit_Start_Recording = 14000, ReplayKit_Pause_Recording = 14001, ReplayKit_Preview_Record = 14002, ReplayKit_Discard_Record = 14003, Record_Save_Moment_Video = 14010, Record_Save_Moment_Video_Cancel = 14011, Record_Check_WhiteList_TimeUp = 14012, Record_Show_SaveMomentVideoBtn = 14013, MiniKillNotify_AppearAnimEnd = 14014, MiniKillNotify_DisappearAnimEnd = 14015, MiniKillNotify_TimerEnd = 14016, MiniKillNotify_KillInfoLstElmEnable = 14017, NetworkAccelerator_TurnOn = 14100, NetworkAccelerator_Ignore = 14101, NetworkAccelerator_WIFI_TurnOn = 14102, NetworkAccelerator_Free_WEBSetting = 14103, NetworkAccelerator_WIFI_4G_Confirm = 14104, NetworkAccelerator_Ignore_Buy = 14105, NetworkAccelerator_Monthly_Report = 14106, SecurePwd_ApplyForceCloseConfirm = 15000, SecurePwd_ApplyCancelForceCloseConfirm = 15001, SecurePwd_OpenSetPwdForm = 15002, SecurePwd_OpenModifyPwdForm = 15003, SecurePwd_OpenClosePwdForm = 15004, SecurePwd_OnSetPwd = 15005, SecurePwd_OnOpCancel = 15006, SecurePwd_OnModifyPwd = 15007, SecurePwd_OnClosePwd = 15008, SecurePwd_OpenApplyClosePwdForm = 15009, SecurePwd_OnApplyClose = 15010, SecurePwd_OnCancelApplyClose = 15011, SecurePwd_OnValidateConfirm = 15012, SecurePwd_OnValidateCancel = 15013, Battle_EnemyHeroAtkBtn_Down = 15100, Battle_EnemyHeroAtkBtn_Up = 15101, Battle_DeadInfo_Click = 15102, Battle_DeadInfoForm_Close_Click = 15103, Battle_OnClickOpenWiki = 15104, Battle_OnClickWikiLeft = 15105, Battle_OnClickWikiRight = 15106, Battle_OnWikiFormClosed = 15107, Battle_OnWikiSelectChange = 15108, Battle_BattleStateView_AccuseVocMsg = 15109, Battle_DragonIcon_ShowCD = 15110, Battle_DragonIcon_HideCD = 15111, Battle_DetailedMute_Voice = 15112, Battle_DetailedMute_Text = 15113, Battle_DetailedMute_ShotcutMsg = 15114, Battle_DetailedMute_CloseDetailed = 15115, Battle_PartyRankLeft_Open = 15116, Battle_PartyRankLeft_Close = 15117, Battle_PartyRankLeft_Show_Detail = 15118, Battle_Party_Jump_To_Total_Rank = 15119, Battle_EnemyHeroAtkBtn_DragEnd = 15120, Battle_AccuseVocMsg_Team = 15121, Battle_AccuseVocMsg_SelectRole = 15122, Battle_HelpDying_IconClick = 15150, Battle_HelpDying_AskHelpClick = 15151, Battle_HelpDying_PackageClick = 15152, Battle_HelpDying_UnPackClick = 15153, Achievement_Open_Overview_Form = 15200, Achievement_Open_List_Form = 15201, Achievement_Get_Award = 15202, Achievement_List_Element_Enabled = 15203, Achievement_ShowShareBtn = 15204, Achievement_OpenAwardForm = 15205, Achievement_Filter_Menu_Change = 15206, Achievement_Trophy_Enable = 15207, Achievement_Trophy_Click = 15208, Achievement_Item_Enable = 15209, Achievement_Browse_All_Rewards = 15210, Achievement_Trophy_Reward_Info_Enable = 15211, Achievement_Get_Trophy_Reward = 15212, Achievement_Close_Share_Form = 15213, Achievement_Change_Selected_Trophy = 15214, Achievement_Selector_Trophy_Enable = 15215, Achievement_Selector_Trophy_Select = 15216, Achievement_Selector_Trophy_Select_Confirm = 15217, Achievement_Show_Rule = 15218, Achievement_Overview_Form_Close = 15219, Achievement_OnOnlyShowNotDoneChange = 15220, Achievement_OnClickSetDisplayAchieve = 15221, Achievement_Selector_Trophy_Menu_Change = 15222, Achievement_Selector_Troyphy_Confirm = 15223, GiftBag_OnShowDetail = 15300, Mentor_IWantMentor = 15500, Mentor_MentorQuest = 15501, Mentor_OpenRequestList = 15502, Mentor_AddMentor = 15503, Mentor_FamousRights = 15504, Mentor_RefuseRequest = 15505, Mentor_WatchHisMentor = 15506, Mentor_DynamicInfo = 15507, Mentor_FriendFormTabChange = 15508, Mentor_RequestListOnEnable = 15509, Mentor_AcceptRequest = 15510, Mentor_CloseRequestList = 15511, Mentor_RemoveMentor = 15512, Mentor_AddApprentice = 15513, Mentor_OpenPrivilegePage = 15514, Mentor_PrivilegePageLeft = 15515, Mentor_PrivilegePageRight = 15516, Mentor_PrivilegeListEnable = 15517, Mentor_OpenMentorPage = 15518, Mentor_ApplyRequest = 15519, Mentor_OpenMentorIntro = 15520, Mentor_GetMoreMentor = 15521, Mentor_IWantApprentice = 15522, Mentor_CheckTudiTask = 15523, TextCombo_Choose = 15540, TextCombo_OnEnable = 15541, TextCombo_TriggerClick = 15542, TextCombo_CloseCombo = 15543, Social_EditCard = 15550, Social_SaveEdit = 15551, Social_CancelEdit = 15552, Social_EditTag = 15553, Social_TagCheckChange = 15554, Social_TagConfirm = 15555, Social_HideCard = 15556, Social_TagEditEnd = 15557, Social_TagSelectChanged = 15558, Social_AddFriend = 15559, Social_InviteGuild = 15560, Social_HideCardConfirm = 15561, Social_HideCardCancel = 15562, Social_CancelEditSave = 15563, Social_CancelEditNotsave = 15564, Social_JumpFromFriendPage = 15565, Social_SettingExpand = 15566, Social_ShowWishList = 15567, Social_ApplyGuild = 15568, Social_CopyName = 15569, Social_Confirm_SaveEdit = 15570, Social_Second_Confirm_SaveEdit = 15571, Social_Click_Locked_Tag = 15572, Loading_LoadingFromOpen = 15600, Loading_LoadingFromClose = 15601, Loading_ShowOrHideGuildHonour = 15602, Loading_MasterStepTimeUp = 15603, Loading_OnClickMasterStep = 15604, Loading_OnSkyScreenItemClick = 15605, Loading_OnLikeItemClick = 15606, Loading_OnSkyScreenCDCountDownTimeUp = 15607, Loading_OnSkyScreenCDCountDownChanged = 15608, Loading_OnLikeItemCountDownTimeUp = 15609, Loading_OnLikeItemCountDownChanged = 15610, Loading_ShowOrHideAppearance = 15611, Loading_ThumbUpAppearance = 15612, AutoTest_Test5v5 = 15650, AutoTest_Test1v1 = 15651, AutoTest_TestLua = 15652, Partner_OpenForm = 15700, Partner_OpenXunYou_Buy = 15701, Partner_Refresh_Entry = 15702, Partner_OpenXunYou_Buy_Confirm = 15703, Partner_OpenTongcai_Buy_Confirm = 15704, Partner_OpenXunYou_Buy_From_Tips = 15705, Partner_OpenXunYou_Trial_From_Tips = 15706, Partner_OpenXunYou_Trial_Again_From_Tips = 15707, Partner_OpenXunYou_Monthly_Report = 15708, Partner_OpenXunYou_Contract_Valid_Ignore = 15709, BattleStatCompe_OpenForm = 15800, BattleStatCompe_TabMenuChanged = 15801, BattleStatCompe_TimerGo = 15802, BattleStatCompe_TriggerClose = 15803, BattleStatCompe_Close = 15804, BattleStatCompe_LeftHeroSelect = 15805, BattleStatCompe_RightHeroSelect = 15806, BattleStatCompe_SelectAllLeft = 15807, BattleStatCompe_SelectAllRight = 15808, BattleStatCompe_TeamFightConfirm = 15809, BattleStatCompe_FightDataTab_Sel = 15810, BattleStatCompe_IRTabe_Sel = 15811, BattleStatCompe_ShrinkFightDataToBottom = 15812, General_OpenChangeHeroForm = 15900, General_CloseChangeHeroForm = 15901, General_HeroListItemClick = 15902, General_HeroTypeChange = 15903, General_HeroOwnFlagChange = 15904, General_HeroListItemEnable = 15905, General_HeroOneStepBuy = 15906, General_HeroListItemRandom = 15907, General_HeroOneStepBuyTipShowTimeUp = 15908, General_ZombieChooseConfirm = 15909, Battle_InBattleTaskPanelSwitch = 15920, Battle_FollowExpand = 15950, Guild_Rank_Entry_Open_Form = 16000, Guild_Rank_Entry_Element_Enable = 16001, Guild_Rank_Open_Match_Score_Rank_Form = 16002, Guild_Rank_Match_Score_Rank_Tab_Change = 16003, Guild_Rank_Match_Guild_Score_Rank_Enable = 16004, Guild_Log_List_Member_Click = 16005, Guild_PlatRewardFormOpen = 16006, Guild_PlatReward_Get = 16007, SkillButtomCustom_OpenForm = 16100, SkillButtomCustom_CloseForm = 16101, SkillButtomCustom_SwichHeroBtnClick = 16102, SkillButtomCustom_RevertDefaultSlotBtnClick = 16103, SkillButtomCustom_ApplyAllHeroBtnClick = 16104, SkillButtomCustom_SelectSlot = 16105, SkillButtomCustom_ReciveHeroSwitchConfirm = 16106, SkillButtomCustom_ResetSelectSlotState = 16108, SkillButtomCustom_RevertDefaultSlotBtnClickConfirm = 16109, SkillButtomCustom_ApplyAllHeroBtnClickConfirm = 16110, SkillButtomCustom_RevertDefaultSlotBtnClickInBattle = 16111, SkillButtomCustom_RevertDefaultSlotBtnClickConfirmInBattle = 16112, SkillButtomCustom_GotoTraningBattle = 16113, ChooseHeroSys_OpenChangeHeroForm = 16200, ChooseHeroSys_OnCloseChangeHeroForm = 16201, ChooseHeroSys_HeroListItemClick = 16202, ChooseHeroSys_HeroTypeChange = 16203, ChooseHeroSys_HeroOwnFlagChange = 16204, ChooseHeroSys_HeroListItemEnable = 16205, HeroChooseModule_OnHeroJobSelect = 16206, HeroChooseModule_OnHeroUIListItemEnable = 16207, HeroChooseModule_OnHeroUIListItemSelect = 16208, HeroChooseModule_OnCheckBoxChange = 16209, HeroDeadInfo_OnFormOpen = 16250, HeroDeadInfo_OnFormClose = 16251, HeroDeadInfo_OnFormAppear = 16252, HeroDeadInfo_OnFormHide = 16253, Settings_OnFormOpen = 16297, Settings_OnFormAppear = 16298, Settings_OnFormHide = 16299, SettingsNew_DonateRebateBarChange = 16300, SettingsNew_DonateRebateHelp = 16301, SettingsNew_OnContinueCommonAttackModeChange = 16302, SettingsNew_OnFriendRefuseBarChange = 16304, SettingsNew_OnLBSTitleBarChange = 16305, SettingsNew_OnClickLBSTitleHelper = 16306, SettingsNew_OnRecentPlayerRefuseBarChange = 16307, OpSetting_3DTouchForcevalueBarChange = 16308, OpSetting_On3DTouchCancleSkill = 16309, SettingsNew_OnClickToolEntry = 16310, OpSetting_ONClick3DTouchHelper = 16311, OpSetting_NotShowDec = 16312, OpSetting_ShowDec = 16313, OpSetting_OnClickGyroHelper = 16314, OpSetting_OnClickCommonAttackType2Helper = 16316, Settings_OnClickHDLutHelper = 16317, Settings_OnClickUIEffectHelper = 16318, Settings_OnClickHDModelHighCancle = 16319, SettingOnClickHDModelHighConfirm = 16320, Settings_AutoRejectSurrendering = 16321, Settings_AutoRejectSurrenderingConfrim = 16322, Settings_AutoRejectSurrenderingCancel = 16323, Settings_AutoRejectSurrenderingHelp = 16324, Settings_ExtraPack_ListEnable = 16325, Settings_ExtraPack_DownloadExtra = 16326, Settings_Slider_ObModeChange = 16327, Settings_ExtraPack_DownloadExtraConfirm = 16328, Settings_InBattleShowPlayerNameChange = 16329, Settings_AccuseVoiceMessage = 16330, Settings_AccuseVoiceMessageConfirmed = 16331, Settings_AccuseVoiceMessageCanceled = 16332, Settings_AccuseVoiceMessageHelp = 16333, Settings_OpenChangeLanguageUI = 16334, Settings_Change_Language = 16335, Settings_Cancel_Change_Language = 16336, Setting_SliderEnable = 16337, Setting_SliderChange = 16338, Setting_ToggleEnable = 16339, Setting_ToggleChange = 16340, Setting_PrivacyUse = 16341, Settings_InBattleShowSkillLabelChange = 16342, OpSetting_ClickSelectTargetHelper = 16343, Setting_WXLiveSlideChange = 16344, Setting_WXLiveSlideHelp = 16345, Settings_ShowCheerBtn = 16346, SettingsPrivacy_KingsTimeWeeklyReport = 16347, SettingsPrivacy_KingsTimeWeeklyReportHelp = 16348, SettingsPrivacy_KingsTimeWeeklyReportOnConfirm = 16349, SettingsPrivacy_KingsTimeWeeklyReportOffConfirm = 16350, SettingsPrivacy_KingsTimeWeeklyReportCancel = 16351, Settings_InBattleMsgRoagrChanged = 16352, Settings_ClickInBattleMsgRoagrHelp = 16353, Settings_ClickdeleteRole = 16354, Settings_ConfirmDeletRole = 16355, Settings_UseOBWatchUI = 16356, Settings_OnBuffGiftChanged = 16357, Settings_BuffGiftHelp = 16358, Settings_DetailedMute = 16359, Settings_DetailedMuteHelp = 16360, Settings_JoystickModeChanged = 16361, Settings_OpSettingChangeHeroClick = 16362, Settings_OpSettingBatchApplyClick = 16363, Settings_OpSettingDefaultSettingToggleChanged = 16364, Settings_OpSettingHeroSettingToggleChanged = 16365, Settings_OpSettingSingleHeroChosen = 16366, Settings_OpSettingBatchHeroChosen = 16367, Settings_OpSettingBatchHeroClose = 16368, OpSetting_OnCameraFollowSkillLockChg = 16369, OpSetting_OnCameraFollowSkillOffsetChg = 16370, Settings_InBattleMsgThumbsUPChanged = 16371, Settings_ClickInBattleMsgThumbsUprHelp = 16372, Settings_WeChatSayHelloStateChange = 16373, Settings_WeChatSayHelloStateChangeHelp = 16374, Settings_WeChatCardStateChange = 16375, Settings_WeChatCardStateChangeHelp = 16376, Settings_WeChatSayHelloStateChangeConfirm = 16377, Settings_WeChatCardStateChangeConfirm = 16378, Settings_WeChatSayHelloStateChangeCancel = 16379, Settings_WeChatCardStateChangeCancel = 16380, Settings_PCSmoothDragChange = 16381, Settings_OpSettingResetHeroClick = 16382, Settings_OpSettingResetHeroChosen = 16383, Settings_OpSettingResetHeroClose = 16384, Settings_OpenPrivatePlayerInfoMgr = 16385, Settings_OpenPrivateAuthroityInfoMgr = 16386, Settings_ClosePrivateAuthroityInfoMgr = 16387, Settings_ClosePrivatePlayerInfoMgr = 16388, Settings_PrivateAuthorityGotoSetting = 16389, VersionUpdate_MuteMusicButtonSwitch = 16390, VersionUpdate_ConfirmClearALLPatch = 16392, VersionUpdate_CancelClearALLPatch = 16393, Settings_PrivateAuthorityOpenDetail = 16394, Settings_PrivateAuthorityItemEnable = 16395, Settings_PrivatePlayerInfoBtnClick = 16396, Settings_Wifi_func_desc = 16397, Settings_Wifi_func_switch = 16398, Settings_Wifi_btn_click = 16399, Settings_GlobalLeftModelChg = 16400, Settings_GlobalRightModelChg = 16401, Settings_GlobalCustomModelChg = 16402, Settings_ClickGlobalPosHelper = 16403, Settings_Slider_onSpeakChange = 16404, Settings_Slider_onMicChange = 16405, Settings_OnCameraOffsetSwitchChange = 16406, Settings_OnClickCameraOffsetHelp = 16407, Settings_OnCameraOffsetReplaceJoystickMoveConfirm = 16408, Settings_OnCameraMoveJoystickReplaceCameraOffsetConfirm = 16409, Settings_AntiAnliasing = 16410, Settings_DynamicResolution = 16411, Settings_HDR10 = 16412, Settings_ActorOutLine = 16413, Settings_ActorBloom = 16414, Settings_ActorDisplay = 16415, Settings_Slider_OnPrivacyVipLikeEffectChange = 16416, Settings_Slider_OnPrivacyVipNameColorChange = 16417, Settings_Slider_OnPrivacyVipShareSkinChange = 16418, Settings_Slider_OnPrivacyVipLightColumnChange = 16419, Settings_Slider_OnPrivacyVipFightingEffectChange = 16420, Settings_Slider_OnPrivacyVipMessageColorChange = 16421, Settings_Slider_OnPrivacyVipMessageBorderChange = 16422, Settings_Slider_OnPrivacyCreepSkinVisibleChange = 16423, Settings_Slider_OnPrivacyVipLikeEffectHelp = 16424, Settings_Slider_OnPrivacyVipNameColorHelp = 16425, Settings_Slider_OnPrivacyVipShareSkinHelp = 16426, Settings_Slider_OnPrivacyVipLightColumnHelp = 16427, Settings_Slider_OnPrivacyVipFightingEffectHelp = 16428, Settings_Slider_OnPrivacyVipMessageColorHelp = 16429, Settings_Slider_OnPrivacyVipMessageBorderHelp = 16430, Setting_Slider_OnPrivacyLiveChangge = 16431, Settings_Slider_OnPrivacyVipLevelVarHelp = 16432, Settings_Slider_OnObserveFriendReplayChange = 16433, Setting_UIEffct_Chg = 16434, Setting_TotalQuality_SelectChg = 16435, Settings_DynamicResolution_Locked_Click = 16436, Settings_HeroBloom_Locked_Click = 16437, Settings_OnClick_RenderSetting_Reset = 16438, Settings_OnClick_ObserveFriendReplay_Help = 16439, Settings_AutoDownFPS = 16440, Settings_RevertFPS = 16441, Settings_PercisionAttack_Chg = 16442, Settings_HeadLine_Chg = 16443, Settings_Graphic_ConfirmDownloadRes = 16444, Settings_OnClick_RenderSetting_Reset_Confirm = 16445, Settings_TotalQuality_SelectConfirm = 16446, Settings_RenderSetting_GotoTrain = 16447, Settings_RenderSetting_GotoTrainConfirm = 16448, Settings_RenderSetting_DynamicHelp = 16449, Settings_OnModelLODChgConfirm = 16450, Settings_OnParticalLODChgConfirm = 16451, Settings_HeroFarOutlineChg = 16452, Settings_Wifi_acc_toggle = 16453, Settings_Wifi_acc_HelpTips = 16454, Settings_Wifi_acc_ConfirmOk = 16455, Settings_Wifi_acc_Cancel = 16456, Settings_BattleFow_SensitiveChg = 16457, Settings_Battle_HeroProp_EntryPosChg = 16458, Settings_HDR_Brightness_Chg = 16459, Settings_ActorDisplay_Confirm = 16460, Settings_Wifi_acc_Recommend_GoOpen = 16461, Settings_InBattleMsg_Apollogaize = 16462, Settings_InBattleMsg_Comfort = 16463, Settings_InBattleMsg_SurrenderCheerUp = 16464, Settings_OnDynamicSensitivityToggleChange = 16465, Settings_OnClickDynamicSensitivityHelp = 16466, Settings_OnDynamicSensReplaceJoystickMoveConfirm = 16467, Settings_OnPrivacyChatLBS_No1 = 16468, Settings_OnPrivacyChatLBS_No2 = 16469, Settings_OnPrivacyChatLBS_No3 = 16470, Settings_OnClickHelpCarzyPowerSave = 16471, Settings_OnClickToggleCrazyPowerSave = 16472, Settings_Slider_AIInstructionModeChange = 16473, Settings_OnClickGiftPrivacyHelp = 16474, Settings_OnGiftPrivacyChanged = 16475, Settings_UseRencent_Rms = 16476, Settings_WaterReflection_Chg = 16477, Settings_WaterReflection_Confirm = 16478, Settings_UseDefault_Rms = 16577, Settings_InBattleMsg_ApollogizeHelp = 16578, Settings_InBattleMsg_ComfortHelp = 16579, Settings_InBattleMsg_SurrenderCheerUpHelp = 16580, Settings_Toggle_onCustomMuscEnable = 16581, Settings_Btn_onOpenCustomMuscForm = 16582, Settings_Toggle_onGeneralMusicEnable = 16583, Settings_Slider_GeneralMusicChange = 16584, Settings_CustomMusic_Cancel = 16585, Settings_CustomMusic_OK = 16586, Settings_CustomMusic_Edit = 16587, Settings_CustomMusic_Add = 16588, Settings_CustomMusic_Delete = 16589, Settings_CustomMusic_PlayL = 16590, Settings_CustomMusic_PlayR = 16591, Settings_CustomMusic_PlayRandom = 16592, Settings_CustomMusic_Close = 16593, Settings_CustomMusic_Updated = 16594, Settings_CustomMusic_DragStart = 16595, Settings_CustomMusic_Drag = 16596, Settings_CustomMusic_DragEnd = 16597, Settings_CustomMusic_PlayChanged = 16598, Settings_JueWuAssistantShowModeChanged = 16599, Settings_InBattleMsg_AutoMsg = 16600, Settings_InBattleMsg_AutoMsg_Help = 16601, Settings_KeySetting_OpenForm = 16602, Settings_KeySetting_OpenKeySet = 16603, Settings_KeySetting_CloseKeySet = 16604, Settings_KeySetting_Reset = 16605, Settings_KeySetting_ConfirmReset = 16606, Settings_KeySetting_ConfirmRepeat = 16607, Settings_KeySetting_ConfirmDoNotRepeat = 16608, Settings_Utral_Confirm = 16609, Settings_Sound_onHeroSoundEnable = 16610, Settings_Sound_onHeroSoundChanged = 16611, Settings_Sound_onNoticeSoundEnable = 16612, Settings_Sound_onNoticeSoundChanged = 16613, Settings_Vibration_onOpenOrClose = 16614, Settings_Vibration_Level = 16615, Settings_Vibration_KeySkill = 16616, Settings_Vibration_Show = 16617, Settings_Vibration_SkillShow = 16618, Settings_Slider_onBackGroundVoice = 16619, Settings_Vibration_SkillCancel = 16620, Settings_Vibration_KeySkillType = 16621, Settings_Vibration_KeySkill_click = 16622, Settings_Vibration_KeySkillType_click = 16623, Settings_Vibration_Show_click = 16624, Settings_Vibration_SkillShow_click = 16625, Settings_Vibration_SkillCancel_click = 16626, Settings_StarVip_Change = 16627, Settings_InBattleMsg_ShakeHand = 16628, Settings_Click_InBattleMsg_ShakeHand_Help = 16629, Settings_SkillIndicatorSelectMode_Chg = 16630, Settings_SkillNoTargetUse_Chg = 16631, Settings_IsChangeIndicator_Chg = 16632, Settings_PressShowSkillTips_Chg = 16633, Settings_ShortVideo_ValueChanged = 16634, Settings_SkillCancleTime_Chg = 16635, Settings_ClickTopNotificationRule = 16636, Setting_OnTopNotificationChange = 16637, Settings_HeroSelectRcmdHelp = 16638, Settings_HeroSelectRcmdToggle = 16639, Settings_AllowVoiceToViewer_Change = 16640, Settings_FensiShouquan_Change = 16641, Settings_Slider_onBattleMusicChange = 16642, Settings_Slider_onBattleMusicSensitivityChange = 16643, Settings_Hero_Ban_Rcmd_Change = 16644, Settings_KeySetting_ChangeWatchPlayerKey = 16645, Settings_SKill_PIP_Change = 16646, Settings_SKIll_PIP_Not_Support = 16647, Settings_ClickTransferRolePlatform = 16648, Settings_ConfirmTransferRolePlatform = 16649, Settings_ClickReserveJoinTeamRule = 16650, Settings_OnReserveJoinTeamChange = 16651, Settings_Recommendation_Chg = 16652, Settings_Recommendation_Cancle_Confirm = 16653, Settings_RcampusEntrance_ValueChanged = 16654, Settings_CustomMusic_Bar_PlayL = 16655, Settings_CustomMusic_Bar_PlayR = 16656, Settings_FriendOnlineNtf_HelpBtnClick = 16657, Settings_Private_XgPush_FriendTeam = 16749, Settings_Private_XgPush_Ready = 16750, Settings_Private_XgPush_Match = 16751, Settings_Private_XgPush_Help = 16752, Settings_HDR_Change = 16753, Settings_HDR_OpenConfirm = 16754, Settings_Private_QQSayHello = 16755, Settings_AutoBuyEquipModeChanged = 16756, Settings_AutoAddSkillModeChanged = 16757, Settings_AutoBuyEquipModeGuide = 16758, Settings_AutoAddSkillModeGuide = 16759, Settings_Private_Open_PrivilegeAgreement = 16760, Settings_Private_XgPush_AppointmentFeedback = 16761, Settings_Private_XgPush_MatchOpen = 16762, Settings_Private_XgPush_ChatInfo = 16763, Settings_Private_XgPush_FriendMail = 16764, Settings_Private_XgPush_FriendRequest = 16765, Settings_Private_XgPush_SystemMail = 16766, LBSFight_EnterMapConfirm = 17000, LBSFight_EnterMap = 17001, LBSFight_ChangeTitleConfirm = 17002, LBSFight_ChangeTitle = 17003, LBSFight_Location = 17004, LBSFight_TitleTabChange = 17005, LBSFight_TitleHistoryChanged = 17006, LBSFight_TitleChangeClosed = 17007, LBSFight_DistrictChgHero = 17008, LBSFight_DistrictBeginJudge = 17009, LBSFight_DistrictPOIListEnable = 17010, LBSFight_DistrictChgHeroCallback = 17011, LBSFight_DistrictShare = 17012, LBSFight_OpenTitleShare = 17013, LBSFight_TitleUse = 17014, LBSFight_TitleHistoryEnable = 17015, LBSFight_TitleMenuChange = 17016, LBSFight_TitleHistoryTabChange = 17017, LBSFight_TitleHistory_ClickShare = 17018, LBSFight_TitleHistory_ItemEnable = 17019, LBSFight_TitleHistory_Priority_Show_Setting = 17020, LBSFight_TitleHistory_Priority_Show_Toggle_Changed = 17021, LBSFight_TitleHistory_SelectItem_Change = 17022, LBSFight_GetTitle_OpenAnimEnd = 17023, LBSFight_GetTitle_ShowWeekGetTitle = 17024, LBSFight_GetTitle_ShowGuoFuGetTitle = 17025, LBSFight_GetTitle_WeekTitleForm_Closed = 17026, LBSFight_GetTitle_OnClickShare = 17027, LBSFight_GetTitle_ShowTimerUp = 17028, LBSFight_GetTitle_GuoFuTitleForm_Closed = 17029, LBSFight_SettleOpenFightScoreDetailForm = 17030, LBSFight_FightScore_DetailChgHero = 17031, LBSFight_FightValue_CompleteInfoDown = 17032, LBSFight_FightValue_CompleteInfoUp = 17033, LBSFight_OpenFightScoreDetailForm = 17034, LBSFight_FightValue_HeroSelected = 17035, LBSFight_FightValue_Compare = 17036, LBSFight_OpenHonerTitleLevelInTitleChg = 17037, Ranking_lbsTopHistoryTabChange = 17038, LBSFight_JumpToCommonHero = 17039, LBSFight_OpenFightScoreDetailFormBranch = 17040, LBSFight_SettleOpenFightScoreDetailFormBranch = 17041, Ranking_OpenAceReplay = 17042, Ranking_AceReplayFromClose = 17043, Ranking_AceReplayPlay = 17044, Ranking_AceReplayPlayConfirm = 17045, Ranking_AceReplaySeeResult = 17046, LBSFight_OpenWeekExtraFightValueTips = 17047, LBSFight_CloseWeekExtraFightValueTips = 17048, LBSFight_OpenWeekExtraRatioTips = 17049, LBSFight_CloseWeekExtraRatioTips = 17050, LBSFight_OpenWeekExtraFightValueTips_Settle = 17051, LBSFight_CloseWeekExtraFightValueTips_Settle = 17052, LBSFight_OpenChangeTitleRule = 17070, LBSFightMap_RequestCacheTimeout = 19000, LBSFightMap_CloseMap = 19001, LBSFightMap_OpenRanking = 19002, LBSFightMap_DistrictVoting = 19003, LBSFightMap_OpenRules = 19004, LBSFightMap_ClosePageCallback = 19005, LBSFightMap_UseThisLocation = 19006, LBSFightMap_RenewPosition = 19007, LBSFightMap_WhenShareClose = 19008, LBSFightMap_PlayCloudAnimEnd = 19009, LBSFightMap_ResetCenter = 19010, LBSFightMap_VotingCDTimeChg = 19011, LBSFightMap_VotingCDTimeEnd = 19012, LBSFightMap_VotingCDTimeStart = 19013, LBSFightMap_ChgToSeriousMap = 19014, LBSFightMap_ChgToEnteraimentMap = 19015, LBSFightMap_DistrictInfoTimeChg = 19016, LBSFightMap_DistrictInfoTimeEnd = 19017, LBSFightMap_CheckDistrictTopHeros = 19018, LBSFightMap_DistrictShare = 19019, LBSFightMap_DistrictShareConfirm = 19020, LBSFightMap_DistrictShareCancel = 19021, LBSFightMap_DistrictTopListEnable = 19022, LBSFightMap_OfficialTopListEnable = 19023, LBSFightMap_DistrictTopHeroCheckInfo = 19024, LBSFightMap_DistrictShowHideInfo = 19025, LBSFightMap_OpenFilters = 19026, LBSFightMap_CloseFilters = 19027, LBSFightMap_RequestBattleZoneTopHerosTest = 19028, LBSFightMap_RequestOfficialTopHerosTest = 19029, LBSFightMap_Jump2DistrictForm = 19030, LBSFightMap_OpenBattleZoneTopRule = 19031, LBSFightMap_OpenBattleZoneBottomRule = 19032, LBSFightMap_OpenChatroomTest = 19033, LBSFightMap_ShowOfficialTopHerosInfo = 19034, LBSFightMap_Jump2PlayerInfoHonerInfo = 19035, LBSFightMap_TitleChange_ChooseTitle = 19036, PreDownload_CommonSkipPrompt = 19100, PreDownload_CommonSkip = 19101, UploadRecord_OpenForm = 20000, UploadRecord_ConfirmUpload = 20001, UploadRecord_UploadSuc = 20002, UploadRecord_OpenCustomService = 20003, HeroCall_OpenMainForm = 20820, HeroCall_CloseMainForm = 20821, HeroCall_OpenVoteForm = 20822, HeroCall_CloseVoteForm = 20823, HeroCall_OpenVotePage = 20824, HeroCall_OpenActivityPage = 20825, HeroCall_ChangeVoteWeekPage = 20826, HeroCall_SelectVoteHero = 20827, HeroCall_HeroCallVote = 20828, HeroCall_GetBackCityEffect = 20829, HeroCall_GetHeroCallScoreReward = 20830, HeroCall_OpenHeroShareForm = 20831, HeroCall_OpenWealShareForm = 20832, HeroCall_CloseHeroCallShareForm = 20833, HeroCall_ClickTopNHeroIcon = 20834, HeroCall_TaskPageTimerUpdate = 20835, HeroCall_WholeWealEnd = 20836, HeroCall_JumpToCollectWeal = 20837, HeroCall_ShowWealRule = 20838, HeroCall_PropInsuff = 20839, PkAi_Training_Match_Confirm = 20848, PkAi_Training_Match = 20849, PkAi_OpenMainForm = 20850, PkAi_LevelItemEnable = 20851, PkAi_ShowRule = 20852, PkAi_ShowLevelLockedTip = 20853, PkAi_OpenBuyGameCntMessageBox = 20854, PkAi_ConfirmBuyGameCnt = 20855, PkAi_Training_LevelItemEnable = 20856, PkAi_Training_LevelItemSelected = 20857, PkAi_Training_GameModeItemSelected = 20858, PkAi_Training_ConfirmBuyGameCnt = 20860, PkAi_Training_OpenPkAiTrainingForm = 20861, PkAi_Training_ShowRule = 20862, SuperPkAi_OpenMainForm = 20863, SuperPkAi_LevelList_Enable = 20864, SuperPkAi_LevelList_Chg = 20865, SuperPkAi_HideLevel_HeroTip_Click = 20866, SuperPkAi_Rule_Btn_Click = 20867, SuperPkAi_SettleToHideLevel = 20868, PkAi_Training_OpenBuyGameCntMessageBox = 20869, SuperPkAi_Matching_ShowHero = 20870, SuperPkAi_OpenLevelHeroForm = 20871, SuperPkAi_OpenBuyGameCntMessageBox = 20872, SuperPkAi_ConfirmBuyGameCnt = 20873, BattleUIEffectManager_OpenForm = 21000, BattleUIEffectManager_CloseForm = 21001, BattleUIEffectManager_TopMenuSelect = 21002, BattleUIEffectManager_KillSkinTopMenuSelect = 21003, BattleUIEffectManager_KillSkinUse = 21004, BattleUIEffectManager_KillSkinListItemEnable = 21005, BattleUIEffectManager_KillSkinTimerEnd = 21006, BattleUIEffectManager_BackSkinTopMenuSelect = 21007, BattleUIEffectManager_BackSkinUse = 21008, BattleUIEffectManager_BackSkinListItemEnable = 21009, BattleUIEffectManager_BackSkinTimerEnd = 21010, BattleUIEffectManager_ClickLinkUrl = 21011, BattleUIEffectManager_DeadSkinTopMenuSelect = 21012, BattleUIEffectManager_DeadSkinUse = 21013, BattleUIEffectManager_DeadSkinListItemEnable = 21014, BattleUIEffectManager_DeadSkinTimerEnd = 21015, BattleUIEffectManager_JumpToGet = 21016, BattleUIEffectManager_DeadSkinUseExpCard = 21017, BattleUIEffectManager_DeadSkinClickHelp = 21018, BattleUIEffectManager_ClickNotOwnBtn = 21019, BattleUIEffectManager_PreviewBobaoClick = 21020, BattleUIEffectManager_PreviewBackCityClick = 21021, BattleUIEffectManager_PreviewJiShaClick = 21022, BattleUIEffectManager_ClcikToApplayToAllHero = 21023, BattleUIEffectManager_ConfirmToApplayToAllHero = 21024, BattleUIEffectManager_EffectListSelect = 21025, BattleUIEffectManager_RealPlayVideo = 21026, BattleUIEffectManager_OnClickToPlayVideo = 21027, BattleUIEffectManager_LeftMenuSelect = 21028, BattleUIEffectManager_DeadSkinUseCancel = 21029, BattleUIEffectManager_DeadSkinClickNotOwnBtn = 21030, BattleUIEffectManager_ClcikToApplayToOneHero = 21031, BattleUIEffectManager_OnAppayToAllHeroImpl = 21032, BattleUIEffectManager_OnSelectTab = 21033, BattleUIEffectManager_PreviewBornClick = 21034, BattleUIEffectManager_ClickToApplayToMultiHero = 21035, BattleUIEffectManager_ConfirmToApplayToMultiHero = 21036, BattleUIEffectManager_ClickToUseForRandom = 21037, BattleUIEffectManager_ClickToRandomAllEft = 21038, BattleUIEffectManager_ClickEditBtn = 21039, BattleUIEffectManager_AddOrRemoveRandom = 21040, BattleUIEffectManager_PerfEftUseModeSwitch = 21041, BattleUIEffectManager_PerfEftUseModeEnable = 21042, BattleUIEffectManager_ClickToApplyRandomToOne = 21043, BattleUIEffectManager_ClickToApplyRandomToMulti = 21044, BattleUIEffectManager_OnConfirmApplyRandomToMulti = 21045, BattleUIEffectManager_ClickToShowNowEffects = 21046, BattleUIEffectManager_ClickRuleBtn = 21047, ChatRoom_OpenChatRoomSelect = 22000, ChatRoom_OnOpenChatRoomSelect = 22001, ChatRoom_OnCloseChatRoomSelect = 22002, ChatRoom_OnClickChatRoom = 22003, ChatRoom_QuitChatRoomSelect = 22004, ChatRoom_OnRoomElementEnable = 22005, ChatRoom_OnRoomElementClick = 22006, ChatRoom_OpenChatRoom = 22007, ChatRoom_ChatRoomOpened = 22008, ChatRoom_CloseChatRoom = 22009, ChatRoom_ChatRoomClosed = 22010, ChatRoom_ChatRoomChatContentEnable = 22011, ChatRoom_ChatRoomChaterListEnable = 22012, ChatRoom_ChatRoomVoiceClickPlay = 22013, ChatRoom_ChatRoomToggleFaceBtn = 22014, ChatRoom_ChatRoomSendMsg = 22015, ChatRoom_ChatRoomVoiceBtnDown = 22016, ChatRoom_ChatRoomVoiceBtnUp = 22017, ChatRoom_ChatRoomVoiceBtnDrag = 22018, ChatRoom_ChatRoomClickOneFace = 22019, ChatRoom_ChatRoomSwitchRoom = 22020, ChatRoom_NewMsgBubbleClick = 22021, LobbyActivityGameMode_Share = 22024, LobbyActivityGameMode_ShareReward = 22025, LobbyActivityGameMode_TeamToRoom = 22026, LobbyActivityGameMode_OrderBannerDetail = 22027, LobbyActivityGameMode_JumpToActivityDetail = 22028, LobbyActivityGameMode_ClickHelper = 22029, LobbyActivityGameMode_CancleOrder = 22030, ChatRoom_Max = 22999, Career_OpenForm = 23000, Career_LobbyMenuTabChange = 23001, Career_OnFormClose = 23002, Career_OnPublicBar_Change = 23003, Career_Title_ApplicatExp = 23004, Career_Setting_OnClick_SwitchMainShowContent = 23006, Career_Setting_OnClick_SwitchTitle = 23007, Career_OnClick_BeStrong = 23010, Career_OnClick_Reward = 23011, Career_OnClick_Story = 23012, Career_OnClick_ShowOther = 23013, Career_OnClick_GetTargetReward = 23014, Career_LevelMode_OnChangePlayTypeConfirm = 23019, Career_LevelMode_OnChangePlayTypeElemEnable = 23020, Career_Lobby_MishuForm_Close = 23022, Career_Title_MenuChange = 23024, Career_Title_Elem_Enable = 23025, Career_Title_OnClick_Use_Title = 23026, Career_Title_SelectElem_Change = 23027, Career_Title_Click_Help = 23028, Career_Lobby_Appear = 23031, Career_Lobby_Hide = 23032, Career_Lobby_ClickHelp = 23033, Career_LevelMode_OnClick_QuTanSuo = 23034, Career_Title_Form_Closed = 23037, Career_LevelMode_OnSelect_Explore = 23038, Career_LevelMode_OnClick_GetExploreDegreeReward = 23039, Career_LevelMode_TargetStateChange = 23040, Career_Title_Has_New_Change = 23041, Career_LevelMode_OnClickPlayTypeLeft = 23042, Career_LevelMode_OnClickPlayTypeRight = 23043, Career_Lobby_OnClickSign = 23044, Career_Title_SubList_Show = 23045, Career_Title_SubList_Elem_Enable = 23046, Career_Title_SubListClick = 23047, Career_OnUpdate_Sub_Model = 23048, Career_Click_GetMoreGold = 23049, Career_Title_Display_Form_Click_Open = 23050, Career_Title_Display_Form_Click_Edit = 23051, Career_Title_Select_From_Item_Select_Chg = 23054, Career_Title_Click_Open_Show_Set_Form = 23055, Career_Title_Click_CareerTitle_Item = 23056, Career_Max = 23099, HeroInfo_OnClickOpenBtnFolder = 23100, HeroInfo_OnClickCloseBtnFolder = 23101, HeroInfo_OnShowSkinFeature = 23102, HeroInfo_OnHideSkinFeature = 23103, HeroInfo_OnShowSubMenu = 23104, HeroInfo_OnHideSubMenu = 23105, HeroInfo_OnSelectSubTab = 23106, HeroInfo_OnClickUseSkinExpCard = 23107, HeroInfo_OnClickUseHeroExpCard = 23108, HeroInfo_OnHeroEventDialogTimeOut = 23109, HeroInfo_OnShowBuyInfoPanel = 23110, HeroInfo_OnShowHeroGonglue = 23111, HeroInfo_OnShowHeroInfo = 23112, HeroInfo_OnHideBuyInfoPanel = 23113, HeroInfo_ShowHeroFavorUnlockDataPanel = 23114, HeroInfo_OnCheckNonInputTimerUpd = 23115, HeroInfo_OnHeroModelPosAnimEnd = 23116, HeroInfo_ModelStartDrag = 23117, HeroInfo_ModelEndDrag = 23118, HeroInfo_FormOpened = 23119, HeroInfo_JumpSubMenuTab = 23120, HeroInfo_SetMenuPanelEnable = 23121, HeroInfo_SetMenuPanelDisable = 23122, HeroInfo_OpenGuideForm = 23123, HeroInfo_LoadGameModelComplete = 23124, HeroInfo_JumpExclusiveMusic = 23125, HeroInfo_ViewHistoryTa = 23136, HeroInfo_OnShowSkinFeatureDetailDown = 23137, HeroInfo_OnShowSkinFeatureDetailUp = 23138, HeroInfo_OnComeAnimPlayEnd = 23139, HeroInfo_OnClickToAddWish = 23140, HeroInfo_OnClickToDeleteWish = 23141, HeroInfo_OnShowSkinFeatureDetailShow = 23142, HeroInfo_OnShowSkinFeature_KOL_Switch = 23143, HeroInfo_2DImageLoadComplete = 23144, Proj8SnExt_ClickLastSingleBtn = 23300, Proj8SnExt_ClickLastCoupleBtn = 23301, Proj8SnExt_ClickBgNextState = 23302, Proj8SnExt_ClickUpdateLeft = 23303, Proj8SnExt_ClickUpdateRight = 23304, Proj8SnExt_ClickCurSnSingleBtn = 23305, Proj8SnExt_ClickCurSnCoupleBtn = 23306, Proj8SnExt_ClickUpdateNoticeBtn = 23307, Proj8SnExt_KingMarkPress = 23308, Proj8SnExt_KingMarkRelease = 23309, HeroEvent_ClickShowHeoDialogDetail = 23401, HeroEvent_ClickHeroDialogReply = 23402, HeroEvent_End = 23403, HeroEvent_StartHeroMemory = 23405, HeroEvent_OnClickStartLineStoryBtn = 23406, HeroGift_Bag_SelectItem = 23550, HeroGift_Drop_Gift_Item = 23551, HeroGift_Bag_ItemEnable = 23552, HeroGift_OnDrag_GiftItem_Start = 23553, HeroGift_OnDrag_Enter_Send_Gift_Area = 23554, HeroGift_OnDrag_GiftItem_End = 23555, HeroGift_OnDrag_Leave_Send_Gift_Area = 23556, HeroGift_Bag_Click_Item = 23557, HeroGift_BuyItem_Confirm = 23558, HeroMemory_Open = 23600, HeroMemory_ClickReply = 23601, HeroMemory_ClickClose = 23602, HeroMemory_ClickCloseConfirm = 23603, PlayerInfo_SkinShow_List_OnValidate = 23700, PlayerInfo_SkinShow_List_OnSwapEnd = 23701, PlayerInfo_SkinShow_List_OnEdit = 23702, PlayerInfo_SkinShow_List_OnCancel = 23703, PlayerInfo_SkinShow_List_OnConfirm = 23704, PlayerInfo_SkinShow_List_OnAdd = 23705, PlayerInfo_SkinShow_List_Modify = 23706, PlayerInfo_SkinShow_List_Del = 23707, PlayerInfo_SkinShow_List_OnSwapStart = 23708, PlayerInfo_SkinShow_List_OnClear = 23709, PlayerInfo_SkinShow_List_OnClear_Confirm = 23710, PlayerInfo_SkinShow_GoTo_HeroInfo = 23711, PlayerInfo_SkinShow_EmptyList_OnAdd = 23712, PlayerInfo_SkinShow_EmptyList_Modify = 23713, PlayerInfo_AllSkin_QualityOrSkinMenuSelect = 23740, PlayerInfo_AllSkin_SortByHeroList_OnValidate = 23750, PlayerInfo_AllSkin_SortByHeroList_JobMenuSelect = 23751, PlayerInfo_AllSkin_SortByHeroList_SubList_OnValidate = 23752, PlayerInfo_AllSkin_SortByHeroList_ProMenuSelect = 23753, PlayerInfo_AllSkin_SortByQualityList_OnValidate = 23760, PlayerInfo_AllSkin_SortByQualityList_QualityMenuSelect = 23761, PlayerInfo_AllSkin_SortByQualityList_OwnToggleSelect = 23762, PlayerInfo_AllSkin_Switch_Setting_Open = 23763, PlayerInfo_AllSkin_Overview_Click = 23764, PlayerInfo_AllSkin_HeroTab_HeroIconList_OnValidate = 23765, PlayerInfo_AllSkin_HeroTab_HeroIconList_OnSelect = 23766, PlayerInfo_AllSkin_HeroTab_SkinListItem_OnValidate = 23767, PlayerInfo_AllSkin_QualityTab_QualityList_OnValidate = 23768, PlayerInfo_AllSkin_QualityTab_QualitySkinListItem_OnValidate = 23769, PlayerInfo_AllSkin_SkinGroupTab_SkinGroupList_OnValidate = 23770, PlayerInfo_AllSkin_SkinGroupTab_SkinGroupListItem_OnValidate = 23771, PlayerInfo_AllSkin_SkinGroupTab_SkinGroupListChildItem_OnValidate = 23772, PlayerInfo_AllSkin_SkinBook_JumpToTargetItem = 23773, PlayerInfo_AllSkin_QualityTab_QualityList_OnClick = 23774, PlayerInfo_AllSkin_SkinGroupTab_SkinGroupList_OnClick = 23775, Mall_Boutique_SkinBook_OnClick = 23776, HeroInfo2_CollectionBook_OnClick = 23777, Collection_PrivilegeInfo_Form_Open = 23778, Collection_PrivilegeInfo_Form_Close = 23779, PlayerInfo_AllSkin_PrivilegeBtn_Click = 23780, Collection_PrivilegeInfo_Form_ShareClick = 23781, PlayerInfo_SkinShow_Tab_Changed = 23782, PlayerInfo_ChooseCollectionCardMulti_FormOpen = 23783, PlayerInfo_ChooseCollectionCardMulti_FormClose = 23784, PlayerInfo_CollectionCardShow_EmptyList_OnAdd = 23785, PlayerInfo_CollectionCardShow_AddBtn_OnClick = 23786, PlayerInfo_CollectionCardShow_Confirm_OnClick = 23787, PlayerInfo_CollectionCardShow_List_OnValidate = 23788, PlayerInfo_CollectionCardShow_List_OnEdit = 23789, PlayerInfo_CollectionCardShow_List_OnSwapStart = 23790, PlayerInfo_CollectionCardShow_List_OnSwapEnd = 23791, PlayerInfo_CollectionCardShow_List_Del = 23792, PlayerInfo_CollectionCardShow_List_OnCancel = 23793, PlayerInfo_CollectionCardShow_List_OnConfirm = 23794, PlayerInfo_CollectionCardShow_List_OnClear = 23795, PlayerInfo_CollectionCardShow_List_OnClear_Confirm = 23796, PlayerInfo_HeroSkinShowController_ShowHide_TabList = 23797, PlayerInfo_CollectionBookOverview_Form_Open = 23798, PlayerInfo_CollectionBookOverview_Form_Close = 23799, PlayerInfo_CollectionBookOverview_DropList_Changed = 23800, PlayerInfo_CollectionBookOverview_ShareBtn_Click = 23801, PlayerInfo_Form_Appear = 23805, PlayerInfo_CollectionBookOverview_CardClick = 23806, PlayerInfo_CollectionBook_OnVideoGuideEnd = 23807, Settings_OnPrivacyLoadingPrivilegeChange = 23808, Collection_Mishu_TodoItem_Click = 23809, PlayerInfo_AllSkin_SortBySkinGroupList_ProMenuSelect = 23810, PlayerInfo_AllSkin_AllTab_AttachedIconList_OnSelect = 23811, PlayerInfo_CollectionCardShow_List_OnClickItem = 23812, PlayerInfo_AllSkin_Switch_SearchState = 23813, PlayerInfo_AllSkin_Switch_NormalState = 23814, PlayerInfo_AllSkin_OnClickToClearSearchInput = 23815, PlayerInfo_AllSkin_OnClickToSearch = 23816, PlayerInfo_AllSkin_OpenSkinCollectionAward = 23817, PlayerInfo_SkinCollectionReward_GetReward = 23818, PlayerInfo_AllSkin_CloseSkinCollectionAward = 23819, PlayerInfo_CollectionBookOverview_List_OnEdit = 23820, PlayerInfo_CollectionBookOverview_List_OnConfirm = 23821, PlayerInfo_CollectionBookOverview_List_OnSwapStart = 23822, PlayerInfo_CollectionBookOverview_List_OnSwapEnd = 23823, PlayerInfo_CollectionBookOverview_List_OnElementValidate = 23824, PlayerInfo_AllSkin_OnClickToCloseSearch = 23825, PlayerInfo_AllSkin_SearchResult_TypeListElement_OnValidate = 23826, PlayerInfo_AllSkin_SearchResult_TypeSkinListElement_OnValidate = 23827, PlayerInfo_AllSkin_SearchResult_TypeSkinListElement_OnClick = 23828, PlayerInfo_CollectionBookOverview_List_OnCancel = 23829, Settings_OnPrivacyShowCollectionTitleChange = 23830, Guild_Setting_Slider_Authority = 25434, Guild_Honor_History_Open = 25435, Guild_Honor_History_Menu_Click = 25436, Guild_Honor_History_List_Enable = 25437, Guild_Honor_History_List_Slider_Click = 25438, Guild_Honor_History_Personal_List_Enable = 25439, Guild_SeasonInerit_Next = 25440, Guild_Info_Expand_Btn = 25441, Guild_Competition_Btn_Click = 25442, Guild_Competition_Letter_Click = 25443, Guild_Week_Report_Share_Open = 25444, Guild_Week_Report_Animation_End = 25445, Guild_SeasonInerit_Animation_End = 25446, Guild_ApplyByQR = 25447, Guild_Share_Open = 25448, Guild_ShowPlayerInfo = 25449, Guild_PersonFightReward_LBSSet = 25450, Guild_PersonFightReward_LBSSet_Confirm = 25451, Guild_ELORank_Menu_Click = 25452, Guild_ELORank_Element_Enable = 25453, Guild_Apply_Text_Confirm = 25454, Guild_ActivityPK_Form_OnClose = 25455, Guild_ActivityPK_List_Enable = 25456, Guild_ActivityPK_Chat_AutoScroller_Scroll_Finish = 25457, GuildTeam_ShortVideoBtnClick = 25458, GuildTeam_KingCup_ShortVideoBtnClick = 25459, Custom_Competition_Lobby_Open = 30000, Custom_Competition_Overiew_Open = 30001, Custom_Competition_FindBy_Code = 30002, Custom_Competition_ComCreate_Open = 30003, Custom_Competition_Recommend_ByFriend_Open = 30004, Custom_Competition_Create_Team = 30005, Custom_Competition_Recommend_ByMember_Open = 30006, Custom_Competition_Invite_Friends = 30007, Custom_Competition_Team_Statistic = 30008, Custom_Competition_Team_Log = 30009, Custom_Competition_Friend_Team_Open = 30010, Custom_Competition_Enter_Group = 30011, Custom_Competition_Team_Chat = 30012, Custom_Competition_Team_Statistic_Menu_Click = 30013, Custom_Competition_Active_Time_Up = 30014, Custom_Competition_Honor_Form_Open = 30015, Custom_Competition_Entity_Open = 30018, Custom_Competition_Entity_SignUp_Team_List_Enable = 30019, Custom_Competition_Friend_Recommend_List_Enable = 30020, Custom_Competition_Attention_List_Enable = 30021, Custom_Competition_Attention = 30023, Custom_Competition_Attention_Cancel = 30024, Custom_Competition_ShareForm_Open = 30025, Custom_Competition_Attention_Confirm = 30026, Custom_Competition_CreateHistory_List_Enable = 30028, Custom_Competition_Entity_SignUp = 30029, Custom_Competition_Entity_SignUp_Cancel = 30030, Custom_Competition_Entity_Attention = 30031, Custom_Competition_Entity_Attention_Cancel = 30032, Custom_Competition_Entity_SignUp_Cancel_Confirm = 30033, Custom_Competition_Entity_Attention_Cancel_Confirm = 30034, Custom_Competition_MemInfo_Open = 30035, Custom_Competition_KickTeam = 30037, Custom_Competition_KickTeam_Confirm = 30038, Custom_Competition_MemKDA_List_Enable = 30040, Custom_Competition_Entity_Delete_Competition = 30041, Custom_Competition_Entity_Delete_Competition_Confirm = 30042, Custom_Competition_Recommend_ToTeam = 30043, Custom_Competition_Team_Recommend_List_Enable = 30044, Custom_Competition_Entity_Form_OnClose = 30045, Custom_Competition_Entity_Timer_Update = 30046, Custom_Competition_Attention_Form_Open = 30047, Custom_Competition_CommonTime_Update = 30048, Custom_Competition_ApplyToFriend_TimerUp = 30049, Custom_Competition_Fri_RecommendList_TimeUp = 30050, Custom_Competition_Attention_List_TimeUp = 30051, Custom_Competition_OBBox_Open = 30052, Custom_Competition_OB = 30053, Custom_Competition_Lobby_Timer_Update = 30054, Custom_Competition_Lobby_Timer_End = 30055, Custom_Competition_Entity_MaskSetting_Rule = 30056, Custom_Competition_Lobby_Update = 30057, Custom_Competition_Get_GameRecord = 30058, Custom_Competition_Get_GameRecord_Detail = 30059, Custom_Competition_Get_GameRecord_Video = 30060, Custom_Competition_Statistic_Open = 30061, Custom_Competition_Statistic_Menu_Click = 30062, Custom_Competition_Statistic_Share_Open = 30063, Custom_Competition_Statistic_Share_ToSns = 30064, Custom_Competition_Statistic_TeamList_Enable = 30065, Custom_Competition_Statistic_PersonList_Enable = 30066, Custom_Competition_Statistic_Save_Picture = 30067, Custom_Competition_Statistic_Share_ToFriend = 30068, Custom_Competition_ShareToFriend = 30069, Custom_Competition_QRForm_Open = 30070, Custom_Competition_QRScan = 30071, Custom_Competition_Attention_Item_Click = 30072, Custom_Competition_Honor_Menu_Click = 30073, Custom_Competition_JoinHistory_List_Enable = 30074, Custom_Competition_Overiew_OnClose = 30075, Custom_Competition_Honor_History_List_Enable = 30076, Custom_Competition_Lobby_ActivePanel_Click = 30077, Custom_Competition_QR_ShareToFriend = 30078, Custom_Competition_QR_ShareToZone = 30079, Custom_Competition_Attention_Menu_Click = 30080, Custom_Competition_MemKda_TitleTab_Click = 30081, Custom_Competition_ApplyToFriend_FuzzySearch = 30082, Custom_Competition_ApplyToFriend_CloseFuzzySearch = 30083, Custom_Competition_InviteFriend_FuzzySearch = 30084, Custom_Competition_InviteFriend_CloseFuzzySearch = 30085, Custom_Competition_NewBieForm = 30086, Custom_Competition_Change_Team_Name = 30100, Custom_Competition_Change_TeamIcon = 30101, Custom_Competition_Swap_Memeber = 30102, Custom_Competition_Kick_Memeber = 30103, Custom_Competition_Kick_Self = 30104, Custom_Competition_View_Player = 30105, Custom_Competition_Pos_Swap = 30106, Custom_Competition_View_TeamMember = 30107, Custom_Competition_None_Captain = 30108, Custom_Competition_Sub2_Flag_Enable = 30112, Custom_Competition_Sub2_Flag_Confirm = 30113, Custom_Competition_Friend_List_Enable = 30114, Custom_Competition_Friend_Invite = 30115, Custom_Competition_Invite_Accept = 30116, Custom_Competition_Change_Team_Name_Confirm = 30117, Custom_Competition_Kick_Memeber_Confirm = 30118, Custom_Competition_Kick_Self_Confirm = 30119, Custom_Competition_Friend_List_Open = 30120, Custom_Competition_Apply_To_Friend = 30121, Custom_Competition_Apply_Accept = 30122, Custom_Competition_Apply_Reject = 30123, Custom_Competition_Invite_Reject = 30124, Custom_Competition_Friend_Invite_List_Enable = 30126, Custom_Competition_Friend_List_Menu_Click = 30127, Custom_Competition_Friend_List_View_Team = 30128, Custom_Competition_Apply_Accept_Confirm = 30129, Custom_Competition_Apply_Reject_Confirm = 30130, Custom_Competition_Invite_Reject_Confirm = 30131, Custom_Competition_Accept_Recommend_From_Friend = 30132, Custom_Competition_Reject_Recommend_From_Friend = 30133, Custom_Competition_Reject_Recommend_From_Friend_Confirm = 30134, Custom_Competition_Create_PreStep = 30140, Custom_Competition_Create_NextStep = 30141, Custom_Competition_Create_ComModeList_Select = 30142, Custom_Competition_Create_TeamList_Select = 30143, Custom_Competition_Create_RewardList_Select = 30144, Custom_Competition_Create_Confirm = 30145, Custom_Competition_Create_WeekDay_Select = 30146, Custom_Competition_Create_Time_Select = 30147, Custom_Competition_Create_Time_Confirm = 30148, Custom_Competition_Create_TimeSelectedForm_Open = 30149, Custom_Competition_Create_Time_Cancel = 30150, Custom_Competition_Create_Rule_Step1 = 30151, Custom_Competition_Create_Rule_Step2 = 30152, Custom_Competition_Create_Rule_Step3 = 30153, Custom_Competition_Create_Rule_Step4 = 30154, Custom_Competition_SignUp_Confirm = 30160, Custom_Competition_Prepare_Swap_Position = 30170, Custom_Competition_Room_Open = 30171, Custom_Competition_Room_Rule = 30172, Custom_Competition_Room_Leave = 30173, Custom_Competition_Room_OB = 30174, Custom_Competition_Room_Timer_Up = 30175, Custom_Competition_Room_Timer_Update = 30176, Custom_Competition_BackToLobby = 30177, Custom_Competition_BackToRoom = 30178, Custom_Competition_Room_Visible = 30179, Custom_Competition_Room_Invisible = 30180, Custom_Competition_Entity_Platform_Group_Bind = 30200, Custom_Competition_Entity_Platform_Group_Join = 30201, Custom_Competition_Entity_Platform_Group_Remind = 30202, Custom_Competition_Entity_Platform_Group_Query = 30203, Custom_Team_Form_Close = 30204, Custom_Team_Honor_Help = 30205, Custom_Team_Get_LadderCard = 30206, Custom_Team_Cant_Get_Ladder_Help = 30207, Official_Competition_Entity_Open = 30209, Official_Competition_SwapPos = 30210, Official_Competition_Swap_Start = 30211, Official_Competition_Team_Expand = 30212, Official_Competition_EnterNext = 30213, Official_Competition_Expand = 30214, Custom_Team_Chg_Hero_Form_Open = 30215, Custom_Team_Chg_Branch_Form_Open = 30216, Custom_Team_Save_Hero_Chg = 30217, Custom_Team_Save_Branch_Chg = 30218, Custom_Team_ExpandShrink_Team_Branch_List = 30219, Custom_Team_Captain_Chg_Team_Branch = 30220, Custom_Team_Branch_List_Item_Enable = 30221, Custom_Team_Branch_List_Item_Sel = 30222, Custom_Team_Open_Comment_Form = 30223, Custom_Team_Send_Comment = 30224, Custom_Team_Bag_Expand_Shrink_Authority_List = 30225, Custom_Team_Bag_Chg_Member_Authority_Toggle = 30226, Custom_Team_Expand_Shrink_Task_Player_Lst = 30227, Custom_Team_Task_Jump = 30228, Custom_Team_Preview_Comment_Timer = 30229, Custom_Competition_RlexMode_ReadyButton_Click = 30300, Custom_Competition_RlexMode_GotoRoom = 30301, Custom_Competition_RlexMode_KickTeam = 30302, Custom_Competition_RlexMode_KickTeam_Confirm = 30303, Custom_Competition_RlexMode_KickTeam_Edit = 30304, Custom_Competition_Official_List_Enable = 30350, Custom_Competition_Official_Rule = 30351, Custom_Competition_Official_AwardGet = 30357, Custom_Competition_Official_Room_Open = 30358, Custom_Competition_Official_Reward_List_Open = 30359, Custom_Competition_Official_Reward_List_Enable = 30360, Custom_Competition_Official_Reward_H5 = 30361, OfficialEntity_Chat_Template_Enable = 30363, OfficialEntity_Chat_Template_Click = 30364, OfficialEntity_Chat_Template_Show = 30365, Custom_Competition_Official_Reward_Rank_Btn_Click = 30366, Custom_Competition_Official_Rank_MessageBox_Confirm = 30367, Official_Competition_List_Time_End = 30400, Official_Competition_Entity_Transform = 30401, Official_Competition_SignUp = 30402, Official_Competition_SignUp_Confirm = 30403, Official_Competition_CancelSignUp = 30404, Official_Competition_CancelSignUp_Confirm = 30405, Official_Competition_Recommend = 30406, Official_Competition_QRForm_Open = 30407, Official_Competition_Entity_Timer_End = 30408, Official_Competition_SNS_Invite_Login = 30409, Official_Competition_Remind_Ready = 30410, Official_Competition_Honor_Open = 30411, Official_Competition_Honor_Menu_Click = 30412, Official_Competition_MatchRecordOpen = 30413, Official_Competition_Honor_SignedListEnable = 30414, Official_Competition_Honor_HistoryListEnable = 30415, Official_Competition_Honor_HonorListEnable = 30416, Official_Competition_Entity_Close = 30417, Official_Competition_Settle_Close = 30418, Player_Info_Credit_JumpToJudgeWhenBlacked = 30499, Player_Info_CreditScore_OpenScoreChgDetail = 30500, Player_Info_CreditScore_OpenHelp = 30501, Player_Info_CreditScore_ChgListEnable = 30502, Player_Info_SocialAlbum_Show_Rule = 30503, Player_Info_PveHistoryElemEnable = 30504, Player_Info_Credit_Score_ShowNextPartReward = 30505, Player_Info_Credit_Score_ShowPrePartReward = 30506, Player_Info_Credit_Score_GetCreditReward = 30507, Player_Info_HistoryTypeSliderChange = 30508, Player_Info_OnClickPveHistoryDetail = 30509, Player_Info_Click_Tab_PandoraWish = 30510, Player_Info_Click_Open_PandoraWishSqure = 30511, Player_Info_Credit_GetLongReward = 30512, Player_Info_Credit_GetPeridiocReward = 30513, Player_Info_Credit_GetPeridiocDetails = 30514, Player_Info_Credit_GetLongRewardConfirm = 30515, Player_Info_Credit_GetPeridiocRewardConfirm = 30516, Player_Info_Accuse_PlayerName = 30517, Player_Info_Credit_TabSelectchg = 30518, Player_Info_Credit_AwardEnable = 30519, Player_Info_PvpHistory_YingdiReplay = 30520, Player_Info_Bonus_Help = 30521, Player_Info_Click_Tab_Achieve = 30522, Player_Info_Show_CustomSetting_Open = 30523, Player_Info_Show_CustomSetting_List_Enable = 30524, Player_Info_Show_CustomSetting_Use = 30525, Player_Info_Show_CustomSetting_Rule = 30526, Player_Info_Click_Tab_CreditScore = 30527, Player_Info_Click_Tab_CreditLevel = 30528, Player_Info_Click_Tab_HawkEyes = 30529, Player_Info_CreditSubAwardListEnable = 30530, Player_Info_CreditSubTabRule = 30531, Player_Info_PvpHistory_RemoteMomentOriginal = 30532, Player_Info_PvpHistory_RemoteMomentReady = 30533, Player_Info_CreditCheckRulesNew = 30534, Player_Info_Credit_OpenReportCheckUrl = 30535, Player_Info_PveHistory_ClickSaveReplay = 30536, Player_Info_PveHistory_ClickBeginReplay = 30537, Player_Info_PvpHistory_ShowAddFriend = 30538, Player_Info_PvpHistory_ShowComplaint = 30539, Player_Info_PvpHistory_Click_Report = 30540, Player_Info_PvpHistory_Detail_OnOpen = 30541, Player_Info_PvpHistory_Detail_OnClose = 30542, Player_Info_JumpToWishListTab = 30543, Player_Info_CombineGame_ShowAddFriend = 30544, Player_Info_CombineGame_ShowComplaint = 30545, Player_Info_CombineGame_ClickReport = 30546, Player_Info_SocialInfo_More = 30547, Player_Info_ClickLightCountHelp = 30548, Player_Info_DotaGame_ClickReport = 30549, Player_Info_LimitSkinTimerEnd = 30550, Player_Info_PvpHistory_CheckWonderfulMoment = 30551, Player_Info_CommonHeroInfo_DataSourceShow = 30552, Player_Info_CommonHeroInfo_DetailDataSourceShow = 30553, Player_Info_CommonHeroInfo_DetailDataSourceChange = 30554, Player_Info_PvpInfo_ShowCurSeason = 30555, Player_Info_PvpInfo_ShowCurYear = 30556, Player_Info_PvpInfo_ShowAll = 30557, Player_Info_CommonHeroInfo_HeroTag_OpenForm = 30558, Player_Info_CommonHeroInfo_HeroTag_CloseForm = 30559, Player_Info_CommonHeroInfo_HeroTag_AutoUse = 30560, Player_Info_CommonHeroInfo_HeroTag_SelectATag = 30561, Player_Info_CommonHeroInfo_HeroTag_UseAtag = 30562, Player_Info_CommonHeroInfo_HeroTag_UnuseAtag = 30563, Player_Info_CommonHeroInfo_HeroTag_OpenChangeTagForm = 30564, Player_Info_CommonHeroInfo_HeroTag_CloseChangeTagForm = 30565, Player_Info_CommonHeroInfo_HeroTag_SelectAChangeTag = 30566, Player_Info_CommonHeroInfo_HeroTag_ConfirmChangeTag = 30567, Player_Info_PvpHistory_CloseWonderfulMoment = 30568, Player_Info_CommonHeroInfo_HeroTag_RuleInfo = 30569, Player_Info_Base_SocialTag_FadeIn_AnimEnd = 30570, Player_Info_Base_SocialTag_FadeOut_AnimEnd = 30571, Player_Info_Show_CustomSetting_JumpToHonor = 30572, Player_Info_OpenPlayerAppearance = 30573, Player_Info_ClosePlayerAppearance = 30574, Appearance_OneGroupClickCard = 30575, Appearance_OneGroupPointSelectChanged = 30576, Appearance_ShowAllGroup = 30577, Appearance_OneGroupEdit = 30578, Appearance_OneGroupShare = 30579, Appearance_AllGroupCardElementEnable = 30580, Appearance_AllGroupClickCard = 30582, Appearance_AllGroupClickEdit = 30583, Appearance_AllGroupClickShare = 30584, Appearance_ShowOneGroup = 30585, Appearance_ClickCustom = 30586, Appearance_OneGroupWearClick = 30587, Appearance_CustomPartBtnClick = 30588, Appearance_CustomSubPartBtnClick = 30589, Appearance_CustomItemElementEnable = 30590, Appearance_CustomItemSelectChanged = 30591, Appearance_CustomPreviewStart = 30592, Appearance_CustomClickConfirm = 30593, Appearance_CustomClickUndo = 30594, Appearance_CustomClickRedo = 30595, Appearance_CustomClickRevert = 30596, Appearance_CustomItemClick = 30597, Appearance_ExitToOneGroup = 30598, Appearance_EditPartBtnClick = 30599, WishList_Rule_Btn_Click = 30600, WishList_EnterEditMode = 30601, WishList_Detail_Btn_Click = 30602, WishList_Pick_Btn_Click = 30603, WishList_WishDetail_AskFor_Btn_Click = 30604, WishList_WishDetail_Exchange_Btn_Click = 30605, WishList_WishDetail_Confirm_Exchange_Btn_Click = 30606, Settings_SyncWishDataToGameCenterSwitch = 30607, WishList_OperateWish_Level_List_Item_Select = 30608, WishList_OperateWish_Assist_Wish_Item = 30609, WishList_OperateWish_Anonymous_Btn_Click = 30610, WishList_OperateWish_MsgTypeChanged = 30611, WishList_OperateWish_MsgTypeDownBtnClick = 30612, WishList_OperateWish_MsgConfirmBtnClick = 30613, WishList_OperateWish_Present_WishPoint_Btn_Click = 30614, WishList_WishHistory_YearDropListDownBtnClick = 30615, WishList_WishHistory_YearDropListChanged = 30616, WishList_QuitEditMode = 30617, WishList_PrivacySetting_SyncWishDataToGameCenter_RuleBtnClick = 30618, WishList_SecurePwdConfirmAssist = 30619, Settings_ClickFiveCampSurrenderHelpBtn = 30620, Settings_ClickCloseFiveCampSurrenderAlertTip = 30621, WishList_Entrance_History_Item_Head_Click = 30622, WishList_Entrance_History_Item_Content_Click = 30623, WishList_AddWishConfirm_Form_Open = 30624, WishList_AddWishConfirm_Form_Close = 30625, AddWishConfirm_JumpForm_GiftRecord_Btn_Click = 30626, AddWishConfirm_AddWish_Btn_Click = 30627, AddWishConfirm_Exchange_Btn_Click = 30628, WishList_WishInviteFriend_Form_Open = 30629, WishList_WishInviteFriend_Form_Close = 30630, WishList_DeleteWishConfirm_Form_Open = 30631, WishList_DeleteWishConfirm_Form_Close = 30632, DeleteWishConfirm_DeleteWish_Btn_Click = 30633, WishInviteFriend_OnFriendListElementEnable = 30634, WishInviteFriend_Friend_AskFor_Btn_Click = 30635, WishList_PrivacySetting_Form_Open = 30636, WishList_PrivacySetting_Form_Close = 30637, WishList_WishHistory_Form_Open = 30638, WishList_WishHistory_Form_Close = 30639, WishList_ViewPrivacyManager_Form_Open = 30640, WishList_ViewPrivacyManager_Close_Open = 30641, WishList_WishDetail_Form_Open = 30642, WishList_WishDetail_Form_Close = 30643, WishList_OperateWishGift_Form_Open = 30644, WishList_OperateWishGift_Form_Close = 30645, WishList_OperateWish_Assist_Wish_Item_Confirm = 30646, WishList_WishHistory_History_Item_Head_Click = 30647, WishList_OperateWish_Receive_Btn_Click = 30648, WishList_WishItem_Detail_Btn_Click = 30649, WishList_PresentWishPoint_Btn_Click = 30650, WishList_JumpGiftCenter_Btn_Click = 30651, WishList_AddWishSuccess_Form_Open = 30652, WishList_AddWishSuccess_Form_Close = 30653, WishList_AddWishSuccess_Confirm_Btn_Click = 30654, Settings_AutoAddWishSwitch = 30655, WishList_PrivacySetting_AskForManager_Rule_Btn_Click = 30656, WishList_WishHistory_SwitchDeleteMode_Btn_Click = 30657, Settings_WishMallExchangableSwitch = 30658, WishSquare_Form_Open = 30659, WishSquare_Form_Close = 30660, WishSquare_MyWishList_Btn_Click = 30661, WishSquare_Rule_Btn_Click = 30662, WishSquare_Item_WishListBtn_Click = 30663, WishList_WishHistory_Delete_Btn_Click = 30664, WishList_ShareWishList_Btn_Click = 30665, WishList_WishHistory_Delete_Confirm_Btn_Click = 30666, WishList_List_OnSwapStart = 30667, WishList_List_OnSwapEnd = 30668, WishList_GiftSendAnimationPlayOver = 30669, WishList_GiftOpenAnimationPlayOver = 30670, WishSquare_Item_JumpGiftCenter_Btn_Click = 30671, WishSquare_OnClickToSearchFriend = 30672, WishSquare_OnClickToClearSearchFriendInput = 30673, WishSquare_SearchFriendInput_OnValueChanged = 30674, WishList_ConfirmEdit_Btn_Click = 30675, WishList_AssistSuccAndShareToFriend = 30676, WishSquare_ItemViewShowed = 30677, WishList_Master_WishSquare_Btn_Click = 30678, WishList_Guest_WishSquare_Btn_Click = 30679, WishMall_OpenForm = 30680, WishMall_CloseForm = 30681, WishList_WishDetail_PrayFor_Btn_Click = 30682, WishList_WishConfirmPray_Form_Open = 30683, WishList_WishConfirmPray_Form_Close = 30684, WishList_WishConfirmPray_PrayFor_Btn_Click = 30685, WishList_PrivacySetting_SyncWishDataToCampService_RuleBtnClick = 30686, Settings_SyncWishDataToCampServiceSwitch = 30687, WishList_AddWishFirstTip_Form_Open = 30688, WishList_AddWishFirstTip_Form_Close = 30689, WishList_AddWishFirstTip_Confirm_Btn_Click = 30690, WishSquare_List_Scroll = 30691, MultiCampHeroInfo_ScoreAniEnd = 30700, MultiCampHeroInfo_ShowCampSurrenderEnd = 30701, Appearance_EditActionElementEnable = 30710, Appearance_EditActionListChanged = 30711, Appearance_EditPosterElementEnable = 30712, Appearance_EditPosterListChanged = 30713, Appearance_EditPosterStyleElementEnable = 30714, Appearance_EditPosterStyleListChanged = 30715, Appearance_EditConfirm = 30716, Appearance_EditUndo = 30717, Appearance_EditRedo = 30718, Appearance_EditRevert = 30719, Appearance_GroupNameChange = 30720, Player_Info_ShowAppearance = 30721, Player_Info_ShowHero = 30722, Appearance_ConfirmAdd = 30723, Appearance_ReturnFromAdd = 30724, Appearance_CancelAdd = 30725, Appearance_AddGroupElementEnable = 30726, Appearance_AddGroupSelectChanged = 30727, Appearance_SwitchGender = 30728, Appearance_SwitchGenderConfirm = 30729, Appearance_SettingHeroCard = 30730, Appearance_SettingAppearanceCard = 30731, Appearance_SettingESportsCard = 30732, Appearance_OpenSettingLoadingCard = 30734, Appearance_CloseSettingLoadingCard = 30735, Player_Info_TutorPlayerAppearance = 30736, Appearance_ClickSetting = 30737, Appearance_CustomStyleItemEnable = 30738, Appearance_CustomStyleItemClick = 30739, Appearance_ConfirmReplace = 30740, Appearance_ReturnFromReplace = 30741, Appearance_CancelReplace = 30742, Appearance_ReplaceGroupElementEnable = 30743, Appearance_ReplaceFinish = 30744, Appearance_CustomPreviewEnd = 30745, Appearance_ExitFromTutor = 30746, Appearance_NoticeSetCardConfirm = 30747, Appearance_OnePreviewSwitchDone = 30748, Appearance_OnePreviewCardEnable = 30749, Appearance_CustomSuitItemElementEnable = 30750, Appearance_CustomSuitItemClick = 30751, Appearance_ShowInvisible = 30752, Appearance_JumpOut = 30753, Appearance_OpenForm = 30754, Appearance_CloseForm = 30755, Appearance_ConfirmSwitchGender = 30756, Apeearance_WaitGenderChangeEnd = 30757, Report_Fail_ClickQte = 30765, Report_Fail_ReportVideoUploadNo = 30796, Report_Fail_ReportVideoUploadYes = 30797, Report_FakeWaitingBoxTimeout = 30798, Report_Fail_ReportCustomerService = 30799, UserBackflow_OnClickOpenLetter = 30800, UserBackflow_OnClickAcceptGift = 30801, UserBackflow_OnClickGetReward = 30802, UserBackflow_OnClickNotifyFriend = 30803, UserBackflow_OnFriendElementEnable = 30804, UserBackflow_OnSelectFriend = 30805, UserBackflow_OnCloseFriendForm = 30806, UserBackflow_OnRealClickNotifyFriend = 30807, UserBackflow_OnClickEnterBattle = 30808, UserBackflow_ShowNextDialogue = 30809, HeroExpCardExchange_OnRewardElementEnable = 30810, HeroExpCardExchange_OnClickReward = 30811, HeroExpCardExchange_OnOpenForm = 30812, HeroExpCardExchange_OnExpCardElementEnable = 30813, HeroExpCardExchange_OnClickExpCard = 30814, HeroExpCardExchange_OnClickAddExpCard = 30815, HeroExpCardExchange_OnClickDecreaseExpCard = 30816, HeroExpCardExchange_OnClickExchange = 30817, HeroExpCardExchange_OnClickComfirmExchange = 30818, HeroExpCardExchange_OnClickCloseExpCardSelectForm = 30819, HeroExpCardExchange_OnRefreshRewardForm = 30820, HeroExpCardExchange_OnCheckDayClearRewardData = 30821, HeroExpCardExchange_OnClickOpenRule = 30822, Custom_Competition_Recommend_Friends = 30900, Custom_Competition_Friend_Recommend = 30901, AppearanceTutor_DressSwitchDone = 30910, AppearanceTutor_SwitchGender = 30911, AppearanceTutor_SelectSuitConfirm = 30912, AppearanceTutor_WearStepNext = 30913, AppearanceTutor_AwardItemEnable = 30914, AppearanceTutor_WearStepWearLater = 30915, AppearanceTutor_WearStepWearNow = 30916, AppearanceTutor_CustomClick = 30917, AppearanceTutor_SettingClick = 30918, AppearanceTutor_RandomClick = 30919, AppearanceTutor_SwitchGenderClick = 30920, AppearanceTutor_ConfirmClick = 30921, AppearanceTutor_ShareCancel = 30922, AppearanceTutor_ShareConfirm = 30923, AppearanceTutor_VideoEnd = 30924, AppearanceTutor_ShareEnd = 30925, Accusation_OnOpen = 30998, Accusation_OnClose = 30999, Common_ToggleBox_Select = 31000, Common_ToggleBox_Confirm = 31001, Common_ToggleBox_Cancel = 31002, MessageBoxWithToggle_OnValueChanged = 31003, Common_InputTextfield_Confirm = 31004, Common_InputTextfield_Cancel = 31005, Custom_Competition_TeamLog_Item_Enable = 31020, Custom_Competition_TeamLog_Menu_Click = 31021, Custom_Competition_CompetitionLog_Item_Enable = 31022, Custom_Competition_CompetitionLog_Item_Click = 31023, Custom_Competition_Invite_Accept_Confirm = 31025, Custom_Team_Product_Buy_Confirm = 31040, Custom_Team_DailyCall = 31041, Custom_Team_Bag_Sub_Menu = 31042, Custom_Team_Bag_Sel_Team_Icon = 31043, Custom_Team_Bag_Confirm_Team_Icon = 31044, Custom_Team_Invite_Offline_Member_Confirm = 31045, Custom_Team_Invite_Offline_Member_Open_MsgBox = 31046, Custom_Team_Show_ActivePT_Rule = 31047, Custom_Team_Open_Share_Form = 31048, Custom_Team_Send_Recommend_Info_Sns = 31049, Custom_Team_Ani_Get_LadderCard_Step = 31050, Custom_Team_Task_Refresh_TimeEnd = 31051, Custom_Competition_Face2Face_Tab_Click = 31058, Custom_Team_CreateRoom_shareWXMsgConfirm = 31059, Custom_Competition_Face2Face_Form_Open = 31060, Custom_Competition_Face2Face_Form_Confirm = 31061, Custom_Competition_Face2Face_Form_Click_Num = 31062, Custom_Competition_Face2Face_Form_Click_Backspace = 31063, Custom_Competition_Face2Face_GPS_Timeout = 31064, Custom_Competition_Face2Face_Form_Num_Down = 31065, Custom_Competition_Face2Face_Form_Num_Up = 31066, Custom_Competition_Face2Face_Help = 31067, Custom_Competition_Face2Face_SelectMap_TimerUpdate = 31068, Custom_Competition_Face2Face_SelectMap_TimerTimeUp = 31069, Custom_Competition_Face2Face_SelectMap_Confirm = 31070, Custom_Competition_Face2Face_SelectMap_Cancel = 31071, Custom_Competition_Face2Face_SelMapExitForm_Confirm = 31072, Custom_Competition_Face2Face_WaitSelectMap_Cancel = 31073, Custom_Competition_Face2Face_WaitSelectMap_TimeUp = 31074, Custom_Competition_Face2Face_SelectMapFormClose = 31075, Custom_Competition_Face2Face_WaitSelectMapFormClose = 31076, Custom_Competition_Face2Face_WaitSelectMapExitConfirm = 31077, Custom_Competition_Face2Face_Room_Form_Open = 31078, Custom_Competition_Face2Face_Team_Form_Open = 31079, Custom_Team_Lobby_Animation_End = 31080, Custom_Team_Platform_Bind = 31081, Custom_Team_Platform_Join = 31082, Custom_Team_Platform_Remind = 31083, Custom_Team_Platform_Query = 31084, Custom_Team_Task_DianZan = 31085, Custom_Team_Task_DianCai = 31086, Custom_Team_CreateRoom = 31087, Custom_Team_CreateRoom_List_Enable = 31088, Custom_Team_CreateRoom_Confirm = 31089, Custom_Team_GetRandTask = 31090, Custom_Team_GetActivePT = 31091, Custom_Team_Bag = 31092, Custom_Team_Bag_Menu = 31093, Custom_Team_Bag_BagItem_Enable = 31094, Custom_Team_Bag_ShopItem_Enable = 31095, Custom_Team_Bag_BagItem_Click = 31096, Custom_Team_Bag_BagItem_Use = 31097, Custom_Team_OpenRandTask = 31098, Custom_Team_Product_Click = 31099, Guild_RedEnvelope_OpenForm = 31100, Guild_RedEnvelope_CloseForm = 31101, Guild_RedEnvelope_Request_More = 31102, Guild_RedEnvelope_Help = 31103, Guild_RedEnvelope_List_Element_Enable = 31104, Guild_RedEnvelope_Load_More = 31105, Guild_RedEnvelope_Capture = 31106, Guild_RedEnvelope_View_Detail = 31107, Guild_RedEnvelope_Record_Enable = 31108, Guild_RedEnvelope_Create_RedEnvelope = 31109, Guild_RedEnvelope_Select_RedEnvelope = 31110, Guild_RedEnvelope_Select_Next_Step = 31111, Guild_RedEnvelope_Condition_Btn_Down = 31112, Guild_RedEnvelope_Condition_Btn_Up = 31113, Guild_RedEnvelope_Send_RedEnvelope = 31114, Guild_RedEnvelope_Send_RedEnvelopeConfirm = 31115, Guild_RedEnvelope_Open_Rank_From = 31116, Guild_RedEnvelope_Rank_Tab_Change = 31117, Guild_RedEnvelope_Rank_Element_Enable = 31118, Guild_RedEnvelope_Create_RedEnvelope_Close = 31119, Guild_RedEnvelope_Close_Rank_Form = 31120, Guild_RedEnvelope_Capture_By_Index = 31121, Guild_RedEnvelope_Load_More_Records = 31122, Guild_RedEnvelope_Back_To_Step1 = 31123, Guild_RedEnvelope_Rule = 31124, Guild_RedEnvelope_Close_Award_Form = 31125, Guild_RedEnvelope_Send_Thankness = 31126, Guild_RedEnvelope_Send_RedEnvelope_SecurePwdConfirm = 31127, Guild_RedEnvelope_Confirm_send = 31128, Guild_RedEnvelope_ConditionFormClose = 31133, Guild_RedEnvelope_ConditionConfirm = 31134, Guild_RedEnvelope_ShowConditionPnl = 31135, Guild_RedEnvelope_SendList_ElemEnable = 31137, Guild_RedEnvelope_Send_HeroOrSkin_Item1_Confirm = 31138, Guild_RedEnvelope_Send_Box_Closed = 31139, Guild_RedEnvelope_Step1_Click_Continue = 31140, Guild_RedEnvelope_Click_Search = 31141, Guild_RedEnvelope_Click_GotoChooseStep = 31142, Guild_RedEnvelope_HeroOrSkin_Rule = 31143, SysRedEnvelope_Capture = 31144, SysRedEnvelope_ViewDetail = 31145, SysRedEnvelope_Detail_SendThanks = 31146, MasterMatch_OpenMainEntry = 31200, MasterMatch_OnCloseMainEntry = 31203, MasterMatch_ClickBeginMatch = 31204, MasterMatch_ClickHelp = 31205, MasterMatch_GotoLadder = 31206, MasterMatch_GotoRank = 31207, MasterMatch_GotoHistory = 31208, MasterMatch_HistoryItemChange = 31209, MasterMatch_ClickHead = 31210, MasterMatch_CloseMainEntry = 31211, MasterMatch_OnOpenMainEntry = 31212, MasterMatch_RefreshTimerChanged = 31213, MasterMatch_GotoLobby = 31214, MasterMatch_GotoRankHistory = 31215, MasterMatch_RankHistoryMenuChange = 31216, MasterMatch_RankHistoryElementEnable = 31217, MasterMatch_ClickGetAward = 31218, MasterMatch_ShowAwardInfo = 31219, MasterMatch_GotoWebUrl = 31220, MasterMatch_OnGet10000Award = 31221, MasterMatch_OnTryOpen5000AwardForm = 31222, MasterMatch_OnGotoWriteAddress = 31223, MasterMatch_OnGotoViewMallProcess = 31224, MasterMatch_OnOpenConfirmCodeForm = 31225, MasterMatch_OnUseConfirmCode = 31226, MasterMatch_OnOpenViewCerForm = 31227, MasterMatch_OnOpenViewNewFuncForm = 31228, MasterMatch_OnOpenHuiZhangHelpForm = 31229, MasterMatch_OnOpenGetHuiZhangHelpForm = 31230, MasterMatch_OnForceGoto5000AwardFormState1 = 31231, MasterMatch_OnForceGoto5000AwardFormState2 = 31232, MasterMatch_OnClose5000AwardForm = 31233, MasterMatch_OnPlayAwardLetterAni = 31234, MasterMatch_OnPlayAwardLerrerAniOver = 31235, MasterMatch_OnPlayAddStarAni = 31236, MasterMatch_OnOpenAwardForm = 31237, MasterMatch_OnRankTypeChange = 31239, MasterMatch_ProtectScoreTipsOpen = 31240, MasterMatch_ProtectScoreTipsClose = 31241, MasterMatch_MasterCertificateTipsOpen = 31242, MasterMatch_MasterCertificateTipsClose = 31243, MasterMatch_GradeDetailStepChgAnimEnd = 31244, MasterMatch_OpenRankTop = 31245, MasterMatch_DropSubMenu = 31246, MasterMatch_AwardInfoTabChange = 31247, MasterMatch_OnWeekSettleFormClose = 31248, MasterMatch_OnChallengeSettleFormClose = 31249, MasterMatch_OnShowChallengeAward = 31250, MasterMatch_OnShareWeekSettle = 31251, MasterMatch_OnShareChallengeSettle = 31252, MasterMatch_MasterWeekRewardRankFrameTipsOpen = 31253, MasterMatch_MasterWeekRewardRankFrameTipsClose = 31254, MasterMatch_ChallengeAward_ClickHelp = 31255, MasterMatch_WeekAward_ClickShowMasterRankFrame = 31256, MasterMatch_WeekAward_ClickScreenShotCancel = 31257, MasterMatch_WeekAward_ClickScreenShotAccept = 31258, Guild_Appoint_Open_Entry = 31300, Guild_Appoint_Close_Entry = 31301, Guild_Appoint_Open_Detail = 31302, Guild_Appoint_Close_Detail = 31303, Guild_Appoint_Add_Friend = 31304, Guild_Appoint_Change_Position = 31305, Guild_Appoint_Toggle_Change = 31306, Guild_Appoint_View_Profile = 31307, Guild_Icon_Manager_Menu_Change = 31400, Guild_Icon_Manager_Icon_Select = 31401, Guild_Icon_Manager_Icon_Use = 31402, Guild_Icon_Manager_Icon_Enable = 31403, Guild_Icon_Manager_Show_Rule = 31404, Guild_Match_Sidebar_Open_PlayerDetailInfo = 31500, ChiJiConfirmPickTransport = 35000, ChiJiCancelPickTransport = 35001, ChiJiPickBornPoint = 35002, ChiJiOnPickBornPointOpened = 35003, ChiJiOnPickBornPointClosed = 35004, ChiJiPickBornPointSmall = 35005, ChijiReturnBigMap = 35006, ChijiTiaoSan_OpenForm = 35010, ChijiTiaoSan_CloseForm = 35011, ChijiTiaoSan_OnOpenForm = 35012, ChijiTiaoSan_OnCloseForm = 35013, ChijiTiaoSan_OnAxisChanged = 35014, ChijiTiaoSan_TiaoSan = 35015, BigMap_Drag_Start = 36001, BigMap_Drag_End = 36002, BigMap_Click_ClearSignal = 36003, BigMap_Slider_OnMapSizeValueChanged = 36004, DeadWatch_Click_HeroItem = 36005, TiaoSan_Slider_OnMapSizeValueChanged = 36101, TiaoSan_Click_ClearSignal = 36102, TiaoSan_Click_Map = 36103, TiaoSan_Map_Drag_Start = 36104, TiaoSan_Map_Drag = 36105, TiaoSan_Map_Drag_End = 36106, TiaoSan_Map_Joystick_Move = 36107, TiaoSan_Map_Joystick_Jump = 36108, TiaoSan_Map_Joystick_Speedup = 36109, TiaoSan_Map_Joystick_Speeddown = 36110, TiaoSan_Map_AddView = 36111, TiaoSan_Map_DecreaseView = 36112, TiaoSan_Map_Follow = 36113, TiaoSan_Map_Invite = 36114, TiaoSan_Map_Agree_Invite = 36115, TiaoSan_Map_Reject_Invite = 36116, TiaoSan_Map_Cancel_Follow = 36117, TiaoSan_Map_Open_FollowPanel = 36118, TiaoSan_Map_Close_FollowPanel = 36119, Settings_Slider_onManualRecordKingTimeEnableChange = 36200, Settings_OnClickManualRecordHelp = 36201, Settings_Slider_onRemoteMomentPrivacy = 36202, Room_CustomDefine_Form_Open = 36300, Room_CustomDefine_Menu_Click = 36301, Room_CustomDefine_Restore_All = 36302, Room_CustomDefine_Restore_Page = 36303, Room_CustomDefine_Set = 36304, Room_CustomDefine_Restore_All_Confirm = 36305, Room_CustomDefine_Cancel = 36306, Room_CustomDefine_Overview = 36307, Room_CustomDefine_Param_OnNotify = 36308, Room_CustomDefine_Recommend_Element_Enable = 36309, Room_CustomDefine_Recommend_Element_View = 36310, Room_CustomDefine_Recommend_Element_Use = 36311, Room_CustomDefine_OverviewTips_Open = 36312, Room_ExternCustomDefine_OpenTips = 36313, Room_OnAnimationEnd = 36314, Room_CustomDefine_SubMenu_Hero_Click = 36315, Room_CustomDefine_SubMenu_Mission_Click = 36316, Matching_MiniChat_LayoutGroupChanged = 36317, Form_Letter_Open = 37000, Form_Letter_Close = 37001, Reddot_UIOpen = 38000, Reddot_UIClose = 38001, KingGoBackTask_OnTaskElementEnable = 39000, KingGoBackTask_OnTaskTabElementEnable = 39001, KingGoBackTask_OnClickTaskTab = 39002, KingGoBackTask_OnClickActiveReward = 39003, KingGoBackTask_OnClickSuperActiveReward = 39004, KingGoBackTask_OnClickGetActiveReward = 39005, KingGoBackTask_OnClickGetActiveSuperReward = 39006, KingGoBackTask_OnHideActiveSuperReward = 39007, KingGoBackTask_OnSuperRewardElementEnable = 39008, KingGoBackTask_OnSuperRewardElementClick = 39009, KingGoBackTask_OnRealClickGetActiveSuperReward = 39010, KingGoBackTask_OnHideFirstEnter = 39011, KingGoBackTask_OnTaskTimeChanged = 39012, KingGoBackTask_OnTaskTimeOver = 39013, KingGoBackTask_OnShowRule = 39014, KingGoBackTask_OnHideRule = 39015, KingGoBackTask_OnFirstEnterAnimationEnd = 39016, KingGoBackTask_OnChooseSuperReward = 39017, UserBackflow_OnClickCloseCG = 39018, UserBackflow_JumpToZhanLing = 39019, UserBackflow_RookieLogOut = 39020, UserBackflow_RookieContinue = 39021, UserBackflow_OpenRookieTipForm = 39022, UserBackflow_CloseRookieTipForm = 39023, UserBackFlow_ConfirmLimitTimerUpdate = 39024, UserBackFlow_ConfirmLimitTimerUp = 39025, UserBackFlow_RookieTip_Confirm = 39026, UserBackFlow_RookieTip_Cancel = 39027, UserBackFlow_MainForm_Close = 39028, UserBackFlow_SecondBattle = 39029, UserBackflowMain_Click_Goto_EveryDayReward = 39030, TEXT_COPY = 40000, TEXT_PASTE_INPUT_BOX = 40001, TEXT_SEARCH_COMPONENT_START = 40002, TEXT_SEARCH_COMPONENT_CLOSE = 40003, Common_SrvTips_LimitDeviceLink = 40004, Common_Click_Open_Info_form = 40005, AvatarShow_OpenShow = 40300, AvatarShow_SuitItemEnable = 40301, AvatarShow_PartItemEnable = 40302, AvatarShow_TabSelect = 40303, AvatarShow_PartTabSelect = 40304, AvatarShow_PartItemSelect = 40305, AvatarShow_Save = 40306, AvatarShow_Recover = 40307, AvatarShow_SuitItemSelect = 40308, AvatarShow_OpenSkinList = 40309, AvatarShow_SkinListEnable = 40310, AvatarShow_SkinListSelect = 40311, AvatarShow_TurnLeft = 40312, AvatarShow_TurnRight = 40313, AvatarShow_IconTiming = 40314, AvatarShow_OnOpen = 40315, AvatarShow_OnClose = 40316, Avatar_BuyAvatarClick = 40317, Avatar_BuyHeroSkin = 40318, AvatarPackBuy_PayToggleChg = 40319, AvatarPackBuy_PaySliderChg = 40320, AvatarPackBuy_BuyGoodsEnable = 40321, AvatarPackBuy_BuyGoodsBatch = 40322, AvatarPackBuy_SaveBuy = 40323, AvatarShow_WearGroupSelect = 40324, AvatarShow_RevertToSkin = 40325, AvatarShow_RevertToLatest = 40326, AvatarOutter_WearGroupSelect = 40327, AvatarOutter_WearGroupEnable = 40328, AvatarShow_JumpToAvatarHtml = 40329, AvatarShow_ClickModel = 40330, AvatarShow_DefaultHeroSelect = 40331, AvatarShow_OpenCommonShare = 40332, AvatarShow_ShareAniPlayTimeAdjust = 40333, AvatarShow_ShareTimerGo = 40334, AvatarShow_ShareAnimPausePlay = 40335, AvatarShow_ShareAnimReplay = 40336, AvatarShow_ShareAnimShare = 40337, AvatarShow_CancelShare = 40338, Avatar_BuyHero = 40339, AvatarShow_SkinListClose = 40340, BundleBuyHeroAndSkin = 40341, AvatarPackSaveReplace_FormOpened = 40342, AvatarPackSaveReplace_ListEnable = 40343, AvatarPackSaveReplace_Confirm = 40344, AvatarPackBuy_OutdateJump = 40345, AvatarShow_OnShowAvatarGroupFeatureDetailDown = 40346, AvatarShow_OpenPoster = 40347, AvatarPackBuy_AvatarGroup = 40348, ExtraIfs_CancelDownload = 40350, ExtraIfs_CancelDownloadConfirm = 40351, ExtraIfs_DownloadStart = 40352, ExtraIfs_DownloadNonWifiPromt = 40353, ExtraIfs_DownloadStartOnUI = 40354, ExtraIfs_DownloadSettingEnterPanel = 40355, ExtraIfs_DownloadPicTimerChg = 40356, ExtraIfs_DownloadMinimize = 40357, ExtraIfs_DownloadSettingEnterBtn = 40358, ExtraIfs_DownloadMinimizeImpl = 40359, ExtraIfs_DownloadFin = 40360, ExtraIfs_DownloadBtnCDTimesUp = 40361, ExtraIfs_DownloadBtnCDTimesGo = 40362, ExtraIfs_DownloadJumpToSettingDownloadPage = 40363, ExtraIfs_InstantDownSelectChg = 40364, ExtraIfs_InstantDownloadPromptConfirm = 40365, ExtraIfs_InstantDownloadPromptCancel = 40366, ExtraIfs_InstantDownloadPrompt = 40367, ExtraIfs_InstantDownloadPromptConfirmOnce = 40368, PreDownload_StartDownload = 40380, PreDownload_PauseDownload = 40381, PreDownload_Uninstall = 40382, PreDownload_Reservation = 40383, PreDownload_Reservation_Confirm = 40384, PreDownload_RewardGetted_Confirm = 40385, PreDownload_Uninstall_Confirm = 40386, PreDownload_PopWindow_GotoSetting = 40387, PreDownload_Pause_Confirm = 40388, PreDownload_Rule_Help = 40389, PreTeam_OpenRecruit = 40400, PreTeam_RecruitSomeone = 40401, PreTeam_RecruitListRefresh = 40402, PreTeam_OpenPreTeamInfo = 40403, PreTeam_RecruitAll = 40404, PreTeam_OpenSignEdit = 40405, PreTeam_OpenBranchEdit = 40406, PreTeam_OpenHeroEdit = 40407, PreTeam_InfoSave = 40408, HeroMultiSelDialog_HeroSelectSave = 40409, PreTeam_BranchInfoSave = 40410, PreTeam_RecruitListEnable = 40411, PreTeam_RecruitListHeroListEnable = 40412, PreTeam_SignSave = 40413, PreTeam_SignStrToggleEnable = 40414, PreTeam_SignStrToggleSelectChg = 40415, PreTeam_BranchSelectionEnable = 40416, PreTeam_ModeSelectionEnable = 40417, HeroMultiSelDialog_HeroTabEnable = 40418, HeroMultiSelDialog_HeroListEnable = 40419, HeroMultiSelDialog_HeroTabSelect = 40420, HeroMultiSelDialog_HeroListSelect = 40421, PreTeam_BranchSelectFrmListEnable = 40422, PreTeam_BranchSelectFrmListSelect = 40423, PreTeam_RecruitBranchEnable = 40424, PreTeam_RecruitRecmdListEnable = 40425, PreTeam_RecruitBranchSelect = 40426, PreTeam_SaveSelectHero = 40427, PreTeam_EnableInfoFromHeroList = 40428, PreTeam_RecruitOpenPlayerProfile = 40429, SplashVideo_VideoError = 40501, SplashVideo_OnSplashFormClose = 40502, MovieState_MoviePlayEnd = 40503, NormalLogin_MoviePlayEnd = 40504, SplashForm_Hide = 40505, SplashForm_Appear = 40506, AR_OpenForm = 41000, AR_CloseForm = 41001, AR_ActBtn = 41002, AR_LightBtn = 41003, AR_LvJing = 41004, AR_MeiYan = 41005, AR_SelectExpandMenu = 41006, AR_ScreenShot = 41007, AR_ClickScreen = 41008, AR_OnLeftRortatModel = 41009, AR_OnRightRortatModel = 41010, AR_CloseShare = 41011, AR_BeginDrag = 41012, AR_EndDrag = 41013, Invite_SendInviteOfflineFriend = 41014, Invite_SendInviteOfflineFriendConfirmed = 41015, AR_StartSlam = 41016, AR_ZhuangShi = 41017, AR_Pendant_Draging = 41018, AR_MAX = 41030, WIFI_PRIVILEGE_HeroItemEnabled = 41032, WIFI_PRIVILEGE_TopBar_OpenForm = 41033, AR_StartVideo = 41034, WIFI_PRIVILEGE_FormTabChanged = 41035, WIFI_PRIVILEGE_OpenMoreHeroUrl = 41037, WIFI_PRIVILEGE_OpenFuliUrl = 41040, WIFI_PRIVILEGE_HeroItemDown = 41041, WIFI_PRIVILEGE_SymbolPageWithLevEnable = 41042, WIFI_PRIVILEGE_SymbolItemEnable = 41043, WIFI_PRIVILEGE_SymbolPageSelect = 41044, WIFI_PRIVILEGE_Form_closed = 41045, WIFI_PRIVILEGE_ContactAdmin = 41046, WIFI_PRIVILEGE_OpenAdUrl = 41047, WIFI_PRIVILEGE_UserAgree = 41048, WIFI_PRIVILEGE_Postpone = 41049, WIFI_PRIVILEGE_Detail = 41050, Invite_SendInviteOfflineNonSNSFriend = 41051, Battle_CloseFiveCampSurrenderTip = 41200, FriendNotification_OnClickExtend = 41251, FriendNotification_OnClickOpenAddFriendInfo = 41252, FriendNotification_OnDragMiniNode = 41253, FriendNotification_OnDragExtendNode = 41254, FriendNotification_OnAddFriendInfoElementEnable = 41255, CommomDrag_OnDragTargetTransform = 41256, FriendNotification_OnClickAddFriendInfoHead = 41257, RecommendPlayer_ClickShowDetailedNode = 41258, RecommendPlayer_ClickComfirmInvitePlayer = 41259, RecommendPlayer_ClickCancelInvitePlayer = 41260, RecommendPlayer_ClickDetailNodeConfirmBtn = 41261, RecommendPlayer_DragRecommendMsg = 41262, RecommendPlayer_ClickCloseDetailedNode = 41263, RecommendPlayer_TimerUp = 41264, SocialCard_ClickPlayAgainWithPlayer = 41265, TeamInvite_OnOpenTeamInviteForm = 41301, TeamInvite_OnClickInviteFriend = 41302, TeamInvite_OnClickAskForInvite = 41303, TeamInvite_OnClickInviteInfoInMatching = 41304, TeamInvite_OnClickAskForInviteInfoInMatching = 41305, TeamInvite_OnAskForInviteElemntEnable = 41306, TeamInvite_OnClickAcceptAskForInviteInfo = 41307, TeamInvite_OnClickRefuseAskForInviteInfo = 41308, TeamInvite_OnClickCloseAskForInviteForm = 41309, TeamInvite_OnClickInviteInfoInRoom = 41310, TeamInvite_OnClickAskForInviteInfoInRoom = 41311, TeamInvite_OnPlayModeSelectElementEnable = 41312, TeamInvite_OnClickPlayModeSelectElement = 41313, TeamInvite_OnOpenPlayModeInfoForm = 41314, TeamInvite_OnClosePlayModeInfoForm = 41315, TeamInvite_OnClickDirectJoinTeam = 41316, TeamInvite_OnClickAddFriend = 41317, TeamInvite_OnClickReservePlayer = 41318, TeamInvite_OnClickReserveAndObPlayer = 41319, TeamInvite_OnClickObOnlyPlayer = 41320, LobbyFriendList_OnClickRankTab = 41321, LobbyFriendList_OnClickFriendTab = 41322, LobbyFriendList_OnFriendElementEnbale = 41323, LobbyFriendList_OnClickExtendFriendNode = 41324, LobbyFriendList_OnClickFriendElement = 41325, LobbyFriendList_OnClickTab = 41326, LobbyFriendList_SendInviteOfflineFriend = 41327, LobbyFriendList_SendInviteOfflineFriendConfirmed = 41328, LobbyFriendList_OnClickChatWithFriend = 41329, LobbyFriendList_OnClickInviteFriend = 41330, LobbyFriendList_OnFriendSimpleElementEnbale = 41331, RefitRoom_MenuList_ItemEnable = 41350, RefitRoom_MenuList_OnSelectChange = 41351, RefitRoom_Form_Close = 41352, RefitRoom_Form_Open = 41353, RefitRoom_Form_Open_Click_From_Hero_Info = 41354, RefitRoom_On_GoTo_Effect_Tab = 41355, RefitRoom_Form_Revert_Visible = 41356, RefitRoom_Form_CloseClick = 41357, RefitRoom_Form_DoClose = 41358, RefitRoom_Form_OnClickToSwitchHero = 41359, RefitRoom_Form_OnInnerSwitchHero = 41360, RefitRoom_Form_OnSelectNewHero = 41361, RefitRoom_On_GoTo_Avatar_Tab = 41362, RefitRoom_On_GoTo_Action_Tab = 41363, RefitRoom_Form_Open_From_SeasonPass = 41364, RefitRoom_ModelDrag = 41365, RefitRoom_Form_Open_From_Trial = 41366, RefitRoom_Form_Open_UseToMultiHero = 41367, RefitRoom_OnUseToMultiHero = 41368, RefitRoom_Form_Close_UseToMultiHero = 41369, RefitRoom_Form_OnSelectElement_UseToMultiHero = 41370, RefitRoom_Form_OnSelectAll_UseToMultiHero = 41371, RefitRoom_Form_OnUnSelectAll_UseToMultiHero = 41372, RefitRoom_Form_Open_UseToOneHero = 41373, RefitRoom_Form_OnSelectElement_UseToOneHero = 41374, RefitRoom_Form_Close_UseToOneHero = 41375, RefitRoom_Form_HeroChoose_OnConfirmBtnClick = 41376, RefitRoom_Form_HeroChoose_OnCloseBtnClick = 41377, RefitRoom_Form_HeroChoose_OnHeroSelect = 41378, RefitRoom_Form_HeroChoose_OnSkinSelect = 41379, RefitRoom_Form_AvatorHeroChoose_OnConfirmBtnClick = 41380, RefitRoom_Form_AvatorHeroChoose_OnCloseBtnClick = 41381, RefitRoom_Form_AvatorHeroChoose_OnHeroSelect = 41382, RefitRoom_Form_Avator_OnSelectSkinChange = 41383, RefitRoom_Form_ClickToShowNowEffects = 41384, On_Jump_To_Refitroom_Avatar_Tab = 41385, RefitRoomChooseHeroSkin_FormOpen = 41386, RefitRoomChooseHeroSkin_ConfirmBtnClick = 41387, RefitRoomChooseHeroSkin_HeroSkinItemChanged = 41388, RefitRoom_Form_SwitchHeroSkin = 41389, RefitRoomSystem_Form_Open = 41390, RefitRoomSystem_Form_Close = 41391, RefitRoomSystem_ChangeWearGroupExtendedPanelVisible = 41392, RefitRoomSystem_HideWearGroupExtendedPanel = 41393, RefitRoomSystem_UpdateWearGroup = 41394, RefitRoomSystem_WearGroupSelect = 41395, RefitRoomSystem_AvatarPanel_RefreshLeftBottomBtns = 41396, RefitRoomSystem_AvatarPanel_SuitGridListOnSelectChanged = 41397, RefitRoomSystem_HeadIcon_Change_Tab_Click = 41398, RefitRoomSystem_HeadIcon_Change_Icon_Click = 41399, RefitRoomSystem_HeadIcon_Change_Confirm = 41400, RefitRoomSystem_HeadIcon_Change_Item_Enable = 41401, RefitRoomSystem_WearGroupPanel_Show = 41402, RefitRoomSystem_WearGroupPanel_Hide = 41403, RefitRoomSystem_InBattlePanel_UpdateUIWithSelectAction = 41404, RefitRoomSystem_InBattlePanel_RefreshActionPanel = 41405, RefitRoomSystem_InBattlePanel_RefreshEffectPanel = 41406, RefitRoomSystem_SelectWearGroupAndAvatar = 41407, RefitRoomSystem_AvatarPanel_RefreshShareEntry = 41408, RefitRoomSystem_RefreshWearGroup = 41409, RefitRoomSystem_Open_Form = 41410, RefitRoomSystem_WearListElementSelect = 41411, RefitRoomSystem_SelectWearGroupAndBattleEffect = 41412, RefitRoomSystem_RefreshWearingPanelSelectionDisplay = 41413, RefitRoom_On_GoTo_Emoji_Tab = 41414, RefitRoomSystem_ClickToSaveHeroSkinSuit = 41415, RefitRoomSystem_SelectWearGroupAndBattleUISkin = 41416, RefitRoomSystem_SaveSkinEffectSuit = 41417, RefitRoomSystem_InBattlePanel_OnUsingActionsListDragEnd = 41418, RefitRoom_On_GoTo_BattleUISkin_Tab = 41419, RefitRoomSystem_AvatarPanel_LoadGameModelComplete = 41420, RefitRoomSystem_SetUI3BGActive = 41421, RefitRoomSystem_SaveHeroSkinSuitAndCloseForm = 41422, RefitRoomSystem_SaveHeroSkinSuitAndSelectWearGroup = 41423, RefitRoomSystem_Form_Close_SaveSuit = 41424, RefitRoomSystem_WearGroupSelectAndSaveSuit = 41425, RefitRoomSystem_SaveHeroSkinSuitWithConfirm = 41426, RefitRoomSystem_SaveHeroSkinSuit = 41427, RefitRoomSystem_RefreshCurResTabType = 41428, RefitRoomSystem_UpdateLeftBottomBtnState = 41429, RefitRoomNewChooseHeroSkin_FormOpen = 41430, RefitRoomNewChooseHeroSkin_HeroJobTypeSelect = 41431, RefitRoomNewChooseHeroSkin_MenuSelect = 41432, RefitRoomNewChooseHeroSkin_HeroSkinItemSelect = 41433, RefitRoomNewChooseHeroSkin_NextStepBtnClick = 41434, RefitRoomNewChooseHeroSkin_ConfirmBtnClick = 41435, RefitRoomBuyPackage_OpenForm = 41436, RefitRoomBuyPackage_Form_Close = 41437, RefitRoomBuyPackage_OnConfirm = 41438, Mall_Avatar_OpenAvatarShopForm = 41700, Mall_Avatar_OpenYouLeForm = 41701, Mall_Avatar_OpenSuiPianShopForm = 41702, Mall_Avatar_OpenHeiShiShopForm = 41703, Mall_Avatar_CloseAvatarForm = 41704, Mall_Avatar_ShopTabChange = 41705, Mall_Avatar_ClosePandora = 41706, Mall_Avatar_Boutique_New_Arrival_Enable = 41707, Mall_Avatar_Boutique_Hot_Sale_Enable = 41708, Mall_Avatar_Boutique_Factory_Product_Click = 41709, Mall_Avatar_Boutique_Factory_Product_Confirm_Buy = 41710, Mall_Avatar_RefreshDiscountTag = 41711, Mall_Avatar_RecmdSuitPackClick = 41712, Mall_Avatar_RecmdSuitPackBuy = 41713, Mall_Avatar_PandoraFormRevertVisible = 41714, Mall_Avatar_PandoraFormRevertHide = 41715, Mall_Avatar_Shop_RevertVisibale = 41716, Mall_Avatar_OpenPurpleCard = 41717, Mall_Hero_CanNotBuyTip = 41718, Mall_Avatar_CloseMagicBallForm = 41719, Mall_Avatar_OnClickMagicBallRule = 41720, Mall_Avatar_OnClickMagicBallRoulette = 41721, Mall_Avatar_OnClickMagicBuyOneButton = 41722, Mall_Avatar_OnClickMagicBuyFiveButton = 41723, Mall_Avatar_OnClickCloseMagicBallAwardTipButton = 41724, Mall_Avatar_OnBuySuccess = 41725, Mall_Avatar_OnConfirmMagicBuyOne = 41726, Mall_Avatar_OnConfirmMagicBuyFive = 41727, Mall_Avatar_OnContinueMagicBuyOneButton = 41728, Mall_Avatar_OnContinueMagicBuyFiveButton = 41729, Mall_Avatar_OnDownloadDisplayIconSuccess = 41730, ShortTips_LoadingTimeUp = 42000, Battle_DeadStrategy_Click = 42001, LobbySystry_CheckWonderfulMoment = 42002, LobbySystry_CloseWonderfulMoment = 42003, Acereplay_CheckRules = 42004, AcereplayRanking_CheckRules = 42005, ShortTips_LoadingStrategyClicked = 42006, GetNewAvatarGroupForm_Open = 42030, GetNewAvatarGroupForm_Close = 42031, GetNewAvatarGroupForm_ShareBtnClick = 42032, AvatarPosterView_Click_BuyAll = 42033, AvatarPosterView_Click_FeatureInteract = 42034, AvatarOutterWearGroup_LeftArrowBtnClick = 42035, AvatarOutterWearGroup_RightArrowBtnClick = 42036, ActionSystem_ActionListItemEnable = 42051, ActionSystem_ActionListItemSelected = 42052, ActionSystem_UsingActionsListItemEnable = 42053, ActionSystem_UsingActionsListItemSelected = 42054, ActionSystem_SortUsingActions = 42055, ActionSystem_Use = 42056, ActionSystem_UnUse = 42057, ActionSystem_FreeGet = 42058, ActionSystem_OnClickBuyInMgrForm = 42059, ActionSystem_OpenBuyActionForm = 42060, ActionSystem_ChooseBuyPackage = 42061, ActionSystem_SortUsingActionsDone = 42062, ActionSystem_OnRecmdHeroClick = 42063, ActionSystem_OnClickBuyInBuyActionForm = 42064, ActionSystem_OnConfirmBuyInBuyActionForm = 42065, ActionSystem_OnCfgItemUITimerUp = 42066, ActionSystem_OnClickHelp = 42067, ActionSystem_OnClickToUnuseActionInEditMode = 42068, ActionSystem_OnBuyActionSucConfirm = 42069, PandoraVideoPlayer_Error = 42101, PandoraVideoPlayer_Event = 42102, PandoraVideoPlayer_OnClickPlay = 42103, PandoraVideoPlayer_PlayVideo = 42104, PandoraVideoPlayer_Begin = 42105, PandoraVideoPlayer_End = 42106, PandoraVideoPlayer_Change_Resolution = 42107, PandoraVideoPlayer_App_Pause = 42108, PandoraVideoPlayer_On_Close = 42109, PandoraVideoPlayer_Can_Set_Next = 42110, PandoraVideoPlayer_Play_Set_Next_Succ = 42111, PandoraVideoPlayer_Play_Set_Next_Fail = 42112, PandoraVideoPlayer_Play_Update_Progress = 42113, PandoraVideoPlayer_Can_Set_Volume = 42114, PandoraVideoPlayer_Download_Video_Success = 42115, PandoraVideoPlayer_Download_Video_Error = 42116, IntimacyRelationship_onClickRule = 42121, Follow_FriendFormTabChange = 42151, Follow_List_ElementEnable = 42152, Follow_CheckInfo = 42153, Follow_Click_PhotoCenter = 42154, Follow_Click_SendButton = 42155, Follow_Click_FollowButton = 42156, Follow_Click_IgnoreFriend = 42157, Follow_Slider_FasnAttention = 42158, PlayerInfo_Click_Follow = 42159, PlayerInfo_Click_UnFollow = 42160, Ranking_Click_Follow = 42161, Follow_Mini_Click_Follow = 42162, Follow_Remove_Following = 42163, PlayerInfo_Real_Click_Follow = 42164, Follow_Common_Click_Follow = 42165, Follow_Common_Click_UnFollow = 42166, Follow_Common_Unfollow_Confirm = 42167, Follow_Delete_Menu_Click = 42168, Follow_Delete_Complete_Click = 42169, Follow_Delete_Click = 42170, Follow_Delete_Followed = 42171, OnPlayerLikeElementEnable = 42210, OnClickPlayerLikeElementHead = 42211, PlayerInfo_OnClickPlayerLike = 42212, PlayerLike_OnClickRule = 42213, PlayerPopularity_OpenForm = 42221, PlayerPopularity_GetReward = 42222, PlayerInfo_OnClickPlayerPopularity = 42223, PlayerInfo_OnTimerUpdatePlayerPopularity = 42224, Symbol_Upgrade_One = 42250, Symbol_Down = 42251, Symbol_Upgrade_Cost = 42252, Symbol_Upgrade_Focus = 42253, Symbol_UpgradePage_Click = 42254, Symbol_Upgrade_Close = 42255, SymbolRcmd_PrevPage = 42256, SymbolRcmd_NextPage = 42257, SymbolRcmd_Positive = 42258, SymbolRcmd_Negative = 42259, SymbolRcmd_HotUseClick = 42260, SymbolRcmd_ConfirmUse = 42261, SymbolRcmd_Confirm_Close = 42262, Symbol_UpgradePage_Rule = 42263, Symbol_Upgrade_Dec = 42264, Symbol_Upgrade_Add = 42265, Symbol_Upgrade_Max = 42266, Symbol_Degrade_Confirm = 42267, Symbol_Replace_All = 42268, SymbolPage_Part_PageItemEnable = 42269, PlayerVisitor_PlayerVisitorElementEnable = 42275, PlayerVisitor_OnClickPlayerVisitorElementHead = 42276, PlayerInfo_OnClickPlayerVisitor = 42277, PlayerInfo_OnLayoutAnimationEnd = 42278, CustomStratege_UseRankGodSymbol = 42299, CustomStrategy_Open_StrategyForm = 42300, CustomStrategy_Edit_Equip = 42301, CustomStrategy_Edit_Symbol = 42302, CustomStrategy_Edit_Tip = 42303, CustomStrategy_DianZan = 42304, CustomStrategy_DianCai = 42305, CustomStrategy_OpenDianZanLstForm = 42306, CustomStrategy_Open_EquipPlanSelForm = 42307, CustomStrategy_SelEquipPlan = 42308, CustomStrategy_SelSymbolPlan = 42309, CustomStrategy_UseOtherEquipPlan = 42310, CustomStrategy_UseOtherEquipPlan_Confirm = 42311, CustomStrategy_EditEquip_Confirm = 42312, CustomStrategy_Open_SymbolPlanSelForm = 42313, CustomStrategy_EditSymbol_Confirm = 42314, CustomStrategy_Open_GodStrategyForm = 42315, CustomStrategy_EditTip_Confirm = 42316, CustomStrategy_OpenOtherSymbolPlan = 42317, CustomStrategy_NextGodStrategy = 42318, CustomStrategy_PrevGodStrategy = 42319, CustomStrategy_JudgeMemLst_ItemEnable = 42320, CustomStrategy_UseOtherSymbolPlan_Confirm = 42321, CustomStrategy_ExpandBtnGroup = 42322, CustomStrategy_OpenReportHarmfulContentForm = 42323, CustomStrategy_OpenCantEditTips = 42324, CustomStrategy_Edit_FoldBtn_PressDown = 42325, CustomStrategy_GodStrategyPreview_Down = 42326, CustomStrategy_ProPlayerPreview_Down = 42327, CustomStrategy_Edit_FoldBtn_PressUp = 42328, CustomStrategy_GodStrategyPreview_Up = 42329, CustomStrategy_ProPlayerPreview_Up = 42330, CustomStratege_oneKeyUseGodStrategy = 42331, CustomStrategy_SelfEquip_FoldBtn_PressDown = 42332, CustomStrategy_SelfEquip_FoldBtn_PressUp = 42333, CustomStrategy_Symbol_FoldBtn_PressDown = 42334, CustomStrategy_Symbol_FoldBtn_PressUp = 42335, CustomStrategy_SelfEquip_JumpBtn = 42336, CustomStrategy_SelfSymbol_JumpBtn = 42337, CustomStrategy_SelfSkill_JumpBtn = 42338, CustomStrategy_SelfEquip_Practice = 42339, CustomStrategy_JumpToVideoContent = 42340, CustomStrategy_OpenVideoContentForm = 42341, CustomStrategy_CloseVideoContentForm = 42342, CustomStrategy_GodStrategySymbolProp_Down = 42343, CustomStrategy_GodStrategySymbolProp_Up = 42344, CustomStrategy_CustomStrategySymbolProp_Down = 42345, CustomStrategy_CustomStrategySymbolProp_Up = 42346, CustomStratege_oneKeyUseCustomStrategy = 42347, CustomStrategy_JumpToHeroAdjust = 42348, CustomStrategy_JumpToMoreVideo = 42349, Common_OpenPersonalSpace = 42350, SymbolRcmd_Hot_Detail = 42351, Symbol_System_Rule = 42352, Symbol_Upgrade_Jump = 42353, Symbol_Upgrade_To_Max = 42354, Symbol_System_Wifi_Rule = 42355, SymbolRcmd_SymbolItemEnable = 42356, Symbol_HeroPageAddClick = 42357, Purchase_BuyHeroSymbolPage = 42358, SymbolRcmd_PropViewDown = 42359, SymbolRcmd_PropViewUp = 42360, ReportHarmfulContent_SelReasonToggle = 42361, ReportHarmfulContent_SendReport = 42362, ReportHarmfulContent_CloseReportForm = 42363, CompetitionHeroSea_RoomBan_TabSel = 42501, CompetitionHeroSea_RoomBan_HeroItemEnable = 42502, CompetitionHeroSea_RoomBan_SelHeroItem = 42503, CompetitionHeroSea_RoomBan_OpenSelHeroForm = 42504, CompetitionHeroSea_RoomBan_SendHeroSelection = 42505, CompetitionHeroSea_RoomBan_ConfirmSendHeroSelection = 42506, CompetitionHeroSea_RoomBan_CloseSelHeroForm = 42507, CompetitionHeroSea_RoomBan_OnClickFastBan = 42508, CompetitionHeroSea_RoomBan_OnFormAppear = 42509, CompetitionHeroSea_RoomFastBan_OnQuitFastBan = 42510, CompetitionHeroSea_RoomFastBan_OnClickCancel = 42511, CompetitionHeroSea_RoomFastBan_OnClickConfirm = 42512, CompetitionHeroSea_RoomFastBan_OnOpen = 42513, CompetitionHeroSea_RoomFastBan_OnClose = 42514, CompetitionHeroSea_RoomFastBan_OnPosChange = 42516, CompetitionHeroSea_RoomFastBan_OnClickHistoryItem = 42517, SeasonPass_Closed = 42550, SeasonPass_Detail_Info = 42551, SeasonPass_BuyLevel_Click = 42552, SeasonPass_Get_Reward_Click = 42553, SeasonPass_Get_AllReward_Click = 42554, SeasonPass_Buy_Pass_Click = 42555, SeasonPass_RewardItem_Click = 42556, SeasonPass_Reward_Preview_Click = 42557, SeasonPass_TabMenu_Selected = 42558, SeasonPass_RewardItem_Enable = 42559, SeasonPass_OpenForm = 42560, SeasonPass_ChangeStage = 42561, SeasonPass_Preview_Close = 42562, SeasonPass_Preview_FreeRewardEnable = 42563, SeasonPass_Preview_AdvanceRewardEnable = 42564, SeasonPass_BuyForm_Close = 42565, SeasonPass_Ask = 42566, SeasonPass_Buy_Pass = 42567, SeasonPass_BuyLevelForm_Close = 42568, SeasonPass_Buy_Level = 42569, SeasonPassMission_ChangeWeek = 42570, SeasonPassMission_Mission_Add_Rule = 42571, SeasonPassMission_Chanllenge = 42572, SeasonPassExchange_Exchange = 42573, SeasonPassChanllenge_Item_Enable = 42574, SeasonPassMission_ExtraExp_Click = 42575, SeasonPassMission_Item_Enable = 42576, SeasonPassExchange_Item_Enable = 42577, SeasonPass_JumpToMission = 42578, SeasonPass_Buy_Level_Confirm = 42579, SeasonPass_Share = 42580, SeasonPass_Upgrade_Level = 42581, SeasonPassExchange_Preview_Item = 42582, SeasonPass_Advance_GetReward = 42583, SeasonPass_Buy_Level_Tip = 42584, SeasonPassChanllenge_Get_Rewards = 42585, SeasonPass_Buy_Pass_Confirm = 42586, SeasonPass_TrySelectAvatarReward = 42587, SeasonPassAnimation_Unlock_Ended = 42588, SeasonPass_CreateNode_Timer = 42589, SeasonPass_Show_SkinOrHero = 42590, SeasonPass_JumpToExchange = 42591, SeasonPass_UnlockForm_TimerEnd = 42592, SeasonPass_UnlockForm_Close = 42593, SeasonPassMission_Mission_TimeEnd = 42594, SeasonPass_JumpToHeadIcon = 42595, SeasonPass_JumpToCrediteScore = 42596, SeasonPass_JumpToReward = 42597, SeasonPass_OnConfirmForFriend = 42598, SeasonPass_Form_Appear = 42599, SeasonPass_BuyLevel_Add = 42600, SeasonPass_BuyLevel_Dec = 42601, SeasonPass_BuyLevel_ElementEnable = 42602, SeasonPass_BuyLevel_WithOutBuyPass = 42603, SeasonPass_Upgrade_ElementEnable = 42604, SeasonPass_Upgrade_Share = 42605, SeasonPass_Open_Upgrade_Tip = 42606, SeasonPass_Guide_Buy_Click = 42607, SeasonPass_Mission_Watch_UnOpen = 42608, SeasonPass_Form_Hide = 42609, SeasonPass_Watch_Click = 42610, SeasonPass_Refresh_Mission = 42611, SeasonPass_Refresh_Confirm = 42612, SeasonPass_StillBuyIgnoreHaveGift = 42613, SeasonPass_MainTab_Enable = 42614, SeasonPass_Reward_Scroll = 42615, SeasonPass_Return_Click = 42616, SeasonPass_Prize_AdvanceClick = 42617, SeasonPass_Prize_FreeClick = 42618, SeasonPass_Gift_Click = 42619, SeasonPass_Preview_Item_Click = 42620, SeasonPass_ReturnToCurLevel = 42621, SeasonPass_Guide_Advance_Click = 42622, SeasonPass_Guide_Item_Click = 42623, SeasonPass_ProcessUnlock_TimerEnd = 42624, SeasonPass_ProcessUnlock_Continue = 42625, SeasonPass_ProcessVideo_After = 42626, SeasonPass_ProcessUnlock_CloseForm = 42627, SeasonPass_Buy_Level_WithOutSale = 42628, SeasonPass_UnlockProcess_AnimationEnd = 42629, SeasonPass_UnlockProcess_ShowSkin_AnimationEnd = 42630, SeasonPass_UnlockProcess_ShowSkinChoose_AnimationEnd = 42631, SeasonPsss_Preview_Callback = 42632, SeasonPass_Show_SkinOrHero_Extra = 42633, SeasonPass_Growing_Tab_Selected = 42634, SeasonPass_Growing_OnSelectHistoryItemChanged = 42635, SeasonPass_Growing_OnSeasonHistoryListItem_Enable = 42636, SeasonPass_ShareForm_OnClose = 42637, SeasonPass_AwardItem_DetailBtnOnClick = 42638, SeasonPass_Open_Target_Tab = 42639, SeasonPass_ShowSeasonVideo_OnClick = 42640, SeasonPass_LevelRank_OnClick = 42641, SeasonPass_HistoryLevelRank_OnClick = 42642, SeasonPass_RankReward_OnClick = 42643, SeasonPass_RankRewardTitle_OnClick = 42644, SeasonPass_RankRewardItem_Enable = 42645, SeasonPass_HistoryLevelRank_MenuChanged = 42646, SeasonPass_LevelRank_Rule = 42647, SeasonPass_HistoryLevelRank_ElementEnable = 42648, SeasonPass_TeamExperience = 42649, SeasonPass_ProcessAdvancedTutor_After = 42650, Offline_Matching_Click = 42705, Offline_Matching_Close = 42706, Offline_Matching_BtnGroup_Click = 42707, Offline_Matching_RuleView = 42708, Offline_Matching_CloseConfirm = 42709, Offline_Matching_StartGame = 42710, Offline_Matching_OpenForm = 42711, Offline_Matching_CloseForm = 42712, UserBackFlowEquip_OnClickOneKeyUseSuit = 42729, UserBackFlowMain_OpenForm = 42730, UserBackFlowMain_OnClickCumulativeLogin = 42731, UserBackFlowMain_OnClickTask = 42732, UserBackFlowMain_OnClickEquip = 42733, UserBackFlowMain_OnClickNews = 42734, UserBackFlowEquip_SymbolDown = 42735, UserBackFlowEquip_SymbolUp = 42736, UserBackFlowEquip_Click_More = 42737, UserBackFlowEquip_Click_Practice = 42738, UserBackFlowEquip_Click_Video = 42739, UserBackFlowEquip_FullScreenVideoEnd = 42740, UserBackFlowEquip_OnHeroHeadEnable = 42741, UserBackFlowEquip_OnClickHeroHead = 42742, UserBackFlowNews_OnClickLeftArrow = 42743, UserBackFlowNews_OnClickRightArrow = 42744, UserBackFlowNews_OnClickJumpToTargetForm = 42745, UserBackFlowNews_OnClickJumpToTargetUrl = 42746, UserBackFlowEquip_OnClickMoreEquip = 42747, UserBackFlowEquip_OnClickMoreSymbol = 42748, UserBackFlowLogin_OnClickGetReward = 42749, UserBackFlowLogin_OnClickShowSuperReward = 42750, UserBackFlowLogin_OnSuperRewardElementEnable = 42751, UserBackFlowLogin_OnClickSuperRewardElement = 42752, UserBackFlowLogin_OnClickSelectSuperReward = 42753, UserBackFlowLogin_OnRealSelectSuperReward = 42754, UserBackFlowLogin_OnClickNormalItemTip = 42755, UserBackFlowMain_OnClickDiscount = 42756, UserBackFlowDiscount_OnClickBuy = 42757, UserBackFlowDiscount_OnClickGetDayReward = 42758, UserBackFlowDiscount_JumpToMall = 42759, UserBackFlowDiscount_JumpToCommunity = 42760, UserBackFlowMain_OnClickTeHuiTab = 42761, UserBackflow_ButtonDelay_TimeEnd = 42762, UserBackflow_OnClickEnterBattle_Immediate = 42763, UserBackflow_OnClickEnterBattle_Delay = 42764, UserBackFlowMain_OnClickDiscountZhanLing = 42765, UserBackFlowMain_OnClickBackPeak = 42766, UserBackFlowMain_OnClickBackPeak_Jump = 42767, UserBackFlowMain_OnClickBackflowTrial = 42768, UserBackflow_OnBackflowTrialShowRule = 42769, UserBackflow_BackflowTrial_ActivateConfirm = 42770, UserBackflow_BackflowTrial_ShowDetailInfo = 42771, UserBackflow_BackflowTrial_OnClickBuy = 42772, UserBackflow_BackflowTrial_ShowDetailSkins = 42773, UserBackflow_BackflowTrial_OnClickStageReward = 42774, UserBackflow_BackflowTrial_OnBuyTrialTimeUp = 42775, UserBackflow_BackflowTrial_OnBuyTrialTimeChanged = 42776, UserBackflow_BackflowTrial_OnTrialTimeUp = 42777, UserBackflow_BackflowTrial_OnTrialTimeChanged = 42778, UserBackflow_BackflowTrial_OnTrialDetailFormClose = 42779, UserBackflow_BackflowTrial_OnTrialSkinPreviewFormClose = 42780, Friendship_OnClickFriendshipInfo = 42781, Friendship_OnClickFriendshipShop = 42782, Friendship_OnClickFriendshipMain = 42783, Friendship_OnClickFriendshipInfoRule = 42784, Friendship_OnClickUBFMaskRule = 42785, Friendship_OnClickFriendshipShopRule = 42786, Friendship_OnClickFriendshipTeam = 42787, Friendship_OnClickUBFMask = 42788, Friendship_OnClickkPointRecord = 42789, Friendship_OnRecordElementEnable = 42790, FriendshipShop_OnHeroElementEnable = 42791, FriendshipShop_OnSkinElementEnable = 42792, FriendshipShop_OnPropElementEnable = 42793, FriendshipShop_OnClickBuyHero = 42794, FriendshipShop_OnClickBuySkin = 42795, FriendshipShop_OnClickBuyProp = 42796, FriendshipShop_OnClickBuyHeroComfirm = 42797, FriendshipShop_OnClickBuySkinComfirm = 42798, FriendshipShop_OnClickBuyPropComfirm = 42799, FriendshipShop_OnClickTabHero = 42800, FriendshipShop_OnClickTabSkin = 42801, FriendshipShop_OnClickTabProp = 42802, FriendshipShop_OnTimeChanged = 42803, FriendshipShop_OnClickItemTip = 42804, Friendship_OnClickShowBackflow = 42805, Friendship_OnBackflowFriendElementEnable = 42806, Friendship_OnClickBackflowFriendElementHead = 42807, UserBackflow_SecondBattleGuide_StartBattle = 42808, UserBackflow_SecondBattleGuide_BattleLater = 42809, UserBackflow_SecondBattleGuide_RewardItemEnable = 42810, UserBackFlowMain_OnClickSecondBattle = 42811, UserBackFlowMain_OnClickStartSecondBattle = 42812, Symbol_OpenChangeHeroForm = 42901, Symbol_HeroListItemClick = 42902, Symbol_GetCoinClick = 42903, Symbol_OnOpenGetForm = 42904, Symbol_OnCloseGetForm = 42905, Symbol_OnGetListElementEnable = 42906, Symbol_OnGetListElementJumpClick = 42907, Symbol_Exange_OnOpenForm = 42908, Symbol_Exange_OnCloseForm = 42909, Symbol_Exange_OnAddBuyCount = 42910, Symbol_Exange_OnSubBuyCount = 42911, Symbol_Exange_OnBuyByCoinClick = 42912, Symbol_Exange_OnBuyByDiamondClick = 42913, Symbol_Exange_OnBuyByCoinConfirm = 42914, Symbol_Exange_OnBuyByDiamondConfirm = 42915, Symbol_Exange_OnSlideCountChange = 42916, Symbol_Exange_OnExchangeSuccess = 42917, Symbol_Exp_OnOpenForm = 42918, Symbol_Exp_OnCloseForm = 42919, Symbol_Exp_OnListElementJumpClick = 42920, Symbol_Exp_OnShowTipsPressUp = 42921, Symbol_Exp_OnShowTipsPressDown = 42922, Symbol_Exp_OnHelpBtnClick = 42923, Symbol_SuitRecommend_OnCloseForm = 42924, Symbol_Bag_Form_Open = 42925, Symbol_Bag_Form_Close = 42926, Symbol_Bag_Click = 42927, PlayerInfoSystem_Base_ListMenu_Chg = 43001, PlayerInfoSystem_Base_AllEsports_HonorCup_Open = 43002, PlayerInfoSystem_Base_AllEsports_History_Open = 43003, PlayerInfoSystem_Base_AllEsports_Badge_Open = 43004, PlayerInfoSystem_Base_AllEsports_Ability_Chg = 43005, PlayerInfoSystem_Base_AllEsports_Ability_PK = 43006, PlayerInfoSystem_Base_AllEsports_Ability_ShowGraphic = 43007, PlayerInfoSystem_Base_AllEsports_Ability_ShowText = 43008, PlayerInfoSystem_Base_AllEsports_MatchHistory_Open = 43020, PlayerInfoSystem_Base_AllEsports_MatchHistory_Detail_Open = 43021, PlayerInfoSystem_Base_AllEsports_MatchHistory_List_Enable = 43022, PlayerInfoSystem_Base_AllEsports_HonorHistory_Open = 43030, PlayerInfoSystem_Base_AllEsports_HonorHistory_MenuList_Chg = 43031, PlayerInfoSystem_Base_AllEsports_HonorHistory_MenuList_Enable = 43032, PlayerInfoSystem_Base_AllEsports_HonorHistory_KDA_Open = 43033, PlayerInfoSystem_Base_AllEsports_HonorHistory_Detail_Open = 43034, PlayerInfoSystem_Base_AllEsports_HonorHistory_WEISHI_Open = 43035, PlayerInfoSystem_Base_AllEsports_NationCup_Open = 43040, PlayerInfoSystem_Base_AllEsports_NationCup_List_Enable = 43041, PlayerInfoSystem_Base_AllEsports_NationCup_List_Chg = 43042, PlayerInfoSystem_Base_AllEsports_NationCup_List_Choose = 43043, PlayerInfoSystem_Base_AllEsports_NationCup_Share = 43044, AllEsportsHonorShareFormOpenFromLobby = 43045, AllEsportsHonorShareFormOpenFromSettle = 43046, AllEsportsHonorHistoryFormOpenFromSettle = 43047, ObservingPlayerNext = 43200, ObservingPlayerBack = 43201, OnEliminatedWinLoseFormWatch = 43202, OnEliminatedWinLoseQuit = 43203, ObservingPlayerProgressTap = 43300, Project8_OnGodFormationListElementEnable = 51400, Project8_OnHeroDrop = 51402, Project8_OnHeroClick = 51403, Project8_OnHeroDropSlot = 51404, Project8_OnSlotDragStart = 51405, Project8_OnSlotDragEnd = 51406, Project8_OnBgDragStart = 51407, Project8_OnBgDrag = 51408, Project8_OnBgDragEnd = 51409, Project8_OnHeroDragMove = 51410, Project8_OpenHeroCardList = 51411, Project8_CloseHeroCardList = 51412, Project8_RepickHeroCard = 51413, Project8_TryChooseHeroCard = 51414, Project8_BuyExp = 51415, Project8_LockCard = 51416, Project8_ReleaseCard = 51417, Project8_ChooseWatchPlayer = 51418, Project8_ClickBigBg = 51419, Project8_ClickTest = 51420, Project8_SellHero = 51421, Project8_PointEnterSlot = 51422, Project8_PointExitSlot = 51423, Project8_ClickSwitch = 51424, Project8_ClickHeroRelativeBtn = 51425, Project8_ClickHeroDpsBtn = 51426, Project8_ClickSetHero = 51427, Project8_ClickRestHero = 51428, Project8_DropSell = 51429, Project8_SwitchBattleInfo = 51430, Project8_SwitchHeroUpgradeInfo = 51431, Project8_PressHeroDeailEquipItem = 51432, Project8_UnloadEquipClick = 51433, Project8_ChooseEquipClick = 51434, Project8_WatchBack = 51435, Project8_OnSkillDragStart = 51436, Project8_OnSkillDragEnd = 51437, Project8_OnSkillDragMove = 51438, Project8_OnSkillDragObjInit = 51439, Project8_OnSkillDragObjEnd = 51440, Project8_OnSkillDragCancel = 51441, Project8_OnOpenPlayerLevelInfo = 51442, Project8_OnClosePlayerLevelInfo = 51443, Project8_OnSelectEquip_SlotEquipChanged = 51444, Project8_OnSelectEquip_HeroClick = 51445, Project8_OnSelectEquip_DressClick = 51446, Project8_OnClearDepositCard = 51447, Project8_OnClickHeroEquipClose = 51448, Project8_OnClickHeroEquipDress = 51449, Project8_OnHeroEquipSelectChanged = 51450, Project8_OnOpenDepositCardPanel = 51451, Project8_OnCloseDepositCardPanel = 51452, Project8_OnShowCardPoolInfo = 51453, Project8_OnHideCardPoolInfo = 51454, Project8_OnClickChooseEquipClose = 51455, Project8_OnShowDepositRulePanel = 51456, Project8_OnHideDepositRulePanel = 51457, Project8_OnClickGetGiftHero = 51458, Project8_OnClickViewGiftHeroRequest = 51459, Project8_OnClickRequestGiftHero = 51460, Project8_OnClickGiveGiftHero = 51461, Project8_OnClickCloseGiftHeroConfirm = 51462, Project8_OnClickRejectGiftHero = 51463, Project8_OnClickAcceptGiftHero = 51464, Project8_OnEquipBagGiveEquip = 51465, Project8_OnSelectHeroGiveEquip = 51466, Project8_OnShowHeroRelativePanel = 51467, Project8_OnHideHeroRelativePanel = 51468, Project8_OnClickAcceptRescue = 51469, Project8_OnClickRejectRescue = 51470, Project8_OnClickCloseRescueConfirm = 51471, Project8_OnClickAgreeRescueConfirm = 51472, Project8_OnClickFinishPrepare = 51473, Project8_OnClickGotoBattleField = 51474, Project8_OnClickFormationChess = 51475, Project8_OnPressEquipStart = 51476, Project8_OnPressEquipEnd = 51477, Project8_FormClosed = 51478, Project8_OnShowHeroSubRelative1Panel = 51479, Project8_OnShowHeroSubRelative2Panel = 51480, Project8_OnDepositCardTabChange = 51488, Project8_UseRecdArrange = 51489, Project8_RecdArrangeTabIndexChange = 51490, Project8_OpenArrangeInfoPanel = 51491, Project8_CloseArrangeInfoPanel = 51492, Project8_OpenRecdArrangeForm = 51493, Project8_CloseRecdArrangeForm = 51494, Project8_OnRecdArrangeConfirmBtnClick = 51495, Project8_OnOpenRecdArrangeBtnClick = 51496, Project8_OnRecdArrangeListElementEnable = 51497, Project8_OnRecdArrangeFormOpen = 51498, Project8_OnRecdArrangeFormClose = 51499, PVEEquip_OnFormOpen = 51500, PVEEquip_OnFormClose = 51501, PVEEquip_EquipOn = 51502, PVEEquip_Off = 51504, PVEEquip_LevelUp = 51505, PVEEquip_SuitEquipSynthetic = 51506, PVEEquip_SwitchEquipDisplay = 51507, PVEEquip_ClickChoosePage = 51508, PVEEquip_ChooseEquipPage = 51509, PVEEquip_ClickDetail = 51510, PVEEquip_WearOrTakeoffEquip = 51511, PVEEquip_UpgradeEquip = 51512, PVEEquip_HeChengEquip = 51513, PVEEquip_CloseEquipDetail = 51514, PVEEquip_EquipSuitEnalbe = 51515, PVEEquip_OnItemBagFormOpen = 51516, PVEEquip_OnItemBagFormClose = 51517, PVEEquip_OnItemBagItemEnable = 51518, PVEEquip_OnItemBagItemSelectChange = 51519, PVEEquip_ClickSuitDetail = 51520, PVEEquip_CloseSuitDetail = 51521, PVEEquip_ConfirmUseCommonPieces = 51522, PVEEquip_GMWearBtnClick = 51523, PVEEquip_GMWearBtn2Click = 51524, PVEEquip_ChangePageName = 51525, PVEEquip_ConfirmChangePageName = 51526, PVEEquip_CloseLeftDetail = 51527, PVEEquip_CloseRightDetail = 51528, PVEEquip_ChooseEquipPlanBtnClick = 51550, PVEEquip_UseEquipPlanBtnClick = 51551, PVEEquip_ChangePlanNameBtnClick = 51552, PVEEquip_ChangePlanNameConfirmBtnClick = 51553, PVEEquip_OnViewPlanDesc = 51554, PVEEquip_OnClosePlanDesc = 51555, PVEEquip_OnZhanLiTipsAnimEnd = 51556, PVEEquip_OnRightMenuChange = 51557, PVEEquip_OnBagListEnable = 51558, PVEEquip_OnEmptyINGEquipClick = 51559, PVEEquip_OnEquipClickTiHuan = 51560, PVEEquip_OnHeroSelectEquipPlanElementEnable = 51561, PVEEquip_CancelShaiXuan = 51562, Birthday_FriendInvitationCard_OpenForm = 51575, Birthday_FriendInvitationCard_CloseForm = 51576, BluePrintNode_OnPlayVideoFullScreenEnd = 51601, PVEBattle_OnBigBloodAnimaPlayUpdate = 51602, PVEBattle_OnBigBloodAnimaPlayStart = 51603, PVEBattle_OnBigBloodAnimaPlayEnd = 51604, BluePrintNode_OnPlayVideoFullScreenProgress = 51605, PVETalent_SelectGenre_OpenPanel = 52001, PVETalent_SelectGenre_ClosePanel = 52002, PVETalent_OpenMainPanel = 52003, PVETalent_TalentItem_Select = 52005, PVETalent_TalentItem_Click = 52006, PVETalent_TalentItem_ClickDisable = 52007, PVETalent_CloseInfoTip = 52009, PVETalent_SelectGenre_SelectGenre = 52010, PVETalent_SelectGenre_ConfirmGenre = 52011, PVETalent_SelectGenre_SetGenre = 52012, PVETalent_SelectGenre_SelectChange = 52013, PVETalent_SelectGenre_TalentDown = 52014, PVETalent_SelectGenre_TalentUp = 52015, PVETalent_SelectGenre_SkillDown = 52016, PVETalent_SelectGenre_SkillUp = 52017, PVEFuBen_Entry = 52200, PVEFuBen_OnMainClose = 52201, PVEFuBen_OnMainOpen = 52202, PVEFuBen_Main_OpenEquip = 52250, PVEFuBen_Main_OpenBag = 52251, PVEFuBen_Main_CloseEquip = 52252, PVEFuBen_Main_ClsoeBag = 52253, PVEFuBen_Main_OnClickLevelButton = 52254, PVEFuBen_Main_OnClickDifficultyButton = 52255, PVEFuBen_Main_OnClickBack = 52256, PVEFuBen_Main_CreateRoom = 52257, PVEFuBen_Main_StartMatch = 52258, PVEFuBen_Main_OpenFriendRecord = 52259, PVEFuBen_Main_StartSingleMatch = 52260, PVEFuBen_Main_ShowAllRewards = 52261, PVEFuBen_Main_StartTrainLevel = 52362, PVEFuBen_Main_JumpToLvl2Difficult = 52363, PVEFuBen_Main_DownloadLevelRes = 52364, PVEFuBen_Main_FormAppear = 52365, PVEFuBen_Main_OnInitTalentSel = 52366, PVEFuBen_Main_OnConfirmTalentSel = 52367, PVEFuBen_Main_OnClickToOpenChat = 52368, PVEFuBen_Main_OnClickToOpenFace2Face = 52369, PVEFuBen_Main_BaiKe = 52371, PVEFuBen_Main_OnSendTalentSel = 52372, PVEFuBen_Main_UseRewardChanceToggle = 52373, PVEFuBen_Main_ConfirmNotUseRewardChance = 52374, PVEFuBen_Main_ConfirmNotUseRewardChanceCancel = 52375, PVEFuBen_Main_DownloadLevelResNoWifiPromot = 52376, PVEFuBen_Main_FaceToFaceDifficultySelect = 52377, PVEFuBen_Main_FaceToFaceDifficultyConfirm = 52378, PVEFuBen_Main_FaceToFaceDifficultyCancel = 52379, PVEFuBen_Main_Mall = 52380, PVEFuBen_Main_OpenRelationGiftRule = 52381, PVEFuBen_OpenVideoForm = 52382, PVEFuBen_OnVideoFormOpen = 52383, PVEFuBen_PlayVideo1 = 52384, PVEFuBen_PlayVideo2 = 52385, PVE_Match_ConfirmNotAutoMatch = 52400, PVE_Match_ConfirmNotAutoMatchCancel = 52401, PVE_Match_ConfirmNotUseRewardChance = 52402, PVE_Match_ConfirmNotUseRewardChanceCancel = 52403, PVE_Match_CloseChangeMode = 52404, PVEJWTalent_OpenForm = 52501, PVEJWTalent_CloseForm = 52502, PVEJWTalent_OnOpen = 52503, PVEJWTalent_OnClose = 52504, PVEJWTalent_OnChangeTalentType = 52505, PVEJWTalent_ClickHeChengTalent = 52506, PVEJWTalent_OnClickOneTalent = 52507, PVEJWTalent_OnClickOneTalentParm = 52508, PVEJWTalent_OnCloseTalentDetail = 52509, PVEJWTalent_ConfirmUseCommonPieces = 52510, PVEJWTalent_GMTalentLevel1 = 52511, PVEJWTalent_GMTalentLevel2 = 52512, PVEJWTalent_GMTalentLevel3 = 52513, PVEJWTalent_OpenSkillDetail = 52514, PVEJWTalent_CloseSkillDetail = 52515, PVEEquipTalent_TabIndexChange = 52601, PVEEquipTalent_CloseBtnClick = 52602, PVEEquipTalent_OpenForm = 52603, PVESelectHero_UseRewardChance = 52640, PVESelectHero_HoldAffix = 52641, PVESelectHero_HoldAffixEnd = 52642, HeroCustomOverview_Open_Form = 52650, HeroCustomOverview_Close_Form = 52651, HeroCustomOverview_Hide_All_Tab = 52652, HeroCustomOverview_On_Select_SubTab = 52653, HeroCustomOverview_Part_Job_Selected = 52654, HeroCustomOverview_Part_Item_Enable = 52655, HeroCustomOverview_Part_Not_Own_Changed = 52656, HeroCustomOverview_Part_Sort_Btn_Click = 52657, HeroCustomOverview_Part_Sort_Select = 52658, HeroCustomOverview_Part_Item_Select = 52659, HeroCustomOverview_Action_Job_Selected = 52660, HeroCustomOverview_Action_Item_Enable = 52661, HeroCustomOverview_Action_Not_Own_Changed = 52662, HeroCustomOverview_Action_Sort_Btn_Click = 52663, HeroCustomOverview_Action_Sort_Select = 52664, HeroCustomOverview_Action_Item_Select = 52665, HeroCustomOverview_Effect_Use_Scrope_Selected = 52666, HeroCustomOverview_Effect_Item_Enable = 52667, HeroCustomOverview_Effect_Not_Own_Changed = 52668, HeroCustomOverview_Effect_Sort_Btn_Click = 52669, HeroCustomOverview_Effect_Sort_Select = 52670, HeroCustomOverview_Effect_Item_Select = 52671, HeroCustomOverview_Menu_Item_Select = 52672, HeroCustomOverview_ChooseHeroMenuSelect = 52673, HeroCustomOverview_Menu_Item_Enable = 52674, HeroCustomOverview_Effect_SubTab_Change = 52675, HeroCustomOverview_Form_Appear = 52676, HeroCustomOverview_SkyScreen_Item_Enable = 52677, HeroCustomOverview_SkyScreen_Item_Select = 52678, HeroCustomOverview_SkyScreen_ExpTime_End = 52679, HeroCustomOverview_SkyScreen_Form_Open = 52680, HeroCustomOverview_SkyScreen_Form_Close = 52681, HeroCustomOverview_SkyScreenForm_Item_Select = 52682, HeroCustomOverview_SkyScreen_Use_Btn_Click = 52683, HeroCustomOverview_SkyScreen_Get_Btn_Click = 52684, HeroCustomOverview_SkyScreen_Fold_Btn_Click = 52685, HeroCustomOverview_Form_Rule_Btn_Click = 52686, HeroCustomOverview_BattleUISkin_Item_Enable = 52687, HeroCustomOverview_BattleUISkin_Item_Select = 52688, HeroCustomOverview_BattleUISkinForm_HeroSkin_Choose = 52689, HeroCustomOverview_BattleUISkinForm_HeroSkinChoose_Confirm = 52690, HeroCustomOverview_BattleUISkinForm_Item_Select = 52691, HeroCustomOverview_BattleUISkinForm_Item_SingleUse = 52692, HeroCustomOverview_BattleUISkinForm_Item_MultiUse = 52693, HeroCustomOverview_BattleUISkinForm_ItemMultiUse_Confirm = 52694, HeroCustomOverview_BattleUISkinForm_Item_Get = 52695, HeroSkinChooseForm_OnCheckBoxChange = 52696, HeroCustomOverview_BattleUISkinForm_Item_HeroSkin_Jump = 52697, HeroCustomOverview_BattleUISkin_Form_Open = 52698, HeroCustomOverview_BattleUISkin_Jump = 52699, Project8_OnOpenEntry = 52700, Project8_OnSkillClick = 52701, Project8_OnEntryFormClosed = 52702, Project8_OnSkillReplace = 52703, Project8_OnSkillDelete = 52704, Project8_OnSkillPress = 52705, Project8_OnHoldEmptyArea = 52706, Project8_OnHoldEmptyAreaEnd = 52707, Project8_OnPlayerUpgradePromptConfirm = 52708, Project8_CloseGlobalInfoForm = 52709, Project8_OpenBattleHeroGlobalInfo = 52710, Project8_OpenRestHeroGlobalInfo = 52711, Project8_OpenGlobalInfoForm = 52712, Project8_OnOpenBackGround = 52713, Project8_CloseBackGround = 52714, Project8_OnQuickStartMatch = 52715, Project8_OnCreateTeam = 52716, Project8_OnOpenPlayerCoinInfo = 52717, Project8_OnClosePlayerCoinInfo = 52718, Project8_OnRelativeHeroClicked = 52719, Project8_OnLevelAnimationStart = 52720, Project8_OnLevelModeListSelect = 52721, Project8_OnOpenLevelModeList = 52722, Project8_OnCloseLevelModeList = 52723, Project8_OnBattleRecordBtnClick = 52724, Project8_OnIllustrationBtnClick = 52725, Project8_OnCustomArrangeBtnClick = 52726, Project8_OnTrainBtnClick = 52727, Project8_OnRankBtnClick = 52728, Project8_OnFaceCreateRoom = 52729, Project8_OnClickCloseEquipDetail = 52730, Project8_OnSelectReplaceEquipChanged = 52731, Project8_OnDragEquipStart = 52732, Project8_OnDragEquipMove = 52733, Project8_OnDragEquipEnd = 52734, Project8_OnExtraSlotSaleAll = 52736, Project8_OnCompetitionBtnClick = 52738, Project8_OnExtraSlotDragStart = 52739, Project8_OnExtraSlotDragEnd = 52740, Project8_OnAITraningBtnClick = 52741, Project8_OnTrainEntryClosed = 52742, Project8_OnNoticeBtnClick = 52743, Project8_OnCGBtnClick = 52744, Project8_OnWikiBtnClick = 52745, Project8_OnRankScopeChanged = 52746, Project8_OnRankListScrollChanged = 52747, Project8_OnChooseTalentClick = 52748, Project8_OnOpenTalentBagClick = 52749, Project8_OnOpenTalentChooseClick = 52750, Project8_OnOpenTalentDetailPress = 52751, Project8_OnOpenTalentRootClick = 52752, Project8_OnCloseTalentDetailPress = 52753, Project8_OnArrangeToggleListSelect = 52754, Project8_OnCancleUseRecdArrange = 52755, Project8_OnCloseTalentRoot = 52756, Project8_OnSidebarMenClicked = 52757, Project8_OnDropSellHeroConfirm = 52758, Project8_OnDragEquipDropToHeroItem = 52759, Project8_OnWinLoseFormQuitBattle = 52760, Project8_OnWinLoseFormWatch = 52761, Project8_OnConfirmQuitBattle = 52762, Project8_OnClickEquipItemInBag = 52763, Project8_OnShowAchieveDetail = 52764, Project8_OnHideAchieveDetail = 52765, Project8_OnOpenCardCampCareerInfoPanel = 52766, Project8_OnCloseCardCampCareerInfoPanel = 52767, Project8_ReleaseHeroDeailEquipItem = 52768, Project8_PressHeroDetailCampCareer = 52769, Project8_ReleaseHeroDetailCampCareer = 52770, Project8_PressHeroDetailSkill = 52771, Project8_ReleaseHeroDetailSkill = 52772, Project8_OnCoupleSliderValueChange = 52773, Project8_OnClickSettlementFormationContinue = 52774, Project8_OnShowMyFormation = 52775, Project8_OnShowFriendFormation = 52776, Project8_OnFormationSettleShare = 52777, Project8_OnFormationSettleShareClose = 52778, Project8_OnSettleAchieveShowNextPage = 52779, Trial_CloseForm = 52780, Trial_OpenForm = 52781, Trial_Tabmenu_Changed = 52782, Trial_View_Item_Enable = 52783, Trial_View_Item_Clicked = 52784, Trial_Detail_Retrun_Clicked = 52785, Trial_Mission_Item_Enable = 52786, Trial_Mission_GetReward_Click = 52787, Trial_GiveUp_Click = 52788, Trial_Active_Click = 52789, Trial_Mission_Jump_Click = 52790, Trial_Energy_Click = 52791, Trial_Mission_Completed_Click = 52792, Trial_Active_Confirm = 52793, Trial_GiveUp_Confirm = 52794, Trial_Success_ShowSkinOrHero = 52795, Trial_Enter_Click = 52796, Trial_Guide_Advance_ItemEnable = 52797, Trial_Mission_GetRewardEffect_AnimationEnd = 52798, Trial_Rule_Click = 52799, Trial_Mission_Rule_Click = 52800, Trial_Process_Effect_AnimationEnd = 52801, Trial_Buy_StarLight = 52802, Trial_Guide_Form_Close = 52803, Trial_Refresh_Red_Dot = 52804, Trial_Energy_Hold = 52805, Trial_Energy_Hold_Start = 52806, Trial_Energy_Hold_End = 52807, Trail_Use_Item_Directly = 52808, Trial_WX_Subscrible = 52809, Trial_QQ_Subscrible = 52810, Trial_Subscrible_JUMP = 52811, TrainHero_GotoDreamLand = 52830, TrainHero_OnClickHotEquip = 52831, TrainHero_OnClickStart = 52832, TrainHero_OnclickCancle = 52833, TrainHero_GetFinalReward = 52834, TrainHero_OnClickExchange = 52835, TrainHero_ReturnSelectHero = 52836, TrainHero_OnClickStartConfirm = 52837, TrainHero_OnClickExchangeConfirm = 52838, TrainHero_OnclickCancleConfirm = 52839, TrainHero_OnClickCalcRcmdHero = 52840, TrainHero_OnCalcRcmdHeroVideoEnd = 52841, TrainHero_OnClickUseTrainHeroSymbol = 52842, TrainHero_OnClickRule = 52843, TrainHero_OnClickVictoryTips = 52844, TrainHero_OnFistGetTaskAward = 52845, TrainHero_OnTimeUp = 52846, TrainHero_OnClickChooseCustomHero = 52847, TrainHero_OnChooseHeroConfirm = 52849, Project8Setting_AutoEquipOpen = 52850, Project8Setting_AutoEquipClose = 52851, Project8Setting_TempBuyAreaTypeOpen = 52852, Project8Setting_TempBuyAreaTypeClose = 52853, Project8Setting_CardHighModelSelect = 52854, Project8Setting_CardLowModelSelect = 52855, Project8Setting_OneStepLevelUp = 52856, Project8Setting_GraduallyLevelUp = 52857, Project8Setting_StarUpAnimationOpen = 52858, Project8Setting_StarUpAnimationClose = 52859, Project8Setting_PicIconStyle = 52860, Project8Setting_TextIconStyle = 52861, Project8Setting_GuideModeSelect = 52862, Project8Setting_AdvanceModeSelect = 52863, Project8Setting_CustomizeModeSelect = 52864, Project8Setting_PlayAnimationOpen = 52865, Project8Setting_PlayAnimationClose = 52866, Project8Setting_CardPictureSelect = 52867, Project8Setting_AutoNumenOpen = 52868, Project8Setting_AutoNumenClose = 52869, Project8Setting_JumpFormationOpen = 52870, Project8Setting_JumpFormationClose = 52871, Project8Setting_HeroLevelFirstSort = 52872, Project8Setting_EquipLevelFirstSort = 52873, Project8Setting_Slider_OnUse60FPSChange = 52874, Project8Setting_OnUse60FPSConfirm = 52875, Project8Setting_OnUse60FPSCancle = 52876, Project8Setting_OnKingtimeEnable = 52877, Project8Setting_OnUpgradeConfirmChanged = 52878, Project8Setting_OnRebuildTalentConfirmChanged = 52879, Project8Setting_ShowRelativeIconOpen = 52880, Project8Setting_ShowRelativeIconClose = 52881, Project8Setting_ShowHeroStarIconOpen = 52882, Project8Setting_ShowHeroStarIconClose = 52883, Project8Setting_ClickTempBuyHelp = 52884, Project8Setting_ConfirmChangeUpgradeCfg = 52885, Project8Setting_CancelChangeUpgradeCfg = 52886, Project8Setting_DoubleFingerOpen = 52887, Project8Setting_DoubleClickSceneOpen = 52888, Project8Setting_SceneZoomClose = 52889, Project8Setting_ResolutionChg = 52891, Project8_OnSettleAchieveShowLastPage = 52900, Project8_OnSettleAchievePageChanged = 52901, Project8_OnRankRuleBtnClick = 52902, Project8_OnRankListElementEnable = 52903, Project8_OnCloseHistoryDetail = 52904, Project8_OnSwitchHeroData = 52905, Project8_OnGradeSettleShare = 52906, Project8_OnGradeSettleShareClose = 52907, Project8_OnGamePlaySettingBtnClick = 52910, Project8_PressHeroDetailProp = 52911, Project8_ReleaseHeroDetailProp = 52912, Project8_GetSeasonReward = 52913, Project8_OnRankModeChanged = 52914, Project8_OnSkillCancelIn = 52915, Project8_OnSkillCancelOut = 52916, Project8_OnFastEntry = 52917, Project8_OnSwitchEquipToOther = 52918, Project8_OnFightStatDragStart = 52919, Project8_OnFightStatDragEnd = 52920, Project8_OnClickFightStatShowSelf = 52921, Project8_OnClickFightStatShowTarget = 52922, Project8_OnFirstEntryVideoFinished = 52923, Project8_OnOpenYingDiReplay = 52924, Project8_ShowRewardInfoPanel = 52925, Project8_CloseRewardInfoPanel = 52926, Project8_SettleAnimAchieveInFinish = 52927, Project8_SettleAnimScoreInFinish = 52928, Project8_OnLevelListRankRuleBtnClick = 52929, Project8_OnCloseEntryBtnClick = 52930, Project8_OnShowTalentDetail = 52931, Project8_OnHideTalentDetail = 52932, Project8_OnHistoryButtonClick = 52933, Project8_OnDepositCardItemEnable = 52934, Project8_OnArrangeCampToggleListSelect = 52935, Project8_OnArrangeCarrerToggleListSelect = 52936, Project8_OnCloseOpInfoPanel = 52937, Project8_GotPetGuide = 52938, Project8_OnClickMapShare = 52939, Project8_OnNewItemShowFormClosed = 52940, Project8_NewModeShowEnd = 52941, Project8_OnRebuildTalent = 52942, Project8_OnFoucusRebuildTalentItem = 52943, Project8_OnFormBgDown = 52944, Project8_OnFormBgUp = 52945, Project8_OnShowItemList = 52946, Project8_OnItemListElementClick = 52947, Project8_OnDrawItemPressCampCareerTip = 52948, Project8_OnDrawItemReleaseCampCareerTip = 52949, Project8_OnDrawItemPressPropTip = 52950, Project8_OnDrawItemReleasePropTip = 52951, Project8_OnSwitchDrawItemScene = 52952, Project8_OnRankSubModeChanged = 52953, Project8_Entry_OpenBottomMenu = 52954, Project8_Entry_CloseBottomMenu = 52955, Project8_OnReplaceTalent = 52956, Project8_ReplaceTalentListElementClick = 52957, Project8_OnLoadingSwitchClicked = 52958, Project8_OnSettleFormationItemClick = 52959, Project8_OnSettleFormationBGClick = 52960, Project8_OnGetDailyAwardClick = 52961, Project8_OnDailyAwardTipPress = 52962, Project8_OnDailyAwardTipRelease = 52963, Project8_OnShowBountyMatchEntry = 52964, Project8_OnCopyFormationSwitch = 52965, Project8_OnSettleShowProficiencyDetail = 52966, Project8_OnCopyFormationButtonClick = 52967, Project8_OnSettleGotoLibrary = 52968, Project8_OnSettleGotoGuideWeb = 52969, Project8Couple_OnGiveHeroBtnCick = 53000, Project8Couple_OnGiveSlotHeroSelect = 53001, Project8Couple_OnGiveBattleHeroSelect = 53002, Project8Couple_OnGetHeroGift = 53003, Project8Couple_OnConfirmGiveHeroBtn = 53004, Project8Couple_OnCancleGiveHeroBtn = 53005, Project8Couple_OnAskforHeroBtnCick = 53006, Project8Couple_OnReturnCampCareerPanel = 53007, Project8Couple_OnCampListIndexChange = 53008, Project8Couple_OnCareerListIndexChange = 53009, Project8Couple_OnAskForHeroSelect = 53010, Project8Couple_CloseGiveHeroPanel = 53011, Project8Couple_CloseAskForChooseHeroPanel = 53012, Project8Couple_CloseCampCareerPanel = 53013, Project8Couple_OnGiveEquipBtnCick = 53014, Project8Couple_OnAcceptEquipBtnCick = 53015, Project8Couple_OnCloseEquipConfirmBtnCick = 53016, Project8Couple_OnConfirmGiveEquipBtnCick = 53017, Project8Couple_OnCancelGiveEquipBtnCick = 53018, Project8Couple_OnOpenChooseEquipPanelCick = 53019, Project8Couple_OnCloseChooseEquipPanelCick = 53020, Project8Couple_OnCloseNoEquipTipClick = 53021, Illustration_World_Open = 53200, Illustration_World_Close = 53201, Illustration_World_Camp_Click = 53202, Illustration_World_Hero_Click = 53203, Illustration_World_H5_Click = 53204, Illustration_Camp_Open_By_Hero = 53205, Illustration_Camp_Close = 53206, Illustration_Camp_Hero_Click = 53207, Illustration_Camp_Story_Click = 53208, Illustration_Camp_Share_Click = 53209, Illustration_Camp_Return = 53210, Illustration_Story_Close = 53211, Illustration_Story_Detail_Click = 53212, Illustration_Story_Item_Enable = 53213, Illustration_World_FoldButton = 53214, Illustration_World_ChangeCamp = 53215, Illustration_World_CampItemEnable = 53216, Illustration_Camp_FoldButton = 53217, Illustration_Camp_ChangeCamp = 53218, Illustration_Camp_CampItemEnable = 53219, Illustration_Camp_Flag_Click = 53220, Illustration_HeroCard_Story_Click = 53221, Illustration_Camp_Proficiency_Click = 53222, Illustration_Camp_Rule = 53223, Illustration_Camp_Upgrade_End = 53224, Illustration_Camp_StoryPreivew_ItemEnalbe = 53225, Illustration_Camp_HeroStory_Detail = 53226, Illustration_HeroStoryPreview_Open = 53227, Illustration_HeroStoryPreview_SelectChanged = 53228, Illustration_Camp_HeroStory_Change = 53229, Illustration_HeroCard_Change = 53230, Illustration_CampRefresh_AnimationEnd = 53231, Illustration_World_TransScene_End = 53232, Illustration_TransScene_FadeInAnimation_End = 53233, Illustration_TransScene_FadeOutAnimation_End = 53234, Illustration_HeroStory_Unlock = 53235, Illustration_WorldFormBg_Click = 53236, Illustration_WorldFormBg_DragStart = 53237, Illustration_WorldFormBg_Drag = 53238, Illustration_WorldFormBg_DragEnd = 53239, Illustration_CampBg_Down = 53240, Illustration_CampBg_Up = 53241, Illustration_CampBg_DragStart = 53242, Illustration_CampBg_Drag = 53243, Illustration_CampBg_DragEnd = 53244, Illustration_World_FadeInEnd = 53245, Illustration_Camp_Space_Click = 53250, Illustration_HeroCard_Voice_Click = 53251, Illustration_HeroStory_MenuEnable = 53252, Illustration_HeroStory_PieceClick = 53253, Illustration_Camp_HeroItemEnable = 53254, Illustration_HeroCard_Form_Close = 53255, Illustration_World_Open_After_Video = 53256, Illustration_Hero_Biography_FormOpen = 53257, Illustration_Camp_Upgrade_Share = 53258, Illustration_Camp_Share_Proficiency = 53259, Illustration_CampUpgrade_AnimationEnd = 53260, Illustration_Camp_DownloadResource = 53261, Illustration_Camp_DownloadResource_Confirm = 53262, Illustration_Hero_Biography_FormClose = 53263, CustomLayout_NodePointerDown = 54000, CustomLayout_SavePreset = 54001, CustomLayout_CloseCustomLayout = 54002, CustomLayout_NodePointerUp = 54003, CustomLayout_ResetLayout = 54004, CustomLayout_OpenForm = 54005, CustomLayout_NodeDrag = 54006, CustomLayout_SwitchToThreeSkills = 54007, CustomLayout_SwitchToFourSkills = 54008, CustomLayout_ScaleSliderChange = 54009, CustomLayout_AlphaSliderChange = 54010, CustomLayout_ScaleSliderUp = 54011, CustomLayout_PresetButtonClick = 54012, CustomLayout_ChangePresetNameClick = 54013, CustomLayout_UsePresetClick = 54014, CustomLayout_EditPresetClick = 54015, CustomLayout_ViewPresetClick = 54016, CustomLayout_ClosePresetManageClick = 54017, CustomLayout_OpenPresetManageClick = 54018, CustomLayout_PresetElementEnable = 54019, CustomLayout_PresetNameConfirm = 54020, CustomLayout_MoveLeft = 54021, CustomLayout_MoveRight = 54022, CustomLayout_MoveUp = 54023, CustomLayout_MoveDown = 54024, CustomLayout_SkillSliderChange = 54025, CustomLayout_ControlPanelToggleChange = 54026, CustomLayout_ControlPanelUpArrowClick = 54027, CustomLayout_ControlPanelDownArrowClick = 54028, CommonChooseHero_OnUseClick = 54029, CommonChooseHero_OnCloseClick = 54030, CommonChooseHero_OnHeroSelcted = 54031, CommonChooseHero_OnSelcteAll = 54032, CommonChooseHero_OnUnselectAll = 54033, CustomLayout_OpenChooseHero = 54034, CustomLayout_CloseChooseHero = 54035, CommonChooseHero_OnUseHeros = 54036, CustomLayout_FightForm_UIAnimatorEnd = 54037, CustomLayout_PresetResetConfirmed = 54038, CustomLayout_CloseCustomLayoutConfirmed = 54039, CustomLayout_SavePresetAndQuit = 54040, CustomLayout_ChooseHero_OnHeroUsed = 54041, CustomLayout_Manage_OnPresetSelect = 54042, CustomLayout_SavePresetAndSwitch = 54043, CustomLayout_SwitchPreset = 54044, CustomLayout_CantSwitchSkillClick = 54045, CustomLayout_OnReturnBattleClick = 54046, CustomLayout_OnDragControlBg = 54047, CustomLayout_OnCheckLayoutHasChanged = 54048, Player_Info_Click_Tab_ProData = 54100, Player_Info_Click_Tab_ProIntro = 54101, Player_Info_Click_Tab_ProStrategy = 54102, Player_Info_ProStrategy_Element_Enable = 54103, Player_Info_ProStrategy_ItemClick = 54104, Player_Info_Follow_ProPlayer = 54105, Player_Info_ProIntro_ClickHero = 54106, ProPlayer_Mini_Info_Open_Form = 54107, ProPlayer_Mini_Info_Close_Form = 54108, ProPlayer_Mini_Info_Profile = 54109, ProPlayer_Mini_Info_Follow = 54110, ProPlayer_Click_Video = 54111, Player_Info_Click_Tab_GameLife = 54112, Player_Info_GameLife_DisplayToggleChange = 54113, Player_Info_GameLife_Click_Esports = 54114, Player_Info_GameLife_Season_Select = 54115, Player_Info_GameLife_Confirm_PrivateEsports = 54116, Player_Info_GameLife_Click_DisplayPrivacy = 54117, Player_Info_GameLife_Show_Rule = 54118, Chat_Hero_Select_BranchSelect_Click = 55000, Chat_Hero_Select_BranchBtn_Click = 55001, Chat_Hero_Select_BranchMiniMap_Click = 55002, LobbyMemory_PandoraShowPop = 55010, LobbyMemory_PandoraClosePop = 55011, LobbyMemory_PandoraShowPopNews = 55012, LobbyMemory_PandoraClosePopNews = 55013, LobbyMemory_BlockInitConfirm = 55014, LobbyActivityGameMode_TimerChange = 55021, LobbyActivityGameMode_TimerUp = 55022, LobbyActivityGameMode_Order = 55023, Project8_Task_Form_Open = 55100, Project8_Task_Done_Click = 55101, Project8_Task_Reward_Form_Open = 55102, Project8_Task_Reward_Done_Click = 55103, Project8_Task_Reward_Select_Click = 55104, Project8_Task_Reward_GotoView_Click = 55105, Project8_Task_List_Enable = 55106, Project8_Task_Reward_List_Enable = 55107, Project8_Task_Reward_Rule_Open = 55108, Project8_Task_MenuItemChanged = 55109, Project8_Task_MenuItemEnabled = 55110, Project8_Task_ShowBountyRewardDetail = 55111, Project8_Task_HideBountyRewardDetail = 55112, Project8_Task_OnBountyRewardClick = 55113, UnifiedHeadIcon_OnClickHeadIcon = 55301, Battle_OnClickInBattleMsgRogar = 55351, Battle_OnDragInBattleMsgRogarBtnStart = 55352, Battle_OnDragInBattleMsgRogarBtn = 55353, Battle_OnDragInBattleMsgRogarBtn_End = 55354, Battle_OnRogarInBattleMsgTimerEnd = 55355, Battle_OnClickInBattleMsgRogarBtn = 55356, Battle_OnDragInBattleMsgBtnStart = 55357, Battle_OnDragInBattleMsgBtn = 55358, Battle_OnDragInBattleMsgBtn_End = 55359, Battle_OnDragBigMapHeroIcon_Start = 55360, Battle_OnDragBigMapHeroIcon = 55361, Battle_OnDragBigMapHeroIcon_End = 55362, Battle_OnDragBigMapSignalIcon_Start = 55363, Battle_OnDragBigMapSignalIcon = 55364, Battle_OnDragBigMapSignalIcon_End = 55365, Scene_Hit_Ojbect = 55380, RedEnvelope_Send = 55406, RedEnvelope_RandomBlessingMsg = 55407, RedEnvelope_Send_RedEnvelope = 55409, RedEnvelope_Send_RedEnvelopeConfirm = 55410, RedEnvelope_Send_RedEnvelope_SecurePwdConfirm = 55411, RedEnvelope_Send_HeroOrSkin_Item1_Confirm = 55412, RedEnvelope_FullSrv_Blessing_Element_Enable = 55413, RedEnvelope_FullSrv_OnClick_ChooseFriend = 55414, RedEnvelope_FullSrv_OnSelectElement = 55415, RedEnvelope_FullSrv_OpenChooseFriendForm = 55416, RedEnvelope_FullSrv_OnChooseFriendFormClosed = 55417, RedEnvelope_FullSrv_OpenSendBox = 55418, RedEnvelope_FullSrv_SendBoxClosed = 55419, RedEnvelope_FullSrv_ChangeBlessingListState = 55420, RedEnvelope_Detail_RandomThanks = 55421, RedEnvelope_Detail_SendThanks = 55422, RedEnvelope_Team_OpenSendBox = 55423, RedEnvelope_SendAnimEnd = 55425, RedEnvelope_FullSrv_Send = 55427, RedEnvelope_FullSrv_ClickRule = 55428, RedEnvelope_FullSrv_Close_SendForm = 55429, ValueSelect_MinusBtn_Click = 55430, ValueSelect_MinusBtn_OnHoldStart = 55431, ValueSelect_MinusBtn_OnHold = 55432, ValueSelect_MinusBtn_OnHoldEnd = 55433, ValueSelect_PlusBtn_Click = 55434, ValueSelect_PlusBtn_OnHoldStart = 55435, ValueSelect_PlusBtn_OnHold = 55436, ValueSelect_PlusBtn_OnHoldEnd = 55437, RedEnvelope_ContentItemCnt_Changed = 55438, RedEnvelope_ExtraContentItemCnt_Changed = 55439, RedEnvelope_CopiesCnt_Changed = 55440, RedEnvelope_OnCapture_ShowDetail = 55441, RedEnvelope_FullSrv_ClickOpenTypeList = 55442, RedEnvelope_FullSrv_SelectRedEnvelope = 55443, RedEnvelope_Show_PlayerInfo = 55444, RedEnvelope_Jump_HeroSkinDetal = 55445, RedEnvelope_Form_Password_Open = 55446, RedEnvelope_Form_Password_AddFriend_Click = 55447, RedEnvelope_Form_Password_Send_Click = 55448, RedEnvelope_Send_Menu_Click = 55449, RedEnvelope_Send_Limit_Click = 55450, RedEnvelope_Form_Limit_RankType_Select = 55451, RedEnvelope_Form_Limit_Complete_Click = 55452, RedEnvelope_Send_Question_Click = 55453, RedEnvelope_Form_Question_Submit = 55454, RedEnvelope_Form_Limit_Drop_Provice_Select = 55455, RedEnvelope_Form_Limit_Drop_Limit_Type_Select = 55456, RedEnvelope_Form_Limit_Drop_Branch_Type_Select = 55457, RedEnvelope_Form_Limit_NobeLv_Add = 55458, RedEnvelope_Form_Limit_NobeLv_Sub = 55459, RedEnvelope_Form_Limit_BranchLv_Add = 55460, RedEnvelope_Form_Limit_BranchLv_Sub = 55461, RedEnvelope_Form_Limit_RankStar_Add = 55462, RedEnvelope_Form_Limit_RankStar_Sub = 55463, RedEnvelope_Form_Limit_TopScore_Add = 55464, RedEnvelope_Form_Limit_TopScore_Sub = 55465, RedEnvelope_Form_Capture_Question_Form = 55466, RedEnvelope_Form_Capture_Question_Send_Click = 55467, RedEnvelope_Form_Detail_Open_MiniPlayerInfo = 55468, RedEnvelope_Form_Detail_Close = 55469, FriendChoose_ClearSearchFriend = 55500, FriendChoose_SearchFriend = 55501, FriendChoose_OnFriendListElementEnable = 55502, SPlus_Routeltte_Rule = 55601, SPlus_Routeltte_Treasure_Click = 55602, SPlus_Routeltte_Crystal_ExChange_Click = 55603, SPlus_Routeltte_RewardPool_Click = 55604, SPlus_Treasure_Form_Close = 55605, SPlus_Treasure_ElementEnable = 55606, SPlus_Treasure_GetReward_Click = 55607, SPlus_RewardPool_Crystal_ElementEnable = 55608, SPlus_RewardPool_Effect_ElementEnable = 55609, SPlus_RewardPool_Avatar_ElementEnable = 55610, SPlus_RewardPool_Other_ElementEnable = 55611, SPlus_RewardPool_GroupShow = 55612, Project8Bounty_OnShowEntryConfirm = 55701, Project8Bounty_OnJoinGame = 55702, Project8Bounty_OnRaisingNotify = 55703, Project8Bounty_OnInBattleNoRaise = 55704, Project8Bounty_OnInBattleOptionClick = 55705, Project8Bounty_OnEntryConfirmCostClick = 55706, Project8Bounty_OnSettleShareClick = 55707, Project8Bounty_OnSettleShareClose = 55708, Project8Bounty_OnOpenShop = 55709, Project8Bounty_OnShopItemClick = 55710, Project8Bounty_OnShopItemEnable = 55711, Project8Bounty_OnShowRule = 55712, Project8Bounty_OnShowAdditionalRule = 55713, Project8Bounty_OnSettleFormClose = 55714, Project8Bounty_OnEntryClosed = 55715, Project8Bounty_OnShowMultipleDetail = 55716, Project8Bounty_OnHideMultipleDetail = 55717, Project8Bounty_OnBattleStatShowAdditionalDetail = 55718, Project8Bounty_OnBattleStatHideAdditionalDetail = 55719, Project8Bounty_OnCloseShop = 55720, Project8Bounty_PicGuidePopupClosed = 55721, Project8Bounty_OnConfirmTabChange = 55722, Project8Bounty_OnBuyCoin = 55723, Project8Bounty_OnCancelBuyCoin = 55724, Project8Bounty_OnShowBuyCoinControl = 55725, Project8Bounty_OnRefresh = 55726, Project8Bounty_OnBuyCoinControlClosed = 55727, Project8Bounty_OnOpenStatView = 55728, Project8Bounty_OnCloseStatView = 55729, Project8Bounty_OnStatItemEnable = 55730, Project8Bounty_OnSettleDetail = 55731, Project8Bounty_OnShowBountyEntryRule = 55732, Project8Bounty_OnBattleCoinAnimEnd = 55733, Project8Bounty_OnRevertToVisible = 55734, Project8HotFormation_OnShowMorePlan = 55801, Project8HotFormation_OnOpenCampCareerTip = 55802, Project8HotFormation_OnCloseCampCareerTip = 55803, Project8HotFormation_ListElementEnable = 55804, Project8RuleDetail_OnClickMoreDetail = 55805, Project8UserBack_OnClickAccumulateLoginTab = 55806, Project8UserBack_OnClickHotFormationTab = 55807, Project8UserBack_OnClickRuleDetailTab = 55808, Project8UserBack_OnClickLatestContent = 55809, Project8UserBack_OnOpenForm = 55810, Project8UserBack_OnCloseForm = 55811, Project8UserBack_OnOpenChooseRewardForm = 55812, Project8UserBack_OnChooseRewardConfirm = 55813, Project8UserBack_OnClickGetReward = 55814, Project8UserBack_OnOpenRewardTip = 55815, DefineGiftPick_OnClickToAddItem = 55820, DefineGiftPick_OnClickToDecreaseItem = 55821, DefineGiftPick_OnConfirmToChoose = 55822, DefineGiftPick_OnFormClose = 55823, Project8BackFlowLetter_OnOpenForm = 55826, Project8BackFlowLetter_OnCloseForm = 55827, CardsCollect_Question = 56001, CardsCollect_Close = 56002, CardsCollect_LightCards = 56003, CardsCollect_LightRewardsRight = 56004, CardsCollect_LightRewardAll = 56005, CardsCollect_Mission_GetReward = 56006, CardsCollect_Lottery_Close = 56007, CardsCollect_Lottery_Get = 56008, CardsCollect_OpenForm = 56009, CardsCollect_LightRewardsBottom = 56010, CardsCollect_Lottery_Show = 56011, CardsCollect_Lottery_Notice_Sure = 56012, CardsCollect_Lottery_Notice_Cancle = 56013, CardsCollect_BuyCards_Sure = 56014, CardsCollect_Lottery_Spin_Change = 56015, CardsCollect_Lottery_Spin_End = 56016, CardsCollect_Activity_OpenTaskList = 56017, CardsCollect_Activity_CloseTaskList = 56018, CardsCollect_Activity_OpenLottery = 56019, CardsCollect_Activity_CloseLottery = 56020, CardsCollect_Activity_OpenShare = 56021, CardsCollect_LightRewardLittle = 56022, CardsCollect_LightReward_Rule = 56023, CardsCollect_FormCollectTaskReward_Open = 56024, CardsCollect_FormCollectTaskReward_Close = 56025, CardsCollect_FormLightTaskReward_Open = 56026, CardsCollect_FormLightTaskReward_Close = 56027, CardsCollect_FormCollectLottery_Open = 56028, CardsCollect_FormCollectLottery_Close = 56029, CardsCollect_FormLightLottery_Open = 56030, CardsCollect_FormLightLottery_Close = 56031, CardsCollect_Task_Light_ElementEnable = 56032, CardsCollect_Task_Collect_ElementEnable = 56033, CuiCaptureScreen_DoInitialize = 56034, WeChatCoupon_OpenForm = 56101, WeChatCoupon_CloseForm = 56102, WeChatCoupon_Get = 56103, WeChatCoupon_Use = 56104, WeChatCoupon_Tips = 56105, Chat_RigList_Elem_Disable = 56198, Chat_BigList_Elem_Disable = 56199, FriendShareGift_Invited = 56201, FriendShareGift_Random = 56202, FriendShareGift_Des = 56203, FriendShareGift_OpenForm = 56204, FriendShareGift_CloseForm = 56205, FriendShareGift_ElementEnable = 56206, FriendShareGift_InviteConfirm = 56207, BugReport_OpenForm = 56301, BugReport_CloseForm = 56302, BugReport_OpenOtherQuestion = 56303, BugReport_OpenBugDetail = 56304, BugReport_CloseBugDetail = 56305, BugReport_BugDetailSubmit = 56306, BugReport_HistoryListEnable = 56307, BugReport_HistoryListEnableSelect = 56308, FullScreenEffect_OpenForm = 56309, FullScreenEffect_CloseForm = 56310, HeroSkinVoice_PlayVoice = 56401, HeroSkinVoice_Using = 56402, HeroSkinVoice_FormOpen = 56403, NewShare_OpenForm = 56501, NewShare_CloseForm = 56502, NewShare_Btn_Save = 56503, NewShare_Btn_SavePandora = 56504, NewShare_Btn_Friend = 56505, NewShare_Btn_TimeLine = 56506, NewShare_Btn_ImageLoadSuccess = 56507, NewShare_Btn_ImageLoadFail = 56508, FriendMessageSend_OpenForm = 56601, FriendMessageSend_CloseForm = 56602, FriendMessageSend_Btn_Send = 56603, FriendMessageSend_Btn_Find = 56604, FriendMessageSend_ElementEnable = 56605, FriendMessageSend_InviteConfirm = 56606, WorldMessageSend_OpenForm = 56607, WorldMessageSend_CloseForm = 56608, WorldMessageSend_Btn_Find = 56609, WorldMessageSend_Tog_TotalChannel = 56610, WorldMessageSend_Tog_GuildChannel = 56611, WorldMessageSend_Btn_Send = 56612, WorldMessageSend_Btn_ClickQuickMsg = 56613, WorldMessageSend_QuickMsgElementEnable = 56614, WorldMessageSend_ClickQuickMsgElement = 56615, FriendMessageSend_DropList_ElementEnable = 56616, FriendMessageSend_Confirm_Close = 56617, FriendMessageSend_Clear_Search = 56618, ChatMoudleToPandora = 56619, FriendMessageSend_MenuClicked = 56620, FriendMessageSend_Public_Channel_Clicked = 56621, JumpToEmojiSystem = 56701, Emoji_Button_Editor_Clicked = 56702, Emoji_Button_Cancel_Clicked = 56703, Emoji_Button_Sure_Clicked = 56704, Emoji_Button_JumpAward_Clicked = 56705, Emoji_Button_BuyPack_Clicked = 56706, Emoji_InBattle_OnElementSelect = 56707, Emoji_InBattle_OnElementEnable = 56708, Emoji_Config_Element_JumpMenu = 56709, Emoji_Chat_Button_JumpEditor_Clicked = 56750, Emoji_Chat_Button_Default_Clicked = 56751, Emoji_Chat_Menu_Element_Selected = 56752, Emoji_Chat_Menu_Content_Selected = 56753, Emoji_Button_BuySingle_Clicked = 56767, Emoji_Content_Element_Selected = 56768, Emoji_Menu_Element_Selected = 56769, Emoji_Config_Element_Deleted = 56770, Emoji_Config_Element_Replace = 56771, Emoji_Config_Element_Add_Clicked = 56772, Emoji_Config_Auto_Element_Add_Clicked = 56773, Emoji_AutoConfig_Element_Deleted = 56774, Emoji_AutoConfig_Element_Replace = 56775, Emoji_Content_Element_Pressed = 56776, Emoji_Content_Element_PressEnd = 56777, Form_Emoji_FactoyShop = 56779, Form_Emoji_BuySingle_Open = 56780, Form_Emoji_BuySingle_Close = 56781, Form_Emoji_BuyPack_Open = 56782, Form_Emoji_BuyPack_Close = 56783, Form_Emoji_BuySingle_PriceDianQuan = 56784, Form_Emoji_BuySingle_PriceGold = 56785, EmojiSystem_OnConfirmBuyInBuyEmojiForm = 56786, Form_Emoji_BuyPack_PriceDianQuan = 56787, Form_Emoji_BuyPack_PriceGold = 56788, EmojiSystem_OnConfirmBuyInBuyEmojiPackForm = 56789, Emoji_Button_OnEmojiPartDoInit = 56790, Emoji_Button_Move_Clicked = 56791, Emoji_Drag_Swap_Start = 56792, Emoji_Drag_Swap_End = 56793, Emoji_Wear_ListElement_Enable = 56794, Emoji_SelectHero_Send_Click = 56795, NewFeiYing_OpengForm = 56801, NewFeiYing_CloseForm = 56802, NewFeiYing_JumpNext = 56803, NewFeiYing_CannotShowNowday = 56804, PuertsPost1 = 56901, PuertsPost2 = 56902, PuertsPost3 = 56903, PuertsPost4 = 56904, PuertsPost5 = 56905, PuertsPost6 = 56906, PuertsPost7 = 56907, PuertsPost8 = 56908, PuertsPost9 = 56909, PuertsPost10 = 56910, PuertsPost11 = 56911, PuertsPost12 = 56912, PuertsPost13 = 56913, PuertsPost14 = 56914, PuertsPost15 = 56915, PuertsPost16 = 56916, PuertsPost17 = 56917, PuertsPost18 = 56918, PuertsPost19 = 56919, PuertsUIEventPost = 56920, LoadingChat_ClickCheerUp = 60000, Intimacy_ClickTabAlreadyHave = 60020, Intimacy_ClickTabCanCreate = 60021, Intimacy_ClickIntimacyType = 60022, Intimacy_ClickFirstShowConfirm = 60023, Intimacy_ClickAddTypeConfirm = 60024, Intimacy_ClickOpenIntimacyTypeSelect = 60025, Intimacy_ClickAddRequestTab = 60026, Intimacy_ClickDeleteRequestTab = 60027, Intimacy_OnRequestElementEnable = 60028, Intimacy_OnOpenIntimacyRequest = 60029, Intimacy_ClickEdit = 60030, Intimacy_ClickIntimacyTip = 60031, Intimacy_ClickCloseIntimacyTip = 60032, Intimacy_OnIntimacyRewardElementEnable = 60033, Intimacy_ClickOpenIntimacyReward = 60034, Intimacy_ClickOpenTitleForm = 60035, Intimacy_TitleFormClose = 60036, Intimacy_TitleChangeConfirm = 60037, Intimacy_JumpToIntimacy = 60038, Intimacy_Title_Time_End = 60039, FriendRequest_OnClickReport = 60040, MentorRequest_OnClickReport = 60041, Intimacy_ChangeInfo_OnClickToContinue = 60042, Intimacy_ChangeInfo_OnClickToViewWishList = 60043, Intimacy_ClickMemory = 60044, PremadesLevel_PremadesLevelTipClickDown = 60045, PremadesLevel_PremadesLevelTipClickUp = 60046, PremadesLevel_Description_OpenForm = 60047, PremadesLevel_Description_CloseForm = 60048, TrainHero_Mission_Rule_Click = 60100, TrainHero_OnClick_OpenSelectModeForm = 60101, TrainHero_OnSelectModeItemEnable = 60102, TrainHero_OnClickSelectModeItem = 60103, TrainHero_ShowUseSymbolBox = 60104, TrainHero_OnCheckMaxFinishTimeTips = 60105, TrainHero_OnChooseHeroClickItem = 60106, EsportsGuild_GuideOpen = 60200, EsportsGuild_CreateTeamOpen = 60201, EsportsGuild_GotoEsportChat = 60202, EsportsGuild_CreateTeamConfirm = 60203, EsportsGuild_RecruitToChat = 60204, EsportsGuild_NewTeamInviteFriends = 60205, EsportsGuild_LobbyOpen = 60206, EsportsGuild_LobbyMenuClick = 60207, EsportsGuild_LobbyAnnouncementOpen = 60208, EsportsGuild_AnnouncementModify = 60209, EsportsGuild_ScanPlayer = 60210, EsportsGuild_AddFriend = 60211, EsportsGuild_GiveCaptain = 60212, EsportsGuild_KickPlayer = 60213, EsportsGuild_TeamLogOpen = 60214, EsportsGuild_ExpandBtns = 60215, EsportsGuild_GoBackBtns = 60216, EsportsGuild_AuthorityOpen = 60217, EsportsGuild_QuitGuild = 60218, EsportsGuild_QuitGuildConfirm = 60219, EsportsGuild_GiveCaptainConfirm = 60220, EsportsGuild_CreateTeamSuccessNext = 60221, EsportsGuild_LobbyMemberClick = 60222, EsportsGuild_InviteFriendOpen = 60223, EsportsGuild_AnnouncementModifyConfirm = 60224, EsportsGuild_TeamOpen = 60225, EsportsGuild_TeamJoin = 60226, EsportsGuild_TeamInviteFormOpen = 60227, EsportsGuild_TeamInvite = 60228, EsportsGuild_TeamRecruitFormOpen = 60229, EsportsGuild_TeamRecruit = 60230, EsportsGuild_ManagerOpen = 60231, EsportsGuild_TeamInviteTimerEnd = 60232, EsportsGuild_NewTeamInviteAllToggle = 60233, EsportsGuild_ManagerInviteToogleChg = 60234, EsportsGuild_LobbyTabClick = 60235, EsportsGuild_HonorTabClick = 60236, EsportsGuild_TrialClick = 60237, EsportsGuild_TrialFormClose = 60238, EsportsGuild_ModifyIcon_FormOpen = 60239, EsportsGuild_ModifyIcon_FormClose = 60240, EsportsGuild_ModifyIcon_Confirm = 60241, EsportsGuild_Rename_FormOpen = 60242, EsportsGuild_Rename_FormClose = 60243, EsportsGuild_Rename_Conirm = 60244, EsportsNationSettleTagRefresh = 60245, EsportsNationSettleTagPublish = 60246, EsportsNationSettleShare = 60247, EsportsNationSettleShareClose = 60248, EsportsNationSettleChampionShareOpen = 60249, EsportsNationSettleMsgChampionBattleShareOpen = 60250, EsportsNationSettleMsgBoardShareOpen = 60251, EsportsNationHonorSettleJump = 60252, EsportsNationSettleTest = 60253, EsprotsGuild_OfflineMatch_GoClick = 60254, Chat_QQ_SwitchClick = 60300, Chat_QQ_Switch_Open = 60301, Chat_QQ_Switch_Close = 60302, Chat_QQ_Confirm_SendRoomMsg = 60303, Chat_QQ_Confirm_CancelSendRoomMsg = 60304, Chat_OutGamePush_SwitchClick = 60305, Chat_OutGamePush_Open = 60306, Chat_OutGamePush_Close = 60307, Chat_OutGamePush_WX_Confirm = 60320, Chat_OutGamePush_WX_Close = 60321, FriendDay_OpenJuHePage = 60351, FriendDay_JumpChatForm = 60352, FriendDay_JumpPaiWei = 60353, FriendDay_JumpVoiceMsg = 60354, FriendDay_JumpHuoDongTitle = 60355, FriendDay_OpenRule = 60356, FriendDay_JiHuo = 60357, FriendDay_LobbyEntryClick = 60358, FriendDay_OnLadderBackToRoom = 60359, FriendDay_OnLadderSettleAniEnd = 60360, FriendDay_OnJumpYingDi = 60361, FriendDay_OnDianZanSubmit = 60362, HeroSelect_PreSetting_FormClose = 60401, HeroSelect_PreSetting_BeginGame = 60402, HeroSelect_PreSetting_Close = 60403, HeroSelect_PreSetting_SelectHero = 60404, HeroSelect_PreSetting_OpenBanForm = 60405, HeroSelect_PreSetting_BanFormClose = 60406, HeroSelect_PreSetting_BanHeroClick = 60407, HeroSelect_PreSetting_HeroTabEnable = 60408, HeroSelect_PreSetting_HeroTabSelect = 60409, HeroSelect_PreSetting_HeroListEnable = 60410, HeroSelect_PreSetting_HeroListSelect = 60411, HeroSelect_PreSetting_ChangeSetting = 60412, HeroSelect_PreSetting_Modify = 60413, HeroSelect_PreSetting_ConfirmBanHero = 60414, Ranking_ChangeRankTypeToActivity1v1 = 60415, Matching_Begin1v1_SameHero = 60416, Mode1v1_Normal_Rule = 60417, Mode1v1_Activity_Rule = 60418, Matching_1v1_Normal_After_Guide = 60419, Matching_1v1_SameHero_After_Guide = 60420, Solo_Click_Map_Entry = 60421, Solo_Click_Change_Branch = 60422, Solo_RoadChange_Select_Road = 60423, Solo_RoadChange_Confirm = 60424, Solo_Click_Room_SelectMapEntry = 60425, Solo_Click_Room_MapEntry = 60426, Battle_Video_PlayEnd = 60500, Survey_Refuse = 60501, Survey_StartAnswer = 60502, Survey_LastQuestion = 60503, Survey_NextQuestion = 60504, Survey_OpenSurveyForm = 60507, Survey_TipsTimeUp = 60508, Survey_ChoiceEditEnd = 60509, Survey_OnClickInterruptAnswer = 60510, Survey_OnInterruptAnswerConfirm = 60511, Survey_OnClickConfirmReward = 60512, AITraining_Exit_Confirm = 60601, HeroInfo_JumpToTraing = 60602, Practise_ChooseMode_Click = 60603, Practise_ChooseMode_Confirm = 60604, Common_AwardTipOpen = 61001, Common_AwardTipClose = 61002, Common_FullScreenVideo_CanShowCloseBtnTimerUp = 61003, MessageBox_ConfirmLimitTimerUpdate = 61004, MessageBox_ConfirmLimitTimerUp = 61005, Common_LoginQueueMessageOpen = 61006, Common_LoginQueueMessageClose = 61007, Common_LoginQueueStopped = 61008, MessageBoxWithToggleRule_Form_Open = 61009, MessageBoxWithToggleRule_Form_Close = 61010, MessageBoxWithToggleRule_OnRuleBtnClick = 61011, MessageBoxWithToggleRule_OnToggleClick = 61012, MessageBoxWithToggleRule_OnValueChanged = 61013, MessageBoxWithToggleRule_OnConfirmBtnClick = 61014, MessageBoxWithToggleRule_OnCancelBtnClick = 61015, Common_TextEditorForm_Open = 61016, Common_TextEditorForm_Confirm = 61017, Common_UIPrefabLoaded = 61018, Birthday_InviteFriend_OpenEditProfile = 61570, Birthday_InviteFriend_ClickAddFriend = 61571, HeroInfo_ShareSkin = 62001, HeroInfo_OpenForm_AfterPlayVideo = 62002, HeroInfo_TurnLeft_AfterPlayVideo = 62003, HeroInfo_TurnRight_AfterPlayVideo = 62004, HeroInfo_SetSkinRes = 62005, UGC_LobbyOpenForm = 64000, UGC_LobbyOpenCreateGame = 64001, UGC_LobbyStartGame = 64002, UGC_LobbyDestroyGame = 64003, UGC_LobbyJoinGame = 64004, UGC_LobbyQuitGame = 64005, UGC_LobbyCreateGame = 64006, UGC_OpenProject = 64007, UGC_CallLuaFunction = 65000, UGC_BattleUI_DragStart = 65011, UGC_BattleUI_DragEnd = 65012, UGC_BattleUI_Up = 65013, UGC_BattleUI_Down = 65014, UGC_BattleUI_Click = 65015, UGC_BattleUI_HoldStart = 65016, UGC_BattleUI_Hold = 65017, UGC_BattleUI_HoldEnd = 65018, Minimap_Drag_End_No_Lock = 65019, Minimap_Click_Up_No_Lock = 65020, PlayerInfo_WXSayHello = 66000, PlayerInfo_WXCard = 66001, Chat_ReserveMsgJoinTeam = 66002, TeamInvite_OnClickReserveJoinTeam = 66003, IntimacyMemory_OnClickPlayVideo = 66004, SearchFriend_ShowPlatChoose = 66020, SearchFriend_ChooseiOS = 66021, SearchFriend_ChooseAndroid = 66022, SearchGuild_ShowPlatChoose = 66023, SearchGuild_ChooseiOS = 66024, SearchGuild_ChooseAndroid = 66025, SearchPreGuild_ShowPlatChoose = 66026, SearchPreGuild_ChooseiOS = 66027, SearchPreGuild_ChooseAndroid = 66028, BigMap_Click_Buff = 66031, SignalPanel_DragBtn_Start = 66032, SignalPanel_DragBtn = 66033, SignalPanel_DragBtn_End = 66034, BattleStateView_ClickPlayerHead = 66035, BattleStateView_ClickTalentSkill = 66036, BattleStateView_ClickEquipment = 66037, BattleStateView_ClickMoney = 66038, SignalPanel_highLightThumbup = 66039, BattleStateView_ClickUniqueSkill = 66040, BattleEquip_ClickSendMsg = 66041, BattleStateView_OnHoldEquipment = 66042, BattleStateView_OnHoldEndEquipment = 66043, BattleStateView_ClickTower = 66044, BattleStateView_ClickScore = 66045, RecommendPlayer_CloseRecommendPlayerInfo = 66050, Settings_RecommendPlayAgain = 66051, Settings_RecommendAddFriend = 66052, Settings_ClickRecommendPlayAgainRule = 66053, Settings_ClickRecommendAddFriendRule = 66054, BranchFight_OnOpenChooseCommHeroForm = 66100, BranchFight_OnCloseChooseCommHeroForm = 66101, BranchFight_OnDelSelCommHero = 66102, BranchFight_OnOpenChooseBrunchForm = 66103, BranchFight_OnCloseChooseBrunchForm = 66104, BranchFight_OnConfirmBrunchSel = 66105, BranchFight_OnMakeBrunchSel = 66106, BranchFight_OnClickBrunchIcon = 66107, BranchFight_OnConfirmBrunchSel_PlayerInfo = 66108, BranchFight_OnConfirmBrunchSel_BFDetail = 66109, BranchFight_OnClickCommHeroJobTab = 66110, BranchFight_OnCommHeroReorder = 66111, BranchFight_OnCommHeroOpenReorderMenu = 66112, BranchFight_OnOpenDetailRuleForm = 66113, BranchFight_BFDetail_OnHeroIconEnabled = 66128, BranchFight_BFDetail_OnClickShowAward = 66129, BranchFight_BFDetail_OnClickTab = 66130, BranchFight_HonourPage_OnPushFVIcon_Start = 66131, BranchFight_HonourPage_OnPushFVIcon_End = 66132, BranchFight_HonourPage_OnClick_Season_Switch = 66133, BranchFight_Achievement_Open = 66134, BranchFight_Achievement_Close = 66135, BranchFight_Achievement_ShareBtn = 66136, BranchFight_BranchFightShare_Open = 66137, BranchFight_CustomizeStrategy_ClickShare = 66138, BranchFight_CustomizeStrategy_OnClickTab = 66139, Ranking_HonourRankTypeSelect = 66150, Ranking_HonourRankDropClick = 66151, Ranking_HonourBranchTypeSelect = 66152, BranchFight_OnPersonalCardShow = 66153, BranchFight_GuideShare = 66154, BranchFight_FullBranch_Achievement_Open = 66155, BranchFight_FullBranch_Achievement_Close = 66156, BranchFight_FullBranch_Achievement_ShareBtn = 66157, BranchFight_FullBranch_ShowRule = 66158, BranchFight_FullBranch_HideRule = 66159, BranchFight_BFDetail_OnMainHeroIconEnabled = 66160, BranchFight_BFDetail_OnSkilledHeroIconEnabled = 66161, BranchFight_HonourPage_OnShowHeroInfoDataSource = 66162, BranchFight_HonourPage_OnChangeHeroInfoDataSource = 66163, ActivityGameModel_Choose_FormOpen = 66300, ActivityGameModel_Choose_Enter = 66301, ActivityGameModel_Choose_CloseForm = 66302, ActivityGameModel_Choose_Selected = 66303, ScrollAlpha_Changed = 66304, ActivityGameModel_Choose_ElementEnable = 66305, HeroView_HeroSuggest = 66401, PlayerInfoSkin_OnClickOpenChooseSkinNode = 66600, PlayerInfoSkin_OnClickCloseChooseSkinNode = 66601, PlayerInfoSkin_OnClickUseSkin = 66602, PlayerInfoSkin_OnClickJumpToGetSkin = 66603, PlayerInfoSkin_OnClickSkinElement = 66604, PlayerInfoSkin_OnSkinElementEnable = 66605, PlayerInfoSkin_OnClickSkinChooseNodeBlankArea = 66606, PlayerInfoSkin_OnClickJumpToUseNewSkin = 66607, PlayerInfoSkin_OnClickShare = 66608, PlayerInfoSkin_OnClickChooseSkinRule = 66609, Friend_Verify_Send_WX = 66610, Sample1_OnConfirmClick = 66621, Sample1_OnOpenForm = 66622, Sample1_OnCloseForm = 66623, Sample1_OnEmployeeSelected = 66624, Sample1_OnSliderValueChanged = 66625, Sample1_OnRaiseToggleValueChanged = 66626, Sample1_OnCutToggleValueChanged = 66627, Sample2_OnOpenForm = 66631, Sample2_OnCloseForm = 66632, Sample2_SubView1_OnRandomSelectClick = 66633, Sample2_SubView2_OnColorRevertClick = 66634, Sample3_OnOpenForm = 66635, Sample3_OnCloseForm = 66636, Sample3_OnPurchaseButtonClick = 66637, Sample4_OnOpenForm = 66638, Sample4_OnCloseForm = 66639, ExpTuner_SlideX = 66650, ExpTuner_SlideY = 66651, ExpTuner_SlideZ = 66652, InBattleMsg_OnOpenPageSelectForm = 66670, InBattleMsg_OnPageElementEnable = 66671, InBattleMsg_OnClickUsePage = 66672, InBattleMsg_OnClickChangePageName = 66673, InBattleMsg_OnClickChangePageNameComfirm = 66674, InBattleMsg_OnOpenPageProp = 66675, InBattleMsg_OnClosePageProp = 66676, InBattleMsg_OnPagePropElementEnable = 66677, InBattleMsg_OnOpenPageHeroSelectForm = 66678, InBattleMsg_OnSelectPageHeroElement = 66679, InBattleMsg_OnSelectPageHeroCheckBox = 66680, InBattleMsg_OnUnSelectPageHeroCheckBox = 66681, InBattleMsg_OnClickUsePageHero = 66682, InBattleMsg_OnClosePageHeroSelectForm = 66683, InBattleMsg_OnClickUsePageToSingleHero = 66684, TeamRecruit_ClickBranchMsg = 66700, TeamRecruit_BranchMsgElementEnable = 66701, TeamRecruit_ClickBranchMsgElement = 66702, TeamRecruit_ClickLowestRank = 66703, TeamRecruit_LowestRankElementEnable = 66704, TeamRecruit_ClickLowestRankElement = 66705, TeamRecruitLobby_OpenTeamLobbyForm = 66720, TeamRecruitLobby_OnClickTabTeam = 66721, TeamRecruitLobby_OnClickTabRecruit = 66722, TeamRecruitLobby_JoinTeam = 66723, TeamRecruitLobby_RefreshTeamInfo = 66724, TeamRecruitLobby_OpenTeamRecruitForm = 66725, TeamRecruitLobby_AutoJoinTeam = 66726, TeamRecruitLobby_OnTeamElementEnable = 66727, TeamRecruitLobby_OnRefreshTeamInfoTimeChanged = 66728, TeamRecruitLobby_RealJoinTeam = 66729, TeamRecruitLobby_OnRefreshTeamHallDataTimeEnd = 66730, TeamRecruitLobby_RealAutoJoinTeam = 66731, TeamRecruitLobby_OnClickTeamTypeSelect = 66732, TeamRecruitLobby_OnClickTeamTypeSelectAll = 66733, TeamRecruitLobby_OnClickTeamTypeSelectThree = 66734, TeamRecruitLobby_OnClickTeamTypeSelectFive = 66735, BuyContainer_CloseForm = 66760, BuyContainer_Tab_Change = 66761, BuyContainer_Nobe_Preview_Callback = 66762, Room_OnGameLifeFirstCountDownTimerUp = 66800, Room_OnGameLifeSecondCountDownTimerUp = 66801, Room_OnGameLifeFirstCountDownTimerChange = 66802, Room_OnGameLifeRoomOpenTips = 66803, Room_OnGameLifeThirdCountDownTimerUp = 66804, InBattleCommunication_OpenForm = 66820, InBattleCommunication_ClickRightFunc = 66821, InBattleCommunication_ClickLeftFunc = 66822, InBattleCommunication_ClickLeftChangeFuncPos = 66823, InBattleCommunication_ClickLeftChangeFuncType = 66824, InBattleCommunication_OnSettingChanged = 66825, SharedSkin_OpenForm = 66860, SharedSkin_AddFriend = 66861, SharedSkin_EditProfile = 66862, TeamModeChange_OnClickChangeTeramMode = 66880, TeamModeChange_OnRealChangeTeramMode = 66881, TeamModeChange_OnClickChangeTeramModeForCityMatch = 66882, TeamModeChange_OnRealChangeTeramModeForCityMatch = 66883, CityMatch_OpenLocalSetMessageBox = 66900, CityMatch_LocalSetMessageBoxConfirm = 66901, Team_WishList_Form_Open = 66902, Team_WishList_Form_Close = 66903, Team_WishList_RuleBtnClick = 66904, Team_WishList_AddWish_BtnClick = 66905, Team_WishList_AddWish_ConfirmBtnClick = 66906, Team_WishList_AddWish_CancleBtnClick = 66907, Team_MiniChat_WishAssist_BtnClick = 66908, HeroSelect_ChangeShowModelMode = 67000, HeroSelect_OpenRoadSettings = 67001, HeroSelect_SelectRoadType = 67002, HeroSelect_RoadSettingClose = 67003, HeroSelect_ShowCombineGameInfo = 67030, HeroSelect_ShenBingEquipPlan = 67031, HeroSelect_HistoryBattleInfo_ShowLastBattle = 67032, HeroSelect_HistoryBattleInfo_ShowCurYear = 67033, HeroSelect_HistoryBattleInfo_ShowAll = 67034, HeroSelect_ShenBingForceEquipClick = 67035, HeroSelect_OnClickOpenSuitSelectGuide = 67036, ChatRecentPlayer_OnClickLeftFriendTab = 68010, ChatRecentPlayer_OnClickLeftRecentTab = 68011, ChatRecentPlayer_OnLeftRecentPlayerElementEnable = 68012, ChatRecentPlayer_OnClickLeftRecentPlayerElement = 68013, ChatRecentPlayer_OnClickShowQuickMsg = 68014, ChatRecentPlayer_OnQuickMsgElementEnable = 68015, ChatRecentPlayer_OnClickQuickMsgElement = 68016, ChatRecentPlayer_OnRefreshStateTimeUp = 68017, RecentPlayer_OnClickCloseTmpFriendTip = 68018, HeroSuggest_OpenForm = 68051, HeroSuggest_CloseForm = 68052, Lobby_Form_Open = 68100, HeroPractice_OpenForm = 68120, HeroPractice_CloseForm = 68121, HeroPractice_SelectLevel = 68123, HeroPractice_ShowPracticeGoal = 68124, HeroPractice_StartPractice = 68125, HeroPracticeGoal_OpenForm = 68126, HeroPracticeGoal_CloseForm = 68127, HeroPracticeGoal_ReceiveReward = 68128, HeroPracticeGoal_Close = 68129, HeroPracticeInGamePanel_OpenCloseBtn = 68130, HeroPracticeInGamePanel_DetailOpenBtn = 68131, HeroPracticeInGamePanel_DetailCloseBtn = 68132, HeroPracticeInGamePanel_ClickAIShowStartBtn = 68133, HeroPracticeInGamePanel_ClickAIShowStopBtn = 68134, HeroPracticeGoal_ItemInfoOpen = 68135, HeroPracticeGoal_ItemInfoClose = 68136, HeroPractice_Rule_Click = 68137, HeroPractice_SelectHero_OpenForm = 68138, HeroPractice_SelectHero_CloseForm = 68139, HeroPractice_ChangeHero = 68140, HeroPractice_HeroItemSelect = 68141, HeroPracticeInGamePanel_ClickVideoBtn = 68142, HeroPracticeGoal_SelectMenu = 68143, HeroPractice_GetStageReward = 68144, HeroPracticeGoal_VideoBtn = 68145, HeroPracticeInGamePanel_ClickContinue = 68146, HeroPracticeInGamePanel_ClickAcceptSurrender = 68147, HeroPracticeInGamePanel_ClickVideoBtnInList = 68148, BattleStateViewNormal_HeroTrickChange = 68149, BattleStateViewNormal_HeroTrickItemInfoOpen = 68150, BattleStateViewNormal_HeroTrickItemInfoClose = 68151, BattleStateViewNormal_VideoBtn = 68152, BattleStateViewNormal_HeroTrickTipToggle = 68153, HeroPractice_JumpToCamp = 68154, UserBackflow_EquipPreview_PressDown = 68170, UserBackflow_EquipPreview_PressUp = 68171, PrepareBattle_FormClose = 68172, PrepareBattle_HeroListItemClick = 68173, PrepareBattle_ChangeHero = 68174, PrepareBattle_ApplySkillToCurrentHero = 68175, PrepareBattle_ApplySkillToMultiHero = 68176, PrepareBattle_CloseChooseHero = 68177, PrepareBattle_ChooseHero_OnHeroUsed = 68178, PrepareBattle_SwitchEquipPanelShowMode = 68179, RoomContext_ShortVideoBtn_Click = 68180, TeamContext_ShortVideBtn_Click = 68181, ShortVideoFloatingBtn_Click = 68182, ShortVideoFloatingBtn_Drag = 68183, PrepareBattle_BatchApplySymbolPage = 68184, HeroSelectContext_ShortVideBtn_Click = 68185, HeroSelectBPContext_ShortVideBtn_Click = 68186, ShortVideoTitleBuy_Click = 68187, ShortVideoPnlBuyBtn_Click = 68188, SocialProfile_OpenForm = 68201, SocialProfile_CloseForm = 68202, SocialProfile_SocialLabelClick = 68203, SocialProfile_ModifySocialProfile = 68204, SocialProfile_SocialBtnClick = 68205, SocialProfile_ModifySocialStatus = 68206, SocialProfile_ModifySocialLabel = 68207, SocialProfile_ShowSocialLabel = 68208, SocialProfile_ModifySocialNickName = 68209, SocialProfile_ModifySocialPaiyiPai = 68210, SocialProfile_ModifySocialBday = 68211, SocialProfile_ModifySocialLocation = 68212, SocialProfile_ModifySocialGender = 68213, SocialProfile_EditSocialSignEnd = 68214, SocialProfile_OpenLabelForm = 68215, SocialProfile_CloseLabelForm = 68216, SocialProfile_PersonProfileBtn = 68217, SocialProfile_EditProfileBtn = 68218, SocialProfile_PaiyiPaiBtn = 68219, SocialProfile_WhisperBtn = 68220, SocialProfile_PlayAgainBtn = 68221, SocialProfile_AddFriendBtn = 68222, SocialProfile_BlockBtn = 68223, SocialProfile_ReportCheatBtn = 68224, SocialProfile_5v5RankBtn = 68225, SocialProfile_5v5MatchBtn = 68226, SocialProfile_RemarkBtn = 68227, SocialProfile_LightUpBtn = 68228, SocialProfile_BlockConfirm = 68229, SocialProfile_ReportCheatConfirm = 68230, SocialProfileEditor_OpenForm = 68231, SocialProfileEditor_CloseForm = 68232, SocialProfileEditor_EditNickName = 68233, SocialProfileEditor_SetLocation = 68234, SocialProfileEditor_EditSocialTag = 68235, SocialProfileEditor_EditorSocialSign = 68236, SocialProfileEditor_SaveProfile = 68237, SocialProfileEditor_OpenSetLocationForm = 68238, SocialProfileEditor_CloseSetLocationForm = 68239, SocialProfileEditor_ConfirmSetLocation = 68240, SocialProfileEditor_OpenChangeNameForm = 68241, SocialProfileEditor_CloseChangeNameForm = 68242, SocialProfileEditor_OnConfirmChangeName = 68243, SocialProfileEditor_EditSocialSignEnd = 68244, SocialProfile_SwitchToSocialProfile = 68245, SocialProfile_SwitchToRecord = 68246, PlayerInfo_OnClickGoBack = 68247, SocialProfile_TagTypeSelect = 68248, SocialProfile_WishListBtn = 68249, SocialProfileEditor_OpenSetLocationAutoOrManualForm = 68250, SocialProfileEditor_OpenSetLocationManualForm = 68251, SocialProfileEditor_ConfirmSaveProfile = 68252, SocialProfileEditor_CancelConfirmSaveProfile = 68253, SocialProfileEditor_ConfirmChangeGender = 68254, SocialProfileEditor_CancelChangeGender = 68255, SocialProfileEditor_GenderToggleChanged = 68256, SocialProfileEditor_ClickLikeStatusBtn = 68257, SocialProfileEditor_HoldLikeStatusBtn = 68258, SocialProfileEditor_Second_ConfirmSaveProfile = 68259, PlayerReport_OnClickReport = 68260, PlayerReport_OnReportTypeElementEnable = 68261, SocialProfile_OnChatBtnClick = 68262, Paint_System_OnElementSelect = 68311, Paint_System_OpenForm = 68312, Paint_System_CloseForm = 68313, Paint_System_PaintUseClicked = 68314, Paint_System_PaintUnUseClicked = 68315, Paint_System_EditorClicked = 68316, Paint_System_EditorDoneClicked = 68317, Paint_System_Wear_Add_Clicked = 68318, Paint_System_Wear_Replace_Clicked = 68319, Paint_System_Wear_Del_Clicked = 68320, Paint_System_JumpAward_Clicked = 68321, Paint_System_SelectContent = 68322, Paint_System_EditorCancelClicked = 68323, Paint_System_Model_Drag = 68324, Paint_System_WearIcon_Clicked = 68325, Paint_System_Buy_Clicked = 68326, UniteBuy_HeroSkinFormOpenClick = 68351, UniteBuy_HeroSkinFormCloseClick = 68352, UniteBuy_HeroSkinFormBuyBtnClick = 68353, UniteBuy_HeroSkinFormExpCardBtnClick = 68354, UniteBuy_HeroSkinFormQRCodeBtnClick = 68355, UniteBuy_HeroSkinFormAskForBtnClick = 68356, UniteBuy_HeroSkinFormGiveBtnBtnClick = 68357, UniteBuy_HeroSkinFormLabelMoreClick = 68358, UniteBuy_HeroAndHeroSkinPriceChanged = 68359, UniteBuy_CounponsNotEnoughOtherBtnClick = 68360, UniteBuy_CounponsNotEnoughBuyBtnClick = 68361, UniteBuy_ConponsNotEnoughMessageBoxOpen = 68362, UniteBuy_ConponsNotEnoughMessageBoxClose = 68363, UniteBuy_HeroFormOpenClick = 68364, UniteBuy_HeroFormCloseClick = 68365, UniteBuy_NoHeroBuySkinMessageBoxOpen = 68366, UniteBuy_NoHeroBuySkinMessageBoxClose = 68367, UniteBuy_NoHeroBuySkinMessageBoxConfirmBtnClick = 68368, UniteBuy_NoHeroBuySkinMessageBoxOtherBtnClick = 68369, UniteBuy_HeroFormBuyBtnClick = 68370, UniteBuy_QRCodePayShareFormOpen = 68371, UniteBuy_QRCodePayShareFormClose = 68372, UniteBuy_QRCodePayShareHttpImageLoaded = 68373, UniteBuy_SpecialDiscountBuy_TryToPaySuccess = 68374, UniteBuy_QRCodePayShareHttpNameImageLoaded = 68375, UniteBuy_QRCodePayDianQuanShareFormOpen = 68376, UniteBuy_SkinCardToggleValueChanged = 68377, UniteBuy_HeroSkinDistributionFormOpen = 68378, UniteBuy_HeroSkinDistributionFormClose = 68379, UniteBuy_HeroSkinDistribution_SaleItemToggleValueChanged = 68380, UniteBuy_HeroSkinDistribution_SaleItemSelect = 68381, HeroSkin_SelectDazeItem_UseSkinCardItemSelectItem = 68382, UniteConfirmBuy_HeroSkinDistributionFormOpen = 68383, UniteConfirmBuy_HeroSkinDistributionFormClose = 68384, UniteConfirmBuy_HeroSkinDistribution_ConfirmBtnClick = 68385, UniteBuy_HeroSkinDistribution_BuyBtnClick = 68386, UniteConfirmBuy_HeroSkinDistribution_ConfirmBuy = 68387, SelectDeductCoupon_Form_Open = 68388, SelectDeductCoupon_Form_Close = 68389, SelectDeductCoupon_SelectItem = 68390, UniteBuy_HeroSkinDistribution_DeductCouponTipBtnClick = 68391, SelectDeductCoupon_BuyBtnClick = 68392, UniteBuy_HeroSkinDistribution_SaleItemCancleAdd = 68393, ReserveNew_OpenFriendChat = 70000, ReserveNew_SendReserveAutoMsg = 70001, ReserveNew_InBattleReserveElementEnable = 70002, ReserveNew_InBattleFriendChatElementEnable = 70003, ReserveNew_SendInBattleReserveAutoMsg = 70004, ReserveNew_OpenInBattleFriendChatList = 70005, ReserveNew_OpenInBattleReserveChatList = 70006, ReserveNew_FightFormReserveElementEnable = 70007, ReserveNew_FightFormFriendChatElementEnable = 70008, ReserveNew_SendFightFormReserveAutoMsg = 70009, ReserveNew_OpenFightFormFriendChatList = 70010, ReserveNew_OpenFightFormReserveChatList = 70011, ReserveNew_OnDragReserveInSettlementNode = 70012, ReserveNew_OnDragReserveMsgNode = 70013, ReserveNew_OnClickReserveMsgNode = 70014, ReserveNew_OnClickNotifyFriendChatHeroSelect = 70015, ReserveNew_OnClickNotifyFriendChatInBattle = 70016, InBattleMsg_OnClickKillNotifyThumbsUp = 70017, InBattleMsg_OnClickKillNotifyShowOff = 70018, InBattleMsg_OnKillNotifyThumbsUpTimeUp = 70019, InBattleMsg_OnKillNotifyShowOffTimeUp = 70020, Watch_ClickInviteQuitWatch = 70021, InBattleMsg_HighlightThumbUpTimeUp = 70022, InBattleMsg_OnClickSendBattleMsg = 70023, InBattleMsg_SendBattleMsgTimeUp = 70024, InBattleMsg_OnClickApollogize = 70025, InBattleMsg_OnApollogizeTimeUp = 70026, InBattleMsg_OnClickComfort = 70027, InBattleMsg_OnComfortTimeUp = 70028, InBattleMsg_OnSendSurrenderMsg = 70029, InBattleMsg_OnSendVoicePhoneListEnable = 70030, InBattleMsg_OnSendVoicePhoneListItemClick = 70031, InBattleMsg_OnSendVoicePhoneCall = 70032, InBattleMsg_OnSendVoicePhoneHangUpCall = 70033, InBattleMsg_OnSendVoicePhoneLineConnected = 70034, InBattleMsg_OnSendVoicePhone_HeadIconClickUnFold = 70035, InBattleMsg_OnSendVoicePhone_Btn_ThisGameNotListenShowBtn = 70036, InBattleMsg_OnSendVoicePhone_Btn_ThisGameNotListenShowBtnClick = 70037, InBattleMsg_OnClickFullScreen = 70038, InBattleMsg_OnDragPhoneCallHead = 70039, InBattleMsg_OnSendCallTimerEndup = 70040, InBattleMsg_OnSendCallTimerChg = 70041, InBattleMsg_OnSendCallIngTimerChg = 70042, InBattleMsg_OnCallSelectPlayer = 70043, InBattleMsg_OnBanCallPlayer = 70044, InBattleMsg_OnCancelBanPlayer = 70045, InBattleMsg_OnCountDownAnimEnd = 70046, InBattleMsg_OnDeadWatchBtnExpandClick = 70047, HeroSelectChat_ClickQuickMsg = 70048, InBattleMsg_OnIntelligentCommunicationBtnClick = 70049, Watch_Live_SwitchZoom_RealFarthest = 70101, Watch_Live_SwitchZoom_QuitRealFarthest = 70102, Watch_Mobile_ChangeBottomTab = 70103, Watch_DragonIcon_Dead = 70104, Matching_CampChange = 70201, Invite_OpenPlayerDetailInfoRecent = 70202, Invite_OpenPlayerDetailInfoNear = 70203, Invite_OpenPlayerDetailInfoStatusRecord = 70204, YearStory_OpenYearStoryLobby = 71001, YearStory_OnYearStoryLobbyClosed = 71002, YearStory_TaskBook_OnClickLobbyDefaultActor = 71003, YearStory_TaskBook_ClickLeft = 71004, YearStory_TaskBook_ClickRight = 71005, YearStory_DisplayEvent_OnTipsFormClose = 71006, YearStory_Review_SelectAYearTaskForm = 71007, YearStory_DisplayEvent_CloseShareForm = 71008, YearStory_TaskBook_CloseTaskBook = 71009, YearStory_DisplayEvent_ShareForm_EntryShare = 71010, YearStory_TaskBook_Click_Clue = 71011, YearStory_DisplayEvent_OnVideoPlayEnd = 71012, YearStory_TaskBook_Click_Photo = 71013, YearStory_TaskBook_CloseTaskBookForm = 71014, YearStory_Interaction_StartDraw = 71015, YearStory_TaskBook_AccordClose = 71016, YearStory_TaskBook_ClickNewClue = 71017, YearStory_TaskBook_ShowClues = 71018, YearStory_TaskBook_ClueClickLeft = 71019, YearStory_TaskBook_ClueClickRight = 71020, BreakingNews_ClickPlayCG = 71021, BreakingNews_CGPlayEnd = 71022, YearStory_TaskBook_OnOpenTaskBookAnimEnd = 71023, YearStory_TaskBook_OnCloseTaskBookFormAnimEnd = 71024, YearStory_TaskBook_OnTaskBookOpen = 71025, YearStory_TaskBook_ClickUnlockClue = 71026, YearStory_JumpYearStoryLobby = 71027, YearStory_DisplayEvent_OnMaskFormClosed = 71028, YearStory_StoryLobby_OnFormHide = 71029, YearStory_StoryLobby_OnFormAppear = 71030, YearStory_TaskBook_ClickOpenBookForm = 71031, YearStory_Interaction_EndDraw = 71032, YearStory_Lobby_ClickVideoEntry = 71033, YearStory_DisplayEvent_Dialog_GoNextDialog = 72001, YearStory_DisplayEvent_Dialog_SelectChoice = 72002, YearStory_DisplayEvent_Dialog_ShowAllText = 72003, CountDownTips_TimerUp = 72004, CountDownTips_TimerChanged = 72005, YearStory_DisplayEvent_Dialog_ClickAutoShowButton = 72006, YearStory_DisplayEvent_Dialog_ClickAutoingShowButton = 72007, YearStory_DisplayEvent_Dialog_SkipButton_TimerUp = 72008, YearStory_DisplayEvent_Dialog_SkipTask = 72009, YearStory_DisplayEvent_Dialog_AllTextShowDone = 72010, YearStory_DisplayEvent_QTE_Open = 72011, YearStory_DisplayEvent_QTE_Close = 72012, YearStory_DisplayEvent_QTE_Start = 72013, YearStory_DisplayEvent_QTE_ShowOperate = 72014, YearStory_DisplayEvent_QTE_TriggerUI = 72015, YearStory_DisplayEvent_QTE_TimeOut = 72016, YearStory_DisplayEvent_QTE_VideoEnd = 72017, YearStory_DisplayEvent_ClickUITrigger = 72018, YearStory_SeasonGoal_OnGetSeasonGoalAward = 72019, YearStory_SeasonGoal_OnSeasonGoalUnlock = 72020, YearStory_DisplayEvent_OnSecretOpen = 72021, YearStory_DisplayEvent_OnSecretClose = 72022, YearStory_DisplayEvent_OnSecretDone = 72023, YearStory_DisplayEvent_OnSecret_DragCandle = 72024, YearStory_DisplayEvent_OnSecret_DragCandleStart = 72025, YearStory_DisplayEvent_OnSecret_DragCandleEnd = 72026, YearStory_DisplayEvent_OnSecret_CandleSecretDone = 72027, YearStory_DisplayEvent_OnSecret_ClickBox = 72028, YearStory_DisplayEvent_OnSecret_ClickBoxItem = 72029, YearStory_DisplayEvent_OnSecret_DragBoxItem = 72030, YearStory_DisplayEvent_OnSecret_BoxSecretDone = 72031, YearStory_DisplayEvent_OnSecret_ClickChess = 72032, YearStory_DisplayEvent_OnSecret_CombineMap = 72033, YearStory_DisplayEvent_SettleSharePoster_SelectPoster = 72034, YearStory_DisplayEvent_SettleSharePoster_DesignDone = 72035, YearStory_DisplayEvent_SettleSharePoster_ReturnDesign = 72036, YearStory_DisplayEvent_SettleSharePoster_SettleDone = 72037, YearStory_DisplayEvent_SettleSharePoster_SettleVideoDone = 72038, YearStory_SeasonGoal_Chess_Tips = 72039, YearStory_SeasonGoal_Chess_Item = 72040, YearStory_SeasonGoal_Box_Item = 72041, YearStory_SeasonGoal_Video = 72042, YearStory_SeasonGoal_Poster = 72043, YearStory_DisplayEvent_PrepareBattle_Show = 72044, YearStory_DisplayEvent_PrepareBattle_Hide = 72045, YearStory_DisplayEvent_PrepareBattle_ShowBattleInfo = 72046, YearStory_DisplayEvent_PrepareBattle_HideBattleInfo = 72047, YearStory_DisplayEvent_PrepareBattle_StartBattle = 72048, YearStory_DisplayEvent_ReviewSwitch_Show = 72049, YearStory_DisplayEvent_ReviewSwitch_Hide = 72050, YearStory_Common_OnShowItem_Single = 72051, YearStory_Common_OnCloseItem_Single = 72052, YearStory_Common_OnShowItem_StepList = 72053, YearStory_Common_OnCloseItem_StepList = 72054, YearStory_Common_OnShowItem_StepList_SelectItem = 72055, YearStory_Common_OnShowItem_Single_ChangeItemLeft = 72056, YearStory_Common_OnShowItem_Single_ChangeItemRight = 72057, YearStory_Common_OnShowItem_JumpItemDetail = 72058, YearStory_DisplayEvent_OnSecret_ShowCandleGuide = 72059, YearStory_DisplayEvent_OnSecret_PaperToDesk = 72060, YearStory_DisplayEvent_OnSecret_ClickBoxItemMore = 72061, YearStory_StoryLobby_TryStartBattle = 72062, YearStory_StoryLobby_RealStartBattle = 72063, YearStory_DisplayEvent_OnSecret_DragBoxItemDone = 72064, YearStory_DisplayEvent_OnSecret_ClickChessDone = 72065, YearStory_DisplayEvent_SettleSharePoster_EntryEdit = 72066, YearStory_DisplayEvent_SettleSharePoster_EntryShare = 72067, YearStory_DisplayEvent_PrepareBattle_SkipBattle = 72068, YearStory_Interaction_FormOpen = 72069, YearStory_Interaction_FormClose = 72070, YearStory_Interaction_NextStep = 72071, YearStory_Interaction_OnDragUIStart = 72072, YearStory_Interaction_OnDragUIEnd = 72073, YearStory_Interaction_OnDragUI = 72074, YearStory_SeasonGoal_OnShowStone = 72075, YearStory_SeasonGoal_OnPlayMusic = 72076, YearStory_SeasonGoal_OnPauseMusic = 72077, YearStory_SeasonGoal_OnOpenShare = 72078, YearStory_SeasonGoal_OnEntryShare = 72079, YearStory_SeasonGoal_OnEntryStone = 72080, YearStory_SeasonGoal_OnOpenDialoge = 72081, YearStory_SeasonGoal_OnCloseDialoge = 72082, YearStory_StoryRecord_OnOpen = 72083, YearStory_StoryRecord_OnClose = 72084, YearStory_StoryRecord_OnOpenRule = 72085, YearStory_StoryRecord_OnCloseRule = 72086, YearStory_StoryRecord_OnClickStory = 72087, YearStory_StoryRecord_OnEntryStory = 72088, YearStory_StoryRecord_OnShowBrife = 72089, YearStory_StoryRecord_OnShowDetail = 72090, YearStory_StoryRecord_OnPlaySound = 72091, YearStory_StoryRecord_OnPauseSound = 72092, YearStory_StoryRecord_OnChangeStory = 72093, YearStory_StoryRecord_OnGetTaskAward = 72094, YearStory_StoryRecord_OnShowStoryBg = 72095, YearStory_StoryRecord_OnHideStoryBg = 72096, YearStory_StoryRecord_OnReturnTaskInfo = 72097, YearStory_SeasonGoal_OnCloseStone = 72098, YearStory_SeasonGoal_OnOpenDialoge_FadeInDone = 72099, YearStory_Interaction_OnDragUI_Right = 72100, DiversifiedPlayMode_Lobby_Entry = 72101, DiversifiedPlayMode_Entry = 72102, DiversifiedPlayMode_Vow = 72103, DiversifiedPlayMode_Watch = 72104, DiversifiedPlayMode_Dance = 72105, DiversifiedPlayMode_QA = 72106, DiversifiedPlayMode_AnYue_SettleToTask = 72107, DiversifiedPlayMode_Close = 72108, LadderTravel_EntryActivity = 72111, LadderTravel_Change = 72112, LadderTravel_ShowAllTaskDoneStory = 72113, LadderTravel_ReqGetAward = 72114, LadderTravel_GetAwardSucceed = 72115, LadderTravel_OnShowSkipVideoPanel = 72116, LadderTravel_ShowPrograssTips = 72117, LadderTravel_ClosePrograssTips = 72118, LadderTravel_OnSkipAward = 72119, LadderTravel_ShowRules = 72120, LadderTravel_ShowPrograssStory = 72121, LadderTravel_DisplayStoryVioce = 72122, LadderTravel_EntryChallenge = 72123, LadderTravel_EntryLadderTravelForm = 72124, LadderTravel_AwardCellInfo_Down = 72125, LadderTravel_AwardCellInfo_Up = 72126, LadderTravel_OnShowNodeDetailReview = 72127, LadderTravel_OnStoryButton_Left = 72128, LadderTravel_OnStoryButton_Right = 72129, LadderTravel_OnSkipNodeDetailReview = 72130, LadderInherit_Step1_ThemeUIAnimaion = 72131, LadderInherit_Step2_ShowSeasonAward = 72132, LadderInherit_Step3_TryEntryYearStep = 72133, LadderInherit_Step3_1_ShowYearAward = 72134, LadderInherit_Step3_2_ResYearInherit = 72135, LadderInherit_Step3_3_OnGetYearSkin = 72136, LadderInherit_Step_4_ShowLastSeasonGrade = 72137, LadderInherit_Step_5_ReqSeasonInherit = 72138, LadderInherit_Step_6_ShowGradeChange = 72139, LadderInherit_Step_7_Done = 72140, LadderInherit_Done = 72141, LadderInherit_Step3_4_OnShowYearSkin = 72142, LadderRift_Entry = 72151, LadderRift_Refresh = 72152, LadderRift_SkinListElementEnable = 72153, LadderRift_ReqGetSkin = 72154, LadderRift_EntryChargeState = 72155, LadderRift_QuitChargeState = 72156, LadderRift_OpenChargeTip = 72157, LadderRift_ReqUseChargeCard = 72158, LadderRift_OpenHeroInfoForm = 72159, LadderRift_ShowRules = 72160, LadderRift_CloseAndOpenBreakingNews = 72161, LadderTravel_ShowAwardStory = 72162, LadderTravel_EndWordsDisplay = 72163, HeroInfo_OnClickModifyInfoForHeroSelect = 72171, HeroInfo_OnSelectHeroSortType = 72172, HeroInfo_OnChangeHeroSelectType = 72173, Matching_Open_HeroModify_Url = 72174, BreakingNews_Poster_OpenPosterForm = 72175, BreakingNews_Poster_SelectPostAction = 72176, BreakingNews_Poster_UndoPostAction = 72177, BreakingNews_Poster_ToNextPostStep = 72178, BreakingNews_Poster_SelectPostStep = 72179, YearStory_WatchFullScreenVideo = 72180, BreakingNews_Poster_ResetPosterDesign = 72181, BreakingNews_Poster_OpenPosterShareForm = 72182, BreakingNews_Poster_OnClickPosterShare = 72183, BreakingNews_Poster_PosterContentElementEnable = 72184, YearStory_ShowSkipPanel = 72185, BreakingNews_Barrage_OpenLiveShowForm = 72186, BreakingNews_Barrage_SwitchBarragePanel = 72187, YearStory_CloseSkipPanel = 72188, BreakingNews_Barrage_BarrageTimeStart = 72189, BreakingNews_Barrage_BarrageTimeUp = 72190, BreakingNews_Barrage_SwitchGiftPanel = 72191, YearStory_DisplayEvent_SoundEnd = 72192, BreakingNews_Barrage_SendGift = 72193, BreakingNews_Barrage_ConfirmSendGift = 72194, BreakingNews_Barrage_SwitchStaticBarrageList = 72195, BreakingNews_Barrage_CloseStaticBarrageList = 72196, BreakingNews_Barrage_SendAStaticBarrage = 72197, BreakingNews_Barrage_SwitchBarrageUI = 72198, BreakingNews_Barrage_CloseBarrageUI = 72199, BreakingNews_Barrage_SendCustomBarrage = 72200, BreakingNews_Barrage_LiveShowVideoEnd = 72201, BreakingNews_Barrage_OnOpenLiveShow = 72202, BreakingNews_Barrage_OpenLiveShowShareForm = 72203, BreakingNews_Barrage_SetStaticBarrageElement = 72204, BreakingNews_Barrage_CloseLiveShowShareForm = 72205, BreakingNews_Barrage_WatchAgain = 72206, YearStory_SeasonGoal_ReqGetSeasonGoalAward = 72207, YearStory_SeasonGoal_OnSeasonGoalChange = 72208, BreakingNews_Task_PlayMusic = 72209, BreakingNews_Task_PauseMusic = 72210, BreakingNews_Task_WatchBuild = 72211, BreakingNews_Task_DesignPoster = 72212, BreakingNews_Task_DayPropagate = 72213, BreakingNews_Task_SelectDayPropagate = 72214, BreakingNews_Task_CommitCoin = 72215, BreakingNews_Task_ConfirmCommitCoin = 72216, BreakingNews_Task_SlideMask_LeftDragStart = 72217, BreakingNews_Task_SlideMask_LeftDragEnd = 72218, BreakingNews_Task_SlideMask_RightDragStart = 72219, BreakingNews_Task_SlideMask_RightDragEnd = 72220, BreakingNews_Task_SlideMask_Draging = 72221, BreakingNews_Task_JumpToCurTaskFirstPage = 72222, BreakingNews_Task_JumpToATaskFirstPage = 72223, YearStory_StoryLobby_ShowRules = 72224, BreakingNews_Task_OnLobbyFormFadeIn = 72226, BreakingNews_Task_OnShowFriendShipLevelUpEnd = 72227, BreakingNews_Task_ConfirmSendDayPropagate = 72228, BreakingNews_Barrage_GiftBarrageTimeStart = 72229, BreakingNews_Barrage_GiftBarrageTimeUp = 72230, LadderTravel_OnCloseNodeDetail = 72231, LadderTravel_WatchNodeH5 = 72232, LadderTravel_FormUIAnimationDone = 72233, BreakingNews_Task_MusicGuide = 72234, BreakingNews_Task_BuildGuide = 72235, BreakingNews_Task_OnBuildGuideDone = 72236, BreakingNews_LobbyForm_FadeIn = 72237, BreakingNews_Poster_OnClickPosterClose = 72238, BattleStateView_JumpToHeroInfo = 72239, BreakingNews_Barrage_WatchEndVideo = 72240, BreakingNews_Barrage_AfterWatchEndVideo = 72241, BreakingNews_Barrage_OpenShareEndVideo = 72242, BreakingNews_Barrage_CloseShareEndVideo = 72243, BreakingNews_PlayUIAnimation_End = 72244, BreakingNews_OpenAForm_Close = 72245, YearStory_StoryLobby_WatchSeasonVideo = 72246, BattleStateViewNormal_HeroInfoChange = 72247, BreakingNews_HistoryStory_Close = 72248, BreakingNews_AnimationStroy_Close = 72249, BreakingNewsTaskReview_OpenAllYearForm = 72250, BreakingNewsTaskReview_CloseAllYearForm = 72251, BreakingNewsTaskReview_OpenAYearTaskForm = 72252, BreakingNewsTaskReview_CloseAYearTaskForm = 72253, BreakingNewsTaskReview_ChangeLeftYear = 72254, BreakingNewsTaskReview_ChangeRightYear = 72255, BreakingNewsTaskReview_YearElementEnable = 72256, BreakingNewsTaskReview_SelectACompetitionSeason = 72257, BreakingNewsTaskReview_OpenTaskDetailForm = 72258, BreakingNewsTaskReview_CloseTaskDetailForm = 72259, BreakingNewsTaskReview_GotoTaskReviewForm = 72260, BreakingNewsTaskReview_OpenTaskReviewForm = 72261, YearStory_OnYearStoryReviewDisplayDone = 72262, BreakingNewsTaskReview_GotoWatchVideo = 72263, BreakingNewsTaskReview_GotoUGCGamePlay = 72264, BreakingNewsTaskReview_OpenSkipTaskTimerForm = 72265, BreakingNewsTaskReview_CloseSkipTaskTimerForm = 72266, BreakingNewsTaskReview_OpenSkipTaskBoxForm = 72267, BreakingNewsTaskReview_CloseSkipTaskBoxForm = 72268, BreakingNewsTaskReview_SelectASeason = 72269, BreakingNewsTaskReview_OnDialougAutoTimeUp = 72270, BreakingNewsTaskReview_OnShowTaskReviewRules = 72271, BreakingNewsTaskReview_OnSeasonStoryChange = 72272, YearStory_SeasonGoal_GotoTask = 72273, YearStory_SeasonGoal_ShowStoryUnlockTip = 72274, YearStory_SeasonGoal_ShowTaskUndoneTip = 72275, YearStory_StoryLobby_HeroVioce_Show = 72276, YearStory_StoryLobby_HeroVioce_Hide = 72277, YearStory_StoryLobby_HeroVioce_OnElemEnable = 72278, YearStory_StoryLobby_HeroVioce_OnElementChange = 72279, HeroSelect_BanPick_OnShowCounterTagTip = 72280, HeroSelect_BanPick_OnCloseCounterTagTip = 72281, HeroSelect_BanPick_OnHeroListScrolling = 72282, HeroSelect_BanPick_OnShowFullHeroTip = 72283, HeroSelect_BanPick_OnCloseFullHeroTip = 72284, LadderTravel_OnWordsDisplayEnd = 72614, AllEsports_Lobby_OpenForm = 73000, AllEsports_Lobby_CloseForm = 73001, AllEsports_Lobby_EsportsCareerClick = 73002, AllEsports_Lobby_MyEsportsTeamClick = 73004, AllEsports_Lobby_BadgePrivilegeClick = 73005, AllEsports_Lobby_NationalMatchTicketDragStart = 73006, AllEsports_Lobby_NationalMatchTicketDragEnd = 73007, AllEsports_Lobby_NationalMatchTicketDrag = 73008, AllEsports_Lobby_NationalMatchElementSelect = 73009, AllEsports_Lobby_NationalMatchTicketListOpenForm = 73010, AllEsports_Lobby_NationalMatchTicketListCloseForm = 73011, AllEsports_Lobby_NationalMatchSwitchLeftClick = 73012, AllEsports_Lobby_CityMatchProMatchClick = 73013, AllEsports_Lobby_CityMatchNormalMatchClick = 73014, AllEsports_Lobby_LocalMatchClick = 73015, AllEsports_Lobby_TPMDailyRewardProgressOpen = 73016, AllEsports_Lobby_TPMDailyRewardProgressClose = 73017, AllEsports_Lobby_TPMDailyRewardHelpClick = 73018, AllEsports_Lobby_TPMRuleClick = 73019, AllEsports_Lobby_TPMPrizePoolClick = 73020, AllEsports_Lobby_TPMGoToMatchClick = 73021, AllEsports_Lobby_TPMAllMatchesFormOpen = 73022, AllEsports_Lobby_TPMAllMatchFormClose = 73023, AllEsports_Lobby_NationalMatchGoToMatch = 73024, AllEsports_Lobby_BeansGiveawayClaimClick = 73025, AllEsports_Lobby_TPMClaimRewardClick = 73028, AllEsports_Lobby_CityMatchDragTicketStart = 73029, AllEsports_Lobby_CityMatchDragTicketEnd = 73030, AllEsports_Lobby_CityMatchSwitchLeftClick = 73031, AllEsports_Lobby_CityMatchSubscribeClick = 73032, AllEsports_Lobby_CommunityIdConfirm = 73033, AllEsports_Lobby_CommunityIdListChange = 73034, AllEsports_Lobby_NationalCommunityClick = 73035, AllEsports_Lobby_NationalMatchSubscribeClick = 73036, AllEsports_Lobby_TPMElementSubscribeMatchClick = 73037, AllEsports_Lobby_TPMSubscribeMatchClick = 73038, AllEsports_Lobby_CountDownSubscribeClick = 73039, AllEsports_Lobby_TPMAllMatchesHunterButtonClick = 73040, AllEsports_Lobby_NationalMatchNotOpenClick = 73041, AllEsports_Lobby_CityMatchCountDownUp = 73042, AllEsports_Lobby_CityMatchGuideVideoPlayEnd = 73043, AllEsports_Lobby_NationalMatchEntrySwitched = 73044, AllEsports_Lobby_NationalMatchSwitchRightClick = 73045, AllEsports_Lobby_NationalMatchListOpenClick = 73046, AllEsports_Lobby_CityMatchEntrySwitched = 73047, AllEsports_Lobby_CityMatchDragTicket = 73048, AllEsports_Lobby_CityMatchSwitchRightClick = 73049, AllEsports_Quick_Subscribe_OpenForm = 73050, AllEsports_NationalMatch_ResultButtonClick = 73051, AllEsports_Lobby_TPMCollegeMatchClick = 73052, AllEsports_lobby_TPMTicketDragStart = 73053, AllEsports_lobby_TPMTicketDrag = 73054, AllEsports_lobby_TPMTicketDragEnd = 73055, AllEsports_lobby_TPMTicketSwitched = 73056, AllEsports_lobby_TPMTicketPreviousClick = 73057, AllEsports_lobby_TPMTicketNextClick = 73058, AllEsports_lobby_TPMStreamClick = 73059, AllEsports_Lobby_LoseNotify_ContinueClick = 73060, AllEsports_Lobby_LoseNotify_AcceptInvitationClick = 73061, AllEsports_Lobby_WinNotify_ContinueClick = 73062, AllEsports_Lobby_WinNotify_AcceptInvitationClick = 73063, AllEsports_Lobby_NationalMatch_SubscribeableEntryClick = 73064, AllEsports_Lobby_NationalMatch_SubscribedEntryClick = 73065, AllEsports_Lobby_NationalMatch_InMatchEntryClick = 73066, AllEsports_Lobby_NationalMatch_NotInMatchEntryClick = 73067, AllEsports_Lobby_NationalMatch_MatchEndEntryClick = 73068, AllEsports_Lobby_NationalMatch_CityMatchEntryClick = 73069, AllEsports_Lobby_NationalMatch_ThemeMatchSubscribeableEntryClick = 73070, AllEsports_Lobby_NationalMatch_ThemeMatchSubscribedEntryClick = 73071, AllEsports_Lobby_NationalMatch_ThemeMatchMatchableEntryClick = 73072, AllEsports_Lobby_NationalMatch_ThemeMatchMatchEndEntryClick = 73073, AllEsports_Lobby_NationalMatch_ThemeMatchInComingEntryClick = 73074, AllEsports_Lobby_NationalMatch_ThemeMatchMatchIntervalEntryClick = 73075, AllEsports_Lobby_NationalMatch_PlayerBannerClick = 73076, AllEsports_Lobby_ThemeMatch_DailyMissionClick = 73077, AllEsports_Lobby_ThemeMatch_EntryClick = 73078, AllEsports_Lpbby_ThemeMatch_DailyMission_ClaimClick = 73079, AllEsports_Lpbby_ThemeMatch_DailyMission_GoToFinishClick = 73080, AllEsports_Lpbby_ThemeMatch_DailyMission_OneKeyClaimClick = 73081, AllEsports_Lobby_ThemeMatch_DailyMisson_ElementOnValidate = 73082, AllEsports_GuildRank_OpenForm = 73101, AllEsports_GuildRank_CloseForm = 73102, AllEsports_GuildRank_LBSMenu_Click = 73103, AllEsports_GuildRank_ItemClick = 73104, BackPeakTask_OpenForm = 74000, BackPeakTask_TabMenuChg = 74001, LadderDayilyTask_OpenForm = 74100, GameVideo_ClickClose = 74200, GameVideo_RollingTilte = 74201, GameVideo_PlayWithId = 74202, VideoListElem_ClickSwitchToWindow = 74203, VideoListElem_ClickSwitchToFullScreen = 74204, NewbieTask_OpenForm = 74300, NewbieTask_Settle_ConfirmAward = 74301, VideoList_FullScreenClose = 74305, DailyTask_OpenForm = 74400, DailyTask_LadderTravel_ShowStoryDone = 74401, DailyTask_LevelActivity_ClickGet = 74402, DailyTask_GrowTask_ClickLevelNode = 74403, DailyTask_Usual_OneKeyAward_Rsp = 74404, DailyTask_Click_Open_Huoyue_Addition = 74405, DailyTask_Click_Submit = 74406, DailyTask_HuoyuePool_Transfer_Form_Closed = 74407, SeasonChallengeTask_OpenForm = 74500, GuideLevel_GuideTips_CloseAnim_End = 74501, GuideLevel_GuideTips_Detail_Closed = 74502, KingTime_SmallVideoWindow_Closed = 74503, FightValueFunction_OpenForm = 74600, BattleHint_Loading_Hint_Finish = 74700, BattleHint_Loading_Hint_Detail_Down = 74701, BattleHint_Dead_Hint_Click_Detail = 74702, BattleHint_Dead_Hint_TimerUp = 74703, BattleHint_Loading_Hint_Detail_Up = 74704, BattleVideo_Guide_Click = 74705, HeroPracticeCourt_OpenForm = 74800, HeroPracticeCourt_StartBasicTraining = 74801, HeroPracticeCourt_StartSimilativeTraining = 74802, HeroPracticeCourt_StartAbilityTest = 74803, HeroPracticeCourt_OpenRewardForm = 74804, HeroPractice_BasicTrain_Click_SkillCombo = 74805, HeroPracticeCourt_OpenTargetForm = 74806, HeroPracticeCourt_Get_Target_Reward = 74807, HeroPracticeCourt_SelAIHeroConfirm = 74808, HeroPracticeCourt_SelAILevel = 74809, HeroPracticeCourt_OneKeyTargetAward = 74810, HeroPracticeCourt_Target_Click_Goto = 74811, HeroPracticeCourt_Settlement_OpenForm = 74812, AllEsports_CitanItemClick = 80000, AllEsports_CitanViewBtnClick = 80001, AllEsports_CitanWantBtnClick = 80002, EsportsRoom_OnPrepareBtnClick = 80003, EsportsRoom_OnCancelPrepareBtnClick = 80004, EsportsRoom_OnBranchRoadDropListSelect = 80005, AllEsports_CitanInfoBtnClick = 80006, AllEsports_CitanWantCDTimeUp = 80007, SettlementSys_HeroPractice_NextLevel = 80201, SettlementSys_HeroPractice_ReChallenge = 80202, SettlementSys_HeroPractice_MainForm = 80203, HeroTrain_SelectHero_OpenForm = 80204, HeroTrain_SelectHero_CloseForm = 80205, Offline1V1_SelectHero_OpenForm = 80206, Offline1V1_SelectHero_CloseForm = 80207, Offline5V5_SelectHero_OpenForm = 80208, Offline5V5_SelectHero_CloseForm = 80209, JueWuAssistant_StartAIShow_Btn_Click = 80300, JueWuAssistant_StopAIShow_Btn_Click = 80301, Settings_JueWuAssistantAIShowHelp = 80302, Settings_JueWuAssistantAIInstructionHelp = 80303, JueWuAssistant_AIShowGray_Btn_Click = 80304, JueWuAssistant_Revive_Immediately_Accept = 80305, JueWuAssistant_Revive_Immediately_Cancel = 80306, InBattleMsg_OnSignalNodeAnimationPlayEnd = 80450, InBattleMsg_OnClickAutoMsg = 80451, InBattleMsg_OnAutoMsgTimerEnd = 80452, Invite_AllESports_ClickAccept = 80453, Invite_AllESports_ClickHoldOn = 80454, InBattleMsg_OnClickShakeHand = 80455, InBattleMsg_OnShakeHandTimerEnd = 80456, InBattleMsg_OnClickSettleShakeHand = 80457, InBattleMsg_OnSettleShakeHandTimerEnd = 80458, CustomStatus_OnClickStatus = 80459, CustomStatus_OnStatusLikeRecordElementEnable = 80460, CustomStatus_OnClickSetStatus = 80461, CustomStatus_OnClickCancelStatus = 80462, CustomStatus_OnClickCancelStatusConfirm = 80463, CustomStatus_OnClickShowStatusList = 80464, CustomStatus_OnClickShowStatusLikeRecord = 80465, CustomStatus_ShowCustomStatusForm = 80466, CustomStatus_OnTimeChanged = 80467, InviteForm_ClickHead = 80468, MatchingForm_ClickThumbsUp = 80469, MatchingForm_ThumbsUpTimeUp = 80470, CustomStatus_OnClickQuickSendStatusComfirm = 80471, CustomStatus_OnClickQuickSendStatus = 80472, MatchingForm_CloseDirectlyJoinTeamEnable = 80473, MatchingForm_CloseDirectlyJoinTeamValueChanged = 80474, MatchingForm_CareerTitleShowTimeUp = 80475, CustomStatus_OnClickCloseSkinUnlockInfo = 80476, CustomStatus_OnClickJumpToBuySkin = 80477, MatchingForm_OnRefreshReserveJoinTeamGameTime = 80478, CustomNews_OnClickShowCustomNewsList = 80479, CustomNews_OnClickCustomNewsTipDown = 80480, CustomNews_OnClickCustomNewsTipUp = 80481, CustomNews_OnCustomNewsElementEnable = 80482, CustomNews_OnClickStatusLikeBtnDown = 80484, CustomNews_OnClickLikeBtn = 80485, MiShu_OnClickCustomNews = 80486, MiShu_OnClickCustomNewsLike = 80487, CustomNews_OnHoldStatusLikeBtn = 80488, CustomNews_OnClickUpdateTipDown = 80489, AllEsports_BeansMall_OpenForm = 80500, AllEsports_BeansMall_CloseForm = 80501, AllEsports_BeansMall_OnItemSelected = 80502, AllEsports_BuyAndUseReviveCard = 80503, AllEsports_Task_OpenForm = 80600, AllEsports_Task_CloseForm = 80601, AllEsports_WeekTask_OnClickRefreshTask = 80602, AllEsports_WeekTask_OnConfirmRefreshTask = 80603, AllEsports_WeekTask_RefreshTaskList = 80604, AllEsports_WeekTask_OpenBigRewardReviewForm = 80605, AllEsports_WeekTaskScore_OnClickReceiveAward = 80606, AllEsports_SeasonTask_OnClickGotoFinish = 80607, AllEsports_SeasonTask_OpenShowAdvanceForm = 80608, AllEsports_SeasonTask_CloseShowAdvanceForm = 80609, AllEsports_SeasonTask_OnClickOneKeyReceiveAward = 80610, AllEsports_Task_OnSelectMenuTab = 80611, AllEsports_WeekTask_CloseBigRewardReviewForm = 80612, AllEsports_InBattleDoubleBeans_OnClickConfirm = 80613, AllEsports_InBattleDoubleBeans_OnClickCancle = 80614, AllEsports_InBattleDoubleBeans_OnClickNotify = 80615, AllEsports_Reward_OnShareClick = 80616, AllEsports_Reward_OnTakeCashClick = 80617, AllEsports_Reward_OnTakeGiftClick = 80618, AllEsports_WeekTask_OnSelectRelatedRewardItem = 80619, AllEsports_WeekTask_OnSelectRedPacketRewardItem = 80620, PrivacyLBSChat_OnClickExit = 80621, PrivacyLBSChat_OnClickOpen = 80622, PrivacyLBSChat_OnClickExitConfirm = 80623, PrivacyLBSChat_OnClickOpenConfirm = 80624, AllEsports_SeasonTask_OnClickOpenRule = 80625, AllEsports_SeasonTask_OpenGuideForm = 80626, AllEsports_SeasonTask_CloseGuideForm = 80627, AllEsports_InBattleDoubleBeans_OnDoubleSucc = 80628, AllEsports_ScoreExchange_OnDrawOneClick = 80629, AllEsports_ScoreExchange_OnDrawFiveClick = 80630, AllEsports_ReviveCard_OnOpenForm = 80631, AllEsports_ReviveCard_OnCloseForm = 80632, AllEsports_ReviveCard_OnClickToUse = 80633, AllEsports_ClearCard_OnConfirmClickToUse = 80634, AllEsports_ScoreExchange_OnDrawClickAnimationEnd = 80635, AllEsports_ScoreExchange_OnClickOpenRule = 80636, AllEsports_WeekTask_OpenAwardDetail = 80637, AllEsports_WeekTask_OpenWeekAwardBoxForm = 80638, AllEsports_WeekTask_CloseWeekAwardBoxForm = 80639, AllEsports_WeekTask_OnWeekAwardBoxFormTimerUp = 80640, AllEsports_WeekTask_OpenWeekTaskADForm = 80641, AllEsports_WeekTask_CloseWeekTaskADForm = 80642, AllEsports_ChampoinPlayer_OpenForm = 80643, AllEsports_ChampoinPlayer_Honor_OpenForm = 80644, AllEsports_CityBadgeDetail_OpenForm = 80800, AllEsports_CityBadgeDetail_CloseForm = 80801, AllEsports_CityBadgeDetail_SwitchLeftPriviledge = 80802, AllEsports_CityBadgeDetail_SwitchRightPriviledge = 80803, AllEsports_CityBadgeDetail_OnClickPlayerHead = 80804, AllEsports_ChangeCityBadge_OnConfirmSetLocation = 80805, AllEsports_ShowBadge_OpenForm = 80806, AllEsports_ShowBadge_CloseForm = 80807, AllEsports_ShowBadge_Select = 80808, AllEsports_ShowBadge_GoToGet = 80809, AllEsports_ShowBadge_Set = 80810, MatchHonor_HonorElementSelect = 80900, MatchHonor_Use = 80901, MatchHonor_Unuse = 80902, MatchHonor_GoToGet = 80903, AllEsportsGuildTrail_GoToMatch = 90000, CustomStrategy_RecommendRule = 90001, AIPractice_Helper = 90002, NoneAdultForm_Open = 90003, NoneAdultForm_Close = 90004, NoneAdultForm_OpenDatailInfo = 90005, PlayerInfo_QQSayHello = 90006, ASSIST_JUMPURL = 90007, Setting_Basic_Gamecredit = 90008, Setting_Basic_GamecreditGo = 90009, Setting_Basic_SecureLimitGo = 90010, Setting_Basic_SecureLimitOk = 90011, CustomStrategy_ShareSuit = 90012, Setting_Basic_DeviceLimitGo = 90013, Setting_Basic_DeviceLimitOk = 90014, Setting_Basic_GamecreditOk = 90015, AllEsports_Certificate_Province_OpenForm = 90100, AllEsports_Certificate_Province_CloseForm = 90101, AllEsports_Certificate_TimerCountDownUp = 90102, AllEsports_Certificate_Finish_OnClickDown = 90103, AllEsports_Certificate_Finish_OnClickUp = 90104, AllEsports_Certificate_Share_OnClickSharePic = 90105, AllEsports_Certificate_Share_OnClickConfirm = 90106, AllEsports_Certificate_OpenEntranceForm = 90107, AllEsports_Certificate_CloseEntranceForm = 90108, AllEsports_Certificate_OnClickToCertify = 90109, AllEsports_Certificate_OnClickToBegin = 90110, AllEsports_Certificate_OnClickJumptoNextStep = 90111, AllEsports_Certificate_Share_OnPlayAnimationEnd = 90112, AllEsports_Certificate_Review_OnMatch0TimerUp = 90113, AllEsports_Certificate_Review_OnMatch1TimerUp = 90114, AllEsports_Certificate_Review_OnMatch2TimerUp = 90115, AllEsports_Certificate_City_OpenForm = 90116, AllEsports_Certificate_City_CloseForm = 90117, AllEsports_Certificate_City_TimerCountDownUp = 90119, AllEsports_Certificate_Region_OpenForm = 90120, AllEsports_Certificate_Region_CloseForm = 90121, AllEsports_Certificate_Region_TimerCountDownUp = 90123, AllEsports_Certificate_Nation_OpenForm = 90124, AllEsports_Certificate_Nation_CloseForm = 90125, AllEsports_Certificate_Entrance_OnClickLookBack = 90126, AllEsports_Certificate_Entrance_OnClickShare = 90127, AllEsports_Certificate_EntranceShare_OpenForm = 90128, AllEsports_Certificate_EntranceShare_CloseForm = 90129, AllEsports_Certificate_Rewards_OpenForm = 90130, AllEsports_Certificate_Rewards_CloseForm = 90131, AllEsports_Certificate_Entrance_OnClickLookBackConfirm = 90132, AllEsports_Certificate_Entrance_OnClickCertificate = 90133, SelectHero_QuickMsg_Click_First = 91000, SelectHero_QuickMsg_Click_Second = 91001, SelectHero_QuickMsg_Click_Third = 91002, Invite_ESportsMemberListElementEnable = 91003, Invite_SendInviteESportsMember = 91004, Matching_OnClickTeamSetting = 91005, Setting_IntimacyDirectlyJoinTeam = 91006, Setting_ShowDetailTeamInfo = 91007, Matching_OnClickIntimacyDirectlyJoinTeamRule = 91008, Matching_OnClickShowDetailTeamInfoRule = 91009, SocialProfile_ClickToppingFriend = 91010, SocialProfile_ShowStatusDes = 91011, SocialProfile_HideStatusDes = 91012, Setting_FriendDirectlyJoinTeam = 91013, FriendNews_Form_Open = 91051, FriendNews_Form_Close = 91052, FriendNews_Rule_Btn_Click = 91053, FriendNews_RecentActivity_PlayerList_SelectChanged = 91054, FriendNews_RecentActivity_Jump_WishList = 91055, FriendNews_RecentActivity_PlayerList_ClickLeft = 91056, FriendNews_RecentActivity_PlayerList_ClickRight = 91057, FriendNews_RecentActivity_Jump_GiftCenter = 91058, FriendNews_Birthday_View_BtnClick = 91059, HeroSelect_BanPick_SelectOmnipotentRoadType = 91101, HeroSelect_BanPick_NoneRcmdSelectTimerUp = 91102, HeroSelect_BanPick_ExpandSkillList = 91103, HeroSelect_BanPick_ShrinkSkillList = 91104, Battle_Hero_ItemMaking_Open = 91151, Battle_Hero_ItemMaking_Close = 91152, Battle_Hero_ItemMaking_ListOnValidate = 91153, Battle_Hero_ItemMaking_ItemClick = 91154, Battle_Hero_ItemMaking_ItemMaking = 91155, Battle_Hero_ItemMaking_ItemGive = 91156, MiShu_OpenReportMsgBox = 91201, MiShu_CloseReportMsgBox = 91202, MiShu_MsgBoxItemEnable = 91203, MiShu_MsgBoxItemSelect = 91204, MiShu_OnClick_Copy = 91205, MiShu_OnClick_CopyAll = 91206, MiShu_OnClick_Close = 91207, MiShu_ShowReportMsgInMsgBox = 91208, HeroSkin_BookSkin = 91209, HeroSkin_CancelBookSkin = 91210, Copy_StringPara = 91211, AsianGames_GameEntry = 91300, AsianGames_TrainingEntry = 91301, AsianGames_SelectPlayType = 91302, EquipSuit_OpenForm = 91320, EquipSuit_CloseForm = 91321, EquipSuit_ApplySuit = 91322, EquipSuit_ApplyEquip = 91323, EquipSuit_ApplySymbol = 91324, EquipSuit_SymbolPreview = 91325, EquipSuit_EquipPreview = 91326, EquipSuit_SuitElementEnable = 91327, EquipSuit_HideSymbolPreview = 91328, EquipSuit_HideEquipPreview = 91329, EquipSuit_ChangeSuitName = 91330, EquipSuit_ConfirmChangeSuitName = 91331, EquipSuit_MoreSymbolPage = 91332, EquipSuit_ChooseSuitSlot = 91333, EquipSuit_UnlockSuitSlot = 91334, EquipSuit_Purchase_SuitSlot = 91335, EquipSuit_RevertToLastTimeUsedSuit = 91336, EquipSuitRevert_ConfirmRevertSuit = 91337, EquipSuitRevert_OpenForm = 91338, EquipSuitRevert_CloseForm = 91339, EquipSuitRevert_SymbolPreview = 91340, EquipSuitRevert_EquipPreview = 91341, EquipSuitRevert_HideEquipPreview = 91342, EquipSuitRevert_HideSymbolPreview = 91343, EquipSuit_OnClickRecentAdjustHeroSuit = 91344, EquipSuit_ShowShareFuncFolder = 91345, EquipSuit_Click_OpenSuitCode = 91346, EquipSuit_Click_OpenSuitShare = 91347, Cheat_SyncFiles = 91401, Cheat_DeletaAllSyncedFiles = 91402, IDIP_OpenKf_Solution = 91403, Bag_ItemHelp_OpenKfPix = 91404, Mall_kf_OpenKfPix = 91405, Cheat_OpenPredownloadDebugMode = 91406, Cheat_ClosePredownloadDebugMode = 91407, Login_OpenChangePayMainBodyUrl = 91408, AllEsports_SeasonInheritance_OnContinueClick = 91500, AllEsports_SeasonInheritance_OnConfirmClick = 91501, AllEsports_Honor_OpenForm = 91520, AllEsports_Honor_RecentGame_ItemSelect = 91521, AllEsports_Honor_RecentGame_ItemEnable = 91522, Login_OpenLoginChildPrivacySDKUrl = 91523, FriendChat_AddSnsFriend = 91524, AssistShowMsgBox_Confirm = 91525, AssistShowMsgBox_Cancel = 91526, AssistPrivacy_Seeting_Toggle = 91527, Settings_OnClickAssistHelpMe = 91528, Settings_Private_XgPush_FriendInvite = 91529, Settings_Private_XgPush_SelectHero = 91530, Settings_Private_XgPush_OpenSetting = 91531, Settings_Private_XgPush_OpenXgNotifactionSetting = 91532, SharePvpAchievementNormalMediator_OpenForm = 91533, SharePvpAchievementNormalMediator_CloseForm = 91534, SharePvpAchievementNormalMediator_DropListShow = 91535, SharePvpAchievementNormalMediator_DropListSelectItem = 91536, SharePvpAchievementNormalMediator_AchieveItemSelect = 91537, SharePvpAchievementNormalMediator_FullRectClick = 91538, ShareWXState = 91539, RequestAndroidPermmisionConfirm = 91540, RequestAndroidPermmisionConfirm_Down = 91541, RequestAndroidPermmisionConfirm_Up = 91542, RequestAndroidPermmisionConfirm_Drag = 91543, Settings_Private_XgPush_Huoyue_Addition_Full = 91544, Mall_HotRecommend_OnDiscountCoupon = 91545, Settings_OnClickFightWatchHelpMe = 91546, ReflowPrivacy_Setting_Toggle = 91547, SeasonPass_Setting_Toggle = 91548, Settings_QQGameCenter_OpenSetting = 91549, Mall_HotRecommend_OnClickTrainingSkin = 91550, Birthday_SystemInvitationCard_OpenForm = 91551, Birthday_SystemInvitationCard_CloseForm = 91552, Birthday_SystemInvitationCard_ReceiveBtnClick = 91553, Birthday_Benefits_OpenForm = 91554, Birthday_Benefits_CloseForm = 91555, Birthday_InviteFriend_OpenForm = 91556, Birthday_InviteFriend_CloseForm = 91557, Birthday_InviteSelectFriend_OpenForm = 91558, Birthday_InviteSelectFriend_CloseForm = 91559, Birthday_ChooseSkin_OpenForm = 91560, Birthday_ChooseSkin_CloseForm = 91561, Birthday_ChooseSkin_ClickAddItem = 91562, Birthday_ChooseSkin_ConfirmChooseSkin = 91563, Birthday_ChooseSkin_Cancle = 91564, Birthday_InviteFriend_MsgTypeDownBtnClick = 91565, Birthday_InviteFriend_MsgConfirmBtnClick = 91566, Birthday_InviteFriend_SendBtnClick = 91567, Birthday_InviteFriend_SelfBtnClick = 91568, Birthday_InviteFriend_ConfirmSendBtnClick = 91569, Birthday_HappyBirthdayCard_OpenForm = 91572, Birthday_HappyBirthdayCard_CloseForm = 91573, Birthday_FriendInvitationCard_GiftOpenAnimationPlayOver = 91574, Birthday_FriendInvitationCard_ThanksBtnClick = 91577, Birthday_InviteSelectFriend_ConfirmBtnClick = 91578, Birthday_InviteSelectFriend_OnClickToSearchFriend = 91579, Birthday_InviteSelectFriend_OnClickToClearSearchFriendInput = 91580, Birthday_InviteSelectFriend_SearchFriendInput_OnValueChanged = 91581, Birthday_InviteSelectFriend_ToggleBtnClick = 91582, Birthday_InviteFriend_MsgTypeChanged = 91583, Birthday_HappyBirthdayCard_BeginBtnClick = 91584, Birthday_Shop_OnTimeEnd = 91585, Birthday_Benefits_DrawBigGiftBtnClick = 91586, Birthday_ChooseSkin_FinishBtnClick = 91587, Birthday_Benefits_OpenEditProfile = 91588, Birthday_HappyBirthdayCard_FinishBtnClick = 91589, Birthday_HappyBirthdayCard_CandleAnimationEnd = 91590, Birthday_ChooseSkin_InviteFriendBtnClick = 91591, Birthday_Shop_RuleBtnClick = 91592, Birthday_ChooseSkin_ConfirmFinishBtnClick = 91593, Birthday_Room_SendBless = 91594, Birthday_Benefits_RuleBtnClick = 91595, Birthday_Benefits_BookRemindBtnClick = 91596, Birthday_ChooseSkin_RuleBtnClick = 91597, Birthday_Benefits_UnBookRemindBtnClick = 91598, Birthday_FriendInvitationCard_MsgDropListDownBtnClick = 91599, Birthday_FriendInvitationCard_MsgDropListTypeChanged = 91600, Birthday_HappyBirthdayCard_GoToBtnClick = 91601, Birthday_SendBlessGift_Form_Open = 91602, Birthday_SendBlessGift_Form_Close = 91603, Birthday_SendBlessGift_RuleBtnClick = 91604, Birthday_SendBlessGift_SendBtnClick = 91605, Birthday_SendBlessGift_ConfirmSend = 91606, Birthday_SendBlessGift_ListSelectChanged = 91607, BirthdayActivity_OperateWish_Form_Open = 91608, BirthdayActivity_OperateWish_Form_Close = 91609, Birthday_SendBlessGift_OperateWish_Anonymous_ToggleValueChanged = 91610, Birthday_SendBlessGift_OperateWish_PrivateToTeamMember_ToggleValueChanged = 91611, Birthday_SendBlessGift_OperateWish_Assist_Wish_Item = 91612, Birthday_SendBlessGift_OperateWish_Assist_Wish_Item_Confirm = 91613, Birthday_SendBlessGift_OperateWish_Present_WishPoint_Btn_Click = 91614, Birthday_SendBlessGift_OperateWish_Level_List_Item_Select = 91615, Birthday_SendBlessGift_OperateWish_SecurePwdConfirmAssist = 91616, Birthday_SendBlessGift_OperateWish_InputFieldValueChanged = 91617, ShareKingTitle_ToggleHeroShow = 91651, ShareKingTitle_OnElementEnable = 91652, AllEsports_PlayerCardEdit_SaveButtonClick = 91700, AllEsports_PlayerCardEdit_ResetButtonClick = 91701, AllEsports_PlayerCardEdit_BgSelectChanged = 91702, AllEsports_PlayerCardEdit_ImageSelectChanged = 91703, AllEsports_PlayerCardEdit_DecorationSelectChanged = 91704, AllEsports_PlayerCardEdit_TabSelectChanged = 91705, AllEsports_PlayerCardEdit_OnEditClick = 91706, AllEsports_MatchHonor_OnTabChanged = 91707, AllEsports_PlayerCardEdit_OnResetCancel = 91708, AllEsports_PlayerCardEdit_OnResetConfirm = 91709, AllEsports_PlayerCardEdit_OnLeaveClick = 91710, AllEsports_PlayerCardEdit_OnLeaveCancel = 91711, AllEsports_PlayerCardEdit_OnLeaveConfirm = 91712, AllEsports_PlayerInfo_PlayerCardGoto = 91713, AllEsports_PlayerInfo_PlayerCardGotoConfirm = 91714, AllEsports_PlayerInfo_OpenSettingLoadingCard = 91715, AllEsports_ContributionRank_OpenForm = 91800, AllEsports_ContributionRank_CloseForm = 91801, AllEsports_ContributionRank_AreaTab_Select = 91802, Battle_AllEsports_Contribution_OpenDetail = 91803, Battle_AllEsports_Contribution_CloseDetail = 91804, AllEsprots_ContributionRank_SettleTagAnimEnd = 91805, AllEsports_HeroRank_SelectedHero_Open = 91806, AllEsports_HeroRank_SelectedHero_Confirm = 91807, AllEsports_LobbyLiveFormOpen = 91808, AllEsports_LobbyLiveFormJumpToMatchLive = 91809, Buy_JumpToUserBackflowForm = 91851, Buy_ContinueWithoutJump = 91852, SkinRedEnvelope_SelectHero_Send = 91901, SkinRedEnvelope_SelectHero_Capture = 91902, SkinRedEnvelope_FormBox_Open = 91903, SkinRedEnvelope_FormBox_Close = 91904, SkinRedEnvelope_FormBox_JumpChat = 91905, SkinRedEnvelope_FormBox_JumpBattle = 91906, SkinRedEnvelope_Form_SelectHero_Award_Open = 91907, SkinRedEnvelope_Form_SelectHero_Award_Close = 91908, SkinRedEnvelope_Form_SelectHero_FakeThinks = 91909, GetNewSkinCollection_OnOpenForm = 91951, GetNewSkinCollection_OnCloseForm = 91952, GetNewSkinCollection_OnGotoPlayerInfoCollectionTab = 91953, GetNewSkinCollection_OnClickShare = 91954, SkinBookCollectionShare_OnOpenForm = 91955, SkinBookCollectionShare_OnCloseForm = 91956, SkinCollectionBook_Form_Open = 91957, SkinCollectionBook_Form_Close = 91958, SkinCollectionGrade_Form_Open = 91959, SkinCollectionGrade_Form_Close = 91960, SkinCollectionAchievement_Form_Open = 91961, SkinCollectionAchievement_Form_Close = 91962, SkinCollectionTitleChoose_Form_Open = 91963, SkinCollectionTitleChoose_Form_Close = 91964, SkinCollectionTitleChoose_UseTitle = 91965, SkinCollectionTitleChoose_UnuseTitle = 91966, SkinCollectionTitleChoose_NewActivatedTitleItem_Click = 91967, SkinCollectionAchievement_OnPrivilegeBtnClick = 91968, SkinCollectionAchievement_OnActivateBtnClick = 91969, SkinCollectionFirstGradeUp_Form_Open = 91970, SkinCollectionSecondGradeUp_Form_Open = 91971, SkinCollectionFirstGradeUp_Form_Close = 91972, SkinCollectorAchievementComplete_Form_Open = 91973, SkinCollectorPrivilegeActivated_Form_Open = 91974, SkinCollectionSecondGradeUp_Form_Close = 91975, SkinCollectionFirstGradeUpShare_Form_Open = 91976, SkinCollectionFirstGradeUp_ShareBtnClick = 91977, SkinCollectionGrade_SwitchToGradeByIndex = 91978, SkinCollectionAchievement_JumpToSkin = 91979, SkinShare_SwitchCollectorTitleShow = 91980, SkinCollectionAchievementDetail_Form_Open = 91981, SkinCollectionAchievementDetail_Form_Close = 91982, SkinCollectionAchievement_OnRefreshWeeklyPanelClick = 91983, SkinCollectorAchievementDetail_ClickPrevious = 91984, SkinCollectorAchievementDetail_ClickNext = 91985, SkinCollectionTitleChoose_Switch_Setting_Open = 91986, SkinShare_SwitchCollectorTitleShowInVideo = 91987, SkinCollectorAchievement_EnterBtn_Click = 91988, SkinCollection_OpenSkinBookBtn_Click = 91989, HeroSkinResMgr_FormOpen = 92001, HeroSkinResMgr_FormClose = 92002, HeroSkinResMgr_SelectSkinResType = 92003, HeroSkinResMgr_SelectedSkinResTypeChanged = 92004, HeroSkinResMgr_SelectSkinResTypePoster = 92005, HeroSkinResMgr_SelectedSkinResTypePosterChanged = 92006, HeroSkinResMgr_JumpToBuyPoster = 92007, HeroSkinResMgr_UsePoster = 92008, HeroSkinResMgr_SelectSkinResTypeIdleAction = 92009, HeroSkinResMgr_SelectedSkinResTypeIdleActionChanged = 92010, HeroSkinResMgr_JumpToBuyIdleAction = 92011, HeroSkinResMgr_UseIdleAction = 92012, HeroSkinResMgr_SelectSkinResTypeVoice = 92013, HeroSkinResMgr_SelectedSkinResTypeVoiceChanged = 92014, HeroSkinResMgr_JumpToBuyVoice = 92015, HeroSkinResMgr_UseVoice = 92016, HeroSkinResMgr_SelectSkinResTypeSoundEffect = 92017, HeroSkinResMgr_SelectedSkinResTypeSoundEffectChanged = 92018, HeroSkinResMgr_JumpToBuySoundEffect = 92019, HeroSkinResMgr_UseSoundEffect = 92020, HeroSkinResMgr_SelectSkinResTypeBgm = 92021, HeroSkinResMgr_SelectedSkinResTypeBgmChanged = 92022, HeroSkinResMgr_JumpToBuyBgm = 92023, HeroSkinResMgr_UseBgm = 92024, HeroSkinResMgr_Poster_TimeChanged = 92025, HeroSkinResMgr_Poster_TimeUp = 92026, HeroSkinResMgr_Voice_TimeChanged = 92027, HeroSkinResMgr_Voice_TimeUp = 92028, HeroSkinResMgr_SoundEffect_TimeChanged = 92029, HeroSkinResMgr_SoundEffect_TimeUp = 92030, HeroSkinResMgr_Bgm_TimeChanged = 92031, HeroSkinResMgr_Bgm_TimeUp = 92032, HeroSkinResMgr_IdleAction_TimeChanged = 92033, HeroSkinResMgr_IdleAction_TimeUp = 92034, HeroSkinRes_RoomView_ModelDrag = 92035, HeroSkinResMgr_Signature_Select = 92036, HeroSkinResMgr_Signature_Get = 92037, HeroSkinResMgr_Signature_Use = 92038, HeroSkinResMgr_Signature_Switch_Preview = 92039, HeroSkinResMgr_SignatureAndHeroSkin_Buy = 92040, HeroSkinResMgr_SignatureAndHeroSkin_Buy_Confirm = 92041, HeroSkinResMgr_SignatureAndHeroSkin_Buy_Confirm_GuideAchiveDianQuan = 92042, UserBackflow_Backflowtrial_TryPayToActivate = 92051, UIFade_CloseAtmosphereForm = 92071, Lobby_OnClickOpenRcampus = 92072, GiftCenter_ViewGiftSkin_ThanksBirthdayGift_BtnClick = 92105, GiftCenter_RebateBirthdayGift_GiftOpenAnimationPlayOver = 92107, GiftBox_SelectFriend_OnClickToSearchFriend = 92108, GiftBox_SelectFriend_OnClickToClearSearchFriendInput = 92109, GiftBox_SelectFriend_SearchFriendInput_OnValueChanged = 92110, GiftBox_SelectFriend_InviteBtnClick = 92111, GiftBox_SelectFriend_OpenForm = 92112, GiftBox_SelectFriend_CloseForm = 92113, GiftCenter_EnterGiftBoxModeBtnClick = 92114, GiftCenter_ExitGiftBoxModeBtnClick = 92115, GiftCenter_BuyGiftSkin_ClickLeft = 92116, GiftCenter_BuyGiftSkin_ClickRight = 92117, BigPictureUseablePreview_Form_Open = 92119, BigPictureUseablePreview_Form_Close = 92120, CUseableBigIconDescUse_ToUseBtnClick = 92121, CUseableBigIconDescUse_RuleBtnClick = 92122, Gift_PresentSucc_Form_Open = 92123, Gift_PresentSucc_Form_Close = 92124, GiftCenter_OnClickToAddGift = 92125, GiftCenter_OnClickToRemoveGift = 92126, GiftCenter_Form_Refresh = 92127, GiftCenter_OnClickToChangeFriendForGiftBox = 92128, GiftCenter_GiftBoxSend_BtnClick = 92129, GiftCenter_ViewGiftSkin_Form_Close = 92130, GiftBox_AddItem_Form_Open = 92131, GiftBox_AddItem_Form_Close = 92132, GiftBox_AddItem_AddCountBtnClick = 92133, GiftBox_AddItem_DecCountBtnClick = 92134, GiftBox_AddItem_ConfirmBtnClick = 92135, GiftCenter_ExitGiftBoxModeConfirmBtnClick = 92136, GiftBox_BuyViewGiftSkin_Form_Open = 92137, GiftBox_BuyViewGiftSkin_Form_Close = 92138, GiftBox_BuyViewGiftSkin_MsgTypeChanged = 92139, GiftBox_BuyViewGiftSkin_MsgTypeDownBtnClick = 92140, GiftBox_BuyViewGiftSkin_MsgConfirmBtnClick = 92141, GiftBox_BuyViewGiftSkin_BuyBtnClick = 92142, GiftBox_ConfirmBuyForFriend = 92143, GiftBox_SecurePwdConfirmBuyForFriend = 92144, GiftBox_GiftSendAnimationPlayOver = 92145, GiftBox_BuyViewGiftSkin_CloseAnimationEnd = 92146, Mall_GiftAvatarItemElementEnable = 92149, Mall_Gift_DownLoadTargetPhotoFail = 92150, Mall_Gift_PhotoBtnClick = 92151, Mall_Gift_DownLoadPhotoCfgSucc = 92152, Mall_Gift_DownLoadPhotoCfgFail = 92153, CommonInvite_OnOpenForm = 92301, CommonInvite_OnCloseForm = 92302, CommonInvite_OnPlayModeSelectTimerUpdate = 92303, CommonInvite_OnPlayModeSelectTimerUp = 92304, CommonInvite_OnPlayModeConfirm = 92305, CommonInvite_OnPlayModeCancel = 92306, CommonInvite_Invite_TabChange = 92307, CommonInvite_RefreshGameStateTimeout = 92308, CommonInvite_OnLBSRefreshTimerUp = 92309, Invite_OnLBSRefreshTimerUp = 92309, CommonNotification_FormClose = 92351, CommonNotification_RefreshTimeOut = 92352, CommonNotification_OnClickNode = 92353, CommonNotification_OnCloseFormBtnClick = 92354, CommonNotification_OnAnimEndClose = 92355, CommonNotificaiotn_OnDragLightNode = 92356, CommonNotification_OnOpenForm = 92357, CommonNotification_OnCloseFriendInviteBtnClick = 92358, CommonNotification_OnCloseFriendAskForInviteBtnClick = 92359, CommonNotification_OnCloseFriendReserveBtnClick = 92360, OnlineNtf_PrivacySetting_FormOpen = 92361, Settings_Slider_OnIntimacyFriendVarChange = 92362, Settings_Slider_OnBackFlowFriendVarChange = 92363, CommonNotification_OnCloseFormWithAnim = 92364, AllEsports_SettleJoinTeam_OnClickJoinButton = 92401, AllEsports_NationalMatchGuide_OnTimerCountDown = 92402, AllEsports_OnChampionCupAnimationEnd = 92403, AllEsports_SettleJoinTeam_OnClickCloseDetailBtn = 92404, AllEsports_SettleJoinTeam_OnCloseDetailTimerUp = 92405, HeroCustomOverview_BattleUISkin_HeroSelectForm_Buy = 92451, HeroCustomOverview_BattleUISkin_HeroSelectForm_Click = 92452, HeroCustomOverview_BattleUISkin_HeroSelectForm_Buy_Confirm = 92453, YearStory_OpenLobby = 92501, YearStory_CloseLobby = 92502, YearStory_Lobby_OpenRules = 92503, YearStory_Lobby_OpenSeasonVideo = 92504, YearStory_SeasonGoal_ReqGetAward = 92505, YearStory_SeasonGoal_GetAwardRsp = 92506, YearStory_SeasonGoal_ValueChange = 92507, YearStory_Lobby_ShowHeroVoicePanel = 92508, YearStory_Lobby_HideHeroVoicePanel = 92509, YearStory_Lobby_HeroVoice_ElemEnable = 92510, YearStory_Lobby_HeroVoice_ElemChange = 92511, YearStory_OpenSeasonGoal = 92512, YearStory_CloseSeasonGoal = 92513, YearStory_SeasonGoal_ChangeSubTask = 92514, YearStory_Display_AnimEndEvent = 92515, YearStory_Display_VideoEndEvent_FullScreen = 92516, YearStory_Display_WaitInputEvent = 92517, YearStory_Lobby_FadeIn = 92518, YearStory_Record_GetAwardRsp = 92519, YearStory_Display_StoryFormClose = 92520, YearStory_Display_VideoEndEvent_Interaction = 92521, YearStory_Display_Interaction_Interrupt_Lobby = 92522, YearStory_Display_WaitSwitchEvent = 92523, YearStory_Display_WaitTriggerEvent = 92524, YearStory_Lobby_HideTriggerPanel = 92525, YearStory_Display_Interaction_Interrupt_Review = 92526, YearStory_Display_Interaction_Interrupt_Editor = 92527, YearStory_OpenInteraction = 92528, YearStory_CloseInteraction = 92529, YearStory_PreBattle_Entry = 92531, YearStory_PreBattle_VideoDone = 92532, YearStory_Display_DoubleClick = 92533, YearStory_Lobby_ShowPreBattlePanel = 92534, YearStory_Lobby_HidePreBattlePanel = 92535, YearStory_Lobby_PreBattle_Entry = 92536, YearStory_SeasonGoal_ChangeMainTaskPage_Left = 92538, YearStory_SeasonGoal_ChangeMainTaskPage_Right = 92539, YearStory_Dialoge_AnimEnd = 92540, YearStory_Display_CompleteForm_FadeInEnd = 92541, YearStory_FullScreenVideo_Skip = 92542, YearStory_Lobby_CheckSound_Cancel = 92543, YearStory_Lobby_CheckSound_Confirm = 92544, YearStory_Lobby_CheckSound_SoundOff = 92545, YearStory_Lobby_CheckSound_SoundOn = 92546, YearStory_Display_FullSceenVideo_OpenForm = 92547, YearStory_Display_FullSceenVideo_CloseForm = 92548, YearStory_Display_FullSceenVideo_VideoLoaded = 92549, YearStory_Display_FullSceenVideo_Complete = 92550, YearStory_Display_ReviewFormClose = 92551, YearStory_Display_Interaction_PolygonSelect = 92552, YearStory_Display_Interaction_ChoiceGroup_SelectChoice = 92553, YearStory_Display_Interaction_ChoiceGroup_VideoEnd = 92554, YearStory_Display_CompleteInterrupt = 92555, YearStory_Display_CompleteContinue = 92556, YearStory_SeasonGoal_ChangeMainTask = 92557, YearStory_SeasonGoal_CloseSubTask = 92558, YearStory_Display_OpenDesignShare = 92559, YearStory_Display_CloseDesignShare = 92560, AfterGameInteraction_BtnListElementEnable = 95001, AfterGameInteraction_InteractionBtnClick = 95002, AfterGameInteraction_AdmireBtnClick = 95003, AfterGameInteraction_ThanksBtnClick = 95004, AfterGameInteraction_TouchHandBtnClick = 95005, AfterGameInteraction_HideHeadTimerUp = 95006, SettlementSys_AdmireTip_OnCloseTimer = 95031, SettlementSys_Settle_TipsFadein = 95032, SettlementSys_AdmireTip_OnClickBackThumbsUp = 95033, Mall_SkinItem_AddWishBtnClick = 95802, Mall_SkinItem_DeleteWishBtnClick = 95052, Mall_HeroItem_AddWishBtnClick = 95053, Mall_HeroItem_DeleteWishBtnClick = 95054, Mall_Skin_WishList_BtnClick = 95055, Mall_Hero_WishList_BtnClick = 95056, PatSystem_Button_Hold_Start = 95100, PatSystem_Button_Hold = 95101, PatSystem_Button_Hold_End = 95102, PatSystem_Button_Hold_Trigger_End = 95103, PatSystem_Setting_Form_Open = 95104, PatSystem_Setting_Toggle_Chat_Changed = 95105, PatSystem_Setting_Toggle_HeroSelect_Changed = 95106, PatSystem_Setting_Toggle_Loading_Changed = 95107, Mall_To_PatSystem_Jump_Editor = 95108, PatSystem_Button_JumpDetail_Clicked = 95130, PatSystem_Button_JumpBuy_Clicked = 95131, PatSystem_Button_Slot_Add_Clicked = 95132, PatSystem_Button_Slot_Replace_Clicked = 95133, PatSystem_Button_Slot_Delete_Clicked = 95134, PatSystem_Button_Content_Element_Clicked = 95135, PatSystem_Form_Detail_Open = 95136, PatSystem_Form_Buy_Open = 95137, PatSystem_Form_Detail_Element_Clicked = 95138, PatSystem_Form_Buy_Clicked = 95141, PatSystem_Form_Detail_JumpBuy_Clicked = 95142, PatSystem_Form_Buy_Confirm = 95143, PatSystem_Room_Drag_Start = 95144, PatSystem_HeroSelect_Drag_Start = 95145, PatSystem_Loading_Drag_Start = 95146, PatSystem_Quick_Bug_Open = 95147, PatSystem_Quick_Bug_Clicked = 95148, PatSystem_Quick_Bug_Comfire_Clicked = 95149, PlayerTogether_OnClickPlayerTogetherBtn = 95201, PlayerTogether_OnDetailPnlTimeUp = 95202, PlayerTogether_OnClickHideDetailInfo = 95203, PlayerTogether_OnShowPlayTogetherTimeUp = 95204, PlayerTogether_OnShowPlayTogetherTimeChanged = 95205, PlayerTogether_OnShowHeroNameTimeUp = 95206, PlayerTogether_OnAutoKickPlayTogetherPlayerTimeUp = 95207, Invite_TeamReverse_JoinTeam = 95208, SkinExposeH5Mail_Form_Open = 95251, SkinExposeH5Mail_Form_Close = 95252, SkinExposeH5Mail_ShareBtnClick = 95253, ShareSelector_Form_Open = 95254, ShareSelector_Form_Close = 95255, ShareSelector_FriendBtnClick = 95256, ShareSelector_TimeLineBtnClick = 95257, PlayerInfoSystem_ViewPersonalPoseter_BtnClick = 95258, SkinExposeH5Mail_JumpMallBtnClick = 95259, RechargeActivityPreview_Form_Open = 95260, RechargeActivityPreview_Form_Close = 95261, SearchPlayerFuzzyLocal = 95301, Chat_Intelligent_OnElementBtnClick = 95311, Chat_Intelligent_OnCommonNotificationPartShow = 95312, Chat_Intelligent_OnCloseTiemr = 95313, SeasonReview_TryOpenFormByUIClick = 95321, SeasonReview_OpenFormByServer = 95322, SeasonReview_CloseForm = 95323, SeasonReview_Next = 95324, SeasonReview_Performance_ChangeLadder = 95325, SeasonReview_Performance_ShowPointInfo = 95326, SeasonReview_Performance_ClosePointInfo = 95327, SeasonReview_Performance_ChangePointInfo = 95328, SeasonReview_Battle_SelectTag = 95329, SeasonReview_Battle_TagElemValidate = 95330, SeasonReview_Hero_SelectTag = 95331, SeasonReview_Hero_CloseInfo = 95332, SeasonReview_Friend_MineView_ValidateInfo = 95333, SeasonReview_Friend_MineView_SelectInfo = 95334, SeasonReview_Friend_FriendView_ValidateInfo = 95335, SeasonReview_Friend_FriendView_SelectInfo = 95336, SeasonReview_Friend_ChangeView = 95337, SeasonReview_GameAction_ValidateInfo = 95338, SeasonReview_VirtialAppearanceChangeLeft = 95339, SeasonReview_VirtialAppearanceChangeRight = 95340, SeasonReview_Performance_ChangeMaster = 95341, SeasonReview_Friend_PlayerLike = 95342, SeasonReview_VirtialAppearanceOpenHonorTips = 95343, SeasonReview_VirtialAppearanceCloseHonorTips = 95344, SeasonReview_Share = 95345, SeasonReview_Hero_HeroKVDownloadSucc = 95346, SeasonReview_ChangeStepAnimDone = 95347, SeasonReview_JumpStep = 95348, SeasonReview_Hero_SelectTagAnimDone = 95349, BattleUISkin_PreviewBuy_BuyBtnClick = 95401, BattleUISkin_PreviewBuy_ConfirmBuyBtnClick = 95402, Signature_PreviewBuy_BuyBtnClick = 95403, Signature_PreviewBuy_ConfirmBuyBtnClick = 95404, Signature_PreviewBuy_SwitchModeBtnClick = 95405, GiftBigIcon_Preview_Add = 95406, GiftBigIcon_Preview_Dec = 95407, UniteBuy_HeroSkinDistribution_AskForBtnClick = 95408, UniteBuy_HeroSkinDistribution_GiveBtnBtnClick = 95409, Chat_FormOpen = 95451, Chat_FormClose = 95452, HeroCustomOverview_SkyScreen_SliderValueChange = 95501, HeroCustomOverview_SkyScreen_Rule_Btn_Click = 95502, HeroCustomOverview_SkyScreen_UseForRandom = 95503, HeroCustomOverview_SkyScreen_UseForRandomSucOrErr = 95504, HeroCustomOverview_SkyScreen_SwitchModeSuccess = 95505, HeroCustomOverview_SkyScreen_Open = 95506, HeroCustomOverview_SkyScreen_Close = 95507, HeroCustomOverview_SkyScreen_Detail_Btn_Click = 95508, HeroCustomOverview_SkyScreenForm_Reward_Form_GotoUse = 95509, HeroCustomOverview_SkyScreen_Random_Rule_Btn_Click = 95510, Ranking_ChangeRankTypeToIntimacyRelation = 95511, Ranking_IntimacyRelationListEnable = 95512, Ranking_OnClickIntimacyRelationEstablish = 95513, Open_Personal_Recommend = 95521, Open_Personal_Recommend_Detail = 95522, Appearance_Mall_HotRecommend_Buy_Click = 95601, Appearance_Mall_HotRecommend_PlayCG_Click = 95602, Appearance_Mall_HotRecommend_Meun_NextPage_Click = 95603, Appearance_Mall_HotRecommend_Meun_UpPage_Click = 95604, Appearance_Mall_HotRecommend_Element_Click = 95605, Appearance_Mall_HotRecommend_Jump_AllShop_Click = 95606, Appearance_Mall_HotRecommend_Jump_Try_Wear_Click = 95607, Appearance_Form_Buy_Element_Toggle_Use_Click = 95608, Appearance_Form_Buy_Element_Toggle_Dianquan_Click = 95609, Appearance_Form_Buy_Element_Toggle_Diamond_Click = 95610, Appearance_Form_Buy_Element_Toggle_Gold_Click = 95611, Appearance_Form_Buy_Pay_Click = 95612, Appearance_Form_Buy_Open = 95613, Appearance_Mall_HotRecommend_Jump_CreateRole = 95614, Appearance_Form_Buy_Pkg_Detail_Click = 95615, Appearance_HeroAndSkin_Form_Close = 95616, Appearance_Form_Appearance_Menu_Change = 95620, Appearance_Form_Appearance_Open = 95621, Appearance_Form_Appearance_Buy_Click = 95622, Appearance_Form_Appearance_Rest3DModel_Click = 95623, Appearance_Form_SecondMenu_Change = 95624, Appearance_Form_Appearance_Element_Select = 95625, Appearance_Form_Appearance_Poster_Element_Select = 95626, Appearance_Form_Appearance_Jump_Click = 95627, Appearance_Mall_HotRecommend_Jump_Click = 95628, Appearance_Mall_HotRecommend_Banner_Change = 95629, Appearance_Form_Appearance_PosterSubList_Element_Click = 95630, HeroCustomOverview_Signature_Item_Select = 95701, HeroCustomOverview_Signature_Item_Enable = 95702, HeroCustomOverview_Signature_Job_Selected = 95703, HeroCustomOverview_Signature_Not_Own_Changed = 95704, HeroCustomOverview_Signature_Sort_Select = 95705, HeroCustomOverview_Signature_Sort_Btn_Click = 95706, SeasonReview_Test_Perform = 95751, SeasonReview_Test_Style = 95752, SeasonReview_Test_Hero = 95753, SeasonReview_Test_Friend = 95754, SeasonReview_Test_Action = 95755, SeasonReview_Test_VirtialAppearance = 95756, SeasonReview_Test_Perform_SetTypeData = 95757, SeasonReview_Test_Perform_AddLadderData = 95758, SeasonReview_Test_Perform_AddMasterData = 95759, SeasonReview_Test_Style_AddStyleData = 95760, SeasonReview_Test_Hero_SetHeroData = 95761, SeasonReview_Test_Friend_SetSelfData = 95762, SeasonReview_Test_Friend_SetFriendData = 95763, SeasonReview_Test_Action_SetActionData = 95764, SeasonReview_Test_VirtialAppearance_AddVirtialAppearanceData = 95765, SeasonReview_Test_OpenForm = 95766, SeasonReview_Test_CloseForm = 95767, Settings_TargetSelectSimpleStyleChg = 116371, Settings_MonsterShowHpValueChg = 116372, Settings_OpenInfoForm = 116373, Settings_OpenBtnGroup = 116374, OpSetting_OnAutoChaseDistanceChange = 116377, OpSetting_OnAutoChaseDistanceConfirm = 116378, OpSetting_OnAutoChaseDistanceCancle = 116379, OpSetting_OnResetHeroSettingConfirm = 116380, OpSetting_OnResetHeroSettingCancel = 116381, Setting_MagicVoiceEnable = 116382, Setting_BackgroudSoundRationChanged = 116383, Setting_BackgroudSoundRationHelpMe = 116384, Setting_BackgroudRangeSoundRationHelpMe = 116385, Setting_BackgroudRangeSoundRationChanged = 116386, Setting_BackgroudVoiceHelpMe = 116387, Setting_BluetoothMicToggle = 116388, QuickReplay_OpenSelectForm = 116400, QuickReplay_CloseSelectForm = 116401, QuickReplay_EnterQReplayFile = 116402, DragList_Test = 253354, DragList_Test_ElementClick = 253355, TeamRecruit_SendMessage = 526701, TeamRecruit_ChangeTotalChannel = 526702, TeamRecruit_ChangeGuildChannel = 526703, TeamRecruit_RealSendMessage = 526704, TeamRecruit_ClickQuickMsg = 526705, TeamRecruit_QuickMsgElementEnable = 526706, TeamRecruit_ClickQuickMsgElement = 526707, TeamRecruit_ChangeGuildLBSChannel = 526708, TeamRecruit_CancelTeamRecruit = 526709, GameEntry_OnLobbyEntry = 526711, GameEntry_OnTrainingModeClick = 526712, GameEntry_OnMapSelect = 526713, GameEntry_OnPlayTypeSelect = 526714, GameEntry_OnPlayTypeSelectBack = 526715, GameEntry_StartGame_Team = 526716, GameEntry_StartGame_Room = 526717, GameEntry_StartGame_Robot = 526718, GameEntry_CloseViolationRateTips = 526719, GameEntry_MobaMatch2CityMatch = 526720, UGCGameStore_Lobby_OpenForm = 526721, UGCGameStore_PlayerFav_OpenForm = 526722, UGCGameStore_Detail_OpenForm = 526723, UGCGameStore_Lobby_EnableAllGameInfoCell = 526724, UGCGameStore_Lobby_EnableFastEntryGameInfoCell = 526725, UGCGameStore_Lobby_AddAllFastEntryToFav = 526726, UGCGameStore_PlayerFav_EntryEditMode = 526727, UGCGameStore_Detail_EditFav = 526728, UGCGameStore_PlayerFav_EditFast = 526729, UGCGameStore_OpenSortList = 526730, UGCGameStore_SelectSortList = 526731, UGCGameStore_GameInfoLaunch = 526732, UGCGameStore_Detail_ChangeTag = 526733, UGCGameStore_PlayerFav_ChangeTag = 526734, UGCGameStore_PlayerFav_CloseForm = 526735, UGCGameStore_Detail_CloseForm = 526736, UGCGameStore_Lobby_CloseForm = 526737, UGCGameStore_Value_OpenForm = 526738, UGCGameStore_Value_EditValue = 526739, UGCGameStore_Value_ClickStar = 526740, UGCGameStore_PlayerFav_EnableAllGameInfoCell = 526741, UGCGameStore_CancelGameInfoDownload = 526742, UGCGameStore_UpdateDownloadProtectTimer = 526743, UGCGameStore_OnDownloadTimerUp = 526744, UGCGameStore_PlayerFav_EnableFastEntryGameInfoCell = 526745, UGCGameStore_StartGameInfoDownload = 526746, UGCGameStore_Value_CloseForm = 526747, UGCGameStore_Lobby_ShowLobbyAd = 526748, UGCGameStore_Detail_RemoveGameInfo = 526749, UGCGameStore_Lobby_OnListAnimationEnd = 526750, UGCGameStore_Lobby_OnOpenH5 = 526751, UGCGameStore_Detail_RemoveGameInfoConfirm = 526752, UGCGameStore_JumpToUgcHistoryList = 526753, UGCGameStore_Detail_EnlargeImage = 526754, UGCGameStore_Detail_LessenImage = 526755, UGCGameStore_Lobby_PreOpenForm = 526756, UGCGameStore_JumpToUGCDetailAndStartDownload = 526757, UGCGameStore_DownloadAtNoWifiConfirm = 526758, UGCGameStore_LobbyFastEntryClick = 526759, FreeHeroSkin_OnOpen = 526761, FreeHeroSkin_OnHeroJobSelect = 526762, FreeHeroSkin_OnHeroSkinItemSelect = 526763, FreeHeroSkin_OnHeroSkinItemEnable = 526764, FreeHeroSkin_OnJumpFightClick = 526765, FreeHeroSkin_OnUpdateUI = 526766, FreeHeroSkin_OnClose = 526767, UI_OnFormOpen = 526801, UI_BusinessViewInit = 526802, UI_BusinessViewUninit = 526803, UI_OnFormReopen = 526804, UI_OnNestedFormOpen = 526805, Project8_Sprite_OpenForm = 526900, Project8_Sprite_CloseForm = 526901, Project8_Sprite_OnSpriteElementEnable = 526902, Project8_Sprite_OnClickSpriteOneStarElement = 526903, Project8_Sprite_OnClickBuySprite = 526904, Project8_Sprite_OnClickSpriteTab = 526905, Project8_Sprite_OnClickMapTab = 526906, Project8_Sprite_OnClickActionTab = 526907, Project8_Sprite_OnDragSprite = 526908, Project8_Sprite_OnClickSpriteTwoStarElement = 526909, Project8_Sprite_OnClickSpriteThreeStarElement = 526910, Project8_Sprite_OnClickComfirmBuySprite = 526911, Project8_Sprite_OnClickUseSprite = 526912, Project8_Sprite_OnClickJumpToGetSprite = 526913, Project8_Sprite_OnClickHeroSkin = 526914, Project8_Sprite_OnDragBackGround = 526915, Project8_OnCloseBackGround = 526916, Project8_Sprite_Toggle_PetDetail = 526926, Project8_Sprite_OnHoldSlot1End = 526927, Project8_Sprite_OnHoldSlot2End = 526928, Project8_Sprite_OnHoldSlot3End = 526929, Project8_Sprite_OnHoldSlot4End = 526930, Project8_Sprite_OnSceneSkinElementEnable = 526931, Project8_Sprite_OnClickBuySceneSkin = 526932, Project8_Sprite_OnClickComfirmBuySceneSkin = 526933, Project8_Sprite_OnClickUseSceneSkin = 526934, Project8_Sprite_OnClickJumpToGetSceneSkin = 526935, Project8_Sprite_OnClickSceneSkinElement = 526936, Project8_Sprite_SceneSkin_OpenForm = 526937, Project8_Sprite_Toggle_SceneSkinDetail = 526938, Project8_Sprite_OnClickExpandSceneSkin = 526939, Project8_Sprite_OnClickPreSceneSkin = 526940, Project8_Sprite_OnClickNextSceneSkin = 526941, Project8_Sprite_HeroSkin_OpenForm = 526942, Project8_Sprite_OnClickGet1 = 526943, Project8_Sprite_OnClickGet2 = 526944, Project8_Sprite_OnHoldSlot1Start = 526945, Project8_Sprite_OnHoldSlot2Start = 526946, Project8_Sprite_OnHoldSlot3Start = 526947, Project8_Sprite_OnHoldSlot4Start = 526948, Proj8HeroSkin_ClickChoose2StarMenu = 526951, Proj8HeroSkin_ClickChoose3StarMenu = 526952, Proj8HeroSkin_ClickChooseMenuItem = 526953, Proj8HeroSkin_ClickCloseStarMenu = 526954, Proj8HeroSkin_MainTabClicked = 526955, Proj8HeroSkin_SubTabClicked = 526956, Proj8HeroSkin_BatchHeroItemEnabled = 526957, Proj8HeroSkin_CloseBatchUI = 526958, Proj8HeroSkin_OnBatchOverCustomValueChanged = 526959, Proj8HeroSkin_ApplyAllHerosSetting = 526960, Proj8HeroSkin_OnApplyAllConfirmed = 526961, Proj8HeroSkin_OnApplyAllCancel = 526962, Proj8HeroSkin_ClickBatchHelpRule = 526963, Proj8HeroSkin_ItemSelect = 526964, Proj8HeroSkin_TurnRight = 526965, Proj8HeroSkin_TurnLeft = 526966, Proj8HeroSkin_ItemEnable = 526967, Proj8HeroSkin_OpenBatchSetting = 526968, Proj8HeroSkin_OpenChooseHero = 526969, Proj8HeroSkin_CloseChooseHero = 526970, Proj8HeroSkin_ClickChooseHero = 526971, Proj8HeroSkin_ChooseHero_OpenPopupMenu = 526972, Proj8HeroSkin_ChooseHero_ClosePopupMenu = 526973, Proj8HeroSkin_ChooseHero_PopupMenuItemClick = 526974, Proj8HeroSkin_ClickHeroStarItem = 526975, Proj8HeroSkin_CustomWearSkin = 526976, Proj8HeroSkin_UseExpSkin = 526977, Proj8HeroSkin_CloseExpOutTimeForm = 526978, Proj8PresetFormation_OpenFormationSimulatorForm = 527100, Proj8PresetFormation_DeleteHeroItem = 527101, Proj8PresetFormation_OfficialListItemEnable = 527102, Proj8PresetFormation_OfficialListElementClick = 527103, Proj8PresetFormation_OfficialListElementHold = 527104, Proj8PresetFormation_HeroListElementClick = 527105, Proj8PresetFormation_HeroListElementHold = 527106, Proj8PresetFormation_OpenHeroDetailPanel = 527107, Proj8PresetFormation_CloseHeroDetailPanel = 527108, Proj8PresetFormation_OpenArrangeInfoPanel = 527109, Proj8PresetFormation_CloseArrangeInfoPanel = 527110, Proj8PresetFormation_InfoTablistSelIndexChange = 527111, Proj8PresetFormation_CampListSelIndexChange = 527112, Proj8PresetFormation_CareerListSelIndexChange = 527113, Proj8PresetFormation_OpenCampCareerListPanel = 527114, Proj8PresetFormation_CloseCampCareerListPanel = 527115, Proj8PresetFormation_EditFormation = 527116, Proj8PresetFormation_ChangeFormationName = 527117, Proj8PresetFormation_ClearFormationInfo = 527118, Proj8PresetFormation_SaveFormationInfo = 527119, Proj8PresetFormation_OpenFormationPlanForm = 527120, Proj8PresetFormation_UseFormationPlan = 527121, Proj8PresetFormation_FormationSimulatorFormClose = 527122, Proj8PresetFormation_FormationPlanFormClose = 527123, Proj8PresetFormation_OnOpenCampCareerBuffTip = 527124, Proj8PresetFormation_UseOfficialFormationConfirm = 527125, Proj8PresetFormation_UseOfficialFormationCancle = 527126, Proj8PresetFormation_ChangeFormationNameConfirm = 527127, Proj8PresetFormation_OpenPresetFormationInfoPanel = 527128, Proj8PresetFormation_OnCloseCampCareerBuffTip = 527129, Proj8PresetFormation_OnCloseFormationSimulatorForm = 527130, Proj8PresetFormation_CancleSaveFormationInfo = 527131, Proj8PresetFormation_FormationPlanListElementEnable = 527132, Proj8PresetFormation_SelectFormationPlanToReplace = 527133, Proj8PresetFormation_FormationPlanReplaceConfirm = 527134, Proj8PresetFormation_GodListElementClick = 527135, Proj8PresetFormation_GodListItemEnable = 527136, Proj8PresetFormation_GodListElementHold = 527137, Proj8PresetFormation_UseGodFormationConfirm = 527138, Proj8Formation_OnCodeBtnClick = 527139, Proj8Formation_OpenCodeFormationForm = 527140, Proj8Formation_CodeFormationFormClose = 527141, Proj8Formation_OnCodeInputConfirm = 527142, Proj8Formation_OnCodeInputCancle = 527143, Proj8Formation_OnCodeFormationConfirm = 527144, Proj8Formation_OnCodeFormationCancle = 527145, Proj8Formation_OnCodeCopy = 527146, Proj8Formation_OnCodeInputFormClose = 527147, Project8_Sprite_OnClickChatTab = 527151, Project8_Sprite_OnClickChatBtnConfigure = 527152, Project8_Sprite_OnClickChatBtnCancel = 527153, Project8_Sprite_OnClickChatBtnConfirm = 527154, Project8_Sprite_OnClickChatDelete = 527155, Project8_Sprite_OnClickChatBagSelect = 527156, Project8_Sprite_OnClickChatEquipedSelect = 527157, Project8_Sprite_OnClickChatWordTab = 527158, Project8_Sprite_OnClickChatEmojiTab = 527159, Project8_Sprite_OnClickBattleChatItem = 527160, Project8_Sprite_OnCloseBattleChat = 527161, Project8_Sprite_OnClickChooseChatItem = 527162, Project8_Sprite_OnRevertToVisible = 527163, Project8_Sprite_OnRevertToHide = 527164, Project8_Entry_OnRevertToVisible = 527165, Project8_Entry_OnRevertToHide = 527166, Project8_Sprite_ShowBackground = 527167, Project8_Sprite_HideBackground = 527168, Project8_Entry_PlayBackFlowAnimation = 527169, Project8_RefreshProject8BackGround = 527170, Language_Cancel_Download = 528052, Language_Start_Download = 528053, Language_Confirm_Cancel_Download = 528054, Language_Confirm_Download_Without_Wifi = 528055, Project8_OnHistoryAndSettlePlayerInfoClick = 552965, Project8_OnShowEquipDetail = 552966, Project8_OnHideEquipDetail = 552967, Project8_PlayerInfoShowBountyMarkDesc = 552968, Project8_PlayerInfoHideBountyMarkDesc = 552969, Project8_ClickSplitItem = 552970, Project8_CloseSuperFastTip = 552971, Project8_OnSettleShowRelative = 552972, Project8_OnSettleShowEquip = 552973, Project8_ChooseBanCampItem = 552974, Project8_ClickBanCampBtn = 552975, Project8_ClickBanResultConfirm = 552976, Project8_OnNewChooseEquip = 552977, Project8_OnNewRefreshChooseEquip = 552978, Project8_ClickBanCampDetailBtn = 552979, Project8_ClickBanCampDetailClose = 552980, Project8_OnQuickStartMatchAfterBannerGuide = 552981, Project8_OnSettleDataTabChange = 552982, Project8_OnCloseNewChooseEquip = 552983, Project8_BanCampPauseGame = 552984, Project8BanHero_CampListSelectChange = 553000, Project8BanHero_CareerListSelectChange = 553001, Project8BanHero_HeroListElementSelect = 553002, Project8BanHero_OnBanBtnClick = 553003, Project8BanHero_OnShowBanResultConfirm = 553004, Project8BanHero_PauseGame = 553005, Bag_OnBatchUseItemEnable = 554000, Bag_OnClickToEnterBatchExchange = 554001, Bag_OnClickToEnterNormalUseState = 554002, Bag_OnClickToBatchExchange = 554003, Bag_OnClickSelectAllCheckBox = 554004, Bag_OnClickReserveOneCheckBox = 554005, Bag_OnClickBatExchangeItem = 554006, Bag_OnConfirmBatchExchange = 554007, Bag_OnClickToEnterBatchSell = 554008, Bag_OnClickToBatchSell = 554009, Bag_OnClickBatchSellItem = 554010, Bag_OnConfirmBatchSell = 554011, Bag_OnClickToEnterBatchOpen = 554012, Bag_OnClickToBatchOpen = 554013, Bag_OnConfirmBatchOpen = 554014, Bag_OnClickHeroCustomOverview = 554020, Bag_OnRevertToVisable = 554021, Bag_OnConfirmMailConvert = 554022, Bag_OnTimeLimitItemCheckExpired = 554023, MAX_Tag = 2147483647 }
            class stUIEventParams extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class CUIComponentContainer extends Assets.Scripts.UI.CUIComponent implements Assets.Scripts.UI.IUIComponentContainer, Assets.Scripts.UI.ISortingOrderChangedHandler
            {
                protected [__keep_incompatibility]: never;
                public SetAsTemplate () : void
                public AddUIComponent ($uiComponent: Assets.Scripts.UI.CUIComponent) : void
                public RemoveUIComponent ($uiComponent: Assets.Scripts.UI.CUIComponent) : void
                public OnResolutionChangedForEditor ($belognedFormScript: Assets.Scripts.UI.CUIFormScript) : void
                public OnSortingOrderChanged ($sortingOrder: number) : void
            }
            interface IUIComponentContainer
            {
            }
            interface ISortingOrderChangedHandler
            {
            }
            class CUICanvasScript extends Assets.Scripts.UI.CUIComponentContainer implements Assets.Scripts.UI.IUIComponentContainer, Assets.Scripts.UI.ISortingOrderChangedHandler
            {
                protected [__keep_incompatibility]: never;
                public m_isNeedMaskParticle : boolean
                public m_addSortOrder : number
                public m_isNeedGraphicRaycaster : boolean
                public get OverrideSorting(): boolean;
                public set OverrideSorting(value: boolean);
                public SetHierarchyOrder ($canvasHierarchyOrder: number) : void
                public constructor ()
            }
            class CUICaptureScreen extends Assets.Scripts.UI.CUIComponent
            {
                protected [__keep_incompatibility]: never;
                public m_whiteFormList : System.Array$1<Assets.Scripts.UI.CUIFormScript>
                public m_blackCanvasList : System.Array$1<Assets.Scripts.UI.CUICanvasScript>
                public constructor ()
            }
            class CUIFormScript extends UnityEngine.MonoBehaviour implements System.IComparable, Assets.Scripts.UI.IWidgetArray, Assets.Scripts.UI.IUIComponentContainer
            {
                protected [__keep_incompatibility]: never;
                public m_formType : Assets.Scripts.UI.enFormType
                public m_popUpFormSubType : Assets.Scripts.UI.enPopupFormSubType
                public m_popUpFormRootTrans : UnityEngine.RectTransform
                public m_referenceResolution : UnityEngine.Vector2
                public m_isSingleton : boolean
                public m_isModal : boolean
                public m_group : number
                public m_disableInput : boolean
                public m_eventIDs : System.Array$1<Assets.Scripts.UI.enUIEventID>
                public m_eventParams : System.Array$1<Assets.Scripts.UI.stUIEventParams>
                public m_openedWwiseEvents : System.Array$1<string>
                public m_closedWwiseEvents : System.Array$1<string>
                public m_revertToVisibleEvent : Assets.Scripts.UI.enUIEventID
                public m_revertToHideEvent : Assets.Scripts.UI.enUIEventID
                public m_hideUnderForms : boolean
                public m_hideUnderPopUpForms : boolean
                public m_alwaysKeepVisible : boolean
                public m_enableMultiClickedEvent : boolean
                public m_isExceptionOfRaycastSorting : boolean
                public m_formWidgets : System.Array$1<UnityEngine.GameObject>
                public m_formPanels : System.Array$1<Assets.Scripts.UI.CUIPanel>
                public m_mapViewTmpl : UnityEngine.GameObject
                public m_needShow_Widgets : System.Array$1<UnityEngine.GameObject>
                public m_needHide_Widgets : System.Array$1<UnityEngine.GameObject>
                public m_fadeInAnimationNameGroup : System.Array$1<string>
                public m_fadeOutAnimationNameGroup : System.Array$1<string>
                public m_clickedEventDispatchedCounter : number
                public m_formPath : string
                public m_prefabName : string
                public m_resourceKey : bigint
                public m_recycleToPool : boolean
                public m_canvas : UnityEngine.Canvas
                public m_canvasScaler : UnityEngine.UI.CanvasScaler
                public m_isAlwaysExit : boolean
                public m_root : UnityEngine.GameObject
                public m_isTryFixTextUvInBattle : boolean
                public static s_enableUIFadeEffect : boolean
                public static s_isInPreviewMode : boolean
                public static s_previewModeFrameCount : number
                public m_focusFormPaths : System.Array$1<Assets.Scripts.UI.CUIFormScript.focusFormItem>
                public m_followForm : Assets.Scripts.UI.CUIFormScript
                public m_followIntimacy : number
                public m_centerScreenRect : UnityEngine.Rect
                public get FullScreenBG(): boolean;
                public set FullScreenBG(value: boolean);
                public get Sequence(): number;
                public set Sequence(value: number);
                public get Priority(): Assets.Scripts.UI.enFormPriority;
                public set Priority(value: Assets.Scripts.UI.enFormPriority);
                public SetCanChangeCameraTypeInBattle ($canChange: boolean) : void
                public GetCanChangeCameraTypeInBattle () : boolean
                public static op_GreaterThan ($left: Assets.Scripts.UI.CUIFormScript, $right: Assets.Scripts.UI.CUIFormScript) : boolean
                public static op_LessThan ($left: Assets.Scripts.UI.CUIFormScript, $right: Assets.Scripts.UI.CUIFormScript) : boolean
                public CustomUpdate () : void
                public CustomLateUpdate () : void
                public SetSortingOrder ($sortingOrder: number) : void
                public SetLayer ($layer: number) : void
                public RevertLayer () : void
                public Open ($sequence: number, $alreadyExist: boolean) : void
                public Close ($closeImmediately?: boolean) : void
                public IsNeedClose () : boolean
                public IsClosed () : boolean
                public IsDisableUnderFormFadeOut () : boolean
                public IsCanvasEnabled () : boolean
                public ChangeScreenValueToForm ($value: number) : number
                public ChangeFormValueToScreen ($value: number) : number
                public SetWidgetTargetPosition ($widgetIndex: number, $worldPosition: UnityEngine.Vector3) : void
                public SetWidgetTargetPosition ($widget: UnityEngine.GameObject, $worldPosition: UnityEngine.Vector3) : void
                public InitializeForEditor ($camera: UnityEngine.Camera) : void
                public Initialize ($camera: UnityEngine.Camera) : void
                public UnInitialize () : void
                public Hide ($hideFlag?: Assets.Scripts.UI.enFormHideFlag, $forceDisableFadeOut?: boolean) : void
                public Appear ($hideFlag?: Assets.Scripts.UI.enFormHideFlag) : void
                public IsHided () : boolean
                public SetSceneCameraEnable ($index: number, $bEnable: boolean) : void
                public TryEnableInput ($isEnable: boolean) : void
                public ForceEnableInput ($isEnable: boolean) : void
                public CompareTo ($obj: any) : number
                public MatchScreen () : void
                public GetFormScaleVal () : number
                public GetUsedFormToScreenRatio () : number
                public GetFormToScreenRadio () : UnityEngine.Vector2
                public GetMatchedScaleFor3DObject () : number
                public GetWidget ($index: number) : UnityEngine.GameObject
                public GetWidgetTrans ($index: number) : UnityEngine.Transform
                public GetWidgetIndex ($widgetObject: UnityEngine.GameObject) : number
                public GetWidgetTransByName ($widgetName: string) : UnityEngine.Transform
                public GetPanel ($index: number) : Assets.Scripts.UI.CUIPanel
                public GetGraphicRaycaster () : UnityEngine.UI.GraphicRaycaster
                public GetCamera () : UnityEngine.Camera
                public GetReferenceResolution () : UnityEngine.Vector2
                public GetSortingOrder () : number
                public RefreshSubCanvas ($executeImmediately: boolean) : void
                public ExecuteRefreshSubCanvas () : void
                public DeActiveAllRelateScene () : void
                public FindRelatedScene ($sceneName: string) : UnityEngine.GameObject
                public AddRelatedScene ($scene: UnityEngine.GameObject, $sceneName: string) : void
                public AddRelatedSceneCamera ($index: number, $go: UnityEngine.GameObject) : void
                public ClearRelatedSceneAndCamera () : void
                public AddASyncLoadedImage ($image: UnityEngine.UI.Image, $prefabPath: string, $needCached: boolean, $isShowSpecMatrial?: boolean, $useOverrideSprite?: boolean) : void
                public IsCanFadeIn () : boolean
                public IsCanFadeOut () : boolean
                public RePlayFadIn () : void
                public Recycle () : void
                public ReUse () : void
                public IsRecycled () : boolean
                public SetFormEventID ($evtType: Assets.Scripts.UI.enFormEventType, $closeEvtID: Assets.Scripts.UI.enUIEventID, $evtPar: Assets.Scripts.UI.stUIEventParams) : void
                public SetFormEventID ($evtType: Assets.Scripts.UI.enFormEventType, $closeEvtID: Assets.Scripts.UI.enUIEventID, $eventParam: any) : void
                public IsOverlay () : boolean
                public AppendUIComponents ($root: UnityEngine.GameObject) : void
                public AppendUIComponent ($uiComponent: Assets.Scripts.UI.CUIComponent) : void
                public ReleaseUIComponents ($root: UnityEngine.GameObject, $releaseRootSelf?: boolean) : void
                public ReleaseUIComponent ($uiComponent: Assets.Scripts.UI.CUIComponent) : void
                public ClearFadeAnimationEndEvent () : void
                public GetScreenScaleValue () : number
                public SetHideUnderForm ($isHideUnderForm: boolean) : void
                public SetFormEventParams ($formEventType: Assets.Scripts.UI.enFormEventType, $formEventParams: Assets.Scripts.UI.stUIEventParams) : void
                public SetFormEventParams ($formEventType: Assets.Scripts.UI.enFormEventType, $formEventParams: any) : void
                public GetFormEventParams ($formEventType: Assets.Scripts.UI.enFormEventType) : Assets.Scripts.UI.stUIEventParams
                public SetPixelPerfect ($isPixel: boolean) : void
                public SetIsCanPlayFadeOutAnimation ($isEnable: boolean) : void
                public ChangeRenderMode ($targetMode: UnityEngine.RenderMode) : void
                public OnResolutionChanged () : void
                public OnResolutionChangedForEditor () : void
                public GetRenderMode () : UnityEngine.RenderMode
                public UseRenderModeWorldSpace () : void
                public IsUseSGameGraphicRaycaster () : boolean
                public GetTempUIComponentList () : System.Collections.Generic.List$1<Assets.Scripts.UI.CUIComponent>
                public RecycleTempUIComponentList ($tempUIComponentList: System.Collections.Generic.List$1<Assets.Scripts.UI.CUIComponent>) : void
                public AddFlag ($flag: Assets.Scripts.UI.enFormFlag) : void
                public HasFlag ($flag: Assets.Scripts.UI.enFormFlag) : boolean
                public HasFlagsOr ($flags: Assets.Scripts.UI.enFormFlag) : boolean
                public HasFlagsAnd ($flags: Assets.Scripts.UI.enFormFlag) : boolean
                public Trigger ($triggerType: number, $uiEvent: Assets.Scripts.UI.CUIEvent) : void
                public GetTriggerEnumType () : System.Type
                public RegisterMethod ($triggerType: number, $method: UnityEngine.Events.UnityAction$1<Assets.Scripts.UI.CUIEvent>) : void
                public UnregisterMethod ($triggerType: number, $method: UnityEngine.Events.UnityAction$1<Assets.Scripts.UI.CUIEvent>) : void
                public RegisterGlobalEvent ($triggerType: number, $eventId: Assets.Scripts.UI.enUIEventID) : void
                public UnregisterGlobalEvent ($triggerType: number, $eventId: Assets.Scripts.UI.enUIEventID) : void
                public RegisterGlobalEvent ($triggerType: number, $eventId: Assets.Scripts.UI.enUIEventID, $eventParams: Assets.Scripts.UI.stUIEventParams) : void
                public RegisterGlobalEvent ($triggerType: number, $eventId: Assets.Scripts.UI.enUIEventID, $eventParams: any) : void
                public RefreshHideAndShow () : void
                public constructor ()
            }
            class CUIEvent extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public m_eventID : Assets.Scripts.UI.enUIEventID
                public m_customizedParams : any
                public m_eventParams : Assets.Scripts.UI.stUIEventParams
                public m_srcMonoScript : UnityEngine.MonoBehaviour
                public m_pointerEventData : UnityEngine.EventSystems.PointerEventData
                public m_srcWidget : UnityEngine.GameObject
                public m_srcWidgetIndexInBelongedList : number
                public get m_srcFormScript(): Assets.Scripts.UI.CUIFormScript;
                public get m_srcWidgetScript(): Assets.Scripts.UI.CUIComponent;
                public get IsCanRecycle(): boolean;
                public OnCreate () : void
                public OnRecycle () : void
                public constructor ()
            }
            enum enFormType
            { FullScreen = 0, Popup = 1, Other = 2 }
            enum enPopupFormSubType
            { Large = 0, Middle = 1, Small = 2 }
            class CUIPanel extends Assets.Scripts.UI.CUIComponent
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            enum enFormPriority
            { Priority0 = 0, Priority1 = 1, Priority2 = 2, Priority3 = 3, Priority4 = 4, Priority5 = 5, Priority6 = 6, Priority7 = 7, Priority8 = 8, Priority9 = 9 }
            enum enFormHideFlag
            { HideByCustom = 1, HideByOtherForm = 2 }
            enum enFormEventType
            { Open = 0, Close = 1, Appear = 2, Hide = 3 }
            enum enFormFlag
            { NeedClose = 1, Closed = 2, Recycled = 4, Hided = 8, Destroyed = 16, Initialized = 32, DisableUnderFormFadeOut = 64, Opening = 128, Opened = 256, NeedRefreshSubCanvas = 512 }
            class CUIParticleScript extends Assets.Scripts.UI.CUIComponent implements Assets.Scripts.UI.ISortingOrderChangedHandler
            {
                protected [__keep_incompatibility]: never;
                public m_resPathType : Assets.Scripts.UI.enResPathType
                public m_isNeedLod : boolean
                public m_resPath : string
                public m_resPathNew : string
                public m_resFullPath : string
                public m_isFixScaleToForm : boolean
                public m_isFixScaleToParticleSystem : boolean
                public m_isEndlessPlay : boolean
                public m_EParticleType : Assets.Scripts.UI.EUIParticleType
                public m_orderFixType : Assets.Scripts.UI.enOrderFixType
                public m_bIgnoreActive : boolean
                public m_setChildLayer : boolean
                public m_IsNotLoadOnLowDevice : boolean
                public m_fitStencilIDByMask : boolean
                public static s_RenderQulity : Assets.Scripts.UI.CUIParticleScript.RenderQuality
                public OnSortingOrderChanged ($sortingOrder: number) : void
                public InitializeRenderers () : void
                public constructor ()
            }
            enum enResPathType
            { enOrigin = 0, enNew = 1, enFull = 2 }
            enum EUIParticleType
            { ENull = 0, EForm_BattleStateView_Normal = 1 }
            enum enOrderFixType
            { UnderBelongedCanvas = -1, enOrderByZ = 0, UpBelongedCanvas = 1 }
        }
        namespace Assets.Scripts.UI.CUIFormScript {
            class focusFormItem extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Assets.Scripts.UI.CUIParticleScript {
            enum RenderQuality
            { HDD = 0, HD = 1, High = 2, Medium = 3, Low = 4 }
        }
        namespace Spine {
            class Animation extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get Timelines(): Spine.ExposedList$1<Spine.Timeline>;
                public set Timelines(value: Spine.ExposedList$1<Spine.Timeline>);
                public get Duration(): number;
                public set Duration(value: number);
                public get Name(): string;
                public Apply ($skeleton: Spine.Skeleton, $lastTime: number, $time: number, $loop: boolean, $events: Spine.ExposedList$1<Spine.Event>, $alpha: number, $blend: Spine.MixBlend, $direction: Spine.MixDirection) : void
                public constructor ($name: string, $timelines: Spine.ExposedList$1<Spine.Timeline>, $duration: number)
                public constructor ()
            }
            interface Timeline
            {
            }
            class ExposedList$1<T> extends System.Object implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
            }
            class Skeleton extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Event extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum MixBlend
            { Setup = 0, First = 1, Replace = 2, Add = 3 }
            enum MixDirection
            { In = 0, Out = 1 }
            class AnimationState extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get TimeScale(): number;
                public set TimeScale(value: number);
                public get Data(): Spine.AnimationStateData;
                public set Data(value: Spine.AnimationStateData);
                public get Tracks(): Spine.ExposedList$1<Spine.TrackEntry>;
                public add_Start ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public remove_Start ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public add_Interrupt ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public remove_Interrupt ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public add_End ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public remove_End ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public add_Dispose ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public remove_Dispose ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public add_Complete ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public remove_Complete ($value: Spine.AnimationState.TrackEntryDelegate) : void
                public add_Event ($value: Spine.AnimationState.TrackEntryEventDelegate) : void
                public remove_Event ($value: Spine.AnimationState.TrackEntryEventDelegate) : void
                public Update ($delta: number) : void
                public Apply ($skeleton: Spine.Skeleton) : boolean
                public ClearTracks () : void
                public ClearTrack ($trackIndex: number) : void
                public SetAnimation ($trackIndex: number, $animationName: string, $loop: boolean) : Spine.TrackEntry
                public SetAnimation ($trackIndex: number, $animation: Spine.Animation, $loop: boolean) : Spine.TrackEntry
                public AddAnimation ($trackIndex: number, $animationName: string, $loop: boolean, $delay: number) : Spine.TrackEntry
                public AddAnimation ($trackIndex: number, $animation: Spine.Animation, $loop: boolean, $delay: number) : Spine.TrackEntry
                public SetEmptyAnimation ($trackIndex: number, $mixDuration: number) : Spine.TrackEntry
                public AddEmptyAnimation ($trackIndex: number, $mixDuration: number, $delay: number) : Spine.TrackEntry
                public SetEmptyAnimations ($mixDuration: number) : void
                public GetCurrent ($trackIndex: number) : Spine.TrackEntry
                public ClearListenerNotifications () : void
                public constructor ($data: Spine.AnimationStateData)
                public constructor ()
            }
            class TrackEntry extends System.Object implements Spine.Pool$1.IPoolable<Spine.TrackEntry>
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimationStateData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Atlas extends System.Object implements System.Collections.Generic.IEnumerable$1<Spine.AtlasRegion>, System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                public GetEnumerator () : System.Collections.Generic.IEnumerator$1<Spine.AtlasRegion>
                public FlipV () : void
                public FindRegion ($name: string) : Spine.AtlasRegion
                public Dispose () : void
                public constructor ($reader: System.IO.TextReader, $dir: string, $textureLoader: Spine.TextureLoader)
                public constructor ($pages: System.Collections.Generic.List$1<Spine.AtlasPage>, $regions: System.Collections.Generic.List$1<Spine.AtlasRegion>)
                public constructor ()
            }
            class AtlasRegion extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface TextureLoader
            {
            }
            class AtlasPage extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Attachment extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get Name(): string;
            }
            class SkeletonData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Slot extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class VertexAttachment extends Spine.Attachment
            {
                protected [__keep_incompatibility]: never;
            }
            class BoundingBoxAttachment extends Spine.VertexAttachment
            {
                protected [__keep_incompatibility]: never;
            }
            class Bone extends System.Object implements Spine.IUpdatable
            {
                protected [__keep_incompatibility]: never;
            }
            interface IUpdatable
            {
            }
        }
        namespace Spine.AnimationState {
            interface TrackEntryDelegate
            { 
            (trackEntry: Spine.TrackEntry) : void; 
            Invoke?: (trackEntry: Spine.TrackEntry) => void;
            }
            var TrackEntryDelegate: { new (func: (trackEntry: Spine.TrackEntry) => void): TrackEntryDelegate; }
            interface TrackEntryEventDelegate
            { 
            (trackEntry: Spine.TrackEntry, e: Spine.Event) : void; 
            Invoke?: (trackEntry: Spine.TrackEntry, e: Spine.Event) => void;
            }
            var TrackEntryEventDelegate: { new (func: (trackEntry: Spine.TrackEntry, e: Spine.Event) => void): TrackEntryEventDelegate; }
        }
        namespace Spine.Pool$1 {
            interface IPoolable<T>
            {
            }
        }
        namespace Spine.Unity {
            class SkeletonRenderer extends UnityEngine.MonoBehaviour implements Spine.Unity.ISkeletonComponent, Spine.Unity.IHasSkeletonDataAsset
            {
                protected [__keep_incompatibility]: never;
                public skeletonDataAsset : Spine.Unity.SkeletonDataAsset
                public initialSkinName : string
                public initialFlipX : boolean
                public initialFlipY : boolean
                public separatorSlots : System.Collections.Generic.List$1<Spine.Slot>
                public zSpacing : number
                public useClipping : boolean
                public immutableTriangles : boolean
                public pmaVertexColors : boolean
                public clearStateOnDisable : boolean
                public tintBlack : boolean
                public singleSubmesh : boolean
                public addNormals : boolean
                public calculateTangents : boolean
                public disableRenderingOnOverride : boolean
                public valid : boolean
                public skeleton : Spine.Skeleton
                public get CustomMaterialOverride(): System.Collections.Generic.Dictionary$2<UnityEngine.Material, UnityEngine.Material>;
                public get CustomSlotMaterials(): System.Collections.Generic.Dictionary$2<Spine.Slot, UnityEngine.Material>;
                public get Skeleton(): Spine.Skeleton;
                public get SkeletonDataAsset(): Spine.Unity.SkeletonDataAsset;
                public add_GenerateMeshOverride ($value: Spine.Unity.SkeletonRenderer.InstructionDelegate) : void
                public remove_GenerateMeshOverride ($value: Spine.Unity.SkeletonRenderer.InstructionDelegate) : void
                public add_OnPostProcessVertices ($value: Spine.Unity.MeshGeneratorDelegate) : void
                public remove_OnPostProcessVertices ($value: Spine.Unity.MeshGeneratorDelegate) : void
                public add_OnRebuild ($value: Spine.Unity.SkeletonRenderer.SkeletonRendererDelegate) : void
                public remove_OnRebuild ($value: Spine.Unity.SkeletonRenderer.SkeletonRendererDelegate) : void
                public SetMeshSettings ($settings: Spine.Unity.MeshGenerator.Settings) : void
                public Awake () : void
                public ClearState () : void
                public EnsureMeshGeneratorCapacity ($minimumVertexCount: number) : void
                public Initialize ($overwrite: boolean) : void
                public LateUpdate () : void
                public FindAndApplySeparatorSlots ($startsWith: string, $clearExistingSeparators?: boolean, $updateStringArray?: boolean) : void
                public FindAndApplySeparatorSlots ($slotNamePredicate: System.Func$2<string, boolean>, $clearExistingSeparators?: boolean, $updateStringArray?: boolean) : void
                public ReapplySeparatorSlotNames () : void
                public constructor ()
            }
            interface ISkeletonComponent
            {
            }
            interface IHasSkeletonDataAsset
            {
            }
            class SkeletonAnimation extends Spine.Unity.SkeletonRenderer implements Spine.Unity.ISkeletonAnimation, Spine.Unity.IAnimationStateComponent, Spine.Unity.ISkeletonComponent, Spine.Unity.IHasSkeletonDataAsset
            {
                protected [__keep_incompatibility]: never;
                public state : Spine.AnimationState
                public loop : boolean
                public timeScale : number
                public get AnimationState(): Spine.AnimationState;
                public get AnimationName(): string;
                public set AnimationName(value: string);
                public add_UpdateLocal ($value: Spine.Unity.UpdateBonesDelegate) : void
                public remove_UpdateLocal ($value: Spine.Unity.UpdateBonesDelegate) : void
                public add_UpdateWorld ($value: Spine.Unity.UpdateBonesDelegate) : void
                public remove_UpdateWorld ($value: Spine.Unity.UpdateBonesDelegate) : void
                public add_UpdateComplete ($value: Spine.Unity.UpdateBonesDelegate) : void
                public remove_UpdateComplete ($value: Spine.Unity.UpdateBonesDelegate) : void
                public static AddToGameObject ($gameObject: UnityEngine.GameObject, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset) : Spine.Unity.SkeletonAnimation
                public static NewSkeletonAnimationGameObject ($skeletonDataAsset: Spine.Unity.SkeletonDataAsset) : Spine.Unity.SkeletonAnimation
                public Update ($deltaTime: number) : void
                public constructor ()
            }
            interface ISkeletonAnimation
            {
            }
            interface IAnimationStateComponent
            {
            }
            interface UpdateBonesDelegate
            { 
            (animated: Spine.Unity.ISkeletonAnimation) : void; 
            Invoke?: (animated: Spine.Unity.ISkeletonAnimation) => void;
            }
            var UpdateBonesDelegate: { new (func: (animated: Spine.Unity.ISkeletonAnimation) => void): UpdateBonesDelegate; }
            class SkeletonDataAsset extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class SkeletonGraphic extends UnityEngine.UI.MaskableGraphic implements Spine.Unity.ISkeletonComponent, Spine.Unity.IAnimationStateComponent, Spine.Unity.ISkeletonAnimation, Spine.Unity.IHasSkeletonDataAsset, UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public skeletonDataAsset : Spine.Unity.SkeletonDataAsset
                public initialSkinName : string
                public initialFlipX : boolean
                public initialFlipY : boolean
                public startingAnimation : string
                public startingLoop : boolean
                public timeScale : number
                public freeze : boolean
                public unscaledTime : boolean
                public get SkeletonDataAsset(): Spine.Unity.SkeletonDataAsset;
                public get OverrideTexture(): UnityEngine.Texture;
                public set OverrideTexture(value: UnityEngine.Texture);
                public get mainTexture(): UnityEngine.Texture;
                public get Skeleton(): Spine.Skeleton;
                public get SkeletonData(): Spine.SkeletonData;
                public get IsValid(): boolean;
                public get AnimationState(): Spine.AnimationState;
                public get MeshGenerator(): Spine.Unity.MeshGenerator;
                public static NewSkeletonGraphicGameObject ($skeletonDataAsset: Spine.Unity.SkeletonDataAsset, $parent: UnityEngine.Transform, $material: UnityEngine.Material) : Spine.Unity.SkeletonGraphic
                public static AddSkeletonGraphicComponent ($gameObject: UnityEngine.GameObject, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset, $material: UnityEngine.Material) : Spine.Unity.SkeletonGraphic
                public Update () : void
                public Update ($deltaTime: number) : void
                public LateUpdate () : void
                public GetLastMesh () : UnityEngine.Mesh
                public add_UpdateLocal ($value: Spine.Unity.UpdateBonesDelegate) : void
                public remove_UpdateLocal ($value: Spine.Unity.UpdateBonesDelegate) : void
                public add_UpdateWorld ($value: Spine.Unity.UpdateBonesDelegate) : void
                public remove_UpdateWorld ($value: Spine.Unity.UpdateBonesDelegate) : void
                public add_UpdateComplete ($value: Spine.Unity.UpdateBonesDelegate) : void
                public remove_UpdateComplete ($value: Spine.Unity.UpdateBonesDelegate) : void
                public add_OnPostProcessVertices ($value: Spine.Unity.MeshGeneratorDelegate) : void
                public remove_OnPostProcessVertices ($value: Spine.Unity.MeshGeneratorDelegate) : void
                public Clear () : void
                public Initialize ($overwrite: boolean) : void
                public UpdateMesh () : void
                public constructor ()
            }
            class MeshGenerator extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface MeshGeneratorDelegate
            { 
            (buffers: Spine.Unity.MeshGeneratorBuffers) : void; 
            Invoke?: (buffers: Spine.Unity.MeshGeneratorBuffers) => void;
            }
            var MeshGeneratorDelegate: { new (func: (buffers: Spine.Unity.MeshGeneratorBuffers) => void): MeshGeneratorDelegate; }
            class MeshGeneratorBuffers extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SkeletonRendererInstruction extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class SkeletonUtility extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public boneRoot : UnityEngine.Transform
                public skeletonRenderer : Spine.Unity.SkeletonRenderer
                public skeletonAnimation : Spine.Unity.ISkeletonAnimation
                public boneComponents : System.Collections.Generic.List$1<Spine.Unity.SkeletonUtilityBone>
                public constraintComponents : System.Collections.Generic.List$1<Spine.Unity.SkeletonUtilityConstraint>
                public static AddBoundingBoxGameObject ($skeleton: Spine.Skeleton, $skinName: string, $slotName: string, $attachmentName: string, $parent: UnityEngine.Transform, $isTrigger?: boolean) : UnityEngine.PolygonCollider2D
                public static AddBoundingBoxGameObject ($name: string, $box: Spine.BoundingBoxAttachment, $slot: Spine.Slot, $parent: UnityEngine.Transform, $isTrigger?: boolean) : UnityEngine.PolygonCollider2D
                public static AddBoundingBoxAsComponent ($box: Spine.BoundingBoxAttachment, $slot: Spine.Slot, $gameObject: UnityEngine.GameObject, $isTrigger?: boolean) : UnityEngine.PolygonCollider2D
                public static SetColliderPointsLocal ($collider: UnityEngine.PolygonCollider2D, $slot: Spine.Slot, $box: Spine.BoundingBoxAttachment) : void
                public static GetBoundingBoxBounds ($boundingBox: Spine.BoundingBoxAttachment, $depth?: number) : UnityEngine.Bounds
                public static AddBoneRigidbody2D ($gameObject: UnityEngine.GameObject, $isKinematic?: boolean, $gravityScale?: number) : UnityEngine.Rigidbody2D
                public add_OnReset ($value: Spine.Unity.SkeletonUtility.SkeletonUtilityDelegate) : void
                public remove_OnReset ($value: Spine.Unity.SkeletonUtility.SkeletonUtilityDelegate) : void
                public ResubscribeEvents () : void
                public RegisterBone ($bone: Spine.Unity.SkeletonUtilityBone) : void
                public UnregisterBone ($bone: Spine.Unity.SkeletonUtilityBone) : void
                public RegisterConstraint ($constraint: Spine.Unity.SkeletonUtilityConstraint) : void
                public UnregisterConstraint ($constraint: Spine.Unity.SkeletonUtilityConstraint) : void
                public CollectBones () : void
                public GetBoneRoot () : UnityEngine.Transform
                public SpawnRoot ($mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean) : UnityEngine.GameObject
                public SpawnHierarchy ($mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean) : UnityEngine.GameObject
                public SpawnBoneRecursively ($bone: Spine.Bone, $parent: UnityEngine.Transform, $mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean) : UnityEngine.GameObject
                public SpawnBone ($bone: Spine.Bone, $parent: UnityEngine.Transform, $mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean) : UnityEngine.GameObject
                public constructor ()
            }
            class SkeletonUtilityBone extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class SkeletonUtilityConstraint extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class SpineAttributeBase extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
            }
            class SpineAnimation extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
                public constructor ($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean)
                public constructor ()
            }
            class SpineAttachment extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
                public returnAttachmentPath : boolean
                public currentSkinOnly : boolean
                public placeholdersOnly : boolean
                public skinField : string
                public slotField : string
                public static GetHierarchy ($fullPath: string) : Spine.Unity.SpineAttachment.Hierarchy
                public static GetAttachment ($attachmentPath: string, $skeletonData: Spine.SkeletonData) : Spine.Attachment
                public static GetAttachment ($attachmentPath: string, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset) : Spine.Attachment
                public constructor ($currentSkinOnly?: boolean, $returnAttachmentPath?: boolean, $placeholdersOnly?: boolean, $slotField?: string, $dataField?: string, $skinField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean)
                public constructor ()
            }
            class SpineMesh extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static NewSkeletonMesh () : UnityEngine.Mesh
            }
            class SpineSkin extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
                public defaultAsEmptyString : boolean
                public constructor ($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean, $defaultAsEmptyString?: boolean)
                public constructor ()
            }
            class SpineSlot extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
                public containsBoundingBoxes : boolean
                public constructor ($startsWith?: string, $dataField?: string, $containsBoundingBoxes?: boolean, $includeNone?: boolean, $fallbackToTextField?: boolean)
                public constructor ()
            }
        }
        namespace Spine.Unity.SkeletonRenderer {
            interface InstructionDelegate
            { 
            (instruction: Spine.Unity.SkeletonRendererInstruction) : void; 
            Invoke?: (instruction: Spine.Unity.SkeletonRendererInstruction) => void;
            }
            var InstructionDelegate: { new (func: (instruction: Spine.Unity.SkeletonRendererInstruction) => void): InstructionDelegate; }
            interface SkeletonRendererDelegate
            { 
            (skeletonRenderer: Spine.Unity.SkeletonRenderer) : void; 
            Invoke?: (skeletonRenderer: Spine.Unity.SkeletonRenderer) => void;
            }
            var SkeletonRendererDelegate: { new (func: (skeletonRenderer: Spine.Unity.SkeletonRenderer) => void): SkeletonRendererDelegate; }
        }
        namespace Spine.Unity.MeshGenerator {
            class Settings extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Spine.Unity.SkeletonUtility {
            interface SkeletonUtilityDelegate
            { 
            () : void; 
            Invoke?: () => void;
            }
            var SkeletonUtilityDelegate: { new (func: () => void): SkeletonUtilityDelegate; }
        }
        namespace Spine.Unity.SkeletonUtilityBone {
            enum Mode
            { Follow = 0, Override = 1 }
        }
        namespace Spine.Unity.SpineAttachment {
            class Hierarchy extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.UGUIEventListener {
            interface VoidDelegate
            { 
            (go: UnityEngine.GameObject) : void; 
            Invoke?: (go: UnityEngine.GameObject) => void;
            }
            var VoidDelegate: { new (func: (go: UnityEngine.GameObject) => void): VoidDelegate; }
            interface VectorDelegate
            { 
            (go: UnityEngine.GameObject, delta: UnityEngine.Vector2) : void; 
            Invoke?: (go: UnityEngine.GameObject, delta: UnityEngine.Vector2) => void;
            }
            var VectorDelegate: { new (func: (go: UnityEngine.GameObject, delta: UnityEngine.Vector2) => void): VectorDelegate; }
        }
        namespace com.tencent.pandora.pixui.frame {
            class Border extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public width : number
                public style : com.tencent.pandora.pixui.frame.BorderStyle
                public color : com.tencent.pandora.pixui.frame.NativeColor
            }
            enum BorderStyle
            { border_style_none = 0, border_style_hidden = 1, border_style_dotted = 2, border_style_dashed = 3, border_style_solid = 4, border_style_double = 5, border_style_groove = 6, border_style_ridge = 7, border_style_inset = 8, border_style_outset = 9 }
            class NativeColor extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum BorderImageModel
            { image_fill = 0, image_border = 1 }
            class PxAssetMgr extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public GetAsset ($id: number) : com.tencent.pandora.pixui.frame.PxDrawableAsset
                public AddAsset ($id: number, $asset: com.tencent.pandora.pixui.frame.PxDrawableAsset) : void
                public RemoveAsset ($id: number) : void
                public Clear () : void
                public static GetUnityPixelFormatFromPixelFormat ($format: com.tencent.pandora.pixui.frame.EPixelFormat) : UnityEngine.TextureFormat
                public CreateTexture ($url: string, $textureId: number, $width: number, $height: number, $flag: number, $format: com.tencent.pandora.pixui.frame.EPixelFormat, $ptr: System.IntPtr, $dataSize: number) : void
                public constructor ()
            }
            class PxDrawableAsset extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum EPixelFormat
            { em_pf_rgba32 = 0, em_pf_rgb24 = 1, em_pf_etc1_rgb = 2, em_pf_etc2_rgba = 3, em_pf_bc1_rgb = 4, em_pf_bc3_rgba = 5, em_pf_bc7_rgba = 6, em_pf_astc_4x4_rgba = 7, em_pf_count = 8, em_pf_invalid = 8 }
            class PxCacheMgr extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public Init () : void
                public GetWidget ($type: com.tencent.pandora.pixui.cmds.DrawHelper.Type) : com.tencent.pandora.pixui.ui.WidgetUI
                public ReleaseWidget ($widget: com.tencent.pandora.pixui.ui.WidgetUI) : void
                public Check () : void
                public KeepObject ($obj: any) : void
                public Str2Ptr ($s: string) : System.IntPtr
                public Update () : void
                public Clear () : void
                public constructor ()
            }
            class PxFontMgr extends com.tencent.pandora.pixui.utils.PxBehaviour
            {
                protected [__keep_incompatibility]: never;
                public Attach ($window: com.tencent.pandora.pixui.frame.PxWindow) : void
                public GetFontDict () : System.Collections.Generic.Dictionary$2<number, com.tencent.pandora.pixui.frame.PxFontMgr.Font>
                public GetFont ($fontId: number) : com.tencent.pandora.pixui.frame.PxFontMgr.Font
                public CreateFont ($fontName: string, $fontSize: number, $style: UnityEngine.FontStyle, $fm: $Ref<com.tencent.pandora.pixui.frame.FontMetrics>) : number
                public DeleteFont ($fontId: number) : void
                public GetTextWidth ($textPtr: System.IntPtr, $textLen: number, $textId: number, $fontId: number) : number
                public static GetStyle ($style: com.tencent.pandora.pixui.frame.FontStyle, $weight: number) : UnityEngine.FontStyle
                public GetCharWidth ($windowId: number, $cp: number, $fontId: number) : number
                public constructor ()
            }
            class PxWindow extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class FontMetrics extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum FontStyle
            { fontStyleNormal = 0, fontStyleItalic = 1 }
            class PxInputMgr extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get mouseScrollDelta(): UnityEngine.Vector2;
                public get currentEvent(): com.tencent.pandora.pixui.frame.PxInputMgr.PxInputEvent;
                public static GetInstance () : com.tencent.pandora.pixui.frame.PxInputMgr
                public Update () : void
                public ActiveKeyboard ($type: com.tencent.pandora.pixui.frame.EKeyboardType, $defaultTextPtr: System.IntPtr, $hintTextPtr: System.IntPtr) : boolean
                public DeativateKeyboard () : boolean
                public SetMouseButton ($button: number, $press: boolean) : void
                public GetMouseButton ($button: number) : boolean
                public SetMouseWheel ($eventDataScrollDelta: UnityEngine.Vector2) : void
                public SetEvent ($e: UnityEngine.Event) : void
                public constructor ()
            }
            enum EKeyboardType
            { em_Keyboard_Default = 0, em_Keyboard_Number = 1, em_Keyboard_Password = 2 }
            class PxLoadMgr extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public LoadDataSyncThreaded ($windowId: number, $url: string, $seqId: number) : com.tencent.pandora.pixui.frame.LoadDataSyncResult
                public ReleaseDataSyncThreaded ($windowId: number, $url: string, $seqId: number, $buf: $Ref<com.tencent.pandora.pixui.frame.NativeBuffer>) : void
                public LoadDataAsyncThreaded ($windowId: number, $loaderId: number, $callbackId: number, $url: string) : boolean
                public constructor ()
            }
            class LoadDataSyncResult extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class NativeBuffer extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class PxSlotMgr extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public add_shouldOverrideAttachmentLoad ($value: com.tencent.pandora.pixui.frame.ShouldOverrideAttachmentLoadDelegate) : void
                public remove_shouldOverrideAttachmentLoad ($value: com.tencent.pandora.pixui.frame.ShouldOverrideAttachmentLoadDelegate) : void
                public Create ($windowId: number, $attachmentHandle: number, $src: string) : com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment
                public Get ($id: number) : com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment
                public Delete ($id: number) : void
                public constructor ($stashingRoot: UnityEngine.GameObject)
                public constructor ()
            }
            interface ShouldOverrideAttachmentLoadDelegate
            { 
            (attachment: com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment, onComplete: com.tencent.pandora.pixui.frame.OnSlotAttachmentLoadComplete) : boolean; 
            Invoke?: (attachment: com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment, onComplete: com.tencent.pandora.pixui.frame.OnSlotAttachmentLoadComplete) => boolean;
            }
            var ShouldOverrideAttachmentLoadDelegate: { new (func: (attachment: com.tencent.pandora.pixui.frame.PxSlotMgr.Attachment, onComplete: com.tencent.pandora.pixui.frame.OnSlotAttachmentLoadComplete) => boolean): ShouldOverrideAttachmentLoadDelegate; }
            interface OnSlotAttachmentLoadComplete
            { 
            (result: UnityEngine.GameObject) : void; 
            Invoke?: (result: UnityEngine.GameObject) => void;
            }
            var OnSlotAttachmentLoadComplete: { new (func: (result: UnityEngine.GameObject) => void): OnSlotAttachmentLoadComplete; }
            class NativePoint extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class NativeRect extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class NativeRadiuses extends System.ValueType implements System.IEquatable$1<com.tencent.pandora.pixui.frame.NativeRadiuses>
            {
                protected [__keep_incompatibility]: never;
            }
            class NativeString extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ImageSlice extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class NativeMatrix extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.pixui.utils {
            class PxBehaviour extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class PxGraphic extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            class PxLine extends com.tencent.pandora.pixui.utils.PxGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            class PxSlicedImage extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            class PxImage extends com.tencent.pandora.pixui.utils.PxSlicedImage implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            class PxText extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            class PxWatch extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.pixui.ui {
            class WidgetUI extends com.tencent.pandora.pixui.utils.PxBehaviour
            {
                protected [__keep_incompatibility]: never;
                public properties : com.tencent.pandora.pixui.ui.WidgetUI.PropertySet
                public watch : com.tencent.pandora.pixui.utils.PxWatch
                public childCount : number
                public id : number
                public index : number
                public startSortingRenderOrder : number
                public renderBatchSize : number
                public isActive : boolean
                public isPaint : boolean
                public isVisible : boolean
                public isSlot : boolean
                public parent : com.tencent.pandora.pixui.ui.WidgetUI
                public siblingIndex : number
                public type : com.tencent.pandora.pixui.cmds.DrawHelper.Type
                public window : com.tencent.pandora.pixui.frame.PxWindow
                public static get isDebug(): boolean;
                public get IsExpired(): boolean;
                public static Create ($type: com.tencent.pandora.pixui.cmds.DrawHelper.Type) : com.tencent.pandora.pixui.ui.WidgetUI
                public static Delete ($go: UnityEngine.GameObject) : void
                public static GetTypes () : System.Array$1<com.tencent.pandora.pixui.cmds.DrawHelper.Type>
                public static GetType ($type: System.Type) : com.tencent.pandora.pixui.cmds.DrawHelper.Type
                public static GetName ($type: com.tencent.pandora.pixui.cmds.DrawHelper.Type) : string
                public GetName () : string
                public SetIdentity () : void
                public SetCmd ($cmd: com.tencent.pandora.pixui.cmds.DrawCmd) : void
                public SetVisible ($v: boolean) : void
                public Paint () : void
                public SetParent ($parent: com.tencent.pandora.pixui.ui.WidgetUI) : void
                public SetDirty () : void
                public SetDirty ($index: number) : void
                public SetMatrix ($mat: com.tencent.pandora.pixui.frame.NativeMatrix) : void
                public SetSize ($w: number, $h: number) : void
                public SetName ($name: string) : void
                public AddChild ($child: com.tencent.pandora.pixui.ui.WidgetUI) : void
                public SetSiblingIndex () : void
                public Clear () : void
                public OnActive () : void
                public OnDeactive () : void
                public constructor ()
                public GetType () : System.Type
            }
            class BorderUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public border : com.tencent.pandora.pixui.ugui.PxBorder
                public cmd : com.tencent.pandora.pixui.cmds.BorderCmd
                public constructor ()
            }
            class ClipUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public cachedMask : UnityEngine.UI.Mask
                public cmd : com.tencent.pandora.pixui.cmds.ClipCmd
                public constructor ()
            }
            class GroupUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public cmd : com.tencent.pandora.pixui.cmds.GroupCmd
                public constructor ()
            }
            class LineUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public line : com.tencent.pandora.pixui.utils.PxLine
                public cmd : com.tencent.pandora.pixui.cmds.LineCmd
                public SetLine ($width: number, $color: com.tencent.pandora.pixui.frame.NativeColor, $startPos: com.tencent.pandora.pixui.frame.NativePoint, $endPos: com.tencent.pandora.pixui.frame.NativePoint, $isClear?: boolean, $isDirty?: boolean) : void
                public constructor ()
            }
            class MountUI extends com.tencent.pandora.pixui.utils.PxBehaviour
            {
                protected [__keep_incompatibility]: never;
                public get windowId(): number;
                public set windowId(value: number);
                public GetSize () : UnityEngine.Vector2
                public SetSize ($v: UnityEngine.Vector2) : void
                public SetPosition ($v: UnityEngine.Vector2) : void
                public GetPosition () : UnityEngine.Vector2
                public constructor ()
            }
            class RectUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public cachedImage : com.tencent.pandora.pixui.utils.PxImage
                public cmd : com.tencent.pandora.pixui.cmds.RectCmd
                public SetColor ($color: com.tencent.pandora.pixui.frame.NativeColor) : void
                public SetShape ($rect: com.tencent.pandora.pixui.frame.NativeRect, $radius: com.tencent.pandora.pixui.frame.NativeRadiuses) : void
                public constructor ()
            }
            class RenderLayerUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public cmd : com.tencent.pandora.pixui.cmds.RenderLayerCmd
                public m_Canvas : UnityEngine.Canvas
                public constructor ()
            }
            class SlotUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public cmd : com.tencent.pandora.pixui.cmds.SlotCmd
                public get overrideSortingOrder(): boolean;
                public set overrideSortingOrder(value: boolean);
                public constructor ()
            }
            class TextUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public cachedShadow : UnityEngine.UI.Shadow
                public cachedText : com.tencent.pandora.pixui.utils.PxText
                public cmd : com.tencent.pandora.pixui.cmds.TextCmd
                public SetFont ($fontInfo: com.tencent.pandora.pixui.frame.PxFontMgr.Font) : void
                public SetColor ($color: com.tencent.pandora.pixui.frame.NativeColor) : void
                public SetText ($text: com.tencent.pandora.pixui.frame.NativeString) : void
                public SetShadow ($offset: UnityEngine.Vector2, $blur: number, $color: com.tencent.pandora.pixui.frame.NativeColor) : void
                public SetShadow ($v: boolean) : void
                public constructor ()
            }
            class TextureUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public m_Image : com.tencent.pandora.pixui.utils.PxImage
                public cmd : com.tencent.pandora.pixui.cmds.TextureCmd
                public SetColor ($color: com.tencent.pandora.pixui.frame.NativeColor) : void
                public SetAsset ($asset: com.tencent.pandora.pixui.frame.PxDrawableAsset, $rect: com.tencent.pandora.pixui.frame.NativeRect, $srcUVRegion: com.tencent.pandora.pixui.frame.NativeRect, $slice: com.tencent.pandora.pixui.frame.ImageSlice) : void
                public constructor ()
            }
            class WindowUI extends com.tencent.pandora.pixui.ui.WidgetUI
            {
                protected [__keep_incompatibility]: never;
                public GetContent () : com.tencent.pandora.pixui.ui.WidgetUI
                public TransformScreenPointToPxPoint ($screenPoint: UnityEngine.Vector2) : UnityEngine.Vector2
                public TransformScreenPointToClientPoint ($screenPoint: UnityEngine.Vector2) : UnityEngine.Vector2
                public ContainsPoint ($v: UnityEngine.Vector2) : boolean
                public SetData ($window: com.tencent.pandora.pixui.frame.PxWindow, $mount: com.tencent.pandora.pixui.ui.MountUI) : void
                public GetFullSize () : UnityEngine.Vector2
                public EnableEventHandler ($active: boolean) : void
                public ShowModal ($active: boolean) : void
                public constructor ()
            }
        }
        namespace com.tencent.pandora.pixui.cmds.DrawHelper {
            enum Type
            { Unkonw = 0, Texture = 1, Text = 2, MultiText = 3, Border = 4, Line = 5, MultiLine = 6, Rect = 7, Clip = 8, Group = 9, Shadow = 10, Window = 11, Slot = 12, RenderLayer = 13 }
        }
        namespace com.tencent.pandora.pixui.frame.PxFontMgr {
            class Font extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.pixui.frame.PxInputMgr {
            class PxInputEvent extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.pixui.ugui {
            class PxBorder extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IClippable, UnityEngine.UI.IMaskable, UnityEngine.UI.IMaterialModifier, UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.pixui.cmds {
            class DrawCmd extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class DrawCmd$1<T> extends com.tencent.pandora.pixui.cmds.DrawCmd
            {
                protected [__keep_incompatibility]: never;
            }
            class WidgetCmd$1<T> extends com.tencent.pandora.pixui.cmds.DrawCmd$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
            class BorderCmd extends com.tencent.pandora.pixui.cmds.WidgetCmd$1<com.tencent.pandora.pixui.ui.BorderUI>
            {
                protected [__keep_incompatibility]: never;
            }
            class ContainerCmd$1<T> extends com.tencent.pandora.pixui.cmds.DrawCmd$1<T> implements com.tencent.pandora.pixui.cmds.IContainerCmd
            {
                protected [__keep_incompatibility]: never;
            }
            interface IContainerCmd
            {
            }
            class ClipCmd extends com.tencent.pandora.pixui.cmds.ContainerCmd$1<com.tencent.pandora.pixui.ui.ClipUI> implements com.tencent.pandora.pixui.cmds.IContainerCmd
            {
                protected [__keep_incompatibility]: never;
            }
            class GroupCmd extends com.tencent.pandora.pixui.cmds.ContainerCmd$1<com.tencent.pandora.pixui.ui.GroupUI> implements com.tencent.pandora.pixui.cmds.IContainerCmd
            {
                protected [__keep_incompatibility]: never;
            }
            class LineCmd extends com.tencent.pandora.pixui.cmds.WidgetCmd$1<com.tencent.pandora.pixui.ui.LineUI>
            {
                protected [__keep_incompatibility]: never;
            }
            class RectCmd extends com.tencent.pandora.pixui.cmds.WidgetCmd$1<com.tencent.pandora.pixui.ui.RectUI>
            {
                protected [__keep_incompatibility]: never;
            }
            class RenderLayerCmd extends com.tencent.pandora.pixui.cmds.ContainerCmd$1<com.tencent.pandora.pixui.ui.RenderLayerUI> implements com.tencent.pandora.pixui.cmds.IContainerCmd
            {
                protected [__keep_incompatibility]: never;
            }
            class SlotCmd extends com.tencent.pandora.pixui.cmds.ContainerCmd$1<com.tencent.pandora.pixui.ui.SlotUI> implements com.tencent.pandora.pixui.cmds.IContainerCmd
            {
                protected [__keep_incompatibility]: never;
            }
            class TextCmd extends com.tencent.pandora.pixui.cmds.WidgetCmd$1<com.tencent.pandora.pixui.ui.TextUI>
            {
                protected [__keep_incompatibility]: never;
            }
            class TextureCmd extends com.tencent.pandora.pixui.cmds.WidgetCmd$1<com.tencent.pandora.pixui.ui.TextureUI>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace com.tencent.pandora.pixui.ui.WidgetUI {
            class PropertySet extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
    }
    export = CSharp;
}
