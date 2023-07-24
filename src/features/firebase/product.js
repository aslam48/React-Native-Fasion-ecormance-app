import {collection, doc, getDoc, getDocs} from "firebase/firestore"
import { db } from "../../../firebase"


export const getProducts = async () => {
    try {
        const productsRef = collection(db, "products")
        const productsSnapshot = await getDocs(productsRef)
        const products = productsSnapshot.docs.map(doc=>({id:doc.id,...doc.data()}))
        return products
    } catch (err) {

    }
}