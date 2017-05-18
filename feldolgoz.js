window.onload = feldolgoz;
function feldolgoz(){
  adatsor = "";
  kif = document.location.search;
  kif = kif.slice(1);
  szk = /\+/g;
  kif = kif.replace(szk," ");
  t = kif.split("&");
  for(var i=0; i<t.length;i++){
      t[i] = t[i].split("=");
      for(var j=0; j<t[i].length;j+=2){
         t[i][j]=t[i][j].split("_");
               for(var k=0; k<t[i][j].length;k++){
				t[i][j] = unescape(t[i][j]);
				t[i][j+1] = unescape(t[i][j+1]);
				}
			
			feladatlap=t[0][0]+":"+"&nbsp; "+t[0][1]+"<br />"+"<br />";
			
			nev=t[1][0]+":"+"&nbsp; "+t[1][1]+"<br />";
			
			var d = new Date();
			ev= d.getFullYear();
			kor=ev-t[2][1];
      }
    
  }
   document.getElementById("AdatKiir").innerHTML = feladatlap+nev+"Kora:"+"&nbsp; "+kor+"<br />"+"<br />";
   document.getElementById("Elsofeladat").innerHTML="&nbsp; "+t[3][1]+"<br />";
   document.getElementById("Masodikfeladat").innerHTML="&nbsp; "+t[4][1]+"<br />"+"&nbsp; "+t[5][1]+"<br />";
   document.getElementById("Harmadikfeladat").innerHTML="&nbsp; "+t[6][1]+" cm"+"<br />";
   document.getElementById("Negyedikfeladat").innerHTML="&nbsp; "+t[7][1]+"<br />";

   document.getElementById("Vissza").onclick = Vissza;
}
function Vissza(){
  history.back();
}
