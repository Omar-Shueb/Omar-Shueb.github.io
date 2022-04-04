function almostSorted(arr) {
  // Write your code here
  const sorted = arr.map((x) => x);
  const reversed = arr.map((x) => x);

  sorted.sort((a, b) => a - b);
  reversed.sort((a, b) => b - a);

  if (JSON.stringify(sorted) === JSON.stringify(arr)) {
    return "Yes";
  }

  let difference = [];
  arr.forEach((x, i) => {
    if (x !== sorted[i]) {
      difference.push(i);
    }
  });
  if (difference.length === 2) {
    console.log("Yes");
    console.log(`swap ${difference.join(" ")}`);
  }

  const reversedSubstring = [];
  const reversedSubstringIndex = [];
  arr.forEach((x, i) => {
    if (arr[i - 1] === x + 1 || arr[i + 1] === x - 1) {
      reversedSubstring.push(x);
      reversedSubstringIndex.push(i);
    }
  });

  let nonConsecutive = 0;

  for (let i = 0; i < reversedSubstring.length - 1; i++) {
    if (reversedSubstring[i] - 1 !== reversedSubstring[i + 1]) {
      nonConsecutive++;
    }
  }

  if (nonConsecutive !== 0) {
    console.log("No");
  } else {
    let testArr = arr.slice(
      reversedSubstringIndex[0],
      reversedSubstringIndex[reversedSubstringIndex.length - 1] + 1
    );

    arr.splice(reversedSubstringIndex[0], testArr.length, testArr.reverse());

    if (JSON.stringify(sorted) === JSON.stringify(arr.flat())) {
      console.log("yes");
      console.log(
        `reverse ${reversedSubstringIndex[0] - 1} ${
          reversedSubstringIndex[reversedSubstringIndex.length - 1] - 1
        }`
      );
    }
  }
}

console.log(almostSorted([1, 5, 4, 3, 2]));
