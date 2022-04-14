#include <bits/stdc++.h>
//#include <iostream>
//using namespace std;

int main(){
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);

    int n;
    puts("ingrese len of n:");
    std::cin>>n;

    if(n>0 && n<INT_MAX){
        int arr[n]; 
        for(int j=0;j<n-1;j++){ // aca pido 
            printf("%d) ",j);
            std::cin>>arr[j];
        }
        //sort array
        int s = n-1;
        std::sort(arr, arr + s);// works

        for(int j=0; j<n-1;j++){    
            printf(" %d ",arr[j]);
        }
        for(int i=0; i<n-1 ;i++){
            if(arr[i]==1){
                continue;
            }
            if(arr[i+1]-arr[i]!=1){
                printf("\ni:%d  return :[%d]",i, arr[i]+1 ) ;

                break;
                return 0;
            }
            if(arr[i+1]-arr[i]!=1){
                printf("resDOS [%d]",arr[i]+1);
                break;
                return 0;
            } 
        }  
    }
    else
        return -1;
    return 0;
}