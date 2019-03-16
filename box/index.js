const allcommandlist = [
    ["help - ","show command list"],
    ["theme - ","change colors of console"],
    ["game - ","shown help of the text game <br />"]
];

const gamecommands = [
    ['create hero "nick" - ',"making a new hero <br />"]
]

function sendcommand() {
    let commandvalue = document.getElementById("commandline").value;

    if (commandvalue === "") {
        // do nothing;
    } else {
        let commandtext = '<br /> <span class="commandtext"> command> </span>';

        document.getElementById("textbox").innerHTML += commandtext + commandvalue + "<br />";

        if (commandvalue === "help") {
            for(var i in allcommandlist) {
                document.getElementById("textbox").innerHTML += "<br />" + allcommandlist[i][0] + allcommandlist[i][1];
            }
        } else if (commandvalue === "game") {
            for(var i in gamecommands) {
                document.getElementById("textbox").innerHTML += "<br />" + gamecommands[i][0] + gamecommands[i][1];
            }
        } else if (commandvalue.startsWith("create hero")) {
            let nick = document.getElementById("commandline").value.substring(12);
            document.getElementById("textbox").innerHTML += '<br /> > You choose nick: "' + nick + '"<br />';           
            localStorage.setItem('nick',nick);
            localStorage.setItem('lvl','1');
            localStorage.setItem('exp','1');
            localStorage.setItem('gold','100');
            localStorage.setItem('hp','50');
        } else if (commandvalue === "hero") {
            var hero = [
                ["> nick: " + localStorage.getItem("nick") + "<br />"]+
                ["> lvl: " + localStorage.getItem("lvl") + "<br />"]+
                ["> exp: " + localStorage.getItem("exp") + "<br />"]+
                ["> gold: " + localStorage.getItem("gold") + "<br />"]+
                ["> hp: " + localStorage.getItem("hp") + "<br />"]
            ];
            if (localStorage.length == 0) {
                document.getElementById("textbox").innerHTML += "<br /> > You must create hero earlier. <br />"
            } else {
                document.getElementById("textbox").innerHTML += '<br /> <span class="gametxt1">' + hero + "</span>";
            }
        } else {
            let errorlog = '<span class="errorlog"> > Incorrect command</span>';
            document.getElementById("textbox").innerHTML += "<br />" + errorlog + "<br />";
        }
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

function cleancommandline() {
    document.getElementById("commandline").value = "";
}