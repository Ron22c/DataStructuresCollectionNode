const Queue=require('./queue')

class Node {
    constructor(val) {
        this.val=val
        this.left=null
        this.right=null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        let node = new Node(val)
        if(!this.root){
            this.root=node
            return this
        }
        let current=this.root
        while(true){
            if(current.val==val) return undefined
            if(current.val<val){
                if(!current.right){
                    current.right=node
                    return this
                }
                current=current.right
            } else {
                if(!current.left){
                    current.left=node
                    return this
                }
                current=current.left
            }
        }
    }

    contains(val) {
        if(!this.root) return false
        if(this.root.val==val) return true
        let current = this.root
        while(true){
            if(current.val==val) return true
            if(current.val < val) {
                if(!current.right) {
                    return false
                } else {
                    current=current.right
                }
            } else {
                if(!current.left) {
                    return false
                } else {
                    current=current.left
                }
            }
        }
    }

    find(val) {
        if(!this.root) return undefined
        let current=this.root,
            found = false
        while(current && !found) {
            if(current.val<val) {
                current=current.right
            } else if(current.val>val) {
                current=current.left
            } else{
                found=true
            }
        }
        if(!found) return undefined
        return current
    }

    BFS() {
        let node = this.root
        let data = []
        let queue = new Queue()
        queue.enqueue(node)
        while(queue.length) {
            node = queue.dequeue()
            console.log(node)
            data.push(node.val)
            if(node.left) queue.enqueue(node.left)
            if(node.right) queue.enqueue(node.right)
        }
        return data
    }

    DFSPreOrder() {
        let data=[]
        let current=this.root
        function traverse(node) {
            data.push(node.val)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    DFSPostOrder() {
        let data = []
        let current=this.root
        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(current)
        return data
    }

    DFSInOrder() {
        let data=[]
        let current=this.root
        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node.val)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }
}


module.exports=BST