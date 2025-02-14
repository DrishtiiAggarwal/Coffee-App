import { SplashScreen } from "expo-router";
import { CartProvider } from "./context/CartContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import "./global.css";
import { useFonts } from "expo-font";
import Index from "./(root)/(tabs)/index";
import Pack from "./(root)/(tabs)/packs";
import Menu from "./(root)/(tabs)/menu";
import Cart from "./(root)/(tabs)/cart";
import CartBar from "./(root)/(tabs)/cartBar";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.otf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.otf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.otf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.otf"),
    "Inter-Italic": require("../assets/fonts/Inter-Italic.otf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.otf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.otf"),
    "Inter-Black": require("../assets/fonts/Inter-Black.otf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.otf"),
  });

  const [activeScreen, setActiveScreen] = useState("home");

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return (
    <CartProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#fff", paddingTop: 5, height: 70 },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
          tabBarActiveTintColor: "#2b2118",
          tabBarInactiveTintColor: "#aaa",
          headerShown: false,
        }}
        screenListeners={{
          state: (e) => {
            const routeName = e.data.state.routes[e.data.state.index].name;
            setActiveScreen(routeName);
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Index}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="packs"
          component={Pack}
          options={{
            tabBarLabel: "Packs",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="gift" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="menu"
          component={Menu}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="more-horiz" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      {activeScreen !== "cart" && <CartBar />}
    </CartProvider>
  );
}