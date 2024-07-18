let stars = document.getElementsByClassName("star");
function rating(n){
    let s=0;
    if(n>5){
        s=5;
    }
    remove(s,n);
    for (let i = s; i<n; i++) {
        stars[i].className = "fa-solid  fa-star star rate" ;
    }
    
}
function remove(s) {
    let i = s;
    while (i < s+5) {
        stars[i].className = "fa-solid fa-star star";
        i++;
    }
}