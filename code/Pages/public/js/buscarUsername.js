const searchInput = document.getElementById('search');
searchInput.addEventListener('input', buscarUsuarios);

async function buscarUsuarios() {
  const query = searchInput.value;
  const userList = document.querySelector('.swiper-wrapper');
  userList.innerHTML = '';
  try {
    const response = await fetch(`/buscar_usuario?q=${query}`);
    if (response.ok) {
      const data = await response.json();
      const userList = document.querySelector('.swiper-wrapper');
      userList.innerHTML = '';
      let slide = document.createElement('div');
      slide.className = 'swiper-slide';

      function createUserElement(usuario) {
        const userElement = document.createElement('div');
        userElement.className = 'user_article';
        userElement.innerHTML = `
          <i class="fa-solid fa-circle-user user_icon"></i>
          <p class="user_apodo">${usuario.nombre}</p>
        `;

        // Add a click event listener to the user article
        userElement.addEventListener('click', () => {
          user_review(); // Call your user_review function
        });

        return userElement;
      }

      data.forEach(usuario => {
        if (slide.childElementCount === 5) {
          userList.appendChild(slide); // Agrega el slide actual
          slide = document.createElement('div'); // Crea un nuevo slide
          slide.className = 'swiper-slide';
        }
        slide.appendChild(createUserElement(usuario));
      });

      if (slide.childElementCount > 0) {
        userList.appendChild(slide);
      }
    } else {
      console.error('Error al obtener resultados de búsqueda:', response.status);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

function user_review() {
  window.location.href = "/user";
}
