import Slider from '@react-native-community/slider'
import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import MAIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const MusicScreen: React.FC = () => {
     const [ play, pause ] = useState(false)
     return (
          <View style={{ padding: 10 }}>
               <View style={{ top: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 300, height: 300, borderRadius: 10, resizeMode: 'cover' }} source={{ uri: 'https://media.pitchfork.com/photos/5deea0f229131e0008fba7cb/2:1/w_2560%2Cc_limit/2019_Albums_main-wide.jpg' }} />
               </View>
               <View style={{ top: 80, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "gray", textAlign: 'center' }}>
                         Albums of 2018 - saleana gomez, DJ khalid - 2018
                    </Text>
               </View>
               <View style={{ top: 150 }}>
                    <Slider value={25} minimumValue={0} maximumValue={100} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                         <Text style={{ textAlign: 'left' }}>7:32</Text>
                         <Text style={{ textAlign: 'right' }}>23:40</Text>
                    </View>
               </View>
               <View style={{ top: 250, flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <View>
                         <MAIcon size={30} color="gray" name="skip-backward-outline" />
                    </View>
                    <View>
                         {play ? (
                              <MAIcon size={40} color="gray" onPress={() => pause(false)} name="pause-circle-outline" />
                         ) : (
                                   <MAIcon size={40} color="gray" onPress={() => pause(true)} name="play-circle-outline" />
                              )}
                    </View>
                    <View>
                         <MAIcon size={30} color="gray" name="skip-forward-outline" />
                    </View>
               </View>
          </View>
     )
}

export default MusicScreen
