
#include <iostream>
#include <cmath>

using namespace std;
ios_base::sync_with_stdio(false), cout.tie(0)

int main() {

	int n, m;
	cin >> n >> m;

	int s = min(n, m);
	int dif = abs(n - m);

	for (int i = 1; i <= dif + 1; i++) {
		cout << s + i << endl;
	}

	return 0;
}
