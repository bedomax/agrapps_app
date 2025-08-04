# AgrApps - React Native App

Simple React Native 0.80.2 app with iOS and Android support.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18
- Java 17-20 (for Android)
- Xcode (for iOS)
- Android Studio (for Android)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. iOS setup
cd ios && pod install && cd ..

# 3. Start Metro
npm start

# 4. Run on iOS (new terminal)
npm run ios

# 5. Run on Android (new terminal)  
npm run android
```

## 🔧 Common Issues

**Android build fails?**
```bash
# Check Java version (should be 17-20)
java -version

# If wrong version, install Java 17
brew install openjdk@17
export JAVA_HOME=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
```

**iOS simulator not found?**
```bash
# Run with specific simulator
npx react-native run-ios --simulator "iPhone 15"
```

**Metro server issues?**
```bash
# Reset Metro cache
npm start -- --reset-cache
```

## 📱 Features
- ✅ React Native 0.80.2 + New Architecture
- ✅ TypeScript support
- ✅ Dark/Light mode
- ✅ iOS & Android ready

That's it! 🎉