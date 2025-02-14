import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../context/CartContext";

const CartBar = () => {
  const { cart } = useCart();
  const navigation = useNavigation();

  if (cart.length === 0) return null; // Hide if cart is empty

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);

  return (
    <View className="absolute bottom-[70px] left-4 right-4 bg-white p-4 rounded-2xl shadow-lg flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-bold text-gray-800">
          {totalItems} {totalItems > 1 ? "Items" : "Item"}
        </Text>
        <Text className="text-base text-gray-600">₹{totalPrice.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        className="bg-blue-600 px-6 py-3 rounded-xl shadow-md active:opacity-80"
        onPress={() => navigation.navigate("cart" as never)}
      >
        <Text className="text-white font-semibold text-lg">View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartBar;
