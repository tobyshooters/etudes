/*
 * ID: csciutt1
 * PROG: test
 * LANG: C++
 */


#include <iostream> 
#include <ifstream>
#include <string>

using namespace std;

int main() {
	iostream fout ("test.out");
	ifstream fin ("test.in");

	int a, b;
	fin >> a >> b;
	fout << a + b << endl;

	return 0;
}
