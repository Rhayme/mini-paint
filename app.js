$(document).ready(function () {
    var color = 'white';
    var colors = 'red green blue yellow white'

    $('#red').on('click', function () {
        color = 'red';
    }); //end color red

    $('#green').on('click', function () {
        color = 'green';
    });

    $('#yellow').on('click', function () {
        color = 'yellow';
    });

    $('#blue').on('click', function () {
        color = 'blue';
    });

//drawing
    $('.box').on('mousedown', function () {
        $('.box').on('mouseenter', function () {
            $(this).addClass(color);//this current object that is being click.
        });
    });

    $('.box').on('mouseup', function () {
        $('.box').off('mouseenter');
    })

    //remove the color and make to the default on double click
    $('.box').on('dblclick', function () {
        $(this).removeClass(colors);
    }); //end remove

    //reset button
    $('#reset').on('click', function () {
        $('.box').removeClass(colors);
    })


}); //end ready