def look_for_key(main_box):
    pile = main_box.make_a_pile_to_look_through()
    while len(pile) > 0:
        box = pile.grab_a_box()
    for item in box:
        if item.is_a_box():
            pile.append(item)
        elif item.is_a_key():
            print( "found the key!" )

def look_for_key(box):
    for item in box:
        if item.is_a_box():
            look_for_key(item) #Recursion!
        elif item.is_a_key():
            print( "found the key!" )

def countdown(i):
    if i == 0: return 
    print( i )
    countdown(i-1)

# countdown( 5 ) 
def sum( arr ):
    if len(arr) == 1: return arr[0]
    return arr.pop() + sum( arr )

"""print( sum([1,2,3,4,5]) ) # 15
print( sum([]) ) # 15 """
def count( arr ):
    if len(arr) == 1: return 1
    if len(arr) == 0: return 0
    return 1 + count( arr[ 0: len(arr) -1 ] )

# print( count([1,2,3,4,5,6,8,78,90]) ) # 9

# def binarySearch( arr ):
def maxn( arr, i ):
    if len(arr) == 1: return arr[0]  
    return max( arr[i] , maxn(arr[ i+1: len(arr) ], i))

# print( maxn([1,2,4,5,97,6,78], 0) ) #97

def binarySearch( target, arr, s, e ):
    mid = int( (e+s) /2 )
    if mid == 0 : return -1
    start, end = 0, e  
    if arr[mid] == target: return mid
    if arr[mid] < target : start = mid 
    if arr[mid] > target : end = mid 
    return binarySearch(target, arr,start,end)

def binarySearch2( target, arr, start, end):
    if start > end: return -1
    mid = int( (start+end) /2)
    if(arr[mid]== target): return mid
    if(arr[mid] > target): 
        return binarySearch2(target,arr,start,mid-1)
    if(arr[mid] < target):
        return binarySearch2(target,arr,mid+1, end)
         
# print( binarySearch( 11, [1,4,5,6,7,8,9,11,12,18],0, 10 ) ) # 7
# print( binarySearch2( 11, [1,4,5,6,7,8,9,11,12,18],0, 10 ) ) # 7
""" A little bit inefficent """
def quickSort( arr ):
    if len(arr) < 2: return arr
    else:
        pivot = arr[0]
        less = [i for i in arr[1:] if i<= pivot ]
        greater = [i for i in arr[1:]if i>= pivot ] 
    return quickSort(less) + [pivot] + quickSort(greater)

# print( quickSort([10, 5, 2, 3,15,89,6]) ) 

def findSmallest(arr):
    smallest = arr[0]
    smallest_idx = 0
    for i in range(1,len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_idx = i
    return smallest_idx

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr) 
        newArr.append( arr.pop(smallest) )
        
    return newArr
# print(selectionSort(list([3,4,2,5,7])))
def mergeSort( arr, start, end):
    lenArr = len(arr)
    if lenArr < 2: return 
    mid = int(lenArr / 2) 
    leftArr = [i for i in arr[:mid]]
    rigthArr = [i for i in arr[mid:]] 

    mergeSort(leftArr,start, mid)
    mergeSort(rigthArr,mid,end)
    merge(arr, leftArr, rigthArr)

def merge( arr, lefthalf, righthalf):
    leftSize = len(lefthalf) 
    rightSize = len(righthalf)
    i, j, k = 0,0,0
    while i<leftSize and j<rightSize:
        if(lefthalf[i] <= righthalf[j]):
            arr[k] = lefthalf[i]
            i+=1
        else:
            arr[k] = righthalf[j]
            j +=1
        k +=1
    
    while i<leftSize:
        arr[k] = lefthalf[i]
        i +=1
        k +=1
    while j<rightSize:
        arr[k] = righthalf[j]
        j +=1
        k +=1

array = [10, 5, 2, 3,15,89,6]
mergeSort(array, 0, len(array)) 
print(array)

