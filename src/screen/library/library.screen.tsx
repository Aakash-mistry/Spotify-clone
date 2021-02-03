import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppLayout, LibraryCard, SaveCard, Title } from '../../component'
import TabUI from '../../component/ui/tabs'

const LibarayScreen: React.FC = () => {
     return (
          <AppLayout>
               <View style={styles.root}>
                    <View style={{ flex: 5 }}>
                         <Title value="Music" />
                    </View>
                    <View style={{ flex: 5 }}>
                         <Title value="Podcasts" />
                    </View>
               </View>
               <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TabUI />
               </View>
               <LibraryCard cardImage='https://i.pinimg.com/originals/cf/59/b9/cf59b95b507ab3a9736c269e81ddafc7.png' title="Liked songs" value="100" />
               <LibraryCard cardImage='https://i.dailymail.co.uk/i/pix/2015/04/30/11/2829D5E600000578-3062238-image-a-2_1430389116298.jpg' title="English songs" value="5" />
               <LibraryCard cardImage='https://images-na.ssl-images-amazon.com/images/I/51pXno6FlZL.__BG0,0,0,0_FMpng_AC_UL600_SR474,600_.jpg' title="Dummy songs" value="1000" />
               <View>
                    <SaveCard />
               </View>
          </AppLayout>
     )
}

const styles = StyleSheet.create({
     root: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
     },

})

export default LibarayScreen
