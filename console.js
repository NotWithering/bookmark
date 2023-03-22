javascript:

const terminal = document.createElement("input");
terminal.style.position = "fixed";
terminal.style.width = "100%";
terminal.style.height = "25px";
terminal.style.left = "0";
terminal.style.bottom = "0";
terminal.style.backgroundColor = "#1c2529";
terminal.style.border = "none";
terminal.style.color = "#5a5f66";

const output = document.createElement("div");
output.style.position = "fixed";
output.style.width = "100%";
output.style.height = "30%";
output.style.maxHeight = "30%";
output.style.left = "0";
output.style.bottom = "25px";
output.style.backgroundColor = "#161d20";
output.style.border = "none";
output.style.color = "#5a5f66";
output.style.borderTopLeftRadius = "25px";
output.style.borderTopRightRadius = "25px";
output.style.padding = "1%";
output.style.overflow = "auto";

const separator = document.createElement("hr");
separator.width = "100%";
separator.color = "#1c2529";

const clearbtn = document.createElement("p");
clearbtn.innerText = "Clear";
clearbtn.style.right = "50px";
clearbtn.style.top = "0";
clearbtn.style.position = "absolute";
clearbtn.style.cursor = "pointer";
clearbtn.id = "clear"

function log(message) {
    let msg = document.createElement("p");

    msg.innerText = message;
    output.scrollTop = output.scrollHeight+500;

    output.appendChild(msg);

    let sep = separator.cloneNode();
    output.appendChild(sep);
};

const originalConsoleLog = console.log;
console.log = function() {
    originalConsoleLog.apply(console, arguments);
    log(arguments[0]);
};

function run(code) {
    try {
        let response = eval(code);
        log(response);
    } catch (error) {
        log(error);
    };
};
separator
terminal.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let code = terminal.value;
        log(">> "+code);
        run(code);
        terminal.value = ""
    }
});

clearbtn.addEventListener("click", function() {
    const elementsToRemove = output.querySelectorAll(':not(#clear)');
    elementsToRemove.forEach(element => element.remove());
});

document.body.appendChild(output);
document.body.appendChild(terminal);
output.appendChild(clearbtn);