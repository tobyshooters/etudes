
#include <iostream>
#include <string>
#include <cmath>

using namespace std;

void findMN( int num, int a[]) {
	
	int bits = floor(log2(num) + 1);
	int M = 0;
	int N = 1;
	
	if (num & 1) { // if odd
		while (num & (1 << M)) {
			M++;
		}
		while ((num & (1 << (M+N))) == 0) {
			N++;
		}
		bits += N;
	} else {
		while ((num & (1 << N)) == 0) {
			N++;
		}
		M++;
		while ((num & (1 << (M+N)))) {
			M++;
		}
	}

	a[0] = M;
	a[1] = N;
	a[2] = bits;
}

int check(int num) {	
	int a[3];
	findMN(num,a);
	
	int M = a[0];
	int N = a[1];
	int P = a[2] / (M + N);

	int div = 0;
	for (int i = 0; i < P; i++) {
		div += (1 << (M+N)*i);
	}

	if (num % 2 == 0) {
		int div2 = 0;
		for (int j = N; j < N+M; j++) {
			div2 += 1 << j;
		}
		if (num == div * div2) return 1;
	} else {
		int div3 = 0;
		for (int j = 0; j < M; j++) {
			div3 += 1 << j;
		}
		if (num == div * div3) return 1;
	}
	return 0;
}

int main() {
	int min, max;
	cin >> min >> max;

	int sum = 0;

	for (int i = min; i <= max; i++) {
		sum += check(i);
	}

	cout << sum << endl;

	return 0;
}
