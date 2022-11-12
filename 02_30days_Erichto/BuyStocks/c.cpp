#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int buyStocks(vector<int>prices){       //    {7,1,5,3,6,4};
        int ConStock = -11111, SinStock = 0;

        for (int x : prices){  
          
            ConStock = max( ConStock, SinStock - x); 
            SinStock = max( SinStock, ConStock + x);
            // printf("x:%d  ConStock:%d SinStock:%d \n",x,ConStock,SinStock);
        }
        return SinStock;
    }
};

int main(){ 
    vector<int>nums = {7,1,5,3,6,4};
    Solution* s = new Solution();

    cout<< s->buyStocks(nums);

    delete s;
    return 0;
}