import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useCategory } from "../../context/CategoryContext";
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

const mochaChocoChipFrappé = require("@/assets/images/mochaChocoChipFrappé.png");

const Menu = () => {
  const { addToCart } = useCart();
  const {
    activeCategory,
    setActiveCategory,
    activeSubCategory,
    setActiveSubCategory,
  } = useCategory();

  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    const categoryList = Object.keys(MenuData);
    if (categoryList.length > 0) {
      setCategories(categoryList);
      if (activeCategory === "") {
        setActiveCategory(categoryList[0]);
      }
      const subCategoryMap: Record<string, string[]> = {};
      categoryList.forEach((category) => {
        subCategoryMap[category] = Object.keys(MenuData[category]);
      });
      setSubCategories(subCategoryMap);
    }
  }, []);

  useEffect(() => {
    if (
      activeCategory &&
      subCategories[activeCategory]?.length > 0 &&
      !subCategories[activeCategory].includes(activeSubCategory)
    ) {
      setActiveSubCategory(subCategories[activeCategory][0]);
    }
  }, [activeCategory, subCategories]);

  return (
    <SafeAreaView className="bg-white h-[93vh] overflow-scroll">
      <View className="flex-1 p-4">
        {/* Location and Takeaway */}
        <View className="flex-row justify-between items-center">
          <Text className="text-[12px] p-0.5 font-semibold text-gray-500">
            KALKAJI - 2.1 KM AWAY
          </Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text className="text-[#48001f] text-[23px] font-bold">Takeaway</Text>
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
                  ? "bg-[#80003c] border-[#80003c]"
                  : "bg-rose-50"
              }`}
            >
              <Text
                className={`${
                  category === activeCategory ? "text-white" : "text-zinc-700 font-semibold"
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
          <Text className="text-lg font-bold text-[#48001f]">RE-ORDER</Text>
          <Text className="text-gray-600">Based on your order history</Text>
          <View className="flex-row justify-around bg-rose-50 p-3 rounded-lg mt-3 items-center">
            <Image
              source={mochaChocoChipFrappé}
              style={{ width: 100, height: 100, borderRadius: "10px" }}
            />
            <View>
              <View className="ml-3 flex-1">
                <Text className="text-md font-semibold">
                  Mocha Choco Chip Frappé
                </Text>
                <Text className="text-gray-600">With Regular</Text>
                <Text className="text-lg font-bold">₹400.00</Text>
              </View>
              <TouchableOpacity
                className="bg-gradient-to-r from-[#9e004c] to-[#80003c] px-6 py-2 my-auto h-12 rounded-xl shadow-md active:opacity-70"
                onPress={() =>
                  addToCart({
                    name: "Mocha Choco Chip Frappé",
                    kcal: "400",
                    price: "400",
                    image: mochaChocoChipFrappé,
                    quantity: 1,
                  })
                }
              >
                <Text className="text-white text-center font-semibold text-lg">
                  Re-order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Subcategories Tabs */}
        {activeCategory && (
          <View className="mt-4">
            <Text className="text-xl text-[#48001f] font-bold mb-2 ">{activeCategory}</Text>
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
                        ? "text-[#48001f] text-lg font-bold underline underline-offset-4"
                        : "text-gray-600 text-lg font-semibold"
                    }`}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Menu Items */}
        <View>
          {activeSubCategory && (
            <View className="grid grid-cols-2 mt-3 gap-5 mb-20">
              {MenuData[activeCategory]?.[activeSubCategory]?.map(
                (item, index) => (
                  <View
                    key={index}
                    className="bg-rose-50 flex justify-between p-3 rounded-lg"
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: "100%",
                        height: 150,
                        borderRadius: "10px",
                      }}
                    />
                    <Text className="text-md font-semibold mt-2">
                      {item.name}
                    </Text>
                    <Text className="text-gray-600">{item.kcal}</Text>
                    <Text className="text-lg font-bold">₹{item.price}</Text>
                    <TouchableOpacity
                      className="bg-gradient-to-r from-[#9e004c] to-[#80003c] px-6 py-2 rounded-xl mt-2 shadow-md active:opacity-80"
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
