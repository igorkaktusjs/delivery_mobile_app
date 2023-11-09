import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}> Top picks in your neighourhood</Text>
        <Restaurants />
        <Text style={styles.header}> Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 80,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
export default Page;
