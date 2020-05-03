Libraries:

  Sort -> 
    [This functions will sort in assending order]

    swap
    bubble_sort
    selectrion_sort
    insertion_sort
    merge_function
    merge_sort
    pivot_helper
    quick_sort
    getDigit
    getSize
    getMaxNumber
    radix_sort

  Search ->
    [Binary search will take a sorted array as input]
    [String search whill take the long string as first arg and short one as second]

    linear_search
    linear_search_recursion
    binary_search
    string_search

  collection Classes -> 

  SinglyLinkedList
  DoublyLinkedList
  Stack
  Queue
  BinaryMaxHeap
  PriorityQueue
  BinarySearchTree
  Graph
  HashTable


  Examples: 

  const lib = require('collectiondatalib')
  lib.Search.binary_search([1,2,3,4,5], 5)
  > 4

  lib.Sort.bubble_sort([3,5,1,4,2])
  > [ 1, 2, 3, 4, 5 ]

  lib.Sort.merge_sort([3,5,1,4,2])
  > [ 1, 2, 3, 4, 5 ]

  let list = new lib.SinglyLinkedList()

  list.push(12)
  list.push(13)
  list.push(14)
  console.log(list)

  > SinglyLinkedList {
      head: Node { val: 12, next: Node { val: 13, next: [Node] } },
      tail: Node { val: 14, next: null },
      length: 3
    }
