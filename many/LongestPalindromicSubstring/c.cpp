#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
    int good(int x, string s) {
        int n = s.length();
        for(int L = 0; L + x <= n; L++) {
            if(isPalindrome(s.substr(L, x))) {
                return L;
            }
        }
        return -1;
    }
    bool isPalindrome(string s){
        string rev = s;
        reverse(rev.begin(), rev.end());
        return s == rev;
    }
    string longestPalindrome(string s) {
        int best_len = 0;
        string best_s = "";
        int n = s.length();

        for(int parity : {0, 1}) {
            int low = 1, high = n;
            if(low % 2 != parity) low++;
            if(high % 2 != parity) high--;

            while(low <= high) {
                int mid = (low + high) / 2;
                if(mid % 2 != parity) 
                    mid++; 
                if(mid > high) 
                    break;
                 
                int tmp = good(mid, s);
                if(tmp != -1) {
                    if(mid > best_len) {
                        best_len = mid;
                        best_s = s.substr(tmp, mid);
                    }
                    low = mid + 2;
                }
                else  
                    high = mid - 2; 
            }
        }
        return best_s;
    }
};
   /* string LongesPalidromSubstring(string s){
        int best_len = 0;
        string best_s = "";
        int n = s.size();
        for(int L=0 ; L<n; L++ ){ // low 
            for(int R=L ; R<n ; R++ ){ // fast
                int Currentlen = R - L + 1;
                string sub = s.substr(L, Currentlen );

                if(Currentlen > best_len && isPalindrome(sub) ){ 
                    //best_len = max( Currentlen , best_len);
                    best_len = Currentlen;
                    best_s = sub;
                } 
            }
        }
        return best_s;
    }*/

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    // int nums[]={};
    // int n = sizeof(nums)/sizeof(int);
    Solution* s = new Solution();
 
    // cout<< s->LongesPalidromSubstring("aamblqqeaaa")<<endl;
    // cout<< s->LongesPalidromSubstring("babad")<<endl;
    // cout<< s->LongesPalidromSubstring("cbbd");
    delete s;
    return 0;
}