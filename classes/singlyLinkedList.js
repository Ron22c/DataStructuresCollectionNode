class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if(!this.head) {
            this.head=node
            this.tail=node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail=current
            current=current.next
        }
        this.tail=newTail
        this.tail.next=null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return current
    }

    shift() {
        if(!this.head) return undefined
        let node = this.head
        this.head = node.next
        node.next = null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return node
    }

    unshift(val) {
        let node = new Node(val)
        if(!this.head){
            this.head=node
            this.tail=node
        } else {
            node.next=this.head
            this.head=node
        }
        this.length++
        return this
    }

    get(index) {
        if(index<0 || index>=this.length) return undefined
        let count=0
        let current = this.head
        if(count<index) {
            current = current.next
            count++
        }
        return current
    }

    set(index, val) {
        if(index<0||index>=this.length) return false
        this.get(index).val=val
        return true
    }

    insert(index, val) {
        if(index<0||index>this.length) return false
        if(index===0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)
        let node = new Node(val)
        let prev = this.get(index-1)
        node.next = prev.next
        prev.next = node
        this.length++
    }

    remove(index) {
        if(index<0||index>=this.length) return false
        if(index===0) return !!this.shift()
        if(index===this.length-1) return !!this.pop()
        let node = this.get(index-1)
        let rem = node.next
        node.next=rem.next
        rem.next=null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return true
    }

    reverse() {
        let node =this.head
        this.head=this.tail
        this.tail=node
        let next=null
        let prev=null
        for(let i=0;i<this.length;i++) {
            next = node.next
            node.next=prev
            prev=node
            node=next
        }
        return this
    }
}

module.exports=SinglyLinkedList