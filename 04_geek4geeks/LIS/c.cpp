#include <bits/stdc++.h> 
using namespace std;
/*
int _lis(int arr[], int n, int* max_ref){
     
    if (n == 1)
        return 1;
    int res, max_ending_here = 1;

    for (int i = 1; i < n; i++) {
        
        res = _lis(arr, i, max_ref);
        if (arr[i - 1] < arr[n - 1]
            && res + 1 > max_ending_here)
            max_ending_here = res + 1;
    }

    if (*max_ref < max_ending_here)
        *max_ref = max_ending_here;
 
    return max_ending_here;
}*/
/*
int lis(int arr[], int n)
{
    int max = 1;
    _lis(arr, n, &max);
    return max;
}
 
int main()
{
    int arr[] = { 10, 22, 9, 33, 21, 50, 41, 60 };
    int n = sizeof(arr) / sizeof(arr[0]);
    cout <<"Length of lis is "<< lis(arr, n);
    return 0;
}*/
class S{   
    public:
    S(){} 
    // Longes Increasing Subsequence -not contiguous-
    // Similar to coins change problem 
    int lis(int* arr,int len){
        int temp[len];
        for(int k=0; k<len; k++){
            temp[k]=1;
            for(int i=0; i  <k; i++)
                if( arr[i] < arr[k] )
                   temp[k] = max( temp[k] , temp[i]+1 ); 
        }
        return temp[len-1];
    } 
}; 

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    S* s= new S();
    int myArray[]={ 10, 22, 9, 33, 21, 50, 41, 60 };
    int len = sizeof(myArray)/sizeof(int);

    printf(" %d ",s->lis(myArray,len));

    delete s;
    return 0;
} 