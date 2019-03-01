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