function clickbtn(val) {
  document.getElementById("screen").value += val;
}

clearinput = () => {
  document.getElementById("screen").value = "";
};
equalClick = () => {
  let txt = document.getElementById("screen").value;
  let result = eval(txt);
  document.getElementById("screen").value = result;
};
