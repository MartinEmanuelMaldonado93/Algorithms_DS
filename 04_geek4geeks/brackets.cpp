#include <iostream>
#include <stack>
using namespace std;

// Function to check if brackets are balanced or not.
class Solution
{
public:
    string x;
    Solution() {}

    void set(string myString)
    {
        x = myString;
    }

    bool isBalanced(string x)
    {
        this->x = x;
        stack<char> myStack;

        for (int i = 0; i < x.size(); i++)
        {
            if (x[i] == '(' || x[i] == '{' || x[i] == '[')
                myStack.push(x[i]);
            else
            {
                if (myStack.empty())
                    return false; // si solo tiene brackest open

                if (myStack.top() == '{' && x[i] == '}' || // si el top coincide con el curr
                    myStack.top() == '[' && x[i] == ']' ||
                    myStack.top() == '(' && x[i] == ')')
                    myStack.pop(); // lo saco de la lista

                else
                    return false;
            }
        }

        if (myStack.empty()) // si no hay  mas nada y no hubo problemas retr true
            return true;

        return false;
    }
};

int main()
{
    Solution *test = new Solution();

    printf("%s\n", test->isBalanced("{[()]}") ? "true" : "false"); // true  1
    cout << test->isBalanced("{[({[(") << endl;                  // false 0
    cout << test->isBalanced("{[())))]}") << endl;               // false 0
    cout << test->isBalanced("{}") << endl;                      // true  1

    delete test;
    return 0;
}