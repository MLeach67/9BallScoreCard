import { Pressable, ScrollView, StyleSheet, Text, TextInput, View  } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";

const Player1 = () => {
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
  const { p1Name, p1Skill, p1Goal, p1Score, p1Def, p1Timeout } = params;
  const [P1Name, setP1Name] = useState(p1Name);
  const [P1Skill, setP1Skill] = useState(p1Skill);
  const [P1Goal, setP1Goal] = useState(p1Goal);
  const [P1Score, setP1Score] = useState(p1Score);
  const [P1Def, setP1Def] = useState(p1Def);
  const [P1Timeout, setP1Timeout] = useState(p1Timeout);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        let errors = {};
        if (!/^[1-9]$/.test(P1Skill)) errors.skill = '1-9';
        if (!/^(?:[1-9]|[1-9][0-9])$/.test(P1Goal)) errors.goal = '1-99';
        if (!/^(?:[0-9]|[1-9][0-9])$/.test(P1Score)) errors.score = '0-99';
        if (!/^(?:[0-9]|[1-9][0-9])$/.test(P1Def)) errors.def = '0-99';
        if (!/^[0-9]$/.test(P1Timeout)) errors.timeout = '0-9';
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

  const handleUpdate = () => {
      if (isFormValid) {
          router.dismissTo({
              pathname: '/',
              params: {
                  P1Name: P1Name,
                  P1Skill: P1Skill,
                  P1Goal: P1Goal,
                  P1Score: P1Score,
                  P1Def: P1Def,
                  P1Timeout: P1Timeout,
              },
          });
      }
  };

  useEffect(() => {
      validateForm();
    }, [P1Goal, P1Score, P1Def, P1Timeout]);

  useEffect(() => {
      if (P1Skill) {
          validateForm();
          let skill = parseInt(P1Skill);
          let score = parseInt(P1Score);
          setP1Goal(skillLevels[skill]);
          if (score === 0 ) {
            (skill < 4) ? setP1Timeout('2') : setP1Timeout('1');
          }
          }
    }, [P1Skill]);


return (
<View style={styles.main}>
    <View style={styles.player}>
        <ScrollView
        style={styles.scrollview}
        automaticallyAdjustKeyboardInsets={true}
        >
            <View style={styles.row}>
                <Text style={[styles.textInput, styles.text]}>PlayerName:</Text>
                <View style={styles.row}>
                    <TextInput
                      style={styles.textInput}
                      disableFullscreenUI={true}
                      placeholder="Player Name"
                      value={P1Name}
                      onChangeText={setP1Name}
                    />
                </View>
                <View style={styles.row}></View>
            </View>

            <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={[styles.textInput, styles.text]}>PlayerSkill:</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput
                          style={styles.textInput}
                          disableFullscreenUI={true}
                          keyboardType="numeric"
                          placeholder="Skill"
                          value={P1Skill}
                          onChangeText={setP1Skill}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.error}>{errors.skill}</Text>
                    </View>
            </View>
            <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={[styles.textInput, styles.text]}>PlayerGoal:</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput
                          style={styles.textInput}
                          disableFullscreenUI={true}
                          keyboardType="numeric"
                          placeholder="Goal"
                          value={P1Goal}
                          onChangeText={setP1Goal}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.error}>{errors.goal}</Text>
                    </View>
            </View>

            <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={[styles.textInput, styles.text]}>PlayerScore:</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput
                          style={styles.textInput}
                          disableFullscreenUI={true}
                          keyboardType="numeric"
                          placeholder="Score"
                          value={P1Score}
                          onChangeText={setP1Score}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.error}>{errors.score}</Text>
                    </View>
            </View>

            <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={[styles.textInput, styles.text]}>PlayerSafeties:</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput
                          style={styles.textInput}
                          disableFullscreenUI={true}
                          keyboardType="numeric"
                          placeholder="Safeties"
                          value={P1Def}
                          onChangeText={setP1Def}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.error}>{errors.def}</Text>
                    </View>
            </View>

            <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={[styles.textInput, styles.text]}>PlayerTimeouts:</Text>
                    </View>
                    <View style={styles.row}>
                          <TextInput
                            style={styles.textInput}
                            disableFullscreenUI={true}
                            keyboardType="numeric"
                            placeholder="Timeouts"
                            value={P1Timeout}
                            onChangeText={setP1Timeout}
                          />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.error}>{errors.timeout}</Text>
                    </View>
            </View>

            <View style={styles.row}>
                <Pressable style={styles.apply} onPress={handleUpdate}>
                    <Text style={[styles.textInput, styles.text]}>Apply</Text>
                </Pressable>
            <View style={styles.row}></View>
            </View>
        </ScrollView>

    </View>

</View>

  );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#003594BF',
        },
    player: {
        flex: 5,
        backgroundColor: '#003594BF',
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
          alignItems: 'center',
          },
    });


export default Player1;