function order(){
   var txt1="";
   var txt2="";
   var sizeT=0;
   var sizeA=document.getElementsByClassName("size");
    for(var i=0; i<sizeA.length; i++){
        if(sizeA[i].checked){
            var selectedS=sizeA[i].value;
            txt1=txt1+selectedS+"<br>";
        }
    };
    if(selectedS=="Personal Pizza"){
        sizeT=6;
        txt2=txt2+sizeT+"<br>";
    } else if(selectedS=="Medium Pizza"){
        sizeT=10;
        txt2=txt2+sizeT+"<br>";
    } else if (selectedS=="Large Pizza"){
        sizeT=14;
        txt2=txt2+sizeT+"<br>";
    } else if (selectedS=="Extra Large Pizza"){
        sizeT=16;
        txt2=txt2+sizeT+"<br>";
    }
    var runningTotal=sizeT;
    getMeat(runningTotal,txt1,txt2);
};
function getMeat(runningTotal,txt1,txt2){
    var runningTotal=runningTotal;
    var meatT=0; 
    var selectedM = [];
    var meatA=document.getElementsByClassName("meat");
    for(var j=0; j<meatA.length; j++){
        if(meatA[j].checked){
            selectedM.push(meatA[j].value);
        }

    }
    var meatCount=selectedM.length;
    if(meatCount>1){
        meatT=(meatCount-1);
    } else {
        meatT=0;
    }
    runningTotal=(runningTotal+meatT);
    for(j=0; j<selectedM.length; j++){
        txt1=txt1+selectedM[j]+"<br>";
        if(meatCount<=1){
            txt2=txt2+0+"<br>";
            meatCount=(meatCount-1);
        } else if (meatCount==2){
            txt2=txt2+1+"<br>";
            meatCount=(meatCount-1);
        } else 
            txt2=txt2+1+"<br>";
            meatCount=(meatCount-1);
    }

    getVeggie(runningTotal, txt1, txt2);
};
    
function getVeggie(runningTotal, txt1, txt2){
    var veggieTotal=0;
    var selectedV=[];
    var veggieA=document.getElementsByClassName("veggie");
    for(j=0;j<veggieA.length; j++)
        if(veggieA[j].checked){
            selectedV.push(veggieA[j].value);
        }
        var veggieCount=selectedV.length;
        if(veggieCount>=2){
            veggieTotal=(veggieCount-1);
        }else {
            veggieTotal=0;
        }
    runningTotal=(runningTotal+veggieTotal);
    for(j=0; j<selectedV.length; j++){
        txt1=txt1+selectedV[j]+"<br>";
        if(veggieCount<=1){
            txt2=txt2+0+"<br>";
            veggieCount=veggieCount-1;
        } else if (veggieCount==2){
            txt2=txt2+1+"<br>";
            veggieCount=veggieCount-1;
        } else {
            txt2=txt2+1+"<br>";
            veggieCount=veggieCount-1;
        }
    }
    getCheese(runningTotal, txt1, txt2);
};

function getCheese(runningTotal, txt1, txt2){
    var cheeseT=0;
    var selectedC=[];
    var cheeseA=document.getElementsByClassName("cheese");
    for(j=0; j<cheeseA.length; j++){
        if (cheeseA[j].checked){
            selectedC=cheeseA[j].value;
        }if (selectedC=="Extra Cheese"){
            cheeseT=3;
        }else {
            cheeseT=0;
        }
    }
    txt1=txt1+selectedC+"<br>";
    txt2=txt2+cheeseT+"<br>";
    runningTotal=(runningTotal+cheeseT);
    getCrust(runningTotal, txt1, txt2);
};

function getCrust(runningTotal, txt1, txt2){
    var crustT=0;
    var selectedCr=[];
    var crustA=document.getElementsByClassName("crust");
    for (i=0; i<crustA.length; i++){
        if(crustA[i].checked){
            selectedCr=crustA[i].value;
            txt1=txt1+selectedCr+"<br>";
        }
        if (selectedCr=="Cheese Stuffed Crust") {
            crustT=3;
        } else {
            crustT=0;
        }
    }
    runningTotal=(runningTotal+crustT);
    txt2=txt2+crustT+"<br>";
    getSauce(runningTotal, txt1, txt2);
};

function getSauce(runningTotal, txt1, txt2){
    var sauceA=document.getElementsByClassName("sauce");
    for (j=0; j<sauceA.length; j++){
        if(sauceA[j].checked){
            var selectedS=sauceA[j].value;
            txt1=txt1+selectedS+"<br>";
        }
    }
    txt2=txt2+0+"<br>";
    document.getElementById("cart").style.opacity=1;
    document.getElementById("showText1").innerHTML=txt1;
    document.getElementById("showText2").innerHTML=txt2;
    document.getElementById("totalPrice2").innerHTML="</h3>$"+runningTotal+".00"+"</h3>";
};

function clearAll(){
    document.getElementById("formM").reset();
    document.getElementById("cart").style.opacity=0;
};

function confirm(){
    document.getElementById("cart").innerHTML="<p>We got your order, our chef is on top of it and you will receive it in no time!</p>";
    setTimeout("location.reload(true);", 1500);
};

