#include <iostream>
#include <map>
#include <set>

using namespace std;

int main() {
	int a, b, e, p;
	cin >> a >> b >> e >> p;
	map<int,set<int> > m;
	while (p > 0) {
		int x, y;
		cin >> x >> y;
		if (m.find(y) != m.end()) {
			set<int> b;
			b.insert(x);
			m[y] = b;	
		}
		else m[y].insert(x);
		p--;
	}

	map<int, int> levels;
	for (map<int, int>::iterator it; it = levels.begin(); it != levels.end(); it++) {
	}
}
