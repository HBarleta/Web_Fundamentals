function removeButton(element){
  element.remove();
}

function signIn(element){
  if(element.innerText === "Login"){
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
  
}