#include <bits/stdc++.h>
using namespace std;
// All values can be constructed using an array of weights
class Solution{
public:
    Solution (){}
    int function(vector<int> w){
        int W = accumulate(w.begin(), w.end(), 0);
        int n = w.size();
        sort(w.begin(), w.end());// correct order 
        int possible[W][n]; 
        possible[0][0] = true;
        for(int k=1; k<=n ; k++){ // [1,3,3,5]
            for(int x=0; x<=W ; x++){// X values -> 12 
                if( x-w[k] >= 0){ // si ese peso cabe en algun valor 
                    possible[x][k] |= possible[x-w[k]][k-1];
                }
                possible[x][k] |=  possible[x][k-1]; 
            }
        }  
        return 0;
    }
    
    bool function1(int target, vector<int> w){
        bool possible[target+1];
        int W = accumulate(w.begin(), w.end(), 0);
        possible[0] = true;
        for(int k=1; k<= w.size(); k++){
            for(int x = W; x>=0; x--){
                if(possible[x])
                possible[ x+w[k] ] = true;
            }
        }
        return possible[target];
    } 
};

int main(){ 
    vector<int> nums= {1,3,3,5};
    Solution* s = new Solution();

    // cout<< s->function(nums);
    // s->function(nums);
    printf("%s \n",s->function1(12,nums)? "true":"false");
    // printf("%s ", s->function1(10,nums) ? "true":"false");
     

    delete s;
    return 0;
}