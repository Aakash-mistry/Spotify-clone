import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const SearchComponent: React.FC = () => {
     return (
          <TouchableOpacity style={{ marginTop: 50, marginBottom: 15, padding: 10, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,1)', borderRadius: 10 }}>

               <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Icon name="search" color="#fff" size={20} />
               </View>
               <View style={{ flex: 10 }}>
                    <Text style={{ color: '#fff', marginLeft: 20 }}>
                         Artist, music and podcasts
                    </Text>
               </View>
          </TouchableOpacity>
     )
}

export default SearchComponent
