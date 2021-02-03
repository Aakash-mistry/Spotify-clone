import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Gradient from 'react-native-linear-gradient'

const AppLayout: React.FC = ({ children }) => {
     return (
          <ScrollView style={{backgroundColor: 'rgba()'}}>
               <Gradient start={{ x: 0.1, y: -0.1 }} end={{ x: 1.0, y: 0 }} colors={[ '#1DB954', '#181818', '#1c1c1c' ]}>
                    <View style={styles.AppLayout}>
                         {children}
                    </View>
               </Gradient>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     AppLayout: {
          display: 'flex',
          padding: 10,
     }
})

export default AppLayout
