import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const CategoriesDetails = () => {

  const route = useRoute();
  const navigation = useNavigation()

  const { item } = route.params;
  console.log(item);

  //? operator, si existe un item, quiero que me despligues su atributo de title, en otro caso, no me mostrará nada.
  return (
    <View>
      <Text>{item?.title}</Text>
    </View>
  )
}

export default CategoriesDetails

const styles = StyleSheet.create({})