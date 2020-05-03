class Node {
    constructor(val) {
        this.val=val
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head=null
        this.tail=null
        this.length=0
    }

    push(val) {
        let node = new Node(val)
        if(!this.head) {
            this.head=node
            this.tail=node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail=node
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) return null
        let node = this.tail
        if(this.length===1) {
            this.head=null
            this.tail=null
        } else {
            this.tail = node.prev
            this.tail.next = null
            node.prev = null
        }
        this.length--
        return node
    }

    shift() {
        if(!this.head) return null
        let node = this.head
        if(this.length===1) {
            this.head=null
            this.tail=null
        } else {
            this.head = node.next
            this.head.prev = null
            node.next=null
        }
        this.length--
        return node
    }

    unshift(val) {
        let node = new Node(val)
        if(!this.head) {
            this.head=node
            this.tail=node
        } else {
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.length++
        return this
    }

    get(index) {
        if(index<0 || index>=this.length) return false
        let count
        let current
        if(index<=Math.floor(this.length/2)){
            count=0
            current=this.head
            while(count<index) {
                current=current.next
                count++
            }
        } else {
            count=this.length-1
            current=this.tail
            while(count>index) {
                current=current.prev
                count--
            }
        }
        return current
    }

    set(index, val) {
        if(index<0 || index>=this.length) return false
        this.get(index).val=val
        return true
    }

    insert(index, val) {
        if(index<0||index>this.length) return false
        if(index===0) return !!this.unshift(val)
        if(index===this.length) return !!this.push(val)
        let node = new Node(val)
        let prev = this.get(index-1)
        node.next=prev.next
        node.prev=prev
        prev.next.prev=node
        prev.next=node
        this.length++
        return true
    }

    remove(index) {
        if(index<0||index>=this.length) return false
        if(index===0) return !!this.shift()
        if(index===this.length-1) return !this.pop()
        let prev = this.get(index-1)
        let node = prev.next
        node.next.prev=prev
        prev.next=node.next
        node.next=null
        node.prev=null
        this.length--
        return true
    }
}

module.exports = DoublyLinkedList
