function plus(){
    number = document.getElementsByClassName("num")[0].innerHTML;
    number = parseInt(number) + 1;
    number = Number(number)
    if(number >= 100 && number<=999){
        document.getElementsByClassName("num")[0].style= "font-size:900%";
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    else if (number>=1000 && number<=9999){
        document.getElementsByClassName("num")[0].style= 
        "font-size:800%";
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    else if(number >= 10000 && number <= 99999){
        document.getElementsByClassName("num")[0].style= 
        "font-size:600%; ";
        document.getElementsByClassName("plus")[0].style= 
        "margin-top:35px; width:50px; height:50px ";
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    else{
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    localStorage.setItem('streak',number);
    
}

function minus(){
    number = document.getElementsByClassName("num")[0].innerHTML
    number = parseInt(number) - 1;
    number = Number(number)
    if(number < 0){
        document.getElementsByName("minus:active").style.transform = "translateY(5px)";
        document.getElementsByName("minus:active").style.transform = "translateY(-5px)";
        document.getElementsByName("minus:active").style.transform = "translateY(0px)";
    }
    else if(number >= 100 && number<=999){
        document.getElementsByClassName("num")[0].style= "font-size:900%";
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    else if(number >= 1000 && number<=9999){
        document.getElementsByClassName("num")[0].style= 
        "font-size:800%";
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    else{
        document.getElementsByClassName("num")[0].innerHTML = number
    }
    localStorage.setItem('streak',number);
}

function color_picker(className){
    console.log(className)
    if(className=='color_pallete_one')
    {
        document.getElementsByClassName("streak-container")[0].style=
        "background-image: linear-gradient(to right,#e92efb,#ff2079,#440bd4,#04005e);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
        document.getElementsByClassName("banner")[0].style=
        "background-image: linear-gradient(to right,#e92efb,#ff2079,#440bd4,#04005e);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
    }
    else if(className=='color_pallete_two'){
        console.log('two working')
        document.getElementsByClassName("streak-container")[0].style=
        "background-image: linear-gradient(to right,#ddd429,#63c007,#fb33db,#0310ea);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
        document.getElementsByClassName("banner")[0].style=
        "background-image: linear-gradient(to right,#ddd429,#63c007,#fb33db,#0310ea);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
    }
    else if(className=='color_pallete_three'){
        document.getElementsByClassName("streak-container")[0].style=
        "background-image: linear-gradient(to right,#b9b605,#0496f7,#ff822e,#f21a1d);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
        document.getElementsByClassName("banner")[0].style=
        "background-image: linear-gradient(to right,#b9b605,#0496f7,#ff822e,#f21a1d);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
    }
    else if (className=='color_pallete_four'){
        document.getElementsByClassName("streak-container")[0].style=
        "background-image: linear-gradient(to right,#e300fc,#ce0f65,#ff5f01,#ce0000);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
        document.getElementsByClassName("banner")[0].style=
        "background-image: linear-gradient(to right,#e300fc,#ce0f65,#ff5f01,#ce0000);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
    }
    else if (className=='color_pallete_five'){
        document.getElementsByClassName("streak-container")[0].style=
        "background-image: linear-gradient(to right,#bdbdfd,#bc7579,#535eeb,#00218a);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
        document.getElementsByClassName("banner")[0].style=
        "background-image: linear-gradient(to right,#bdbdfd,#bc7579,#535eeb,#00218a);background-size: 300%;background-image: -100%;animation : backgroundShift 5s infinite alternate-reverse";
    }
}
