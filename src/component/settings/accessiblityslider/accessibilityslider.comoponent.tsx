import React from 'react'
import { View, Text, Slider } from 'react-native'

const AccessWithSlider: React.FC = () => {
     return (
          <View style={{ padding: 10, backgroundColor: 'rgba(0,0,0,0.5)' }}>
               <Text style={{ fontSize: 18 }}>
                    Crossfade
               </Text>
               <Text style={{ fontSize: 14, color: 'gray' }}>
                    Allow you to crossfade between songs
               </Text>
               <View style={{ marginTop: 20 }}>
                    <Slider minimumValue={0} maximumValue={12} minimumTrackTintColor="#1DB954"
                         maximumTrackTintColor="#fffdd0" />
               </View>
          </View>
     )
}

export default AccessWithSlider
