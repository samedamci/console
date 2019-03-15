var allcommandlist = [
    ["HELP - ","show command list"],
    ["THEME - ","change colors of console <br />"]
]

function sendcommand() {
    var commandvalue = document.getElementById("commandline").value;

        let commandtext = '<br /> <span class="commandtext"> command> </span>';

        document.getElementById("textbox").innerHTML += commandtext + commandvalue + "<br />";

        if (commandvalue === "help") {
            for(var i in allcommandlist) {
                document.getElementById("textbox").innerHTML += "<br />" + allcommandlist[i][0] + allcommandlist[i][1];
            }
        } else {
            let errorlog = '<span class="errorlog"> > Incorrect command</span>';
            document.getElementById("textbox").innerHTML += "<br />" + errorlog + "<br />";
        }

}

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
