
 var email1 = document.getElementById('email');
 var cel1 = document.getElementById('cel');
 var emri = document.getElementById('name');
 var patternAphabet = /^[A-Za-z]{1,20}$/;
 var patternNumber = /^[0-9]{13}$/;
 var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

 var message1 = document.getElementById('message');



window.addEventListener( "load", start);

function start()
{
    
    document.getElementById( "submit" ).addEventListener("click", validation ); 
    
}

function validation()
{
    
    if(email1.value == "" || email1.value  == null)
    {
        document.getElementById("emailMessage").innerText = "Email can not be empty";

    }
    else if ( email1.value.match(patternEmail)){
        alert("You have entered an invalid email address!");
    }
    else 
    alert("OK");


    if (emri.value == "" || emri.value == null) {
             document.getElementById("nameMessage").innerText = "Name can not be empty"

            } else if (!emri.value.match(patternAphabet)) {
             document.getElementById("nameMessage").innerText = "Name must contain only aphanumeric value"
             
         } else {
             document.getElementById("nameMessage").innerText = ""
         }

     if (cel.value == "" || cel.value == null) {
             document.getElementById("celMessage").innerText = "Phone can not be empty"
             
         } else if (!cel.value.match(patternAphabet)) {
            document.getElementById("celMessage").innerText = "Phone must contain only numeric value and 13 numbers"
             
        } else {
             document.getElementById("celMessage").innerText = ""

        }


}

