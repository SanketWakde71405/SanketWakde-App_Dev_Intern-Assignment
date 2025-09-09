import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Smartphones");
  const [activeNavItem, setActiveNavItem] = useState("Catalog"); // Add separate state for navigation
  const [searchText, setSearchText] = useState("");

  const categories = ["All", "Smartphones", "Laptops", "Tablets"];
  const navigationItems = ["Home", "Catalog", "Cart", "Profile"];

  // Placeholder product data
  const products = Array(6)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `Product ${index + 1}`,
      price: "$999",
    }));

  return (
    <SafeAreaView
      className="flex flex-1 bg-white"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="flex flex-row justify-between items-center px-4 py-3 border-b border-zinc-100">
        <Text className="text-xl font-semibold text-black">
          Product Listings
        </Text>
        <View className="flex flex-row items-center">
          <TouchableOpacity className="mr-3">
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity className="w-8 h-8 rounded-full bg-zinc-100">
            <View className="w-full h-full rounded-full bg-zinc-800" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-3">
        <View className="flex flex-row items-center bg-stone-100 rounded-xl px-3 py-2">
          <Ionicons name="search" size={20} color="#999" className="mr-2" />
          <TextInput
            className="flex-1 text-base text-black"
            placeholder="Search products..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex flex-1 px-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Category Header with Filter and Sort */}
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-black">Smartphones</Text>
          <View className="flex flex-row items-center">
            <TouchableOpacity className="flex flex-row items-center mr-4">
              <Ionicons name="filter" size={16} color="#666" />
              <Text className="ml-1 text-base text-stone-500">Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Ionicons name="swap-vertical" size={16} color="#666" />
              <Text className="ml-1 text-base text-stone-500">Sort</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Tabs */}
        <View className="flex flex-row mb-6">
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              className={`px-4 py-2 rounded-3xl mr-3 ${
                activeCategory === category ? "bg-blue-600" : "bg-zinc-100"
              }`}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                className={`text-base text-stone-600 font-medium ${
                  activeCategory === category ? "text-white" : ""
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Product Grid */}
        <View className="flex flex-row flex-wrap justify-between pb-5">
          {products.map((product) => (
            <View
              key={product.id}
              className="w-[48%] bg-white rounded-xl mb-4 shadow shadow-black"
            >
              <View className="w-full h-[120px] bg-zinc-100 rounded-t-xl" />
              <View className="p-3">
                <View className="w-[80%] h-3.5 bg-neutral-200 rounded mb-2" />
                <View className="w-[50%] h-3 bg-neutral-200 rounded" />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex flex-row justify-around py-3 px-4 border-t border-zinc-100 bg-white">
        <TouchableOpacity
          className="items-center flex flex-1"
          onPress={() => setActiveNavItem("Home")}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={activeNavItem === "Home" ? "#007AFF" : "#999"}
          />
          <Text
            className={`font-medium ${
              activeNavItem === "Home" ? "text-blue-600" : "text-neutral-400"
            }`}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center flex flex-1"
          onPress={() => setActiveNavItem("Catalog")}
        >
          <Ionicons
            name="search"
            size={24}
            color={activeNavItem === "Catalog" ? "#007AFF" : "#999"}
          />
          <Text
            className={`font-medium ${
              activeNavItem === "Catalog" ? "text-blue-600" : "text-neutral-400"
            }`}
          >
            Catalog
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center flex flex-1"
          onPress={() => setActiveNavItem("Cart")}
        >
          <View className="relative">
            <Ionicons
              name="bag-outline"
              size={24}
              color={activeNavItem === "Cart" ? "#007AFF" : "#999"}
            />
            <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 justify-center items-center">
              <Text className="text-white text-xs font-bold">2</Text>
            </View>
          </View>
          <Text
            className={`font-medium ${
              activeNavItem === "Cart" ? "text-blue-600" : "text-neutral-400"
            }`}
          >
            Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center flex flex-1"
          onPress={() => setActiveNavItem("Profile")}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color={activeNavItem === "Profile" ? "#007AFF" : "#999"}
          />
          <Text
            className={`font-medium ${
              activeNavItem === "Profile" ? "text-blue-600" : "text-neutral-400"
            }`}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;