const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get(["/", "/resources"], (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("*.pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "lectures", req.path))
})

app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", () => {
    console.log(`     _________________________________________
    / TJ Quantum Computing Club server up and \\
    \\ running!                                /
     -----------------------------------------
            \\   ^__^
             \\  (oo)\\_______
                (__)\        )\\/\\
                    ||----w |
                    ||     ||
    `)
});