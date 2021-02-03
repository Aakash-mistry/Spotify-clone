import React, {useState} from 'react';
import {View, Button, Image, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent: React.FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <View style={style.root}>
      <Button
        title="Open bottom modal"
        onPress={() => {
          setModal(true);
        }}
      />

      <Modal
        animationOutTiming={1}
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={modal}
        onBackdropPress={() => setModal(false)}>
        <View style={style.content}>
          <View style={style.contentImage}>
            <Image
              style={{
                height: 100,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 50,
              }}
              source={{
                uri:
                  'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
              }}
            />
          </View>
          <Text style={style.contentTitle}>Apple, Inc</Text>
          <Text style={style.contentPrice}>$99.99</Text>
          <Text style={style.contentPoint}>+100 points</Text>
          <Text style={style.contentDate}>29 November 2020, 4:45PM</Text>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    padding: 10,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 22,
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 30,
  },
  contentImage: {
    marginTop: -70,
  },
  contentPrice: {
    fontSize: 45,
  },
  contentPoint: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  contentDate: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 30,
    marginBottom: 50,
  },
});

export default ModalComponent;
