# Cravix – Full Stack Food Ordering Application

Cravix is a full-stack food ordering and delivery web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a seamless food ordering experience with user authentication, shopping cart management, secure online payments through Stripe, and real-time order status updates.

The project includes a customer-facing website, an admin panel for managing food items and orders, and a backend REST API.

## Live Demo

- **Customer Website:** https://cravix.onrender.com
- **Admin Panel:** https://cravix-admin.onrender.com

## Features

### Customer Website
- Responsive and user-friendly interface.
- User registration and login.
- Browse food items and explore food categories.
- Add and remove items from the shopping cart.
- Update food quantities and calculate order totals.
- Enter delivery information during checkout.
- Place orders with Stripe online payment integration.
- View order history and track order status.

### Admin Panel
- Dedicated admin interface.
- Add new food items with images.
- View and manage the food list.
- Display customer orders.
- Update order statuses.
- Manage food ordering operations from a centralized dashboard.

### Backend
- RESTful APIs built using Node.js and Express.js.
- MongoDB Atlas database integration.
- User authentication and authorization.
- Food item and order management.
- Cart and checkout processing.
- Stripe payment integration.
- Secure password handling and protected API routes.

## Tech Stack

- React.js
- React Router
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- HTML5 & CSS3
- Stripe
- JWT
- bcrypt
- Multer
- REST API


## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Git
- MongoDB Atlas account
- Stripe account for payment integration

### 1. Clone the Repository

```bash
git clone https://github.com/saibhargav2473/CRAVIX.git
cd CRAVIX
```

Replace the placeholder with your actual GitHub repository URL.

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory and configure the required environment variables.

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Add any additional environment variables required by your implementation.

Start the backend server:

```bash
npm run server
```

If your `package.json` does not define this script, use the appropriate script configured in your project.

### 3. Set Up the Customer Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Set Up the Admin Panel

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

The frontend, admin panel, and backend may run on different local ports depending on your configuration.

## Environment Variables

Configure environment variables separately for the backend, customer frontend, and admin panel wherever required.

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret used to sign JWTs |
| `STRIPE_SECRET_KEY` | Stripe secret API key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret, if webhooks are configured |
| `VITE_API_URL` | Backend API URL for a Vite-based frontend, if used |
| `VITE_ADMIN_API_URL` | Backend API URL for the admin panel, if used |

Use the exact variable names expected by your source code. Never commit real credentials, private API keys, or `.env` files to GitHub.

## Application Workflow

1. Users register or log in to their accounts.
2. The frontend retrieves available food items from the backend.
3. Users browse the menu and add items to their cart.
4. The checkout page collects delivery details.
5. The backend creates the order and coordinates Stripe payment processing.
6. Customers can view their orders and check their status.
7. Administrators view incoming orders and update their statuses.
8. Customers see the latest order status on the order page.

## Payment Integration

Cravix integrates Stripe to support online payments during checkout.

For local development, use Stripe's test mode and test credentials. Never expose your Stripe secret key in frontend code.

In production, verify payment status on the server using trusted Stripe responses or webhooks where implemented. Do not treat a frontend redirect alone as proof of successful payment.

## Deployment

The application is deployed using Render.

- Customer frontend: https://cravix.onrender.com
- Admin panel: https://cravix-admin.onrender.com

The backend must also be deployed and configured with the correct environment variables, database access, CORS settings, and frontend API URLs.

If the application is hosted on a free service, the first request after a period of inactivity may take longer because the service may need to start up.






