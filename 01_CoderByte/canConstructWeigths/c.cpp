#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}

    bool canConstructWeigths(vector<int> nums,int target){ 
        if(target == 0)  return true;
        if(target <  0)  return false;
         
        for(int n : nums){
            int reminder = target - n;
            if(canConstructWeigths(nums, reminder) == true){
                return true;
            }
        }
        return false;
    }
};

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0); 
    
    vector<int> nums= {2,3,4};
    Solution* s = new Solution();
    
    printf(" ~ %s ~\n",(s->canConstructWeigths(nums, 5)==1) ?"true":"false");
    printf(" ~ %s ~\n",(s->canConstructWeigths({8,2,3,5}, 12)==1) ?"true":"false");

    delete s;
    return 0;
}