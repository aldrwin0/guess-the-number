let secretnumber=Math.floor(Math.random()*10)+1
function Guess(){
    let numbervalue=document.getElementById('number').value
let num= +numbervalue
if (!isNaN(num)){
    if (num===secretnumber){
        document.getElementById('output').innerHTML="congratulations! you Guesssed  the correct number "
    }else if (num < secretnumber){
                document.getElementById('output').innerHTML="low try again!"
    } else{
                document.getElementById('output').innerHTML="high try again!"
    }
}else {
            document.getElementById('output').innerHTML="invalid"
}

}
