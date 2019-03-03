//Area of Triangle
function AOT(l,b,h){
    const s = (l+b+h)/2;
    let Area = Math.sqrt(s*((s-l)*(s-b)*(s-h)));
    console.log(Area);
}
AOT(5,6,8);

//Display date and Time
function DateAndTime(){
    let today = new Date();
    let day = today.getDay();
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    console.log(week[day]);
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    if(hour > 12){
        hour = hour - 12;
        hour = hour + " PM";
    }else{
        hour = hour + " AM";
    }
    if(minute < 10){
        minute = "0"+minute;
    }
    if(second < 10){
        second = "0"+second;
    }
    console.log("Current Time : " + hour +" : "+ minute +" : "+ second);

}
DateAndTime();

//Getting date in specific format
function dateNow(){
    var now = new Date();
    var day = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    return console.log(month+"/"+day+"/"+year);
}
dateNow();

//printing page using windows.print method
function printScreen(){
    window.print();
}
function animation (id){
    const element = Document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = textNode.data;
setInterval(function(){
    text = text[text.length-1]+ text.substring(0,text.length - 1);
    textNode.data = text;
}, 100);
}

// Reversing a number from digit 
    
function reverse_number(number){
    number = number + "";
    return number.split("").reverse().join("");
}
console.log(reverse_number(123456));  