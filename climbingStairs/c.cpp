#include <bits/stdc++.h>
using namespace std;

// Its like a fibonacci problem but in reverse order
class Solution{
public:
    Solution (){}
    int climb(int n){
        int one = 1, two = 1; 
        
        for(int i=0; i<n-1 ;i++){
           int temp = one;
          // printf("temp :%d  one:%d two:%d \n",temp,one,two);
           one = one + two;
           two = temp; 
        }
        return one;
    }
};

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    int nums[]={};
    int n = sizeof(nums)/sizeof(int);
    Solution* s = new Solution();

    cout<< s->climb(5)<<"\n";// 8
    cout<< s->climb(40);// 165580141

    delete s;
    return 0;
}