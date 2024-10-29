// // Question 1
const arrayElement=document.querySelector("Arrays"); 

const array=[1,2,3,4,6,2,7,9,0,11,16,18,20,45,34,90,12,34,0,1];

// Question 1.1
const answer1=document.querySelector(".answer1");
function sumOfAllValues(){

  let totalSum=0; 
  
  for(i=0;i<array.length;i++){
    totalSum +=array[i];
  }

  return totalSum;
}
 function displaySumOfAllValues() {
   const answer1 = document.querySelector(".answer1");
   const result = sumOfAllValues();
   answer1.innerHTML = `Sum of all values: ${result}`;
 }
 //Question 1.2

 function FindlargestNumber(array){

   let largestNum=array[0];

   for(i=1;i<array.length;i++){

     if(array[i]>largestNum){
       largestNum=array[i];
     }
   }
   return largestNum;
 }

 function displayLargest() {
  const answer2 = document.querySelector(".answer2");
  const res =FindlargestNumber(array);
  answer2.innerHTML = `Largest number in the array is: ${res}`;
}

 //Question 1.3
 function sortInAscending(array) {
   return array.sort((a, b) => a - b); // Sorts the array in ascending order
 }

 function sortArray() {
  const answer3 = document.querySelector(".answer3");
  const result1 = sortInAscending(array);
  answer3.innerHTML = `Largest number in the array is: ${result1}`;
}

// Question 1.4

 function reverseArray(array) {
   let reversed = []; 

   for (let i = array.length - 1; i >= 0; i--) {
     reversed.push(array[i]);
   }

   return reversed; 
 }

 function reversedArray() {
  const answer4 = document.querySelector(".answer4");
  const reversed = reverseArray(array);
  answer4.innerHTML = `Reversed Array: ${reversed}`;
}

 // Question 1.5

 function returnEven(array){

   let numbers=[]; 

   for(i=0;i<array.length;i++){
     if(array[i]%2==0){
       numbers.push(array[i]);
     }
   }
   return numbers;
 }
 function getEvenNumbers() {
  const answer5 = document.querySelector(".answer5");
  const result2=returnEven(array);
  answer5.innerHTML = `Even numbers in Array are: ${result2}`;
}


 // Question 1.6

 function onlyOddNumbers(array){

   let odd=[];

   for(i=0;i<array.length;i++){
     if(array[i]%2!= 0){
     odd.push(array[i]);
     }
   }
   return odd;
 }

 function getOddNumbers() {
  const answer6 = document.querySelector(".answer6");
  const odd=onlyOddNumbers(array);
  answer6.innerHTML = `Odd numbers in Array are: ${odd}`;
}

//Question 1.7

 function averageValue(){
  
   let totalSum=0;
   let average=0;

   for(i=0;i<array.length;i++){
   totalSum+=array[i];
   average=totalSum/(array.length)
   }
   return average;
 }
 function calculateAverage() {
  const answer7 = document.querySelector(".answer7");
  const average=averageValue(array);
  answer7.innerHTML = `Average: ${average}`;
}


// // Question 1.8


 function removeDuplicates(array) {
   let uniqueArray = [];

   for (let i = 0; i < array.length; i++) {
     if (!uniqueArray.includes(array[i])) {
       uniqueArray.push(array[i]);
     }
   }
   return uniqueArray;
 }
 function removeDuplicate() {
  const answer8 = document.querySelector(".answer8");
  const uniqueArray=removeDuplicates(array);
  answer8.innerHTML = `Unique Values : ${uniqueArray}`;
}


// Question 1.9
 function medianValue(array) {
   array.sort((a, b) => a - b);

   let median;
   const middle = Math.floor(array.length / 2);

   if (array.length % 2 === 0) {
     median = (array[middle - 1] + array[middle]) / 2;
   } else {
     median = array[middle];
}  
   return median;
 }

 function getMedian() {
  const answer9 = document.querySelector(".answer9");
  const median=medianValue(array);
  answer9.innerHTML = `Median : ${median}`;
}


// Question 1.10

 function productOfArray(array){
   let product=0;

   for(i=0;i<array.length;i++){
     product*=array[i];
   }
   return product;
 }

 function multiplyByTwo() {
  const answer10 = document.querySelector(".answer10");
  const product=productOfArray(array);
  answer10.innerHTML = `Product : ${product}`;
}


// Question 2.1

 const namesElements=document.getElementById("question2");

 const students=["Herve","Matt","Poli","Bikaze","Yves","Blackie","Igor","Audrey",
   "Giannis","Gianna","Caleb","Arstide","Giscard","LastKing","Keita","Fofo-g","Okello","Godzilla","Audran","Bobo",
 ];


 function printEveryName(students){
   let studentNames=[];
   for(i=0;i<students.length;i++){
     studentNames.push(students[i]);
   }
   return studentNames;
 }
 function printEveryName(students) {
  // Join students array with <br> to separate each name with a line break
  return students.join("<br>");
}

function printNames() {
  const answer11 = document.querySelector(".answer11");
  const studentNames = printEveryName(students);
  answer11.innerHTML = `All names in array:${studentNames}`;
}

// Question 2.2

 function sortAlphabetically(students) {
   return students.sort();
 }
 function sortNames() {
  const answer12 = document.querySelector(".answer12");
  const sortedStudents = sortAlphabetically(students);
  answer12.innerHTML = `All names in array:${sortedStudents}`;
}

// Question 2.3

 function checkExistance(students){

   let name="Levy";

   for(i=0;i<students.length;i++){
     if(students[i]===name){
     return true;
       }
     }
     return false; 
   }  

 function checkName() {
  const answer13 = document.querySelector(".answer13");
  const found =checkExistance(students);
  answer13.innerHTML = `Name Existance:${found}`;
}


 // Question 2.4

 function findLongestName(students){
   let longestName="";

   for(i=0;i<students.length;i++){
     if(students[i].length>longestName.length){
       longestName=students[i];
     }
   }
   return longestName;
 }
 function findLongestNam() {
  const answer14 = document.querySelector(".answer14");
  const longestName=findLongestName(students);
  answer14.innerHTML = `Longest name in array:${longestName}`;
}

//Question 2.5

 function findMatchingNames(students){

   let matchingNames=[];
   let letter="B"; 
     for(i=0;i<students.length;i++){
    
       if(students[i][0].toLowerCase()===letter.toLowerCase()){
         matchingNames.push(students[i]);
       }
     }
   return matchingNames;
 }

 function namesStartingWithLetter() {
  const answer15 = document.querySelector(".answer15");
  const matchingNames=findMatchingNames(students);
  answer15.innerHTML = ` Names starting with B:${matchingNames}`;
}
 

 //Question 2.6

 function allNamesToUpperCase(students){

  let uppercaseNames=[];

   for(i=0;i<students.length;i++){
   uppercaseNames.push(students[i].toUpperCase());
   }
   return uppercaseNames;
 }
 function convertNamesToUpper() {
  const answer16 = document.querySelector(".answer16");
  const uppercaseNames=allNamesToUpperCase(students);
  answer16.innerHTML = ` Names to Uppercase : ${uppercaseNames}`;
}
 

// Question 2.7

 function removeName(students) {
   let  name = "Herve";
   let removed = false;

   for (let i = students.length- 1; i >= 0; i--) { 
    if (students[i] === name) {
       students.splice(i, 1); // remove the name at index i
       removed = true; // indicate that at least one name was removed
     }
   }
   return removed;
}

 function removeNam() {
  const answer17 = document.querySelector(".answer17");
  const removed=removeName(students);
  answer17.innerHTML =  ` was removed from array  : ${removed}`;
}
 

 //Question 2.8

 function countNamesWithLetterA(students){
   let letter="a";
   let names=[];

   for(i=0;i<students.length;i++){
     if(students[i][0].toLowerCase() ===letter.toLowerCase()){
       names.push(students[i]);
     }
     ;
   }
   return names + " the length is "+ names.length ;
 }
 function countNamesWithA() {
  const answer18 = document.querySelector(".answer18");
  const names=countNamesWithLetterA(students);
  answer18.innerHTML =  ` was removed from array  : ${names}`;
}


 //Question 2.9

 function concatenateNames(students) {
   return students.join(", ");
 }

 function concatenateName() {
  const answer19 = document.querySelector(".answer19");
  const concatenatedNames = concatenateNames(students);
  answer19.innerHTML =  `Names Concatenated: ${concatenatedNames}`;
}


 //Question 2.10

 function reverseStudentsNamesPosition(students){
   let reversedPosition=[];

   for(i=students.length-1;i>=0;i--){
   reversedPosition.push(students[i]);
   }
   return reversedPosition;
 }
 function reverseNamesArray() {
  const answer20 = document.querySelector(".answer20");
  const reversedPosition=reverseStudentsNamesPosition(students);
  answer20.innerHTML =  `Names in Reversed order  : ${reversedPosition}`;
}


// Question 21

 const person= {
   names:"Aime Pacifique",
   Age:21,
   Occupation:"Electrical Engineer",
   Gender:"Male"
 };

 // Question 22
 function formatedString(person) {
   let values = "";
   const keys = Object.keys(person);

   for (let i = 0; i < keys.length; i++) {
     const key = keys[i];
     values += `${key}: ${person[key]}\n`;  // Concatenate each property with a newline
   }

   return values;
 }

 function formatPersonInfo() {
  const answer22 = document.querySelector(".answer22");
  const values=formatedString(person);
  answer22.innerHTML =  `Person Object and properties: ${values}`;
}



//Question 23

 function addProperty(obj, key, value) {
  // let obj={}; 
  obj[key] = value;
   return obj;
 }

  function addPropert() {
  const answer23 = document.querySelector(".answer23");
  const city=addProperty(person, "city", "Kigali");
  answer23.innerHTML =  `Added property: ${JSON.stringify(city)}`;
}


 // Question 3.4

function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}

// Remove the "Gender" property
removeProperty(person, "Gender");

function removePropert() {
  const answer24 = document.querySelector(".answer24");
  // Use JSON.stringify to show the object properties in a readable format
  answer24.innerHTML = `Updated Person Object: <br>${JSON.stringify(person, null, 2)}`;
}

// Question 3.5

 function listAll(person){

 }

 // Question 3.6

 const car={
 car_name:"Lamborghini",
 color:"Black",
 year:2022,
 model:"Urus"
 };

 function mergeObjects(obj1, obj2) {
   return { ...obj1, ...obj2 };
 }


 function listProperties() {
  const answer26 = document.querySelector(".answer26");
  const merged = mergeObjects(person, car);
  answer26.innerHTML =  `Merged Objects: ${JSON.stringify(merged)}`;
}
 

 // Question 3.7

 function propertyExists(obj, key) {
   return obj.hasOwnProperty(key);
}
function checkProperty() {
  const answer27 = document.querySelector(".answer27");
  const exist = propertyExists(person, "names");
  answer27.innerHTML =  `Checks if names property exist: ${JSON.stringify(exist)}`;
}

 // Question 28

 function cloneObject(obj) {
   return { ...obj };
 }

 function cloneObject1() {
  const answer28 = document.querySelector(".answer28");
  const clone = cloneObject(person);
  answer28.innerHTML =  `Checks if names property exist: ${JSON.stringify(clone)}`;
}


 // Question 29

 const people = [
  { name: "Bob", age: 25, car:"Bugatti" },
  { name: "Alex", age: 30, car:"Ferrari" },
  { name: "Charlie", age: 35,car:"Lamborghini"}];

function printProperty(arr, key) {
  let value=[]; 
  for (let obj of arr) {
     if (obj.hasOwnProperty(key)) {
        value +=(obj[key]);
     }
   }
   return value;
 }
function printObjectProperty() {
  const answer29 = document.querySelector(".answer29");
  const value=printProperty(people, "car");
  answer29.innerHTML =  `Checks if names property exist: ${JSON.stringify(value)}`;
}


 // Question 30

 function updateProperty(obj, key, newValue) {
   if (obj.hasOwnProperty(key)) {
     obj[key] = newValue;
   }
   return obj;
 }
 function updateObjectProperty() {
  const answer30 = document.querySelector(".answer30");
  const Values= updateProperty(person, "Age", 22);
  answer30.innerHTML =  `Checks if names property exist: ${JSON.stringify(person)}`;
}


 // Question 31
 const str="Money Over Hoes";
 function reverseString(str) {
   let reversed = '';
   for (let i = str.length - 1; i >= 0; i--) {
       reversed += str[i];
   }
   return reversed;
}
 function reverseString1() {
  const answer31 = document.querySelector(".answer31");
  const reverse=reverseString(str);
  answer31.innerHTML =  ` Money String Reversed to: ${reverse}`;
}


 // Question 3.12

 function countVowels(str) {
   const vowels = 'aeiouAEIOU';
   let count = 0;
   for (let i = 0; i < str.length; i++) {
       if (vowels.includes(str[i])) {
           count++;
       }
   }
   return count;
 }
 function countVowels1() {
  const answer32 = document.querySelector(".answer32");
  const count=countVowels(str);
  answer32.innerHTML =  ` Money String Reversed to: ${count}`;
}

 // Question 3.13

 function toUpperCase(str) {
   let upperStr = '';
   for (let i = 0; i < str.length; i++) {
       const code = str.charCodeAt(i);
       if (code >= 97 && code <= 122) {
           upperStr += String.fromCharCode(code - 32);
       } else {
           upperStr += str[i];
       }
   }
   return upperStr;
 }
function convertToUpper() {
  const answer33 = document.querySelector(".answer33");
  const upperStr=toUpperCase(str);
  answer33.innerHTML =  ` Money converted ro UpperCase: ${upperStr}`;
}
// Question 34

 function stringLength(str) {
   let length = 0;
   for (let i = 0; str[i] !== undefined; i++) {
       length++;
   }
   return length;
 }
 function findStringLength() {
  const answer34 = document.querySelector(".answer34");
  const length=stringLength(str);
  answer34.innerHTML =  ` Length of Money: ${length}`;
}

// Question 35

function replaceSpacesWithHyphens(str) {
   let newStr = '';
   for (let i = 0; i < str.length; i++) {
       if (str[i] === ' ') {
           newStr += '-';
       } else {
           newStr += str[i];
       }
   }
   return newStr;
 }

  function replaceSpaces() {
    const answer35 = document.querySelector(".answer35");
    const newStr=replaceSpacesWithHyphens(str);
    answer35.innerHTML =  ` Length of Money: ${newStr}`;
  }
  
// Question 3.16
  const str1="Moneygram Everywhere";

  function extractFirst10Characters(str1) {
   let result = '';
   for (let i = 0; i < str1.length && i < 10; i++) {
       result += str1[i];
   }
   return result;
 }
 function extractFirstTenChars1() {
  const answer36 = document.querySelector(".answer36");
  const r=extractFirst10Characters(str1);
  answer36.innerHTML = ` 10 First Chars: ${r}`;
}



// Question 37

 const str2="Hello Beautiful people";
 const target="Beautiful";
 const replacement="Interesting";

 function findAndReplaceWord(str2, target, replacement) {
   let result = '';
   let i = 0;
   while (i < str2.length) {
       if (str2.slice(i, i + target.length) === target) {
           result += replacement;
           i += target.length;
       } else {
           result += str2[i];
           i++;
       }
   }
  return result;
 }
 function findAndReplaceWord1() {
  const answer37 = document.querySelector(".answer37");
  const re=findAndReplaceWord(str2,target,replacement);
  answer37.innerHTML = ` Replacing String Beautiful: ${re}`;
}

 

 //Question 3.18

 function splitIntoWords(str) {
   let words = [];
   let word = '';
   for (let i = 0; i < str.length; i++) {
       if (str[i] === ' ') {
           if (word) {
               words.push(word);
               word = '';
           }
       } else {
           word += str[i];
       }
   }
   if (word) words.push(word); // Push the last word
   return words;
 }

 function splitString() {
  const answer38 = document.querySelector(".answer38");
  const words=splitIntoWords(str);
  answer38.innerHTML = ` Split  String: ${words}`;
}

 

 // Question 3.19

 const str3="Money12345678";

 function removeNumbers(str3) {
   let result = '';
   for (let i = 0; i < str3.length; i++) {
       if (!isFinite(str3[i])) {
           result += str3[i];
       }
   }
   return result;
 }
 
 function removeNumbers1() {
  const answer39 = document.querySelector(".answer39");
  const remove=removeNumbers(str3);
  answer39.innerHTML = ` remove String: ${remove}`;
}

 // Question 40
const brand = "Bugatti La Noire";
const ins = "i";
 const position = 7;

 function insertStringAtPosition(brand, ins, position) {
   let result = '';
  
for (let i = 0; i < brand.length; i++) {
       if (i === position) {
           result += ins;  // Insert the new string at the specified position
       }
  result += brand[i];  // Append the current character
   }
  
   // If position is equal to the brand's length, append the ins string at the end
   if (position >= brand.length) {
       result += ins; // Optionally append at the end if position is beyond current length
   }
  
   return result;
 }

 // Call the function and log the result
 
 function insertString() {
  const answer40 = document.querySelector(".answer40");
  const insert = insertStringAtPosition(brand, ins, position);
  answer40.innerHTML = ` Insert String: ${remove}`;
}


// Question 41
 function changeBackgroundColor(color) {
   document.body.style.backgroundColor = color;
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('changeColorButton').addEventListener('click', function() {
   changeBackgroundColor('lightblue'); // Change to desired color
 });

 // Question 42

 const element=document.getElementById('elementId');

 function hideElement(elementId) {
   const element = document.getElementById(elementId);
   if (element) {
       element.style.display = 'none';
   }
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('hideButton').addEventListener('click', function() {
   hideElement('elementToHide');
 });

 // Question 43

function createParagraph(text) {
   const paragraph = document.createElement('p');
  paragraph.textContent = text;
   document.body.appendChild(paragraph);
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('addParagraphButton').addEventListener('click', function() {
   createParagraph('This is a new paragraph.');
 });

 // Question 44

 function removeAllListItems(listId) {
   const list = document.getElementById(listId);
   if (list) {
       list.innerHTML = ''; // Clear all list items
   }
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('removeListItemsButton').addEventListener('click', function() {
   removeAllListItems('myList'); // Replace 'myList' with the actual id
 });

 // Question 45

 function changeTextContent(elementId, newText) {
  const element = document.getElementById(elementId);
   if (element) {
       element.textContent = newText;
   }
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('changeTextButton').addEventListener('click', function() {
   changeTextContent('textElementId', 'New text content!'); // Replace 'textElementId' with the actual id
 });

 // Question 46

 function toggleClass(elementId, className) {
   const element = document.getElementById(elementId);
   if (element) {
       element.classList.toggle(className);
   }
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('toggleClassButton').addEventListener('click', function() {
   toggleClass('elementId', 'active'); // Replace 'elementId' and 'active' with actual values
 });

 // Question 47
 function countDivs() {
   const divs = document.getElementsByTagName('div');
   return divs.length;
 }

function changeText() {
  const answer47 = document.querySelector(".answer47");
  const n=countDivs();
  answer47.innerHTML = `There are : ${n} divs `;
}


 // Question 48

 function displayInputValue(inputId, paragraphId) {
   const inputValue = document.getElementById(inputId).value;
   const paragraph = document.getElementById(paragraphId);
   if (paragraph) {
       paragraph.textContent = inputValue;
}
 }

 // Example usage: call this function when a button is clicked
 document.getElementById('displayInputButton').addEventListener('click', function() {
   displayInputValue('myInput', 'displayParagraph'); // Replace with actual ids
 });

 // Question 49

 function createTable() {
  const table = document.createElement('table');
  for (let i = 0; i < 3; i++) {
      const row = table.insertRow();
      for (let j = 0; j < 3; j++) {
          const cell = row.insertCell();
          cell.textContent = `Row ${i + 1}, Cell ${j + 1}`;
      }
  }
  document.body.appendChild(table); // Append table to the body

  // Call function to update answer49
  addElementWithText(table);
}

function addElementWithText(table) {
  const answer49 = document.querySelector(".answer49");
  // Use innerHTML to show the table element
  answer49.innerHTML = 'Table created:';
  answer49.appendChild(table.cloneNode(true)); // Clone and append the table to answer49
}

// Example usage: call this function when a button is clicked
document.getElementById('createTableButton').addEventListener('click', createTable);

 // Question 50
 // Create the form and input fields dynamically
function createForm() {
  const form = document.createElement('form');
  form.id = 'myForm';

  // Create name input
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'nameInput');
  nameLabel.textContent = 'Name:';
  form.appendChild(nameLabel);
  
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'nameInput';
  nameInput.required = true;
  form.appendChild(nameInput);
  form.appendChild(document.createElement('br'));

  // Create email input
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'emailInput');
  emailLabel.textContent = 'Email:';
  form.appendChild(emailLabel);
  
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'emailInput';
  emailInput.required = true;
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));

  // Create password input
  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'passwordInput');
  passwordLabel.textContent = 'Password:';
  form.appendChild(passwordLabel);
  
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'passwordInput';
  passwordInput.required = true;
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));

  // Create validate button
  const validateButton = document.createElement('button');
  validateButton.type = 'button';
  validateButton.id = 'validateButton';
  validateButton.textContent = 'Validate';
  form.appendChild(validateButton);

  document.body.appendChild(form);

  // Add event listener to validate button
  validateButton.addEventListener('click', function() {
      const name = nameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      validateForm(name, email, password);
  });
}

// Validation function
function validateForm(name, email, password) {
  if (!name || !email || !password) {
      alert('Please fill all fields!');
      return false;
  }
  alert('Form is valid!');
  return true;
}

// Create the form on page load
createForm();
