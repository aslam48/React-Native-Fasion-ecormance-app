import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Modal} from 'react-native'
import React, { useState, useEffect, useContext} from 'react'
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../features/firebase/useAuth'
import AuthContext from '../features/context/authContext'




const AuthenticationModal = ({modalVisible, setModalVisible}) => {
    const [type, setType] = useState("login")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { currentUser, setCurrentUser, setIsLoggedIn } = useContext(AuthContext);

    const handleRegister = async() => {
        setLoading(true)
        const res = await registerWithEmailAndPassword(name,email,password)
        if(res.success===true){
            console.log("res",res)
            setCurrentUser(res.user)
            setModalVisible(false);
            setIsLoggedIn(true)
            setLoading(false)
        }
    setModalVisible(false);
    };

    const handleLogin = async() => {
        setLoading(true)
        const res= await loginWithEmailAndPassword(email,password)
        if(res.success===true){
          console.log("res",res)
          setCurrentUser(res.user)
          setModalVisible(false);
          setIsLoggedIn(true)
        //   setLoading(false)
        }
      setLoading(false)
      };
      
    useEffect(()=> {
        if(currentUser){
            setIsLoggedIn(true)
        }
    }, [currentUser])  

  return (
    <View style={{flex:1, width:11500}}>
        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> {
            setModalVisible(false)
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
                    value={password} 
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    />

                    <TouchableOpacity
                    className="bg-black py-4 mt-6 rounded-lg"
                    onPress={handleLogin}
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
                    value={name} 
                    onChangeText={setName}
                    keyboardType="email-address"
                    />

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
                     value={password} 
                     onChangeText={setPassword}
                     secureTextEntry={true}
                     />
 
                     <TouchableOpacity
                     className="bg-black py-4 mt-6 rounded-lg"
                     onPress={handleRegister}
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