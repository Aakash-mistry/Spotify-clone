import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ProfileCard: React.FC = () => {
     const Nav = useNavigation()
     return (
          <>
               <View style={styles.root}>
                    <Image style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50, flex: 2 }} testID={'avatar'} source={{ uri: "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" }} />
                    <View style={{ flex: 8, marginLeft: 10, justifyContent: 'center' }}>
                         <Text style={{ fontSize: 18, }}>
                              Jhon doe
                         </Text>
                         <Text onPress={() => Nav.navigate('Profile')} style={{ fontSize: 16, color: 'gray' }}>
                              View profile
                         </Text>
                    </View>
               </View>
          </>
     )
}

const styles = StyleSheet.create({
     root: { flexDirection: 'row', marginTop: 10 }
})

export default ProfileCard
