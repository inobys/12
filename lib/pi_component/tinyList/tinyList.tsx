export const Direction = {
    Horizontal: 0,
    Vertical: 1,
}

Object.freeze(Direction);

export class TinyList
{
    private startIndex = 0;
    private endIndex = -1;
    private startBoundary = 0;
    private endBoundary = 0;
    private containerWidth = 0;
    private viewHeight = 0;
    private viewWidth = 0;
    private containerHeight = 0;
    private scorllDirection = Direction.Vertical;
    
    private itemSize = 0;
    private defaultItemSize = 200;
    
    private viewDiv;
    private contentDiv;
    
    private itemCount = 0;
    private itemPool: any[] = [];
    private itemMap = {};
    private itemSizeList: any[] = [];
    private MOVE_DELTA = 5;
    private curScrollOffset = 0;
    private fillItemFunc;
    private onStartFunc;
    private onEndFunc;
    private CalculateItemSizeFunc;
    
    private cacheNumber = 0;//多缓存几个数量
    
    //root：该瀑布流组件根节点
    //count：当前列表的数量
    //viewSize:瀑布流组件viewSize，高或宽超出部分不显示
    //direction:方向，暂时仅支持垂直
    //calculatedSize:单元格固定尺寸，可设置为一个计算单元格高度的函数。
    //cacheNum:滑动过快的话，可稍微增加几个缓存，设置缓存数量。
    //fillFunc:填充具体对应的Item函数委托
    public CreateList = (root, count, viewSize, direction, calculatedSize, cacheNum, fillFunc)=>
    {
        if(root != undefined)
        {
            this.itemCount = count;
            this.scorllDirection = direction;
            this.cacheNumber = cacheNum;
            if (typeof calculatedSize == 'function')
            {
                // console.log('---------------    this.itemSize is Funtion -------------------')
                this.CalculateItemSizeFunc = calculatedSize;
            }
            else
            {
                // console.log('---------------    this.itemSize is size Num -------------------')
                this.itemSize = calculatedSize;
            }
            this.viewDiv = document.createElement("div");
            this.viewDiv.style.position = "relative";
            this.viewDiv.style.overflow = "scroll";
            this.viewDiv.style.willChange = "transform";
            this.viewDiv.style.left = "0px";
            this.viewDiv.style.top = "0px";
         
            this.viewDiv.addEventListener('scroll', this.onScroll);
            root.appendChild(this.viewDiv);
            //创建一个contener
            this.contentDiv = document.createElement("div");
           
            if(this.scorllDirection == Direction.Horizontal)
            {
                this.viewWidth = viewSize ;
                this.viewDiv.style.flexDirection = "row";
                // this.viewDiv.style.height = `100%`;
                this.viewDiv.style.height = `400px`;
                this.viewDiv.style.width = `${viewSize}px`;
                this.viewWidth = viewSize ;
                this.contentDiv.style.height = "100%";
            }
            else
            {
                this.viewDiv.style.flexDirection = "column";
                this.viewDiv.style.height =  `${viewSize}px`;
                this.viewDiv.style.width = `100%`;
                this.viewHeight = viewSize ;
                this.contentDiv.style.width = "100%";
            }
            this.viewDiv.appendChild(this.contentDiv);
            this.InitItemsSize(0, this.itemCount);
            this.fillItemFunc = fillFunc;
            this.itemMap = {};
            this.fill();
        }
        else
            console.log("----------  未能找到瀑布流组件根节点！！！！  ------------")
        return this.viewDiv;
    }
    
    private InitItemsSize = (begin,end)=>
    {
        for(let i = begin; i < end; i++)
        {
            this.itemSizeList[i] = -1;
        }
    }
    
    private GetItemSize = (index)=>
    {
        let curSize = 0;
        if(this.CalculateItemSizeFunc != undefined)
        {
            if(this.itemSizeList[index] != undefined && this.itemSizeList[index] != -1)
            {
                curSize = this.itemSizeList[index];
            }
            else
            {
                curSize = this.CalculateItemSizeFunc(index);
                this.itemSizeList[index] = curSize;
            }
        }
        else
            curSize = this.itemSize;
        return curSize;
    }
    
    public SetOnStartFunc = (onStart)=>
    {
        this.onStartFunc = onStart;
    }
    
    public SetOnEndFunc = (onEnd)=>
    {
        this.onEndFunc = onEnd;
    }
    
    private onScroll = ( event ) =>
    {
        // const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
        const {scrollLeft, scrollTop } = event.currentTarget;
        // console.log('================== scrollLeft:  ', scrollLeft);
        // console.log('================== scrollTop  ', scrollTop);
        if(this.scorllDirection == Direction.Horizontal)
        {
            if(scrollLeft == 0 )
            {
                if(this.onStartFunc != undefined)
                {
                    this.onStartFunc();
                    this.Leftward();
                    return
                }
            }
            else if(scrollLeft > 0  &&  (scrollLeft + this.viewWidth) >= this.endBoundary  )
            {
                if(this.onEndFunc != undefined)
                {
                    // console.log("----------this.onEndFunc  this.viewDiv scrollLeft:", scrollLeft,  "------------");
                    // console.log("----------this.onEndFunc   this.endBoundary:", this.endBoundary,  "------------");
                    
                    // console.log("---------- this.onEndFunc this.viewDiv top:", this.viewDiv.scrollTop,  "------------");
                    this.onEndFunc();
                    // Rightward();
                    return;
                }
            }
            const distance = scrollLeft - this.curScrollOffset;
            this.curScrollOffset = scrollLeft;
            if(distance >= this.MOVE_DELTA)
            {
                this.Leftward();
            }
            else if(distance < -this.MOVE_DELTA)
            {
                this.Rightward();
            }
        }
        else
        {
            if(scrollTop == 0 )
            {
                if(this.onStartFunc != undefined)
                {
                    this.onStartFunc();
                    this.Forward();
                    return
                }
            }
            else if(scrollTop > 0 &&  (scrollTop + this.viewHeight) >= this.endBoundary)
            {
                if(this.onEndFunc != undefined)
                {
                    this.onEndFunc();
                    return;
                }
            }
            const distance = scrollTop - this.curScrollOffset;
            this.curScrollOffset = scrollTop;
            if(distance >= this.MOVE_DELTA)
            {
                this.Forward();
            }
            else if(distance < -this.MOVE_DELTA)
            {
                this.BackWard();
            }
        }
    }
    
    public AppendList = (count)=>
    {
        const curIndex = this.itemCount;
        this.itemCount = this.itemCount + count;
        this.InitItemsSize( curIndex, this.itemCount);
        if(this.scorllDirection == Direction.Horizontal)
            this.Leftward();
        else
            this.Forward();
    }
    
    private resetContentPosision=()=>
    {
       // this.viewDiv.scrollTop = 0;
    }
    
    public Refresh = (count)=>
    {
        this.RecycleAll();
        this.itemCount = count;
        this.itemSizeList = [];
        this.InitItemsSize(0, this.itemCount);
        this.curScrollOffset = 0;
        this.viewDiv.scrollTop = 0;
        this.fill();
    }
    
    private fill = () => {
        // console.log("----------  fillItem  ------------")
        this.startIndex = 0;
        this.endIndex = -1;
        this.startBoundary = 0;
        this.endBoundary = 0;
        this.containerHeight = 0;
        this.containerWidth = 0;
        this.curScrollOffset = 0;
    
        if(this.scorllDirection == Direction.Horizontal)
            this.Leftward();
        else
            this.Forward();
    
        // console.log("----------  this.viewDiv left:", this.viewDiv.scrollLeft,  "------------");
        // console.log("----------  this.viewDiv top:", this.viewDiv.scrollTop,  "------------");
    }
    
    private CreateItem = ( index ) => {
        let item;
        // console.log('CreateItem  pool size:', this.itemPool.length)
        //console.log('----------@@@@@  CreateItem:', index)
        if(this.itemPool.length > 0)
        {
            // console.log("----------  useItemPool  ------------")
            item = this.itemPool.pop();//this.itemPool[0];
            item.style.display = "flex";
            item.id = 'item_'+index;
            this.fillItemFunc(item, index);
        }
        else
        {
            // console.log("----------  this.itemPool is null!!!  ------------")
            if(this.fillItemFunc != undefined)
            {
                item = document.createElement('div');
                item.id = 'item_'+index;
                this.fillItemFunc(item, index);
                this.contentDiv.appendChild(item);
            }
            const curSize = this.GetItemSize(index);
            if(this.scorllDirection == Direction.Horizontal)
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
    
    private Forward = () => {
        // console.log("----------  Forward  ------------")
        // console.log("----------  this.endBoundary:",this.endBoundary, this.curScrollOffset, this.endIndex, "  ------------")
        // console.log("----------  this.itemCount:",this.itemCount, "  ------------")
        // console.log("---------- boundary:",this.curScrollOffset + this.viewHeight + this.cacheNumber*this.defaultItemSize , "  ------------")
        while ((this.endIndex < this.itemCount - 1) && this.endBoundary < (this.curScrollOffset + this.viewHeight + this.cacheNumber*this.defaultItemSize ))//this.itemSize
        {
            this.endIndex++;
            let item = this.CreateItem(this.endIndex);
            this.itemMap[`${this.endIndex}`]=item;
            this.SetItemPosition(item, this.endBoundary);
            this.RefreshEndBundary();
            this.CalculateContentSize();
        }
        this.RecycleBegin();
    }
    
    private BackWard = () => {
        // console.log("----------  BackWard  ------------")
        // console.log("----------  this.startBoundary:",this.startBoundary, this.curScrollOffset, this.startIndex, "  ------------")
        while (this.startIndex > 0 && this.curScrollOffset <= this.startBoundary)
        {
            this.startIndex--;
            let item = this.CreateItem(this.startIndex);
            this.itemMap[`${this.startIndex}`]=item;
            let height = 0;
            height = this.GetItemSize(this.startIndex);
            this.SetItemPosition(item, this.startBoundary - height);
            this.RefreshBeginBundary();
        }
        this.RecycleEnd();
    }
    
    private Leftward = () => {
        // console.log("----------  Leftward  ------------")
        // console.log("----------  this.endBoundary:",this.endBoundary, this.curScrollOffset, this.endIndex, "  ------------")
        while ((this.endIndex < this.itemCount - 1) && this.endBoundary < (this.curScrollOffset + this.viewWidth + this.cacheNumber*this.defaultItemSize ))// 
        {
            this.endIndex++;
            // console.log("----------  this.endIndex:",  this.endIndex,"  ------------")
            let item = this.CreateItem(this.endIndex);
            this.itemMap[`${this.endIndex}`]= item;
            this.SetItemPosition(item, this.endBoundary);
            this.RefreshEndBundary();
            this.CalculateContentSize();
        }
        this.RecycleBegin();
    }
    
    private Rightward = () => {
        // console.log("----------  Rightward  ------------")
        // console.log("----------  this.startBoundary:",this.startBoundary, this.curScrollOffset, this.startIndex, "  ------------")
        while (this.startIndex > 0 && this.curScrollOffset <= this.startBoundary)
        {
            this.startIndex--;
            let item = this.CreateItem(this.startIndex);
            this.itemMap[`${this.startIndex}`]=item;
            let width = 0;
            width = this.GetItemSize(this.startIndex);
            this.SetItemPosition(item, this.startBoundary - width);
            this.RefreshBeginBundary();
        }
        this.RecycleEnd();
    }
    
    private SetItemPosition = (item, itemPos) => {
        // console.log("---------- SetItemPosition itemPos:",itemPos,"  ------------")
        if(this.scorllDirection == Direction.Horizontal)
        {
            // console.log("---------- this.scorllDirection == Direction.Horizontal  ------------")
            item.style.left = `${itemPos}`;
        }
        else
            item.style.top = `${itemPos}`;
    }
    
    private RefreshEndBundary = () => {
        // console.log("----------@@@ this.endIndex :",this.endIndex,"  ------------")
        // console.log("----------@@@  RefreshEndBundary:",this.endBoundary,"  ------------")
        let item = this.itemMap[`${this.endIndex}`];
        if(this.scorllDirection == Direction.Horizontal)
        {
            let curLeft = parseInt(item.style.left);
            let width = 0;
            width = this.GetItemSize(this.endIndex);
            this.endBoundary = curLeft + width;
        }
        else
        {
            let curTop = parseInt(item.style.top);
            let height = 0;
            height = this.GetItemSize(this.endIndex);
            this.endBoundary = curTop + height;
        }
    }
    
    private RefreshBeginBundary = () => {
        if(this.CalculateItemSizeFunc != undefined)
        {
            this.startBoundary =  this.GetItemsRange(0,this.startIndex - 1) ;
        }
        else
            this.startBoundary = this.itemSize * this.startIndex;
    }
    
    private CalculateContentSize = () => {
        if(this.scorllDirection == Direction.Horizontal)
        {
            this.containerWidth = this.endBoundary ;
            this.contentDiv.style.width =  `${this.containerWidth}`;
        }
        else
        {
            this.containerHeight = this.endBoundary ;
            this.contentDiv.style.height =  `${this.containerHeight}`;
        }
        // console.log("----------CalculateContentSize height:",height,"------------")
    }
    
    private IsItemUpOfViewport = (index,item) => {
        let itemOffset = 0;
        if(this.scorllDirection == Direction.Horizontal)
            itemOffset = parseInt(item.style.left);
        else
            itemOffset = parseInt(item.style.top);
    
        let curSize = 0;
        if(this.CalculateItemSizeFunc != undefined)
        {
            curSize = this.CalculateItemSizeFunc(index);
        }
        else
            curSize =  this.itemSize;
        if((itemOffset + curSize) < this.curScrollOffset)
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
    
    private IsItemBottomOfViewport = (item) => {
        let itemOffset = 0;
        if(this.scorllDirection == Direction.Horizontal)
        {
            itemOffset = parseInt(item.style.left);
            if(itemOffset  > this.curScrollOffset + this.viewWidth )
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
            if(itemOffset  > this.curScrollOffset + this.viewHeight )
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
    
    private RecycleBegin = () => {
        // if(IsInRange())
        // {
        //     return;
        // }
        let i = this.startIndex;
        while(i <= this.endIndex)
        {
            let item = this.itemMap[`${i}`];
            if(item != undefined )
            {
                if(this.IsItemUpOfViewport(i,item))
                {
                    if(this.scorllDirection == Direction.Horizontal)
                        item.style.left = `${-(this.viewWidth)}`;
                    else
                        item.style.top = `${-(this.viewHeight)}`;
                    // console.log('push item');
                    item.style.display = "none";
                    this.itemPool.push(item);
                    this.startIndex++;
                }
            }
            else
            {
                break;
            }
            i++;
        }
        this.RefreshBeginBundary();
        // console.log("----------RecycleBegin startIndex：",this.startIndex,"------------")
    }
    
    private RecycleEnd = () => {
       
        // if(IsInRange())
        // {
        //     return;
        // }
    
        let i = this.endIndex;
        while(i >= this.startIndex)
        {
            let item = this.itemMap[`${i}`];
            if(item != undefined )
            {
                if(this.IsItemBottomOfViewport(item))
                {
                    if(this.scorllDirection == Direction.Horizontal)
                        item.style.left = `${-(this.viewWidth)}`;
                    else
                        item.style.top = `${-(this.viewHeight)}`;
                    item.style.display = "none";
                    this.itemPool.push(item);
                    this.endIndex--;
                }
            }
            else
            {
                break;
            }
            i--;
        }
        this.RefreshEndBundary();
    }
    
    private IsInRange = () => {
        let isInRange = true;
        const range = this.GetItemsRange(this.startIndex,this.endIndex -1)
        if(this.scorllDirection == Direction.Horizontal)
        {
            if(range < this.viewWidth)
            isInRange = false;
        }
        else
        {
            if(range < this.viewHeight)
            isInRange = false;
        }
        return isInRange;
    }
    
    private GetItemsRange = (start, end) => {
        let range = 0;
        for(let begin = start; begin <= end; begin++)
        {
            if(this.itemMap[`${begin}`] != undefined)
            {
    
                range = range + this.GetItemSize(begin);
            }
        }
        return range;
    }
    
    private RecycleAll = () => {
        // console.log("-----------------  RecycleAll  ---------------- ")
        for(let i = this.startIndex; i < this.endIndex; i++)
        {
            let item = this.itemMap[`${i}`];
            if(item != undefined )
            {
                if(this.scorllDirection == Direction.Horizontal)
                    item.style.left = `${-(this.viewWidth)}`;
                else
                    item.style.top = `${-(this.viewHeight)}`;
                // console.log('push item');
                item.style.display = "none";
                this.itemPool.push(item);
            }
        }
    }
    
}
