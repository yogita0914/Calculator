const screen = document.getElementById('screen');
const buttonContainer = document.getElementById('button');
const logButton = document.getElementById('log');

logButton.addEventListener('click', function() {
    const currentValue = document.getElementById('screen').value;
    const result = Math.log10(parseFloat(currentValue));
    document.getElementById('screen').value = result;
});


buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName !== 'BUTTON') return;

    if (target.id === "ac") {
        screen.value = "";
    } else if (target.id === "percent") {
        if (screen.value.length !== 0) {
            screen.value = (parseFloat(screen.value) / 100).toString();
        }
    } else if (target.id === "clean") {
        screen.value = "";
    } else if (target.classList.contains("number") || target.classList.contains("operator") || target.classList.contains("parenthesis") || target.classList.contains("decimal")) {
        screen.value += target.innerHTML;
    } else if (target.id === "equal") {
        let lastChar = screen.value[screen.value.length - 1];
        if (["+", "-", "*", "/", "."].includes(lastChar)) {
            screen.value = screen.value.slice(0, -1);
        }
        if (screen.value.length !== 0) {
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = "Syntax error";
            }
        } else {
            screen.value = "";
        }
    } else if (target.classList.contains("delete")) {
        screen.value = screen.value.slice(0, -1);
    } else if (target.id === "double-zero") {
        screen.value += "00";
    } else if (target.id === "pi") {
        screen.value += Math.PI.toFixed(8);
    } else if (target.id === "sqrt") {
        screen.value = Math.sqrt(parseFloat(screen.value)).toFixed(8);
    } else if (target.id === "reciprocal") {
        screen.value = (1 / parseFloat(screen.value)).toFixed(8);
    }
});

