# Coffee Shop App

## Overview
Coffee Shop App is a React Native application built using Expo CLI and NativeWind. It allows users to browse menus, add items to the cart, and place orders seamlessly. The app features a modern UI with a smooth user experience for food and beverage selection.

## Features
- **Home Page**: Displays user-specific information, coins, wallet balance, and menu categories.
- **Menu Page**: Users can browse food and beverage categories, apply filters, and view detailed item information.
- **Cart Page**: Users can add, remove, and adjust quantities of items before checkout.
- **Subscription Packs**: A section for exploring upcoming subscription offers.
- **Re-order Feature**: Quickly reorder previously ordered items.
- **Discounts & Offers**: Display available promo codes and discounts.


## Screenshots
(Add screenshots of the app interface here)

## Tech Stack
- **React Native** with Expo CLI
- **NativeWind** for styling (Tailwind CSS for React Native)
- **React Navigation** for seamless navigation
- **Context API** for state management
- **TypeScript**

## Installation & Setup
### Prerequisites
- Node.js (Latest LTS version recommended)
- Expo CLI (`npm install -g expo-cli`)
- Git (For cloning the repository)

### Steps to Run Locally
```sh
# Clone the repository
git clone https://github.com/your-username/coffee-shop-app.git
cd coffee-shop-app

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

Scan the QR code using the Expo Go app on your mobile device or run the app on an emulator.

## Folder Structure
```sh
coffee-shop-app/
│── assets/          # Images and icons
│── components/      # Reusable UI components
│── screens/         # App screens (Home, Menu, Cart, etc.)
│── navigation/      # Navigation setup
│── redux/           # Redux store (if used)
│── utils/           # Helper functions
│── App.tsx         # Main entry point
│── package.json    # Project dependencies
│── tailwind.config.js # TailwindCSS config for NativeWind
```



## Future Enhancements
- **Payment Integration** (Stripe, Razorpay, etc.)
- **User Authentication** (Google/Facebook Sign-In)
- **Dark Mode Support**
- **Push Notifications** for order updates
