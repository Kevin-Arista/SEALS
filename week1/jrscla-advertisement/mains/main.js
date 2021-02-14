function myDisplay(){
    document.getElementById('sub-title').innerHTML= "Check your information";

    let displayfname = document.getElementById('fname1').value;
    document.getElementById('display-fname1').innerHTML= "First Name:" + displayfname;

    let displaylname = document.getElementById('lname1').value;
    document.getElementById('display-lname1').innerHTML= "Last Name:" + displaylname;

    let displayemail = document.getElementById('email1').value;
    document.getElementById('display-email1').innerHTML= "Email:" + displayemail;

    let displaypassword = document.getElementById('password1').value;
    document.getElementById('display-password1').innerHTML= "Passord:" + displaypassword;
}


function myAlert(){
    document.getElementById('sub-title').innerHTML= "Check your information";

    let displayfname = document.getElementById('fname1').value;
    document.getElementById('display-fname1').innerHTML= "First Name:" + displayfname;

    let displaylname = document.getElementById('lname1').value;
    document.getElementById('display-lname1').innerHTML= "Last Name:" + displaylname;

    let displayemail = document.getElementById('email1').value;
    document.getElementById('display-email1').innerHTML= "Email:" + displayemail;

    let displaypassword = document.getElementById('password1').value;
    document.getElementById('display-password1').innerHTML= "Passord:" + displaypassword;

    alert('Firt Name:' + displayfname + '\n' + 'Last Name' + displaylname + '\n' + 'Email:' + displayemail + '\n' + 'Password:' + displaypassword);
}

var figlet = require('figlet');
 
figlet('Kevin Arista', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});