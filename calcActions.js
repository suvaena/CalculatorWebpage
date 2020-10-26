const calc = document.querySelector(".calculator")
const keys = calc.querySelector(".keys")
const display = document.querySelector(".display")

keys.addEventListener('click', function(e){
    //what data-action it has
    const action = e.target.dataset.action
    const pkt = e.target.dataset.previousKeyType
    //what content the key has
    const keyContent = e.target.textContent
    //what is diaplyed on screen
    const displayedNum = display.textContent
    console.log(displayedNum)

        if(!action){
            console.log('number key')
            if (displayedNum === "0"){
                //replace initial 0 with another number
                display.textContent = keyContent
            }
            else{
                display.textContent = displayedNum + keyContent
            }
        }
        if(action==="add" ||action==="subtract" ||action==="multiply" ||action==="divide"){
            console.log("operator key")
            calc.dataset.firstValue = displayedNum
            calc.dataset.operator = action
            //make a new attribute to use to classify that prev button click was operation
            e.target.classList.add("is-depressed")
            //remove is-depressed attribute
            Array.from(e.target.parentNode.children).forEach(k => k.classList.remove("is-depressed"))
            display.textContent = 0
        }
        if(action==="decimal"){
            console.log("decimal key")
            if (displayedNum.includes("."))
            {
                display.textContent = displayedNum
            }
            else{
                display.textContent = displayedNum + "."
            }
        }
        if(action==="clear"){
            console.log("clear key")
            display.textContent = "0"
        }
        if(action==="calculate"){
            console.log("equal key")
            const secondVal = displayedNum
            const operator = calc.dataset.operator
            const firstVal = calc.dataset.firstValue
            display.textContent = calculate(firstVal, secondVal, operator)
        }
})

//perform operations
const calculate = (x, y, operator) => {
    if (operator==="add"){
        return parseFloat(x) + parseFloat(y)
    }
    else if (operator==="subtract"){
        return parseFloat(x) - parseFloat (y)
    }
    else if (operator==="multiply"){
        return parseFloat(x) * parseFloat (y)
    }
    else if (operator==="divide"){
        return parseFloat(x) / parseFloat (y)
    }
}