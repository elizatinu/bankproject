
class Bank {
    static getData(){

        var accountDetails = {
            userone: { acno: 1000, name: "tinu", bal: 20000, username: "username", password: "testuser" },
            usertwo: { acno: 1001, name: "tonu", bal: 10000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, name: "tanu", bal: 15000, username: "userthree", password: "testuser2" }
        }
        return accountDetails
    }
    static login(){
        let uname = document.querySelector("#username").value//userone
        let pwd = document.querySelector("#password").value//test
        let dataset = Bank.getData()
        /*
        {
            userone:{acno: 1000, name: "tinu", bal: 20000, username: "username", password: "testuser"},
            usertwo:{acno: 1001, name: "tonu", bal: 10000, username: "usertwo", password: "testuser1"},
            userthree:{acno: 1002, name: "tanu", bal: 15000, username: "userthree", password: "testuser2"}
        }*/
        //chk uname present inside dataset
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                alert("login successful")
                window.location.href = "userhome.html"
            }
            else {
                alert("incorrect password")
            }

        }
        else {
            alert("no user exist with provided username")
        }
    }
    static deposit(){
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt =Number( document.querySelector("#amt").value)
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                dataset[uname].balance += amt
                alert("your acccount credited with amount" + amt + "aval bal=" + dataset[uname].balance)
            }
            else {
                alert("incorrect password")
            }

        }
        else {
            alert("no user exist with provided username")
        }
    }
    static withdraw(){
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt =Number( document.querySelector("#amt").value)
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                if(dataset[uname].balance>=amt){
                dataset[uname].balance -= amt
                alert("your acccount credited with amount" + amt + "aval bal=" + dataset[uname].balance)
            }
            else{
                alert("insufficient balance")
            }
        }
            else {
                alert("incorrect password")
            }

        }
        else {
            alert("no user exist with provided username")
        }
    }
}


//var username="test"
//var password="test2"
//check for 1000 acno exist or not
//if exist print personname
//if(1000 in accountDetails){
//    console.log(accountDetails[1000]["name"])
//}
//else{
//    console.log("account number doesnot exist")
//}