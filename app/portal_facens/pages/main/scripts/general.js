function abrirPortalAcademico() {
    var portalAcademicoButton = document.querySelector('#portal-academico-btn');
    var portalAcademicoDisplay = document.querySelector('#sub-title').style.display;

    if (portalAcademicoDisplay == 'none') {
      document.querySelector('#sub-title').style.display = 'block';
      portalAcademicoButton.style.background = '#0099F2';
      portalAcademicoButton.style.color = 'white';
      portalAcademicoButton.style.borderRight = '8px solid #005C9E';
    } else {
      document.querySelector('#sub-title').style.display = 'none';
      portalAcademicoButton.style.background = 'white';
      portalAcademicoButton.style.color = '#005C9E';
      portalAcademicoButton.style.borderRight = '';
    }
}

function abrirSuporte() {
    var suporteButton = document.querySelector('#suporte-btn');
    var suporteDisplay = document.querySelector('#sub-title-support').style.display;

    if (suporteDisplay== 'none') {
      document.querySelector('#sub-title-support').style.display = 'block';
      suporteButton.style.background = '#0099F2';
      suporteButton.style.color = 'white';
      suporteButton.style.borderRight = '8px solid #005C9E';
    } else {
      document.querySelector('#sub-title-support').style.display = 'none';
      suporteButton.style.background = 'white';
      suporteButton.style.color = '#005C9E';
      suporteButton.style.borderRight = '';
    }
}

let notificationToggle = document.querySelector('.bell');
let notificationContainer = document.querySelector('.notifications-container');

notificationToggle.onclick = function(){
  notificationContainer.classList.toggle('active');
}