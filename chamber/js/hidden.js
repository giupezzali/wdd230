//Join.html Hidden Button

const d = new Date();

function currentDateH () {
  const datetime = "loaded: " + d.getDate() + "/"
	+ (d.getMonth()+1)  + "/"
	+ d.getFullYear() + " || "
	+ d.getHours() + ":"
	+ d.getMinutes() + ":"
	+ d.getSeconds();
console.log(datetime)
document.getElementById("hdate").value = datetime
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", currentDateH);