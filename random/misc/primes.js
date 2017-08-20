var isPrime = x => {
	for (var i = 2; i < x; i++) {
		if (x % i == 0) return false
	}
	return true
}

var getPrimes = x => {
	let nums = [];
	for (var i = 0; i < x; i++) nums.push(i)
	return nums.filter(isPrime)
}

console.log(Math.max(...getPrimes(12)))
