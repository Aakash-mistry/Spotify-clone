import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

interface LibraryCardProps {
     cardImage: string
     title: string
     value: string
}

const CardComponent: React.FC<LibraryCardProps> = ({ cardImage, title, value }) => {
     return (
          <View style={styles.root}>
               <View style={{ flex: 3 }}>
                    <Image style={{ height: 75, width: 75, resizeMode: 'cover' }} source={{ uri: cardImage }} />
               </View>
               <View style={{ flex: 10, }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, justifyContent: 'center', alignItems: 'center', top: 0 }}>
                         {title}
                    </Text>
                    <Text style={{ color: 'gray' }}>
                         {value} songs
                    </Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     root: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 8,
     },
     saveCard: {
          borderWidth: 1
     }

})

export default CardComponent
