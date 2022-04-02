#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
     vector<int> howSum(int target, vector<int> nums, vector<int> answer){
        // base case are:
        if( target == 0) return 0;
        if( target < 0)  return -1;
        
        // do something with howSum return 
        for(int i=0; i<nums.size(); i++){

        }

        return {};
    }
};

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    int nums[]={2,3};
    int n = sizeof(nums)/sizeof(int);
    Solution* s = new Solution();

    cout<< s->howSum(7,nums);

    delete s;
    return 0;
}