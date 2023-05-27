import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = (props) => {
    
    const [loading, setLoading] = useState(false);

    const onLoginPress = () => {
        if (!loading) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false);
                setTimeout(() => {
                    props.navigation.navigate("Home");
                }, 500);
            }, 3000);
        }
    }

    useEffect(() => {
        return () => {
            setLoading(false);
        }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#080808', }}>
            <Text style={{ color: "#fff", fontSize: 40, marginLeft: 20, }}>
                Sign In
            </Text>
            <View style={{ height: 40, }} />
            <View style={{ marginHorizontal: 20, }}>
                <TextInput placeholder="Enter email" placeholderTextColor={"grey"} style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: "#DEDEDE",
                    paddingHorizontal: 10,
                    fontSize: 16,
                    color: "#000",
                    alignSelf: "center",
                }} />
                <View style={{ height: 20, }} />
                <TextInput placeholder="Enter password" placeholderTextColor={"grey"} secureTextEntry style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: "#DEDEDE",
                    paddingHorizontal: 10,
                    fontSize: 16,
                    color: "#000",
                    alignSelf: "center",
                }} />
                <View style={{ height: 40 }} />
                <View style={{ width: "100%", alignItems: "flex-end" }}>
                    <TouchableOpacity onPress={onLoginPress} style={{ width: 150, height: 40, justifyContent: "center", alignItems: "center", paddingHorizontal: 20, backgroundColor: "purple", borderRadius: 5, }}>
                        <ActivityIndicator color={"#fff"} animating={loading} style={StyleSheet.absoluteFillObject} />
                        {!loading ? (
                            <Text style={{ fontSize: 18, fontWeight: "500", color: "#DEDEDE" }}>
                                Login
                            </Text>
                        ) : null}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;