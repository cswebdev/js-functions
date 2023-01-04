(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  //function determines if num1 or num2 is largern by using the > opperator.

  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  // this function checks num1-num3 and passes the values to Math.max which isolates and assignes the largest number to bigNum

  function maxOfThree(num1, num2, num3) {
    const bigNum = Math.max(num1, num2, num3);
    return bigNum;
  }

  // ---------------------
  // Dæfine a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  // this function cross refrences a letter to see if it's a vowel through matching a string input to the stored values in .match.
  function isVowel(vowel) {
    const testLetter = vowel;
    // .match can be assigned specific characters to search match with. 
    if (testLetter == vowel.match(/[a,e,i,o,u]/)) {
      return true;
    } else {
      return false;
    }
  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  //  could not figure this out for my life and had to look it up and it still doesn't work. 

  // function is finding the length of the string "this is fun" and assigning res (resolution) to an empty string

  function rovarspraket(rovarStr) {
    let rovLength = rovarStr.length;
    var res = "";
    const i = 0;
    // star for loop with max loops equal to string length
    for (let i = 0; i < rovLength; i++) {
      // checks letters in string to determine if the letter is a vowel or consonant
      if (
        rovarStr[i] == "a" ||
        rovarStr[i] == "e" ||
        rovarStr[i] == "i" ||
        rovarStr[i] == "o" ||
        rovarStr[i] == "u"
      ) {
        res = res + rovarStr[i];
      }
      // checks for empty spaces
      if (rovarStr[i] == " ") {
        res = res + rovarStr[i];
      }
      // consonants are targetted and doubled, as well as add an "o" in between the consonants
      else {
        res = res + rovarStr[i] + "o" + rovarStr[i];
      }
     
      // return resolution
      return res;
    }
  }

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  // sum function that uses an array of integers and adds them up together  
  
  function sum(array) {
    let sumTotal = 0;

    for (let i = 0; i < array.length; i++) {
      sumTotal += array[i];
    }
    console.log(array);
    return sumTotal;
  }

  // this  functino works almost identical to the sum function but instead this multiplies the contents of an array 

  function multiply(array) {
    let total = 1;

    for (let i = 0; i < array.length; i++) {
      total *= array[i];
    }
    console.log(total);
    return total;
  }
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  // function that chains methods split, reverse, and join in order to mutate the string 
  function reverse(str) {
    return str.split("").reverse().join("");
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  // this function analyzes the size of all items in the array and determines the longest one by analyzing the arrays items with the length of the array
  function findLongestWord(array) {
    let bigWord = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > bigWord) {
        bigWord = array[i].length;
      }
    }
    return bigWord;
  }
  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  // this function analyzes the length of an array of strings to the length of an array with intigers. 
  function filterLongWords(array, length) {
    // set longWords to equal an emptry string
    let longWords = [];
    for (let i = 0; i < array.length; i++) {
      // if the array. length is larger than any intigers then
      if (array[i].length > length) {
        // use .push method to determine the length of longWOds array vs. length of intger array while creating a new array for longWords
        longWords.push(array[i]);
      }
    }
    return longWords;
  }
  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  // passing result into an emtpy OBJECT which will then be used to count the characters in the string

  function charFreq(str) {
    // string gets split from the array
    let charArray = str.split("");
    // let result equal an empty object
    let result = {};
    // for loop that sets max number of loops to charArray
    for (let i = 0; i < charArray.length; i++) {
    // assigning the split values of string to the individicual items in charArray[i] to value
      let value = str.split(charArray[i]).length - 1;
      result[charArray[i]] = value;
    }
    return result;
  }
  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
