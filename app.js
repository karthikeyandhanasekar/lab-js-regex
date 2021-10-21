/* Fill your code*/

window.onload = () => document.querySelector(".alert").innerHTML = "Kindly fill this field"
function formValidate() {


    // get form
    let Form = document.forms['RegForm']

    //get input values
    let name = Form.Name.value
    let address = Form.Address.value
    let email = Form.EMail.value
    let password = Form.Password.value
    let confirmpassword = Form.cPassword.value
    let phone = Form.phone.value
    // alert(name + address + email + password + confirmpassword + phone)


    //set pattern
    let namepattern = /[a-zA-Z0-9]{8,15}/g
    let addresspattern = /[a-zA-Z0-9]+/g
    let emailpattern = /[a-zA-Z0-9\,\_]+\@{1}[a-zA-Z0-9]+\.[a-z]{2,3}$/g
    let passwordpattern = /[A-Z]+[a-z]+[0-9]+[\!\@\#\$\%\^\&\*\(\)]+/g


    //test name field
    if (!namepattern.test(name))
        document.querySelector("#name").innerHTML = "Atleast 8 to 15 characters Required"
    else
        document.querySelector("#name").innerHTML = ""


    //test address field
    if (!addresspattern.test(address))
        document.querySelector("#address").innerHTML = "Address should not be empty"
    else
        document.querySelector("#address").innerHTML = ""

    //email pattern
    if (!emailpattern.test(email))
        document.querySelector("#email").innerHTML = "Enter valid Email"
    else
        document.querySelector("#email").innerHTML = ""

    //password pattern
    if (!passwordpattern.test(password))
        document.querySelector("#pwd").innerHTML = "password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and atleast 1 symbol"
    else
        document.querySelector("#pwd").innerHTML = ""
    






    return false
}