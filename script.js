const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', () => {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});


const customRadio = document.getElementById('personalizado');
const genderContainer = document.querySelector('.gender-container')
  if (customRadio.prop('checked') === true) {
    const newInput = document.createElement('input');
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    genderContainer.appendChild(newInput);  
  }
