//challenge 1: age in days
function ageInDays(){
    var birthYear = document.getElementById("birthYear").value;
    var ageInDays = (2020 - birthYear) * 365;
    /*creates an h1 variable to use DOM
    DOM is document object model, in which an HTML document gets loaded into a window
    and becomes a document object and the document containes the content of the page.
    Allows for appearance of content from code to html page 
    */
    //create an h1 tag js to be used as html document
    var h3 = document.createElement('h3');
    //create text
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days');
    //give a unique id to the h1 tag and call it ageInDays
    h3.setAttribute('id', 'ageInDays');
    //append text
    h3.appendChild(textAnswer);
    //in a div with an id called flex-box-result, add the h1 tag and its content there
    document.getElementById('flex-box-result').appendChild(h3);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//challenge 2: cat generator
function clicks(){
    var clickCount = 0;
    var button = document.getElementById('cat-button');

    if(button.onclick){
        clickCount++;
    }

    return clickCount;
} 

function randomCat(){
    var image = document.createElement('img');
    var div = document.getElementById('random-cat');
    image.setAttribute('id','cat-image');
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}

function  clearCat(){
    document.getElementById('cat-image').remove();
}

//challenge 3: rps
function rpsGame(yourChoice){
    //the argument in html is 'this', 
    //this in Event Handlers refers to the HTML element (img) that received the event. 
    //sauce: https://www.w3schools.com/Js/js_this.asp
    console.log(yourChoice);
    var playerChoice, computerChoice;

    playerChoice = yourChoice.id;
    computerChoice = numToChoice(randToRps());
    console.log('player: ' + playerChoice + ' | computer: ' + computerChoice);
    results = decideWinner(playerChoice, computerChoice); //create a function that returns an array of win/loss

    //front end
    
    rpsFrontEnd(yourChoice.id, computerChoice, results); //returns an object
  
}

//pick a random number 0-1-2
function randToRps(){
    return Math.floor(Math.random()*3);
}

function numToChoice(num){
    return['rock','paper','scissors'][num];
}

function decideWinner(playerChoice, computerChoice){
    //returns an array of [0,1], [1,0], or [0.5,0.5]
    var choiceArr = JSON.stringify([playerChoice,computerChoice]);
    
    console.log('choiceArr: ' + choiceArr);
    var result;
    switch(choiceArr){
        //player wins
        case '["rock","scissors"]':
        case '["scissors","paper"]':
        case '["paper","rock"]':
            result = 'You Won';
            break;
        //computer wins
        case '["rock","paper"]':
        case '["scissors","rock"]':
        case '["paper","scissors"]':
            result = 'You Lost';
            break;
        //tie
        default:
            result = 'Tied';
            break;
    }
    return result;
}

function rpsFrontEnd(playerChoice, computerChoice, results){
    //display gets rid of element while visibility only gets rid of content and not the size/box of content
    //hide player interface
    document.getElementById('flex-box-rps-div').style.display = 'none';
    document.getElementById('flex-box-rps-frontend').style.display = 'flex';
    document.getElementById('flex-box-rps-playagain').style.display = 'flex';

    //show choice of player
    var playerImage = document.createElement('img');
    playerImage.setAttribute('id','playerImage');
    playerImage.src = document.getElementById(playerChoice).src;
    document.getElementById('flex-box-rps-frontend').appendChild(playerImage);

    //show text result
    var message = document.createTextNode(results);
    var h3 = document.createElement('h3');
    h3.setAttribute('id', 'result-text');
    h3.appendChild(message);
    document.getElementById('flex-box-rps-frontend').appendChild(h3);
    
    //show choice of computer
    var computerImage = document.createElement('img');
    computerImage.src = document.getElementById(computerChoice).src;
    computerImage.setAttribute('id','computerImage')
    document.getElementById('flex-box-rps-frontend').appendChild(computerImage);

    rspFrontEndPlayAgain()
    //show play again button
   /* var button = document.createElement('button');
    var bttnText = document.createTextNode('Play Again');
    button.appendChild(bttnText);
    button.setAttribute('class','btn btn-info');
    button.setAttribute('id','play-again-button');
    document.getElementById('flex-box-rps-playagain').appendChild(button);
    button.onclick = function(){
        document.getElementById('flex-box-rps-div').style.display = 'flex';
        document.getElementById('flex-box-rps-frontend').removeChild(document.getElementById('playerImage'));
        document.getElementById('flex-box-rps-frontend').removeChild(document.getElementById('result-text'));
        document.getElementById('flex-box-rps-frontend').removeChild(document.getElementById('computerImage'));
        document.getElementById('flex-box-rps-frontend').style.display = 'none';
        document.getElementById('flex-box-rps-playagain').removeChild(document.getElementById('play-again-button'));
        document.getElementById('flex-box-rps-playagain').style.display = 'none';
    }*/
}

function rspFrontEndPlayAgain(){
    //show play again button
    var button = document.createElement('button');
    var bttnText = document.createTextNode('Play Again');
    button.appendChild(bttnText);
    button.setAttribute('class','btn btn-info');
    button.setAttribute('id','play-again-button');
    document.getElementById('flex-box-rps-playagain').appendChild(button);
    button.onclick = function(){
        document.getElementById('flex-box-rps-div').style.display = 'flex';
        document.getElementById('flex-box-rps-frontend').removeChild(document.getElementById('playerImage'));
        document.getElementById('flex-box-rps-frontend').removeChild(document.getElementById('result-text'));
        document.getElementById('flex-box-rps-frontend').removeChild(document.getElementById('computerImage'));
        document.getElementById('flex-box-rps-frontend').style.display = 'none';
        document.getElementById('flex-box-rps-playagain').removeChild(document.getElementById('play-again-button'));
        document.getElementById('flex-box-rps-playagain').style.display = 'none';
    }
}



