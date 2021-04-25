// pre Loader
function pre(){
    document.querySelector(".pre").style.display="none";
}

// scorring
var score = 0;


// time function
function typeNum() {
    document.querySelector("#upper").style.display = "none";

    // sec function reverse time
    var time1 = 0;
    var left1 = 85;
    var timer1 = document.querySelector("#timer2");


    function getMin(s) {
        var min = Math.floor(s / 60);
        if (min < 10) {
            min = "0" + min;
        }
        var sec = s % 60;
        if (sec < 10) {
            sec = "0" + sec;
        }
        return min + " : " + sec;
    };

    function playFunc1() {
        time1++;
        if (timer1.innerHTML == "00 : 01") {
            alert("Time is Over You Loss!");
            clearInterval(interval);
            location.reload();
        }

        timer1.innerHTML = getMin(left1 - time1);
    }

    var interval = setInterval(playFunc1, 1000);
};


// Drop and Drag

function dragOver(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    // console.log(event.target.getAttribute("src"));
}

function drop(event) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    var attVal = event.target.children[0].getAttribute("src").slice(0, -4);
    var attText = event.target.innerText;

    // validate Color Style
    if (attVal == attText) {
        // alert("Good");
        event.target.style.border = "2px solid green";
        event.target.style.backgroundColor = "white";
        score += 10;

    } else
        //alert("Wrong");
        if (attVal != attText) {
            event.target.style.backgroundColor = "red";
            event.target.style.color = "white";
            event.target.style.border = "2px solid red";
            score -= 5;
        }
    document.querySelector("#score").innerHTML = `<b> ${score} </b>`;
    //score count and action start
    if (score > 95) {
        document.querySelector("#scoreHead").innerHTML = "Your Score is : " + document.querySelector("#score").innerHTML;

        setTimeout(() => {
            document.querySelector("#upper2").style.display = "block";
        }, 3000);
        setTimeout(() => {
            var con = confirm("Start New Game!");
            if (con == true) {
                location.reload();
            }
        }, 5000);
    };

};
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}