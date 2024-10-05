#include <stdio.h>

int main(){
	
	// Conditions 
	// if else statements execute when our condition is true 
	// else if statement which is used to multiple conditions 
	 
	
	// syntax 
//	if(condition){
//		// code 
//	}
//   else if(condition){
//	
//   }
//	else{
//		
//	}


//int number = 1;
//
//if(number == 3){
//	printf("Number is equal to 1");
//}
//else{
//		printf("Number is not equal to 1");
//};


int num1 = 1;

if(num1 == 0){
	printf("Monday");
}
else if(num1 == 1){
	printf("Tuesday");
}
else if(num1 == 2){
	printf("wednesday");
}
else if(num1 == 3){
	printf("thursday");
}
else if(num1 == 4){
	printf("friday");
}
else if(num1 == 5){
	printf("Saturday");
}
else if(num1 == 1){
	printf("Sunday");
}else{
	printf("Wrong");
}

// Switch Statement 

int x = 100;

switch(x){
	case 10 :
		printf("Try");
		break;
	case 11 :
		printf("11");
		break;
	case 12 :
		printf("12");
		break;
	case 13 :
		printf("13");
			break;
	default :
		printf("default");	
		break;
}

	
	return 0;
}
