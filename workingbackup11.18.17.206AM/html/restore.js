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
var arr = []; // array to store ma stuff
function disp(xml) {
var i; //counter
var xmlDoc = xml.responseXML; //Just grabbing stuff out of xml var
var table=""; //originally for a table now it's for pushing into an array
var x = xmlDoc.getElementsByTagName("file"); //grab all file object
var viewer = "/docs/"

for (i = 0; i < x.length; i++) {
  var href = "/docs/"+ x[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue + x[i].getElementsByTagName("filename")[0].childNodes[0].nodeValue;

 //var text2 = "http://docs.google.com/gview?url=http://tmahanpro.com/docs/"+ x[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue+"/" + x[i].getElementsByTagName("filename")[0].childNodes[0].nodeValue+"&embedded=true";
  var text2 = viewer + x[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue+"/" + x[i].getElementsByTagName("filename")[0].childNodes[0].nodeValue;

  var row2 = document.createElement('div');
  row2.className = "row";
  row2.style.textAlign = "center";
  var column2 = document.createElement('div');
  column2.className = "col-xs-12";
  column2.id = i;

  var text1 = x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;

  var text0 = x[i].getElementsByTagName("filename")[0].childNodes[0].nodeValue;
 
  var row1 = document.createElement('div');
  row1.className = "row";
  row1.style.textAlign = "center";

  var row0 = document.createElement('div');
  row0.className = "row";
  row0.style.textAlign = "center";

  var column1 = document.createElement('div');
  column1.className = "col-xs-12";

  var column0 = document.createElement('div');
  column0.className = "col-xs-12";

  var container = document.getElementById(x[i].getElementsByTagName("parent")[0].childNodes[0].nodeValue);

  var att = document.createAttribute("parelement");
  att.value = i;
  var tip = document.createAttribute("data-toggle");
  tip.value = "tooltip";

  var desc = document.createTextNode(text1);
  var descp = document.createElement('p');
  descp.style.wordWrap = "break-word";
  descp.style.textAlign = "center";
  var fileHead = document.createTextNode(text0);
  var fileHeadp = document.createElement('p');
  fileHeadp.style.fontWeight = "900";
  fileHeadp.setAttributeNode(att);
  fileHeadp.onclick = function() {boo(this.getAttribute('parelement'))};
  fileHeadp.title = "Click me to display the document, click again to hide the document";

fileHeadp.appendChild(fileHead);
column0.appendChild(fileHeadp);
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
arr.push(text2);//Put it in the array
}
}
function boo(item) {
//alert(item);

if(document.getElementById(item).innerHTML !== "") {
document.getElementById(item).innerHTML = "";
} else{
  var text2 = arr[item];
  var obj = document.createElement('object');
  var emb = document.createElement('embed');
  var container = document.getElementById(item);

emb.src = text2;
obj.data = text2;
obj.height = "800";
obj.width = "700";
obj.appendChild(emb);
container.appendChild(obj);
console.log(obj);
  }
}
