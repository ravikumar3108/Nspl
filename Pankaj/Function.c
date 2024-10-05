#include <stdio.h>

void firstFunc(){
	
	int x = 1;
	int y = 2;
	
//	printf("%d",x+ y );
	printf("Function is running \n");
	
}

// parameter and arguments 

void Func(int num1, int num2){
		
	printf("Parameters function \n");
	printf("%d \n", num1 + num2); 
}


int main (){

// call the function 
	firstFunc();
	Func(11,12);
	Func(111,12);
	
	return 0;
}
