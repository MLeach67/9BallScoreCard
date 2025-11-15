import { Stack } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
  const createDbIfNeeded = async (db: SQLiteDatabase) => {
    //console.log("createdb if needed")
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS scorenine (
      game INTEGER PRIMARY KEY UNIQUE NOT NULL,
      p1Name TEXT,
      p1Skill INTEGER,
      p1Goal INTEGER,
      p1Score INTEGER,
      p1Def INTEGER,
      p1Timeout INTEGER, 
      p1Shotclock INTEGER,
      p1Active INTEGER,
      p1Balls TEXT,
      p2Name TEXT,
      p2Skill INTEGER,
      p2Goal INTEGER,
      p2Score INTEGER,
      p2Def INTEGER,
      p2Timeout INTEGER, 
      p2Shotclock INTEGER,
      p2Active INTEGER,
      p2Balls TEXT
    );
    INSERT INTO scorenine (p1Name,p1Skill,p1Goal,p1Score,p1Def,p1Timeout,p1Shotclock,p1Active,p1Balls,p2Name,p2Skill,p2Goal,p2Score,p2Def,p2Timeout,p2Shotclock,p2Active,p2Balls) 
    VALUES ('Player1',1,14,0,0,2,0,1,'','Player2',1,14,0,0,2,0,0,'')
    ON CONFLICT (game) DO NOTHING;
    `)
  };
  //INSERT INTO scorenine (p1, p1score, p2, p2score) VALUES ('Marshall', 10, 'Doug', 12);
  return(
    <SQLiteProvider databaseName="scorenine.db" onInit={createDbIfNeeded}>
    <Stack screenOptions={{headerShown: false,}}>
    </Stack>
    </SQLiteProvider>
  );
};