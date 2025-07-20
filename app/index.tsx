import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Linking, Pressable } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderHeightContext } from '@react-navigation/elements';
import { useFonts } from 'expo-font';
import { ImageBackground } from 'expo-image';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons/faFlagCheckered'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons/faHorseHead'
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
// import * as Linking from 'expo-linking';
import { Href, Link } from 'expo-router';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.center}>
        <ImageBackground style={[styles.center, {height:600}]} 
        source={require("../assets/images/930parked.jpg")} >
          <View style={styles.header}>
            <Pressable onPress={() => Linking.openURL('http://google.com')}>
              <FontAwesomeIcon icon={faBars} size={25}
              style={{marginTop: "auto",  color: "white", marginLeft: 30, marginBottom: 15}}
              />
            </Pressable>
            <Text
              style={[styles.whiteText,
              {marginTop: "auto", paddingBottom: 10, textAlign: "center"}]}>
                Scooch Auto Magazine
            </Text>
            <Pressable onPress={() => Linking.openURL('https://growagarden.fandom.com/wiki/Grow_a_Garden_Wiki')}>
              <FontAwesomeIcon icon={faUser} size={25}
              style={{marginTop: "auto",  color: "white", marginRight: 30, marginBottom: 15}}
              />
            </Pressable>
          </View>
          <LinearGradient colors={['#2D2D2D', 'transparent']}
            style={[styles.gradient]}  
          >
            <Text 
              style={[styles.whiteText,
              {marginBottom: "auto", fontSize: 8}]}>
                JDM -  KDM - EXOTIC - EURO - CLASSIC - MUSCLE - SPORTS
            </Text>
          </LinearGradient>
          <View style={{flex:1, flexDirection: "row", justifyContent: "space-between", width: "90%"}}>
            <View style={{flex: 1, marginRight: 'auto',  flexGrow: 1, paddingLeft: 10, marginLeft: 10, paddingRight:"10%", justifyContent: "space-between", paddingTop: 25}}>
              <Text style={[styles.whiteText, {fontSize: 10, textAlign: "center", outline: 'none', borderColor: 'white', borderWidth: 1, borderRadius: 20, backgroundColor: "#1E1E1E90", lineHeight: 15}]}>Exclusive interview with legendary tuner Billy Bob</Text>
              <Text style={[styles.whiteText, {fontSize: 13, textAlign: "left", paddingBottom:40}]}>It was a car with an abundance of power for its time, holding the title of fastest production car in Germany for a short period. Around the world, it’s infamous for its nickname: The Widowmaker.</Text>
            </View>
            <View style={{flex: 1, marginLeft: 'auto',  flexGrow: 1, paddingRight: 10, marginRight: 10, paddingLeft:"10%", justifyContent: "space-between", paddingBottom: 40, paddingTop: 0
            }}>
              <View style={styles.redDot}>
                <Text style={[styles.whiteText, {fontSize: 25, textAlign: "center"}]}>15</Text>
                <Text style={[styles.whiteText, {fontSize: 15, width: 30, textAlign: "center", lineHeight: 15}]}>July 2025</Text>
              </View>
              <Text style={[styles.whiteText, {fontSize: 10, textAlign: "right", lineHeight: 15}]}>Photography by Bowling Ball
{"\n"} Edited by Billy’s cousin</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.center,{marginVertical: 20}]}>
        <Text style={[styles.titleText, {paddingVertical: 8, marginVertical:20}]}>Porsche 930 Turbo</Text>
        <View style={styles.carStats}> {/*Car Stats*/}
          <View style={styles.statCol}> {/*Top Speed*/}
            <View style={styles.statRow}>
              <FontAwesomeIcon icon={faFlagCheckered} size={20}
              style={styles.blackIcon}
              />
              <Text style={styles.statCategory}>Top Speed</Text>
            </View>
            <Text style={styles.statFigure}>162 mph</Text>
          </View>
          <View style={styles.statCol}> {/*Horsepower*/}
            <View style={styles.statRow}>
              <FontAwesomeIcon icon={faHorseHead} size={20}
              style={styles.blackIcon}
              />
              <Text style={styles.statCategory}>Horsepower</Text>
            </View>
            <Text style={styles.statFigure}>296 hp</Text>
          </View>
          <View style={styles.statCol}> {/*0-60*/}
            <View style={styles.statRow}>
              <FontAwesomeIcon icon={faClock} size={20}
              style={styles.blackIcon}
              />
              <Text style={styles.statCategory}>0-60 mph</Text>
            </View>
            <Text style={styles.statFigure}>4.9 sec</Text>
          </View>
        </View>
        <View style={styles.rowContainer}> {/*Article*/}
          <Text style={[styles.blackPara, {width: "50%"}]}>{"\t"}The 930 was introduced in 1975 as Porsche’s first factory‑built turbocharged 911, debuting at the Paris Motor Show and instantly setting a new benchmark for road‑going performance. Based on the sturdy 911 chassis but endowed with a 3.0 L turbocharged flat‑six making 260 PS, it featured the now‑legendary “whale‑tail” spoiler and wide flared arches to keep its rear from lifting at speed. In 1978 Porsche increased displacement to 3.3 L—raising output to around 300 PS—and refined the suspension and brakes, broadening its appeal beyond hard‑core enthusiasts. Produced through 1989, the 930 Turbo cemented Porsche’s turbo heritage, became an icon of 1980s automotive excess, and paved the way for every subsequent 911 Turbo to carry that legendary badge.</Text>
          <View>
            <Image source={require('../assets/images/930pano.jpg')}
              style={styles.galleryImg} />
            <Image source={require('../assets/images/930black.jpeg')}
              style={styles.galleryImg} />
            {/* <Image source={require('../assets/images/930orange.png')}
              style={styles.galleryImg} /> */}
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  center: {
    // flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2D2D2D",
  },
  gradient: {
    height:50,
    alignItems: 'center',
    // justifyContent: "center",
    marginBottom: "auto",
    width: "100%"
  },
  whiteText: {
    color:"white",
    fontSize:30,
    fontFamily: 'EB Garamond Regular',
    lineHeight: 30
  },
  header: {
    // flex:1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#2D2D2D",
    height: 100,
    width: "100%",
    
  },
  redDot: {
    outline: 'none', 
    borderColor: '#830101', 
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: "100%",
    backgroundColor: "#830101",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  blackPara: {
    color:"black",
    fontSize:20,
    lineHeight:25,
    fontFamily: 'EB Garamond Regular',
  },
  titleText: {
    color:"black",
    fontSize:40,
    fontFamily: 'Montserrat',
    lineHeight: 30
  },
  carStats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10
  },
  statCol: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  blackIcon: {
    color: "black",
    marginRight:2
  },
  statCategory: {
    color:"black",
    fontSize:15,
    fontFamily: 'InterRegular',
    paddingVertical: 0,
    marginLeft:2
  },
  statFigure: {
    color: "black",
    fontSize: 20,
    fontFamily: 'InterBold',
    paddingVertical: 0,
  },
  rowContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal:10,
    marginVertical:25
  },
  galleryImg: {
    height: 200,
    width: 400,
    marginVertical: 10,
    // resizeMode: "contain",
    borderRadius: 25,
  }
})
