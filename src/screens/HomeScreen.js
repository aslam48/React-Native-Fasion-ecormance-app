import { Pressable, StyleSheet, Text, View,Image,ScrollView, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserLogo from "../../assets/user.png";
import OfferCard from '../components/OfferCard';

import NewArrivalCard from '../components/NewArrivalCard';
import AuthenticationModal from '../components/AuthenticationModal';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisibile] = useState(false);

    useEffect(()=> {
        navigation.setOptions({
            headerShown:false
        })
    }, [])

  return (
    <SafeAreaView className="flex-1 bg-white">
       <ScrollView>
       <View className="flex-row px-5 mt-6 justify-between items-center">
          <View className="bg-black rounded-full w-10 h-10 justify-center items-center">
            <MaterialIcons name="menu" size={24} color={"#fff"} />
          </View>
       
       <View>
       <Pressable onPress={() => setModalVisibile(!modalVisible)} className="flex-row items-center justify-center border border-slate-400 rounded-full ">
              <Image
                source={UserLogo}
                className="h-12 w-12"
                />
                <Text className="font-semibold py-2 pr-4 pl-2">Login</Text>
            </Pressable>
       </View>
       </View>

             {/* search input*/}
           <View className="mt-6 px-5">
            <Text className="font-bold text-2xl">Welcome, User</Text>
            <Text className="font-bold text-xl text-gray-500">Our Fasion App</Text>
        </View>

        <View className="mt-6 px-5">
            <View className="flex-row bg-gray-200 p-2 px-3 items-center rounded-3xl">
                <View>
            <MaterialIcons name="search" size={24} color={"#111"} />
                </View>
                <TextInput placeholder='Search...' 
                placeholderTextColor={"#666666"}
                className="px-2"
                />
            </View>
        </View>

        <View className="mt-6 p-5">
            <OfferCard />
        </View>

        <View className="mt-4">
          <View className="flex-row justify-between items-center px-5">
            <Text className="text-lg font-extrabold">New Arrivals</Text>
            <Pressable>
              <Text className="text-xs text-graay-500"> View ALL</Text>
            </Pressable>
          </View>
          <ScrollView className="mt-4 ml-5"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            <Pressable>
            <NewArrivalCard/>
            </Pressable>

            <Pressable>
            <NewArrivalCard/>
            </Pressable>

            <Pressable>
            <NewArrivalCard/>
            </Pressable>

            <Pressable>
            <NewArrivalCard/>
            </Pressable>

            <Pressable>
            <NewArrivalCard/>
            </Pressable>

            <Pressable>
            <NewArrivalCard/>
            </Pressable>
          </ScrollView>
        </View>

        <View>
          <AuthenticationModal
          modalVisible={modalVisible}
          setModalVisibile={setModalVisibile}
          />
        </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})