function main(){
    let confirm=document.getElementById("resultc").innerHTML;
    if(confirm=="Stop You Are Unlucky..." || confirm=="You Are Won !!!"){
        alert("Please restart Again");
    }else{
    let x;
    do{
    x=Math.floor(Math.random()*100/7.6);
    }while(x==0);
    let img =document.createElement("img");
    img.src="image/"+x+".png";
    img.height=200;
    document.body.appendChild(img);
    let current=parseInt(document.getElementById("result").innerHTML);
    let sum=current+x;
    if(sum<21){
        document.getElementById("result").innerHTML=sum;
        document.getElementById("resultc").innerHTML="Generate another Card"
    }else if(sum==21){
        document.getElementById("result").innerHTML=sum;
        document.getElementById("resultc").innerHTML="You Are Won !!!"
        alert("Congrotulations!!! You are lucky"); 
        document.getElementById("btn-res").style.display="block";
        document.getElementById("confetti").style.display="block";
          
    }else{
        document.getElementById("result").innerHTML=sum;
        document.getElementById("resultc").innerHTML="Stop You Are Unlucky...";
        alert(" Lost :( Click restart to Try Again");
        document.getElementById("btn-res").style.display="block";     


    }
    
}
    
}
function restart() {
    location.reload();
}   