import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  // Images
  const productImages = [
    require("../assets/images/earbud_1.png"),
    require("../assets/images/earbud_2.png"),
    require("../assets/images/earbud_3.png"),
    require("../assets/images/earbud_4.png"),
  ];

  const features = [
    { id: 1, text: "Advanced Active Noise Cancellation", icon: "check" },
    { id: 2, text: "Ergonomic & Secure Fit", icon: "check" },
    {
      id: 3,
      text: "Up to 30 Hours Battery Life with Charging Case",
      icon: "check",
    },
    { id: 4, text: "IPX7 Water Resistance", icon: "check" },
    { id: 5, text: "Intuitive Touch Controls", icon: "check" },
    { id: 6, text: "Crystal Clear Call Quality", icon: "check" },
  ];

  const socialIcons = [
    { name: "logo-facebook" },
    { name: "logo-twitter" },
    { name: "logo-instagram" },
    { name: "share-outline" },
  ];

  // Detect scroll to update active dot
  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentImageIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Premium Wireless Earbuds</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Product Image Carousel */}
        <View style={styles.imageSection}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
          >
            {productImages.map((image, index) => (
              <View key={index} style={styles.imageSlide}>
                <Image
                  source={image}
                  style={styles.productImage}
                  resizeMode="contain"
                />
              </View>
            ))}
          </ScrollView>

          {/* Image Pagination Dots */}
          <View style={styles.paginationDots}>
            {productImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentImageIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Premium Wireless Earbuds</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>$129.99</Text>
            <View style={styles.stockInfo}>
              <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
              <Text style={styles.stockText}>In Stock (50 available)</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
              Experience unparalleled sound quality and comfort with our Premium
              Wireless Earbuds. Designed for audiophiles and active lifestyles,
              these earbuds feature advanced noise cancellation, a secure fit,
              and a long-lasting battery for hours of immersive listening. Comes
              with a compact charging case.
            </Text>
          </View>

          {/* Features */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            {features.map((feature) => (
              <View key={feature.id} style={styles.featureItem}>
                <MaterialIcons name="check" size={20} color="#007AFF" />
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton}>
            <Ionicons name="bag-outline" size={20} color="#fff" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          {/* Share Section */}
          <View style={styles.shareSection}>
            <Text style={styles.shareTitle}>Share this product</Text>
            <View style={styles.socialIcons}>
              {socialIcons.map((icon, index) => (
                <TouchableOpacity key={index} style={styles.socialIcon}>
                  <Ionicons name={icon.name} size={24} color="#666" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 16,
  },
  notificationButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  imageSection: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
  },
  imageSlide: {
    width: width, // Full screen width
    height: width, // Square aspect ratio (adjust if needed)
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Image fills the container
  },
  paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#007AFF",
  },
  productInfo: {
    padding: 20,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  stockInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  stockText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  featureText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 32,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  shareSection: {
    alignItems: "center",
    paddingBottom: 32,
  },
  shareTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    marginHorizontal: 16,
    padding: 8,
  },
});

export default ProductPage;