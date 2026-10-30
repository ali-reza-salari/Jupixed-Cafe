# Jupixed Cafe

A responsive cafe menu and ordering interface built with React. Jupixed Cafe lets customers explore a cafe menu, browse products by category, view product details, customize quantities, and manage a shopping cart with an automatic tax calculation.

<p align="center">
  <img src="screenshot/project-preview.png" alt="Jupixed Cafe project preview" width="100%" />
</p>

<p align="center">
  <a href="https://jupixed.ir">Live Demo</a>
  ·
  <a href="https://github.com/ali-reza-salari/Jupixed-Cafe">Repository</a>
</p>

## Features

- **Menu browsing:** Explore a menu of 30 sample products across hot drinks, cold drinks, cakes and desserts, bakery and snacks, and tea and other drinks.
- **Category filtering:** Filter the menu by category or view all products.
- **Product details:** Open an individual product page to see its description, image, category, and price.
- **Quantity selection:** Increase or decrease the quantity before adding a product to the cart.
- **Shopping cart:** Add products to the cart, review selected items, and remove items.
- **Order summary:** Automatically calculate the subtotal, 10% tax, and final total.
- **Light and dark themes:** Switch between themes, with the selected preference saved in local storage.
- **Responsive interface:** Layout and navigation adapt to desktop and mobile screen sizes.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | Component-based user interface |
| [Vite](https://vite.dev/) | Development server and build tooling |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [React Icons](https://react-icons.github.io/react-icons/) | Interface icons |
| [React Compiler](https://react.dev/learn/react-compiler) | React optimization through the compiler |
| [ESLint](https://eslint.org/) | Code quality and linting |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ali-reza-salari/Jupixed-Cafe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Jupixed-Cafe
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal (Vite uses `http://localhost:5173` by default).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the codebase |

## Project Structure

The application source code is organized by responsibility:

```text
Jupixed-Cafe/
├── public/
│   ├── css/
│   └── img/
├── screenshot/
│   └── project-preview.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BottomNavbar/
│   │   │   ├── Header/
│   │   │   ├── NavbarCategory/
│   │   │   └── Product/
│   │   └── layout/
│   │       └── AppLayout.jsx
│   ├── contexts/
│   │   ├── CardContext.jsx
│   │   └── Theme.jsx
│   ├── data/
│   │   ├── categorys.js
│   │   └── menuData.js
│   ├── features/
│   │   ├── Card/
│   │   └── PayOrderBox/
│   ├── pages/
│   │   ├── Card/
│   │   └── Home/
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Architecture Overview

- **components/** contains reusable interface components and the shared application layout.
- **contexts/** contains React Context providers for cart state and theme state.
- **data/** stores the sample menu products and category definitions.
- **features/** groups feature-specific cart and order-summary components.
- **pages/** contains the main menu and cart pages.
- **routes.jsx** defines the application routes.

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Main menu and category filters |
| `/product/:productTitle` | Details for an individual product |
| `/card` | Shopping cart and order summary |

## How It Works

### Cart State

The cart is managed on the client side using React Context and the `useState` hook. The cart provider exposes the current items and actions for adding and removing products, allowing different parts of the application to access the same cart state.

### Theme Preference

The theme is managed through a separate React Context provider. The selected theme is stored in `localStorage` so it can be restored when the application is opened again.

### Order Total

The order summary calculates the subtotal from the cart items, applies a 10% tax rate, and displays the resulting final amount.

## Current Scope

Jupixed Cafe is currently a frontend demonstration project. Menu data is provided locally in the source code, and cart state is held in the browser while the application is running.

The current project does **not** include a backend service, database, user authentication, order submission, or a real payment integration. The displayed payment button is part of the interface and does not process transactions.

## Future Improvements

Possible next steps for the project include:

- Connect the menu to a backend API and database.
- Add persistent cart and order storage.
- Implement customer authentication.
- Add a real checkout and payment workflow.
- Build an administration panel for managing products, categories, and stock.

## Author

**Ali Reza Salari**

- **GitHub:** [ali-reza-salari](https://github.com/ali-reza-salari)
- **LinkedIn:** [Ali Reza Salari](https://www.linkedin.com/in/ali-reza-salari/)
- **Instagram:** [alireza_salari.dev](https://www.instagram.com/alireza_salari.dev?stkn=c3I1Zm04bjlwZ28y)
- **My Website:** [Jupixed](https://jupixed.ir/)

---

<p align="center">
  Made with React and ☕
</p>
