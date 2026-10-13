import data from './data.json';

const userList = document.getElementById('userList');
const userName = document.getElementById('userName');
const addUser = document.getElementById('addUser');

const users = [...data.users];

function renderUsers() {

  userList.innerHTML = '';

  console.clear();

  users.forEach(user => {

    // Mostrar nombre en la consola
    console.log(user.name);

    // Mostrar nombre en el HTML
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    userList.appendChild(listItem);

  });
}

addUser.addEventListener('click', () => {

  const name = userName.value.trim();

  if (name === '') {
    alert('Debes escribir un nombre');
    return;
  }

  users.push({ name });

  renderUsers();

  userName.value = '';
});

// Mostrar usuarios iniciales
renderUsers();