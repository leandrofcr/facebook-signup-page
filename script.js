// Exibe o email do usuário quando o botão Entrar for clicado
const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', () => {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

// Verifica se há algum campo não pree

const singUpBtn = document.getElementById('facebook-register');
singUpBtn.addEventListener('click', (event) => {
  const element = event;
  element.preventDefault();
  // const withError = document.getElementById('error-message');
  // if (withError !== null) {
  //   withError.remove();
  // }
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
// const genderCustom = document.getElementById('personalizado');
// genderCustom.addEventListener('change', () => {
//   const newField = document.createElement('input');
//   newField.setAttribute('name', 'gender-custom');
//   newField.setAttribute('placeholder', 'Gênero (opcional)');
//   newField.setAttribute('id', 'gender-custom');
//   document.querySelector('.gender-container').appendChild(newField);
// });

// Remove o elemento do gênero personalizado caso outro gênero seja selecionado
function removeCustomGender() {
  document.getElementById('gender-custom').remove();
}
const genderMale = document.getElementById('feminino');
const genderFemale = document.getElementById('masculino');
genderMale.addEventListener('click', removeCustomGender);
genderFemale.addEventListener('click', removeCustomGender);

// Exibe mensagem de validação

function welcomeMessage() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const login = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const genders = document.getElementsByName('gender');
  let gender = '';
  for (let index = 0; index < genders.length; index += 1) {
    if (genders[index].checked) {
      gender = genders[index].value;
      break;
    }
  }
  return `Olá, ${firstName}${lastName}!${login}${birthdate}${gender}.`;
}

function validationPassed() {
  const mainFormInput = document.getElementsByClassName('main-form');
  for (let index = 0; index < mainFormInput.length; index += 1) {
    if (mainFormInput[index].value !== '') {
      const message = welcomeMessage();

      const newEl = document.createElement('p');
      newEl.innerText = message;
      document.querySelector('.right-content').innerHTML = message;
    }
  }
}

singUpBtn.addEventListener('click', validationPassed);
