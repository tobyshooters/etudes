#include <iostream>
#include <vector>

using namespace std;

int main() {
	int n;
	cin >> n;
	int count = 0;
	vector<int> nums;

	for (int i = 1; i < n; i++) {
		count += i;
		nums.push_back(i);

		if (count == n) break;

		if (count > n) {
			int diff = count - n;
			nums.erase(nums.begin() + diff - 1);
			break;
		}
	}

	cout << nums.size() << endl;
	for (int i : nums) {
		cout << i;
	}

	return 0;
}
