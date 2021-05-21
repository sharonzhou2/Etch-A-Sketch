const container = document.getElementById("container");

function makeGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let i=0; i< columns; i++) {
            let col = document.createElement('div');
            col.className = 'box';
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

makeGrid(16,16);

container.addEventListener('mouseover', e => {
    // if (e.target === 'row')
    // console.log(e.target.className);
    if (e.target.className === "box") {
        // console.log(e.target);
        e.target.style.backgroundColor = "#84D2F6";
    }
})

const clear = document.getElementById("reset");
clear.addEventListener('click', () =>{
    let child = container.childNodes;
    for (let i = 0; i < child.length; i++) {
        let children = child[i];
        for(let i = 0; i < children.childNodes.length; i++) {
            let box = children.childNodes[i];
            box.style.backgroundColor = "transparent";
        }
    }
})

const newBtn = document.getElementById("new");
newBtn.addEventListener('click', (e) => {
    let input = document.getElementById("inputText");
    if (input.value > 30 || input.value < 0) {
        // console.log(typeof(input.value))
        alert("Please enter a number between 0-30");
     
    } else {
        container.innerHTML = '';
        let size = input.value
        makeGrid(size, size);
        let box = document.getElementsByClassName("box");
        // console.log(box);
        for (let i = 0; i < box.length; i++) {
            box[i].style.width = 390/size + "px";
            box[i].style.height = 390/size + "px";
        }
        

    }
 
    // console.log(input.value);
})