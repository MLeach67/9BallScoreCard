import { Pressable, StyleSheet, Text, TextInput, View  } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";

const Player2 = () => {
    const skillLevels = {
        1: '14',
        2: '19',
        3: '25',
        4: '31',
        5: '38',
        6: '46',
        7: '55',
        8: '65',
        9: '75'
        };

  const router = useRouter();
  const params = useLocalSearchParams();
  const { p2Name, p2Skill, p2Goal, p2Score, p2Def, p2Timeout } = params;
  const [P2Name, setP2Name] = useState(p2Name);
  const [P2Skill, setP2Skill] = useState(p2Skill);
  const [P2Goal, setP2Goal] = useState(p2Goal);
  const [P2Score, setP2Score] = useState(p2Score);
  const [P2Def, setP2Def] = useState(p2Def);
  const [P2Timeout, setP2Timeout] = useState(p2Timeout);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        let errors = {};
        if (!/^[1-9]$/.test(P2Skill)) errors.skill = '1-9';
        if (!/^(?:[1-9]|[1-9][0-9])$/.test(P2Goal)) errors.goal = '1-99';
        if (!/^(?:[0-9]|[1-9][0-9])$/.test(P2Score)) errors.score = '0-99';
        if (!/^(?:[0-9]|[1-9][0-9])$/.test(P2Def)) errors.def = '0-99';
        if (!/^[0-9]$/.test(P2Timeout)) errors.timeout = '0-9';
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

  const handleUpdate = () => {
      if (isFormValid) {
          router.dismissTo({
              pathname: '/',
              params: {
                  P2Name: P2Name,
                  P2Skill: P2Skill,
                  P2Goal: P2Goal,
                  P2Score: P2Score,
                  P2Def: P2Def,
                  P2Timeout: P2Timeout,
              },
          });
      }
  };

  useEffect(() => {
      validateForm();
    }, [P2Goal, P2Score, P2Def, P2Timeout]);

  useEffect(() => {
      if (P2Skill) {
          validateForm();
          let skill = parseInt(P2Skill);
          let score = parseInt(P2Score);
          setP2Goal(skillLevels[skill]);
          if (score === 0 ) {
            (skill < 4) ? setP2Timeout('2') : setP2Timeout('1');
          }
          }
    }, [P2Skill]);


return (

<View style={styles.main}>
    <View style={styles.col1}>
        <View style={styles.row}>
            <Text style={[styles.textInput, styles.text]}>PlayerName:</Text>
        </View>

        <View style={styles.row}>
            <Text style={[styles.textInput, styles.text]}>PlayerSkill:</Text>
        </View>

        <View style={styles.row}>
            <Text style={[styles.textInput, styles.text]}>PlayerGoal:</Text>
        </View>

        <View style={styles.row}>
            <Text style={[styles.textInput, styles.text]}>PlayerScore:</Text>
        </View>

        <View style={styles.row}>
            <Text style={[styles.textInput, styles.text]}>PlayerDef:</Text>
        </View>

        <View style={styles.row}>
            <Text style={[styles.textInput, styles.text]}>PlayerTimeouts:</Text>
        </View>
        <View style={styles.row}>
            <Pressable
                style={styles.row}
                onPress={handleUpdate}
                >
                <Text style={[styles.textInput, styles.text]}>Apply</Text>
            </Pressable>
        </View>
    </View>
    <View style={styles.col2}>
        <View style={styles.row}>
            <TextInput
              style={styles.textInput}
              placeholder="Player Name"
              value={P2Name}
              onChangeText={setP2Name}
            />
        </View>
        <View style={styles.row}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Skill"
              value={P2Skill}
              onChangeText={setP2Skill}
            />
        </View>
        <View style={styles.row}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Goal"
              value={P2Goal}
              onChangeText={setP2Goal}
            />
        </View>
        <View style={styles.row}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Score"
              value={P2Score}
              onChangeText={setP2Score}
            />
        </View>

        <View style={styles.row}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Safeties"
              value={P2Def}
              onChangeText={setP2Def}
            />
        </View>

        <View style={styles.row}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Timeouts"
                value={P2Timeout}
                onChangeText={setP2Timeout}
              />
        </View>

        <View style={styles.row}></View>

    </View>
    <View style={styles.col3}>
        <View style={styles.row}></View>

        <View style={styles.row}>
            <Text style={styles.error}>{errors.skill}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.error}>{errors.goal}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.error}>{errors.score}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.error}>{errors.def}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.error}>{errors.timeout}</Text>
        </View>

        <View style={styles.row}></View>

    </View>

    <View style={styles.row}>

    </View>
</View>
  );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        //padding: 4,
        flexDirection: 'row',
        backgroundColor: '#003594BF',
        //justifyContent: 'center',
        //alignItems: 'space-between',
        //backgroundColor: 'gray'
        },
    col1: {
        flex: 3,
        padding: 4,
        flexDirection: 'column',
        //backgroundColor: '#003594BF',
        //justifyContent: 'center',
        //alignItems: 'space-between',
        //backgroundColor: 'blue'
        },
    col2: {
        flex: 3,
        padding: 4,
        flexDirection: 'column',
        //backgroundColor: '#003594BF',
        //justifyContent: 'center',
        //alignItems: 'space-between',
        //backgroundColor: 'teal',
        },
    col3: {
        flex: 1,
        padding: 4,
        flexDirection: 'column',
        //backgroundColor: '#003594BF',
        //justifyContent: 'center',
        //alignItems: 'space-between',
        //backgroundColor: 'blue',
        },
    row: {
        flex: 1,
        //padding: 2,
        flexDirection: 'row',
        //justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        //padding: 8,
        //backgroundColor: 'lightblue',
        },
    text: {
        flex: 1,
        backgroundColor: 'skyblue',
        //height: 40,
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
    });


export default Player2;