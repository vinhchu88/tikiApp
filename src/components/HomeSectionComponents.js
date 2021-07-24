import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "react-native/Libraries/NewAppScreen";

const section_banner = require("../assets/section_banner.png");
const item_image = require("../assets/item_image.png");

const ProductItem = ({ image, name, price }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text styles={styles.itemName} numberOfLines={2}>
        {name}
      </Text>
      <Text styles={styles.itemPrice}>{price}</Text>
    </View>
  );
};

const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Mobile - Tablet</Text>
      <Image source={section_banner} style={styles.sectionImage} />
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {/*  */}
          {["All", "Smartphone", "Table", "Mobilephone"].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }
            >
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }
              >
                {e}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            { image1: item_image, image2: item_image },
            { image1: item_image, image2: item_image },
            { image1: item_image, image2: item_image },
            { image1: item_image, image2: item_image },
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem
                name="Iphone 12 Pro Max 250GB"
                image={item_image}
                price="28.900000"
              />
              <ProductItem
                name="Iphone 12 Pro Max 128GB"
                image={item_image}
                price="28.900000"
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text styles={styles.seeMoreText}>SEE MORE 99 PRODUCTS</Text>
      </View>
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2f2f2f",
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  listItemContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: "#484848",
    marginVertical: 4,
  },
  itemPrice: {
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "500",
    color: "#2a2a2a",
  },
  filterContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: "#242424",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "#5a5a5a",
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: "#fff",
  },
  filterInactiveText: {
    color: "#5a5a5a",
  },
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: "#ededed",
    alignItems: "center",
  },
  seeMoreText: {
    color: "#0e45b4",
  },
});
