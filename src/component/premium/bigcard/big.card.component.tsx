import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Gradient from 'react-native-linear-gradient'

interface BigCarcProps {
     title: string
     plan: string
     details: string
     buttonTitle: string
     conditionText: string
     link?: string
     terms?: string
     planDetails?: string
     color1: string
     color2: string
}

const BigCardComponent: React.FC<BigCarcProps> = ({ title, plan, details, buttonTitle, conditionText, planDetails, color2, color1 }) => {
     return (
          <Gradient start={{ x: 0.1, y: 1 }} end={{ x: 1, y: 0.5 }} colors={[ `${color1}`, `${color2}` ]} style={{ marginTop: 20 }}>
               <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                         <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={{ fontSize: 20 }}>
                                   {title}
                              </Text>
                         </View>
                         <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', }}>
                              <Text style={{ textTransform: 'uppercase', fontSize: 20 }}>
                                   {plan}
                              </Text>
                              <Text style={{ fontSize: 12, color: 'gray', textTransform: 'uppercase' }}>
                                   {planDetails}
                              </Text>
                         </View>
                    </View>
                    <View style={{ marginTop: 15, marginBottom: 15 }}>
                         <Text style={{ fontSize: 18, color: 'gray', textAlign: 'center' }}>
                              {details}
                         </Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: 15, marginBottom: 15 }}>
                         <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5 }}>
                              <Text style={{ fontSize: 20 }}>{buttonTitle}</Text>
                         </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'gray', textAlign: 'center' }}>{conditionText}</Text>
               </View>
          </Gradient>
     )
}

export default BigCardComponent
