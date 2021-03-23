const buttonLogin = document.getElementById('button-login');
const singUpBtn = document.getElementById('facebook-register');
const genderCustom = document.getElementById('personalizado');
const genderMale = document.getElementById('masculino');
const genderFemale = document.getElementById('feminino');
const mainFormInput = document.getElementsByClassName('main-form');

// Exibe o email do usuário quando o botão Entrar for clicado
buttonLogin.addEventListener('click', () => {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

// Verifica se há algum campo não preenchido
singUpBtn.addEventListener('click', (event) => {
  const element = event;
  element.preventDefault();
  const isError = document.getElementById('error-message');
  if (isError !== null) {
    isError.remove();
  }
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
const nameNewField = 'gender-custom';
genderCustom.addEventListener('click', () => {
  newField.setAttribute('name', nameNewField);
  newField.setAttribute('placeholder', 'Gênero (opcional)');
  document.querySelector('.gender-container').appendChild(newField);
});

// Remove o elemento do gênero personalizado caso outro gênero seja selecionado
function removeCustomGender() {
  if (document.getElementsByName(nameNewField)[0]) {
    document.getElementsByName(nameNewField)[0].remove();
  }
}
genderMale.addEventListener('click', removeCustomGender);
genderFemale.addEventListener('click', removeCustomGender);

// Exibe mensagem de validação
function welcomeMessage() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const login = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input:checked').value;

  return `Olá, ${firstName} ${lastName}\n
  ${login}\n
  ${birthdate}\n
  ${gender}`;
}

function validationPassed() {
  let isValid = '';
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

document.body.onresize = () => {
  if (window.screen.width <= 500) {
    if (document.querySelectorAll('.mobile-content').length > 0) {
      document.querySelector('.mobile-content').remove();
    }
    const mobileContent = document.createElement('div');
    mobileContent.className = 'mobile-content';
    document.body.appendChild(mobileContent);

    const mobileLogin = document.createElement('form');
    mobileLogin.className = 'mobile-login';
    mobileContent.appendChild(mobileLogin);

    const emailOrPhone = document.createElement('input');
    emailOrPhone.setAttribute('placeholder', 'Número de celular ou email');
    mobileContent.appendChild(emailOrPhone);

    const password = document.createElement('input');
    password.setAttribute('placeholder', 'Senha');
    password.setAttribute('type', 'password');
    mobileContent.appendChild(password);

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerText = 'Entrar';
    mobileContent.appendChild(submitBtn);

    const newAccBtn = document.createElement('button');
    newAccBtn.innerText = 'Criar nova conta';
    mobileContent.appendChild(newAccBtn);

    const forgot = document.createElement('a');
    forgot.innerText = 'Esqueceu a senha?';
    mobileContent.appendChild(forgot);
  }
};

// FONTE : https://cursos.alura.com.br/forum/topico-como-executar-uma-funcao-do-javascript-se-a-janela-do-browser-diminuir-de-800px-41605
