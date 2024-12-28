const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// document.getElementById('imageInput').addEventListener('change', function(event) {
//   const file = event.target.files[0];
//   const imagePreview = document.getElementById('imagePreview');

//   if (file && file.type.startsWith('image/')) {
//       const reader = new FileReader();

//       reader.onload = function(e) {
//           imagePreview.src = e.target.result; // Set the image preview source
//           imagePreview.style.display = 'block'; // Show the image preview
//       };

//       reader.readAsDataURL(file); // Read the file as a Data URL
//   } else {
//       imagePreview.src = ''; // Clear the image preview source
//       imagePreview.style.display = 'none'; // Hide the image preview
//       alert('Please select a valid image file.');
//   }
// });