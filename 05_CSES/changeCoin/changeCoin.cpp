#include <bits/stdc++.h>
using namespace std; 

class Solution{
public:
    Solution (){} 
    vector<bool> ready;
    vector<int> value;  

    int  change(int target, vector<int> coins){
        int N = target , first[N];
        int value[N+1];

        value[0] = 0;
        for(int i=1; i<= target ; i++){
            value[i] = INT_MAX;
            for(int c : coins){
                if(i-c >= 0 && value[i-c]+1 < value[i]) {
                    value[i] = value[i-c]+1;
                    first[i] = c;
                }
                else
                    break;
            }
        }
        puts("Coins used : ");
        while( N > 0){
            cout<< first[N]<< " ";
            N = N - first[N] ;
        }
        puts("\n");
        puts("Cant:");
        return value[target];
    } 
    int change1(int target, vector<int> coins){
        if(target < 0) return INT_MAX-1000;
        if(target == 0) return target;

        int best = INT_MAX-1000;
        for(int c : coins){  
            best = min( best , change1(target-c,coins)+1 ); 
        }
        return best;
    }
    int  changeEfficient(int target,vector<int> coins){
        ready.resize(target+1);
        value.resize(target+1);
         
        //return  _change1Efficient(target, coins);
        return _change2Efficient(target, coins, {} );
    }
private:
    int _change1Efficient(int target,vector<int> coins){
        if( target < 0) return INT_MAX-1000;
        if( target == 0) return 0;
        if( ready[target] ) return value[target];
        int best = INT_MAX - 1000;

        for(int c: coins){
            best = min( best, _change1Efficient(target-c, coins)+1);
        }
        ready[target] = true;
        value[target] = best;
        return best;
    }
    int _change2Efficient(int target,vector<int> coins,unordered_map<int,bool>memo){
        if( target < 0) return INT_MAX-1000;
        if( target == 0) return 0;
        if(memo.find(target) != memo.end()) return memo[target];

        int best = INT_MAX-1000;
        for(int c: coins){
            best = min ( best, _change2Efficient(target-c,coins, memo ) +1 );
            value.push_back( best  );
        }
        memo[target] = best; 
        return best;
    }
public:
    int countingChange(int target, vector<int> coins){
        int count[target+1];
        count[0] = 1;
        for(int i=1; i<=target ; i++){
            for(auto c: coins)
                if( i - c >= 0 ){  
                    count[i] += count[i-c];
                }
        }
        cout<< count[target];
        return 0;
    }  
};

int main(){  
    //vector<int> nums = {1,3,4,15};
    vector<int> nums = {1,3,4};
    Solution* solution = new Solution();   

    solution->countingChange(5, {1,3,4} );
    // cout<< s->change(12, nums);
    // cout<< s->changeEfficient(12, nums);
    // int n = s->value.size();
    // while( n > 0){
    //     printf(" %d ", s->value[n]);
    //     n = n - s->value[n];
    // }
    
    // cout<< s->change(60, nums);
    // cout<< s->change1(12, nums);
    // cout<< s->change1Efficient(12, nums);

    delete solution;
    return 0;
}