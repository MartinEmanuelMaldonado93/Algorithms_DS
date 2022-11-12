#include <bits/stdc++.h>
using namespace std;
/*
Runtime: 7 ms, faster than 98.55% of C++ online submissions for Two Sum II - 
Input Array Is Sorted.
Memory Usage: 15.6 MB, less than 43.79% of C++ online submissions for Two Sum II -
Input Array Is Sorted.
*/ 
class Solution{
public:
    Solution (){}
    vector<int> function(int target, vector<int> nums ){
        int a = 0;
        int b = nums.size()-1;  
        while( a<b ){
            if( nums[a] + nums[b] > target ){ 
                b--; 
            }
            if( nums[a] + nums[b] < target ){
                a++;
            }
            if(nums[a] + nums[b] == target){
                return {a+1, b+1 }; 
            }
        }
        return {};
    } 

};

int main(){ 
    vector<int> nums= {2,7,11,15};
    Solution* s = new Solution();

    vector<int> ans =  s->function(9, nums); 
    for(int n : ans) cout<< n<<" ";
    delete s;
    return 0;
}