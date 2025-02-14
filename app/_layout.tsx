import { SplashScreen } from "expo-router";
import { CartProvider } from "./context/CartContext";
import { CategoryProvider } from "./context/CategoryContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons ,MaterialCommunityIcons } from "@expo/vector-icons";
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
      <CategoryProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#ffffff", paddingTop: 10, height: 70 },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "light" },
          tabBarActiveTintColor: "#63002d",
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
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="home" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="packs"
          component={Pack}
          options={{
            tabBarLabel: "Packs",
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="shopping" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="menu"
          component={Menu}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="book-open-variant" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      {activeScreen !== "cart" && <CartBar />}
      </CategoryProvider>
    </CartProvider>
  );
}