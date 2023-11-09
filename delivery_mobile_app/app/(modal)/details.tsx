import { View, Text, StyleSheet, Image, TouchableOpacity, SectionList, ListRenderItem } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Colors from "@/constants/Colors";
import { restaurant } from "@/assets/data/restaurant";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {

  const navigation = useNavigation();

  const DATA = restaurant.food.map((item,index)=>({
      title: item.category,
      data: item.meals,
      index
  }));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundButton}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="share-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

const renderItem: ListRenderItem <any> = ({item, index}) => (
    <Link href={'/'} asChild>
    <TouchableOpacity style={styles.renderItemBox}>
        <View style={{flex: 1}}>
        <Text style={styles.dish}>{item.name}</Text>
        <Text style={styles.dishText}>{item.info}</Text>
        <Text style={styles.dishText}>${item.price}</Text>
        </View>
        <Image source={item.img} style={styles.dishImage}/>
        
    </TouchableOpacity>
    </Link>
)


  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#fff"}
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        contentBackgroundColor={Colors.lightGrey}
        style={{ flex: 1 }}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ height: 300, width: "100%" }}
          />
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>{restaurant.delivery} . {restaurant.tags.map((tag, index) => (
              `${tag}${index < restaurant.tags.length -1 ? '.' : ''}`
          ))}</Text>
          <Text style={[styles.restaurantDescription, styles.restaurantAbout]}>{restaurant.about}</Text>
          <SectionList
          contentContainerStyle={{paddingBottom: 50}}
          scrollEnabled={false} 
          sections={DATA} 
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id + index}`}
          ItemSeparatorComponent={() => <View style={styles.Item}/>}
          SectionSeparatorComponent={() => <View style={styles.Item}/>}
          renderSectionHeader={({section: { title, index}}) => <Text style={styles.sectionHeader}>{title}</Text>}

           />
        </View>
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  stickySectionText: {
    fontSize: 20,
    margin: 10,
  },
  restaurantName: {
    fontSize: 30,
    margin: 16
  },
  restaurantDescription: {
    fontSize: 16,
    margin: 16,
    lineHeight: 22,
    color: Colors.medium
  },
  restaurantAbout: {
      color: Colors.mediumDark
  },
  sectionHeader:{
     fontSize: 22,
     fontWeight: 'bold',
     margin: 16,
     marginTop: 40 
  },
  Item:{
      height: 1,
      backgroundColor: Colors.grey,
      marginHorizontal: 20
  },
  renderItemBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff'
  },
  dishImage: {
      height: 80,
      width: 80,
      borderRadius: 4
  },
  dish:{
      fontSize: 16,
      fontWeight: 'bold'
  },
  dishText: {
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4
  }
});
export default Details;
