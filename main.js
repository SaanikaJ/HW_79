var array = []; 

function submit(){
    var sug1 = document.getElementById("name_1").value;
    var sug2 = document.getElementById("name_2").value;

    array.push(sug1);
    array.push(sug2);

    document.getElementById("display").innerHTML=array; 
    document.getElementById("submit").style.display=none;
}