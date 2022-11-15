$(document).ready(() => {
    // Selectors
    // Select html tags
    // Get element by Id
    const paragraphs = jQuery('p#first');
    console.log(paragraphs);
    // Get element by Class Name
    const paragraph2 = jQuery('p.third');
    console.log(paragraph2);
    // Select all elements
    const all = jQuery('*')
    console.log(all)
    // Select first element from a list of many elements
    const paragraph1 = jQuery('p:first')
    console.log(paragraph1)

    // Events
    jQuery('button#first').mouseenter(() => {
        console.log('Mouse is now on top of button');
    });
    jQuery('button#first').dblclick(() => {
        console.log('Button Double Clicked');
    });
    jQuery('p.third').click(() => {
        console.log('Third paragraph clicked');
    });

    // Dynamic
    $('button#first').mouseenter(() => {
        $('p').hide();
    });
    $('button#first').mouseleave(() => {
        $('p').show();
    });

    $('button#first').click(() => {
        $('body').addClass('styler');
        $('p#second').removeClass('styler');
        // $(this).hide();
    });

    $('button#first').dblclick(() => {
        $('body').removeClass('styler');
        $('p#second').removeClass('xxxx');
        // $(this).hide();
    });

    // Chain Multiple Events
    $('button#first').on({
        click: () => { },
        mouseenter: () => { },
        mouseleave: () => { }
    })
});