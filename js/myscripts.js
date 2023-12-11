// Global variables to store photo URLs and texts
let photoUrls = [];
let texts = [];
let galleryUrls = []

// Function to load photos and texts from the JSON file
async function loadData() {
  // Load photos
  let photoResponse = await fetch('photos.json');
  let photoData = await photoResponse.json();
  photoUrls = photoData.photos;

// Load photos
let galleryResponse = await fetch('galleryphotos.json');
let galleryData = await galleryResponse.json();
galleryUrls = galleryData.photos;

  // Load texts
  let textResponse = await fetch('texts.json'); // Assuming you have a texts.json
  let textData = await textResponse.json();
  texts = textData.texts;
}

function showRandomPhoto() {
  if (photoUrls.length > 0) {
      const randomIndex = Math.floor(Math.random() * photoUrls.length);
      const photoElement = document.getElementById('randomPhoto');
      photoElement.src = photoUrls[randomIndex];
  }
}


// Function to show a random gallery photo
function showRandomGallery() {
    if (galleryUrls.length > 0) {
        const randomIndex = Math.floor(Math.random() * galleryUrls.length);
        const photoElement = document.getElementById('randomGallery');
        photoElement.src = galleryUrls[randomIndex];
        // photoElement.style.width = "700px"; // Set a fixed width
    }
  }

// Function to change text
function changeText() {
  if (texts.length > 0) {
      const randomIndex = Math.floor(Math.random() * texts.length);
      document.getElementById('changeableText').innerText = texts[randomIndex];
  }
}

// Combined window.onload function
window.onload = async () => {
  await loadData();
};

function capitalizeTitle() {
    let titleElement = document.getElementById("title");
    let titleText = titleElement.textContent || titleElement.innerText;
    titleText = titleText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    titleElement.textContent = titleText;
}