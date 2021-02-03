import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView, } from 'react-native-gesture-handler'
import Gradient from 'react-native-linear-gradient'
import { BigCard, PremiumCard } from '../../component'

const PremiumComponent: React.FC = () => {
     return (
          <Gradient start={{ x: 0.1, y: -0.1 }} end={{ x: 1.0, y: 0 }} colors={[ '#333', 'white' ]}>
               <ScrollView>
                    <View style={{ padding: 10 }}>
                         <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50., marginBottom: 50 }}>
                              <Text style={{ fontSize: 35, padding: 10, textAlign: 'center' }}>
                                   Try premium free for 1 month
                         </Text>
                              <TouchableOpacity>
                                   <Text>
                                        Go premium
                              </Text>
                              </TouchableOpacity>
                         </View>
                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                              <PremiumCard name="Basic" color1="gray" color2="indigo" content1="contain ads" content2="ad free music" link="google" />
                              <PremiumCard name="Gold" color1="yellow" color2="green" content1="Listen alone" content2="Group session" />
                              <PremiumCard name="Platanium" color1="purple" color2="indigo" content1="Streming only" content2="Download songs" />
                         </ScrollView>
                         <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                              <TouchableOpacity>
                                   <Text style={{ fontSize: 20 }}>
                                        Get premium
                              </Text>
                              </TouchableOpacity>
                         </View>
                         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10 }}>
                              <Text style={{ fontSize: 20, flex: 5, fontWeight: 'bold' }}>
                                   Spotify free
                         </Text>
                              <Text style={{ fontSize: 12, flex: 2, textTransform: 'uppercase', color: 'gray' }}>
                                   current plan
                         </Text>
                         </View>
                         <View>
                              <BigCard color1="blue" color2="gray" title="Mini" planDetails="for 1 month" plan="Free" buttonTitle="View plans" conditionText="terms and condition apply" details="orem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laboriosam." />
                              <BigCard color1="gray" color2="teal" title="Premium Individual" planDetails="Free" plan="Free 1 month" buttonTitle="Try 1 month free" conditionText="only Rs.119 month after. offer only for users whi are new to Premium. Terms apply" details="orem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laboriosam." />
                         </View>
                    </View>
               </ScrollView>
          </Gradient>
     )
}


export default PremiumComponent
