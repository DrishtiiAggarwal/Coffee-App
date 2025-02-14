import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuData from "./CafeMenu";

const Menu = () => {
  const { addToCart } = useCart();
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<Record<string, string[]>>(
    {}
  );
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeSubCategory, setActiveSubCategory] = useState<string>("");

  useEffect(() => {
    const categoryList = Object.keys(MenuData);
    if (categoryList.length > 0) {
      setCategories(categoryList);
      setActiveCategory(categoryList[0]);
      const subCategoryMap: Record<string, string[]> = {};
      categoryList.forEach((category) => {
        subCategoryMap[category] = Object.keys(MenuData[category]);
      });
      setSubCategories(subCategoryMap);
    }
  }, []);

  useEffect(() => {
    if (activeCategory && subCategories[activeCategory]?.length > 0) {
      setActiveSubCategory(subCategories[activeCategory][0]);
    }
  }, [activeCategory, subCategories]);

  return (
    <SafeAreaView className=" bg-white h-[93vh] overflow-scroll ">
      <View className="flex-1 p-4">
        {/* Location and Takeaway */}
        <View className="flex-row justify-between items-center">
          <Text className="text-[12px] p-0.5 font-semibold text-gray-500">
            KALKAJI - 2.1 KM AWAY
          </Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text className="text-sky-950 text-[23px] font-bold">Takeaway</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mt-3 shadow-sm border border-gray-200">
  <Ionicons name="search" size={20} color="gray" />
  <TextInput 
    placeholder="Search 'Hot Latte'" 
    className="flex-1 ml-2 text-gray-600"
    placeholderTextColor="gray"
  />
</View>


        {/* Categories */}
        <View className="flex-row justify-between my-4">
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                category === activeCategory
                  ? "bg-red-300 border border-red-300"
                  : "bg-gray-100"
              }`}
            >
              <Text
                className={`${
                  category === activeCategory ? "text-white" : "text-black"
                } text-base`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Discount Banner */}
        <View className="bg-yellow-100 p-3 rounded-lg flex-row items-center justify-between">
          <Text className="text-yellow-800 font-semibold">
            FLAT ₹100 OFF | Above ₹500
          </Text>
          <Text className="text-yellow-800 font-bold">
            Use Code: RECONNECT...
          </Text>
        </View>

        {/* Re-order Section */}
        <View className="mt-4">
          <Text className="text-lg font-bold">RE-ORDER</Text>
          <Text className="text-gray-600">Based on your order history</Text>
          <View className="flex-row bg-gray-100 p-3 rounded-lg mt-3">
            <Image
              source={{ uri: "https://via.placeholder.com/100" }}
              className="w-16 h-16 rounded-lg"
            />
            <View className="ml-3 flex-1">
              <Text className="text-md font-semibold">
                Mocha Choco Chip Frappé
              </Text>
              <Text className="text-gray-600">With Regular</Text>
              <Text className="text-lg font-bold">₹339.00</Text>
            </View>
            <TouchableOpacity
              className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 my-auto h-12 rounded-full mt-2 shadow-md active:opacity-80"
            >
              <Text className="text-white text-center font-semibold text-lg">
                Re-order
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Subcategories Tabs */}
        {activeCategory && (
          <View className="mt-4">
            <Text className="text-lg font-bold mb-2">{activeCategory}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row py-1"
            >
              {subCategories[activeCategory]?.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  className="mr-4"
                  onPress={() => setActiveSubCategory(tab)}
                >
                  <Text
                    className={`${
                      activeSubCategory === tab
                        ? "text-black font-bold underline underline-offset-4"
                        : "text-gray-600 font-semibold"
                    }`}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        <View>
          {activeSubCategory && (
            <View className="grid grid-cols-2 mt-3 gap-5 mb-20">
              {MenuData[activeCategory]?.[activeSubCategory]?.map(
                (item, index) => (
                  <View key={index} className="bg-gray-100 p-3 rounded-lg">
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-24 rounded-lg"
                    />
                    <Text className="text-md font-semibold mt-2">
                      {item.name}
                    </Text>
                    <Text className="text-gray-600">{item.kcal}</Text>
                    <Text className="text-lg font-bold">₹{item.price}</Text>
                    <TouchableOpacity
                      className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 rounded-full mt-2 shadow-md active:opacity-80"
                      onPress={() => addToCart({ ...item, quantity: 1 })}
                    >
                      <Text className="text-white text-center font-semibold text-lg">
                        Add +
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
