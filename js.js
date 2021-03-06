
$(document).ready(function(){
    
        var answerOne = $('#answerOne');
        var answerTwo = $('#answerTwo');
        var answerThree = $('#answerThree');
        var answerFour = $('#answerFour');
        var imageCheck = $('#noimage');
        answerOne.blur(function(){
            //1 question
            if(answerOne.val() != ''){
                if(answerOne.val().replace(/\s/g, '') == '0803' || answerOne.val().replace(/\s/g, '') == '08.03' ){
                    $('#validOne').text('Ответ правильный');
                    $('#answerTwo').attr('disabled', false);
                    $('#validOne').removeClass('error').addClass('ok');
                    imageCheck.hide();
                }else{
                    $('#validOne').text('Не верно, вспоминай');
                    $('#submit').attr('disabled', true);
                    $('#validOne').addClass('error');
                    imageCheck.show();
                }
            }else{
                $('#validOne').text('Не оставляй, поле пустым, тебе еще подарок получать');
                $('#validOne').addClass('error');
                $('#submit').attr('disabled', true);
                imageCheck.hide();
            }
            
        });

        answerTwo.blur(function(){
            //2 question
            if(answerTwo.val() != ''){
                if(answerTwo.val().replace(/\s/g, '') == 'Филадельфия' || answerTwo.val().replace(/\s/g, '') == 'филадельфия'){
                    $('#validTwo').text('Верно');
                    $('#answerThree').attr('disabled', false);
                    $('#validTwo').removeClass('error').addClass('ok');
                    imageCheck.hide();
                }else{
                    $('#validTwo').text('Увы');
                    $('#submit').attr('disabled', true);
                    $('#validTwo').addClass('error');
                    imageCheck.show();   
                }
            }else{
                $('#validTwo').text('Поле пустое! Алё!');
                $('#validTwo').addClass('error');
                $('#submit').attr('disabled', true);
                imageCheck.hide();
            }
            
        });
        answerThree.blur(function(){
            //3 question
            if(answerThree.val() != ''){
                if(answerThree.val().replace(/\s/g, '') == "зеленый" || answerThree.val().replace(/\s/g, '') == "зелёный" || answerThree.val().replace(/\s/g, '') == "Зелёный" || answerThree.val().replace(/\s/g, '') == "Зеленый"){
                    $('#validThree').text('Умничка, правильно!');
                    $('#answerFour').attr('disabled', false);
                    $('#validThree').removeClass('error').addClass('ok');
                    imageCheck.hide();
                }else{
                    $('#validThree').text('Увы но нет, вот мои мама и папа сразу бы сказали!');
                    $('#submit').attr('disabled', true);
                    $('#validThree').addClass('error'); 
                    imageCheck.show();   
                }
            }else{
                $('#validThree').text('Поле пустое! Алё!');
                $('#validThree').addClass('error');
                $('#submit').attr('disabled', true);
                imageCheck.hide();
            }
            
            
        });
        answerFour.blur(function(){
            //4 question
            if(answerFour.val() != ''){
                if(answerFour.val().replace(/\s/g, '') == "Дота" || answerFour.val().replace(/\s/g, '') == "дота" || answerFour.val().replace(/\s/g, '') == "dota" || answerFour.val().replace(/\s/g, '') == "Dota" ){
                    $('#validFour').text('Вадим бы тоже отгадал');
                    $('#answerFour').attr('disabled', false);
                    $('#submit').attr('disabled', false);
                    $('#validFour').removeClass('error').addClass('ok');
                    imageCheck.hide();
                }else{
                    $('#validFour').text('Неа');
                    $('#submit').attr('disabled', true);
                    $('#validFour').addClass('error'); 
                    imageCheck.show();   
                }
            }else{
                $('#validFour').text('Поле пустое! Алё!');
                $('#validFour').addClass('error');
                $('#submit').attr('disabled', true);
                imageCheck.hide();
            }
            
            
        });
        
}); 
