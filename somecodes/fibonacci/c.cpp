#include <bits/stdc++.h>
using namespace std;
#define uint unsigned int

class Solution{
public:
    Solution(){}

    /* Using recursion */
    uint fibRecursive(uint n){
        if (n <= 2) return 1;
        return fibRecursive(n - 1) + fibRecursive(n - 2);
    }
    /* Using Memoization with pointers */
    uint fib_ptr(uint n, map<uint, uint>* memo){
        if (memo->count(n)) {
            // printf(" %d) ", memo->at(n));
            return memo->at(n);
        }

        if (n <= 2) return 1;

        (*memo)[n] = fib_ptr(n - 1, memo) + fib_ptr(n - 2, memo);
        return (*memo)[n];
    }
    /* Using tabulation/array */
    uint fibTabulation(uint n){
        uint dp[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        for (uint i = 2; i <= n; ++i) {
            dp[i] = dp[i - 1] + dp[i - 2];
            // printf("%d -", dp[i]);
        }
        // puts("\n");
        return dp[n - 1];
    }
    /* Using only two variables even more performant than tabulation bc use extra memory */
    uint fibDynamic(uint n){
        uint one = 1, two = 1;

        for (uint i = 0; i < n - 1; ++i) {
            uint temp = one;
            one = one + two;
            two = temp;
        }
        return two;
    }
};

int main() {
    Solution* s = new Solution();
    map<uint, uint>* memo_ptr = new map<uint, uint>();
    map<uint, uint> memo;

    cout << s->fib_ptr(8, memo_ptr) << "\n"; //21
    cout << s->fibRecursive(8) << "\n";// 21
    cout << s->fibRecursive(8) << "\n"; //21
    cout << s->fibDynamic(8) << "\n"; //21
    cout << s->fibTabulation(8) << "\n"; //21


    free(memo_ptr);
    delete s;
    return 0;
}