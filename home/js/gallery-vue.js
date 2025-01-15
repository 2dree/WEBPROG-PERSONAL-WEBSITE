// Initialize Vue App
const app = Vue.createApp({
  data() {
    return {
      galleryImages: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EmUMBVgD0pedbBOC4snbso31LX0ww1ylxg&s",
          alt: "Gallery Image 1",
          description: "Image 1 Description",
        },
        {
          url: "https://waltgracevintage.com/cdn/shop/files/IMG_0372.jpg?v=1722625579",
          alt: "Gallery Image 2",
          description: "Image 2 Description",
        },
        // Add more image objects as needed
        {
          url: "https://live.staticflickr.com/667/21209906942_a9cc7f3d9b_b.jpg",
          alt: "Placeholder Image",
          description: "Image 3 Description",
        },
      ],
    };
  },
});


    function goToHome() {
      window.location.href = "index.html";
    }
  

// Mount Vue App
app.mount("#gallery-app");


