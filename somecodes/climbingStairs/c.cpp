#include <bits/stdc++.h>
using namespace std;

/* The basic aproach is using bottom-up true dynamic programming
*  solve the basic problems first
*/

class Solution{
public:
    Solution(){}
    // time: o(n) memory: o(1)
    int waysOfClimbStairs(int n) {
        int one = 1, two = 1; // first cases 

        for (int i = 0; i < n-1; i++){
            int temp = one;
            one = one + two; // update the accumulator 
            two = temp;//previous val
        }
        return one;
    }
};

int main() {
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);

    int nums[] = {};
    int n = sizeof(nums) / sizeof(int);
    Solution* s = new Solution();

    printf("n = 5 ->%d \n",s->waysOfClimbStairs(5));    // 8
    printf("n = 40 ->%d ",s->waysOfClimbStairs(40)); // 165580141

    delete s;
    return 0;
}