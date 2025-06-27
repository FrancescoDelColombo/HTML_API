function toggleMenu(){
    const links=document.querySelector('.nav-links');
    links.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', function (event){

    console.log(event);
    event.preventDefault();

    const formData = new FormData(event.target);

    const Nome = formData.get('name');
    const Cognome = formData.get('lastname');
    const EMail = formData.get('email');
    const DataNascita = formData.get('DOB');
    const Messaggio = formData.get('message');

    var IsValid = validate(Nome, Cognome, EMail, DataNascita, Messaggio);

    if(!IsValid){
      console.error("validation failed!");
      return;
    }

    cleanup();

    /*const response = await fetch("", {
      method:"POST",
      body: formData.
    }).then(()=>showmessage())
    .error(()=>console.log("server error"));*/
    
});

function validate(Nome, Cognome, EMail, DataNascita, Messaggio){

  let result=true;

  if (Nome=="") {
    document.getElementById("name").classList.add("error-input");
    result=false;
  }
  if (Cognome=="") {
    document.getElementById("lastname").classList.add("error-input");
    result=false;
  }
  if (EMail=="") {
    document.getElementById("email").classList.add("error-input");
    result=false;
  }
  if (DataNascita=="") {
    document.getElementById("DOB").classList.add("error-input");
    result=false;
  }
  if (Messaggio=="") {
    document.getElementById("message").classList.add("error-input");
    result=false;
  }

  return result;
}

function cleanup(){
  
  document.getElementById("name").value=="";
  document.getElementById("lastname").value=="";
  document.getElementById("email").value=="";
  document.getElementById("DOB").value=="";
  document.getElementById("message").value=="";
}


document
  .getElementById("consents")
  .addEventListener("change", async function () {
    if (this.checked) {
      document.getElementById("send-form-button").disabled = false;
    } else {
      document.getElementById("send-form-button").disabled = true;
    }
  });

const input = document.getElementById("name");
input.addEventListener("click", function() {
  console.log("Input cliccato!");
  this.classList.remove('error-input');
});
