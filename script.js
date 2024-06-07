function decodeMessage() {
    const hexString = document.getElementById("hexInput").value.trim();
    const hexValues = hexString.split(" ");
    let asciiString = "";

    try {
        for (let hex of hexValues) {
            const decimal = parseInt(hex, 16);
            if (isNaN(decimal)) throw new Error("Invalid hexadecimal input");
            asciiString += String.fromCharCode(decimal);
        }
        document.getElementById("result").textContent = asciiString;
    } catch (error) {
        document.getElementById("result").textContent = "Error: " + error.message;
    }
}

// Example input: "49 20 6C 6F 76 65 20 79 6F 75 20 70 61 70 61"
