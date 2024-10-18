
function clickBtn(){
    let getnumber = document.getElementById("tableNumber").value;
    let lines = document.getElementById("totalLines").value;
    let putTable = document.getElementById("display");
    

    for(let i = 1; i <= lines;i++){
        putTable.innerHTML += getnumber + "  x  " + i + " = "+getnumber*i+"<br>";
    }
}