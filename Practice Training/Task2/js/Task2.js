var friends = ['Вася', 'Васенька', 'Васёк', 'Василий', 'Васяня', 'Василиск', 'Вассерман', 'Вахтанг'];
var text = 'Современная образовательная парадигма, ратифицируя приоритет \n' +
    '   личностной ориентации педагогического процесса, в ходе которого \n' +
    '   осуществляется развитие природных задатков, заложенных в каждом индивидууме, \n' +
    '   требует переосмысления существующих традиционных форм и \n' +
    '   методов общеобязательного образования.';
var answers = ['А ну поясни ещё раз...',
    'Чёёёёёё',
    'Сложно сложно не понятно',
    'Кавоооо',
    'Замолчи уже',
    'Я тебя игнорю',
    '...',
    'вы добавлены в чс...'];
for (var i = 0; i < friends.length; i++) {
    var el = document.createElement("div");
    el.classList.add("list-item");
    el.id = friends[i];
    el.setAttribute('onclick', 'openChat(this)');
    el.innerHTML = '<img src="source/' + friends[i] + '.jpg" class="list-img"><div class="name">' + friends[i] + '</div>';
    var cont = document.getElementById("list");
    cont.appendChild(el);
}

function openChat(friend) {
    var cont = document.getElementById("messages");
    cont.innerHTML = '';

    var hi = document.createElement("div");
    hi.classList.add("answer");
    hi.innerHTML = '<div class="answer-text">Привет, ' + friend.id + '. Поясни за образовательную парадигму?</div><img src="source/myphoto.jpg" class="sms-img">';
    var cont = document.getElementById("messages");
    cont.appendChild(hi);

    for (var i = 0; i < 8; i++) {
        var mes = document.createElement("div");
        mes.classList.add("sms");
        mes.innerHTML = '<img src="source/' + friend.id + '.jpg" class="sms-img"><div class="sms-text">' + text + '</div>';
        var cont = document.getElementById("messages");
        cont.appendChild(mes);

        var ans = document.createElement("div");
        ans.classList.add("answer");
        ans.innerHTML = '<div class="answer-text">' + answers[i] + '</div><img src="source/myphoto.jpg" class="sms-img">';
        var cont = document.getElementById("messages");
        cont.appendChild(ans);
    }
}