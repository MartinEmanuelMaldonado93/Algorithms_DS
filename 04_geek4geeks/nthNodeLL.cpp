#include <bits/stdc++.h>

class Node{
  private:
  // Members of class:
  int data;
  Node* next; 
            static int data1;
  
  public:
  // Constructor : 
  Node(int dataUser){
    data = dataUser;
    next=NULL;
  }
  // Methods 
  void setData1(){
    data1++;
  }
  int getData1(){
    return data1;
  }
  int push(int new_data){ 
    // Si es el unico nodo 
    if(this->next == NULL){
      this->next = new Node(new_data); 
      return this->next->data;
    }
    //Hay mas de 1 nodo :
    Node* lastNode=this;
    while(lastNode->next != NULL){
      lastNode = lastNode->next;
    }
    lastNode->next = new Node(new_data);
    return lastNode->next->data; 
  }
  void ll_deleteList(){
    Node* curr = this;
    Node* next ;

    while(curr->next!=NULL){
      next = curr->next;
      delete curr; // elimine el head 
      curr=next; // ahora curr es el next 
    }
    delete curr;
  }
  void ll_printNodes(){
    Node* temp = this;

    printf("[");
    while(temp!=NULL ){
      printf(" %d , ",(*temp).data);
      temp = temp->next; 
    }
    printf("]");
  }
  int ll_len(){ 
      int len=0;
      Node* temp = this;
      while(temp!=NULL){
        temp = temp->next;
        len++;
      }
      return len;
  }; 
  int getNthFromLast(Node *head, int n){
    int len = this->ll_len(); 
    if(n>len)
      return -1; 

    int i=0, dif;
    Node* temp = this;   
    dif = len-n;
    
    while(i<dif){
        temp = temp->next;
        i++;
    }
    return temp->data;
}; 
};

class GfG {
private:
    // Created a static variable
    static int count; 
public:
    // Member function to increment
    // value of count
    void set_count(){
        count++;
    } 
    // Member function to access the
    // private members of this class
    void show_count(){ 
        // print the count variable
        std::cout << count << '\n';
    }
};

int GfG::count = 0;

int main(){
 /* Node* head = new Node(7);
  head->push(8);
  head->push(9);
  head->push(10);
  


  printf("%d\n" );

  printf("Elementos %d \n",head->ll_len());

  head->ll_printNodes();
  head->ll_deleteList();
  
  printf("%d",head->ll_len());*/
 
// Objects of class GfG
    GfG S1, S2, S3;
   
    S1.set_count();
    S2.set_count();
    S3.set_count(); 
  
    S1.show_count();
    
  return 0;
}