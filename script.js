// Exibe o email do usuário quando o botão Entrar for clicado
const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', () => {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

// Verifica se há algum campo não preenchido
const singUpBtn = document.getElementById('facebook-register');
singUpBtn.addEventListener('click', (event) => {
  const element = event;
  element.preventDefault();
  const isError = document.getElementById('error-message');
  if (isError !== null) {
    isError.remove();
  }
  const mainFormInput = document.getElementsByClassName('main-form');
  for (let index = 0; index < mainFormInput.length; index += 1) {
    if (mainFormInput[index].value === '') {
      const newElement = document.createElement('p');
      newElement.id = 'error-message';
      newElement.innerHTML = 'Campos inválidos';
      document.querySelector('.form-registration').appendChild(newElement);
      break;
    }
  }
});

// Adiona um campo de texto se o gênero personalizado for selecionado
const newField = document.createElement('input');
const genderCustom = document.getElementById('personalizado');
genderCustom.addEventListener('change', () => {
  newField.setAttribute('name', 'gender-custom');
  newField.setAttribute('placeholder', 'Gênero (opcional)');
  document.querySelector('.gender-container').appendChild(newField);
});

// Remove o elemento do gênero personalizado caso outro gênero seja selecionado
function removeCustomGender() {
  document.getElementsByName('gender-custom')[0].remove();
}
const genderMale = document.getElementById('feminino');
const genderFemale = document.getElementById('masculino');
genderMale.addEventListener('click', removeCustomGender);
genderFemale.addEventListener('click', removeCustomGender);

// Exibe mensagem de validação
function welcomeMessage() {
  // const userData ={
  //   firstName: document.getElementById('firstname').value,
  //   lastName:document.getElementById('lastname').value,
  //   emailOrPhone:document.getElementById('phone-email').value,
  //   birthdate:document.getElementById('birthdate').value,
  //   gender:document.querySelector('input:checked').value,
  // };
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const login = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input:checked').value;

  return `Olá, ${firstName}${lastName}\n${login}\n${birthdate}\n${gender}.`;
}

function validationPassed() {
  let isValid = '';
  const mainFormInput = document.getElementsByClassName('main-form');
  for (let index = 0; index < mainFormInput.length; index += 1) {
    if (mainFormInput[index].value === '') {
      isValid = false;
    }
  }
  if (isValid === '') {
    const message = welcomeMessage();
    document.querySelector('.right-content').innerText = message;
  }
}

singUpBtn.addEventListener('click', validationPassed);
