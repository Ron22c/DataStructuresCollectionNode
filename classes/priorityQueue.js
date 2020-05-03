class Node {
    constructor(val, prio) {
        this.prio=prio
        this.val=val
    }
}

class PriorityQueue {
    constructor() {
        this.values=[]
    }

    enqueue(val, prio) {
        let node = new Node(val, prio)
        this.values.push(node)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length-1
        let curNode = this.values[idx]
        while(idx>0) {
            let parent_idx= Math.floor((idx-1)/2)
            let parent = this.values[parent_idx]
            if(parent.prio<=curNode.prio) break
            this.values[parent_idx] = curNode
            this.values[idx]=parent
            idx=parent_idx
        }
    }

    dequeue() {
        let min = this.values[0]
        let end = this.values.pop()
        if(this.values.length>0) {
            this.values[0]=end
            this.sinkUp()
        }
        return min
    }

    sinkUp() {
        let idx=0
        let length=this.values.length
        let element=this.values[0]
        while(true) {
            let leftChildIdx = (2*idx)+1
            let rightChildIdx = (2*idx)+2
            let leftChild, rightChild
            let swap=null

            if(leftChildIdx<length) {
                leftChild=this.values[leftChildIdx].prio
                if(leftChild<element.prio) {
                    swap=leftChildIdx
                }
            }

            if(rightChildIdx<length) {
                rightChild=this.values[rightChildIdx].prio
                if(
                    (swap==null && rightChild<element.prio)||
                    (swap!=null && rightChild<leftChild)
                ) {
                    swap=rightChildIdx
                }
            }

            if(swap==null) {
                break
            }
            this.values[idx]=this.values[swap]
            this.values[swap]=element
            idx=swap
        }
    }
}

module.exports=PriorityQueue