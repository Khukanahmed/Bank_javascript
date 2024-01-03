document.getElementById("W_button").addEventListener('click', function () {


    //console.log('Click the withdra batton')


    const Withdrawfield=document.getElementById('widthdraw field');
    const NewwithdrawAmountString=Withdrawfield.value;
    const NewwithdrawAmount= parseFloat(NewwithdrawAmountString)
    //console.log(NewwithdrawAmount);

    const widthdrawTotalElemet=document.getElementById('totalwhithdraw');
    const PreviousWithdarwStaring=widthdrawTotalElemet.innerText;
    const PreviousWithdarwTotal=parseFloat(PreviousWithdarwStaring);
    const currentAmount =NewwithdrawAmount+PreviousWithdarwTotal;
    //console.log(currentAmount);

    widthdrawTotalElemet.innerText=currentAmount;

    const balanceTotalAmount=document.getElementById("totalamoute");
    const TotalString=balanceTotalAmount.innerText;
    const Totalamount=parseFloat(TotalString);
    const Total= Totalamount-NewwithdrawAmount;
    balanceTotalAmount.innerText=Total;

    Withdrawfield.value="";


    
})
