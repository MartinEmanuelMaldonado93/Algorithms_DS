#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    string reverseStr(string str){
        if( str.length() == 0) return "";  
        char firstLetter = str[0];
        return reverseStr(str.substr(1)) + firstLetter;
        // take from the front and put at the end
    }
};

int main(){  
    Solution* s = new Solution();
    
    cout<< (*s).reverseStr("Martin");// nitraM

    delete s;
    return 0;
}