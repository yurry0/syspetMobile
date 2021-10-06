import { openDatabase } from "react-native-sqlite-storage"

const db = openDatabase({name: 'syspet_mob.db'})

export default db