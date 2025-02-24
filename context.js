document.addEventListener("DOMContentLoaded", () => {
   let shooter = document.createElement("div");
   shooter.className = "shooter";
   document.body.appendChild(shooter);

   let cookies = document.querySelectorAll(".cookie");
   cookies.forEach(cookie => {
      setTimeout(() => {
         let bullet = document.createElement("div");
         bullet.className = "bullet";
         document.body.appendChild(bullet);
         bullet.style.left = shooter.offsetLeft + "px";
         bullet.style.top = shooter.offsetTop + "px";
         bullet.animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(-100px)" }
         ], { duration: 500, fill: "forwards" });
         setTimeout(() => {
            let explosion = document.createElement("div");
            explosion.className = "explosion";
            explosion.style.left = cookie.offsetLeft + "px";
            explosion.style.top = cookie.offsetTop + "px";
            document.body.appendChild(explosion);
            cookie.remove();
            bullet.remove();
            setTimeout(() => {
               explosion.remove();
            }, 300);
         }, 500);
      }, 1000);
   });
});
