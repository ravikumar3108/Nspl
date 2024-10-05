#include <stdio.h>
#include <stdbool.h>

int main(){
	
//	constant 

//const int number = 20;
//
//printf("%d",number);

// Operators 
//1. Arithmetic opertaors 
//	+ Addition 
//	- Substraction 
//	* Multiplication 
//	/ divide 
//	% modulus 
//	++ increment 
//	-- decrement 


//int number = 4;
//int num2 = 40;
//
//int add = number + num2;
//printf("%d \n",add);
//
//int numb3 = 25;
//int num4 = 2;
//
//// Modulus gives remainder 
//int modu = numb3 % num4;
//printf("%d",modu);

// increment 
int num5 = 10;
//prefix
int incr = ++num5;


printf("%d \n",incr);
printf("%d \n",num5);

int num6 = 10;
//postfix
int incr1 = num6++;

printf("%d \n",incr1);
printf("%d \n",num6);

// decrement 	


//2. Assignment operators 
//   =
//	+= 
//	-= 
//	*=
//	/=
//	%=

int assign = 10;
assign += 10;
//int addassign = assign + 10;
printf("%d \n",assign);


	
//3. Comparision operators 
//==
//!=
//<
//>
//<=
//>=

int comp1 = 10;
int comp2 = 20;

int compare = comp1 == comp2;
printf("%d \n",compare);

// boolean values first we include the header file 
bool pankaj = true;
printf("%d \n",pankaj);

int notcompare = comp1 != comp2;
printf("%d \n", notcompare);


//4. Logical operators 
//   &&  = and 
//   ||  = or 
//   !   = not 

//
//and
//true && true = true
//true && false = false
//false && true = false
//false && false = false 



//or 
//true || true = true
//true || false = true
//false || true = true
//false || false = false 
 
int a = 10;
int b = 20;
int c = 30;
int d = 10;

int con = (a == b ) && (c != d);
printf("%d \n",con);


int con1 = !(a == d ) || (c != d);
printf("%d \n",con1);

	
	return 0;
}
