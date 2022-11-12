#include <bits/stdc++.h>
using namespace std; 
/*
Runtime: 59 ms, faster than 97.32% of C++ online submissions for 3Sum.
Memory Usage: 19.9 MB, less than 86.91% of C++ online submissions for 3Sum.
*/
class Solution{
public:
    Solution (){}
    vector<vector<int>> function( vector<int> nums ){
        sort( nums.begin(),nums.end() );
        int len = nums.size();
        int i=0, j , k ;
        vector<vector<int>> res;
        for(int i=0; i<nums.size(); i++){
            int first = nums[i]; 
            if( i>0 && first == nums[i-1] ) continue;
            j = i+1;
            k = nums.size()-1;
            while(j < k){ 
                int sum = first + nums[j] + nums[k];
                if( sum > 0 ) k--; // achico 
                else if( sum < 0 ) j++; // agrando
                else{
                    res.push_back({ first,nums[j],nums[k] });
                    j++;
                    while (nums[j]==nums[j-1] && j<k){
                        j++;
                    } 
                } 
            }
        } 
        cout<<"count: "<< res.size() << " \n";
        return res;
    } 
};

int main(){ 
    vector<int> nums= {-1,0,1,2,-1,-4};
    Solution* s = new Solution();

    vector<vector<int>> ans =  s->function(nums);

    for(auto V : ans){
        for(int v : V)
            cout<< v  <<" ";
        puts("\n");
    }

    delete s;
    return 0;
}