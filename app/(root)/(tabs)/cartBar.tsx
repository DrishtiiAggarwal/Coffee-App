import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../context/CartContext";

const CartBar = () => {
  const { cart } = useCart();
  const navigation = useNavigation();

  if (cart.length === 0) return null; // Hide if cart is empty

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price),
    0
  );

  return (
    <View className="absolute bottom-[70px] left-0 right-0 bg-[#63002d] px-4 py-4 rounded-t-2xl  flex-row justify-between items-center">
      <View>
        <View className="flex-row gap-2">
          <Text className="text-white">
            {totalItems} {totalItems > 1 ? "Items" : "Item"}
          </Text>
          <Text className=" text-white">₹{totalPrice.toFixed(2)}</Text>
        </View>
        <Text className="text-gray-100">Extra charges may apply</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("cart" as never)}
      >
        <Text className="text-white font-semibold text-lg">View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartBar;
