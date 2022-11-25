import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CategoriesData } from "../Constants/CategoriesData";
import { Octicons } from "@expo/vector-icons";
import { COLORS } from "../Constants/Colors";

const Categories = () => {
  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity>
      <View key={index} style={[styles.itemWrapper, {marginLeft: item.id == 1 ? 23 : 0}]}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={[styles.itemSelect, {backgroundColor: item.selected ? COLORS.terciary : COLORS.terciary}]}>
          <Octicons
            name="chevron-right"
            size={20}
            color={COLORS.white}
            style={styles.iconSelect}
          />
        </View>
      </View>
      </TouchableOpacity>
    );
  };

  

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.title}>Categorias</Text>
      <Text style={styles.subTitle}>Deslice para ver más categorias</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={CategoriesData}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 30,
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  listWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  itemWrapper: {
    backgroundColor: COLORS.secondary,
    marginRight: 30,
    borderRadius: 20,
  },
  itemTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
    marginHorizontal: 10,
    marginTop: 18,
  },
  itemSelect: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 40,
    marginBottom: 20,
  },
  iconSelect: {
    alignSelf: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 12,
    paddingHorizontal: 30

  }
});
