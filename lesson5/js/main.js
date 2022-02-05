const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("list");

button.addEventListener("click", function() {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = input.value;
    btn.textContent = "❌";
    li.append(btn);
    list.append(li);
    button.addEventListener("click", deleteLi);
    input.focus();

});

function deleteLi() {
    const parentli = (this).parentNode.remove();
    input.focus();
}

