// GET
const costSavings = document.querySelector('.result__cost--amount');
const calorieSavings = document.querySelector('.result__calories--amount')

// SET
const weeksPerMonth = 4.33;

const beerPrice = 3;
const beerCalories = 135;

const winePrice = 3;
const wineCalories = 106;

const bottlePrice = 6;
const bottleCalories = wineCalories * 6;

const mixersPrice = 5;
const mixersCalories = 135;


// Loop over de sliders en update de hoeveelheden
const sliders = document.querySelectorAll('.slidecontainer__slider');
const sliderUnitsAmount = document.querySelectorAll('.slider__units--amount');

for (let i = 0; i < 4; i++){
    sliders[i].addEventListener('click', function(){
        let somCost = 0;
        let somCalories = 0;

        sliderUnitsAmount[i].innerHTML = sliders[i].value;

        somCost += sliders[0].value * beerPrice;
        somCost += sliders[1].value * winePrice;
        somCost += sliders[2].value * bottlePrice;
        somCost += sliders[3].value * mixersPrice;

        somCalories += sliders[0].value * beerCalories;
        somCalories += sliders[1].value * wineCalories;
        somCalories += sliders[2].value * bottleCalories;
        somCalories += sliders[3].value * mixersCalories;

        costSavings.innerHTML = somCost;
        calorieSavings.innerHTML = somCalories;
    })
}

