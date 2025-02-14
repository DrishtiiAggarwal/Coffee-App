import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type IconButtonProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
};

type InfoCardProps = {
  icon: any;
  title: string;
  subtitle: string;
  extra?: boolean;
};

const images = {
  coffeeCup: require("@/assets/images/coffee-cup.png"),
  wallet: require("@/assets/images/wallet.png"),
  discount: require("@/assets/images/discount.png"),
  cafe: require("@/assets/images/cafe.png"),
};

const menuItems: string[] = [
  "Hot Beverages",
  "Meal Combos",
  "Food",
  "Ice Cream",
  "Season's Specials",
  "Cold Coffees",
  "Baked Goodness",
];

const IconButton: React.FC<IconButtonProps> = ({ name, size = 35 }) => (
  <MaterialIcons name={name} size={size} color="#082f49" />
);

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  subtitle,
  extra,
}) => (
  <View className="flex justify-center items-center gap-1">
    <Image
      source={icon}
      style={{ width: 35, height: 35 }}
      className="mx-auto color-sky-950"
    />
    <Text className="mt-2 text-center font-semibold text-sky-950">{title}</Text>
    <Text className="bg-cream w-[60px] text-sm font-inter-semibold py-1 px-1 text-center text-sky-950 rounded-md">
      {subtitle}
      {extra && (
        <Text className=" bg-darkGrey ml-1  text-sm px-1 rounded-md text-white">
          +
        </Text>
      )}
    </Text>
  </View>
);

const Index: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" h-[93vh] overflow-scroll">
      <View className="bg-skinColor pt-6 p-4">
        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center">
            <View className="bg-white w-11 h-11 rounded-full flex items-center justify-center">
              <MaterialCommunityIcons
                name="storefront-outline"
                size={30}
                color="#082f49"
              />
            </View>
            <View className="ml-2">
              <Text className="font-bold text-lg text-sky-950">Kalkaji</Text>
              <Text className="text-sm text-[#474442]">2.1 KM AWAY</Text>
            </View>
          </View>
          <View className="flex-row gap-5">
            <IconButton name="search" />
            <IconButton name="account-circle" />
          </View>
        </View>

        <View className="mt-9 mb-0">
          <Text className="text-[23px] font-bold text-sky-950">
            Good Evening, Drishti!
          </Text>
          <View className="bg-brownishPink mt-3 p-5 rounded-lg flex-row justify-between items-center">
            <View className="flex flex-row items-center">
              <MaterialIcons name="stars" size={35} color="#f7bb7f" />
              <View className="ml-1">
                <Text className="text-white">Partner</Text>
                <Text className="text-white">Level 1</Text>
              </View>
            </View>
            <View>
              <Text className="text-white text-center font-inter-italic">0/15</Text>
              <Text className="text-white text-center font-inter">Orders</Text>
            </View>
            <View>
              <Text className="text-white text-center font-inter">15 Orders in 16</Text>
              <Text className="text-white text-center font-inter">Days to go</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="p-4 bg-white">
        <View className="grid grid-cols-4 gap-12 mt-3 p-2">
          <InfoCard icon={images.coffeeCup} title="Coins" subtitle="83" />
          <InfoCard
            icon={images.wallet}
            title="Wallet"
            subtitle="₹0"
            extra={true}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("packs" as never)}
          >
            <InfoCard icon={images.discount} title="Offers" subtitle="1 New" />
          </TouchableOpacity>

          <InfoCard icon={images.cafe} title="Cafes" subtitle="Explore" />
        </View>

        <Text className="text-[22px] font-semibold mt-6  mb-3 text-sky-950">What's on your mind?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("menu" as never)}>
          <View className="bg-[#f5f1e8] p-4 rounded-lg flex-row ">
            <MaterialIcons name="menu-book" size={30} color="#523426" />
            <Text className="text-lg font-semibold text-sky-950 pl-3">Explore our Menu</Text>

            <Text className="font-bold text-xl  pl-3">{">"}</Text>
          </View>
        </TouchableOpacity>

        <View className="grid grid-cols-3 gap-6 mt-5 mb-20">
          {menuItems.map((item, index) => (
            <View key={index}>
              <View className="p-2">
                <View className=" bg-cream flex justify-center items-center h-24 rounded-xl ">
                  <Text>Image</Text>
                </View>
              </View>

              <Text className="mx-auto">{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
