class BinaryMaxHeap {
    constructor() {
        this.values=[]
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length-1
        let element = this.values[idx]
        while(idx>0) {
            let parent_idx = Math.floor((idx-1)/2)
            let parent = this.values[parent_idx]
            if(parent >=element) break
            this.values[parent_idx] = element
            this.values[idx] = parent
            idx= parent_idx
        }
    }

    getMaxVal() {
        let max = this.values[0]
        let end = this.values.pop()
        if(this.values.length>0) {
            this.values[0]=end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0
        let length = this.values.length
        let element=this.values[0]
        while(true) {
            let leftChildIndex = 2*idx+1
            let rightChildIndex = 2*idx+2
            let leftChild, rightChild
            let swap = null

            if(leftChildIndex<length) {
                leftChild=this.values[leftChildIndex]
                if(leftChild>element) {
                    swap=leftChildIndex
                }
            }

            if(rightChildIndex<length) {
                rightChild=this.values[rightChildIndex]
                if(
                    (swap===null) && (rightChild>element)||
                    (swap!==null) && (rightChild>leftChild)
                ) {
                    swap = rightChildIndex
                }
            }

            if(swap===null) break
            this.values[idx]= this.values[swap]
            this.values[swap]=element
            idx=swap
        }
    }
}

module.exports=BinaryMaxHeap