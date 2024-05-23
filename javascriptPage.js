function style_element(id_of_element, id_of_btn) {
    document.getElementById(id_of_element).style.padding = "20px";
    document.getElementById(id_of_btn).style.borderBottom = "solid 1px black";
}

const arr = [
    "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br><br> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br><br> You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
];

const ids_of_que = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"];
const ids_of_ans = ["faqn1", "faqn2", "faqn3", "faqn4", "faqn5", "faqn6"];
const check = ['f', 'f', 'f', 'f', 'f', 'f'];


function change_inner_html(id_of_element) {
    for(let i=0; i<6; i++) {
        if(ids_of_que[i] != id_of_element) {
            document.getElementById(ids_of_ans[i]).innerHTML = "";
            document.getElementById(ids_of_ans[i]).style.padding = "0";
            check[i] = 'f'
        }
        else{
            if(check[i] == 'f'){
                document.getElementById(ids_of_ans[i]).innerHTML = arr[i];
                style_element(ids_of_ans[i], ids_of_que[i]);
                check[i] = 't';
            }
            else {
                document.getElementById(ids_of_ans[i]).innerHTML = "";
                document.getElementById(ids_of_ans[i]).style.padding = "0";
                check[i] = 'f';
            }
        }
    }
}

function fun1() {
    change_inner_html("faq1");
}

function fun2() {
    change_inner_html("faq2");
}

function fun3() {
    change_inner_html("faq3");
}

function fun4() {
    change_inner_html("faq4");
}

function fun5() {
    change_inner_html("faq5");
}

function fun6() {
    change_inner_html("faq6");
}


