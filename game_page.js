player1=localStorage.getItem("Player1In");
player2=localStorage.getItem("Player2In");

Player1Score=0;
player2Score=0;

document.getElementById("Player1Name").innerHTML=player1+":";
document.getElementById("Player2Name").innerHTML=player2+":";

document.getElementById("Player1Score").innerHTML=Player1Score;
document.getElementById("Player2Score").innerHTML=player2Score;

document.getElementById("Player_question").innerHTML="Question Turn-"+player1;
document.getElementById("Player_answer").innerHTML="Answer Turn-"+player2;

function send(){
        
     num1=document.getElementById("num1").value;
     num2=document.getElementById("num2").value;
     actual_answer=parseInt(num1)*parseInt(num2);
     console.log (num1);
     console.log (num2);

        question_number="<h4>"+num1+"X"+num2+"</h4>";
    input_box="<br>Ans:<input type='text' id='inputCheckBox'> ";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_number + input_box + check_button ;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}