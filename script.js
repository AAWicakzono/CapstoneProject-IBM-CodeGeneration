// Deklarasikan variabel untuk ketiga tombol tema berdasarkan ID-nya
const lightThemeButton = document.getElementById('light-theme-btn');
const darkThemeButton = document.getElementById('dark-theme-btn');
const systemThemeButton = document.getElementById('system-theme-btn');
lightThemeButton.addEventListener('click', setLightTheme);
darkThemeButton.addEventListener('click', setDarkTheme);
systemThemeButton.addEventListener('click', setSystemTheme);

// Fungsi untuk mengatur tema terang
function setLightTheme() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
}

// Fungsi untuk mengatur tema gelap
function setDarkTheme() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
}

// Fungsi untuk mengatur tema sesuai preferensi sistem
function setSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'system');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'system');
  }
}

// Fungsi untuk memeriksa nilai di localStorage dan menerapkan tema yang tersimpan
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    setLightTheme();
  } else if (savedTheme === 'dark') {
    setDarkTheme();
  } else if (savedTheme === 'system') {
    setSystemTheme();
  } else {
    // Jika tidak ada nilai yang disimpan, terapkan tema sistem sebagai default
    setSystemTheme();
  }
}

applySavedTheme();

// Fungsi untuk menangani smooth scroll saat link di navbar di-klik
function handleSmoothScroll(event) {
  event.preventDefault(); // Mencegah perilaku default link

  // Dapatkan ID dari link yang di-klik
  const targetId = event.currentTarget.getAttribute('href');

  // Dapatkan elemen target berdasarkan ID
  const targetElement = document.querySelector(targetId);

  // Lakukan smooth scroll ke elemen target
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
}

// Dapatkan semua link di navbar
const navbarLinks = document.querySelectorAll('nav a[href^="#"]');

// Tambahkan event listener 'click' pada setiap link di navbar
navbarLinks.forEach(link => {
  link.addEventListener('click', handleSmoothScroll);
});
