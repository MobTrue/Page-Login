function isValidName(name) {
    const nameRegex = /^[A-Za-zÀ-ÿ]{4,}$/;
    return nameRegex.test(name);
}

function isValidNumber(number) {
    const phoneRegex = /^(?:\(?\d{2,3}\)?\s?)?\d{9}$/;
    return phoneRegex.test(number);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@(outlook\.com|hotmail\.com|gmail\.com)$/;
    return emailRegex.test(email);
}

function showAlert(title, text, icon) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'OK'
    });
}

function toggleForms() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const formTitle = document.getElementById('form-title');
    const promptText = document.getElementById('prompt-text');
    const toggleLink = document.getElementById('toggle-link');

    if (loginForm.style.display === 'flex') {
        registerForm.style.display = 'flex';
        loginForm.style.display = 'none';
        formTitle.textContent = 'Cadastre-se';
        promptText.textContent = 'Já tem um cadastro? ';
        toggleLink.textContent = 'Faça login.';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
        formTitle.textContent = 'Faça login';
        promptText.textContent = 'Não tem cadastro? ';
        toggleLink.textContent = 'Registre-se.';
    }
}

function validateRegistrationForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;

    if (!isValidName(name)) {
        showAlert('Erro!', 'Nome inválido. Por favor, insira um nome válido.', 'error');
        return;
    }

    if (!isValidNumber(whatsapp)) {
        showAlert('Erro!', 'Número de WhatsApp inválido. Por favor, insira um número válido.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showAlert('Erro!', 'E-mail inválido. Por favor, insira um e-mail válido.', 'error');
        return;
    }

    showAlert('Sucesso!', 'Formulário enviado com sucesso.', 'success');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
});

document.getElementById('toggle-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForms();
});

document.getElementById('register-form').addEventListener('submit', validateRegistrationForm);

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showAlert('Sucesso!', 'Formulário enviado com sucesso.', 'success');
});