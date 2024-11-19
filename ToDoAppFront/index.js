const signUp = document.getElementById("signup");
signUp.addEventListener("click",register)

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
 
    // window.location.href = "/login.html";
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
}
