#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}

    bool arr(vector<int> nums){
        std::unordered_set <int> mySet ; 
        
        for(int i=0; i<nums.size(); i++)
            if(mySet.find(nums[i]) == mySet.end())
                mySet.insert(nums[i]);
            else
                return true;

        return false;
    }
};

// Runtime: 126 ms, faster than 49.04% 
// of C++ online submissions for Contains Duplicate.
// Memory Usage: 51.5 MB, less than 49.63% 
// of C++ online submissions for Contains Duplicate.
 