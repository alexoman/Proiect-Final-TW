function countdown()
{
    var now=new Date();
    var eventDate=new Date(2020,6,27);
    var currentTime=now.getTime();
    var eventTime=eventDate.getTime();

    var remTime=eventTime-currentTime;
    var s=Math.floor(remTime/1000);
    var m=Math.floor(s/60);
    var h=Math.floor(m/60);
    var d=Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;
    if(h<10)
        h="0"+h;
    if(s<10)
        s="0"+s;
    if(m<10)
        m="0"+m;
    document.getElementById("zile").textContent=d;
    document.getElementById("ore").textContent=h;
    document.getElementById("minute").textContent=m;
    document.getElementById("secunde").textContent=s;
    setTimeout(countdown,1000);
}
countdown();