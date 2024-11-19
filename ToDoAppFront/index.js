const signUp = document.getElementById("signup");
signUp.addEventListener("click", register);

const registerEmail = document.getElementById("registrationemail");
const registerPassword = document.getElementById("registrationPassword");
const registerName = document.getElementById("registrationName");

async function register() {
  try {
    let response = await fetch("http://localhost:5001/users/register", {
      method: "POST",
      body: JSON.stringify({
        email: registerEmail.value,
        password: registerPassword.value,
        username: registerName.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Registration failed!");
    }

    const data = await response.json();
    console.log("Registration successful", data);
    alert("Registration successful")
  } 
  catch (error)
   {
    console.error("Error during registration:", error.message);
  }
}

const loginEmail = document.getElementById("loginemail");
const loginPassword = document.getElementById("loginpassword");
const loginbutton = document.getElementById("loginbutton");

// loginbutton.addEventListener("click", login);
loginbutton.addEventListener("click",login)
async function login() {
  try{
    let response = await fetch("http://localhost:5001/users/login",{
      method:"POST",
      body:JSON.stringify({
        email:loginEmail.value.trim(),
        password:loginPassword.value.trim()
      }),
      headers:{
        "Content-Type":"application/json"
      }

    })
    if(!loginEmail.value.trim()||!loginPassword.value.trim()){
      alert("Email ve sifre bos ola bilmez")
      return;
    }
    if(!response.ok){
      throw new Error("Login failed ,server not accept request")
    }
    let data =await response.json()
    console.log("Login succesful",data)
  }


  catch(error){
    console.error(error);
  }
}