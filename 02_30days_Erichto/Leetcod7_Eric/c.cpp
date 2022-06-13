#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int countingElements(vector<int> nums){
        unordered_set<int> s;
        for(int x : nums)
            s.insert(x);

        int count = 0;
        for(int x : nums) 
            if(s.count(x+1) == 1)
                count++; 

        return count;
    }
    int countingElementsFor(vector<int> nums){
        sort( nums.begin(),nums.end() ); // sort is more faster than set ;)
        int count = 0;
        for(int i=0; i<nums.size()-1; i++)
            if( nums[i]+1 == nums[i+1] )
                count++;
        return count;
    }
     
};

int main(){ 
   // vector<int> nums= {1,3,2,3,5,0};// 3 
    vector<int> nums= {1,1,3,3,5,5,7,7};// 0
    Solution* s = new Solution();
    cout<< s->countingElementsFor(nums);// efficient
    //cout<< s->countingElements(nums);

    delete s;
    return 0;
}