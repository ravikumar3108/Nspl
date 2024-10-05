#include <iostream> 
#include <string>
using namespace std;

//
//void fun1(int number){
//	cout << "Function is running and our number is : " << number;	
//}
//
//// multiple parameters 
//void fun2(int number,string x){
//	cout << "Function is running and our number is : " << number << "My name is : " << x;
//
//}
//
//// default parameters 
//void fun3(int number = 20){
//	cout << "Function is running and our number is : " << number;
//}

//int fun4(int x){
//	return x;
//}


int fun5(int x){
	return 10 + x;
}


int main (){
//	fun2(21,"Pankaj");	
//	fun3(56);


	int num1 = 10;
	int y = fun5(76);
	int sum = num1 + y ;
	cout << sum;
	
	
	return 0;
}
