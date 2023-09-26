var defaultValue = 0;

function increment() {
    defaultValue++;
    console.log("Incremented Value is " + defaultValue);
    add();
}

function decrement() {
    if (defaultValue > 0) {
        defaultValue--;
        console.log("Decremented Value is: " + defaultValue);
        add();
    }
   
    
}

function add() {
    const num = document.getElementById("number");
    num.textContent = defaultValue;
}









