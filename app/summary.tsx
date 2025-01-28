import { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View} from 'react-native';

const Summary = ({navigation, route}) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const {p1Name, p1Skill, p1Goal, p1Score, p1Def, p2Name, p2Skill, p2Goal, p2Score, p2Def, innings, dead, split} = params;

  const navToIndex = () => {
      router.dismissTo({
        pathname: '/',
        });
  };

  useEffect(() => {
      },[split]);

  return (
    <View style={styles.main}>
        <View style={styles.row}>
          <Text style={styles.text}>Players:</Text>
          <Text style={styles.text}>{p1Name}</Text>
          <Text style={styles.text}>{p2Name}</Text>
        </View>

        <View style={styles.row}>
        <Text style={styles.text}>Score:</Text>
        <Text style={styles.text}>{p1Score}</Text>
        <Text style={styles.text}>{p2Score}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Skill:</Text>
          <Text style={styles.text}>{p1Skill}</Text>
          <Text style={styles.text}>{p2Skill}</Text>
        </View>

        <View style={styles.row}>
        <Text style={styles.text}>Goal:</Text>
        <Text style={styles.text}>{p1Goal}</Text>
        <Text style={styles.text}>{p2Goal}</Text>
        </View>

        <View style={styles.row} >
          <Text style={styles.text}>Defense:</Text>
          <Text style={styles.text}>{p1Def}</Text>
          <Text style={styles.text}>{p2Def}</Text>
        </View>

        <View style={styles.row} >
          <Text style={styles.text}>Dead: {dead}</Text>
          <Text style={styles.text}>Split {split}</Text>
          <Text style={styles.text}>Innings: {innings}</Text>
        </View>

        <View style={styles.row}>
        <Pressable
        onPress={navToIndex}
        style={styles.row}
        >
            <Text style={styles.text}>Back</Text>
        </Pressable>
        <View style={styles.row}></View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#003594BF',
        },
    row: {
        flex: 1,
        flexDirection: 'row',
        },
    back: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        //margin: 1,
        //padding: 5,
        //alignItems: 'center',
        },
    text: {
        flex: 1,
        //fontSize: 32,
        backgroundColor: 'skyblue',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        fontSize: 18,
        textAlign: 'center',
        }
    });

export default Summary;