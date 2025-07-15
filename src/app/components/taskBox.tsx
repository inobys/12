
import { Faas, context } from 'faas-lib/faas-proxy';
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect } from 'preact/hooks';
import { taskPackagesConf, sortedKeys, getImgPath } from 'src/app/util'
// 任务信息
const TaskItem = (props: any) => {
    const { item, receiveTask } = props;
    return (
        <div className={`taskbox-item${item.gift_status == 0 ? ' lock' : item.gift_status == 2 ? ' gott' : ''}`} onClick={() => { receiveTask(item); }}>
            <div className="taskbox-item-bd"></div>
            <div className="taskbox-item-img">
                <img className={item.id == 4867726 ? 'sp' : ''} src={getImgPath(item.pic)} />
            </div>
            <div className="taskbox-item-lock"></div>
            <div className="taskbox-item-gott"></div>
        </div>
    );
};

// 活动信息组件
const TaskBox = memo((props: any) => {
    const { taskInfo, receiveTask, unlockTask, showToastTips } = props;
    const taskDomList1: any[] = [];
    const taskDomList2: any[] = [];
    const taskDotList: any[] = [];

    const taskList = sortedKeys.map((key, index) => ({
        ...taskInfo.taskList[index],
        ...taskPackagesConf[key],
        id: key
    }));

    console.info('taskList------->', JSON.stringify(taskList));

    const loginDay = +taskInfo.loginDay > 7 ? 7 : +taskInfo.loginDay;
    taskList.forEach((task, index) => {
        // task.login_day = 2;
        // task.gift_status = 1;
        const dom = <TaskItem item={task} receiveTask={receiveTask} />;
        if (index < 7) {
            taskDomList2.push(dom);
            taskDotList.push((<div className={loginDay > index ? 'dot on' : 'dot'}><img src={getImgPath(`day${index + 1}.png`)} /></div>));
        } else {
            taskDomList1.push(dom);
        }
    });
    return (
        <div className={`taskbox${taskInfo.taskList.every(a => a.gift_status != 0) ? ' full' : ''}`}>
            <div className="taskbox-wrapper">
                <div className="taskbox-list list1">
                    {taskDomList1}
                </div>
                <div className="taskbox-list list2">
                    {taskDomList2}
                </div>
                <div className="taskbox-dot">
                    {taskDotList}
                </div>
                {/*<div className="taskbox-prog" style={{ width: `${(loginDay * 226 + 81) / 100}rem` }}>*/}
                {/*    <div className="taskbox-prog-line"></div>*/}
                {/*</div>*/}
                {/*<div className="taskbox-unlock" style={{ left: `${(loginDay * 226 + 40) / 100}rem` }} onClick={unlockTask}></div>*/}
            </div>
        </div>
    );
});

export default TaskBox;