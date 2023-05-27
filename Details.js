import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import { AdMobBanner } from "react-native-admob";
// import Theme from "../Utils/Theme";
import RenderHtml from "react-native-render-html";
import YoutubePlayer from "react-native-youtube-iframe";
import moment from "moment/moment";
import WebView from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

var DomParser = require('react-native-html-parser').DOMParser

const Theme = {
  wp: Dimensions.get("window").height,
  hp: Dimensions.get("window").width,
}

function CodeScreen(props) {
  const [newsDetails, setNewsDetails] = useState();

  const regex = /(<([^>]+)>)/gi;
  const source = {
    html: newsDetails?.text,
  };
  const getNewsDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.glam-blam.ba/articles/${props.route.params.id}`
      );
      
      const links: { [key: string]: string } = {};
      
      if (response?.data?.text) {
        const html = response?.data?.text;
        let doc = new DomParser().parseFromString(html,'text/html')
        const parsedHtml = doc.getElementsByTagName('iframe');
        const filteredLinks = (Object.values(parsedHtml?.[0].attributes) ?? []).filter(res => res.value !== null && res.value?.startsWith("https")).map(res => res.value);

        if (filteredLinks[0]) {
          links["instagramLink1"] = filteredLinks[0];
        }
  
        if (filteredLinks[1]) {
          links["instagramLink1"] = filteredLinks[0];
        }
      }

      setNewsDetails({...response?.data, ...links});
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  useEffect(() => {
    getNewsDetails();
  }, []);

 /*  if (newsDetails?.text) {
    const html = newsDetails?.text;

    let doc = new DomParser().parseFromString(html,'text/html')
    const parsedHtml = doc.getElementsByTagName('iframe');
    
    console.log("___IFRAME_NODES___", (Object.values(parsedHtml?.[0].attributes) ?? []).filter(res => res.value !== null && res.value?.startsWith("https")).map(res => res.value));
  } */

  return (
    <SafeAreaView>
      <ScrollView
        style={{ padding: 10, paddingHorizontal: 15, marginBottom: 20 }}
      >
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={newsDetails?.imagesList}
          renderItem={({ item, index }) => {
            return (
              <Image source={{ uri: item.link }} style={styles.container} />
            );
          }}
        />
        <Text style={styles.heading}>{newsDetails?.heading}</Text>
        <Text style={styles.time}>
          {moment(newsDetails?.dateTime).format("DD-MM-YYYY HH:mm:ss")}
        </Text>
        <View
          style={{
            marginBottom: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <AdMobBanner
            adSize="largeBanner"
            adUnitID="ca-app-pub-5169555439846786/4252210745"
          /> */}
        </View>
        <RenderHtml
          tagsStyles={{
            p: {
              color: "black",
              fontSize: 16,
              margin: 0,
              textAlign: "left",
            },
            body: {
              marginBottom: 20,
            },
            li: {
              width: windowWidth - 50,
              margin: 0,
            },
            ul: {
              margin: 0,
              alignSelf: "center",
            },
            img: {
              marginVertical: 10,
            },
          }}
          contentWidth={windowWidth}
          source={source}
        />

        {newsDetails?.videoLink1 ? (
          <View style={{ marginTop: 10 }}>
            <YoutubePlayer
              height={220}
              videoId={newsDetails?.videoLink1.split("embed/")[1]}
            />
          </View>
        ) : null}
        {newsDetails?.videoLink2 ? (
          <View style={{ marginTop: 10 }}>
            <YoutubePlayer
              height={220}
              videoId={newsDetails?.videoLink2.split("embed/")[1]}
            />
          </View>
        ) : null}
        {newsDetails?.instagramLink1 ? (
          <View style={{ width: "100%", height: windowHeight / 1.3 }}>
            <WebView
              source={{
                html: `
                         <div>
                          <iframe style="width:100%;height:100%;border-width: 0;"  src=${newsDetails?.instagramLink1} ></iframe> 
                         </div> `,
              }}
            />
          </View>
        ) : null}
        {newsDetails?.instagramLink2 ? (
          <View style={{ width: "100%", height: windowHeight / 1.3 }}>
            <WebView
              source={{
                html: `
                       <div>
                        <iframe style="width:100%;height:100%;border-width: 0;"  src=${newsDetails?.instagramLink2} ></iframe> 
                       </div> `,
              }}
            />
          </View>
        ) : null}
        {newsDetails?.tiktokLink1 ? (
          <View style={{ height: windowHeight / 0.9 }}>
            <WebView
              injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1.04, maximum-scale=1.04, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
              scalesPageToFit={false}
              source={{
                html: `
            <div >
            <iframe style="height:100%;border-width: 0;" src=${newsDetails?.tiktokLink1} ></iframe> 
            </div> `,
              }}
            />
          </View>
        ) : null}
        {newsDetails?.tiktokLink2 ? (
          <View style={{ height: windowHeight / 0.9 }}>
            <WebView
              injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1.04, maximum-scale=1.04, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
              scalesPageToFit={false}
              source={{
                html: `
           <div >
           <iframe style="height:100%;border-width: 0;" src=${newsDetails?.tiktokLink2} ></iframe> 
           </div> `,
              }}
            />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Root" component={CodeScreen} initialParams={{ id: 4656 }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Theme.wp,
  },
  heading: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    // marginLeft: Theme.wp * 0.03,
    // marginRight: Theme.wp * 0.05,
    marginTop: Theme.hp * 0.02,
    fontFamily: "AvenirNext-Bold",
    textAlign: "center",
    marginBottom: 5,
  },
  time: {
    color: "#4a4a4a",
    fontSize: 15,
    //fontWeight: 'bold',
    marginBottom: Theme.hp * 0.02,
    fontFamily: "Avenir-Light",
    textAlign: "center",
  },
  description: {
    color: "#232323",
    fontFamily: "Georgia-Bold",
    fontSize: 17,
    padding: 3,
    letterSpacing: 0.2,
    lineHeight: 30,
    marginLeft: Theme.wp * 0.03,
    marginRight: Theme.wp * 0.05,
    marginTop: Theme.hp * 0.02,
  },
});
