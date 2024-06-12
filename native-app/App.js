
import {Text, View,Image } from 'react-native';
const logoimg =require("./assets/icon.png")

export default function App() {
  return (
    <View style={{backgroundColor:"black", flex:1 }}>
      <Text style={{color :"tomato", fontSize : 30, fontWeight:"bold"}}>hello!this is apurba</Text>
      <Image source={logoimg} style={{width:100, height:200}}/>
      <Image source={{uri :"https://istockbd.com/collections/macbook-price-in-bd/products/macbook-air-m2-chip-2022-model"}} style={{width:200, height:200 }}/>
      
    </View>
  );
}


