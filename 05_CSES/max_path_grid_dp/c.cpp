#include <bits/stdc++.h>
typedef long long int ll; 
using namespace std;
#define ROW 5
#define COL 5

class Solution{
    public: 
    Solution(){}
    int maxPath(int grid[ ][COL],int row,int col){
        int sum[row+1][col+1];

        for(int i=0; i <= row; i++){
            for(int j=0;j<=col;j++){
                sum[i][j]=0;
            }
        }

        for(int y=1; y<=row; y++){
            for(int x=1; x<=col; x++){   
                sum[y][x] = max( sum[y-1][x] ,
                                 sum[y][x-1] ) + grid[y-1][x-1];
            } 
        }
        // correct answer : 67. 
        return sum[row][col];
    }
};
int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);

  //  int grid[ROW][COL] ={{ 1, 2 }, { 3, 5 }};
    int grid[ROW][COL] = {  {3, 7, 9, 2, 7}, 
                            {9, 8, 3, 5, 5}, 
                            {1, 7, 9, 8, 5},
                            {3, 8, 6, 4, 10},
                            {6, 3, 9, 7, 8 } };

    Solution* s = new Solution();
    cout<< s->maxPath(grid,ROW,COL);

    delete s;
    return 0;
}