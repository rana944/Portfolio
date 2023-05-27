import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View ,Image, Button, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InteractiveChart from "./InteractiveChart";
import BarChart from "./BarChart";


const { width } = Dimensions.get("screen");

const Home = () => {

    const [showLineChart, setShowLineChart] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#080808' }}>
             <View style={style.view}>
                <View style={style.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 20, }}>
                        <Text style={style.texth3}>Your Wallet</Text>
                        <TouchableOpacity onPress={() => setShowLineChart(prev => !prev)} style={{ width: 40, height: 40, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                        {
                            showLineChart ?
                                <Image source={require("./bar-chart.png")} style={{ width: 25, height: 25, resizeMode: "contain", tintColor: "#fff" }} />
                                :
                                <Image source={require("./line-chart.png")} style={{ width: 25, height: 25, resizeMode: "contain", tintColor: "#fff" }} />
                        }
                        </TouchableOpacity>
                    </View>
                        <View style = {{
                            flexDirection:"row",
                            alignItems: "flex-end"
                        }}>
                            <Text style={style.texth3}>$</Text>
                            <Text style={{fontSize: 20,fontWeight: 'bold',marginLeft:5,marginBottom:2,color: '#fff',}}>4563284.2659</Text>
                            <Text style={{fontSize: 15,fontWeight: 'bold',marginLeft:5,marginBottom:2,color: 'White',}}>USD</Text>
                        </View>
                        <View style = {{
                            flexDirection:"row",
                            alignItems:'center',
                        }}>
                            <Image style={{
                                width: 16 ,
                                height:16,
                                marginTop:10,
                                marginLeft: 20,
                            }}
                                source={require('./increase.png')}
                            />
                            <Text style={{fontSize: 15,fontWeight: 'bold',marginLeft:5,marginBottom:2,color: '#00C306',}}>+30.65%</Text>
                            <Text style={{fontSize: 15,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'White',}}>7d change</Text>
                        </View>
                

                    <View style={{
                        flexDirection:'row',
                        marginTop:30,
                        marginBottom: -15,
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity style={{ flexDirection:'row' }}>
                            <View style={style.button}>
                                <Image source={require('./money.png')} style={style.icon} />
                                <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'black',}}>Transfer</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection:'row' }}>
                            <View style={style.button}>
                                <Image source={require('./upload.png')} style={style.icon} />
                                <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'black',}}>Withdraw</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                    {
                        showLineChart ?
                        <InteractiveChart width={width} height={200} />
                        :
                        <BarChart />
                    }
                    <View>
                        <Text style={style.texth4}>Your Assets</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 15,fontWeight: 'bold',marginLeft:25,marginTop:5,color: 'grey',}}>Assets</Text>
                        <Text style={{fontSize: 15,fontWeight: 'bold',marginLeft:25,marginTop:5,color: 'grey',}}>{'                         '}Price</Text>
                        <Text style={{fontSize: 15,fontWeight: 'bold',marginLeft:25,marginTop:5,color: 'grey',}}>{'                  '}Holdings</Text>
                       
                        </View>
                    </View>
                    <View style={{marginLeft:20,}}>
                        <View style={{marginTop:30, flexDirection:"row",
                            }}>
                            <Image style={{width:30,height:30}} source={require('./bit.png')}/>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>Bitcoin</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'              '}$658.15</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'        '}$34,2983</Text>

                        </View>
                        
                        <View style={{marginTop:30, flexDirection:"row",
                            }}>
                            <Image style={{width:30,height:30}} source={require('./eth.png')}/>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>Ethereum</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'         '}$2665</Text>
                                      <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'           '}$12,298.3</Text>
                        </View>
                        
                        <View style={{marginTop:30, flexDirection:"row",
                            }}>
                            <Image style={{width:30,height:30}} source={require('./Sheb.png')}/>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>Dollar</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'               '}$250</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'              '}$9650</Text>
                        </View>
                        
                        <View style={{marginTop:30, flexDirection:"row",
                            }}>
                            <Image style={{width:30,height:30}} source={require('./x.png')}/>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>Xcoin</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'               '}$362.2</Text>
                            <Text style={{fontSize: 18,fontWeight: 'bold',marginLeft:10,marginBottom:2,color: 'white',}}>{'           '}$4,2983</Text>
                        </View>
                        
                    </View>
                </View>
        </SafeAreaView>
    )
}

export default Home;

const style = StyleSheet.create({
    view:{
        flex: 1, 
        backgroundColor:'#080808',
        // alignItems: 'center',
        },
        header:{
            backgroundColor:'#212125',
            width:400,
            height:200,
            justifyContent:'center',
            marginBottom:30,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
          },
          text: {
            fontSize: 35,
            fontWeight: 'bold',
            marginLeft:20,
            letterSpacing: 4,
            marginBottom:15,
            color: 'white',
          },
          texth3: {
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft:20,
            marginBottom:2,
            color: 'lightgrey',
          },
          texth4: {
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft:20,
            marginTop:50,
            marginBottom:2,
            color: 'white',
          },
          button: {
            width:180,
            height: 50,
            backgroundColor: 'white',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginLeft:10,
            borderRadius:15,
          },
          icon: {
            width: 20,
            height: 20,
            tintColor: 'black',
          },
    });