function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        $('#ipay').addClass('d-none');
    }
    if (/android/i.test(userAgent)) {
        $('#ipay').addClass('d-none');
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        $('#spay').addClass('d-none');
        $('#gpay').addClass('d-none');
    }
    // console.log("unknown");
}
$(document).ready(function ($) {
    if( $(window).width() < 767 ){
        getMobileOperatingSystem();
        $('#otherPaymentsText').text('Оплатить с помощью:');
    }
    
    $('#payNow').click(function(){
        $(this).addClass('loading');
        $("#paymentInfo").validate({
            rules: {
                cardnumber : {
                    required: true,
                    number: true,
                    minlength: 16
                },
                month: {
                    required: true,
                    number: true,
                    minlength: 2,
                    maxlength: 2
                },
                year: {
                    required: true,
                    number: true,
                    minlength: 4,
                    maxlength: 4
                },
                cvc: {
                    required: true,
                    number: true,
                    minlength: 3,
                    maxlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                cardnumber : {
                    required: "Поле обязательно для заполнения",
                    number: "Допускаются только числа",
                    minlength: "Должно быть не менее 16 числ",
                },
                month: {
                    required: "Поле обязательно для заполнения",
                    number: "Допускаются только числа",
                    minlength: "Должно быть не менее 2 чисел",
                    maxlength: "Должно быть не более 2 чисел"
                },
                year: {
                    required: "Поле обязательно для заполнения",
                    number: "Допускаются только числа",
                    minlength: "Должно быть не менее 4 чисел",
                    maxlength: "Должно быть не более 4 чисел"
                },
                cvc: {
                    required: "Поле обязательно для заполнения",
                    number: "Допускаются только числа",
                    minlength: "Должно быть не менее 3 чисел",
                    maxlength: "Должно быть не более 3 чисел"
                },
                email: {
                    required: "Поле обязательно для заполнения",
                    email: "Поле email заполнено не корректно"
                },
            },
            errorElement : 'span',
            submitHandler: function() {    
                window.location.replace("./payment-success.html");                        
            },
        });
        setTimeout(function(){ 
            $('#payNow').removeClass('loading');
        }, 3000);
    });
});