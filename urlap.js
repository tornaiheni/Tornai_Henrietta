if (typeof window.addEventListener != "undefined") {
  window.addEventListener("load", init, true);
} else if (typeof window.attachEvent != "undefined"){
  window.attachEvent("onload", init);
} else { 
  window.onload = init;
}
var urlapv;
function init(){
  urlapv = document.getElementById("urlap");
   var torolv = document.getElementById("torol");
  szulEv();
  if (typeof window.addEventListener != "undefined") {
    urlapv.addEventListener("submit", kuldes, false);
    torolv.addEventListener("click", torles, false);
  } else if (typeof window.attachEvent != "undefined"){
    urlapv.attachEvent("onsubmit", kuldes);
    torolv.attachEvent("onclick", torles);
   } else { 
    urlapv.onsubmit = kuldes;
    torolv.onclick = torles;
  }

}

function szulEv(){
  var i, selectv, szoveg, optionv, ldiv;
  var selectv = document.createElement("select");
  selectv.setAttribute("name","Születési éve");
  for(i=1960; i<=2005; i++){
    var szoveg = document.createTextNode(i);
    var optionv = document.createElement("option");
    optionv.setAttribute("value",i);
    optionv.appendChild(szoveg);
    selectv.appendChild(optionv);
  }
  var ldiv = document.getElementById("listadiv");
  ldiv.appendChild(selectv);
}
function elsof(){
  var szogv=0;
  for (var i=0; i < urlapv.szog.length; i++) {
    if (urlapv.szog[i].checked) {
           szogv++;
    }
  }
  szogp = document.getElementById("elsofeladat");
  if (szogv<1){
    alert("Jelölje a válaszát!");
    szogp.style.color = "#ff0000";
    return false;
  } else {
    szogp.style.color = "#008080";
    return true;
  }
}
function masodikf(){
  var checkTomb = document.getElementsByClassName("chbi");
  var valaszv = 0;
  for (var i=0; i < checkTomb.length; i++) {
    if (checkTomb[i].checked) {
           valaszv++;
    }
  }
  haromszogp = document.getElementById("masodikfeladat");
  if (valaszv<1){
    alert("Jelölje a válaszait!");
    haromszogp.style.color = "#ff0000";
    return false;
	} else if (valaszv<3){
		alert ("Mindhárom helyes megoldást jelölje!");
		haromszogp.style.color = "#ff0000";
		return false;
			}else {
				haromszogp.style.color = "#008080";
				return true;
				}
}

function kuldes(esemeny){
  var elkuld = true;
  elkuld = elkuld && elsof() && masodikf() && confirm("Biztosan elküldöd?");
  //elkuld = elkuld && masodikf();
  //elkuld = elkuld && confirm("Biztosan elküldöd?");
  if(!elkuld){
    if (typeof esemeny.preventDefault != "undefined"){
      esemeny.preventDefault();
    } else if(typeof window.event.returnValue != "undefined"){
      window.event.returnValue = false;
    } else { return false; }
  }
} 
function torles(){
  var tor = confirm("Biztosan mindent törölni akarsz?");
  if (tor) {
    document.getElementById("urlap").reset();
 }
  return tor;  
} 
