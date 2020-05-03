class Node {
    constructor(val) {
        this.val=val
        this.next=null
    }
}

class Stack {
    constructor() {
        this.first=null
        this.last=null
        this.length=0
    }

    push(val) {
        let node = new Node(val)
        if(!this.first) {
            this.first=node
            this.last=node
        } else {
            node.next=this.first
            this.first=node
        }
        this.length++
        return this
    }

    pop() {
        if(!this.first) return undefined
        let node = this.first
        this.first=node.next
        node.next=null
        this.length--
        if(this.length==0) {
            this.first=null
            this.last=null
        }
        return node
    }
}

module.exports=Stack