function testCode() {
  console.log(document.getElementById('page').textContent);
     document.getElementById("testbutton").addEventListener("click", function(){
      console.log("buttton clicked");
  });
}
testCode();
