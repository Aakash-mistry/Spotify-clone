import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FeathersIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

interface TitleProps {
     value: string
     iconName?: string
     iconSize?: number
     iconColor?: string
}

const TitleComponent: React.FC<TitleProps> = (props) => {
     const Nav = useNavigation()
     const { iconName, value, iconSize, iconColor } = props
     return (
          <>
               <View style={styles.titleBox}>
                    <Text style={styles.text}>
                         {value}
                    </Text>
                    {/* <Settting /> */}
                    {iconName && (
                         <View style={styles.iconBox} onTouchEnd={() => Nav.navigate('Settings')}>
                              <FeathersIcon name={iconName} size={iconSize} color={iconColor} />
                         </View>
                    )}
               </View>

          </>
     )
}

const styles = StyleSheet.create({
     titleBox: {
          backgroundColor: 'rgba(0,0,0,0)',
          flexDirection: 'row',
          paddingTop: 20,
          padding: 10
     },
     text: {
          color: '#fff',
          flex: 15,
          fontSize: 25,
     },
     iconBox: {
          flex: 1,
          textAlign: 'right',
          width: '100%'
     }
})

export default TitleComponent
