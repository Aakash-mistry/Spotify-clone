import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

interface MusicProps {
     image: string,
     musicName: string
}

const MusicCardComponent: React.FC<MusicProps> = ({ image, musicName }) => {
     const Nav = useNavigation()
     return (
          <View style={{ borderRadius: 10, padding: 5 }}>
               <Image style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} source={{ uri: image }} />
               <Text style={[ styles.albumName, { textAlign: 'center' } ]} numberOfLines={2} onPress={() => Nav.navigate('Music')}>
                    {musicName}
               </Text>
          </View>
     )
}

const styles = StyleSheet.create({
     albumName: {
          color: '#b3b3b3',
          fontSize: 14,
          width: 150,
          flexWrap: 'nowrap',
     }
})

export default MusicCardComponent
