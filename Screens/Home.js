import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Octicons  } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../Constants/Colors'
import Categories from '../Components/Categories'
import PopularBids from '../Components/PopularBids'

export default function Home() {



  return (
    <ScrollView>
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          {/* Icon */}
          <Octicons name="three-bars" size={24} color="black" />
        </View>
      </SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.titleContent}>Remates</Text>
        <Text style={styles.titleHeader}>Last Don</Text>
      </View>

      {/* Search Component */}
      <View style={styles.searchWrap}>
        <Octicons name="search" size={20} color={COLORS.primary}/>
        <View style={styles.search}>
          <TextInput placeholder='Buscar Remates...' style={styles.searchText}/>
        </View>
      </View>

      {/* Categories Component */}
      <Categories/>

      {/* Remates Destacados Component */}
      <PopularBids/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: 'center'
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  title: {
    marginTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  titleContent: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  titleHeader: {
    fontSize: 32,
    marginTop: 5,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: COLORS.primary,
  },
  searchWrap:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search:{
    flex: 1,
    marginLeft: 20,
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 2,
  }


})