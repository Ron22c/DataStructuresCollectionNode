class Node {
    constructor(val) {
        this.val=val
        this.next=null
    }
}

class Queue {
    constructor() {
        this.first=null
        this.last=null
        this.length=0
    }

    enqueue(val) {
        let node = new Node(val)
        if(!this.first) {
            this.first=node
            this.last=node
        } else {
            this.last.next=node
            this.last=node
        }
        this.length++
        return this.length
    }

    dequeue() {
        if(!this.first) return undefined
        let node = this.first
        this.first=node.next
        node.next=null
        this.length--
        if(this.length==0){
            this.first=null
            this.last=null
        }
        return node
    }
}

module.exports = Queue