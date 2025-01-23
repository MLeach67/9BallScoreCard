import { useLocalSearchParams , useRouter} from "expo-router";
import { useEffect, useState } from "react";
import { Button, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useKeepAwake } from 'expo-keep-awake';
import { getSplit } from './split';

const Index = () => {
    const router = useRouter();
    const [oneBg, setOneBg] = useState(require('../assets/images/1Ball.png'));
    const [twoBg, setTwoBg] = useState(require('../assets/images/2Ball.png'));
    const [threeBg, setThreeBg] = useState(require('../assets/images/3Ball.png'));
    const [fourBg, setFourBg] = useState(require('../assets/images/4Ball.png'));
    const [fiveBg, setFiveBg] = useState(require('../assets/images/5Ball.png'));
    const [sixBg, setSixBg] = useState(require('../assets/images/6Ball.png'));
    const [sevenBg, setSevenBg] = useState(require('../assets/images/7Ball.png'));
    const [eightBg, setEightBg] = useState(require('../assets/images/8Ball.png'));
    const [nineBg, setNineBg] = useState(require('../assets/images/9Ball.png'));

    const [p1Name, setP1Name] = useState('Player1');
    const [p1Skill, setP1Skill] = useState('1');
    const [p1Goal, setP1Goal] = useState(14);
    const [p1Score, setP1Score] = useState(0);
    const [p1Def, setP1Def] = useState(0);
    const [p1Timeout, setP1Timeout] = useState(2);
	const [p1Active, setP1Active] = useState(true);
    const [p1Balls, setP1Balls] = useState([]);

    const [p2Name, setP2Name] = useState('Player2');
    const [p2Skill, setP2Skill] = useState('1');
    const [p2Goal, setP2Goal] = useState(14);
    const [p2Score, setP2Score] = useState(0);
    const [p2Def, setP2Def] = useState(0);
    const [p2Timeout, setP2Timeout] = useState('2');
	const [p2Active, setP2Active] = useState(false);
    const [p2Balls, setP2Balls] = useState([]);

	const [innings, setInnings] = useState(0);
	const [dead, setDead] = useState(0);
	const [deadList, setDeadList] = useState([]);
    const [inningsLock, setInningsLock] = useState(true);
    const [winLock, setWinLock] = useState(false);

	const [split, setSplit] = useState('');

	const [one, setOne] = useState('idle');
	const [two, setTwo] = useState('idle');
	const [three, setThree] = useState('idle');
	const [four, setFour] = useState('idle');
	const [five, setFive] = useState('idle');
	const [six, setSix] = useState('idle');
	const [seven, setSeven] = useState('idle');
	const [eight, setEight] = useState('idle');
	const [nine, setNine] = useState('idle');
	const ballStateList = [one,two,three,four,five,six,seven,eight];

    const {
        P1Name,
        P1Skill,
        P1Goal,
        P1Score,
        P1Def,
        P1Timeout,
        P2Name,
        P2Skill,
        P2Goal,
        P2Score,
        P2Def,
        P2Timeout,
        Innings,
        Dead
        } = useLocalSearchParams();

    useKeepAwake();

    const navToPlayer1 = () => {
      router.push({
          pathname: '/player1',
          params: {
              p1Name: p1Name,
              p1Skill: p1Skill,
              p1Goal: p1Goal,
              p1Score: p1Score,
              p1Def: p1Def,
              p1Timeout: p1Timeout
          }})
        };

    const navToPlayer2 = () => {
      router.push({
          pathname: '/player2',
          params: {
              p2Name: p2Name,
              p2Skill: p2Skill,
              p2Goal: p2Goal,
              p2Score: p2Score,
              p2Def: p2Def,
              p2Timeout: p2Timeout
          }})
        };

    const navToDead = () => {
      router.push({
          pathname: '/dead',
          params: {
          dead: dead
          }})
    };

    const navToInnings = () => {
      router.push({
          pathname: '/innings',
          params: {
          innings: innings
          }})
    };

    const navToSummary = () => {
    router.push({
      pathname: '/summary',
      params: {
      p1Name: p1Name,
      p1Skill: p1Skill,
      p1Goal: p1Goal,
      p1Score: p1Score,
      p1Def: p1Def,
      p2Name: p2Name,
      p2Skill: p2Skill,
      p2Goal: p2Goal,
      p2Score: p2Score,
      p2Def: p2Def,
      innings: innings,
      dead:  dead,
      split: split
      }
    })
    };

    const navToHelp = () => {
        router.push({
          pathname: '/help',
        })
        };

    const lockUsedBalls = () => {
  	    if (one !== 'idle') setOne('locked');
  	    if (two !== 'idle') setTwo('locked');
  	    if (three !== 'idle') setThree('locked');
  	    if (four !== 'idle') setFour('locked');
  	    if (five !== 'idle') setFive('locked');
  	    if (six !== 'idle') setSix('locked');
  	    if (seven !== 'idle') setSeven('locked');
  	    if (eight !== 'idle') setEight('locked');
    };

    const lockAllBalls = () => {
        setOne('locked');
        setTwo('locked');
        setThree('locked');
        setFour('locked');
        setFive('locked');
        setSix('locked');
        setSeven('locked');
        setEight('locked');
    };

    const toggleP1Active = () => {
        if (inningsLock === false) {
            lockUsedBalls();
            setInnings(innings + 1);
            setInningsLock(true);
            setP1Active(!p1Active);
            setP2Active(!p2Active);
        }
    };

    const toggleP2Active = () => {
        if (inningsLock) {
            lockUsedBalls();
            setP1Active(!p1Active);
            setP2Active(!p2Active);
            setInningsLock(false);
        }
    };

  const addBalls = (list, num) => {
      if (list === 'player'){
      p1Active ? setP1Balls([...p1Balls, num]): setP2Balls([...p2Balls, num]) ;
      } else if (list === 'dead') {
      setDeadList([...deadList, num])
      }
  };

  const removeBalls = (list, num) => {
      if (list === 'player') {
      if (p1Active) {
              const newItems = p1Balls.filter((item) => item !== num);
              setP1Balls(newItems);
      } else {
              const newItems = p2Balls.filter((item) => item !== num);
              setP2Balls(newItems);
          }
      } else if (list === 'dead'){
              const newItems = deadList.filter((item) => item !== num);
              setDeadList(newItems);
          }
  };

  const score = (operation, inc) => {
        if (operation === 'add') p1Active ? setP1Score(p1Score + inc) : setP2Score(p2Score + inc)
        if (operation === 'sub') p1Active ? setP1Score(p1Score - inc) : setP2Score(p2Score - inc)
    };

  const ballList = (operation, num) => {
        if (operation === 'add') p1Active ? addBalls('player', num) : addBalls('player',num)
        if (operation === 'sub') p1Active ? removeBalls('player', num) : removeBalls('player', num)
        if (operation === 'reset') setP1Balls([]), setP2Balls([]), setDeadList([])
      };

  const resetTimeouts = () => {
      p1Skill < 4 ? setP1Timeout(2) : setP1Timeout(1);
      p2Skill < 4 ? setP2Timeout(2) : setP2Timeout(1);
  };

  const useP1TimeOut = () => {
      if (p1Active) if (p1Timeout > 0) setP1Timeout(p1Timeout - 1);
  };

  const useP2TimeOut = () => {
    if (p2Active) if (p2Timeout > 0) setP2Timeout(p2Timeout - 1);
  };

  const addP1Def = () => {
      if (p1Active) setP1Def(p1Def + 1);
  };

  const addP2Def = () => {
    if (p2Active) setP2Def(p2Def + 1);
  };

  const changeBallState = (num, newState) => {
        if (num === 1) setOne(newState);
        if (num === 2) setTwo(newState);
        if (num === 3) setThree(newState);
        if (num === 4) setFour(newState);
        if (num === 5) setFive(newState);
        if (num === 6) setSix(newState);
        if (num === 7) setSeven(newState);
        if (num === 8) setEight(newState);
        if (num === 9) setNine(newState);
    };

  const deadScore = (operation, inc) => {
		operation === 'add' ? setDead(dead + inc) : setDead(dead - inc);
	};

  const resetBallStates = () => {
    setOne('idle');
	setTwo('idle');
	setThree('idle');
	setFour('idle');
	setFive('idle');
	setSix('idle');
	setSeven('idle');
	setEight('idle');
	setNine('idle');
  };

  const nineSpecial = () => {
      if (winLock === false) {
          setNine('used');
          score('add', 2);
      }
    };

    const checkForDeadBalls = () => {
        let idleBalls = ballStateList.filter(item => item === 'idle').length;
        if (nine === 'idle') idleBalls = idleBalls + 2;
        if (idleBalls > 0) {
          setDead(dead => dead + idleBalls);
        }};

  const checkForWin = () => {
        if (p1Score >= p1Goal) setSplit(getSplit(p2Skill, p2Score))
        if (p2Score >= p2Goal) {
            let splitStr = (getSplit(p1Skill, p1Score));
            setSplit(splitStr.split("-").reverse().join("-"));
        }
        if (p1Score >= p1Goal || p2Score >= p2Goal) {
            checkForDeadBalls();
            lockAllBalls();
            setWinLock(true);
        }
    if (nine === 'used') {
            checkForDeadBalls();
            resetBallStates();
        	ballList('reset', null);
        	resetTimeouts();
        }
  };

   const appReset = () => {
    setP1Name('Player1');
    setP1Skill('1');
	setP1Goal(14);
	setP1Active(true);
	setP1Score(0);
	setP1Def(0);
    setP1Timeout(2);

    setP2Name('Player2');
    setP2Skill('1');
	setP2Goal(14);
    setP2Score(0);
    setP2Active(false);
    setP2Def(0);
    setP2Timeout(2);

    ballList('reset', null);

    setDead(0);
	setInnings(0);
	setInningsLock(true);
    setWinLock(false);

	setSplit('');

    resetBallStates();
   };


    const changeBallImage = () => {
         if (one === 'idle') setOneBg(require('../assets/images/1Ball.png'));
         if (one === 'used') setOneBg(require('../assets/images/1BallUsed.png'));
         if (one === 'dead') setOneBg(require('../assets/images/DeadBall.png'));
         if (two === 'idle') setTwoBg(require('../assets/images/2Ball.png'));
         if (two === 'used') setTwoBg(require('../assets/images/2BallUsed.png'));
         if (two === 'dead') setTwoBg(require('../assets/images/DeadBall.png'));
         if (three === 'idle') setThreeBg(require('../assets/images/3Ball.png'));
         if (three === 'used') setThreeBg(require('../assets/images/3BallUsed.png'));
         if (three === 'dead') setThreeBg(require('../assets/images/DeadBall.png'));
         if (four === 'idle') setFourBg(require('../assets/images/4Ball.png'));
         if (four === 'used') setFourBg(require('../assets/images/4BallUsed.png'));
         if (four === 'dead') setFourBg(require('../assets/images/DeadBall.png'));
         if (five === 'idle') setFiveBg(require('../assets/images/5Ball.png'));
         if (five === 'used') setFiveBg(require('../assets/images/5BallUsed.png'));
         if (five === 'dead') setFiveBg(require('../assets/images/DeadBall.png'));
         if (six === 'idle') setSixBg(require('../assets/images/6Ball.png'));
         if (six === 'used') setSixBg(require('../assets/images/6BallUsed.png'));
         if (six === 'dead') setSixBg(require('../assets/images/DeadBall.png'));
         if (seven === 'idle') setSevenBg(require('../assets/images/7Ball.png'));
         if (seven === 'used') setSevenBg(require('../assets/images/7BallUsed.png'));
         if (seven === 'dead') setSevenBg(require('../assets/images/DeadBall.png'));
         if (eight === 'idle') setEightBg(require('../assets/images/8Ball.png'));
         if (eight === 'used') setEightBg(require('../assets/images/8BallUsed.png'));
         if (eight === 'dead') setEightBg(require('../assets/images/DeadBall.png'));
    };

    const main = (num, state) => {
        if (state === 'idle') {
            ballList('add', num);
            changeBallState(num, 'used');
            score('add', 1);
        } else if (state === 'used') {
            ballList('sub', num);
            addBalls('dead', num);
            changeBallState(num, 'dead');
            deadScore('add', 1);
            score('sub', 1);
        } else if (state === 'dead') {
            removeBalls('dead',num);
            changeBallState(num, 'idle');
            deadScore('sub', 1);
        }
    };

    useEffect(() => {
        if (winLock) navToSummary();
        }, [winLock]);

    useEffect(() => {
        checkForWin();
        },[p1Score, p2Score]);

    useEffect(() => {
              changeBallImage();
        }, [one,two,three,four,five,six,seven,eight]);

    useEffect(() => {
        if (P1Name) setP1Name(P1Name);
        if (P1Skill) setP1Skill(P1Skill);
        if (P1Goal) setP1Goal(P1Goal);
        if (P1Score) setP1Score(parseInt(P1Score));
        if (P1Def) setP1Def(parseInt(P1Def));
        if (P1Timeout) setP1Timeout(parseInt(P1Timeout));
        if (P2Name) setP2Name(P2Name);
        if (P2Skill) setP2Skill(P2Skill);
        if (P2Goal) setP2Goal(P2Goal);
        if (P2Score) setP2Score(parseInt(P2Score));
        if (P2Def) setP2Def(parseInt(P2Def));
        if (P2Timeout) setP2Timeout(parseInt(P2Timeout));
        if (Innings) setInnings(parseInt(Innings));
        if (Dead) setDead(parseInt(Dead));
    }, [
        P1Name,
        P1Skill,
        P1Goal,
        P1Score,
        P1Def,
        P1Timeout,
        P2Name,
        P2Skill,
        P2Goal,
        P2Score,
        P2Def,
        P2Timeout,
        Innings,
        Dead,
    ]);

    return (
      <View style={styles.main}>
          <View style={styles.row1}>
              <Pressable
              style={styles.ball}
              onPress={() => main(1, one)}>
                  <ImageBackground
                  source={oneBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(2, two)} >
                  <ImageBackground
                  source={twoBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(3, three)} >
                  <ImageBackground
                  source={threeBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(4, four)} >
                  <ImageBackground
                  source={fourBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(5, five)} >
                  <ImageBackground
                  source={fiveBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(6, six)} >
                  <ImageBackground
                  source={sixBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(7, seven)} >
                  <ImageBackground
                  source={sevenBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => main(8, eight)} >
                  <ImageBackground
                  source={eightBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>

              <Pressable
              style={styles.ball}
              onPress={() => nineSpecial(9, nine)}>
                  <ImageBackground
                  source={nineBg}
                  style={styles.ball}
                  ></ImageBackground>
              </Pressable>
          </View>

          <View style={styles.row2}>
              <View style={styles.player}>
                <Pressable style={styles.pressable} onPress={navToPlayer1}>
                  <Text style={styles.playerText}> {p1Name}</Text>
                 </Pressable>
              </View>
              <View  style={styles.skill}>
                <Text style={styles.skillText}>SL{p1Skill}: {p1Goal}</Text>
              </View>
              <View  style={styles.skill} >
                <Text style={styles.skillText}>SL{p2Skill}: {p2Goal}</Text>
              </View>
              <View style={styles.player}>
                  <Pressable style={styles.pressable} onPress={navToPlayer2}>
                      <Text style={styles.playerText}> {p2Name}</Text>
                  </Pressable>
              </View>

          </View>

          <View style={styles.row3}>
              <View style={styles.score}>
                  <TouchableOpacity
                      onPress={() => toggleP1Active()}
                      style={[styles.score, styles.pressable, { opacity: p1Active ? 1 : .25}]}>
                      <Text style={{ fontSize: 64}}> {p1Score}</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.metrics}>
                  <View style={styles.safeties}>
                      <Pressable onPress={() => addP1Def()}>
                          <Text style={styles.defText}>Def: {p1Def}</Text>
                      </Pressable>
                  </View>
                  <View style={styles.safeties}>
                      <Pressable onPress={() => useP1TimeOut()}>
                          <Text style={styles.defText}>Time: {p1Timeout}</Text>
                      </Pressable>
                  </View>
              </View>

              <View style={styles.metrics}>
                  <View style={styles.safeties}>
                    <Pressable onPress={() => addP2Def()}>
                        <Text style={styles.defText}>Def: {p2Def}</Text>
                    </Pressable>
                  </View>
                  <View style={styles.safeties}>
                      <Pressable onPress={() => useP2TimeOut()}>
                          <Text style={styles.defText}>Time: {p2Timeout}</Text>
                    </Pressable>
                  </View>
              </View>

              <View style={styles.score}>
                  <TouchableOpacity
                    onPress={() => toggleP2Active()}
                    style={[styles.score, styles.pressable, { opacity: p2Active ? 1 : .25}]}>
                    <Text style={{ fontSize: 64}}> {p2Score}</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.row4}>
              <View style={styles.balllist}>
                  <Text style={{ fontSize: 18}}>Balls: {p1Balls.join(',')}</Text>
              </View>
              <View style={styles.deadtotal}>
                  <Pressable onPress={navToDead}>
                      <Text style={{ fontSize: 18}}>Dead Total:</Text>
                  </Pressable>

                  <Pressable onPress={navToDead}>
                      <Text style={{ fontSize: 18}}>{dead}</Text>
                  </Pressable>
              </View>
              <View style={styles.dead}>
                  <Text style={{ fontSize: 18}}>Dead: {deadList.join(',')}</Text>
              </View>
              <View style={styles.deadtotal}>
                  <Pressable onPress={navToInnings}>
                      <Text style={{ fontSize: 18}}>Innings: </Text>
                  </Pressable>
                  <Pressable onPress={navToInnings}>
                <Text style={{ fontSize: 18}}>{innings}</Text>
            	</Pressable>
              </View>
              <View style={styles.balllist}>
                  <Text style={{ fontSize: 18}}>Balls: {p2Balls.join(',')}</Text>
              </View>
          </View>
          <View style={styles.row5}>
              <View style={[styles.help, styles.nocolor]}><Text></Text></View>
              <View style={styles.button}>
                  <Pressable
                      style={styles.pressable}
                      onPress={appReset}>
                      <Text style={{ fontSize: 18}}>NewGame</Text>
                  </Pressable>
              </View>
              <View style={styles.button}>
                  <Pressable
                      style={styles.pressable}
                      onPress={navToSummary}>
                      <Text style={{ fontSize: 18}}>Summary</Text>
                  </Pressable>
              </View>
              <View style={styles.help}>
               <Pressable
                   onPress={navToHelp}>
                   <Text style={{ fontSize: 18}}>Help</Text>
               </Pressable>
              </View>
          </View>

      </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#003594BF',
        padding: 4,
        },
    row1: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 40,
        },
    row2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 40,
        },
    row3: {
        flex: 3.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 40,
        },
    row4: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 40,
        },
    row5: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 40,
        },
    ball: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'space-around',
        height: 75,
        width: 75,
        alignItems: 'center',
        resizeMode: 'center',
        },
    help: {
        //flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        //alignItems: 'center',
        //position: 'absolute',
        //bottom: 4,
        //right: 10,
        //justifyContent: 'flex-end',
        //flexDirection: 'row-reverse',
        backgroundColor: 'lightblue',
        borderRadius: 40,
        heigh: 40,
        width: 80,
        padding: 8
        },
    player:{
        flex: 3,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 40,
        },
    playerText:{
        flex:1,
        fontSize: 32,
        },
    pressable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        },
    skill:{
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 40,
        },
    skillText:{
        fontSize: 24,
        },
    score:{
        flex: 3,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 100,
        },
    metrics:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 100,
        },
    safeties:{
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        width: 100,
        height: 40
        },
    defText:{
            fontSize: 18,
    },
    balllist:{
        flex: 1.5,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 40,
        },
    deadtotal: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 40,
        },
    dead: {
        flex: 1.2,
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 40
        },
    button:{
        //flex:1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 40,
        width: 240
        },
    nocolor: {
        backgroundColor: 'none',
        },
    });

export default Index;
