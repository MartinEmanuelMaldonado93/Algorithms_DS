#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    Solution (){}
   /* int moveZeros(vector<int>*nums ){
        if(nums != NULL){
            int n = (*nums).size();
            int i = 0;
            for(int num:*nums){
               if(num != 0)
                    (*nums)[i++] = num;
            }
            for(int j=i; j<n; j++)
                (*nums)[j] = 0;
            return 0; 
        }
        else
            return -1;
    }*/
    int moveZeros1(vector<int>nums ){
        int len = nums.size();
        int top = len-1;
        for (int i = 0; i < len; i++){
            if( nums[i] == 0 ){
                printf("%d \n",i);        //{0,1,0,3,0,9,0,12,5,8,6,0,0};
                while(nums[top] == 0 ){
                    top--;
                }
                int temp = nums[top];
                nums[top] = 0;
                nums[i] = temp;
                top--;
                len--;
            }
        }
        puts("\n");
        for(int x:nums)
            cout<<x<<" ";

        return 0;
    }
};

int main(){ 
    //  int nums[]={0,1,0,3,12};
    //  int n = sizeof(nums)/sizeof(int);
    vector<int>nums={0,1,0,3,0,9,0,0,12,5,8,6,0,0};
    Solution* s = new Solution();

    if(s->moveZeros1( nums)!=-1){
        // for(int num:nums)
        //     cout<<num<<" ";
    }

    delete s;
    return 0;
}