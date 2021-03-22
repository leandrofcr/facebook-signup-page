const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', () => {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

const singUpBtn = document.getElementById('facebook-register');
singUpBtn.addEventListener('click', () => {

  const mainFormInput = document.getElementsByClassName('main-form');
  for (let index = 0; index < mainFormInput.length; index += 1) {
    if (mainFormInput[index].value === '') {
      const newElement = document.createElement('p');
      newElement.innerText = 'Campos inválidos';
      document.querySelector('.form-registration').appendChild(newElement);  
      console.log(mainFormInput[index]);   
    }
  }
})
