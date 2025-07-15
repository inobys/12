import { observer } from 'mobx-preact';
import { Faas, context } from 'faas-lib/faas-proxy'; 


// 获得奖励组件
const BorderText = (props: any) => {
    let {
        text,
        isBold = false,
        isDeep = false
    } = props;
    if (typeof text != 'string') return;

    let getStyle = (x, y) => {

        return {
            width: '100%',
            fontFamily: 'fzlthjt',
            fontWeight: isBold ? 'bold' : 'normal',
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`,
            color: '#000000',
            zIndex: -1
        };
    };

    const deepArr = [[-1, 1], [1, -1], [-1, -1], [1, 1], [-1, 0], [0, 1], [1, 0], [0, -1], [0, 2], [1, 2]];
    const deepStr = deepArr.map(d => {
        return <text style={getStyle(d[0], d[1])}>{text}</text>;
    });
    return (
        <div style={{ display: 'flex', fontFamily: 'fzlthjt', fontWeight: isBold ? 'bold' : 'normal', alignItems: 'center', flexDirection: 'row', position: 'relative' }}>
            <text style={{ fontWeight: isBold ? 'bold' : 'normal' }}>{text}</text>
            {deepStr}
        </div>
    );
};

export default BorderText;