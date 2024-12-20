document.getElementById("encrypt").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;
    const result = processData(text, key, "encrypt");
    document.getElementById("outputText").value = result;
});

document.getElementById("decrypt").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;
    const result = processData(text, key, "decrypt");
    document.getElementById("outputText").value = result;
});

function processData(text, key, mode) {
    const keyStream = generateKeyStream(key, text.length);
    const textBytes = text.split("").map(c => c.charCodeAt(0));
    const processed = textBytes.map((byte, index) => byte ^ keyStream[index]);
    return String.fromCharCode(...processed);
}

function generateKeyStream(key, length) {
    const keyBytes = keyToBytes(key);
    let keyStream = [];
    let counter = 0;

    while (keyStream.length < length) {
        const counterBytes = rol(toBytes(counter), 4);
        const substituted = substitute(counterBytes);
        keyStream = keyStream.concat(xorBlocks(substituted, keyBytes));
        counter++;
    }

    return keyStream.slice(0, length);
}

function substitute(block) {
    const sBox = [
        10, 4, 14, 2, 13, 6, 1, 15, 8, 9, 0, 11, 7, 12, 3, 5,
        11, 2, 12, 4, 14, 13, 8, 15, 5, 3, 1, 6, 10, 7, 9, 0,
        15, 9, 1, 12, 5, 3, 10, 14, 2, 6, 8, 4, 7, 0, 11, 13,
        13, 7, 11, 1, 0, 10, 6, 15, 9, 4, 5, 12, 14, 2, 3, 8
    ];
    return block.map(byte => sBox[byte & 0x0F]);
}

function rol(block, shift) {
    return block.map(byte => ((byte << shift) | (byte >> (8 - shift))) & 0xFF);
}

function xorBlocks(block1, block2) {
    return block1.map((byte, i) => byte ^ (block2[i % block2.length] || 0));
}

function keyToBytes(key) {
    const bytes = [];
    for (let i = 0; i < key.length; i += 2) {
        bytes.push(parseInt(key.substr(i, 2), 16));
    }
    return bytes;
}

function toBytes(number) {
    return [
        (number >> 24) & 0xFF,
        (number >> 16) & 0xFF,
        (number >> 8) & 0xFF,
        number & 0xFF
    ];
}

document.getElementById("generateKey").addEventListener("click", () => {
    const key = generateRandomKey(16);
    document.getElementById("key").value = key;
});

function generateRandomKey(length) {
    const hexChars = "0123456789ABCDEF";
    let key = "";
    for (let i = 0; i < length; i++) {
        key += hexChars[Math.floor(Math.random() * 16)];
    }
    return key;
}
