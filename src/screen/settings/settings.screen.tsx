import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppLayout, ProfileCard, SettingTitle, Accessibility, AccessibilitySlider } from '../../component'

const SettingScreen: React.FC = (): JSX.Element => {
     const Nav = useNavigation()
     return (
          <AppLayout>
               <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, }}>Account settings</Text>
                    <TouchableOpacity style={{ marginTop: 20, marginBottom: 20 }}>
                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Go Premium</Text>
                    </TouchableOpacity>
               </View>
               <View>
                    <ProfileCard />
               </View>
               <SettingTitle>Data saver</SettingTitle>
               <View>
                    <Accessibility title="Data saver" checkBox={false} details="Sets your music quality to low (equivalent to 24 kbit/s) and disables artist canvases" />
                    <Accessibility title="Audio-only podcasts" checkBox={false} details="Saves only the audio when downloading video podcasrs" />
               </View>
               <SettingTitle>Account</SettingTitle>
               <TouchableOpacity onPress={() => Nav.navigate('Profile')}>
                    <Accessibility title="Account" details="jhondoe@mail.com" checkBox={true} />
               </TouchableOpacity>
               <SettingTitle>Playback</SettingTitle>
               <AccessibilitySlider />
               <Accessibility title="Gapless" details="Allows gapless playback" checkBox={true} />
               <Accessibility title="Automix" details="Allows smooth transitions between songs in a playlists" checkBox={true} />
               <Accessibility title="Allow explicit content" details="Turn on to play explicit content  is labeled with 'E' tag" checkBox={true} />
               <Accessibility title="Equilizer" details="Turn on or off your inbuilt equilizer" checkBox={true} />
               <Accessibility title="Autoplay" details="Autoplay songs after completing a song" checkBox={false} />
               <SettingTitle>About</SettingTitle>
               <Accessibility title="Version" details="1.0" />
               <Accessibility title="Terms and condition" details="All stuff you need to know" />
               <Accessibility title="Privacy policy" details="Important for both of us" />
               <SettingTitle>Other</SettingTitle>
               <Accessibility title="Logout" details="you are Logged in a Jhon doe" />
          </AppLayout>
     )
}

export default SettingScreen
