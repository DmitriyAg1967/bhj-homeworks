const chatWidget = document.getElementsByClassName('chat-widget');
const inputText = document.getElementById('chat-widget__input');
const message = document.getElementById('chat-widget__messages');
let newMessage ='';
const date = new Date();
const hour = new Intl.DateTimeFormat('en', { hour: '2-digit', hour12: false }).format(date);
const minute = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(date);
let botMessage = [
    'Где Ваша совесть?',
    'Вы не купили ни одного товара, чтобы с нами так разговаривать',
    'Кто тут?',
    'Добрый день.  До свидания!',
    'К сожалению все операторы в данный момент заняты. Не пишите нам больше!'
];

function clickChatWidget() {
    chatWidget[0].classList.add('chat-widget_active');
}

function textMessage(e) {
    newMessage = e.target.value;
}

function submitMessages(e) {
    if (e.key === "Enter") {
        message.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${hour}:${minute} </div>
    <div class="message__text">
        ${newMessage}
    </div>
    </div>
    `;
    inputText.value = "";
        newMessage = "";
        setTimeout(submitMessageBot, 1000);
    }
}

function submitMessageBot() {
    let randNumber = Math.round(Math.random() * (botMessage.length - 1));
    message.innerHTML += `
    <div class="message">
    <div class="message__time">${hour}:${minute} </div>
    <div class="message__text">
        ${botMessage[randNumber]}
    </div>
    </div>
        `;
}

function openChat() {
    if (!chatWidget.classList.contains('chat-widget_active')) {
        chatWidget.classList.add('chat-widget_active');
    }
}

document.addEventListener('keydown', submitMessages);
inputText.addEventListener('input', textMessage)
chatWidget[0].addEventListener('click', clickChatWidget);