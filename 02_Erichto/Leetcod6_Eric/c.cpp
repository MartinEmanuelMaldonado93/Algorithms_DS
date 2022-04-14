#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    vector<vector<string>> canonical( vector<string>  strs){
        map<string, vector<string>> m;
        //  {"eat"},{"tea"},{"tan"},{"ate"},{"nat"},{"bat"}
        for( string s: strs ){
            string s2 = s; 
            sort(s2.begin(),s2.end());
            m[s2].push_back(s);  
        }

        vector<vector<string>> v;
        for( pair<string, vector<string>> pp : m) 
            v.push_back(pp.second); 
         
        return v;
    }
};

int main(){ 
    vector<string> str = {{"eat"},{"tea"},{"tan"},{"ate"},{"nat"},{"bat"}};
    Solution* s = new Solution();

    vector<vector<string>> ans = s->canonical(str);

    // for(auto x : ans){
    //     for(auto y : x){
    //         cout<< y <<", ";
    //     }
    //     puts("\n ");
    // }

    delete s;
    return 0;
}