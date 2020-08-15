var flag = 0;


document.getElementById("aboutBtn").addEventListener('click',changeContent);

document.getElementById("header-title").addEventListener('click',changeContent);

function changeContent(){

  flag = !flag;
  console.log(flag);
  var xhr = new XMLHttpRequest();
  if(flag){
    xhr.open("GET",'snippets/about.txt',true);
  }
  else{
    xhr.open("GET",'snippets/mainPage.txt',true);
  }
  xhr.onreadystatechange = function(){
    if(xhr.status == 200 || xhr.readystate == 4){
      document.getElementById("mainContainer").innerHTML = xhr.responseText;
      console.log("HERE");
    }
    console.log("BIZZ");
  }
  xhr.send(null);
}
