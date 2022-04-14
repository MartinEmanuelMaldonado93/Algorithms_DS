#include <bits/stdc++.h> 
using namespace std;
typedef unsigned int uint;
class Solution{   
    public:
    Solution(){} 
    ~Solution(){}
    // Longes Increasing Subsequence  CONTIGUOUS
    int lisc(int* arr,int len){
        uint start = 0; 
        uint distance = 0;
        
        for(int top=0;top<len;top++){
            if(top>0 && arr[top-1]>=arr[top]) 
                start=top; 
            distance = max(distance , top - start + 1);
        }
        return distance;
    } 
}; 
// Time Complexity O(n)
// Space Complexity O(1);
int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    Solution* s= new Solution();
    int myArray[]={3, 10, 3, 11, 4, 5, 6, 7, 8, 12};
    int len = sizeof(myArray)/sizeof(int);

    printf(" %d ",s->lisc(myArray,len));

    delete s;
    return 0;
} 