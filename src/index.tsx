import React from 'react'
import { Home, Search, Library, Profile, Settings, Premium, Music } from './screen'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const App: React.FC = () => {
     return (
          <NavigationContainer>
               <Tab.Navigator activeColor="white"
                    backBehavior="initialRoute"
                    sceneAnimationEnabled={true}
                    inactiveColor="#1e1e1e" barStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Tab.Screen name="Home" options={{
                         tabBarColor: '#1e1e1e',
                         tabBarLabel: 'Home',
                         tabBarIcon: () => (
                              <IonicIcon name="home" size={25} color="gray" />
                         )
                    }}>
                         {() => (
                              <Stack.Navigator>
                                   <Stack.Screen
                                        name="Home"
                                        options={{ headerShown: false, animationEnabled: true }}
                                        component={Home}
                                   />
                                   <Stack.Screen
                                        name="Settings"
                                        options={{ headerShown: true, headerBackTitle: 'Back', headerTitleAlign: 'center', safeAreaInsets: { top: 5, bottom: 4, left: 4, right: 5 } }}
                                        component={Settings}
                                   />
                                   <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: 'Jhon Doe' }} />
                                   <Stack.Screen name="Music" component={Music} options={{ headerTitle: 'Song name', headerTitleAlign: 'center' }} />
                              </Stack.Navigator>
                         )}
                    </Tab.Screen>

                    <Tab.Screen name="Search" options={{
                         tabBarLabel: 'Search',
                         tabBarColor: '#1e1e1e',
                         tabBarIcon: () => (
                              <IonicIcon name="search" color="gray" size={25} />
                         )
                    }} component={Search} />

                    <Tab.Screen name="Library" options={{
                         tabBarLabel: 'Library',
                         tabBarColor: '#1e1e1e',
                         tabBarIcon: () => (
                              <IonicIcon name="library-outline" color="gray" size={25} />
                         )
                    }} component={Library} />


                    <Tab.Screen name="Spotify" options={{
                         tabBarLabel: 'Spotify',
                         tabBarColor: '#1C8D73',
                         tabBarIcon: () => (
                              <FAIcon name="spotify" color="#fff" size={25} />
                         )
                    }} component={Premium} />

               </Tab.Navigator>
               <SafeAreaView />
          </NavigationContainer>
     )
}
export default App
