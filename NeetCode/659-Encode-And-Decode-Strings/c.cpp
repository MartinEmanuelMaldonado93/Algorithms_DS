#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    string encode(vector<string> strs) { 
        string strEncoded = "";  
        for(auto s : strs){ 
            int len = s.length(); 
            strEncoded.append(to_string(len)+"#"+s);
        }  
        return strEncoded;
    }
    vector<string> decode(string str) {
        vector<string> list; 
        int i = 0;
        int j = i; 
        while( i < str.length() ){
            while(str[j] != '#'){ 
                j++;
            }
            int len =  char(str[j-1]) - 48; 
            string sub = str.substr( j+1, len );
            list.push_back(sub); 
            j++;
            i = j + sub.length();  
        }
        return list;
    }
};

int main(){
    Solution* s = new Solution();
    
    vector<string> list = {"lint","code","love","you"};
    string encod = s->encode( list);
    cout<<"Encode : "<< encod <<" \n";
    vector<string> res  = s->decode( encod );

    cout<<"Desencode : ";
    for(auto s : res)
        cout<< s <<" ";

    delete s;
    return 0;
}