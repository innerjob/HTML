
function displaySubMenu(li) { 
var subMenu = li.getElementsByTagName("ul")[0]; 
subMenu.style.display = "block"; 
} 
function hideSubMenu(li) { 
var subMenu = li.getElementsByTagName("ul")[0]; 
subMenu.style.display = "none"; 
}


//这是leftcontent-top的js
function selectTag(showContent,selfObj){
 // 操作标签
 var tag = document.getElementById("leftcontent-top").getElementsByTagName("h3");
 var taglength = tag.length;
 for(i=0; i<taglength; i++){
  tag[i].className = "";
 }
 
 // 操作内容
 for(i=0; j=document.getElementById("tagContent"+i); i++){
  j.style.display = "none";
 }
 document.getElementById(showContent).style.display = "block";

 
}

