import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image } from "react-native";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Explore Packs");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center p-4 pb-5 border-gray-300">
        <Text className="text-[22px] font-bold text-gray-800">
          {" "}
          Coffee Pack
        </Text>
        <TouchableOpacity className="border-2 border-gray-500 px-7 py-2 rounded-md shadow-inner">
          <Text className="text-gray-700 font-bold">FAQs</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row border-b border-gray-300">
        {["Explore Packs", "Active Packs"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`flex-1 p-3 ${
              activeTab === tab ? "border-b-2 border-sky-950" : "text-gray-500"
            }`}
          >
            <Text
              className={`text-center font-bold text-[18px] ${
                activeTab === tab ? "text-sky-950" : "text-gray-500"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "Explore Packs" && (
        <View className="p-4 pt-6 pr-12">
          <View className="bg-[#faeed9] p-5 rounded-lg flex-row items-center shadow-lg">
            <View className="flex-1">
              <Text className="text-4xl font-bold text-grey-800 pb-3">
                Big Savings
              </Text>
              <Text className="text-gray-700 text-lg font-semibold pb-8">
                On Your Favourite Product When You Buy Subscription Packs
              </Text>
              <Text className="text-yellow-700 font-bold mt-2 text-xl">
                Coming Soon
              </Text>
            </View>
            <Image
              source={require("@/assets/images/coffee-bag1.png")}
              style={{ width: 70, height: 70 }}
            />
          </View>
        </View>
      )}
      {activeTab === "Active Packs" && (
        <View className="p-4 pt-6 pl-12">
          <View className="bg-[#fff1ec] p-5 rounded-lg flex-row items-center shadow-lg">
            <View className="flex-1">
              <Text className="text-4xl font-bold text-grey-800 pb-3">
                Sale Live
              </Text>
              <Text className="text-gray-700 text-lg font-semibold pb-8">
                On Your Any Order, Place Order To Claim Your Discount
              </Text>
              <Text className="text-amber-800 font-bold mt-2 text-xl">
                Active
              </Text>
            </View>
            <Image
              source={require("@/assets/images/coffee-bag.png")}
              style={{ width: 90, height: 90 }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
