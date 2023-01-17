let bottom = document.getElementById("bottom");
let inputBox = document.getElementById("inputBox");
let inputBoxValue = inputBox.value.toLowerCase();
let table = document.getElementById("bottom");
let tagsArr = [];
emojiList.map((ele) => {
    tagsArr.push(ele.tags);
})
let flatArr = tagsArr.flat();
// console.log(flatArr);
// console.log(tagsArr[0]);

function emoji() {
    inputBox.value = "";
    emojiList.map((ele) => {
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("class", "card");
        let td1 = document.createElement("td");
        td1.setAttribute("id", "one");
        td1.innerText = ele.emoji;
        let td2 = document.createElement("td");
        td2.setAttribute("id", "two");
        td2.innerText = ele.aliases.join(", ");
        td2.innerText = td2.innerText.replaceAll("_", " ");
        let td3 = document.createElement("td");
        td3.setAttribute("id", "three");
        td3.innerText = ele.description;
        tableRow.append(td1, td2, td3);
        table.appendChild(tableRow);
    })
}

function search() {
    let inputBoxValue = inputBox.value.toLowerCase();
    table.innerHTML = "";
    console.log("in search");
    console.log(inputBoxValue);
    if (inputBoxValue == "") {
        table.innerHTML = `<h1>Please input a word<h1/>`
    }
    else if (!flatArr.includes(inputBoxValue)) {
        input()

    
    }
    else {
        emojiList.map((ele) => {
            if (ele.tags.includes(inputBoxValue)) {
                // console.log("hello")
                let tableRow = document.createElement("tr");
                tableRow.setAttribute("class", "card");
                let td1 = document.createElement("td");
                td1.setAttribute("id", "one");
                td1.innerText = ele.emoji;
                let td2 = document.createElement("td");
                td2.setAttribute("id", "two");
                td2.innerText = ele.aliases.join(", ");
                td2.innerText = td2.innerText.replaceAll("_", " ");
                let td3 = document.createElement("td");
                td3.setAttribute("id", "three");
                td3.innerText = ele.description;
                tableRow.append(td1, td2, td3);
                table.appendChild(tableRow);
                console.log("ojha");
            }
        })
       

    }
}
function input() {
    console.log(inputBox.value);
    table.innerHTML = "";
    let inputBoxValue = inputBox.value.toLowerCase();
    console.log("in input");
    console.log(inputBoxValue);
    if (inputBox.value == "") {
        // console.log("jai");
        emoji()
    }
    emojiList.map((ele) => {
        ele.tags.map((element) => {
            if (element.startsWith(inputBoxValue)) {
                // console.log("hello")
                let tableRow = document.createElement("tr");
                tableRow.setAttribute("class", "card");
                let td1 = document.createElement("td");
                td1.setAttribute("id", "one");
                td1.innerText = ele.emoji;
                let td2 = document.createElement("td");
                td2.setAttribute("id", "two");
                td2.innerText = ele.aliases.join(", ");
                td2.innerText = td2.innerText.replaceAll("_", " ");
                let td3 = document.createElement("td");
                td3.setAttribute("id", "three");
                td3.innerText = ele.description;
                tableRow.append(td1, td2, td3);
                table.appendChild(tableRow);
            }

        })

    })
}

window.onload = _ => emoji();
