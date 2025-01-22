import { Pressable, ScrollView, StyleSheet, Text, TextInput, View  } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";

const Dead = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { dead } = params;
  const [Dead, setDead] = useState(dead);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


    const validateForm = () => {
        let errors = {};
        if (!/^(?:[0-9]|[1-9][0-9])$/.test(Dead)) errors.dead = '0-99';
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

  const handleUpdate = () => {
      if (isFormValid) {
          router.dismissTo({
              pathname: '/',
              params: {
                  Dead: Dead
              },
          });
      }
  };

  useEffect(() => {
      validateForm();
    }, [Dead]);

  return (
<View style={styles.main}>
    <View style={styles.dead}>
        <ScrollView style={styles.scrollview} automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.row}>
                <View style={styles.row}>
                    <Text style={[styles.textInput, styles.text]}>Dead:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                      style={styles.textInput}
                      disableFullscreenUI={true}
                      keyboardType="numeric"
                      placeholder="Dead"
                      value={Dead}
                      onChangeText={setDead}
                    />
                </View>

                <View style={styles.row}>
                    <Text style={styles.error}>{errors.dead}</Text>
                </View>
            </View>
          </ScrollView>
      </View>
            <View style={styles.row}>
                <Pressable style={styles.apply} onPress={handleUpdate}>
                    <Text style={[styles.textInput, styles.text]}>Apply</Text>
                </Pressable>
                 <View style={styles.row}></View>
            </View>
  </View>
  )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#003594BF',
        },
    dead: {
        flex: 5,
        },
    scrollview: {
        flex: 1
        },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        padding: 2
        },
    text: {
        flex: 1,
        backgroundColor: 'skyblue',
        },
    textInput: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        fontSize: 18,
        height: 40,
        width: 300
        },
    error: {
          fontWeight: 500,
          fontSize: 28,
      },
      apply: {
          flex: 2,
          flexDirection: 'row',
          alignItems: 'flex-end',
          },
    });

export default Dead;