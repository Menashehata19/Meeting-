document.documentElement.setAttribute('class', 'notranslate');

let btn = document.getElementById('btnhome');

let home = document.getElementById('home');

let body = document.getElementById('bodymode');

let pmenu1 = document.getElementById('menu3');

let pmenu2 = document.getElementById('menu4');
let p = document.getElementById('timea');

let day = new Date().getDay();

let p3 = document.getElementById('today');

function men1() {
  // Tab to edit
  if (home.style.display == "none") {
    home.style.display="block"
  }
  
  else {
    home.style.display="none";
  }
  
}

function darkm() {
  
  // Tab to edit
if (body.style.background == 'black') {
  body.style.background = "white"
}
else {
  body.style.background = "black"
}
}

pmenu1.addEventListener('click',function(){
  location.href="https://wa.me/+201270144885"
})


    function updateCountdown() {
      var now = new Date();
      var daysUntilFriday = 6 - now.getDay();
      if (daysUntilFriday < 0) {
        daysUntilFriday += 7;
      }
      $("#countdown").text( daysUntilFriday-1 + " : متبقي ايام ");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  

  let p5 = document.getElementById('username');
  
  
  
  
  
  
  
  
  
  

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    
    p5.innerHTML="Welcome : " + user;
    
  
    
    
  } else {
     user = prompt("ادخل اسم المستخدم:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}






var darkMode = false;

// انشاء دالة لتغيير الوضع المظلم
function toggleDarkMode() {
  // تبديل قيمة المتغير
  darkMode = !darkMode;
  // التحقق من قيمة المتغير
  if (darkMode) {
    // إذا كان الوضع المظلم مفعل، تغيير الأنماط
    document.body.style.backgroundColor = "#0B161B";
    document.body.style.color = "white";
    document.getElementById("button80").innerText = "الوضع المضيء";
  } else {
    // إذا كان الوضع المظلم معطل، تغيير الأنماط
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("button80").innerText = "الوضع المظلم";
  }
}


let meninfo = document.getElementById('infomobile');


function btninfo(){
  // Tab to edit
  if (meninfo.style.display == "none") {
    meninfo.style.display="block"
  }
  
  else {
    meninfo.style.display="none";
  }
  

} 

function exitho() {
  // Tab to 
  if (meninfo.style.display == "block") {
    meninfo.style.display="none"
  }
  
}
let p1m = document.getElementById('pmenu1');

let p2m = document.getElementById('pmenu2');

let p3m = document.getElementById('pmenu3');


p1m.innerHTML= "screen width : " +screen.width;


p2m.innerHTML="ip phone " ;




function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  
  
  p2m.innerHTML="ip phone : " + (ip) ;
});






const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

console.log;


function multiply(num1, num2) {
  return num1 * num2;
}




p3m.innerHTML = "your use : " + (getDeviceType());



