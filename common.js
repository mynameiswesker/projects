$(document).ready(function () {
   $("#form").submit(function () {
      $.ajax({
         type:"POST",
         url: "mail.php",
         data: $(this).serialize()
      }).done(function () {
         var div = document.createElement('div');
         div.className = "sended";
         div.innerHTML = "<b>Ваш вопрос отправлен! В ближайшее время Мы Вам ответим</b>";
         wrapp_top.appendChild(div);
         setTimeout(function () {
            div.remove();
         },3000);
      });
      return false;
   });
});

async function Wesker() {
   
}
