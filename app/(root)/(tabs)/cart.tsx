import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "../../context/CartContext";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-3xl font-bold mb-4">Your Cart</Text>

      {cart.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Ionicons name="cart-outline" size={80} color="gray" />
          <Text className="text-lg text-gray-600 mt-4">
            Your cart is empty.
          </Text>
        </View>
      ) : (
        <>
          <ScrollView className="mb-6">
            {cart.map((item, index) => (
              <View
                key={index}
                className="flex-row items-center justify-between p-4 bg-gray-100 rounded-xl mb-3 shadow-md"
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-20 h-20 rounded-lg"
                />

                <View className="flex-1 ml-4">
                  <Text className="text-lg font-semibold">{item.name}</Text>
                  <Text className="text-gray-500">{item.kcal}</Text>
                  <Text className="text-xl font-bold text-blue-600">
                    ₹{item.price}
                  </Text>
                </View>

                <View className="flex-row items-center bg-gray-200 px-3 py-1.5 rounded-full shadow-md">
                  {/* Decrease Button */}
                  <TouchableOpacity
                    className="bg-gradient-to-r from-red-500 to-red-700 w-8 h-8 flex items-center justify-center rounded-full shadow-md active:scale-90"
                    onPress={() => removeFromCart(item.name)}
                  >
                    <Text className="text-white text-lg font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity Display */}
                  <Text className="mx-3 text-lg font-semibold text-gray-900">
                    {item.quantity}
                  </Text>

                  {/* Increase Button */}
                  <TouchableOpacity
                    className="bg-gradient-to-r from-green-500 to-green-700 w-8 h-8 flex items-center justify-center rounded-full shadow-md active:scale-90"
                    onPress={() => addToCart(item)}
                  >
                    <Text className="text-white text-lg font-bold">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Cart Summary */}
          <View className="border-t pt-4">
            <Text className="text-xl font-semibold">
              Total:{" "}
              <Text className="text-blue-600 font-bold">
                ₹{totalPrice.toFixed(2)}
              </Text>
            </Text>

            <View className="flex-row mt-4">
              <TouchableOpacity
                className="flex-1 bg-red-500 px-6 py-3 rounded-lg mr-2 active:opacity-80"
                onPress={() => clearCart()}
              >
                <Text className="text-white text-center font-semibold">
                  Clear Cart
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 bg-blue-600 px-6 py-3 rounded-lg active:opacity-80"
                onPress={() => {}}
              >
                <Text className="text-white text-center font-semibold">
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;
