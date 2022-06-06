import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import app from "./firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";



const db = getDatabase();
const auth = getAuth(app);

function SignUpUser(obj){
    return createUserWithEmailAndPassword(auth, obj.email, obj.password)
}
function SignInUser(obj){
    return signInWithEmailAndPassword(auth, obj.email, obj.password)
}
function SignOut(obj){
    return onAuthStateChanged(auth, obj.email, obj.password)
}




// ===============================  database   ======================== //

function SendData(obj,NodeName,id){
        return(
            set(ref(db, `${NodeName} / ${id? id : ""} `),obj)
        )
}

export {SignUpUser,SignInUser,SendData}