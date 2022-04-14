#include<bits/stdc++.h>
using namespace std;
int globalCall = 0;
//https://afteracademy.com/
class Solution{ 
	vector<int> coins; 
	unsigned int* value; 
	bool* ready;
public:
	Solution(){};
	~Solution(){  
		free(ready);
		free(value); 
	}
	void setVector(vector<int> vec){
		for(int v:vec)
			coins.push_back(v); 
	}
	void setPairs(int len){
		value = (unsigned int*)malloc(sizeof(int)*(len+1));
		ready = (bool*)malloc(sizeof(bool)*(len+1));
		for(int i=0;i<len;i++){
			ready[i] = false;
			value[i] = INT_MAX;
			//printf("{%d - %d }\n",value[i],ready[i]);
		} 
	}	
	void setTargetHardcore(int V){
		if( !coins.empty() ){
			setPairs(V);
			cout<< "\nMinimum coins: "
			<< minCoinsRecursive(V)
			<<"\nfor $"<<V<<" dollars ";

		for(int c:coins)
			cout<<c<<" ";
		}
		else
			puts("\n Set coinsss first !");

	}
	void setTargetCin(){
		int am;
		puts("Insert :"); cin>>am;

		cout<< "\nMinimum coins required is \n "
			<< minCoinsRecursive(am)
			<<"\n Coins  for $"<<am<<" dollars ";

		for(int c:coins)
			cout<<c<<" ";
	}
	// space inefficient
	unsigned int minCoinsRecursiveOpt(vector<int>coins, int n,unordered_map<int,int>*memo){
		globalCall++;// at least 19987 calls not eficcient at all
		if(n < 0) return INT_MAX;
		if(n == 0) return 0;

		if((*memo).find(n) != (*memo).end()) //si existe
			return (*memo)[n];  

		int best = INT_MAX;
		for(int c : coins){
		//	printf(" c:%d \n",c);
			int result = minCoinsRecursiveOpt(coins, n-c, memo);// 5 
			if(result != INT_MAX)
				best = min( best , result+1 );
		}
		(*memo)[n] = best;
		return best;
	}
	// Indian way
	int minCoinsRecursive(int n){  
		//globalCall++;
		if(n < 0) return INT_MAX;
		if(n == 0) return 0;

		if(ready[n] == true) 
			return value[n];

		int best = INT_MAX;
		for(int c : coins){
			int result = minCoinsRecursive(n-c);// 5 
			if(result != INT_MAX)
				best = min( best , result+1 );
		}
		ready[n] = true;
		value[n] = best;
		return best;
	}
	// weird inefficient but simple
	int minCoinsOnlyRecursive(vector<int>coins,int idx, int amount){  
		if(amount == 0) return 1;
		if(amount  < 0) return 0;
		if(amount > 0 && idx == coins.size()) return 0;
   
		return   minCoinsOnlyRecursive(coins, idx, amount-coins[idx] ) 
			   + minCoinsOnlyRecursive(coins, idx+1, amount ); 
	}
	// Fast solution non-recursive 
	unsigned long long int minCoinsFast(vector<int> coins,unsigned long long int V) {
        // unsigned int table[++V];
		// unsigned long int (4Bytes) --> 0 to 4,294,967,295
	++V;
	unsigned long int* table = (unsigned long int*)malloc( (sizeof(unsigned long int) * V ) + 1); 
	  
	if(table != NULL){
		table[0] = 0;
		sort( coins.begin(), coins.end() ); 

		for( int i=1; i < V; i++) { 
			table[i] = INT_MAX;
			for (int j=0; j<coins.size(); j++) 
				if ( i-coins[j] < 0) 
					break;
				else{
					if( table[ i-coins[j] ] != INT_MAX ) 
						table[i] = min(table[i] , table[ i-coins[j] ]+1);
				}   
		}
		unsigned long int tableMax = table[--V];
		unsigned long int tableV = table[V];
		free(table);
		return tableMax == INT_MAX ? -1: tableV;
	}
	else 
		return -1;
    }


	
};
int main(){ 
	Solution* s = new Solution(); 
	//s->setTargetHardcore(7);
	//int n;cout<<"Target: ";cin>>n;
	//s->setTargetHardcore(n); 
	// cout<<s->minCoinsFast({4,5},9)<<"\n";//2
	//cout<<s->minCoinsFast({4,5},999)<<"\n";//200  
	// cout<<s->minCoinsRecursiveOpt({4,5},9999,new unordered_map<int,int>())<<"\n"; 
	// cout<<s->minCoinsOnlyRecursive({4,5},0,999)<<"\n";//200  
	//cout<<s->minCoinsFast({4,5},100000)<<"\n";//20000
	//cout<<s->minCoinsFast({4,5},88000000)<<"\n";//17600000 js break down!
	cout<<s->minCoinsFast({4,5},1190300101)<<"\n";// at billion break 


	//100300100 : 20060020
	//990300100 : 18446744073709551615
	//1 190 300101 : ?????
	/*	Delete pointers region */  
	//printf("\nGlobal calls %d ",globalCall);
	delete s;
	return 0;
}