export const Direction = {
    Horizontal: 0,
    Vertical: 1,
}

Object.freeze(Direction);


let startIndex = 0;
let endIndex = -1;
let startBoundary = 0;
let endBoundary = 0;
let containerWidth = 0;
let viewHeight = 0;
let viewWidth = 0;
let containerHeight = 0;
let scorllDirection = Direction.Vertical;

let itemSize = 0;
let defaultItemSize = 200;

let viewDiv;
let contentDiv;

let itemCount = 0;
let itemPool = [];
let itemMap = {};
let itemSizeList = [];
let MOVE_DELTA = 0;  //要设置的比较小才有效
let curScrollOffset = 0;
let fillItemFunc;
let onStartFunc;
let onEndFunc;
let CalculateItemSizeFunc;

let cacheNumber = 0;//多缓存几个数量

//root：该瀑布流组件根节点
//count：当前列表的数量
//viewSize:瀑布流组件viewSize，高或宽超出部分不显示
//direction:方向，暂时仅支持垂直
//calculatedSize:单元格固定尺寸，可设置为一个计算单元格高度的函数。
//cacheNum:滑动过快的话，可稍微增加几个缓存，设置缓存数量。
//fillFunc:填充具体对应的Item函数委托
export const CreateList = (root, count, viewSize, direction, calculatedSize, cacheNum, fillFunc)=>
{
    if(root != undefined)
    {
        itemCount = count;
        scorllDirection = direction;
        cacheNumber = cacheNum;
        if (typeof calculatedSize == 'function')
        {
            // console.log('---------------    itemSize is Funtion -------------------')
            CalculateItemSizeFunc = calculatedSize;
        }
        else
        {
            // console.log('---------------    itemSize is size Num -------------------')
            itemSize = calculatedSize;
        }
        viewDiv = document.createElement("div");
        viewDiv.style.position = "relative";
        viewDiv.style.overflow = "scroll";
        viewDiv.style.willChange = "transform";
        viewDiv.style.left = "0px";
        viewDiv.style.top = "0px";
     
        viewDiv.addEventListener('scroll', OnScroll);
        root.appendChild(viewDiv);
        //创建一个contener
        contentDiv = document.createElement("div");
       
        if(scorllDirection == Direction.Horizontal)
        {
            viewWidth = viewSize ;
            viewDiv.style.flexDirection = "row";
            // viewDiv.style.height = `100%`;
            viewDiv.style.height = `400px`;
            viewDiv.style.width = `${viewSize}px`;
            viewWidth = viewSize ;
            contentDiv.style.height = "100%";
        }
        else
        {
            viewDiv.style.flexDirection = "column";
            viewDiv.style.height =  `${viewSize}px`;
            viewDiv.style.width = `100%`;
            viewHeight = viewSize ;
            contentDiv.style.width = "100%";
        }
        viewDiv.appendChild(contentDiv);
        InitItemsSize(0, itemCount);
        fillItemFunc = fillFunc;
        itemMap = {};
        Fill();
    }
    else
        console.log("----------  未能找到瀑布流组件根节点！！！！  ------------")
    return viewDiv;
}

const InitItemsSize = (begin,end)=>
{
    for(let i = begin; i < end; i++)
    {
        itemSizeList[i] = -1;
    }
}

const GetItemSize = (index)=>
{
    let curSize = 0;
    if(CalculateItemSizeFunc != undefined)
    {
        if(itemSizeList[index] != undefined && itemSizeList[index] != -1)
        {
            curSize = itemSizeList[index];
        }
        else
        {
            curSize = CalculateItemSizeFunc(index);
            itemSizeList[index] = curSize;
        }
    }
    else
        curSize = itemSize;
    return curSize;
}

export const SetOnStartFunc = (onStart)=>
{
    onStartFunc = onStart;
}

export const SetOnEndFunc = (onEnd)=>
{
    onEndFunc = onEnd;
}

const OnScroll = ( event ) =>
{
    // const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
    const {scrollLeft, scrollTop } = event.currentTarget;
    // console.log('================== scrollLeft:  ', scrollLeft);
    // console.log('================== scrollTop  ', scrollTop);
    if(scorllDirection == Direction.Horizontal)
    {
        if(scrollLeft == 0 )
        {
            if(onStartFunc != undefined)
            {
                onStartFunc();
                Leftward();
                return
            }
        }
        else if(scrollLeft > 0  &&  (scrollLeft + viewWidth) >= endBoundary  )
        {
            if(onEndFunc != undefined)
            {
                // console.log("----------onEndFunc  viewDiv scrollLeft:", scrollLeft,  "------------");
                // console.log("----------onEndFunc   endBoundary:", endBoundary,  "------------");
                
                // console.log("---------- onEndFunc viewDiv top:", viewDiv.scrollTop,  "------------");
                onEndFunc();
                // Rightward();
                return;
            }
        }
        const distance = scrollLeft - curScrollOffset;
        curScrollOffset = scrollLeft;
        if(distance >= MOVE_DELTA)
        {
            Leftward();
        }
        else if(distance < -MOVE_DELTA)
        {
            Rightward();
        }
    }
    else
    {
        if(scrollTop == 0 )
        {
            if(onStartFunc != undefined)
            {
                onStartFunc();
                Forward();
                return
            }
        }
        else if(scrollTop > 0 &&  (scrollTop + viewHeight) >= endBoundary)
        {
            if(onEndFunc != undefined)
            {
                onEndFunc();
                return;
            }
        }
        const distance = scrollTop - curScrollOffset;
        curScrollOffset = scrollTop;
        if(distance >= MOVE_DELTA)
        {
            Forward();
        }
        else if(distance < -MOVE_DELTA)
        {
            BackWard();
        }
    }
}

export const AppendList = (count)=>
{
    const curIndex = itemCount;
    itemCount = itemCount + count;
    InitItemsSize( curIndex, itemCount);
    if(scorllDirection == Direction.Horizontal)
        Leftward();
    else
        Forward();
}

export const Refresh = (count)=>
{
    RecycleAll();
    itemCount = count;
    itemSizeList = [];
    InitItemsSize(0, itemCount);
    curScrollOffset = 0;
    viewDiv.scrollTop = 0;
    Fill();
}

const Fill = () => {
    // console.log("----------  fillItem  ------------")
    startIndex = 0;
    endIndex = -1;
    startBoundary = 0;
    endBoundary = 0;
    containerHeight = 0;
    containerWidth = 0;
    curScrollOffset = 0;

    if(scorllDirection == Direction.Horizontal)
        Leftward();
    else
        Forward();

    // console.log("----------  viewDiv left:", viewDiv.scrollLeft,  "------------");
    // console.log("----------  viewDiv top:", viewDiv.scrollTop,  "------------");
}

const CreateItem = ( index ) => {
    let item;
    // console.log('CreateItem  pool size:', itemPool.length)
    if(itemPool.length > 0)
    {
        // console.log("----------  useItemPool  ------------")
        item = itemPool.pop(item);//itemPool[0];
        item.id = 'item_'+index;
        fillItemFunc(item, index);
    }
    else
    {
        // console.log("----------  itemPool is null!!!  ------------")
        if(fillItemFunc != undefined)
        {
            item = document.createElement('div');
            item.id = 'item_'+index;
            fillItemFunc(item, index);
            contentDiv.appendChild(item);
        }
        const curSize = GetItemSize(index);
        if(scorllDirection == Direction.Horizontal)
        {
            item.style.width =  `${curSize}`;
        }
        else
        {
            // console.log("----------  curSize:",curSize," ------------")
            item.style.height =  `${curSize}`;

        }
    }
    return item;
}

const Forward = () => {
    // console.log("----------  Forward  ------------")
    // console.log("----------  endBoundary:",endBoundary, curScrollOffset, endIndex, "  ------------")
    // console.log("----------  itemCount:",itemCount, "  ------------")
    // console.log("---------- boundary:",curScrollOffset + viewHeight + cacheNumber*defaultItemSize , "  ------------")
    while ((endIndex < itemCount - 1) && endBoundary < (curScrollOffset + viewHeight + cacheNumber*defaultItemSize ))//itemSize
    {
        endIndex++;
        let item = CreateItem(endIndex);
        itemMap[`${endIndex}`]=item;
        SetItemPosition(item, endBoundary);
        RefreshEndBundary();
        CalculateContentSize();
    }
    RecycleBegin();
}

const BackWard = () => {
    // console.log("----------  BackWard  ------------")
    // console.log("----------  startBoundary:",startBoundary, curScrollOffset, startIndex, "  ------------")
    while (startIndex > 0 && curScrollOffset <= startBoundary)
    {
        startIndex--;
        let item = CreateItem(startIndex);
        itemMap[`${startIndex}`]=item;
        let height = 0;
        height = GetItemSize(startIndex);
        SetItemPosition(item, startBoundary - height);
        RefreshBeginBundary();
    }
    RecycleEnd();
}

const Leftward = () => {
    // console.log("----------  Leftward  ------------")
    // console.log("----------  endBoundary:",endBoundary, curScrollOffset, endIndex, "  ------------")
    while ((endIndex < itemCount - 1) && endBoundary < (curScrollOffset + viewWidth + cacheNumber*defaultItemSize ))// 
    {
        endIndex++;
        // console.log("----------  endIndex:",  endIndex,"  ------------")
        let item = CreateItem(endIndex);
        itemMap[`${endIndex}`]= item;
        SetItemPosition(item, endBoundary);
        RefreshEndBundary();
        CalculateContentSize();
    }
   RecycleBegin();
}

const Rightward = () => {
    // console.log("----------  Rightward  ------------")
    // console.log("----------  startBoundary:",startBoundary, curScrollOffset, startIndex, "  ------------")
    while (startIndex > 0 && curScrollOffset <= startBoundary)
    {
        startIndex--;
        let item = CreateItem(startIndex);
        itemMap[`${startIndex}`]=item;
        let width = 0;
        width = GetItemSize(startIndex);
        SetItemPosition(item, startBoundary - width);
        RefreshBeginBundary();
    }
   RecycleEnd();
}

const SetItemPosition = (item, itemPos) => {
    // console.log("---------- SetItemPosition itemPos:",itemPos,"  ------------")
    if(scorllDirection == Direction.Horizontal)
    {
        // console.log("---------- scorllDirection == Direction.Horizontal  ------------")
        item.style.left = `${itemPos}`;
    }
    else
        item.style.top = `${itemPos}`;
}

const RefreshEndBundary = () => {
    // console.log("----------@@@ endIndex :",endIndex,"  ------------")
    // console.log("----------@@@  RefreshEndBundary:",endBoundary,"  ------------")
    let item = itemMap[`${endIndex}`];
    if(scorllDirection == Direction.Horizontal)
    {
        let curLeft = parseInt(item.style.left);
        let width = 0;
        width = GetItemSize(endIndex);
        endBoundary = curLeft + width;
    }
    else
    {
        let curTop = parseInt(item.style.top);
        let height = 0;
        height = GetItemSize(endIndex);
        endBoundary = curTop + height;
    }
}

const RefreshBeginBundary = () => {
    if(CalculateItemSizeFunc != undefined)
    {
        startBoundary =  GetItemsRange(0,startIndex - 1) ;
    }
    else
        startBoundary = itemSize * startIndex;
}

const CalculateContentSize = () => {
    if(scorllDirection == Direction.Horizontal)
    {
        containerWidth = endBoundary ;
        contentDiv.style.width =  `${containerWidth}`;
    }
    else
    {
        containerHeight = endBoundary ;
        contentDiv.style.height =  `${containerHeight}`;
    }
    // console.log("----------CalculateContentSize height:",height,"------------")
}

const IsItemUpOfViewport = (index,item) => {
    let itemOffset = 0;
    if(scorllDirection == Direction.Horizontal)
        itemOffset = parseInt(item.style.left);
    else
        itemOffset = parseInt(item.style.top);

    let curSize = 0;
    if(CalculateItemSizeFunc != undefined)
    {
        curSize = CalculateItemSizeFunc(index);
    }
    else
        curSize =  itemSize;
    if((itemOffset + curSize) < curScrollOffset)
    {
        // console.log("----------IsItemUpOfViewport true------------")
        return true;
    }
    else
    {
        // console.log("----------IsItemUpOfViewport false------------")
        return false;
    }
}

const IsItemBottomOfViewport = (item) => {
    let itemOffset = 0;
    if(scorllDirection == Direction.Horizontal)
    {
        itemOffset = parseInt(item.style.left);
        if(itemOffset  > curScrollOffset + viewWidth )
        {
            return true;
        }
        else
        {
           // console.log("----------IsItemBottomOfViewport false------------")
            return false;
        }
    }
    else
    {
        itemOffset = parseInt(item.style.top);
        if(itemOffset  > curScrollOffset + viewHeight )
        {
            return true;
        }
        else
        {
           // console.log("----------IsItemBottomOfViewport false------------")
            return false;
        }
    }
}

const RecycleBegin = () => {
    // if(IsInRange())
    // {
    //     return;
    // }
    let i = startIndex;
    while(i <= endIndex)
    {
        let item = itemMap[`${i}`];
        if(item != undefined )
        {
            if(IsItemUpOfViewport(i,item))
            {
                if(scorllDirection == Direction.Horizontal)
                    item.style.left = `${-(viewWidth)}`;
                else
                    item.style.top = `${-(viewHeight)}`;
                console.log('push item');
                itemPool.push(item);
                startIndex++;
            }
        }
        else
        {
            break;
        }
        i++;
    }
    RefreshBeginBundary();
    // console.log("----------RecycleBegin startIndex：",startIndex,"------------")
}

const RecycleEnd = () => {
   
    // if(IsInRange())
    // {
    //     return;
    // }

    let i = endIndex;
    while(i >= startIndex)
    {
        let item = itemMap[`${i}`];
        if(item != undefined )
        {
            if(IsItemBottomOfViewport(item))
            {
                if(scorllDirection == Direction.Horizontal)
                    item.style.left = `${-(viewWidth)}`;
                else
                    item.style.top = `${-(viewHeight)}`;
                itemPool.push(item);
                endIndex--;
            }
        }
        else
        {
            break;
        }
        i--;
    }
    RefreshEndBundary();
}

const IsInRange = () => {
    let isInRange = true;
    const range = GetItemsRange(startIndex,endIndex -1)
    if(scorllDirection == Direction.Horizontal)
    {
        if(range < viewWidth)
        isInRange = false;
    }
    else
    {
        if(range < viewHeight)
        isInRange = false;
    }
    return isInRange;
}

const GetItemsRange = (start, end) => {
    let range = 0;
    for(let begin = start; begin <= end; begin++)
    {
        if(itemMap[`${begin}`] != undefined)
        {

            range = range + GetItemSize(begin);
        }
    }
    return range;
}

const RecycleAll = () => {
    // console.log("-----------------  RecycleAll  ---------------- ")
    for(let i = startIndex; i < endIndex; i++)
    {
        let item = itemMap[`${i}`];
        if(item != undefined )
        {
            if(scorllDirection == Direction.Horizontal)
                item.style.left = `${-(viewWidth)}`;
            else
                item.style.top = `${-(viewHeight)}`;
            // console.log('push item');
            itemPool.push(item);
        }
    }
}
