
document.getElementById('d_button').addEventListener('click', function () {

    const finaldeposit = document.getElementById("deposit-field");
    const deposit = finaldeposit.value;
    const newdepost=parseFloat(deposit)


    const totaldeposit=document.getElementById('totaldeposit');
    const Previusdeposit=totaldeposit.innerText;
    const newPreviusdeposit=parseFloat(Previusdeposit)

    const totalaccounte=document.getElementById('totalamoute');
    const Previusaccount=totalaccounte.innerText;
    const newaccount=parseFloat(Previusaccount)

     
     finaldeposit.value='';

     TotalD=newdepost+newPreviusdeposit;
     TotalA=newdepost+newaccount;
     totaldeposit.innerText= TotalD;
     totalaccounte.innerText= TotalA

     
})

document.getElementById("W_button").addEventListener('click', function () {

    const finalwithdraw = document.getElementById("widthdraw field");
    const withdraw = finalwithdraw.value;
    const newithdraw=parseFloat(withdraw)

    const totalwithdraw=document.getElementById('totalwhithdraw');
    const totalwhithdraw=totalwithdraw.innerText;
    const newwhithdraw=parseFloat(totalwhithdraw);

    const totalaccounte=document.getElementById('totalamoute');
    const Previusaccount=totalaccounte.innerText;
    const newaccount=parseFloat(Previusaccount)

    TotalW= newithdraw+newwhithdraw
    TotalA= newaccount-newwhithdraw;

    totalwithdraw.innerText= TotalW;
    totalaccounte.innerText= TotalA
    finalwithdraw.value='';
})

//console.log( TotalW);

document.getElementById('d_button').addEventListener('click', function () {

    const finaldeposit = document.getElementById("deposit-field");
    const deposit = finaldeposit.value;
    const newdepost=parseFloat(deposit)


    


     finaldeposit.value='';

     TotalD=newdepost+newPreviusdeposit;
     totaldeposit.innerText= TotalD;

     
})

