#include <bits/stdc++.h>
using namespace std;
// Find The Missing Number ~
class Solution{
public:
    Solution (){}
    int xorr(int  arr[], int n){
        int x = 0;
        for (int i = 0; i < n; i++) 
            x ^= arr[i];
        
        return x;
    }
};

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    int nums[]={4,1,2,2,1,5,6,5,6};
    int n = sizeof(nums)/sizeof(int);
    Solution* s = new Solution();

    cout<< s->xorr(nums,n);// 4

    delete s;
    return 0;
}