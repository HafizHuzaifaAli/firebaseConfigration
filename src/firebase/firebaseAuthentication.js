import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import app from "./firebaseConfig";
import { getDatabase, ref, set,onValue,push } from "firebase/database";



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
function SendPush(obj,NodeName,id){
    if(!id){
        const newPostKey = push(ref(db, `${NodeName} /`));
        obj.id = newPostKey.key
    }
        return(
            push(ref(db, `${NodeName} / ${id? id : obj.id}`),obj)
        )
}
function GetData(NodeName,id){
    const dbRef = ref(db, `${NodeName} / ${id? id : ""} `);
        return(
            onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                  const childKey = childSnapshot.key;
                  const childData = childSnapshot.val();
                });
              }, {
                onlyOnce: false
              })
        )
}

export {SignUpUser,SignInUser,SendData,GetData,SendPush}