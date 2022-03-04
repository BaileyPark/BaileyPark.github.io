const clockTitle = document.querySelector("#clock");
const dateTitle = document.querySelector("#day");
function currentDate() {
  const today = new Date();
  dateTitle.innerText = `${today.getFullYear()}년 ${String(
    today.getMonth() + 1
  ).padStart(2, "0")}월 ${String(today.getDate()).padStart(2, "0")}일`;
  clockTitle.innerText = `${String(today.getHours()).padStart(2, "0")}:${String(
    today.getMinutes()
  ).padStart(2, "0")}:${String(today.getSeconds()).padStart(2, "0")}`;
}

currentDate();
setInterval(currentDate, 1000);