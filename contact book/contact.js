
document.getElementById("submit").onclick = function() {myFunction()};

function myFunction(){
    localStorage.setItem("name", "Smith");
    localStorage.setItem("phone","123")
}
document.getElementById("view").onclick = function() {myFunction()};
function viewfunction() {
    localStorage.getItem("name");
    localStorage.getItem("phone");
}

