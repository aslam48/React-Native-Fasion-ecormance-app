import {auth,db} from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";