
class Bank {

    static getData = () => {

        var accountDetails = {
            userone: { acno: 1000, name: "sajay", bal: 10000, username: "userone", password: "testuser" },
            usertwo: { acno: 1001, name: "sajay", bal: 20000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, name: "sajay", bal: 25000, username: "userthree", password: "testuser2" }
        }

        return accountDetails

    }

    static authenticateUser=(uname,pwd)=>{
        let dataset = Bank.getData()

        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                
                return 1;//valid user password
            }

            else {
                return 0;//invalid password
            }
        }

        else {
            return -1;//no user exist
        }
    }




    static login = () => {
        let uname = document.querySelector("#username").value
        let pwd = document.querySelector("#password").value
        let us=Bank.authenticateUser(uname,pwd)

        if(us==1){
            alert("login successful")
                window.location.href = "userHome.html"
        }

        else if(us==0){
            alert("incorrect password")
        }

        else if(us==-1){
            alert("no user exist with provided username")
        }
        // let dataset = Bank.getData()

        // if (uname in dataset) {
        //     if (dataset[uname].password == pwd) {
        //         alert("login successful")
        //         window.location.href = "userHome.html"
        //     }

        //     else {
        //         alert("incorrect password")
        //     }
        // }

        // else {
        //     ("no user exist with provided username")
        // }
    }

    static deposit = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let us=Bank.authenticateUser(uname,pwd)

        let dataset = Bank.getData()

        if(us==1){
            dataset[uname].bal += amt
               alert("your account credited with amount" + amt + " avl balance=" + dataset[uname].bal)

        }

        else if(us==0){
            alert("incorrect password")
        }

        else if(us==-1){
            alert("no user exist with provided username")
        }
        // let dataset = Bank.getData()


        // if (uname in dataset) {
        //     if (dataset[uname].password == pwd) {
        //         dataset[uname].bal += amt
        //         alert("your account credited with amount" + amt + " avl balance=" + dataset[uname].bal)

        //     }

        //     else {
        //         alert("incorrect password")
        //     }

        // }

        // else {
        //     ("no user exist with provided username")
        // }
    }

    static withdraw = () => {
        let uname = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let dataset = Bank.getData()

        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                if (dataset[uname].bal >= amt) {
                    dataset[uname].bal-=amt
                    alert("your account debited with amount" + amt + " avl balance=" + dataset[uname].bal)
                }

                else {
                    alert("insufficient balance")
                }
            }

        }

        else {
            ("no user exist with provided username")
        }
    }


}

