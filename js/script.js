$(() => {

    $('#position-select').on('change', function(){
        $('.fret').removeClass('selected');
        if($(this).val() === "one"){
            $('.pos1').addClass('selected')
        }
        if($(this).val() === "two"){
            $('.pos2').addClass('selected')
        }
        if($(this).val() === "three"){
            $('.pos3').addClass('selected')
        }
        if($(this).val() === "four"){
            $('.pos4').addClass('selected')
        }
        if($(this).val() === "five"){
            $('.pos5').addClass('selected')
        }
    })

})
