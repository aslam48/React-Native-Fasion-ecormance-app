import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Modal} from 'react-native'
import React, { useState } from 'react'



const AuthenticationModal = ({modalVisible, setModalVisibile}) => {
    const [type, setType] = useState("login")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passwaord, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


  return (
    <View style={{flex:1, width:11500}}>
        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> {
            setModalVisibile(false)
        }}
        >
            {type === "login" ? ( 
            <Pressable className="flex-1 justify-center items-center bg-black/[0.5]">
                <View className="w-[80%] bg-white p-6 rounded-lg">
                    {/* email  */}
                    <Text>Email:</Text>
                    <TextInput
                    className="border border-slate-300 px-3 py-2"
                    value={email} 
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    />

                    {/* passsword  */}
                    <Text>Password:</Text>
                    <TextInput
                    className="border border-slate-300 px-3 py-2"
                    value={passwaord} 
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    />

                    <TouchableOpacity
                    className="bg-black py-4 mt-6 rounded-lg"
                    >
                        <Text className="text-white font-semibold text-center">Login</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center items-center mt-4">
                        <Text className="text-slate-500">Not a user?</Text>
                        <Pressable 
                        onPress={() => setType("register")}
                        >
                            <Text className="font-bold ml-2">Register</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>)  : ( 
                 <Pressable className="flex-1 justify-center items-center bg-black/[0.5]">
                 <View className="w-[80%] bg-white p-6 rounded-lg">
                 <Text>Name:</Text>
                    <TextInput
                    className="border border-slate-300 px-3 py-2"
                    value={email} 
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    />

                     {/* email  */}
                     <Text>Email:</Text>
                     <TextInput
                     className="border border-slate-300 px-3 py-2"
                     value={name} 
                     onChangeText={setName}
                     keyboardType="email-address"
                     />
 
                     {/* passsword  */}
                     <Text>Password:</Text>
                     <TextInput
                     className="border border-slate-300 px-3 py-2"
                     value={passwaord} 
                     onChangeText={setPassword}
                     secureTextEntry={true}
                     />
 
                     <TouchableOpacity
                     className="bg-black py-4 mt-6 rounded-lg"
                     >
                         <Text className="text-white font-semibold text-center">Register</Text>
                     </TouchableOpacity>
 
                     <View className="flex-row justify-center items-center mt-4">
                         <Text className="text-slate-500">already a user?</Text>
                         <Pressable 
                         onPress={() => setType("login")}
                         >
                             <Text className="font-bold ml-2">login</Text>
                         </Pressable>
                     </View>
                 </View>
             </Pressable>
            )}

        </Modal>
    </View>
  )
}

export default AuthenticationModal

const styles = StyleSheet.create({})