#include <bits/stdc++.h> 
typedef long long int ll;
typedef unsigned long long int ull;
int main(){ 
    ll n;
    std::cin>>n;
    ll arr[n];
    for(int i=0;i<n-1;i++)
       std::cin>>arr[i];

    ll sum = ( n*(n+1) ) /2; 
    ll p = 0; 
      for(int i = 0; i<n-1; i++)           
          p += arr[i];

    printf("%lld",sum-p);
    return 0;
}