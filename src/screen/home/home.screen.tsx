import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StatusBar, View, } from 'react-native'
import { AppLayout, MusicCard, Title } from '../../component'

const HomeScreen: React.FC = () => {
     const navigation = useNavigation()
     return (
          <AppLayout>
               <StatusBar barStyle="dark-content" backgroundColor="#191414" />
               <ScrollView>
                    <Title iconName="settings" iconColor="white" iconSize={25} value="Recently played" />
                    <View style={{ marginTop: 30 }}>
                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                              <MusicCard image="https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" musicName="Martin gerrix 2021" />
                              <MusicCard image="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" musicName="Soft playings" />
                              <MusicCard image="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" musicName="PSY music" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-songs-1000" />
                         </ScrollView>
                    </View>

                    <View style={{ marginTop: 30 }}>
                         <Title value="Popular and trending" />
                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                   <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-songs-1000" />
                                   <MusicCard image="https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" musicName="Martin gerrix 2021" />
                                   <MusicCard image="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" musicName="PSY music" />
                                   <MusicCard image="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" musicName="Soft playings" />
                              </ScrollView>
                         </ScrollView>
                    </View>

                    <View style={{ marginTop: 30 }}>
                         <Title value="Recommended for you" />
                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                         </ScrollView>
                    </View>

                    <View style={{ marginTop: 30 }}>
                         <Title value="Made for you" />
                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                              <MusicCard image="https://www.udiscovermusic.com/wp-content/uploads/2017/06/Best-Pop-albums-featured-image-1000.jpg" musicName="Best-Pop-albums-featured-image-1000" />
                         </ScrollView>
                    </View>
               </ScrollView>
          </AppLayout>
     )
}

export default HomeScreen
