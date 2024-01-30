let array = [
   {
       question: "What is an array in Java?",
       option1: "A collection of unrelated elements",
       option2: "A data structure that stores elements of the same",
       option3: "A linked list",
       option4: " A stack",
       answer: "A data structure that stores elements of the same"
   },
   {
      question: "How do you declare an array in Java?",
      option1: "int[] myArray = new int[];",
      option2: "int myArray[] = new int[];",
      option3: "int[] myArray = new int[10];",
      option4: "int myArray = new int[10];",
      answer: "int[] myArray = new int[10];"
  },
  {
   question: "What is the default value for an integer element in a Java array?",
   option1: "0",
   option2: "-1",
   option3: "null",
   option4: "undefined",
   answer: "0"
},
{
   question: "Which of the following statements is used to access an element in a one-dimensional array in Java?",
   option1: "myArray(index)",
   option2: "myArray[index]",
   option3: "myArray{index}",
   option4: "myArrayindex",
   answer: "myArray[index]"
},
{
   question: "What is the maximum number of dimensions allowed for an array in Java?",
   option1: "1",
   option2: "2",
   option3: "3",
   option4: "4",
   answer: "4"
},
{
   question: "How do you find the length (number of elements) of an array in Java?",
   option1: "myArray.length()",
   option2: "myArray.size()",
   option3: "myArray.length",
   option4: "myArray.size",
   answer: "myArray.length"
},
{
   question: "Which keyword is used to initialize a two-dimensional array in Java?",
   option1: "initialize",
   option2: "new",
   option3: "allocate",
   option4: "initializeArray",
   answer: "new"
},
{
   question: "What is the difference between an array and an ArrayList in Java?",
   option1: "Arrays are resizable, while ArrayLists have a fixed size.",
   option2: "Arrays can store elements of different data types, while ArrayLists ",
   option3: "Arrays are more memory-efficient than ArrayLists.",
   option4: "Arrays have a fixed size, while ArrayLists can dynamically resize.",
   answer: "Arrays have a fixed size, while ArrayLists can dynamically resize."
},
{
   question: "How do you iterate through the elements of an array in Java?",
   option1: "Using a for loop",
   option2: "Using a while loop",
   option3: "Using a do-while loop",
   option4: "Using a switch statement",
   answer: "Using a for loop"
},
{
   question: "What is the index of the first element in a Java array?",
   option1: "0",
   option2: "1",
   option3: "-1",
   option4: "it depends on the array size",
   answer: "0"
},
{
   question: "What is the role of the length property in Java arrays?",
   option1: "It stores the maximum size of the array.",
   option2: "It stores the number of elements currently in the array.",
   option3: "It is used to access the last element of the array.",
   option4: "It is not a valid property for arrays.",
   answer:"It stores the number of elements currently in the array."
},
{
   question: "How do you initialize an array in Java without specifying its size?",
   option1: "int[] numbers = new int[] {1, 2, 3};",
   option2: "int numbers[] = {1, 2, 3};",
   option3: " int numbers[3] = {1, 2, 3};",
   option4: "int[3] numbers = {1, 2, 3};",
   answer: "int numbers[] = {1, 2, 3};"
},
{
   question: "What is the term for an array that has not been initialized with values?",
   option1: "Empty array",
   option2: "Null array",
   option3: "Zeroed array",
   option4: "Uninitialized array",
   answer: "Uninitialized array"
},
{
   question: "How do you delete an element from an array in Java?",
   option1: "Use the delete() method.",
   option2: " Assign null to the element you want to delete.",
   option3: "Use the remove() method.",
   option4: "Arrays in Java do not support element deletion.",
   answer: "Arrays in Java do not support element deletion."
},
{
   question: "Which of the following is a valid way to copy the contents of one array into another in Java?",
   option1: "array1.copy(array2);",
   option2: "array1 = array2.copy();",
   option3: "System.arraycopy(array1, 0, array2, 0, array1.length);",
   option4: "array1 = array2;",
   answer: "System.arraycopy(array1, 0, array2, 0, array1.length);"
},
{
   question: "What happens if you try to access an index that is out of bounds in an array?",
   option1: "The program terminates with an error.",
   option2: "The element at the invalid index is set to null.",
   option3: "Java automatically resizes the array.",
   option4: "It returns the last element of the array.",
   answer: "The program terminates with an error."
},
{
   question: "How can you find the maximum value in an array of integers?",
   option1: "Use a loop to compare each element and keep track of the maximum.",
   option2: "Use the max() method of the array.",
   option3: "Sort the array in ascending order, and the last element will be the maximum.",
   option4: "Use the findMax() method.",
   answer: "Use a loop to compare each element and keep track of the maximum."
},
{
   question: "Which of the following is NOT a valid data type for an array in Java?",
   option1: "int[]",
   option2: "String[]",
   option3: "double[]",
   option4: "char[]",
   answer: "char[]"
},
{
   question: "What is the time complexity of accessing an element in an array by its index in Java?",
   option1: "O(1)",
   option2: "O(log N)",
   option3: "O(N)",
   option4: "O(N^2)",
   answer: "O(1)"
},
{
   question: "How do you find the index of a specific element in an array?",
   option1: "Use the indexOf() method.",
   option2: " Iterate through the array and compare each element.",
   option3: "Use the findIndex() method.",
   option4: "Arrays in Java do not have a built-in way to find the index of an element.",
   answer: " Iterate through the array and compare each element."
}
   
];

let k = 0;
var rate=0;
let second = 20;
let sno = document.getElementById("sno");
let question = document.getElementById("question");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let startcontainer = document.getElementById("startcontainer");
let wrapper = document.getElementById("wrapper");
let qno = document.getElementById("qno");
let score = document.getElementById("score");
let time = document.getElementById("time");
qno.innerHTML = array.length;
let scores = 0;
let testbtn=document.getElementById("testbtn");
testbtn.addEventListener("click",start);

document.addEventListener("keyup",(event)=>{
   if(event.code=="Enter")
   {
      start();
   }
   else if(event.code=="Backspace")
   {
      back();
   }
})

function start() {
   startcontainer.style.display = "none";
   wrapper.style.display = "block";
   update();
}

function update() {
   second = 20;
   score.innerHTML = scores;
   sno.innerHTML = k + 1;
   question.innerHTML = array[k].question;
   opt1.innerHTML = array[k].option1;
   opt2.innerHTML = array[k].option2;
   opt3.innerHTML = array[k].option3;
   opt4.innerHTML = array[k].option4;
   clearInterval(timer);
   timer = setInterval(timechange, 1000);
}


document.querySelectorAll('[onclick="select(this.id)"]').forEach(element => {
   element.onclick = () => select(element.id);
});
function select(eventid) {
   let clickedid = document.getElementById(eventid);
   let word = clickedid.innerHTML;
   if (word === array[k].answer) {
      clickedid.classList.toggle("green");
      k++;
      scores++;
      setTimeout(cssupdate, 1000);
      changequestion();
   } else {
      clickedid.classList.toggle("red");
      k++;
      setTimeout(cssupdate, 1000);
      changequestion();
   }
}

function cssupdate() {
   opt1.classList.remove("green");
   opt2.classList.remove("green");
   opt3.classList.remove("green");
   opt4.classList.remove("green");
   opt1.classList.remove("red");
   opt2.classList.remove("red");
   opt3.classList.remove("red");
   opt4.classList.remove("red");
}

let timer = setInterval(timechange, 1000);

function timechange() {
   second--;
   time.innerHTML = second;
   if (second === 0) {
      k++;
      changequestion();
   }
}

function changequestion() {
   if (k + 1 > array.length) {
      clearInterval(timer);
      setTimeout(Resultquiz, 1000);
   } else {
      clearInterval(timer);
      second = 20;
      setTimeout(update, 1000);
   }
}

function Resultquiz() {
   wrapper.style.display = "none";
   let show = document.getElementById("show");
   let scoreshow = document.getElementById("scoreshow");
   scoreshow.style.display = "flex";
   bar();
}

function back() {
   window.history.back();
}

function bar()
{
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = scores*5;
let speed = 80;
var rate=rate+progressEndValue;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #0E0E0E ${progressValue * 3.6}deg,
      #034731 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
    add(progressEndValue);
  }
}, speed);
}


// database work

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get, child, update as updateDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
   apiKey: "AIzaSyAseNADDgo6lzHNGBb5fHIHmQYTZqz4kF0",
    authDomain: "tech-test-62abd.firebaseapp.com",
    projectId: "tech-test-62abd",
    storageBucket: "tech-test-62abd.appspot.com",
    messagingSenderId: "86653276561",
    appId: "1:86653276561:web:d36aea88828a292206ca30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function add(itemrate) {

   const userRef = ref(db, 'user/' + localStorage.getItem("mail"));

   get(userRef).then((snapshot) => {
       if (snapshot.exists()) {
           const userData = snapshot.val(); 
              
           // Construct an object with the data you want to update.
           const updatepoints = {
               points : itemrate
           };

           // Update the data on the Firebase Realtime Database.
           updateDatabase(child(userRef, "JavaBasics"), updatepoints).then(() => {
               alert("Rating added to the database");
           }).catch((error) => {
               console.error("Error adding rating to the database: ", error);
           });
       }
   });
}
