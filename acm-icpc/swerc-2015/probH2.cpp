
#include <iostream>
#include <string>
#include <cmath>
#include <set>
#include <sstream>

using namespace std;


string numToBin(int num) {
	string result = "";
	while (num != 0) {
		result = (char)(num % 2 + 48) + result;
		num /= 2;
	}
	return result;
}

int main() {
	int min, max;
	cin >> min >> max;

	set<string> total;
	for (int m = 1; m < 64; m++) {
		for (int n = 0; n < (64-m); n++) {
			for (int p = 1; p <= 64/(m + n); p++) {
				string s1 = string(m, '1') + string(n, '0');
    
				ostringstream os;
				for(int i = 0; i < p; i++)
					os << s1;
				s1 = os.str();
				
				string s2 = s1 + string(m, '1');
				total.insert(s1);
				total.insert(s2);
			}
		}
	}

	int sum = 0;
	for (int i = min; i <= max; i++) {
		string i_str = numToBin(i);
		if (total.find(i_str) != total.end()) {
			sum += 1;
		}
	}

	cout << sum << endl;

	return 0;
}
