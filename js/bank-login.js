document.getElementById('bank-login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    const errorMessage = document.getElementById('error-message');

    //check user or password
    if(userEmail == 'user@gmail.com' && userPassword === 'Password'){
        window.location.href = 'banking.html';
    }else{
        errorMessage.style.visibility = 'visible';
    }
})