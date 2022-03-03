// level {2}

const getSumOfFib = (n) => {
	let fibo = [];
	if (n <= 0) return 0;
	fibo[0] = 0;
	fibo[1] = 1;
	let sum = fibo[0] + fibo[1];

	for (let i = 2; i <= n; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2];
		sum += fibo[i];
	}
	return sum;
};

console.log(getSumOfFib(6));

// level {3}

const obj = {
	liked: [
		{ id: 1, name: "John Doe", age: 20 },
		{ id: 2, name: "Jane Doe", age: 30 },
		{ id: 3, name: "John Smith", age: 40 },
	],
	disliked: [
		{ id: 4, name: "Jason Doe", age: 20 },
		{ id: 5, name: "Josh Doe", age: 30 },
		{ id: 6, name: "Karen Smith", age: 40 },
	],
	loved: [
		{ id: 7, name: "Jasmine Doe", age: 20 },
		{ id: 8, name: "Bob Doe", age: 30 },
		{ id: 9, name: "Tom Smith", age: 40 },
	],
};

const res = [];

Object.keys(obj).forEach((key) => {
	obj[key].forEach((item) => {
		const temp = item;
		temp.reaction = key;
		res.push(temp);
	});
});

console.log(res);
