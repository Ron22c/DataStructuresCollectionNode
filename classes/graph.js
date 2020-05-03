const PriorityQueue = require('./priorityQueue')

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex]=[]
            return true
        } else{
            return false
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if(this.adjacencyList[vertex1]&&this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push({node:vertex2, weight:weight})
            this.adjacencyList[vertex2].push({node:vertex1, weight:weight})
        } else{
            return false
        }
    }

    removeEdges(vertex1, vertex2) {
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
            this.adjacentList[vertex1]=this.adjacentList[vertex1].filter(
                v => v!== vertex2
            )

            this.adjacentList[vertex2]=this.adjacentList[vertex2].filter(
                v => v!== vertex1
            )
        } else {
            return undefined
        }
    }

    removeVertex(vertex) {
        if(this.adjacentList[vertex]) {
            let associatedNodes=this.adjacentList[vertex]
            while(associatedNodes.length) {
                let node = associatedNodes.pop()
                this.removeEdges(vertex, node)
            }
            delete this.adjacentList[vertex]
            return true
        } else {
            return undefined
        }
    }

    DFSR(start) {
        let result = []
        let marker = []
        let adjacencyList= this.adjacentList

        function dfs(node) {
            if(!node) return null
            marker[node]=true
            result.push(node)
            adjacencyList[node].forEach(element=> {
                if(!marker[element]) {
                    dfs(element)
                }
            })
        }
        dfs(start)
        return result
    }

    DFSI(start) {
        let stack = []
        let result= []
        let marker= {}
        let element
        stack.push(start)
        while(stack.length) {
            element = stack.pop()
            if(!marker[element]) {
                result.push(element)
                marker[element]=true
                this.adjacentList[element].forEach(ele=>{
                    stack.push(ele)
                })
            }
        }
        return result
    }

    BFS(start) {
        let result=[]
        let marker = {}
        let queue = []
        let element
        marker[start]=true
        queue.push(start)
        while(queue.length) {
            console.log(queue)
            element = queue.shift()
            result.push(element)
            this.adjacentList[element].forEach(e=>{
                if(!marker[e]) {
                    marker[e]=true
                    queue.push(e)
                }
            })
        }
        return result
    }

    sortestPath(start, end) {
        let queue=new PriorityQueue()
        let result=[]
        let distance={}
        let previous={}
        let element

        for(let keys in this.adjacencyList) {
            if(keys==start) {
                distance[keys] = 0
                queue.enqueue(keys, 0)
            } else {
                distance[keys]=Infinity
                queue.enqueue(keys,Infinity)
            }
            previous[keys]=null
        }

        while(queue.values.length) {
            element = queue.dequeue().val
            if(element==end) {
                while(previous[element]) {
                    result.push(element)
                    element=previous[element]
                }
                break
            }
            if(element || distance[element]!=Infinity) {
                for(let nodes of this.adjacencyList[element]) {
                    let updatedDistance = distance[element] + nodes.weight
                    let nextElement = nodes.node
                    if(updatedDistance<distance[nextElement]) {
                        distance[nextElement] = updatedDistance
                        queue.enqueue(nextElement, updatedDistance)
                        previous[nextElement]=element
                    }
                }
            }
        }
        return result.concat(element).reverse()
    }  
}

module.exports=Graph