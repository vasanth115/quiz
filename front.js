var islogin=false;
var nameid;

let signupbtn = document.getElementById("signup");
let signinbtn = document.getElementById("signin");
let container = document.getElementById("container");

signupbtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signinbtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});



const allstar=document.querySelectorAll(".rating .star")
        const ratingValue=document.querySelector('.rating input')
        allstar.forEach((item,idx)=>{
            item.addEventListener('click',function(){
                let click=0;
                ratingValue.value=idx+1;
                allstar.forEach(i=>{
                    i.classList.replace('bxs-star','bx-star')
                    i.classList.remove('active')
                })
                for(let i=0;i<allstar.length;i++)
                {
                    if(i<=idx)
                    {
                        allstar[i].classList.replace('bx-star','bxs-star')
                        allstar[i].classList.add('active')
                    }
                    else{
                        allstar[i].style.setProperty('--1',click)
                        click++
                    }
                }
            })
        })


        document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.section').style.display = 'block';
        }, 4000); // 4 seconds
});

// signin/signup btn

let loginbtn = document.getElementById("loginbtn");
let sectionpage = document.getElementById("section");
let body = document.getElementById("body");

loginbtn.addEventListener("click", () => {
    sectionpage.style.display = 'none';
    document.querySelector('.preloader-login').style.display = 'flex'; 
    setTimeout(function() {
        document.querySelector('.preloader-login').style.display = 'none'; 
        body.style.display = "flex";
    }, 1000);
});


// fire base

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child,update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";



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

       let name=document.getElementById("name1");
       let pass=document.getElementById("password1");
       let mailid=document.getElementById("mail1");
       let number=document.getElementById("phoneNumber");
     

     const db = getDatabase(app);

             document.getElementById("signupbtn").addEventListener('click', function(e){
             console.log(name.value)
              e.preventDefault();
              let result="";
              for(let i=0;i<mailid.value.length;i++)
              {
                if(mailid.value.charAt(i)!='@')
                {
                    result+=mailid.value.charAt(i);
                }
                else
                {
                    break;
                }
              }
             console.log(result);
              set(ref(db, 'user/' + result),
              {
 
                username: name.value,
                email: mailid.value,
                Password: pass.value,
                PhNumber:number.value
              });
              localStorage.setItem("username",name.value)
                alert("SignUp Sucessfull ! ! !");
             })
        

             const db1 = getDatabase(app);


             function loginUser() {
                let unit = document.getElementById("mail2").value;
                let pass = document.getElementById("password2").value;
            
                let temp = "";
                for (let i = 0; i < unit.length; i++) {
                    if (unit.charAt(i) !== '@') {
                        temp += unit.charAt(i);
                    } else {
                        break;
                    }
                }
            
                let userRef = ref(db1, 'user/' + temp);
            
                get(userRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
            
                        if (userData.email === unit && userData.Password === pass) {
                            islogin=true;
                            body.style.display = "none";
                            document.querySelector('.preloader-login').style.display = 'flex'
                            setTimeout(function() {
                            document.querySelector('.preloader-login').style.display = 'none'; 
                            sectionpage.style.display="block";
                            },3000);
                            nameid=userData.username;

                            localStorage.setItem("mail",temp);
                            changingprofile();
                        } else {
                            alert("Incorrect email or password. Please try again.");
                        }
                    } else {
                        alert("User does not exist. Please sign up first.");
                    }
                }).catch((error) => {
                    console.error("Error getting user data:", error);
                });
            }
            
            document.getElementById("SIGNINBTN").addEventListener('click', function(e) {
                e.preventDefault();
                loginUser();
            });
            

// changing the login to userprofile

function changingprofile()
{
    let loginbutton=document.getElementById("login");
    let profile=document.getElementById("person");
    let nameuser=document.getElementById("username");
    nameuser.innerHTML=nameid;
    loginbutton.style.display="none";
    profile.style.display="flex";
    console.log(islogin);
}


let javabtn=document.getElementById("javabtn");
let java=document.getElementById("java");
javabtn.addEventListener("click",()=>{
  if(islogin==true)
  {
    sectionpage.style.display="none";
    document.querySelector('.preloader-login').style.display = 'flex'
    setTimeout(function() {
        document.querySelector('.preloader-login').style.display = 'none'; 
        java.style.display="block";
    }, 1000);
  }
  else
  {
    alert("You Not Logined Yet ...")
  }
})

let backbtn=document.getElementById("backbtn");
backbtn.addEventListener("click",()=>{
    java.style.display="none";
    document.querySelector('.preloader-login').style.display = 'flex'
    setTimeout(function() {
        document.querySelector('.preloader-login').style.display = 'none'; 
        sectionpage.style.display="block";
    }, 1000);
})


// ratings added to database


let starbtnsubmit=document.getElementById("star");
starbtnsubmit.addEventListener("click",addrating);
function addrating()
{
   if(islogin==false)
   {
     alert("You Not Logged Yet...");
   }
   else
   {
    const userRef = ref(db, 'user/' + localStorage.getItem("mail"));
    let textarea=document.getElementById("textarea").value;

    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val(); 
               
            // Construct an object with the data you want to update.
            const updateData = {
                ratings: ratingValue.value,
                review : textarea
            };

            // Update the data on the Firebase Realtime Database.
            update(child(userRef, "Ratings"), updateData).then(() => {
                alert("Rating added to the database");
            }).catch((error) => {
                console.error("Error adding rating to the database: ", error);
            });
        }
    });
   }
}

// toggle password

const passwordInput = document.getElementById('password1');
const toggleCheckbox = document.getElementById('toggleCheckbox');
const showhide=document.getElementById("showhide");

toggleCheckbox.addEventListener('change', function() {
  if (toggleCheckbox.checked) {
    passwordInput.type = 'text';
    showhide.innerHTML="Hide";
  } else {
    passwordInput.type = 'password';
    showhide.innerHTML="Show";
  }
});


const passwordInput1 = document.getElementById('password2');
const toggleCheckbox1 = document.getElementById('toggleCheckbox1');
const showhide1=document.getElementById("showhide1");

toggleCheckbox1.addEventListener('change', function() {
    if (toggleCheckbox1.checked) {
      passwordInput1.type = 'text';
      showhide1.innerHTML="Hide";
    } else {
      passwordInput1.type = 'password';
      showhide1.innerHTML="Show";
    }
  });
  

//   let javabutton=document.getElementById("javabutton");
//   javabutton.addEventListener("click",()=>{
//     window.location.href="quizpage.html"
//   })