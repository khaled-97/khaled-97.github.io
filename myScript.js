const outputDiv = document.getElementById('output');
const inputField = document.getElementById('commandInput');

inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = inputField.value.trim();
    inputField.value = '';
    executeCommand(command);
  }
});

function executeCommand(command) {
  // Basic example commands
  if (command === 'help') {
    outputDiv.innerHTML += '<p>Available commands: help, about, contact</p>';
  } else if (command === 'about') {
    outputDiv.innerHTML += '<p>This is a simple terminal interface.</p>';
  } else if (command === 'contact') {
    outputDiv.innerHTML += '<p>Contact us at suui@gmail.com</p>';
  } else {
    outputDiv.innerHTML += '<p>Command not found. Type "help" for available commands.</p>';
  }
}
