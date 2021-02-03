import { transform } from '@babel/core'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

interface SearchCardProps {
     name: string,
     image: string,
     background?: string
}

const SearchCardComponent: React.FC<SearchCardProps> = ({ name, image, background }) => {
     return (
          <View style={styles.cardBox}>
               <Text style={{ flex: 8, textAlign: 'center', fontSize: 18 }}>
                    {name}
               </Text>
               <View style={styles.imageSide && {
                    flex: 3, alignItems: 'center', justifyContent: 'center', transform: [ { rotateY: "25deg" },
                    { rotateZ: "25deg" }, ],
               }}>
                    <Image style={{ width: '100%', resizeMode: 'cover', height: '100%' }} source={{ uri: image }} />
               </View>
          </View>

     )
}

const styles = StyleSheet.create({
     cardBox: {
          overflow: 'hidden',
          flexDirection: 'row',
          padding: 5,
          borderRadius: 5,
          height: 80,
          margin: 5,
          flex: 6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
     },
     imageSide: {
          transform: [ { scaleY: 2 } ]
     }
})

export default SearchCardComponent
