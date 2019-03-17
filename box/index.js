function closeconsole() {
    document.getElementById("consolebox").style.display = "none";
}

function minimaliseconsole() {
    document.getElementById("consolebox").style.width = "120px";
    document.getElementById("consolebox").style.height = "20px";
    document.getElementById("textbox").style.display = "none";
    document.getElementById("enter").style.display = "none";
    document.getElementById("commandline").style.display = "none";
    document.getElementById("consolebox").style.margin = "10px auto auto 10px";
}

function clsconsole() {
    document.getElementById("textbox").innerHTML = "";
}

function cleancommandline() {
    document.getElementById("commandline").value = "";
}