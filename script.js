const spisok = document.getElementById("spisok");
const spisok_text = document.getElementById("spisok_text");
const submit_button = document.getElementById("submit_but");
function toggleSpisok(){
spisok.style.display = spisok.style.display === "flex" ? "none" : "flex";
}
function TextOn(){
    spisok_text.style.color = "red";
}
function TextOff(){
    spisok_text.style.color = "black";
}
function submit_but(){
console.log(inputCont())
submit_button.classList.remove("submit_but");
setTimeout(() => {
    submit_button.classList.add("submit_but");
},100)
toggleSpisok()
}
function inputCont(){
    let inp = document.getElementById("input_F");
    const value = inp.value;
    spisok_text.textContent = value;
    inp.value = "";
    return(value);
}
function showUveda() {
    const Uveda = document.getElementById("Uveda");
    Uveda.style.display = "block";
    Uveda.style.animation = "fadeIn 0.3s";
    setTimeout(() => {
        Uveda.style.animation = "fadeOut 0.3s";
        setTimeout(() => {
            Uveda.style.display = "none";
        }, 300);
    }, 3000);
}
function hihanke() {
const inp2 = document.getElementById("inputT");
inp2.value = "";
showUveda()
}