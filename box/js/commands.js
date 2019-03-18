const allcommandlist = [
    ['help','shows command list'],
    ['game','shows help of the text game']
];

const gamecommands = [
    ['create hero "nick"','making a new hero'],
    ['hero','shows hero info']
];

function commands() {
    
    let commandtext = '<br /> <span class="commandtext"> command> </span>';
    let commandvalue = document.getElementById("commandline").value;

    if (commandvalue !== "") {

        document.getElementById("textbox").innerHTML += commandtext + commandvalue + "<br /><br />";

        if (commandvalue === "help") {
            helpCommand()
        } else if (commandvalue === "game") {
            gameCommand()
        } else if (commandvalue.startsWith("create hero")) {
            create_heroCommand()
        } else if (commandvalue === "hero") {
            heroCommand()
        } else if (commandvalue === "reset hero") {
            reset_heroCommand()
        } else {
            let errorlog = '<span class="errorlog"> > Incorrect command</span>';
            document.getElementById("textbox").innerHTML += errorlog + "<br />";
        }
    }
}

function helpCommand() {
    for(var i in allcommandlist) {
        document.getElementById("textbox").innerHTML += allcommandlist[i][0] + " - " + allcommandlist[i][1] + "<br />";
    }
}

function gameCommand() {
    for(var i in gamecommands) {
        document.getElementById("textbox").innerHTML += gamecommands[i][0] + " - " + gamecommands[i][1] + "<br />";
    }
}

function create_heroCommand() {
    var nick = document.getElementById("commandline").value.substring(12);
    document.getElementById("textbox").innerHTML += '> You choose nick: "' + nick + '"<br />';           
    localStorage.setItem('nick',nick);
    localStorage.setItem('lvl','1');
    localStorage.setItem('exp','1');
    localStorage.setItem('gold','100');
    localStorage.setItem('hp','50');
}

function heroCommand() {
    var hero = [
        ["> nick: " + localStorage.getItem("nick") + "<br />"]+
        ["> lvl: " + localStorage.getItem("lvl") + "<br />"]+
        ["> exp: " + localStorage.getItem("exp") + "<br />"]+
        ["> gold: " + localStorage.getItem("gold") + "<br />"]+
        ["> hp: " + localStorage.getItem("hp") + "<br />"]
    ];
    if (localStorage.length == 0) {
        document.getElementById("textbox").innerHTML += "> You must create hero earlier. <br />"
    } else {
        document.getElementById("textbox").innerHTML += '<span class="gametxt1">' + hero + "</span>";
    }
}

function reset_heroCommand() {
    localStorage.clear();
    document.getElementById("textbox").innerHTML += "> Hero was deleted. <br />"
}