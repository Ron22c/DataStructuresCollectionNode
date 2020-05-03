
let sorting_algo = {}

sorting_algo.swap = function(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

sorting_algo.bubble_sort = function(arr) {
    let noSwap
    for(let i=arr.length-1; i>=0; i--) {
        noSwap = true
        for(let j=0; j<=i-1; j++) {
            if(arr[j]>arr[j+1]){
                sorting_algo.swap(arr,j,j+1)
                noSwap=false
            }
        }
        if(noSwap) {
            break
        }
    }
    return arr
}

sorting_algo.selectrion_sort = function(arr) {
    let min
    for(let i=0;i<arr.length;i++) {
        min = i
        for(let j=i+1; j<arr.length;j++) {
            if(arr[min]>arr[j]) {
                min = j
            }
        }
        sorting_algo.swap(arr, min, i)
    }
    return arr
}

sorting_algo.insertion_sort = function(arr) {
    let value
    for(let i=0; i<arr.length;i++) {
        value = arr[i]
        for(var j=i-1; j>0 && value<arr[j]; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = value
    }
    return arr
}

sorting_algo.merge_function = function(arr1, arr2) {
    let out = []
    let i=0
    let j=0
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i]< arr2[j]) {
            out.push(arr1[i])
            i++
        } else {
            out.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length) {
        out.push(arr1[i])
        i++
    }
    while(j<arr2.length) {
        out.push(arr2[j])
        j++
    }
    return out
}

sorting_algo.merge_sort = function(arr) {
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return sorting_algo.merge_function(sorting_algo.merge_sort(left),sorting_algo.merge_sort(right))
}

sorting_algo.pivot_helper = function(arr, start, end) {
    let pivot = arr[start]
    let index = start
    for(let i=start+1; i<=end; i++) {
        if(pivot>arr[i]){
            index++
            sorting_algo.swap(arr, index, i)
        }
    }
    sorting_algo.swap(arr, index, start)
    return index
}

sorting_algo.quick_sort = function(arr, start=0, end=arr.length-1) {
    if(end>start) {
        let pivot = sorting_algo.pivot_helper(arr, start, end)
        sorting_algo.quick_sort(arr, start, pivot-1)
        sorting_algo.quick_sort(arr, pivot+1, end)
    }
    return arr
}

sorting_algo.getDigit = function(number, pos) {
    return Math.floor(Math.abs(number)/Math.pow(10,pos))%10
}

sorting_algo.getSize = function(num) {
    return Math.floor(Math.log10(Math.abs(num)))+1
}

sorting_algo.getMaxNumber = function(nums) {
    let max=0
    for(let i=0; i<nums.length; i++) {
        max = Math.max(max, sorting_algo.getSize(nums[i]))
    }
    return max
}

sorting_algo.radix_sort = function(arr) {
    let maxVal = sorting_algo.getMaxNumber(arr)
    for(let i=0; i<maxVal;i++) {
        let bucket = Array.from({length:10}, ()=> [])
        for(let j=0; j<arr.length;j++) {
            bucket[sorting_algo.getDigit(arr[j],i)].push(arr[j])
        }
        arr = [].concat(...bucket)
    }
    return arr
}

module.exports = sorting_algo