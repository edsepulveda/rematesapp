import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DummyData } from "../Constants/DummyData";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";


const PopularBids = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.bidsWrapper}>
      <Text style={styles.bidsTitle}>Remates Destacados</Text>
      {DummyData.map((item) => (
        <View
          key={item.id}
          style={[
            styles.bidsCardWrapper,
            { marginTop: item.id == 1 ? 30 : 20, marginBottom: item.id == 3 ? 30 : 0 },
          ]}
        >
          <View>
            <View>
              <View style={styles.popularBidsWrapper}>
                <Text style={styles.popularText}>Destacado de la Semana</Text>
              </View>
              <View style={styles.popularTitleWrapper}>
                <Text style={styles.popularTitle}>{item.title}</Text>
                <Text style={styles.popularCategory}>Categoria: {item.category}</Text>
              </View>
              <View style={styles.cardBottom}>
                <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item})}>
                  <View style={styles.moreInfoButton}>
                    <Entypo name="chevron-right" size={24} color="black" />
                    <Text>Más Info</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.popularCardRight}>
            <Image source={item.image} style={styles.popularImage}/>
          </View>
        </View>

      ))}
    </View>
  );
};

export default PopularBids;

const styles = StyleSheet.create({
  bidsWrapper: {
    paddingHorizontal: 20
  },
  bidsTitle: {
    fontSize: 16,
    fontWeight: '700'
  },
  bidsCardWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row-reverse',

  },
  popularBidsWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  popularText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700'
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitle:{
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    textAlign: 'center'
  },
  popularCategory: {
    fontSize: 13,
    color: '#edede9',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  cardBottom: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  moreInfoButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    padding: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  popularCardRight: {
    marginRight: -20,
    top: 20,
  },
  popularImage: {
    width: 204,
    height: 120,
    alignItems: 'center',
    resizeMode: 'contain',
  }
});
