var currentDayEl = $('#currentDay');
var task9 = $('#a9');
var task10 = $('#a10');
var task11 = $('#a11');
var task12 = $('#12');
var task1 = $('#a1');
var task2 = $('#a2');
var task3 = $('#a3');
var task4 = $('#a4');
var task5 = $('#a5');
var save9 = $('#b9');
var save10 = $('#b10');
var save11 = $('#b11');
var save12 = $('#b12');
var save1 = $('#b1');
var save2 = $('#b2');
var save3 = $('#b3');
var save4 = $('#b4');
var save5 = $('#b5');
var tr9 = $('#9')
var tr10 = $('#10')
var tr11 = $('#11')
var tr12 = $('#12')
var tr1 = $('#13')
var tr2 = $('#14')
var tr3 = $('#15')
var tr4 = $('#16')
var tr5 = $('#17')
var time9 = moment().format('9')
// displays current date
function displayTime() {
    var current = moment().format('MMM Do, YYYY');
    currentDayEl.text(current);
}

setInterval(displayTime, 10);

var stored = localStorage.getItem('task9');


save9.on('click', function (event) {
    console.log('task:', task9.val());
    task9.textcontent = task9.val();
    localStorage.setItem('task9', task9);
});

save10.on('click', function (event) {
    console.log('task:', task10.val());
    localStorage.setItem('task', task10);
});

save11.on('click', function (event) {
    console.log('task:', task11.val());
    localStorage.setItem('task', task11);
});

save12.on('click', function (event) {
    console.log('task:', task12.val());
    localStorage.setItem('task', task12);
});

save1.on('click', function (event) {
    console.log('task:', task1.val());
    localStorage.setItem('task', task1);
});

save2.on('click', function (event) {
    console.log('task:', task2.val());
    localStorage.setItem('task', task2);
});

save3.on('click', function (event) {
    console.log('task:', task3.val());
    localStorage.setItem('task', task3);
});

save4.on('click', function (event) {
    console.log('task:', task4.val());
    localStorage.setItem('task', task4);
});

save5.on('click', function (event) {
    console.log('task:', task5.val());
    localStorage.setItem('task', task5);
});

// sets color based on time relative to entry

function color() {
    var time = moment().format("HH");

    if (time9 === time) {
        tr9.textcontent = 'present hour' + task9;
    } else if (time9 < time) {
        tr9.textcontent = 'upcoming' + task9;
    } 
};

console.log(moment().format("HH"));
color();