const products = {
    "glass-bowl-set": {
      name: "Glass Bowl Set",
      price: "$18.00",
      image: "images/glass-bowl.jpg",
      description:
        "This clear glass bowl set is made for small, pretty meals. It works well for yogurt bowls, fruit, overnight oats, and soft breakfast plates. The shape feels clean and light, so even a simple meal looks more careful and comforting.",
      details: [
        "Set of 4 small glass bowls",
        "Good for yogurt, fruit, oats, and desserts",
        "Clear design for a soft, clean table look",
        "Easy to wash and easy to style in photos"
      ]
    },
  
    "rice-cooker": {
      name: "Mini Rice Cooker",
      price: "$42.00",
      image: "images/rice-cooker.jpg",
      description:
        "This mini rice cooker is made for one-person meals and quiet routines. It is small, simple, and practical. It works well for rice, porridge, and soft comfort meals. It fits the gentle and careful mood of Tiny Bites Club.",
      details: [
        "Small size for one or two servings",
        "Good for rice, porridge, and simple bowls",
        "Cute shape for a soft kitchen look",
        "Easy choice for everyday light meals"
      ]
    },
  
    "jam": {
      name: "Low Sugar Jam",
      price: "$7.50",
      image: "images/jam.jpg",
      description:
        "This low sugar jam adds soft fruit flavor without feeling too heavy. It works well on toast, in yogurt bowls, and in fruit sandwiches. The color is sweet and bright, so it makes breakfast look cute and a little more special.",
      details: [
        "Lower sugar than regular fruit jam",
        "Good for toast, yogurt, and fruit sandwiches",
        "Soft berry flavor",
        "Adds color to breakfast plates"
      ]
    },
  
    "matcha": {
      name: "Matcha Powder",
      price: "$14.00",
      image: "images/matcha.jpg",
      description:
        "This matcha powder is a gentle kitchen staple for drinks, oats, and soft desserts. It brings a calm green tone to food and fits the playful but careful feeling of the site. It is a nice choice for people who like quiet flavors and simple recipes.",
      details: [
        "Good for lattes, oats, cakes, and desserts",
        "Soft green color for pretty food styling",
        "Works in both drinks and recipes",
        "Fits calm and light recipe themes"
      ]
    }
  };
  
  const productDetail = document.getElementById("productDetail");
  
  if (productDetail) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = products[productId];
  
    if (product) {
      const detailList = product.details
        .map((item) => `<li>${item}</li>`)
        .join("");
  
      productDetail.innerHTML = `
        <section class="product-detail-card">
          <img class="product-detail-image" src="${product.image}" alt="${product.name}" />
  
          <div class="product-detail-info">
            <p class="small-label">product detail</p>
            <h2>${product.name}</h2>
            <div class="detail-price">${product.price}</div>
            <p>${product.description}</p>
  
            <ul class="detail-list">
              ${detailList}
            </ul>
  
            <div class="detail-actions">
              <a class="back-link" href="home.html">Back to home</a>
            </div>
          </div>
        </section>
      `;
    } else {
      productDetail.innerHTML = `
        <div class="empty-state">
          <p>Sorry, this product could not be found.</p>
          <a class="back-link" href="home.html">Back to home</a>
        </div>
      `;
    }
  }