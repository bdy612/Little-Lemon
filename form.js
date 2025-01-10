function check(){
    const urlParams = new URLSearchParams(window.location.search);

    const username = urlParams.get('username');
    const password = urlParams.get('password');
    const email = urlParams.get('email');
    const age = urlParams.get('age');
}
function back(url){
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    localStorage.setItem("email",email)
    localStorage.setItem("age",age)
    window.location.href=url
}