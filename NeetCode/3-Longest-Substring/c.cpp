#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int function(string str){
        unordered_set<char> set;
        int maxlen = 0;
        int l = 0;
        for(int r =0; r<(int)str.length(); r++){ 
            while( set.find(str[r]) != set.end() ){
                set.erase( str[l] );
                l++;
            }
            set.insert( str[r] );
            maxlen = max( maxlen, r-l +1 ); 
        }
        return maxlen;
    }   
};

int main(){  
    Solution* s = new Solution();

    cout<< s->function("abcabcbb")<<" \n";// 3 
    cout<< s->function("bbbbb")<<" \n";//1
    cout<< s->function("pwwkew")<<" \n"; // 3

    delete s;
    return 0;
}