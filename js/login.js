document.getElementById("button").addEventListener("click", function () {
   const finalemail = document.getElementById("Email");
   const email = finalemail.value;

   const finalpassword = document.getElementById("password");
   const password = finalpassword.value;

   E = "khukan@gmail.com";
   p = '1234'

   if (E == email && p == password) {

      window.location.href = 'main.html'
   } else {
      alert("Valo hoiya Jao");
   }
});

