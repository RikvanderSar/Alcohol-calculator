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
    sliders[i].addEventListener('change', function(){
        let somCost = 0;
        let somCalories = 0;

        sliderUnitsAmount[i].innerHTML = sliders[i].value;

        somCost += Math.round(sliders[0].value * beerPrice * weeksPerMonth);
        somCost += Math.round(sliders[1].value * winePrice * weeksPerMonth);
        somCost += Math.round(sliders[2].value * bottlePrice * weeksPerMonth);
        somCost += Math.round(sliders[3].value * mixersPrice * weeksPerMonth);

        somCalories += Math.round(sliders[0].value * beerCalories * weeksPerMonth);
        somCalories += Math.round(sliders[1].value * wineCalories * weeksPerMonth);
        somCalories += Math.round(sliders[2].value * bottleCalories * weeksPerMonth);
        somCalories += Math.round(sliders[3].value * mixersCalories * weeksPerMonth);

        costSavings.innerHTML = somCost;
        calorieSavings.innerHTML = somCalories;
    })
}

