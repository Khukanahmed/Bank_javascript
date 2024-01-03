
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


//console.log( TotalW);

document.getElementById('d_button').addEventListener('click', function () {

    const finaldeposit = document.getElementById("deposit-field");
    const deposit = finaldeposit.value;
    const newdepost=parseFloat(deposit)


    


     finaldeposit.value='';

     TotalD=newdepost+newPreviusdeposit;
     totaldeposit.innerText= TotalD;

     
})

