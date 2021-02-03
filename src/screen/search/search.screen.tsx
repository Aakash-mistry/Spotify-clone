import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppLayout, SearchCard, InputUI, Title } from '../../component'

const SearchScreen: React.FC = () => {
     return (
          <AppLayout>
               <View style={styles.root}>
                    <Title value="Search" />
                    <InputUI />
               </View>
               <Title value="Your top genres" />
               <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', flex: 12 }}>
                    <SearchCard name="Pop" image='https://cdn.guidingtech.com/media/assets/2019/11/_1200x630_crop_center-center_82_none/spotify-web-player-black-screen-issue-fi.jpg' />
                    <SearchCard name="Rock" image='https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png' />
               </View>

               <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', flex: 12 }}>
                    <SearchCard name="Trance" image='https://cdn.guidingtech.com/media/assets/2019/11/_1200x630_crop_center-center_82_none/spotify-web-player-black-screen-issue-fi.jpg' />
                    <SearchCard name="Dub steps" image='https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png' />
               </View>

               <Title value="Browse all" />

               <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', flex: 12 }}>
                    <SearchCard name="Hindi" image='https://cdn.guidingtech.com/media/assets/2019/11/_1200x630_crop_center-center_82_none/spotify-web-player-black-screen-issue-fi.jpg' />
                    <SearchCard name="Telgu" image='https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png' />
               </View>

               <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', flex: 12 }}>
                    <SearchCard name="English" image='https://cdn.guidingtech.com/media/assets/2019/11/_1200x630_crop_center-center_82_none/spotify-web-player-black-screen-issue-fi.jpg' />
                    <SearchCard name="Bollywood" image='https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png' />
               </View>

               <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', flex: 12 }}>
                    <SearchCard name="Hollywood" image='https://cdn.guidingtech.com/media/assets/2019/11/_1200x630_crop_center-center_82_none/spotify-web-player-black-screen-issue-fi.jpg' />
                    <SearchCard name="Bollywood" image='https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png' />
               </View>

               <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', flex: 12 }}>
                    <SearchCard name="Pop" image='https://cdn.guidingtech.com/media/assets/2019/11/_1200x630_crop_center-center_82_none/spotify-web-player-black-screen-issue-fi.jpg' />
                    <SearchCard name="Bollywood" image='https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png' />
               </View>
          </AppLayout>
     )
}

const styles = StyleSheet.create({
     root: {
          display: 'flex',
     }
})

export default SearchScreen
