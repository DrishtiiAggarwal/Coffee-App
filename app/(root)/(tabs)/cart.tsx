import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "../../context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <SafeAreaView className="bg-white h-[93vh] overflow-scroll">
      <View className="flex-1 bg-white ">
        <View className="flex-row justify-between items-center pt-5 px-5">
          <Text className="text-[12px] p-0.5 font-semibold text-gray-500">
            KALKAJI - 2.1 KM AWAY
          </Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text className="text-[#48001f]  text-[23px] mb-4 px-5 font-bold">
              Your Cart
            </Text>
          </TouchableOpacity>
        </View>

        {cart.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Ionicons name="cart-outline" size={80} color="gray" />
            <Text className="text-lg font-semibold text-gray-500 mt-4">
              Your cart is empty.
            </Text>
          </View>
        ) : (
          <>
            <ScrollView className=" p-5">
              {cart.map((item, index) => (
                <View
                  key={index}
                  className="flex-row items-center justify-between p-3 bg-rose-50 rounded-xl mb-3 shadow-md"
                >
                  <Image
                    source={
                      typeof item.image === "string"
                        ? { uri: item.image }
                        : item.image
                    }
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                  />
                  <View className="flex">
                    <View className="flex-1 ml-4">
                      <Text className="text-lg font-semibold">{item.name}</Text>
                      <Text className="text-gray-500">kcal: {item.kcal}</Text>
                      <Text className="text-xl font-bold text-[#63002d]">
                        ₹{item.price}
                      </Text>
                    </View>

                    <View className="flex-row mr-2 mx-auto items-center bg-gradient-to-r from-[#9e004c] to-[#80003c] px-3 py-1.5 rounded-xl shadow-md">
                      {/* Decrease Button */}
                      <TouchableOpacity
                        className="flex items-center justify-center "
                        onPress={() => removeFromCart(item.name)}
                      >
                        <Text className="text-white text-lg font-bold">-</Text>
                      </TouchableOpacity>

                      {/* Quantity Display */}
                      <Text className="mx-3 text-lg font-semibold text-white">
                        {item.quantity}
                      </Text>

                      {/* Increase Button */}
                      <TouchableOpacity
                        className="flex items-center justify-center"
                        onPress={() => addToCart(item)}
                      >
                        <Text className="text-white text-lg font-bold">+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View className="border-t  border-gray-300 shadow-lg shadow-gray-500">
              <Text className="text-xl px-5 py-2 text-[#48001f] font-bold">
                Total:{" "}
                <Text className="text-[#48001f] font-bold">
                  ₹{totalPrice.toFixed(2)}
                </Text>
              </Text>

              <View className="flex-row px-5 pb-5">
                <TouchableOpacity
                  className="flex-1 bg-red-800 px-5 py-3 rounded-lg mr-3 active:opacity-80"
                  onPress={() => clearCart()}
                >
                  <Text className="text-white text-lg text-center font-semibold">
                    Clear Cart
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 bg-gradient-to-r ml-3 from-green-600 to-green-700 px-5 py-3 rounded-lg active:opacity-80"
                  onPress={() => {}}
                >
                  <Text className="text-white text-center text-lg font-semibold">
                    Place order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
