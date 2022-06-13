#include <iostream>  
using namespace std;
int main()
{
    int arr[]= {1,2,3,4,5};
    int n =5;
    
    for(int i=0;i<n;i=i+2)// salta de 2 en 2 
        if(i>=n-1) 
             return -1;
        else if(i%2==0){ 
           int temp = arr[i];
           arr[i]= arr[i+1];
           arr[i+1]=temp;
        }
    

    for(int i=0;i<n;i++) 
        std::cout << arr[i];
    
    return 0;
}