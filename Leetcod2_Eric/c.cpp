#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int f(int n){
        int sum = 0;
        while(n){
            int digit = n % 10;
            n /= 10;
            sum += digit * digit;
        } 
        return sum;
    }
public:
    bool isHappy(int n){
        unordered_set<int> visited;

        while(true){
            if( n == 1 ) 
                return true;
            n = f(n);
            if( visited.count(n) == 1) 
                return false; 
            
            visited.insert(n);
        }
    }
};

int main(){ 
    int nums[]={};
    int n = sizeof(nums)/sizeof(int);
    Solution* s = new Solution();
    int x;
    while(x != 0){
        cout<<"Happy number? : "; cin>>x;
        cout<< (s->isHappy(x) ? "true":"false")<<"\n";
    }

    delete s;
    return 0;
}