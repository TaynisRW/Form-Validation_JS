// Almacenamos los elementos del Form en constantes para poder hacer las validaciones más adelante
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Agregamos el evento 'submit' al formulario
form.addEventListener('submit', e => {
    // Prevenimos que la página se recargue automáticamente
    e.preventDefault();
    // Llamamos a la función checkInputs() para hacer las validaciones
	checkInputs();
});

// Esta función hará todas las validaciones necesarias que querramos poner en nuestro Form
function checkInputs() {
	// .trim() nos ayuda a remover los espacios en blanco de los valores que el usuario pueda ingresar para poder hacer una validación más limpia
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
    // Validamos si el input de username está vacio
	if(usernameValue === '') {
        // En caso de estar vacio mandamos un mensaje de error
		setErrorFor(username, 'El usuario no puede quedar vacio');
	} else {
        // En caso de que tenga un valor llamamos a la función correspondiente 
		setSuccessFor(username);
	}
    
    // Validamos si el input de email está vacio
	if(emailValue === '') {
        // En caso de estar vacio mandamos un mensaje de error
		setErrorFor(email, 'El email no puede quedar vacio');
	} else if (!isEmail(emailValue)) {
        // Validamos si tiene los carácteres y longitud válida haciendo uso de la función isEmail()
		setErrorFor(email, 'Ingrese un email válido');
	} else {
        // En caso de que tenga un valor válido llamamos a la función correspondiente
		setSuccessFor(email);
	}
    
    // Validamos si el input de password está vacio 
	if(passwordValue === '') {
        // En caso de estar vacio mandamos un mensaje de error
		setErrorFor(password, 'La contraseña no puede quedar vacia');
	} else {
        // En caso de que tenga un valor válido llamamos a la función correspondiente
		setSuccessFor(password);
	}
    
    // Validamos si el input de password está vacio
	if(password2Value === '') {
        // En caso de estar vacio mandamos un mensaje de error
		setErrorFor(password2, 'La contraseña no puede quedar vacia');
	} else if(passwordValue !== password2Value) {
        // En caso de que la segunda contraseña no coincida mandamos un mensaje de error
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
         // En caso de que tenga un valor y ambas contraseñas coincidan llamamos a la función correspondiente
		setSuccessFor(password2);
	}
}

// Función encargada de pintar los estilos correspondientes de error y mostrar el mensaje
function setErrorFor(input, message) {
    // Guardamos en una constante el nodo padre del input para eso utilizamos .parentElement
    const formControl = input.parentElement;
    // Seleccionamos la etiqueta small del formulario
    const small = formControl.querySelector('small');
    // Le añadimos la clase 'form-control error' al input
    formControl.className = 'form-control error';
    // Le insertamos el texto correspondiente dependiendo del error
	small.innerText = message;
}

// Función encargada de pintar los estilos correspondientes de éxito
function setSuccessFor(input) {
    // Guardamos en una constante el nodo padre del input para eso utilizamos .parentElement
    const formControl = input.parentElement;
    // Le añadimos la clase 'form-control success' al input
	formControl.className = 'form-control success';
}

// Función encargada de validar si el input email contiene valores válidos
function isEmail(email) {
    // Retornamos una expresión regular (RegEx) que valida letras, números y que símbolos son validos en un email y le agregamos el método .test() para que compruebe esta validación con lo que escribimos
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});