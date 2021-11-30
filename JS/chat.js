


document
    .getElementById('add-new-message')
    .addEventListener('click', function () {
        const messageInput = document.getElementById('messageText');
        const usernameInput = document.getElementById('username');
        messageInput.classList.remove('border')
        messageInput.classList.remove('border-danger')
        usernameInput.classList.remove('border')
        usernameInput.classList.remove('border-danger')

        if (usernameInput.value == '') {
            usernameInput.classList.add('border')
            usernameInput.classList.add('border-danger')
            window.alert("Please type in your username");
            return false;
        }

        if (messageInput.value == '') {
            messageInput.classList.add('border')
            messageInput.classList.add('border-danger')
            window.alert("Please type in the message");
            return false;
        }

        let actualDate = new Date();
        let actualTime = (actualDate.getDate() < 10 ? "0" : "") + actualDate.getDate() + "." +
            (actualDate.getMonth() < 9 ? "0" : "") + (actualDate.getMonth() + 1) + "." +
            actualDate.getFullYear() + " " +
            (actualDate.getHours() < 10 ? "0" : "") + actualDate.getHours() + ":" +
            (actualDate.getMinutes() < 10 ? "0" : "") + actualDate.getMinutes();


        const newMessage =
        `<div class="messages-group-item">
            <div class="row px-4">
                <div class="col-md-2 chat-username"><h5>${usernameInput.value}</h5></div>
                <div class="col chat-date">${actualTime}</div>
             </div>
                <div class="row px-4 chat-message">
                <div class="col">${messageInput.value}</div>
            </div>
        </div>`;

        const messagesColumn = document.getElementById('messages-column');


        messagesColumn.innerHTML += newMessage;

        messageInput.value = '';
        usernameInput.value = '';

        messagesColumn.scrollTo(0, messagesColumn.scrollHeight - messagesColumn.clientHeight);
    });


