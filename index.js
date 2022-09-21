var defaultValue =  {name:'karan', email:'karan@1323', Password : '123'}
var userDertail = [defaultValue];

signin.addEventListener("click", () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Password = document.getElementById("Password").value;
    var phone = document.getElementById("phone").value;
    var Address = document.getElementById("Address").value;
    var City = document.getElementById("City").value;
    var State = document.getElementById("State").value;
    var Pincode = document.getElementById("Pincode").value;
    var Country = document.getElementById("Country").value;
    var cName = document.getElementById("cName").value;
    var occupation = document.getElementById("occupation").value;
    var exaperience = document.getElementById("exaperience").value;
    if (name == "" || email == "" || Password == "" || phone == "" || Address == "" || City == "" || State == "" || Pincode == "" || Country == "" || cName == "" || occupation == "" || exaperience == "") {
        alert("please fill all detail");

    } else {

        var newUser = {
            name: name,
            email: email,
            Password: Password,
            phone: phone,
            Address: Address,
            City: City,
            State: State,
            Pincode: Pincode,
            Country: Country,
            cName: cName,
            occupation: occupation,
            exaperience, exaperience
        }
        userDertail.push(newUser);
        sForm.reset();
        alert("User success fully register")
    }
})

login.addEventListener("click", ()=>{
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;
    n = userDertail.length;
    for(i = 0;i < n; i++){
        console.log(i);
        if (uname == userDertail[i].email && psw == userDertail[i].Password) {
            alert(uname, " Is login")
        }else{
            alert("Something is wrong");
        }
    }

})