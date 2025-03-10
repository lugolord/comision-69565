import { app } from './config'
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query,
  where,
  doc,
  getDoc,
  addDoc  
} from "firebase/firestore"

const db = getFirestore(app)

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"))
  const products = []
  
  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  return products
}

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category))
  const querySnapshot = await getDocs(q)
  const products = []
  
  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  return products
}

export const getProduct = async (id) => {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id}
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const dbFunctions = {
  getProducts,
  getProduct
}
