function headerScroll() {
    let header = $('header');
    if (!header.hasClass('for-other')) {
        const TOP = header.children('.top')[0].getBoundingClientRect().height * 0.9;
        if(window.scrollY > TOP) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    }
}

function searchToggle() {
    if ($('.search').hasClass('active')) {
        searchOff();
    } else {
        searchOn();
    }
}

function searchOn() {
    off();
    $('.search').addClass('active');
    $('header').removeClass('fixed').addClass('for-other');
    $('header > .top > .icon').removeClass('fa-search').addClass('fa-close');
    $('.cover').addClass('active');
}

function searchOff() {
    $('.search').removeClass('active');
    $('header').removeClass('for-other');
    $('header > .top > .icon').removeClass('fa-close').addClass('fa-search');
    $('.cover').removeClass('active');
    headerScroll();
}

function menuToggle() {
    if ($('.menu-toggle').hasClass('active')) {
        menuOff();
    } else {
        menuOn();
    }
}

function menuOn() {
    off();
    $('.menu-toggle').addClass('active').children('.icon').removeClass('fa-bars').addClass('fa-close');
    $('.menu').addClass('active');
    $('header').removeClass('fixed').addClass('for-other');
    $('.cover').addClass('active');
}

function menuOff() {
    $('.menu-toggle').removeClass('active').children('.icon').removeClass('fa-close').addClass('fa-bars');
    $('.menu').removeClass('active');
    $('.cover').removeClass('active');
    $('header').removeClass('for-other');
    headerScroll();
}

function toggleSubMenu() {
    let item = $(this);
    if (item.hasClass('active')) {
        item.removeClass('active');
        item.children('.icon').removeClass('fa-angle-down');
        item.children('.icon').addClass('fa-angle-right');
    } else {
        $('span.item.active').removeClass('active').children('.icon').removeClass('fa-angle-down').addClass('fa-angle-right');
        item.addClass('active');
        item.children('.icon').removeClass('fa-angle-right');
        item.children('.icon').addClass('fa-angle-down');
    }
}

function searchClick() {
    window.location = ('https://www.mercurynews.com/?s=' + encodeURIComponent($('.search > input').val()) +'&orderby=date&order=desc');
}

function cookieClick() {
    if (confirm('Do you want some cookies?')) {
        console.log('You got some cookies!');
    }
}

function subLogToggle() {
    if ($('.sub-log > .icon').hasClass('active')) {
        subLogOff();
    } else {
        subLogOn();
    }
}

function subLogOn() {
    off();
    $('.sub-log > .icon').addClass('active').children('.icon > span:last-child').removeClass('fa-angle-down').addClass('fa-angle-up');
    $('.sub-log-menu').addClass('active');
    $('header').removeClass('fixed').addClass('for-other');
    $('.cover').addClass('active');
}

function subLogOff() {
    $('.sub-log > .icon').removeClass('active').children('.icon > span:last-child').removeClass('fa-angle-up').addClass('fa-angle-down');
    $('.sub-log-menu').removeClass('active');
    $('.cover').removeClass('active');
    $('header').removeClass('for-other');
    headerScroll();
}

function off() {
    searchOff();
    menuOff();
    subLogOff();
}

function footerSectionToggle() {
    let icon = $(this);
    if (icon.hasClass('active')) {
        icon.parent().parent().removeClass('active');
        icon.removeClass('fa-caret-up').addClass('fa-caret-down');
    } else {
        icon.parent().parent().addClass('active');
        icon.children('.icon').removeClass('fa-caret-down').addClass('fa-caret-up');
    }
}

$(document).ready(function() {
    $(window).scroll(headerScroll);
    $('header > .top > .icon').click(searchToggle);
    $('.menu-toggle').click(menuToggle);
    $('.item').click(toggleSubMenu);
    $('.search > .button').click(searchClick);
    $('.cover').click(off);
    $('.cookie').click(cookieClick)
    $('.sub-log > .icon').click(subLogToggle);
    $('.section > .title > .icon').click(footerSectionToggle)
});
