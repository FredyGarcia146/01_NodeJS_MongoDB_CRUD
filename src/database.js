import {connect} from "mongoose";
import { MONGODB_URI } from './config'


(async () => {

    try {
        const db = await connect(MONGODB_URI)
        console.log('DB connected to ', db.connection.name)
    } catch (error) {
        console.error(error)
    }

})()


/*
const db = await connect("mongodb://localhost/crud_mongo")
console.log('DB connected', db.connect.name)
*/
