
#include <iostream>
#include <string>
using namespace std;

class Father {
	public :
		string car;
		string house;			
	void anger(){
		cout<< " anger inherit" << "\n";
	};
};


class Son : public Father{
	public :
		string name;	
	void anger(){
		cout<< "little  anger inherit" << "\n";
	};	
};

class Son1 : public Father{
	public :
		string name;
		
   void anger(){
		cout<< "more anger inherit" << "\n";
	};			
};

class Son2 : public Father{
	public :
		string name;
	void anger(){
		cout<< "null" << "\n";
	};		
};




int main(){	
	
	Son obj1;
	Son1 obj2;
	Son2 obj3;
	
	obj1.anger();
	obj2.anger();
	obj3.anger();
	
	return 0;
}
