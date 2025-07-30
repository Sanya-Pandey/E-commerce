# ECommerce Site– React Frontend

A responsive furniture e-commerce web app built using **React.js** and **Tailwind CSS**,
simulating a shopping experience for categories like **wood**, **plastic**, **home**, and **office** furniture.
This is the frontend-only version, perfect for demos, academic submissions, or future full-stack expansion.

##Features

*Hero Section– Horizontal slideshow of featured products
*Furniture Categories– Wood, Plastic, Home, Office
*Product Cards– Animated UI with "View" and "Add to Cart" buttons
*Login & Signup– Simple authentication form pages
*Cart Page– Add/delete items and real-time total bill display
*React Router– Seamless page navigation
*Tailwind CSS– Clean, modern, mobile-responsive design

##Tech Stack
* React.js
* React Router DOM
* Tailwind CSS
* JavaScript (ES6)
* HTML5/CSS3

## Folder Structure
frontend/
├── src/
│   ├── Components/     # Navbar, Hero, ProductCard, etc.
│   ├── Pages/          # Home, ProductPage, Login, Signup, CartPage
│   ├── App.js
│   ├── index.js
│   ├── index.css / output.css
```

##Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm start
# Watch Tailwind CSS (in another terminal)
npx @tailwindcss/cli -i ./src/index.css -o ./src/output.css --watch
```


##Future Enhancements
* Connect to backend (MongoDB, Express, Node.js)
* Payment integration (Razorpay / Stripe)
* Admin dashboard for product/order management

## Notes
* This is a **frontend-only** demo app with static data.
* Cart state is local and resets on refresh.
