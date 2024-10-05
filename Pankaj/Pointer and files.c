#include <stdio.h>

int main(){
	
//	 Pointer :- Pointer is used to store a address of a variable in another variable . 
			//	To declare pointer we use asterik *
			
			int x = 10;
			
			printf("%p",&x);
			
			int* point = &x;
			printf("%p",point);

	
	
	// Files :- Files is used to write , append , read to a txt file. 
			//	Here FILE is used to a data type of a file  
			//  *files1 is the name of our file variable which is our file saves a memory addrss by the pointer .
			
			
	FILE *files1;
	
//	 Create a File 

//	files1 = fopen("pankaj.txt","w");
//	
//	fclose(files1);
	
	
//	Append a File / Write into a file 

    files1 = fopen("ravi.txt","r");
	
//	fprintf(files1," \n Heloo RAvi.Leaning C lang");
	
	char str1[100];	
	while(fgets(str1,100,files1)){
			printf("%s",str1);
	}
	fclose(files1);
	return 0;
}




