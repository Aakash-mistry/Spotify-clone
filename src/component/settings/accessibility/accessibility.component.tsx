import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'

interface AccessibilityProps {
     title: string
     details: string
     checkBox?: boolean
}

const AccessibilityComponent: React.FC<AccessibilityProps> = ({ title, details, checkBox }) => {
     const [ check, setChecked ] = useState(checkBox)
     return (
          <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', marginTop: 10, padding: 10, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5, display: 'flex', flexDirection: 'row' }}>
               <View style={{ flex: 9 }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>
                         {title}
                    </Text>
                    <Text style={{ color: 'gray', fontSize: 14 }}>
                         {details}
                    </Text>
               </View>
               {checkBox && (
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                         <Checkbox status={check ? 'checked' : 'unchecked'} onPress={() => setChecked(!check)} color="#1DB954" />
                    </View>
               )}
          </View>
     )
}

export default AccessibilityComponent
