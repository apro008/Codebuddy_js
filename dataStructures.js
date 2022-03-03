// level {2}

const arr = [1, 3, 4, 6, 7, 8];

const removeEvenNumbers = (numbers) => {
	return numbers.filter((n) => n % 2 !== 0);
};

const getOddNumbers = removeEvenNumbers(arr);

// // // // // // // // // // // //

const inputString = "Elie";

const replaceVowels = (str) => {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "a" || "e" || "i" || "o" || "u") str[i].toUpperCase();
		else str[i];
	}
};
console.log(replaceVowels(inputString));

// // // // // // // // // // // //

const inputArr = [1, 3, 4, 6, 7, 8, 2, 5];

const getMax = (arr) => {
	return Math.max(...arr);
};

console.log(getMax(inputArr));

// // // // // // // // // // // //
// level {3}
//1
const recFun = (input) => {
	Object.keys(input).forEach((item) => {
		if (typeof input[item] === "object") {
			if (Array.isArray(input[item])) {
				input[item].forEach((i) => {
					recFun(i);
				});
			} else {
				recFun(input[item]);
			}
		} else if (typeof input[item] === "string") {
			input[item] = input[item].toUpperCase();
		}
	});
	return input;
};

//2
const string = "a:2,b:3,c:4,a:5,b:6";
const a = {};
string.split(",").forEach((item) => {
	const tempArr = item.split(":");
	if (a[tempArr[0]]) {
		a[tempArr[0]] = a[tempArr[0]] + parseInt(tempArr[1], 10);
	} else {
		a[tempArr[0]] = parseInt(tempArr[1], 10);
	}
});

console.log(a);

//3
const string2 = "{[({})]}";

if (string2.length % 2 !== 0) {
	console.log(`invalid`);
} else {
	let left = string2.slice(0, string2.length / 2);
	let right = string2
		.slice(string2.length / 2)
		.split("")
		.reverse()
		.join("")
		.replaceAll(")", "(")
		.replaceAll("}", "{")
		.replaceAll("]", "[");
	if (left === right) console.log(`valid`);
	else console.log(`invalid`);
}
