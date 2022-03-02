player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

function send() {
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    console.log("The word in lower case is" + word);

    CharAt1=word.charAt(1);
    console.log(CharAt1);

    halfLength=Math.floor(word.length/2);
    CharAt2=word.charAt(halfLength);
    console.log(CharAt2);

    minusLength=word.length-1;
    CharAt3=word.charAt(minusLength);
    console.log(CharAt3);

    removeCharAt1=word.replace(CharAt1, "_");
    removeCharAt2=removeCharAt1.replace(CharAt2, "_");
    removeCharAt3=removeCharAt2.replace(CharAt3, "_");
    console.log(removeCharAt3);
    
    question="<h4 id='word_display'>Q. " + removeCharAt3 + "</h4>";
    inputWord="<br>Answer : <input type='text' id='input_check_box'>";
    CheckButton="<br><br> <button class='btn btn-info' onclick='check();'>Check</button>";
    row=question + inputWord + CheckButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

questionTurn="player_1";
answerTurn="player_2";

function check(){

    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log("Answer in lowerCase is" + answer);
    
    if (answer == word) {
        if (answerTurn == "player_1") {
            player1_score+=1;
            document.getElementById("player1_score").innerHTML=player1_score;
        } else {
            player2_score+=1
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if (questionTurn == "player_1") {
        questionTurn="player_2";
        answerTurn="player_1";
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
    } else {
        questionTurn="player_1";
        answerTurn="player_2";
        document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
    }

    document.getElementById("output").innerHTML="";

}