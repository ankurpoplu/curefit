var size= "";
function setSize(e){
  size=e.textContent;
    localStorage.setItem("size",JSON.stringify(e.textContent))
  }


  function changeContent(){
    if(size==""){
      alert("Select a size")
      return
    }
    var btn = document.getElementById("addtocart")
    btn.textContent = "Go to Cart";
    btn.addEventListener("click", gotoCart)

  }
function gotoCart(){
  if(size==""){
    alert("Select a size")
    return
  }
window.location.href ='/pages/cart.html'
}