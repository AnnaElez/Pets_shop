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
    menu_btn.addEventListener('click', openMenu);
});


let review_done = document.getElementById('review_done');
review_done.style.display = 'none';

let account_name = document.getElementById('account_name');
let account_age = document.getElementById('account_age');
let account_gender = document.getElementById('account_gender');
let review_text = document.getElementById('review_text');



const addReviewBlock = (ev) => {
    review_done.style.display = 'flex';

    let first_name;
    let last_name;
    let age;
    let gender;
    console.log(reviews);
    let textarea;
    for (i = 0; i >= 0; i++) {
        first_name = reviews[i].first_name;
        last_name = reviews[i].last_name;
        age = reviews[i].age;
        console.log(age);
        gender = reviews[i].gender;
        textarea = reviews[i].textarea;
        console.log(first_name)
    }
    account_name.innerHTML = first_name + " " + last_name;
    // console.log(account_name)
    account_age.innerHTML = age;
    account_gender.innerHTML = gender;
    review_text.innerHTML = textarea;


    

}



    // let first_name = reviews[0].first_name;
    // let last_name = reviews[0].last_name;
    // let age = reviews[0].age;
    // let gender = reviews[0].gender;
    // let textarea = reviews[0].textarea;
    // account_name.innerHTML = first_name + " " + last_name;
    // account_age.innerHTML = age;
    // account_gender.innerHTML = gender;
    // review_text.innerHTML = textarea;
    // // console.log(account_name);
    // let all_reviews = JSON.stringify(reviews);
    // // console.log(all_reviews)


let burger_menu = document.getElementById('burger_menu');
burger_menu.style.display = 'none';

let menu_btn = document.getElementById('menu_btn');

const openMenu = (ev) => {
    burger_menu.style.display = 'flex';

    // let first_name;
    // let last_name;
    // let age;
    // let gender;
    // console.log(reviews);
    // let textarea;
    // for (i = 0; i >= 0; i++) {
    //     first_name = reviews[i].first_name;
    //     last_name = reviews[i].last_name;
    //     age = reviews[i].age;
    //     console.log(age);
    //     gender = reviews[i].gender;
    //     textarea = reviews[i].textarea;
    //     console.log(first_name)
    // }
    // account_name.innerHTML = first_name + " " + last_name;
    // // console.log(account_name)
    // account_age.innerHTML = age;
    // account_gender.innerHTML = gender;
    // review_text.innerHTML = textarea;


    

}


