#include <stdio.h>

int main (){
	
//	int x = 17;
//	int y = 12;
//	int s = 11;
//	int v = 11;
//	
//	int add = y+s+v;
//
//	if(x > 11){
//		printf("%d",add);
//	}
//	else if (x < 11){
//		printf("x is smaller than 11");
//	}
//	else{
//		printf("Enter a valid number");
//	}
	
	
	//user input == scanf()
	
//	
//	int x; 
////	 &x is used to store value into a memory address
//	scanf("%d",&x);
//	
//	if(x > 11){
//		printf("x is greater than 11");
//	}
//	else{
//		printf("x is smaller than 11");
//	}
//	

	
//	 Calculator 

	int num1 ;
	int num2;
	int op;
	
	scanf("%d",&num1);
	scanf("%d",&num2);
	scanf("%d",&op);
	
	if(op == 1){
		printf("%d",num1+num2);
	}
	else if(op ==2){
			printf("%d",num1-num2);
	}
		else if(op ==3){
			printf("%d",num1*num2);
	}
		else if(op ==4){
			printf("%d",num1/num2);
	}
	else{
		printf(" Enter a number btw 1 to 4");
	}
	
		return 0;
}
