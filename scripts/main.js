
$(document).ready(function(){
    $('.skills-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

function changeColor(){
    var color = ["cadetblue", "darkgray", "ivory", "cornflowerblue"];

    if (color.includes(document.getElementById('body').style.backgroundColor)) {
        document.getElementById('body').style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    } else{
        document.getElementById('body').style.backgroundColor = 'ivory';
    }
}


isRunning = false
function showMore(){
    if(this.isRunning) {
        console.log("it is processing");
    }else{
        console.log("it starts processing");
        this.isRunning = true;
        var x=document.getElementById('general').innerText;
        document.getElementById("general").innerHTML = "";
        printLetterByLetter("general", x , 80, isRunning);
        console.log("process is over")
    }
}

function printLetterByLetter(destination, message, speed, isRunning){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            this.isRunning = false
            clearInterval(interval);
        }
    }, speed);
}
