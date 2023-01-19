// 692. Top K Frequent Words

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let wordCount = {};
  words.forEach(word => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });
  let wordCountArray = [];
  for (let word in wordCount) {
    wordCountArray.push([word, wordCount[word]]);
  }
  wordCountArray.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return b[1] - a[1];
    }
  });
  let topK = [];
  for (let i = 0; i < k; i++) {
    topK.push(wordCountArray[i][0]);
  }
  return topK;
};

// Test cases
let tests = [
  { words: ["i", "love", "leetcode", "i", "love", "coding"], k: 2, ans: ["i", "love"] },
  { words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k: 4, ans: ["the", "is", "sunny", "day"] },
]

// Run tests
tests.forEach(test => {
  console.log("Words:", test.words);
  console.log("k:", test.k);
  console.log("Expected:", test.ans);
  console.log("Output:", topKFrequent(test.words, test.k));
  console.log();
})
