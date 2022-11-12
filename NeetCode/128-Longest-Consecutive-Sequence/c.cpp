#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int function(vector<int> nums){
        unordered_set<int> set;
        int count, longest = INT_MIN;
        for(int n : nums) set.insert( n );
        int* pointer = NULL;
        for(int numSet : set){ 
            if( set.find(numSet-1) == set.end() ){
                count = 0;
                while( set.find( numSet+count )!= set.end() ){
                    count++;
                }
                longest = max( longest, count );
            }
        }
        return longest;
    }
};

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    vector<int> nums= {2,3,100,4,200,1};
    Solution* s = new Solution();

    cout<< s->function(nums);

    delete s;
    return 0;
}