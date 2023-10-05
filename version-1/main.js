window.onload
       
        //رفرنس لكل الازرار في الصفحة الاولى
        var buttons = document.querySelectorAll(".myButton");

        // اذا ضغطت على الزر وش يصير

        buttons.forEach(function(button) {
        button.addEventListener("click", function() {

          // جب الرابط من الاتربيوت
          var linkUrl = button.getAttribute("data-url");
      
          // رح للرابط اذا ضعط الزر
          window.location.href = linkUrl;
        });
      });






      //  دارك مود وتفير الصور
       var icon = document.getElementById("icon");

       var icon = document.getElementById("icon");

       icon.onclick = function() {
           var isDarkTheme = document.body.classList.toggle("dark-theme");
       
           if (isDarkTheme) {
               icon.src = "sun.png";
           } else {
               icon.src = "moon.png";
           }
       }
       


// Custom alert I got from this website https://codepen.io/nishanc/pen/NWWPdZE

/*
       function CustomAlert() {
        this.alert = function (message, title) {
          document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
      
          let dialogoverlay = document.getElementById('dialogoverlay');
          let dialogbox = document.getElementById('dialogbox');
      
          let winH = window.innerHeight;
          dialogoverlay.style.height = winH + "px";
      
          dialogbox.style.top = "100px";
      
          dialogoverlay.style.display = "block";
          dialogbox.style.display = "block";
      
          document.getElementById('dialogboxhead').style.display = 'block';
      
          if (typeof title === 'undefined') {
            document.getElementById('dialogboxhead').style.display = 'none';
          } else {
            document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
          }
          document.getElementById('dialogboxbody').innerHTML = message;
          document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
        }
      
        this.ok = function () {
          document.getElementById('dialogbox').style.display = "none";
          document.getElementById('dialogoverlay').style.display = "none";
        }
      }
      
      let customAlert = new CustomAlert();
      
      // Show the custom alert automatically when the page loads
      window.addEventListener('load', function () {
        customAlert.alert('This is a prototype so do not judge , it is like lucnher for tools take a look and go to your desired program(tool) .', 'Heads Up!');
      });
*/