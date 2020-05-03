class HashTable {
    constructor(size=53) {
        this.keySet=new Array(size)
    }

    _hash(key) {
        let total=0
        let constant = 53
        for(let i=0; i<Math.min(100, key.length);i++) {
            let char = key[i]
            let val = char.charCodeAt(0)-96
            total = (total*constant+val) % this.keySet.length
        }
        return total
    }

    set(key, value) {
        let hash = this._hash(key)
        if(this.keySet[hash]) {
            for(let ele of this.keySet[hash]) {
                if(ele[0]==key){
                    ele[1]=value
                    return true
                }
            }
        }
        if(!this.keySet[hash]) {
            this.keySet[hash]=[]
        }
        this.keySet[hash].push([key,value])
        return true
    }

    get(key) {
        let hash=this._hash(key)
        if(this.keySet[hash]) {
            for(let element of this.keySet[hash]) {
                if(element[0]==key) {
                    return element[1]
                }
            }
        } else {
            return undefined
        }
    }

    remove(key) {
        let hash=this._hash(key)
        if(this.keySet[hash]) {
            for(let ele of this.keySet[hash]){
                if(ele[0]=key) {
                    if(this.keySet[hash].indexOf(ele)!=-1){
                        this.keySet[hash].splice(this.keySet[hash].indexOf(ele),1)
                    }
                }
            }
            return true
        } else {
            return undefined
        }
    }

    keys() {
        let keyArr=[]
        for(let element of this.keySet) {
            if(element) {
                for(let ele of element) {
                    if(!keyArr.includes(ele[0])) {
                        keyArr.push(ele[0])
                    }
                }
            }
        }
        return keyArr
    }

    values() {
        let valueArr=[]
        for(let element of this.keySet) {
            if(element) {
                for(let ele of element) {
                    if(!valueArr.includes(ele[1])) {
                        valueArr.push(ele[1])
                    }
                }
            }
        }
        return valueArr
    }
}

module.exports = HashTable