function derp() {
  var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                disp(this);
            }
        };
        xmlhttp.open("POST", "/docs/manifest.xml", true);
        xmlhttp.send();
}
var Xarr = []; // array to store ma stuff
var Yarr = [];
function disp(xml) {
var i; //counter
var xmlDoc = xml.responseXML; //Just grabbing stuff out of xml var
var table=""; //originally for a table now it's for pushing into an array
var x = xmlDoc.getElementsByTagName("file"); //grab all file object
var viewer = "/docs/"
var y = xmlDoc.getElementsByTagName("link");

for (i = 0; i < x.length; i++) {
  var btnTxt = document.createTextNode(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);

  var text2 = viewer + x[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue+"/" + x[i].getElementsByTagName("filename")[0].childNodes[0].nodeValue;
  var row2 = document.createElement('div');
  row2.className = "row";
  row2.style.textAlign = "center";
  var column2 = document.createElement('div');
  column2.className = "col-xs-12";
  column2.id = "x"+i;

  var text1 = x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
  var row1 = document.createElement('div');
  row1.className = "row";
  row1.style.textAlign = "center";
  var column1 = document.createElement('div');
  column1.className = "col-xs-12";

  var text0 = x[i].getElementsByTagName("filename")[0].childNodes[0].nodeValue;
  var row0 = document.createElement('div');
  row0.className = "row";
  row0.style.textAlign = "center";
  var column0 = document.createElement('div');
  column0.className = "col-xs-12";

  var container = document.getElementById(x[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue);
  var att = document.createAttribute("parelement");
  att.value = "x"+i;
  var tip = document.createAttribute("data-toggle");
  tip.value = "tooltip";

  var desc = document.createTextNode(text1);
  var descp = document.createElement('p');
  descp.style.wordWrap = "break-word";
  descp.style.textAlign = "center";
  descp.style.marginRight = "auto";
  descp.style.marginLeft = "auto";
  descp.style.maxWidth = "700px";
  descp.style.minWidth = "100px";

  var fileHead = document.createTextNode(text0);
  var openBtn = document.createElement('button');
  openBtn.className = "btn btn-primary";
  openBtn.type = "button";
  openBtn.onclick = function() {boo(this.getAttribute('parelement'),this.getAttribute('arIndex'))};
  openBtn.setAttribute("parelement", "x"+i);
  openBtn.setAttribute("arIndex",i);

//fileHeadp.appendChild(fileHead);
//column0.appendChild(fileHeadp);
openBtn.appendChild(btnTxt);
column0.appendChild(openBtn);
row0.appendChild(column0);
container.appendChild(row0);

descp.appendChild(desc);
column1.appendChild(descp);
row1.appendChild(column1);
container.appendChild(row1);

row2.appendChild(column2);
container.appendChild(row2);
/*
*/
Xarr.push(text2);//Put it in the array
}
for (i = 0; i < y.length; i++) {
  var btnTxt = document.createTextNode(y[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);

  var btnUrl = y[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
  Yarr.push(btnUrl);//Put it in the array

  var text1 = y[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
  var row1 = document.createElement('div');
  row1.className = "row";
  row1.style.textAlign = "center";
  var column1 = document.createElement('div');
  column1.className = "col-xs-12";

  var text0 = y[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
  var row0 = document.createElement('div');
  row0.className = "row";
  row0.style.textAlign = "center";
  var column0 = document.createElement('div');
  column0.className = "col-xs-12";

  var container = document.getElementById(y[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue);
  var att = document.createAttribute("parelement");
  att.value = "y"+i;
  var tip = document.createAttribute("data-toggle");
  tip.value = "tooltip";

  var desc = document.createTextNode(text1);
  var descp = document.createElement('p');
  descp.style.wordWrap = "break-word";
  descp.style.textAlign = "center";
  descp.style.marginRight = "auto";
  descp.style.marginLeft = "auto";
  descp.style.maxWidth = "700px";
  descp.style.minWidth = "100px";

  var fileHead = document.createTextNode(text0);
  var openBtn = document.createElement('button');
  openBtn.className = "btn btn-primary";
  openBtn.type = "button";
  openBtn.onclick = function() {loadUrl(this.getAttribute('arIndex'))};
  openBtn.setAttribute("parelement", "y"+i);
  openBtn.setAttribute("arIndex",i);

openBtn.appendChild(btnTxt);
column0.appendChild(openBtn);
row0.appendChild(column0);
container.appendChild(row0);

descp.appendChild(desc);
column1.appendChild(descp);
row1.appendChild(column1);
container.appendChild(row1);
}
}

function boo(parent,id) {
if(document.getElementById(parent).innerHTML !== "") {
document.getElementById(parent).innerHTML = "";
} else{
  var text2 = Xarr[id];
  var obj = document.createElement('object');
  var emb = document.createElement('embed');
  var container = document.getElementById(parent);

emb.src = text2;
obj.data = text2;
obj.height = "800";
obj.width = "700";
obj.appendChild(emb);
container.appendChild(obj);
console.log(obj);
  }
}
function loadUrl(id) {
var text2 = Yarr[id];
window.open(text2);
}
