import { Pressable, StyleSheet, Text, TextInput, View  } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";

const Innings = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { innings } = params;
  const [Innings, setInnings] = useState(innings);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


    const validateForm = () => {
        let errors = {};
        if (!/^(?:[0-9]|[1-9][0-9])$/.test(Innings)) errors.innings = '0-99';
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

  const handleUpdate = () => {
      if (isFormValid) {
          router.dismissTo({
              pathname: '/',
              params: {
                  Innings: Innings
              },
          });
      }
  };

  useEffect(() => {
      validateForm();
    }, [Innings]);

  return (
    <View style={styles.main}>
        <View style={styles.col1}>
            <View style={styles.row1}>
                <Text style={[styles.textInput, styles.text]}>Innings:</Text>
            </View>
        <View style={styles.row2}>
            <Pressable
                style={styles.row2}
                onPress={handleUpdate}
                >
                <Text style={[styles.textInput, styles.text]}>Apply</Text>
            </Pressable>
        </View>
        </View>
        <View style={styles.col2}>
            <View style={styles.row1}>
                  <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    placeholder="Innings"
                    value={Innings}
                    onChangeText={setInnings}
                  />
            </View>
        </View>
        <View style={styles.col3}>
          <View style={styles.row1}>
              <Text style={styles.error}>{errors.innings}</Text>
          </View>
        </View>
  </View>
  )
};

const styles = StyleSheet.create({
    main: {
        flex:1,
        flexDirection: 'row',
        padding: 4,
        backgroundColor: '#003594BF',
        },
    col1: {
        flex: 3,
        padding: 4,
        flexDirection: 'column',
        },
    col2: {
        flex: 3,
        padding: 4,
        flexDirection: 'column',
        },
    col3: {
        flex: 1,
        padding: 4,
        flexDirection: 'column',
        },
    row1: {
        flex: 5,
        flexDirection: 'row',
        },
    row2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
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
        width: 300,
        },
    apply: {
        flex:1,
        fontSize: 18,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 10,
        width: 400
        },
    error: {
          fontWeight: 500,
          fontSize: 28,
      },
    });
export default Innings;