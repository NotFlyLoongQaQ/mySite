function notShowHtmlTag(id) {
  if (id == "") {
    return 0;
  } else {
    document.getElementById(id).style.display = "none";
    return 1;
  }
}
function showHtmlTag(id){
  if (id == "") {
    return 0;
  } else {
    document.getElementById(id).style.display = "block";
    return 1;
  }
}
function betterReload() {
  var nowURL = window.location.href;
  window.location.href = "https://qwq.notflyloongqaq.repl.co";
  setTimeout(() => {
    window.location.href = nowURL;
  }, 1000);
}

function pass() {
  console.log("1 Unit Time.");
}

function sleep(rawTime) {
  var Time = rawTime * 1000; // 原始(rawTime)传入的单位是秒,需要换算为千分之一秒(毫秒).
  console.log("RawTime: " + rawTime + ", RealTime:" + Time);
  setTimeout(() => pass(), Time);
}
