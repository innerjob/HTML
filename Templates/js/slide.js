
function displaySubMenu(li) { 
var subMenu = li.getElementsByTagName("ul")[0]; 
subMenu.style.display = "block"; 
} 
function hideSubMenu(li) { 
var subMenu = li.getElementsByTagName("ul")[0]; 
subMenu.style.display = "none"; 
}


//����leftcontent-top��js
function selectTag(showContent,selfObj){
 // ������ǩ
 var tag = document.getElementById("leftcontent-top").getElementsByTagName("h3");
 var taglength = tag.length;
 for(i=0; i<taglength; i++){
  tag[i].className = "";
 }
 
 // ��������
 for(i=0; j=document.getElementById("tagContent"+i); i++){
  j.style.display = "none";
 }
 document.getElementById(showContent).style.display = "block";

 
}

