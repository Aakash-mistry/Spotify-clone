import React from 'react'
import { Text, View } from 'react-native'
import Gradient from 'react-native-linear-gradient'

interface CardProps {
     name: string,
     color1: string,
     color2: string,
     content1: string,
     content2: string,
     link?: string
}

const CardComponent: React.FC<CardProps> = ({ name, color1, color2, content1, content2 }) => {
     return (
          <View style={{ margin: 10, }}>
               <Gradient start={{ x: 0.1, y: 0 }} end={{ x: 1.0, y: 0.8 }} colors={[ `${color1}`, `${color2}` ]}>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, width: 250, padding: 10, borderRadius: 10 }}>
                         <Text style={{ fontSize: 20, textAlign: 'left' }}>
                              {name}
                         </Text>
                         <View style={{ display: 'flex', flexDirection: 'row' }}>
                              <View style={{ flex: 5, }}>
                                   <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                        {content1}
                                   </Text>
                              </View>
                              <View style={{ flex: 5 }}>
                                   <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                        {content2}
                                   </Text>
                              </View>
                         </View>
                    </View>
               </Gradient>
          </View>
     )
}

export default CardComponent
