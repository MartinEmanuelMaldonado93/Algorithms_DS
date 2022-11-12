#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int function(vector<int> height){
        if( height.size() == 0 ) return 0;
        // Boundries
        int l = 0, r = height.size()-1;
        // Max boundries
        int maxL = height[l];
        int maxR = height[r];
        int res = 0;

        while ( l < r ){    
            if ( maxL < maxR){
                l += 1;
                maxL = max(maxL, height[l]);
                res += (maxL - height[l]);
            }
            else {
                r -= 1;
                maxR = max(maxR, height[r]);
                res += (maxR - height[r]);
            } 
        } 
        return res;
    }
};

int main(){ 
    vector<int> height= {0,1,0,2,1,0,1,3,2,1,2,1};
    Solution* s = new Solution();

    cout<< s->function(height);// 6

    delete s;
    return 0;
}