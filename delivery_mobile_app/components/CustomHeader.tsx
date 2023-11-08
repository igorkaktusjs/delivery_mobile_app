import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useRef} from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';


const SearchBar = () => (
    <View style={styles.searchConrainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons  style={styles.searchIcon } name="ios-search" size={20} color={Colors.medium}/>
                <TextInput style={styles.input} placeholder='Restaurants, groceries, dishes'/>
                </View>
                <Link href={'/(modal)/filter'} asChild>
            <TouchableOpacity style={styles.optionButton}>
                <Ionicons name='options-outline' size={20} color={Colors.primary}/>
            </TouchableOpacity>
        </Link>
            </View>
    </View>
)

const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModal = () => {
        bottomSheetRef.current?.present();
    } 

  return (
    <SafeAreaView style={styles.saveArea}>
        <BottomSheet ref={bottomSheetRef} />
        <View style={ styles.container}>
            <TouchableOpacity onPress={openModal}>
                <Image 
                source={(require('@/assets/images/bike.png'))}
                style={styles.bike}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                <Text style={styles.title}>Delivery Now</Text>
                <View style={styles.locationName}>
                    <Text style={styles.subtitle}>London</Text>
                    <Ionicons name='chevron-down'  size={20} color={Colors.primary}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton} onPress={openModal}>
                <Ionicons name='person-outline' size={20} color={Colors.primary}/>
            </TouchableOpacity>
        </View>
        <SearchBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {    
        flexDirection: 'row',
        gap: 20,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20

    },
    saveArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bike: {
        height: 30,
        width: 30
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: 14,
        color: Colors.medium
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchConrainer: {
        height: 60,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center'
        },
    searchField:{
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        color: Colors.mediumDark 
    },
    searchIcon:{
        paddingLeft: 10
    }
    ,
    optionButton: {
        padding: 10,
        borderRadius: 50
    }
})

export default CustomHeader