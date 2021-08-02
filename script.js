//window.onload=(Result()){

var message=[

{quate:"All our dreams can come true, if we have the courage to pursue them. ",author:"Walt Disney"},

{quate:"The secret of getting ahead is getting started ",author:"Mark Twain "},
{quate:"It’s hard to beat a person who never gives up ",author:"Babe Ruth"},

{quate:" If people are doubting how far you can go, go so far that you can’t hear them anymore. ",author:"  Michele Ruiz"},

{quate:"It’s no use going back to yesterday, because I was a different person then",author:" Lewis Carroll"},

{quate:"Be the change that you wish to see in the world",author:"Mahatma Gandhi"},

{quate:"Learn from the mistakes of others, You can’t afford to make them all on your own ",author:"Chanakya"},

{quate:"Hustle in silence and let your success make the noise",author:"Unknown"},

{quate:"Hard work beats talent when talent doesn’t work hard ",author:" Tim Notke"},

{quate:"In the middle of every difficulty lies opportunity",author:"Albert Einstein"}


];

  var q=document.getElementById("wrapper");
  var a=document.getElementById("author");
  
  
  

function Result(){
    var index=(Math.floor(Math.random()*message.length));
    
  
     q =message[index].quate;
     a=message[index].author;
    
    
    message[index].author.color="red";
    //document.getElementById("p").value;
    
  // p.style.color="red";
   //document.getElementById("wrapper").innerHTML=a;
    
document.getElementById("wrapper").innerHTML=q;

document.getElementById("author").innerHTML=a;





}
