import { initializeApp } from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import {
  getDocs,
  getFirestore,
  collection,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  where,
  query,
} from 'firebase/firestore';
import { getFormattedISODate } from './utils';

export interface DataItem {
  id: string;
  date?: string;
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getCollection = async (
  collectionName: 'customers' | 'products' | 'purchases',
) => {
  const snapshot = await getDocs(collection(db, collectionName));
  const data: DataItem[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // if (collectionName === 'purchases') {
  //   data = data.map((item) => {
  //     return {
  //       ...item,
  //       date: typeof item.date === 'string' ? JSON.parse(item.date) : item.date,
  //     };
  //   });
  // }
  return data;
};
export const getProduct = async (id: string) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const addProduct = async (
  name: string,
  price: number,
  quantity: number,
) => {
  const id = uuidv4();
  const docRef = doc(db, 'products', id);
  const product = { name, price, quantity };
  await setDoc(docRef, product);
};

export const updateProduct = async (
  id: string,
  name: string,
  price: number,
  quantity: number,
) => {
  const docRef = doc(db, 'products', id);
  const product = { name, price, quantity };
  await setDoc(docRef, product);
};

export const deleteProduct = async (id: string) => {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
};

export const getCustomer = async (id: string) => {
  const docRef = doc(db, 'customers', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const addCustomer = async (
  firstName: string,
  lastName: string,
  city: string,
) => {
  const id = uuidv4();
  const docRef = doc(db, 'customers', id);
  const customer = { firstName, lastName, city };
  await setDoc(docRef, customer);
};

export const updateCustomer = async (
  id: string,
  firstName: string,
  lastName: string,
  city: string,
) => {
  const docRef = doc(db, 'customers', id);
  const customer = { firstName, lastName, city };
  await setDoc(docRef, customer);
};

export const deleteCustomer = async (id: string) => {
  const docRef = doc(db, 'customers', id);
  await deleteDoc(docRef);
};

export const getPurchase = async (id: string) => {
  const docRef = doc(db, 'purchases', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const addPurchase = async (
  customerId: string,
  productId: string,
  quantity: number,
) => {
  const id = uuidv4();
  const date = getFormattedISODate();
  const docRef = doc(db, 'purchases', id);
  const purchase = { customerId, productId, quantity, date };
  await setDoc(docRef, purchase);
};

export const updatePurchase = async (
  id: string,
  customerId: string,
  productId: string,
  quantity: number,
) => {
  const docRef = doc(db, 'purchases', id);
  const purchase = { customerId, productId, quantity };
  await setDoc(docRef, purchase);
};

export const deletePurchase = async (id: string) => {
  const docRef = doc(db, 'purchases', id);
  await deleteDoc(docRef);
};

export const deleteAllPurchasesOfProduct = async (productId: string) => {
  const q = query(
    collection(db, 'purchases'),
    where('productId', '==', productId),
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

export const deleteAllPurchasesOfCustomer = async (customerId: string) => {
  const q = query(
    collection(db, 'purchases'),
    where('customerId', '==', customerId),
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};
