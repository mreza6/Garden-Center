/* Add any JavaScript you need to this file. */
window.onload = function() {
  showHome();
  document.querySelector('.home').onclick = showHome;
  document.querySelector('.tools').onclick = showTools;
  document.querySelector('.plants').onclick = showPlants;
  document.querySelector('.decor').onclick = showDecor;
  document.querySelector('.contact').onclick = showContact;
};

// hides other categories
function clear() {
  document.getElementById('tools').style.display = 'none';
  document.getElementById('plants').style.display = 'none';
  document.getElementById('decor').style.display = 'none';
}

// shows home page, hides other categories
function showHome() {
  var homeButton = document.querySelector('.home');
  var plantsButton = document.querySelector('.plants');
  var toolsButton = document.querySelector('.tools');
  var decorButton = document.querySelector('.decor');
  homeButton.id = 'active';
  if (plantsButton.id === 'active' || toolsButton.id === 'active' || decorButton.id === 'active') {
    plantsButton.id = '';
    toolsButton.id = '';
    decorButton.id = '';
  }
  var decorBody = document.getElementById('decor');
  var toolsBody = document.getElementById('tools');
  var plantsBody = document.getElementById('plants');
  var homeBody = document.getElementById('home');
  homeBody.style.display = 'block';
  if (
    toolsBody.style.display === 'block' ||
    plantsBody.style.display === 'block' ||
    decorBody.style.display === 'block'
  ) {
    toolsBody.style.display = 'none';
    plantsBody.style.display = 'none';
    decorBody.style.display = 'none';
  }
}

// shows tools page, hides other categories
function showTools() {
  clear();
  var homeButton = document.querySelector('.home');
  var plantsButton = document.querySelector('.plants');
  var toolsButton = document.querySelector('.tools');
  var decorButton = document.querySelector('.decor');
  toolsButton.id = 'active';
  if (homeButton.id === 'active' || plantsButton.id === 'active' || decorButton.id === 'active') {
    homeButton.id = '';
    plantsButton.id = '';
    decorButton.id = '';
  }
  var decorBody = document.getElementById('decor');
  var toolsBody = document.getElementById('tools');
  var plantsBody = document.getElementById('plants');
  var homeBody = document.getElementById('home');
  toolsBody.style.display = 'block';
  if (
    homeBody.style.display === 'block' ||
    plantsBody.style.display === 'block' ||
    decorBody.style.display === 'block'
  ) {
    homeBody.style.display = 'none';
    plantsBody.style.display = 'none';
    decorBody.style.display = 'none';
  }
}

// shows plants page, hides other categories
function showPlants() {
  clear();
  var homeButton = document.querySelector('.home');
  var plantsButton = document.querySelector('.plants');
  var toolsButton = document.querySelector('.tools');
  var decorButton = document.querySelector('.decor');
  plantsButton.id = 'active';
  if (homeButton.id === 'active' || toolsButton.id === 'active' || decorButton.id === 'active') {
    homeButton.id = '';
    toolsButton.id = '';
    decorButton.id = '';
  }
  var decorBody = document.getElementById('decor');
  var toolsBody = document.getElementById('tools');
  var plantsBody = document.getElementById('plants');
  var homeBody = document.getElementById('home');
  plantsBody.style.display = 'block';
  if (
    toolsBody.style.display === 'block' ||
    homeBody.style.display === 'block' ||
    decorBody.style.display === 'block'
  ) {
    toolsBody.style.display = 'none';
    homeBody.style.display = 'none';
    decorBody.style.display = 'none';
  }
}

// shows decor page, hides other categories
function showDecor() {
  var homeButton = document.querySelector('.home');
  var plantsButton = document.querySelector('.plants');
  var toolsButton = document.querySelector('.tools');
  var decorButton = document.querySelector('.decor');
  decorButton.id = 'active';
  if (homeButton.id === 'active' || toolsButton.id === 'active' || plantsButton.id === 'active') {
    homeButton.id = '';
    toolsButton.id = '';
    plantsButton.id = '';
  }
  var decorBody = document.getElementById('decor');
  var toolsBody = document.getElementById('tools');
  var plantsBody = document.getElementById('plants');
  var homeBody = document.getElementById('home');
  decorBody.style.display = 'block';
  if (
    toolsBody.style.display === 'block' ||
    plantsBody.style.display === 'block' ||
    homeBody.style.display === 'block'
  ) {
    toolsBody.style.display = 'none';
    plantsBody.style.display = 'none';
    homeBody.style.display = 'none';
  }
}

function showContact() {
  var homeButton = document.querySelector('.home');
  if (homeButton.id === 'active') {
    homeButton.id = '';
  }
}
