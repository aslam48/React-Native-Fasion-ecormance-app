import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from './src/navigations/TabNavigation';
import { AuthProvider } from './src/features/context/authContext';
import { ProductProvider } from './src/features/context/productContext';
import { useState } from 'react';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState(null)

  return (
    <AuthProvider
    value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
      <ProductProvider 
      value={{products, setProducts}}
      >
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    </ProductProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
