// 获得奖励组件
export const Button = ({rootClass, onClick}) => (
    <div className={rootClass} onClick={onClick}>
        <div className="normal-bg"></div>
    </div>
);