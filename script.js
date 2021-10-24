const toggleBtn = document.querySelector('.toggle');
const views = document.querySelector('.views');
const money = document.querySelector('.money');
const slider = document.querySelector(".range");

let discont = 1;

toggleBtn.addEventListener('click', function()  {
    toggleBtn.classList.toggle('active');
    
    
})

slider.addEventListener('mousemove', function(){
    toggleBtn.classList.contains('active') ?  discont = 0.75 :  discont = 1 ;

    switch(slider.value) {
        case '1':
           views.textContent = "10K PAGEVIEWS";
            total = 8 * discont;
            money.textContent = `$${total.toFixed(2)}`
            break;
        case '2':
           views.textContent = "50K PAGEVIEWS";
            total = 12 * discont;
            money.textContent = `$${total.toFixed(2)}`
            break;
        case '3':
           views.textContent = "100K PAGEVIEWS";
            total = 16 * discont;
            money.textContent = `$${total.toFixed(2)}`
            break;
        case '4':
           views.textContent = "500K PAGEVIEWS";
            total = 24 * discont;
            money.textContent = `$${total.toFixed(2)}`
            break;
        case '5':
           views.textContent = "1M PAGEVIEWS";
            total = 36 * discont;
            money.textContent = `$${total.toFixed(2)}`
    }

    let sliderValue = parseInt(slider.value);
    sliderValue = (sliderValue - 1) * 25;
    slider.style.background = ('linear-gradient( to right, rgb(165, 243, 235) 50%, rgb(234, 238, 251) 0%)', `linear-gradient(to right, rgb(165, 243, 235) ${sliderValue}%,  rgb(234, 238, 251) 0%)`);

})