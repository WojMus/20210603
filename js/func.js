
// document.getElementById("btn").addEventListener("click", function (e) {
//     e.preventDefault(); //nie zniknie liczba
//     document.getElementById("text").innerHTML = document.getElementById("input").value;
// }

proba = (e) => {
    e.preventDefault();
    document.getElementById("text").innerHTML = document.getElementById("input").value
}
document.getElementById("btn").addEventListener("click", proba)