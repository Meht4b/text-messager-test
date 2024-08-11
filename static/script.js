document.getElementById('messageBoxButton').onclick=submitFunction;
document.getElementById('messageBoxInput').addEventListener('keypress',function(event){
    if (event.key == 'Enter'){
        event.preventDefault();
        document.getElementById('messageBoxButton').click();
    }
})

function submitFunction(){
    
    const message = document.getElementById('messageBoxInput').value;
    
    if (message != ''){
        document.getElementById('messageBoxInput').value='';
        const liChild = document.createElement('li');

        const senderName = document.createElement('p');
        senderName.innerHTML='person 1';
        const senderMessage = document.createElement('h3');
        senderMessage.innerHTML=message;

        liChild.appendChild(senderName)
        liChild.appendChild((senderMessage))
        liChild.classList.add('textBox')
        liChild.classList.add('userMessages')

        document.getElementById('messages').appendChild(liChild)
        var messageBody = document.querySelector('#messages');
        messageBody.lastChild.scrollIntoView();
    }

}

