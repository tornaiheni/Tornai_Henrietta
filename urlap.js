if (typeof window.addEventListener != "undefined") {
  window.addEventListener("load", init, true);
} else if (typeof window.attachEvent != "undefined"){
  window.attachEvent("onload", init);
} else { 
  window.onload = init;
}
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
kuldes(esemeny);
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
function checkb(){
  var checkTomb = getElementsByClass("chbi");
  var checkTombMax = checkTomb.length;
  var valasz = 0;
  for (var i=0; i < checkTombMax; i++) {
    if (checkTomb[i].checked) {
           tetszettv++;
    }
  }
  if (tetszettv<1){
    alert("Sajnalom, hogy semmi sem tetszett az oldalon!");
  }
  return true;
}

function kuldes(esemeny){
  var elkuld = true;
  elkuld = elkuld && confirm("Biztosan elküldöd?");
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
