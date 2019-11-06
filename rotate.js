
/********************************Увеличение лицензий и установка их в центр и наоборот*****************************************************************/
var elemClick = document.getElementsByClassName("license");
var axe = "Илюха";
var count = 0;

for (var i = 0; i < elemClick.length; i++){
    elemClick[i].onclick = function () {
        this.classList.toggle("itemzero");

        setTimeout(function () {

        },0);

        this.classList.toggle("add");

    }
};

/********************************************Всплытие формы и появление closer*******************/

var h3 = document.getElementsByClassName("form_elements")[0];
var form = document.getElementById("wrapper");
var pump = document.getElementById("form");
var a = document.getElementById("aaa");

h3.onclick = function () {
    pump.style.width = "300px";

    setTimeout(function () {
        form.style.bottom ="0px";
    },333);

    a.classList.remove("hidden");
};

a.onclick = function () {
    this.classList.add("hidden");
    form.style.bottom = "-380px";
    pump.style.width = "220px";
};


/**********************************************Всплытие кнопки задать вопрос*******************************************************************/

h3.onmouseover = handler1;
function handler1(event) {
    if (getComputedStyle(pump).width == "220px"){
        form.style.bottom = "-368px";
    }
}

h3.onmouseout = handler2;
function handler2(event) {
    if (getComputedStyle(pump).width == "220px"){
        form.style.bottom = "-380px";
    }
}

/*************************************************** Прокрутка ****************************************************************/

//var elementScroll = document.getElementsByClassName("element")[0];

/*window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;//1605
    document.getElementById('showScroll').innerHTML = scrolled + 'px';//410px

    if(scrolled >= "410"){
        elementScroll.style.marginTop = scrolled - 410 + "px";
    }
    if(scrolled >= "2259"){
        elementScroll.style.marginTop =  - 410 + 2259 + "px";
    }
    if(scrolled <"410"){
        elementScroll.style.marginTop = "0px";
    }
};*/


/*********************************При нажатии на отправить закрыть если отправилось*************************************************/
var subm = document.getElementsByTagName("button")[0];
subm.onclick = function(){

    setTimeout(function () {
        var sended = document.getElementsByClassName("sended")[0];
        if(sended !== undefined){

            setTimeout(function () {

                a.classList.add("hidden");
                form.style.bottom = "-380px";
                pump.style.width = "220px";
            },500);
        }else{
            alert("К сожалению произошла ошибка с отправкой формы, что может быть связанно с отсутствием интернета на вашем компьютере. Пожалуйста, попробуйте в следующий раз или свяжитесь с нами через электронную почту")
        }
    },1000);
};
/*******************Время*********************************/

var date = document.getElementById("date");

    function timer() {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var day = time.getDate();
        var mon = time.getMonth();
        var year = time.getFullYear();

        if(hours<10){
            hours="0"+hours;
        }

        if(minutes<10){
            minutes="0"+minutes;
        }

        if(seconds<10){
            seconds="0"+seconds;
        }

        if(mon<10){
            mon++;
            mon="0"+mon;
        }

        date.innerHTML = "<b>"+day+ "." + mon + "."+ year +"   " + " "+ +hours + ": " + minutes + ": " +seconds;
    }

    setInterval(function () {
        timer();
    },1000);

/***********************Прокрутка независимо от расстояния*************************/

window.onscroll = function () {

    var leftmenu = document.getElementById("left_menu");
    var style_leftmenu = window.getComputedStyle(leftmenu);
    var height_style_left_menu = style_leftmenu.height.replace("px","");//Высота левого меню

    var top = document.getElementById("wrapp_top");
    var style_top = window.getComputedStyle(top);
    var height_style_top = style_top.height.replace("px","");//Высота топа

    var move_block = document.getElementsByClassName("element")[0];
    var style_block_move = window.getComputedStyle(move_block);
    var height_style_block_moves = style_block_move.height.replace("px","");//Высота движущегося блока

    var scrolled = window.pageYOffset || document.documentElement.scrollTop; //Текущая прокрутка
    if (scrolled  >= height_style_top){
        move_block.style.marginTop = scrolled - height_style_top -51 +"px";
    }
    if(scrolled-50 <= height_style_top){
        move_block.style.marginTop = "0px";
    }
    if(scrolled -49*2 -height_style_block_moves >= height_style_left_menu + height_style_top){
        move_block.style.marginTop = height_style_left_menu - height_style_block_moves -4 +"px";
    }

};
/**********************************************************************************************************/











