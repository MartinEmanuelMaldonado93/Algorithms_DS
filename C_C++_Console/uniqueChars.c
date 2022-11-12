#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define COUNT_CHARS_ASCII 256

// Algorithm to find if a string contains repeated characters without functions of C++ (map,set, etc.)
int containUniqueChars(char *str);

int containUniqueChars(char *str) {
	if (!str) {
		printf(" *** Error Parameter null *** ");
		return -1;
	}

	int strLen = strlen(str);
	int *asciiDictionary = (int *)calloc(COUNT_CHARS_ASCII, sizeof(int));
	char *tempStr = (char *)calloc(strLen, sizeof(char));

	if (!tempStr || !asciiDictionary) {
		printf("\nError, cannot allocate memory");
		return -1;
	}
	
	for (int i = 0; str[i] ; i++) {
		char currLetter = str[i];
		int codeLetter = (int) currLetter;

		if (asciiDictionary[codeLetter] == 0){ //if has 0 apparitions complete my tempStr
			tempStr[i] = currLetter;
		}

		asciiDictionary[codeLetter]++;//count the frequency
	}

	int tempStrLen = strlen(tempStr);

	free(asciiDictionary);
	free(tempStr);

	return tempStrLen == strLen;
};

int main() {
	printf("\n result :%s", containUniqueChars(NULL) == 1 ? "true" : "false");		 // 0 false
	printf("\n result :%s", containUniqueChars("1111234") == 1 ? "true" : "false"); // 0 false
	printf("\n result :%s", containUniqueChars("abcd") == 1 ? "true" : "false");	 // 1 true
	printf("\n result :%s", containUniqueChars("$23/()") == 1 ? "true" : "false");	 // 1 true
	return 0;
}