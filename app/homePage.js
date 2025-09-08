import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("Smartphones");
  const [searchText, setSearchText] = useState("");

  const categories = ["All", "Smartphones", "Laptops", "Tablets"];

  // Placeholder product data
  const products = Array(6)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `Product ${index + 1}`,
      price: "$999",
    }));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product Listings</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Category Header with Filter and Sort */}
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Smartphones</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="filter" size={16} color="#666" />
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton}>
              <Ionicons name="swap-vertical" size={16} color="#666" />
              <Text style={styles.sortText}>Sort</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryTabs}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryTab,
                activeCategory === category && styles.activeCategoryTab,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryTabText,
                  activeCategory === category && styles.activeCategoryTabText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Product Grid */}
        <View style={styles.productGrid}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.productImage} />
              <View style={styles.productInfo}>
                <View style={styles.productNamePlaceholder} />
                <View style={styles.productPricePlaceholder} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Ionicons name="search" size={24} color="#007AFF" />
          <Text style={[styles.navText, styles.activeNavText]}>Catalog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.cartContainer}>
            <Ionicons name="bag-outline" size={24} color="#999" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </View>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginRight: 12,
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    backgroundColor: "#333",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  filterText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#666",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#666",
  },
  categoryTabs: {
    flexDirection: "row",
    marginBottom: 24,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#f0f0f0",
  },
  activeCategoryTab: {
    backgroundColor: "#007AFF",
  },
  categoryTabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeCategoryTabText: {
    color: "#ffffff",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  productCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 120,
    backgroundColor: "#f0f0f0",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productInfo: {
    padding: 12,
  },
  productNamePlaceholder: {
    width: "80%",
    height: 14,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 8,
  },
  productPricePlaceholder: {
    width: "50%",
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    backgroundColor: "#ffffff",
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  activeNavItem: {
    // Active nav item styles if needed
  },
  navText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  activeNavText: {
    color: "#007AFF",
  },
  cartContainer: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default App;