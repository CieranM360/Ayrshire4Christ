const verseReferences = [
    'John 3:16',
    'Philippians 4:13',
    'Jeremiah 29:11',
    'Proverbs 3:5-6',
    'Philippians 4:6',
  ];
  
  function getRandomReference() {
    const randomIndex = Math.floor(Math.random() * verseReferences.length);
    return verseReferences[randomIndex];
  }

  function fetchKJVVerse(reference) {
    const url = `https://bible-api.com/${encodeURIComponent(reference)}?translation=kjv`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const verseText = data.text;
        const verseReference = data.reference;
        const votdTextElement = document.querySelector('.votd-text');
        const votdReferenceElement = document.querySelector('.votd-reference');
  
        votdTextElement.textContent = verseText;
        votdReferenceElement.textContent = verseReference;
      })
      .catch((error) => {
        console.error('Error fetching verse:', error);
      });
  }
  
  // Fetch a random verse from the KJV
  fetchKJVVerse(getRandomReference());

  // ... existing code ...

function updateTransform(element, mouseX, mouseY) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (mouseX - centerX) / 20;
    const offsetY = (mouseY - centerY) / 20;
    
    element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    element.style.boxShadow = `${offsetX}px ${offsetY}px 20px rgba(0, 0, 0, 0.2)`;
  }
  
  document.addEventListener('mousemove', (event) => {
    const votdContainer = document.querySelector('.votd-container');
    updateTransform(votdContainer, event.clientX, event.clientY);
  });
  

  function updateTransform(element, mouseX, mouseY) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (mouseX - centerX) / 20;
    const offsetY = (mouseY - centerY) / 20;
    
    const tiltX = offsetY * -1;
    const tiltY = offsetX;
  
    element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    element.style.boxShadow = `${offsetX}px ${offsetY}px 20px rgba(0, 0, 0, 0.2)`;
  }
  
  document.addEventListener('mousemove', (event) => {
    const votdContainer = document.querySelector('.votd-container');
    updateTransform(votdContainer, event.clientX, event.clientY);
  });