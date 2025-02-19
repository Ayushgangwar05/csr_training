document.getElementById("datetime").innerHTML = Date();
document.getElementById("paradynamic").innerText = "hello Ayush";
document.getElementById("paradynamic").style.fontSize = "35px";
document.getElementById("paradynamic").style.fontWeight = "500";

function myfunction() {
  document.getElementById("functioncreate").innerHTML =
    "This is a functional components";
}
myfunction();

document.writeln("Error in the page");

// let a = 42;
// console.log("a before:" + a);
// {
//   let a = 45;
//   console.log("a after top a:" + a);
// }
// console.log("a top is :" + a);

const a = 40;
console.log("a in global level is" + a);
{
  const a = 42;
  console.log("a in block level:" + a);
}

let c = 10;
let d = "20";
w = parseInt(d);
console.log(w + c);
