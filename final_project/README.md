1. general process
For my final project, I focused on transforming my midterm website into a more complete and interactive system. In the midterm, my project emphasized visual design and layout. It as a recipe website, it does not have real recipe on it.

In the final project, I redesigned the site structure to support dynamic user interaction using JavaScript. Now I have features such as a login system, favorites system, shopping cart, checkout flow, and recipe pages. I used localStorage to simulate a database, in favorites, cart items, and login to store users' data. I also implemented URL-based navigation (e.g., recipe.html?id=...) to dynamically load content, such as breakfast, lunch and dinner.

New functions:

Favorites system (with persistent storage)
Searching function
Personalized home page
LocalStorage
Cart system with quantity and subtotal
Checkout flow with form input
Recipe pages 
Handling empty states across different pages

2. source code and issues I encountered
One of the most important parts of my project is how I used localStorage to manage user data.
For example, in my login system:

const users = JSON.parse(localStorage.getItem("tinyBitesUsers")) || [];

This line retrieves stored user data from localStorage. Since localStorage only stores strings, I used JSON.parse to convert it back into a usable JavaScript array.
After validating the user, I store the current user:

localStorage.setItem("currentUser", JSON.stringify(matchedUser));

One major challenge I faced was debugging small syntax errors. Missing a comma or bracket would cause the entire script to fail. Sometimes the error messages were unclear, so I had to carefully check my code line by line. 

Another issue occurred in my favorites system. Initially, saving products worked correctly, and saving recipes also worked when tested separately. However, when I tried to support both at the same time, I found that one would override the other.
This happened because I was storing both types of data under the same localStorage key. As a result, when I saved a product, it would replace the previously saved recipe data.

To fix this, I separated the data into different storage keys (for example, tinyBitesFavorites for products and tinyBitesRecipeFavorites for recipes).

Another issue appeared in my cart system, where users could proceed to checkout even when the cart was empty. The condition if (cart.length === 0) checks whether the cart is empty and updates the UI accordingly. The event.preventDefault() is used to stop the checkout button from navigating to another page. 

3. what I learned
I gained experience using localStorage to simulate a backend system. More importantly, I learned how to debug effectively. Instead of guessing, I started checking my code step by step.

Another key takeaway is thinking about user experience beyond visual design. I had to consider what happens when there is no data, and how to prevent users from doing invalid actions.

4. Next step
Instead of organizing recipes only by meal type, I would introduce a mood-based system, where users can explore recipes based on how they feel (e.g., calm, tired, or needing comfort). Also, I want the cart to suggest items based on the recipes the user saved. For example, if a user saves a recipe, the ingredients could be automatically added to the cart.

From a technical perspective, I would replace localStorage with a real backend system so that user data can persist across devices.
