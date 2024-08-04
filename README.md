# K-SkinGlow Online Store

K-SkinGlow is an online store that sells various skincare products. This project implements a responsive web interface where customers can browse, add, and remove items from their cart, and create orders.

## Features

### Essential Functionality

- **Responsive Design**: The interface adapts to different screen sizes and devices.
- **Sorting by Price**: Users can sort products by price.
- **Search by Name**: Users can search for products by name.
- **Pagination**: Products are displayed with pagination.
- **Shopping Cart**: Users can add and remove products from their cart and create orders.

### Additional Functionality

- **Filtering**: Filter products by price range or category.
- **Reviews and Ratings**: Customers can sort products by ratings.
- **CMS for Admin**: Administrators can view orders, change their status, and add new products.
- **Order Status Notifications**: Customers receive notifications about order status changes via email or SMS.

## Technologies Used

- **Frontend**: REACT + VITE + SWC, styled-components, TypeScript
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MySQL
- **Email/SMS Notifications**: [Email Service Provider], [SMS Service Provider]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anastasia-front/K-SkinGlow.git
   or
   git clone git@github.com:Anastasia-front/K-SkinGlow.git
   cd K-SkinGlow
   ```

2. Install dependencies at all levels (root and packages front/back):

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a .env file in the root directory and add your configuration settings (e.g., database URL, email/SMS API keys).

4. Start the development server for back:

   ```bash
   npm start
   ```

4. Start the development server for front:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to http://localhost:5173.
2. Browse the product catalog, use the search and filter features, and add products to your cart.
3. Proceed to checkout to create an order.

## Contributing

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a pull request.
