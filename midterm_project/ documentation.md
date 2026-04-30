Midterm Project Documentation
Tiny Bites Club

Site Structure
The project is organized as a multi-page site inside the midterm_project folder. It includes:
index.html for the sign-up page
home.html for the main homepage
breakfast.html, lunch.html, and dinner.html for recipe categories
about.html for the concept and artist statement
product.html for product detail pages
product-data.js for storing product data and generating product details dynamically
multiple CSS files for page-specific styling, plus an images folder for visual assets

Concept
This is a multi-page website built around recipes and kitchenware. The visual style is soft and cute. The website uses pink tones, a simple layout, and all buttons and text boxes have rounded corners. I was also thinking about how a website that simply shares recipes could monetize, so I added a shopping section. Ultimately, I wanted the website to have an appealing first impression. Users should be able to easily browse the breakfast, lunch, dinner, and product pages.

Technical Process
I built this project using HTML, CSS, and JavaScript. HTML provides the structure for each page. CSS shapes the visual identity of the website and, in my opinion, is its essence. I chose to split the CSS code into different files, such as style.css, home.css, shop.css, category.css, and about.css. This helps me better organize the design of each page and makes it easier if I need to further develop the website in the final stages. The overall layout remains consistent, but each page undergoes minor design adjustments based on its content.

JavaScript is primarily used in product-data.js to create product detail pages that can be adjusted at any time. Instead of manually building separate detail pages for each product, I store the product information in an object and load the corresponding content based on the ID in the URL. This is more convenient than constantly creating new HTML files.

My Takeaways
Through this project, I learned how to build a more complete front-end website. I practiced webpage layout and simple interactive functions. I also realized how useful it is to use JavaScript data to organize repetitive content.

More importantly, this project made me realize that web design is not just about functionality. A good website's visual appeal can improve your mood. Before starting to work on the CSS, I browsed and referenced many similar websites, and I discovered that the same brand's official website in different countries often has different styles. Perhaps this is to cater to the characteristics of each region. Seeing such thoughtful design made me feel better.

Next Steps
One feature I want to develop next is a favorites function. Right now, the shopping section only lets users view product details. In the future, I want users to be able to save products they like and collect them in a favorites page.
