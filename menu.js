const root = document.querySelector(':root');
var path = location.pathname;
var menu="";
if(path.indexOf("akihabara")!=-1){
  menu='url(\"../img/menu_akiba.jfif\")'
}else if(path.indexOf("kyoto")!=-1){
  menu='url(\"../img/menu_kyoto.JPG\")'
}else{
  menu='url(\"../img/menu_shibuya.jpg\")'
}

root.style.setProperty("--backurl", menu);

var menustr = "\
<div class=\"menubtn\">\
<p>menu</p>\
</div>\
<div class=\"left\">\
  <header>\
    <h1>くーちゃんの日常</h1>\
  </header>\
\
  <nav>\
    <ul class=\"menu\">\
      <li><a href=\"index.html\">info</a></li>\
      <li>\
        <a href=\"travel.html\">travel</a>\
        <ul>\
          <li><a href=\"akihabara.html\">くーちゃんの秋葉原探索</a></li>\
          <li><a href=\"kyoto.html\">くーちゃんの厄払い京都散策</a></li>\
        </ul>\
      </li>\
    </ul>\
  </nav>\
\
  <footer>\
    <small>&copy; 2023 くーちゃんの日常.<br>Design by <a href=\"https://utsusemi.hiroec.com/\" target=\"_blank\">Utsusemi</a>.</small>\
  </footer>\
</div>\
";
document.write(menustr);

//埋め込み方法きっしょって言わないでよね？php勉強するのが面倒だっただけなのよ、ごめんなさいね。
