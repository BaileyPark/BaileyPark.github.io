const login_id = document.querySelector('#login-id');
const login = document.querySelector('#login');
let remain_id = localStorage.getItem("ID");
const greeting = document.querySelector("#greeting")

function check_id(id) {
    if(localStorage.getItem("ID")) {
        login.classList.add('hide');
        greeting.innerText = `${id}님 환영합니다!`;
    }
}

check_id(remain_id);

function loginEvent(event) {
    event.preventDefault();
    localStorage.setItem('ID', login_id.value);
    remain_id = localStorage.getItem("ID");
    check_id(remain_id);
}

login.addEventListener("submit", loginEvent);
