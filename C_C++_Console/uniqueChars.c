#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define COUNT_CHARS_ASCII 256
int UniqueChars(char *str);
//		Contador de caracteres repetidos sin funciones de C++ (map,set, etc.)
int main()
{  
	printf("\n result :%d",UniqueChars("abcdddd")); //0 false
	printf("\n result :%d",UniqueChars("1111234")); //0 false
	printf("\n result :%d",UniqueChars("abcd")); 	//1 true
	printf("\n result :%d",UniqueChars("$23/()"));  //1 true
    return 0;
}
int UniqueChars(char *str){
		int lenStr = strlen(str);//9
		int lenCloneStr;
		int *count = (int*)calloc( COUNT_CHARS_ASCII, sizeof(int));
		char *cadena = (char*)calloc(lenStr, sizeof(char));

		if(count!=NULL){

			for (int i = 0; str[i] ; i++){
				char auxChar = str[i];// 97->a ..para que no me tire error IDE eclipse
				int auxInt = str[i]; // a->97
				if(count[auxInt]<1)//count[97] == 0
					cadena[i]=auxChar;

				count[auxInt]++;//	count[97] == 1
			}

			lenCloneStr = strlen(cadena);
			free(count);
			free(cadena);
		}

		return (lenCloneStr==lenStr);
};
