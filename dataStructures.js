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
