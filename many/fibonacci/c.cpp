#include <bits/stdc++.h>
using namespace std;
int c=0;

class Solution{
public:
    Solution (){}

    unsigned long long fib(int n, map<int,int>* memo ){   

        if((*memo).find(n) != (*memo).end() )  
            return (*memo)[n];

        if(n <= 2 ) return 1;

        (*memo)[n] = fib(n-1,memo) + fib(n-2,memo); 
        return (*memo)[n];
    }


    int fiboLow(int n){   
        if(n <= 2 ) return 1; 

        return fiboLow(n-1) + fiboLow(n-2);
    }
};

int main(){ 
    // int nums[]={};
    // int n = sizeof(nums)/sizeof(int);

    Solution* s = new Solution();  
    map<int,int>* dp = new map<int,int>(); 
    
    // int a;puts("Fibo low- Ingrese :");cin>>a;
    // cout<< s->fiboLow(a) <<"\n";
   
    // int x;puts("Fibo fast- Ingrese :");cin>>x;
    // cout<< s->fib(x ,dp) <<"\n";     
    printf(" size of : %d ",sizeof(double)); 
    free(dp);
    delete s;
    return 0;
}