//import { useSQLiteContext } from "expo-sqlite";

//const database = useSQLiteContext();

import * as SQLite from 'expo-sqlite';


export async function insertdata(): Promise<any> {
  const db = await SQLite.openDatabaseAsync('test.db');
  await db.execAsync(`INSERT INTO scorenine (p1, p1score, p2, p2score) VALUES ('Me', 3, 'You', 12);`);
  const firstRow = await database.getFirstAsync('SELECT * FROM scorenine ORDER BY rowid DESC LIMIT 1');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(firstRow);
    }, 100);
  });
  
  //const db = await SQLite.openDatabaseAsync('scorenine');
  //await db.execAsync(`INSERT INTO scorenine (p1, p1score, p2, p2score) VALUES ('Me', 3, 'You', 12);`);
  //const firstRow = await database.getFirstAsync('SELECT * FROM scorenine ORDER BY rowid DESC LIMIT 1');
  //return firstRow;
}

//const DBCtl = () => {
//
 // const insertdata = async (db: SQLiteDatabase) => {
//  await db.execAsync(`INSERT INTO scorenine (p1, p1score, p2, p2score) VALUES ('Me', 3, 'You', 12);`);
//  };
  
  //return();
//};

//export default;