import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TouchableHighlight, Button, Alert } from 'react-native'
import ENIcon from 'react-native-vector-icons/Entypo'

const SaveComponent: React.FC = () => {
     const [ modal, setModal ] = useState(false)
     return (
          <TouchableOpacity>
               <View onTouchMove={() => setModal(true)} style={{ padding: 10, marginTop: 20, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, flexDirection: 'row' }}>
                    <ENIcon name="add-to-list" color="white" size={20} />
                    <Text style={{ fontSize: 18, marginLeft: 20 }} >
                         Save to library
                    </Text>
               </View>
               <Modal animationType="fade" transparent={true} visible={modal}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
                         <View style={{
                              backgroundColor: "white",
                              padding: 20,
                              height: 150,
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84,
                              elevation: 5,
                              width: '75%',
                              borderRadius: 10,
                         }}>
                              <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 50 }}>
                                   Add musics to the playlist
                              </Text>
                              <View style={{ display: 'flex', flexDirection: 'row', left: 145 }}>
                                   <View style={{ margin: 10 }}>
                                        <Button title="cancel" onPress={() => { setModal(false) }} />
                                   </View>
                                   <View style={{ margin: 10 }}>
                                        <Button title="Save" onPress={() => { Alert.alert('saved to the music!', 'Your albums have been saved', [ { text: 'Thank you', onPress: () => setModal(false) } ]) }} />
                                   </View>
                              </View>
                         </View>
                    </View>
               </Modal>
          </TouchableOpacity>

     )
}

export default SaveComponent
