let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');


function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value.length === 0 && !attempt.value ){
        setHiddenFields();
    }
    if(!validateInput(input.value)){
        return false;
    }else{
        ++attempt.value;
    }
    if(getResults(input)){
        setMessage("You win! :)");
        showAnswer(true);
        showReplay();
        return;
    }
    else{
        if(attempt >= 10){
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
            return;
        }else{
            setMessage("Incorrect, try again.")
        }
    }
}

function showAnswer(param){
    var element = document.getElementById('code');
    element.innerHTML = answer;

    if(param){
        element.className = 'success';
    }else{
        element.className = 'failure';
    }
}

function showReplay(){
    var guessingDiv = document.getElementById('guessing-div');
    guessingDiv.style.display = 'none';
    var replayDiv = document.getElementById('replay-div');
    replayDiv.style.display = 'block';
}

function setHiddenFields()
{
    answer.value = (Math.floor(Math.random() * 10000)).toString();
    while(answer.value.length < 4){
        answer = "0" + answer;
    }
    attempt.value = 0;
}

function setMessage(param){
    return document.getElementById('message').innerHTML = param;
}

function validateInput(param){
    if(param.length === 4)
    {
        return true;
    }
    else
    {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}


function getResults(param){
    let correctGuess = 0;
    let result = param;
    let resultDiv = document.getElementById('results');
    let inner = '<div class=""row""><span class=""col-md-6"">';
    for(var i = 0 ; i < result.length; i++)
    {
        if(answer.value[i] === result[i]){
            inner += '<span class="glyphicon glyphicon-ok"></span>';
            correctGuess++;
            continue;
        }
        else if(answer.value.indexof(result[i]) > -1)
        {
                inner += '<span class="glyphicon glyphicon-transfer"></span>';
            continue;}
        else {
            inner += '<span class="glyphicon glyphicon-remove"></span>';
        }    
    }
    inner =  + input + '</span><div class="col-md-6">';
    resultDiv.innerHTML = inner;
    if(correctGuess === 4){
        return true;
    }
    return false;
}