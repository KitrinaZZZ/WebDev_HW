const products = {
    "glass-bowl-set": {
      name: "Glass Bowl Set",
      price: "$18.00",
      category: "breakfast",
      image: "images/glass-bowl.jpg",
      description:
        "This clear glass bowl set is made for small, pretty meals. It works well for yogurt bowls, fruit, overnight oats, and soft breakfast plates.",
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
      category: "lunch",
      image: "images/rice-cooker.jpg",
      description:
        "This mini rice cooker is made for one-person meals and quiet routines. It works well for rice, porridge, and soft comfort meals.",
      details: [
        "Small size for one or two servings",
        "Good for rice, porridge, and simple bowls",
        "Cute shape for a soft kitchen look",
        "Easy choice for everyday light meals"
      ]
    },
  
    jam: {
      name: "Low Sugar Jam",
      price: "$7.50",
      category: "breakfast",
      image: "images/jam.jpg",
      description:
        "This low sugar jam adds soft fruit flavor without feeling too heavy. It works well on toast, yogurt bowls, and fruit sandwiches.",
      details: [
        "Lower sugar than regular fruit jam",
        "Good for toast, yogurt, and fruit sandwiches",
        "Soft berry flavor",
        "Adds color to breakfast plates"
      ]
    },
  
    matcha: {
      name: "Matcha Powder",
      price: "$14.00",
      category: "dessert",
      image: "images/matcha.jpg",
      description:
        "This matcha powder is a gentle kitchen staple for drinks, oats, and soft desserts. It brings a calm green tone to food.",
      details: [
        "Good for lattes, oats, cakes, and desserts",
        "Soft green color for pretty food styling",
        "Works in both drinks and recipes",
        "Fits calm and light recipe themes"
      ]
    },
  
    "soup-cup": {
      name: "Soft Soup Cup",
      price: "$16.00",
      category: "dinner",
      image: "images/soup-cup.jpg",
      description:
        "This soft soup cup is made for warm soups, noodles, and quiet evening meals. It makes dinner feel slower and more comforting.",
      details: [
        "Good for soup, noodles, and porridge",
        "Comfortable size for one serving",
        "Soft rounded shape",
        "Perfect for cozy dinner routines"
      ]
    },
  
    "lunch-box": {
      name: "Cute Lunch Box",
      price: "$20.00",
      category: "lunch",
      image: "images/lunch-box.jpg",
      description:
        "This cute lunch box is made for rice bowls, salads, and simple packed meals. It keeps tiny meals organized and easy to carry.",
      details: [
        "Good for lunch, snacks, and salads",
        "Compact size for school or work",
        "Keeps food separated and neat",
        "Cute design for everyday meals"
      ]
    },
  
    "ceramic-plate": {
      name: "Soft Ceramic Plate",
      price: "$22.00",
      category: "breakfast",
      image: "images/plate.jpg",
      description:
        "This soft ceramic plate is made for toast, eggs, fruit, and pretty morning setups. It turns simple food into a careful little plate.",
      details: [
        "Good for toast, eggs, and fruit",
        "Soft-toned ceramic surface",
        "Nice for breakfast photos",
        "Simple shape for everyday use"
      ]
    },
  
    "tea-set": {
      name: "Mini Tea Set",
      price: "$26.00",
      category: "dinner",
      image: "images/tea-set.jpg",
      description:
        "This mini tea set is made for quiet evenings, warm drinks, and slow routines. It gives dinner time a softer ending.",
      details: [
        "Small tea set for one or two people",
        "Good for tea, warm water, and evening drinks",
        "Soft design for calm routines",
        "Pairs well with dessert or dinner"
      ]
    }
  };
  
  const productDetail = document.getElementById("productDetail");
  
  function getFavorites() {
    return JSON.parse(localStorage.getItem("tinyBitesFavorites")) || [];
  }
  
  function saveFavorites(favorites) {
    localStorage.setItem("tinyBitesFavorites", JSON.stringify(favorites));
  }
  
  function isFavorite(productId) {
    const favorites = getFavorites();
    return favorites.includes(productId);
  }
  
  function toggleFavorite(productId) {
    let favorites = getFavorites();
  
    if (favorites.includes(productId)) {
      favorites = favorites.filter(function (id) {
        return id !== productId;
      });
    } else {
      favorites.push(productId);
    }
  
    saveFavorites(favorites);
    updateFavoriteButton(productId);
  }
  
  function updateFavoriteButton(productId) {
    const favoriteButton = document.getElementById("favoriteButton");
  
    if (!favoriteButton) return;
  
    if (isFavorite(productId)) {
      favoriteButton.textContent = "♥ Saved";
      favoriteButton.classList.add("saved");
    } else {
      favoriteButton.textContent = "♡ Save to favorites";
      favoriteButton.classList.remove("saved");
    }
  }
  
  function getCart() {
    return JSON.parse(localStorage.getItem("tinyBitesCart")) || [];
  }
  
  function saveCart(cart) {
    localStorage.setItem("tinyBitesCart", JSON.stringify(cart));
  }
  
  function addToCart(productId, product) {
    let cart = getCart();
  
    const existingItem = cart.find(function (item) {
      return item.id === productId;
    });
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  
    saveCart(cart);
    window.location.href = "cart.html";
    const addCartButton = document.getElementById("addCartButton");
    addCartButton.textContent = "Added ✓";
  
    setTimeout(function () {
      addCartButton.textContent = "Add to cart";
    }, 1200);
  }
  
  if (productDetail) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = products[productId];
  
    if (product) {
      const detailList = product.details
        .map(function (item) {
          return `<li>${item}</li>`;
        })
        .join("");
  
      productDetail.innerHTML = `
        <section class="product-detail-card">
          <img class="product-detail-image" src="${product.image}" alt="${product.name}" />
  
          <div class="product-detail-info">
            <p class="small-label">${product.category}</p>
            <h2>${product.name}</h2>
            <div class="detail-price">${product.price}</div>
  
            <p>${product.description}</p>
  
            <ul class="detail-list">
              ${detailList}
            </ul>
  
            <div class="detail-actions">
              <button id="favoriteButton" class="favorite-button" type="button">
                ♡ Save to favorites
              </button>
  
              <button id="addCartButton" class="add-cart-button" type="button">
                Add to cart
              </button>
            </div>
          </div>
        </section>
      `;
  
      const favoriteButton = document.getElementById("favoriteButton");
      const addCartButton = document.getElementById("addCartButton");
  
      favoriteButton.addEventListener("click", function () {
        toggleFavorite(productId);
      });
  
      addCartButton.addEventListener("click", function () {
        addToCart(productId, product);
      });
  
      updateFavoriteButton(productId);
    } else {
      productDetail.innerHTML = `
        <div class="empty-state">
          <p>Sorry, this product could not be found.</p>
          <a class="back-link" href="home.html">Back to home</a>
        </div>
      `;
    }
  }