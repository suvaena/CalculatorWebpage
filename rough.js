const calc = document.querySelector(".calculator")
const keys = calc.querySelector(".keys")
const display = document.querySelector(".display")
const firstVal = 0
const secondVal = 0
const operation

keys.addEventListener('click', function(e){
    //what data-action it has
    const action = e.target.dataset.action
    //what content the key has
    const keyContent = e.target.textContent
    //what is diaplyed on screen
    const displayedNum = display.textContent
    console.log(displayedNum)

        if(!action){
            console.log('number key')
            if (displayedNum === "0" || previousKeyType ==="operator"){
                //replace initial 0 with another number
                display.textContent = keyContent
            }
            else{
                display.textContent = displayedNum + keyContent
            }
        }
        if(action==="add" ||action==="subtract" ||action==="multiply" ||action==="divide"){
            console.log("operator key")
            //shows that the button was clicked
            firstVal = displayedNum
            operation = action
            //make a new attribute to use to classify that prev button click was operation
            e.target.classList.add("is-depressed")
            calc.dataset.previousKeyType = 'operator'
            Array.from(e.target.parentNode.children).forEach(k => k.classList.remove("is-depressed"))
        }
        if(action==="decimal"){
            console.log("decimal key")
            display.textContent = displayedNum + "."
        }
        if(action==="clear"){
            console.log("clear key")
            display.textContent = "0"
        }
        if(action==="calculate"){
            console.log("equal key")
            secondVal = displayedNum

            if (operation ==="add")
            {
                const sum = (firstVal, secondVal) => parseFloat(firstVal) + parseFloat(secondVal)
                display.textContent = sum
            }
            if (operation ==="subtract")
            {
                const diff = (firstVal, secondVal) => parseFloat(firstVal) + parseFloat(secondVal)
                display.textContent = diff
            }
            if (operation ==="multiply")
            {
                const prod = (firstVal, secondVal) => parseFloat(firstVal) + parseFloat(secondVal)
                display.textContent = prod
            }
            if (operation ==="divide")
            {
                const quotient = (firstVal, secondVal) => parseFloat(firstVal) + parseFloat(secondVal)
                display.textContent = quotient
            }
        }
})
