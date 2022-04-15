#include <bits/stdc++.h>
#include <set>
typedef long long int ll;
typedef unsigned long long int ull;
//#include <iostream>
//using namespace std;
    // std::ios::sync_with_stdio(0);
    // std::cin.tie(0);
// XOR  ^ its similar to != 
// a^a = 0
// a^0 = a
//std::set<int> mySet;
int main(){
    int len=5;
    int arr[len]= {2,39,7,7,2};

    int a=0;
    for(int i=0;i<len;i++)  
        a^=arr[i]; 
   
    printf("\nResultado : %d ",a); // 39
 
    /*{
        if(mySet.find(arr[i]) == mySet.end())// Si no está 'X' número, lo agrego.
            mySet.insert(arr[i]);
        else
            mySet.erase(arr[i]);// Si está lo borro.
    }*/

    //  Resultado [39], el único que no tiene un gemelo par. 
    // for (std::set<int>::iterator itr = mySet.begin(); itr != mySet.end(); itr++) 
    //     printf("\nResult: %d  \n",*itr);

    return 0;
}