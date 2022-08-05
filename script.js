alert('You have working page congrats!');

// window.addEventListener('load', event => {
//     myFunction();
//   });


document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "Current mood: Booooooooreeed!<br> Wanna be mood: Fridayyyyyy";
}

    function test() {
      alert("The function 'test' is executed");
    }
    let btn = document.getElementById("btn");
    btn.addEventListener('click', event => {
      test();
    });

