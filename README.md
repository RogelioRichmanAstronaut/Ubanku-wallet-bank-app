# UbankuApp

UbankuApp is a robust and scalable mobile application designed to provide a seamless banking experience. This demo showcases the frontend of a wallet bank system built using TypeScript and React Native. The complete system is a fullstack solution, including a backend built with NestJS, and is suitable for banks or enterprises. 

The project adheres to the Atomic Design pattern to ensure a scalable and maintainable design system.

## Contact for Complete Fullstack Wallet Banking System and Custom Enterprise Technology Solutions

For inquiries about purchasing the complete or a customized wallet system, please reach out to:
- **Andrés F Méndez (CEO of Ubanku):**
  
    - [![LinkedIn](https://img.shields.io/badge/LinkedIn-andresfmendez-blue)](https://www.linkedin.com/in/andresfmendez/)
      
- **Daniel Sandoval (Software Engineer, Founding Team):**
  
    - [![LinkedIn](https://img.shields.io/badge/LinkedIn-danisando-blue)](https://www.linkedin.com/in/danisando/)

## Technologies

- **Frontend**:
  - React Native
  - TypeScript
  - JavaScript
  - Styled Components
    
- **Backend**:
  - NestJS (private code)
  - **Testing**:
  - Jest

## Atomic Design

This project follows the Atomic Design methodology to create a consistent and scalable design system. Atomic Design structures our components into five distinct levels:
1. **Atoms**: The smallest building blocks, such as buttons, inputs, and labels.
2. **Molecules**: Combinations of atoms that form simple UI components, like a search form.
3. **Organisms**: Complex UI components made up of molecules and/or atoms, like a header or a card.
4. **Templates**: Page-level components that place organisms in a layout and articulate the design’s underlying content structure.
5. **Pages**: Specific instances of templates that display real content.

By organizing our components in this manner, we achieve a more maintainable and scalable codebase, allowing for easier updates and consistency across the application.

## Features Included in the Demo

- **Authentication Module**:
  - Step-by-step authentication
  - 2FA (Two-Factor Authentication) via SMS
  - User registration and login
  - Password recovery
    
- **Home Module**:
  - Dashboard with user overview
  - Navigation to other modules
    
- **User Module**:
  - User profile management
  - View and edit personal details
  - Referral system
    
- **Wallet Module**:
  - View wallet balance
  - Add funds to the wallet
  - Withdraw funds from the wallet
    
- **Movements Module**:
  - View transaction history
  - Detailed view of individual transactions

## Screenshots

To give you a better idea of the application's interfaces, below are some key screenshots:

### Authentication Module

<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/d493dce8-11a5-41ba-a1c9-d90267637af4" alt="Login Screen" width="300">
<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/88b98294-0d05-4511-bc96-93837f93e7c9" alt="Login step 1 Screen" width="300">

### Home Module

<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/bc1f4f75-9cc3-4383-b7f0-220ef22e8e26" alt="Home Dashboard" width="300">


### User Module

<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/f6075ade-f3f6-4ba3-a86c-bc33f2c11db5" alt="User Profile" width="300">
<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/13a23f7c-9e02-48ed-91dd-913854fc7ee7" alt="Referral System" width="300">

### Wallet Module

<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/86db6acc-30fe-493b-b252-d076af03402c" alt="Wallet Balance" width="300">

<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/17030d33-7756-47da-9290-1ede1d120bd3" alt="Add Funds" width="300">


## Movements Module

<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/6d5b7e08-8ceb-4720-abec-d33f2fd88cab" alt="Transaction History" width="300">
<img src="https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app/assets/56854119/ddec77f2-fb38-4c6c-97e0-7b6669aa50ba" alt="Transaction Details" width="300">


## Project Structure

```UbankuApp
├── App.tsx
├── Gemfile
├── Gemfile.lock
├── LICENSE
├── README.md
├── __tests__
│   └── App-test.tsx
├── android
│   ├── app
│   │   ├── build.gradle
│   │   ├── debug.keystore
│   │   ├── proguard-rules.pro
│   │   └── src
│   │       ├── debug
│   │       │   ├── AndroidManifest.xml
│   │       │   └── java
│   │       │       └── com
│   │       │           └── ubankuapp
│   │       │               └── ReactNativeFlipper.java
│   │       ├── main
│   │       │   ├── AndroidManifest.xml
│   │       │   ├── assets
│   │       │   ├── java
│   │       │   │   └── com
│   │       │   │       ├── MainActivity.java
│   │       │   │       └── MainApplication.java
│   │       │   └── res
│   │       └── release
│   │           └── java
│   │               └── com
│   │                   └── ubankuapp
│   │                       └── ReactNativeFlipper.java
│   ├── build.gradle
│   ├── gradle
│   │   └── wrapper
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── link-assets-manifest.json
│   └── settings.gradle
├── app.json
├── babel.config.js
├── index.js
├── ios
│   ├── Podfile
│   ├── Podfile.lock
│   ├── UbankuApp
│   │   ├── AppDelegate.h
│   │   ├── AppDelegate.mm
│   │   ├── Images.xcassets
│   │   ├── Info.plist
│   │   ├── LaunchScreen.storyboard
│   │   └── main.m
│   ├── UbankuApp.xcodeproj
│   ├── UbankuApp.xcworkspace
│   ├── UbankuAppTests
│   └── link-assets-manifest.json
├── metro.config.js
├── package-lock.json
├── package.json
├── react-native.config.js
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── interfaces
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── theme
│   ├── types
│   └── utils
├── tsconfig.json
└── yarn.lock

```

## Installation

1. Clone the repository:
   
   ```sh
   git clone https://github.com/RogelioRichmanAstronaut/Ubanku-wallet-bank-app.git
   cd ubankuapp
   ```

3. Install dependencies:

   ```sh
   yarn install
   ```

5. Install Pods for iOS:

   ```sh
   cd ios
   pod install
   cd ..
   ```

## Running the App
1. For iOS:
   ```sh
   npx react-native run-ios
   ```
2. For Android:
   ```sh
   npx react-native run-android
   ```
   
   ## Testing

   To run the tests:

   ```sh
   yarn test
   ```

## License
This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.

---
For more detailed information, please refer to the project documentation or contact the project maintainers.

[![GitHub](https://img.shields.io/badge/GitHub-RogelioRichmanAstronaut-181717?logo=github)](https://github.com/RogelioRichmanAstronaut)

*Developed by Daniel Sandoval.* 

