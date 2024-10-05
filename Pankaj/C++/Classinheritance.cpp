#include <iostream>
#include <string>
using namespace std;

// parent / base class 
class Father {
	public :
		string car;
		string house;			
	void anger(){
		cout<< " anger inherit" << "\n";
	};
};
class GrandFather {
	public :
		int land;			
	void anger(){
		cout<< " anger inherit" << "\n";
	};
};
//child / derived class / Multiple parents
class Son : public Father , public GrandFather{
	public :
		string name;		
};

int main(){	
	Son obj1;
	obj1.car = "Ferrari";
	obj1.land = 20;
	cout << obj1.land;
	return 0;
}
