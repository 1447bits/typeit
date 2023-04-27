const numRow = document.getElementById("numRow");
const qwerty = document.getElementById("qwerty");
const asdfg = document.getElementById("asdfg");
const zxcvb = document.getElementById("zxcvb");
const bottomKeys = document.getElementById("bottomKeys");
const font_size = document.getElementById("font_size")
font_size.value = "22"

const keyArray = ["\`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "\'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
    'Control', 'Alt', 'Space', 'Alt', 'Control']
const shiftKeys = ["\`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "\"", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift',
    'Control', 'Alt', 'Space', 'Alt', 'Control']

// set keyboard function
function dispKeyBoard() {

    for (let i = 0; i <= 13; i++) {
        key = keyArray[i]
        let box = `<span class="key" id="${key}">${key}</span>`
        numRow.innerHTML += box;
    }

    for (let i = 14; i <= 27; i++) {
        key = keyArray[i];
        let box = `<span class="key" id="${key}">${key}</span>`
        qwerty.innerHTML += box
    }

    for (let i = 28; i <= 40; i++) {
        key = keyArray[i];
        let box = `<span class="key" id="${key}">${key}</span>`
        asdfg.innerHTML += box
    }
    for (let i = 41; i <= 52; i++) {
        key = keyArray[i];
        let box = `<span class="key" id="${key}">${key}</span>`
        zxcvb.innerHTML += box
    }

    for (let i = 53; i <= 57; i++) {
        key = keyArray[i];
        let box = `<span class="key" id="${key}">${key}</span>`
        bottomKeys.innerHTML += box
    }
}
dispKeyBoard()

// highlight key onkeyDown event
let prevKey = document.getElementById("Space")
let currKey

document.getElementById("textarea").onkeydown = (key) => {
    prevKey.style.background = "white"
    key = (key || window.event)

    let indx = keyArray.indexOf(key.key)
    if (indx === -1) {
        indx = shiftKeys.indexOf(key.key)
        if (indx === -1) {
            indx = 55
            return
        }
    }
    console.log(shiftKeys.indexOf("Space"))
    if (key.key === "") {
        indx = 55
    }

    currKey = document.getElementById(keyArray[indx])
    currKey.style.background = "#9caad9"
    prevKey = currKey
};

// event to reflect changes instantly in the text area
document.getElementById("font_size").addEventListener("input", (e) => {
    document.getElementById("textarea").style.fontSize = e.target.value + "px"
})

document.getElementById("font_color").addEventListener("input", (e) => {
    document.getElementById("textarea").style.color = e.target.value
})

//  clear the text area
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("textarea").value = ""
})

// copy to clip board 
document.getElementById("copyToClipboard").addEventListener("click", () => {
    let text = document.getElementById("textarea").value
    document.getElementById("copyToClipboard").innerHTML = "copied"
    setTimeout(() => {
        document.getElementById("copyToClipboard").innerHTML = "copy to clipboard"
    }, 1000)
    navigator.clipboard.writeText(text);
})

