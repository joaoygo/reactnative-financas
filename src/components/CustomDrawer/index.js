import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
 return (
     <DrawerContentScrollView {...props} >
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
            <Image 
            source={require('../../assets/Logo.png')}
            style={{width: 85, height: 85}}
            resizeMode= 'contain'
            />

            <Text style={{color: '#FFF', fontSize: 18, marginTop: 5}}>
                Bem-Vindo
            </Text>
            
            <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold',paddingBottom: 25}}>
                Ygo
            </Text>
        </View>

        <DrawerItemList {...props} />
     </DrawerContentScrollView>
  )
}