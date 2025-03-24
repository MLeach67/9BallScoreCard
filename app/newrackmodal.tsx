import React from 'react';
import { Pressable, Modal, StyleSheet, ScrollView, Text, View } from 'react-native';

  const WinModal = ( props ) => {
  return (
	<Modal
            animationType="slide"
            transparent={true}
            visible={props.winModalVisible}

    >
    <View style={styles.main}>
        <View style={styles.row}>
            <Text style={styles.modalText}>Confirm new rack?</Text>
        </View>

        <View style={styles.row}>
            <Pressable
              style={[styles.button, styles.row]}
                 onPress={props.startNewRack}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>

	        <Pressable
	          style={[styles.button, styles.row]}
	          onPress={props.onClose}>
	          <Text style={styles.textStyle}>No</Text>
	        </Pressable>
        </View>
    </View>

	</Modal>
  );
};


const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: 'white',
      margin: 40,
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      },
	  button: {
        flex: 1,
		borderRadius: 20,
		padding: 20,
		gap: 40,
		backgroundColor: 'lightblue',
	  },
	  textStyle: {
        flex: 1,
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
	  },
	  modalText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 24,
		textAlign: 'center',
	  },
      row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40,
      },
});

export default WinModal;