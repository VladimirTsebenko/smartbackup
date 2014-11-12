var login = prompt("Введите логин:")

if (login == "Админ"){
psw = prompt("Введите пароль:");

}else if (login == null){
alert("Вход не выполнен");
}else {
alert("Я Вас не знаю");}

if (psw == "Директор мира"){
alert("Добро пожаловать!");
}else if (psw == null){
alert("Вход отменён");
}else {
alert("Пароль неверен");}


