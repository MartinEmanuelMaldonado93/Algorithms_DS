#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int longestSub(vector<int> nums){
        int length[nums.size()];
  
        for (int k = 0; k < nums.size(); k++) {
            length[k] = 1;

            for (int i = 0; i < k; i++) {
                if (nums[i] < nums[k]) { // si es menor lo tomo en cuenta
                    length[k] = max( length[k], length[i]+1 );
                }
            }
        }
        int best = INT_MIN;
        for(auto c: length)
            best = max(c, best );
        
        return best;
    }
};

int main(){  
    vector<int> nums= {6,2,5,1,7,4,8,3};
    Solution* s = new Solution();

    cout<< s->longestSub(nums);// 

    delete s;
    return 0;
}