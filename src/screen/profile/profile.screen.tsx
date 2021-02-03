import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { AppLayout } from '../../component'

const ProfileScreen: React.FC = () => {
     return (
          <AppLayout>
               <Text>
                    Hello this is profile screen
               </Text>
          </AppLayout>
     )
}

const styles = StyleSheet.create({
     root: {
          display: 'flex',
          flexDirection: 'row',
          top: '100%',
          justifyContent: 'center',
          alignItems: 'center'
     }
})

export default ProfileScreen
