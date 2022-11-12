#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    vector<string> permutation(string str, string prefix, vector<string> memo){
        if(str.length() == 0) {
            cout<<prefix<<" \n";
            memo.push_back(prefix);
        }
        else{
            for (int i = 0; i < str.length(); i++){
                string rem = str.substr(0,i) + str.substr(i+1);
                //cout<<rem<<" pref:"<<prefix<<" char:"<<str[i]<<" \n";
                permutation(rem, prefix + str[i] ,memo);
            }
        } 
        return memo;
    }
    void foo(){
        string a = "mar", b = "tin";
        string c = a+b; 
        cout<<c; 
    }
};

int main(){
    string str = "abc";
    Solution* s = new Solution(); 
    vector<string>  strs =  s->permutation(str,"",{}); 
    // for(string s :  strs)
    //     cout<<" "<<s<<" \n";
    for (int i = 0; i < strs.size(); i++){ 
        cout<<strs[i]<<"  ";
    }

    delete s;
    return 0;
}