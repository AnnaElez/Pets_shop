// Using info from input form
let reviews = [];
let btn = document.getElementById('btn');
const addReview = (ev) => {
    ev.preventDefault();
    let review = {
        first_name: document.getElementById('fname').value,
        last_name: document.getElementById('lname').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        textarea: document.getElementById('textarea').value
    }
    document.forms[0].reset();
    reviews.push(review);
}

document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', addReview);
    btn.addEventListener('click', addReviewBlock);
});


let review_done = document.getElementById('review_done');
review_done.style.display = 'none';

let account_name = document.getElementById('account_name');
let account_age = document.getElementById('account_age');
let account_gender = document.getElementById('account_gender');
let review_text = document.getElementById('review_text');

// Adding review block using info from input form

const addReviewBlock = (ev) => {
    review_done.style.display = 'flex';

    let first_name;
    let last_name;
    let age;
    let gender;
    console.log(reviews);
    let textarea;
    for (i = 0; i < reviews.length; i++) {
        first_name = reviews[i].first_name;
        last_name = reviews[i].last_name;
        age = reviews[i].age;
        console.log(age);
        gender = reviews[i].gender;
        textarea = reviews[i].textarea;
        console.log(first_name)
    }
    account_name.innerHTML = first_name + " " + last_name;
    account_age.innerHTML = age;
    account_gender.innerHTML = gender;
    review_text.innerHTML = textarea;
}




// Hamburger menu

let burger_menu = document.getElementById('burger_menu');
let open_menu_btn = document.getElementById('menu_btn');

const openMenu = (ev) => {
    burger_menu.style.display = 'flex';
}

const closeMenu = (ev) => {
    burger_menu.style.display = 'none';

}

let block_adapt_none = document.getElementById('adapt_none');
let close_menu_btn = document.getElementById('close_menu');
let product_none = document.getElementById('product_none');

// Checking is it mobile or pc
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()|| 
                isMobile.BlackBerry()|| 
                isMobile.iOS()|| 
                isMobile.Opera()|| 
                isMobile.Windows()
                );
    }
};

// If it's mobile than open/close hamburger menu

if(isMobile.any()){
    open_menu_btn.style.visibility = "visible";
    block_adapt_none.style.display = 'none';
    product_none.style.display = 'none';
    document.addEventListener('DOMContentLoaded', () => {
        open_menu_btn.addEventListener('click', openMenu);
    });

    document.addEventListener('DOMContentLoaded', () => {
        close_menu_btn.addEventListener('click', closeMenu);
    });
}
else{
    burger_menu.style.display = 'none';
}






window.addEventListener('mouseup', function(event){
    if (event.target != burger_menu && event.target.parentNode != burger_menu){
        burger_menu.style.display = 'none';
    }
});