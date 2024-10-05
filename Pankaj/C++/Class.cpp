#include <iostream>
#include <string>
using namespace std;

//class Student {
//	public:
//		int x ;
//		int y ;
//
//	void myfunction(){
//		cout << "Heloo method is running";
//	}		
//};

class Student {
	
	public :
		int rollno;
		int id;
		
//	Constructor 
	Student(int x , int y ){
		rollno = x;
		id = y;			
	}
	
};



int main(){
//	
////	 Create a object 
//	Student Bio;
//	
//// Value assign to a object 
//    Bio.y = 20;
//	cout << Bio.y;		
////	Access the method by the object 
//	Bio.myfunction();
//	
//	Student Bio2;

//	 Constructor 
	
	Student St1(12,13);	
	cout << St1.rollno;
			
	return 0;
	
}
