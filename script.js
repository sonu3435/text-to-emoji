var clutter = "";
function encryption(){
    document.querySelector("#encrypt-btn").addEventListener('click',function(){
       
        // it is used to clear the previous result
        clutter = ""


        // getting input
        var input = document.getElementById('txtmsg').value

        // getting password
        var password = document.getElementById('password').value
        console.log(password)


        // splitting the input 
        const str = input.split("") // it will split/make the array of our input

        // converting it in an Emoji's
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `
        });

        // storing it in a #result div
        document.querySelector('#result').innerHTML = clutter;

        var dataarr = [];

        // if the value is already present in the local storage 
        let check = []
        
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass":password,'input':input,"clutter":clutter})
        }else{
            dataarr = [{"pass":password,'input':input,"clutter":clutter}]
        }

        localStorage.setItem("data1",JSON.stringify(dataarr))
    })
}
encryption()


function decryption(){
    document.querySelector('#decrypt-btn').addEventListener('click',function(){
        var clutter2 = "";


        // getting an given emoji msg
        var input2 = document.querySelector('#emojimsg').value
        
        // getting an given final password
        var finalPass = document.querySelector('#finalpassword').value

        var user = JSON.parse(localStorage.getItem('data1'))
        
        // console.log(user)
        var str2 = input2.split(" ")

        str2.forEach(element => {
            clutter2 += `&#${(element.codePointAt(0))} `
        });

        var found = {};
        // clearing the input
       
        user.forEach((e) =>{
            console.log(e)
            if(e.clutter === clutter2){
                found = e;
                console.log(e.clutter)
            }
        })

        if ((found.clutter === clutter2) && (found.pass === finalPass)) {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`
            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
            setTimeout(()=>{
            document.querySelector("#result").innerHTML = ""
            },2000);
        }
        

    })
}

decryption()


function btnClicking(){
        document.querySelector("#dec-btn").addEventListener('click',function(){
        document.querySelector('#finalpassword').innerHTML = ''
        document.querySelector('#decryption').style.display = 'block';
        document.querySelector('#encryption').style.display = 'none';
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector(".main> h1 span img").style.rotate = '180deg'
        document.querySelector("#result").innerHTML = '';
    })

    document.querySelector("#enc-btn").addEventListener('click',function(){
        document.getElementById('txtmsg').value  = "" 
        document.getElementById('password').value = ""
        document.querySelector('#encryption').style.display = 'block';
        document.querySelector('#decryption').style.display = 'none'
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector(".main> h1 span img").style.rotate = '0deg'
        document.querySelector('#result').style.display = 'none';
        document.querySelector("#result").innerHTML = '';
    })

    document.querySelector('#encrypt-btn').addEventListener("click",function(){
        document.querySelector('#result').style.display = 'block';
    })

    document.querySelector('#decrypt-btn').addEventListener("click",function(){
        document.querySelector('#result').style.display = 'block';
    })
}
btnClicking()

// Local Storage
// localStorage.clear() // this will clear the local storage
// localStorage.setItem("username","Sonu")
// localStorage.setItem("age","20")
// let a = localStorage.getItem('username')
// console.log(a)

// var arr = ['Sonu',3,true,'BCA']
// localStorage.setItem('array',JSON.stringify(arr)) // it will store the array in the json form
// console.log(JSON.parse(localStorage.getItem('array')))  // it will return the array in the array form