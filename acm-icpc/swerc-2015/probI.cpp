
#include <iostream>
#include <string>
#include <unordered_set>

using namespace std;

void subStrs(string s) {
	unordered_set<string> u;
	for (int i = 0; i < s.size(); i++) {
		for (int j = 1; j <= s.size() - i; j++) {
			u.insert(s.substr(i, j));
		}
	}
	cout << u.size() << endl;
}

int main() {
	string s;
	cin >> s;
	int q, w;
	cin >> q >> w;

	while (q > 0) {
		int i;
		cin >> i;
		subStrs(s.substr(i-1, w));
		q--;
	}
}
