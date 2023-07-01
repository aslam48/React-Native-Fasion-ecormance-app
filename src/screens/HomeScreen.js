import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserLogo from "../../assets/user.png";
import { Image } from 'react-native';

const HomeScreen = ({navigation}) => {
    useEffect(()=> {
        navigation.setOptions({
            headerShown:false
        })
    }, [])

  return (
    <SafeAreaView className="flex-1 bg-white">
       <View className="flex-row px-5 mt-6 justify-between items-center">
          <View className="bg-black rounded-full w-10 h-10 justify-center items-center">
            <MaterialIcons name="menu" size={24} color={"#fff"} />
          </View>
       
            <Pressable className="flex-row items-center justify-center border border-slate-400 rounded-full ">
              <Image
                source={UserLogo}
                className="h-12 w-12"
                // style={{
                //   height: 40,
                //   width: 40,
                //   backgroundColor: "#aaaaaa",
                //   borderRadius: 50,
                // }}
                />
                <Text className="font-semibold py-2 pr-4 pl-2">Login</Text>
            </Pressable>
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})