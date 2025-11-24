// Verifica os login
if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'index.html';
}
// Parte de cursos
const courses = [
  {
    title: "Tecnologia da Informação",
    category: "tecnologia",
    image: "assets/images/ti.jpg",
    description: "Aprenda redes, desenvolvimento e suporte técnico com especialistas."
  },
  {
    title: "Direito Constitucional",
    category: "direito",
    image: "assets/images/direito.jpg",
    description: "Curso completo sobre legislação, constituição e práticas jurídicas."
  },
  {
    title: "Administração",
    category: "gestao",
    image: "assets/images/administracao.jpg",
    description: "Aprenda gestão de negócios, liderança e finanças corporativas."
  },
  {
    title: "Inteligência Artificial",
    category: "IA",
    image: "assets/images/IA.jpg",
    description: "Aprenda os fundamentos e aplicações práticas de IA."
  },
   {
    title: "Medicina",
    category: "Medicina",
    image: "assets/images/medicina.jpg",
    description: "Mergulhe nos conceitos básicos e avanços na área médica."
   },
   {
    title: "Odontolgia",
    category: "Odontologia",
    image: "assets/images/odontologia.jpg",
    description: "mergulhe nos conceitos básicos e avanços na área odontológica."
   },
   {
    title: "Enfermagem",
    category: "Enfermagem",
    image: "assets/images/Enfermagem.jpg",
    description: "Enfermagem é a arte de cuidar e a ciência de curar."
   },
   {
    title: "Criaçao de Games",
    category: "Games",
    image: "assets/images/games.gif",
    description: "Games é a arte de criar mundos interativos e experiências imersivas."
   },
   {
    title: "Contabilidade",
    category: "Contabilidade",
    image: "assets/images/contabilidade.gif",
    description: "Contabilidade aprenda a linguagem dos negócios e a arte de interpretar números."
   }
];

const container = document.getElementById('coursesContainer');
const modal = new bootstrap.Modal(document.getElementById('courseModal'));
const modalTitle = document.getElementById('courseModalLabel');
const modalDesc = document.getElementById('courseDescription');
const modalImg = document.getElementById('courseImage');

// Renderiza os cards
function renderCourses(filter = 'all') {
  container.innerHTML = '';
  const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter);

  filtered.forEach(course => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card h-100 course-card border-0 shadow-sm rounded-4">
        <img src="${course.image}" class="card-img-top rounded-top-4" alt="${course.title}">
        <div class="card-body text-center">
          <h5 class="fw-bold">${course.title}</h5>
          <p class="text-muted small">${course.description.substring(0, 60)}...</p>
          <button class="btn btn-primary mt-2">Ver detalhes</button>
        </div>
      </div>
    `;
    card.querySelector('button').addEventListener('click', () => {
      modalTitle.textContent = course.title;
      modalDesc.textContent = course.description;
      modalImg.src = course.image;
      modal.show();
    });
    container.appendChild(card);
  });
}

renderCourses();

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(btn.dataset.category);
  });
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html';
});

// Formulário de inscrição
document.getElementById('enrollForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Inscrição enviada com sucesso!');
  modal.hide();
});
