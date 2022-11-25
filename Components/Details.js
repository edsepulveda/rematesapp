import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Constants/Colors";

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation()

  const { item } = route.params;
  console.log(item);

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerLeft}>
              <Ionicons
                name="chevron-back-outline"
                color={COLORS.primary}
                size={30}
              />
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>{item?.title}</Text>
      </View>

      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryText}>Categoria: {item?.category}</Text>
      </View>


      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoText}>
              {item.info}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoText}>
              {item.more_info}
            </Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} style={styles.itemImage}/>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerLeft: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 35,
  },
  text: {
    fontSize: 35,
    fontWeight: '700',
    color: COLORS.secondary,
  },
  categoryWrapper:{
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryText: {
    fontSize: 28,
  },
  infoWrapper:{
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper:{
    marginBottom: 20,
  },
  infoText:{
    fontSize: 20,
    color: COLORS.secondary,
  },
  infoRightWrapper: {},
  itemImage: {
    width: 350,
    height: 250,
    alignItems: 'center',
    resizeMode: 'contain',
  }
});
