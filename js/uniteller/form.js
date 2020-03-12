$(document).ready(function ($) {
    $('#cardNo').keyup(function(){
        if( $(this).val().length ) {
            $(this).parent().parent().parent().parent().find('a.cvc-info').addClass('active');
            // if entered value hide saved cards
            $('#savedCards').removeClass('d-block');
            if( $(this).val().length != 0 && $(this).val().length < 10 ) {
                $(this).addClass('not-valid');
                $(this).parent().find('.error-message').text('Введите 10ти значный номер карты');
            }
            else {
                $(this).removeClass('not-valid');
                $(this).parent().find('.error-message').text('');
            }

            if ($(this).val().indexOf('1') == 0) {
                $('.payment-card__front').attr('class','payment-card__front sberbank');
                $('#paymentCardLogo').attr('class','icon icon-sberbank');
            }
            else if ($(this).val().indexOf('2') == 0) {
                $('.payment-card__front').attr('class','payment-card__front alfabank');
                $('#paymentCardLogo').attr('class','icon icon-alfabank');
            }
            else if ($(this).val().indexOf('3') == 0) {
                $('.payment-card__front').attr('class','payment-card__front otkritiebank');
                $('#paymentCardLogo').attr('class','icon icon-otkritiebank')
            }
            else if ($(this).val().indexOf('4') == 0) {
                $('.payment-card__front').attr('class','payment-card__front tinkoffbank');
                $('#paymentCardLogo').attr('class','icon icon-tinkoffbank');
            }
            else {
                $('.payment-card__front').attr('class','payment-card__front blank');
                $('#paymentCardLogo').attr('class','icon icon-blank');
            }

            if( $(this).val()[1] ) {
                if( $(this).val()[1].indexOf('1') == 0 ) {
                    $('#paymentCardType').attr('class','payment-card__type visa');
                }
                else if( $(this).val()[1].indexOf('2') == 0 ) {
                    $('#paymentCardType').attr('class','payment-card__type mir');
                }
                else if( $(this).val()[1].indexOf('3') == 0 ) {
                    $('#paymentCardType').attr('class','payment-card__type maestro');
                }
                else if( $(this).val()[1].indexOf('4') == 0 ) {
                    $('#paymentCardType').attr('class','payment-card__type masterc');
                }
                else {
                    $('#paymentCardType').attr('class','payment-card__type');
                }
            }
        }
        else {
            // if deleted all values show saved cards
            $('#savedCards').addClass('d-block');
        }
    });
    // on focus to #cardNo show saved cards
    $('#cardNo').focus(function(){
        $('#savedCards').addClass('d-block');
    });
    // on focusout to #cardNo hide saved cards
    // $('#cardNo').focusout(function(){
    //     $('#savedCards').removeClass('d-block');
    // });
    $('.payment-card__saved_card-number').click(function(){
        var cardno = $(this).attr('cardno');
        $('#cardNo').val(cardno);
        $('#cardNo').addClass('active');
        $('#cardNo').parent().find('label').addClass('active');
        $('#cardNo').blur();
        $('#savedCards').removeClass('d-block');
    });
    $('.md-form_custom input').keyup(function(){
        var maxlength = $(this).attr('maxlength');
        console.log(maxlength);
        if( $(this).val().length ) {
            $(this).addClass('active');
            $(this).parent().find('a.clear-input').addClass('active');
        } else {
            $(this).removeClass('active');
        }
        $('a.clear-input').click(function(){
            $(this).parent().find('input').val('');
            $(this).parent().find('label').removeClass('active');
            $(this).removeClass('active');
        });
        if($(this).val().length == maxlength) {
            $(this).blur();
        }
    });
});