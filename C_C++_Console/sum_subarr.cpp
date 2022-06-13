#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int maxSubArr(vector<int> nums){
        int maxSub = INT_MIN;
        int a = 0;
        //                      -2,1,-3,4,-1,2,1,-5,4 but 4,-1,2,1 
        for(int n : nums){
            a += n;  
            maxSub = max(maxSub, a); 
            // printf("max: %d \n",maxSub);
            a = max(a, 0);  
        }
        return maxSub;
    }
};

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    vector<int> nums={-2,1,-3,4,-1,2,1,-5,4}; // maxSub 6; 
    int n = sizeof(nums)/sizeof(int);
    Solution* s = new Solution();

    cout<< s->maxSubArr(nums); 

    delete s;
    return 0;
}