#include <iostream>
#include <stdio.h>
using namespace std;

typedef struct Node
{
    int data;
    struct Node *next;
    Node(int x){
        data = x;
        next=NULL;
    }
    int push(int data){
        Node* temp = this;
    }
    
};
class Solution { 
    public:
    Node* reverseList(Node* head){ 
        Node* current = head;
        Node* next    = NULL;
        Node* previous  = NULL;

        while(current != NULL){  
            next = current->next;
            current->next= previous;
            previous=current;
            current = next;
        }
        /*while(current!=NULL){
           nextNode = previous;//
           previous = current; //
           current = current->next; // se pisa a si mismo
           previous->next = nextNode; //  
        }*/
        
        return previous;
    }
                                //  1-2-3-4-5
    Node* reverseList1(Node* node){ 
        if(node==NULL || node->next==NULL)
            return node;
         
        Node* head = reverseList1(node->next); 
        node->next->next = node; 
        return head;
    }
    
};

int main(){

    return 0;
}
