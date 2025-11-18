self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // هذا الكود ضروري ليعتبره المتصفح تطبيقاً حقيقياً
});