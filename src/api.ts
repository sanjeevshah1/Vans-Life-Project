import { FormType, ErrorType } from "./types"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaGeNlsSLggfq7P8_-wRoybG0V3lCsPEM",
  authDomain: "vanlife-cda0f.firebaseapp.com",
  projectId: "vanlife-cda0f",
  storageBucket: "vanlife-cda0f.appspot.com",
  messagingSenderId: "430852998503",
  appId: "1:430852998503:web:d8c4f933e805a2ea5b1bc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const vansCollectionRef = collection(db, "vans");

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    console.log(snapshot)
    console.log("hello")
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id: string){
    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef);
    const van = {
        ...snapshot.data()
        , id: snapshot.id,
    }
    return van;
}



export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const hostVans = snapshot.docs.map((doc) => (
        {
            ...doc.data(),
            id: doc.id,
        }
    ))
    return hostVans;
}

// For Mirage JS Calling
// export async function getVans(id?:string): Promise<VansType[] | VansType> {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status.toString()
//         } as ErrorType;
//     }
//     const data = await res.json()
//     return data.vans
// }


// export async function getHostVans(id?:string): Promise<VansType[] | VansType> {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status.toString()
//         }as ErrorType;
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds: FormType) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status.toString()
        } as ErrorType;
    }

    return data
}