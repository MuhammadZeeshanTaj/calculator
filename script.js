// catch the Dom elements:
var screen = document.getElementById('screen');
var buttons = document.getElementsByClassName('btn');
var equals = document.getElementById('equal');
var clear = document.getElementById('clear');


for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
       var value =  this.getAttribute('data-value');
       screen.value += value;
    })
}
equals.addEventListener('click', function(){
    if (screen.value === ''){
        alert('Please write something to calculate!!');
    }else{
        var calc = eval(screen.value);
        screen.value = calc;
    }
});

clear.addEventListener('click', ()=>{
    screen.value = '';
})