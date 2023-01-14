var hourhand = document.querySelector('.hr');
        var mnhand = document.querySelector('.mn');
        var schand = document.querySelector('.sc');

        function setDate() {
            var now = new Date();

  var seconds = now.getSeconds();
  var secondsDegrees = seconds * 6;
  sc.style.transform = "rotate("+ secondsDegrees +"deg)";

  var mins = now.getMinutes();
  var minsDegrees = mins*6
  mn.style.transform = "rotate("+ minsDegrees +"deg)";

  var hour = now.getHours();
  var hourDegrees = hour*30 + mins/2;
  hr.style.transform = "rotate("+ hourDegrees +"deg)";

        }
            setInterval(setDate,1000);
            setDate();