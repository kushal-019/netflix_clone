const open1 = document.getElementById('o1');
const open2 = document.getElementById('o2');
const open3 = document.getElementById('o3');
const open4 = document.getElementById('o4');
const open5 = document.getElementById('o5');

const answer1 = document.getElementById('a1');
const answer2 = document.getElementById('a2');
const answer3 = document.getElementById('a3');
const answer4 = document.getElementById('a4');
const answer5 = document.getElementById('a5');


open1.addEventListener("click" , function(event){
    if(answer1.style.display != 'none'){
        
    answer1.style.display = 'none';
    open1.style.transform = 'rotate(0deg)';
    
}
else{
    answer1.style.display = 'block';

        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer5.style.display = 'none';
        open2.style.transform = 'rotate(0deg)';
        open3.style.transform = 'rotate(0deg)';
        open4.style.transform = 'rotate(0deg)';
        open5.style.transform = 'rotate(0deg)';

    open1.style.transform = 'rotate(45deg)';
}

});
open2.addEventListener("click" , function(event){
    if(answer2.style.display =='none'){
        answer2.style.display = 'block';

        answer1.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer5.style.display = 'none';
        open1.style.transform = 'rotate(0deg)';
        open3.style.transform = 'rotate(0deg)';
        open4.style.transform = 'rotate(0deg)';
        open5.style.transform = 'rotate(0deg)';

        open2.style.transform = 'rotate(45deg)';
    }
    else{
        answer2.style.display = 'none';
        open2.style.transform = 'rotate(0deg)';
    }

});
open3.addEventListener("click" , function(event){
    if(answer3.style.display =='none'){
        answer3.style.display = 'block';

        answer1.style.display = 'none';
        answer2.style.display = 'none';
        answer4.style.display = 'none';
        answer5.style.display = 'none';
        open2.style.transform = 'rotate(0deg)';
        open1.style.transform = 'rotate(0deg)';
        open4.style.transform = 'rotate(0deg)';
        open5.style.transform = 'rotate(0deg)';
        
        open3.style.transform = 'rotate(45deg)';
    }
    else{
        answer3.style.display = 'none';
        open3.style.transform = 'rotate(0deg)';
    }

});
open4.addEventListener("click" , function(event){
    if(answer4.style.display == 'none'){
        answer4.style.display = 'block';

        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer1.style.display = 'none';
        answer5.style.display = 'none';
        open2.style.transform = 'rotate(0deg)';
        open3.style.transform = 'rotate(0deg)';
        open1.style.transform = 'rotate(0deg)';
        open5.style.transform = 'rotate(0deg)';

        open4.style.transform = 'rotate(45deg)';
    }
    else{
        answer4.style.display = 'none';
        open4.style.transform = 'rotate(0deg)';
    }

});
open5.addEventListener("click" , function(event){
    if(answer5.style.display =='none'){
        answer5.style.display = 'block';

        answer2.style.display = 'none';
        answer3.style.display = 'none';
        answer4.style.display = 'none';
        answer1.style.display = 'none';
        open2.style.transform = 'rotate(0deg)';
        open3.style.transform = 'rotate(0deg)';
        open4.style.transform = 'rotate(0deg)';
        open1.style.transform = 'rotate(0deg)';

        open5.style.transform = 'rotate(45deg)';
    }
    else{
        answer5.style.display = 'none';
        open5.style.transform = 'rotate(0deg)';
    }

});



