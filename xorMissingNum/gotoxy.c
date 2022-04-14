#include <stdlib.h>
#include <stdio.h>
#include <time.h>
//gotoxy() function definition
void gotoxy(int x,int y)
{
    printf("%c[%d;%df",".",y,x);
}
int main ()
 {
    int x=10, y=20,t=0;
    for (x=1;x<20;x++){
      gotoxy(x,y); //move cursor//
      printf(" Hello World!!!");
      sleep(1);
    };
    return 0;
}