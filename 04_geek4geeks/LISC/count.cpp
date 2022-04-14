#include <bits/stdc++.h> 
using namespace std;
typedef unsigned int uint;
class Solution{   
    public:
    Solution(){} 
    ~Solution(){}
    // Number of Longest Increasing Subsequence
    // GeekForGeeks implementation 
    int lisc(int* nums,int n){
      vector <int> lon(n, 1), cnt(n, 1);
      int lis = 1;

      for(int i = 1; i < n; i++){

         for(int j = 0; j < i; j++){

            if(nums[i] > nums[j]){
 
               if(lon[j] + 1 > lon[i]){
                  lon[i] = lon[j] + 1;
                  cnt[i] = cnt[j];
               }
               else if(lon[j] + 1 == lon[i]){
                  cnt[i] += cnt[j];
               }
            }
            lis = max(lis, lon[i]);
         }
      }
      int ans = 0;
      for(int i = 0; i < n; i++)
         if(lon[i] == lis)
            ans += cnt[i]; // acumulo 
      
      return ans;
    } 
}; 

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    Solution* s= new Solution();
   // int myArray[]={5,5,5,5,5};
    //int myArray[]={5,5,5,5,5};
    int myArray[]={1,3,5,4,7};
    int lon = sizeof(myArray)/sizeof(int);

    printf(" %d ",s->lisc(myArray,lon));

    delete s;
    return 0;
} 