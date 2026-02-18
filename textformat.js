//text formatting project (1 of several)

//textcontent syntax:
// document.getElementById("ID").textContent = formattedText; (for my purposes)
// ^ with inner html (not really textcontent but yeah) | document.getElementById("output").innerHTML = (html stuff);

//uppercase
function uppercase() {
    let inputText = document.getElementById("inputText").value;
    let formattedText = inputText.toUpperCase();
    document.getElementById("output").textContent = formattedText;
}

//lowercase
function lowercase() {
    let inputText = document.getElementById("inputText").value;
    let formattedText = inputText.toLowerCase();
    document.getElementById("output").textContent = formattedText;
}

//capWords
function capWords() {
    let inputText = document.getElementById("inputText").value;
    let words = inputText.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let formattedText = words.join(" ");
    document.getElementById("output").textContent = formattedText;
}

//removespaces
function removespaces() {
    let inputText = document.getElementById("inputText").html;
    let formattedText = inputText.trim()
    document.getElementById("output").textContent = formattedText;
}

//replacewords
function replacewords() {
    let inputText = document.getElementById("inputText").value;
    let oldWord = prompt("Enter the word you want to replace:");
    let newWord = prompt("Enter the new word:");
    let formattedText = inputText.replace(oldWord, newWord);
    document.getElementById("output").textContent = formattedText;
}

//how does this one even work... (thanks Nysa)
//carCount
function carCount() {
    let inputText = document.getElementById("inputText").value;
    let charCount = inputText.length;
    //html bit
    document.getElementById("output").innerHTML = `${inputText}
    <p>Count: ${charCount}</p>`;
}