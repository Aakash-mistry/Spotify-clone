import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TabUI: React.FC = () => {
     return (
          <>
               <View style={styles.contentBox}>
                    <Text style={[ styles.content, styles.active ]}>
                         PlayList
                    </Text>
               </View>
               <View style={styles.contentBox}>
                    <Text style={styles.content}>
                         Artists
                         </Text>
               </View>
               <View style={styles.contentBox}>
                    <Text style={styles.content}>
                         Albums
                    </Text>
               </View>
          </>
     )
}

const styles = StyleSheet.create({

     content: {
          fontSize: 18
     },
     contentBox: {
          flex: 4,
          padding: 5,
          marginTop: 20,
          marginBottom: 20,
          alignItems: 'center'
     },
     active: {
          borderWidth: 2, borderBottomColor: '#1DB954', borderTopColor: 'rgba(0,0,0,0)', borderLeftColor: 'rgba(0,0,0,0)', borderRightColor: 'rgba(0,0,0,0)'
     }
})

export default TabUI
