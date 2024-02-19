const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');
const botonVerFotos = document.getElementById('verFotos');
const mensaje = document.getElementById('mensaje');
const fotosContainer = document.getElementById('fotosContainer');

botonSi.addEventListener('click', () => {
  mensaje.textContent = 'Te amo más amor, besos <3'; 
  
  setTimeout(() => { 
    const verFotos = confirm('¿Quieres ver algunas fotos nuestras?');
    if (verFotos) {
      mostrarFotos();
    }
  }, 1000); 
});

botonNo.addEventListener('mouseover', () => {
  botonNo.style.position = 'absolute';
  const x = Math.random() * (window.innerWidth - botonNo.clientWidth);
  const y = Math.random() * (window.innerHeight - botonNo.clientHeight);
  botonNo.style.left = x + 'px';
  botonNo.style.top = y + 'px';
});


function mostrarFotos() {
  const fotos = [
    'fotos/imagen1.jpeg',
    'fotos/imagen2.jpeg',
    'fotos/imagen3.jpeg',
    'fotos/imagen4.jpeg',
  ];

  fotosContainer.innerHTML = '';

  fotos.forEach(foto => {
    const img = document.createElement('img');
    img.src = foto;
    img.alt = 'Foto';
    fotosContainer.appendChild(img);
  });
}