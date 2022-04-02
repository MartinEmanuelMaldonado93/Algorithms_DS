#include <bits/stdc++.h>
using namespace std;
class Node{
    public:
// private: 
    int data;
    Node* next;
// public:
    // CTOR 
    Node(int dat){
        (*this).data = dat;
        (*this).next = NULL;
    } 
    int getData(){
        return data;
    }
    Node* getNext(){
        return next;
    }
    void setNext(Node* newNode){
        (*this).next = newNode;
    }
};

class LinkedList{
private:
    Node* head;
    int size;
    Node* _reverseList(Node* head){// a->b->null 
        Node* prev = NULL;
        Node* curr = head;// COPY OF HEAD ... 

        while(curr != NULL){
            Node* next = curr->next;
            curr->next = prev;// first its NULL

            prev = curr;// prev:a 
            curr = next; // curr:b 
        }
        return prev;
    }
    int reverseFree(Node* head){// a-b-c-null 
        if( head->next == NULL ){
            // cout<< head->data<<" ";
            free(head);
            return 1;
        } 
        this->reverseFree( head->next );
        // cout<< head->data<<" ";
        free(head);
        return 1;
    }
public:
    LinkedList(){
        this->head = NULL; 
        this->size = 0;
    }
    ~LinkedList(){ 
        reverseFree(head);
        // function for delete nodes
    }
    Node* getHead(){
        return (*this).head;
    }
    int getSize(){
        return this->size;
    }
    void push_front(int dat){
        Node* newNode = new Node(dat); 
        if(this->size == 0){
            this->head = newNode;
            this->size++; 
        }
        else{
            Node* temp = head;
            head = newNode;
            newNode->next = temp;
            size++;
        }
    }
    void push_back(int dat){
        Node* newNode = new Node(dat); 
        if(this->size == 0){
            this->head = newNode;
            this->size++; 
        }
        else{
            Node* temp = head;//start to the head
            while(temp->next != NULL){
                temp = temp->next;
            }
            temp->next = newNode; 
            size++; 
        }
    }
    void print(){
        Node* curr = head;
        while( curr != NULL){
            cout<< curr->data<<" ";
            curr = curr->next;
        }
        printf(" Size:%d\n",size); 
    }
    void reverseList(){
        this->head = _reverseList(head);
    }
};
int main(){
    LinkedList* myList = new LinkedList(); 
    for(int i=0; i<6; i++)
        myList->push_front( rand() % 100 );  
    myList->print();
    myList->reverseList();
    myList->print();

    delete myList;
    return 0;
}