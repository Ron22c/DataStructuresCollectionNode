let search_algo = {}

search_algo.linear_search = function(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == num) {
            return i
        }
    }
    return -1
}

search_algo.linear_search_recursion = function(arr, num) {
    if(arr[0] === num) {
        return true
    }
    if(arr.length===0){
        return false
    }
    return search_algo.linear_search_recursion(arr.slice(1), num)
}

search_algo.binary_search = function(arr, num) {
    let left = 0
    let right = arr.length
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if(arr[mid] == num) {
            return mid
        } else if (arr[mid]<num) {
            left = mid+1
        } else {
            right = mid-1
        }
    }
    return -1
}

search_algo.string_search = function(str1, str2) {
    let count = 0
    for(let i=0; i<str1.length; i++) {
        for(let j=0; j<str2.length; j++) {
            if(str1[i+j] != str2[j]){
                break
            }
            if(j == str2.length-1){
                count++
            }
        }
    }
    return count
}

module.exports = search_algo