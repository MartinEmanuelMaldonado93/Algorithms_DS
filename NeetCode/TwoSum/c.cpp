#include <bits/stdc++.h>
using namespace std;
//Runtime: 4ms, faster than 99.28% of C++ online submissions for Two Sum.
//Memory Usage: 11 MB,less than 28.96% of C++ online submissions for Two Sum.

class Solution{
public:
    Solution (){}
    private:
    vector<int> _twoSum(vector<int> nums, int target) {
    unordered_map<int,int> myMap;
    vector<int> result; 

    for(int i=0; i<nums.size(); i++){
        int n = nums[i]; 
        int diff = target - n;
        if( myMap.find(diff) != myMap.end() ){// si lo encuentra 
            result.push_back(myMap[diff]);
            result.push_back(i);
            break; 
        }
        else
            myMap[n] = i; 
        }
        return result;
    }
    public:
    void twoSum(int target, vector<int> nums){
        auto vec = this->_twoSum(nums, target); 
        for(auto n : vec)
            cout<< n<<" ";
    }
}; 
int main(){   
    Solution* s = new Solution();

    s->twoSum(6 , { 3,2,4 } );//  1 2
    s->twoSum(9 , { 2,7,11,15 } );// 0 1

    delete s;
    return 0;
}