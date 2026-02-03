/*
   This is a scaffold JavaScript file for the image carousel project.
   You'll need to implement the functionality of the carousel here.
   Consider the following steps:

   1. Define an array of image URLs for your carousel
   2. Keep track of the current image index
   3. Select and store references to your HTML elements (image container, prev/next buttons)
   4. Implement a function to update the displayed image
   5. Add event listeners to the prev/next buttons to change the current image
   6. Initialize the carousel with the first image

   Remember to use appropriate variable names and comments to make your code readable.
   Feel free to add any additional features or improvements to enhance the user experience!
*/

const imageUrls = [
  "media/img_1.avif",
  "media/img_2.avif",
  "media/img_3.avif",
  "media/img_4.avif",
  "media/img_5.avif",
];
let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
document.getElementById("prevButton").onclick = function () {
  currentIndex = currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
  carouselImage.src = imageUrls[currentIndex];
};
document.getElementById("nextButton").onclick = function () {
  currentIndex = currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1;
  carouselImage.src = imageUrls[currentIndex];
};
carouselImage.src = imageUrls[0];
