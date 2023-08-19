const elInput = document.querySelector("#number")
const elCalculateBtn = document.querySelector("#task1")
const elTaskBox = document.querySelector(".task1")

const elInput2 = document.querySelector("#numberPalindrome")
const elCalculateBtn2 = document.querySelector("#task2")
const elTaskBox2 = document.querySelector(".task2")

const elInput3 = document.querySelector("#numberKabisa")
const elCalculateBtn3 = document.querySelector("#task3")
const elTaskBox3 = document.querySelector(".task3")

const elInput4 = document.querySelector("#numberNegative")
const elCalculateBtn4 = document.querySelector("#task4")
const elTaskBox4 = document.querySelector(".task4")

// DOM Part
elCalculateBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    const numbers = elInput.value.split(",").map(Number);

    elTaskBox.innerHTML = `
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Musbat raqamlar soni: ${findSum(numbers).count}</li>
        <li class="list-group-item">Manfiy raqamlar yigindisi: ${findSum(numbers).sum}</li>
        <li class="list-group-item">Ikkalasini yigindisi: ${findSum(numbers).count+findSum(numbers).sum}</li>
    </ul>
    `
})

elCalculateBtn2.addEventListener("click", function(evt){
    evt.preventDefault();

    elTaskBox2.innerHTML = `
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${isPalindrome(elInput2.value)}</li>
    </ul>
    `
})

elCalculateBtn3.addEventListener("click", function(evt){
    evt.preventDefault();

    elTaskBox3.innerHTML = `
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${isKabisa(elInput3.value)}</li>
    </ul>
    `
})

elCalculateBtn4.addEventListener("click", function(evt) {
    evt.preventDefault();
    const nums = elInput4.value.split(',').map(Number);
    elTaskBox4.innerHTML = `
    <ul class="list-group list-group-flush">
        <li class="list-group-item">New Array:  [${findNegative(nums)}]</li>
    </ul>
    `;
});


// Functions
// Task 1
function findSum(arr){
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if(number>0){
            count++;
        }
        else if(number<0){
            sum+=number;
        }
        
    }
    return {count, sum};
}

// Task 2
function isPalindrome(number) {
    const numStr = String(number);
    const stringToArray = numStr.split('');
    const reverseArray = stringToArray.reverse();
    const arrayToStr = reverseArray.join('');
    if (numStr === arrayToStr){
        return true;
    }
    else{
        return false;
    }
}

// Task 3
function isKabisa(number){
    if ((number % 100 !== "00" && number % 4 === 0) || number % 400 === 0) {
        return true; 
    } else {
        return false;
    }
}


// Task 4
function findNegative(array){
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element<0){
            newArr.push(element);
        }
    }
    return newArr;
}
