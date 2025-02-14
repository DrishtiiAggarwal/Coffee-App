# React Native Coffee-App ☕

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
![image](https://github.com/user-attachments/assets/640cb048-9ec2-4c9a-a0e3-dfb44c977f5e)
![image](https://github.com/user-attachments/assets/0565f1e6-856a-4be6-8ea5-d9a49499ea76)
![image](https://github.com/user-attachments/assets/2cedebdc-4985-4f57-9811-a55b6c7276af)
![image](https://github.com/user-attachments/assets/4b9f470f-ece0-4cde-a319-eefb6faa6525)
![image](https://github.com/user-attachments/assets/d50b502b-f066-4f53-b967-6c84cac25408)


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
