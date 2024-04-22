const valid=()=>{
  let a =[document.getElementById("password"),
   document.getElementById("password2")];
  let c = document.getElementById("email");
  if(a[0].value==a[1].value){
    alert("password matched");
  }
  else{
    alert("password not matched");
  }
  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex pattern
    return emailRegex.test(email);
  }
  if(validateEmail(c.value)==true){
    alert("email is valid");
  }
  else{
    alert("email is not valid");
  }
}