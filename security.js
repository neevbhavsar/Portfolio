document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Don't try right-click!");
});

document.addEventListener("keydown", function (event) {
    // Disable Developer Tools Shortcuts (Windows & Mac)
    if (
        event.key === "F12" || // F12 Key
        (event.ctrlKey && (event.key === "u" || event.key === "U")) || // Ctrl + U (Windows)
        (event.metaKey && (event.key === "u" || event.key === "U")) || // Cmd + U (Mac)
        (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I" || event.key === "j" || event.key === "J" || event.key === "c" || event.key === "C" || event.key === "u" || event.key === "U")) || // Ctrl + Shift + I/J/C/U (Windows)
        (event.metaKey && event.altKey && (event.key === "i" || event.key === "I" || event.key === "j" || event.key === "J" || event.key === "c" || event.key === "C" || event.key === "u" || event.key === "U")) // Cmd + Option + I/J/C/U (Mac)
    ) {
        event.preventDefault();
        alert("Developer tools are disabled!");
    }
});
