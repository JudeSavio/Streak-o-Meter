function plus(){
    number = document.getElementsByClassName("num")[0].innerHTML;
    number = parseInt(number) + 1;
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