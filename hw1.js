// Part1
// This function calculates the sum of all numbers in the array
function sum(arr) {
    let total = 0;
    for (const n of arr) {
        total += n;
    }

    return total;
}

// This function returns the average value of the numbers in the array
function average(arr) {
    return sum(arr) / arr.length;
}

// This function finds and returns the maximum number in the array
function max(arr) {
    let m = arr[0];
    for (const n of arr) {
        if (n > m) m = n;
    }

    return m;
}

// This function finds and returns the minimum number in the array
function min(arr) {
    let m = arr[0];
    for (const n of arr) {
        if (n < m) m = n;
    }

    return m;
}

// Part2
// This function capitalizes the first letter of the given string
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// This function reverses the characters in a string
function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

// This function counts how many vowels (a, e, i, o, u) are in the string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

// Part3
// This object stores student information and related methods
const student = {
    name: "Your Name",
    age: 20,
    grades: [85, 90,78],

    getAverage: function () {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }

        return sum / this.grades.length;
    },

    isHonorRoll: function () {
        return this.getAverage() > 85;
    }
};

// ---------- Test Output ----------
const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Max:", max(numbers));
console.log("Min:", min(numbers));

console.log("Capitalize:", capitalize("hello"));
console.log("Reverse:", reverse("hello"));
console.log("Vowel Count:", countVowels("hello"));

console.log("Student Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());
