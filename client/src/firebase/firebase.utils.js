import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// * configuration object containing keys  and identifiers for the app
const firebaseConfig = {
  apiKey: "AIzaSyCj3yuLXBSSvg1_LC5g13W_9IZYY1TnYds",
  authDomain: "rental-clubrossignol.firebaseapp.com",
  projectId: "rental-clubrossignol",
  storageBucket: "rental-clubrossignol.appspot.com",
  messagingSenderId: "365390353464",
  appId: "1:365390353464:web:e260ab42c41afc412ec2cd",
  measurementId: "G-XFKS4JRCR1",
};

// * initialize firebase
firebase.initializeApp(firebaseConfig);

// * get/connect auth and firestore from firebase API
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * createUserProfileDocument() = async await function which:
// * 1. returns the user reference (userRef) if the user exists
// * 2. creates user document and returns reference if the doesn't
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // * get a reference at /users/userAuth.uid (reference the user document)
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // * get snapShot of the userRef
  const snapShot = await userRef.get();

  // * if the Snapshot doesn’t exist, then destructure the email of userAuth() and proceed with creating the user document
  if (!snapShot.exists) {
    const { email, emailVerified } = userAuth;
    const createdAt = new Date();
    const role = "user";

    try {
      //*  create document with user data in the userRef(“/users”) collection
      await userRef.set({
        email,
        createdAt,
        role,
        emailVerified,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  if (snapShot.exists) {
    if (
      snapShot.data().emailVerified === false &&
      userAuth.emailVerified === true
    ) {
      try {
        await userRef.set({
          ...snapShot.data(),
          emailVerified: userAuth.emailVerified,
        });
      } catch (error) {
        console.log("error updating email verification", error);
      }
    }
  }

  return userRef;
};

export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection("carts").where("userId", "==", userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection("carts").doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

// * function which adds data.js to firestore
export const addCollectionAndDocuments = async (
  CollectionKey,
  objectsToAdd
) => {
  // * firestore collection reference
  const collectionRef = firestore.collection(CollectionKey);

  // * groups all calls into a single object
  const batch = firestore.batch();

  // * function which creates a document for each object (in data.js) in firestore
  objectsToAdd.forEach((obj) => {
    // * reference to document from the collection
    const newDocRef = collectionRef.doc(); // * firestore will automatically set an ID

    // * create document at 'newDocRef' with the 'object'
    batch.set(newDocRef, obj);
  });

  // * batch.commit() returns null if the the .set() succeeds
  return await batch.commit();
};

// * converts Snapshot object
export const convertRentalsSnapshotToMap = (rentals) => {
  const transformedRentals = rentals.docs.map((doc) => {
    // * destructe properties from the document
    const { categoryName, products, images } = doc.data();

    // * return final object with desired data
    return {
      routeName: encodeURI(categoryName.toLowerCase()),
      id: doc.id,
      images: images,
      categoryName,
      products,
    };
  });

  return transformedRentals.reduce((accumulator, rentals) => {
    accumulator[rentals.categoryName.toLowerCase()] = rentals;
    return accumulator;
  }, {});
};

export const convertRestaurantMenuSnapshotToMap = (menu) => {
  const transformedMenu = menu.docs.map((doc) => {
    const { categoryID, categoryName, categoryIcon, products } = doc.data();

    return {
      id: doc.id,
      categoryID: categoryID,
      icon: categoryIcon,
      categoryName,
      products,
    };
  });

  return transformedMenu.reduce((accumulator, menu) => {
    accumulator[menu.categoryName.toLowerCase()] = menu;
    return accumulator;
  }, {});
};

// * function which get's the current signed in user
// * 1. returns user object if singed in
// * 2. returns null(reject) if used isn't signed in
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// * converts Snapshot object
export const convertOrdersSnapshotToMap = (orders) => {
  const transformedOrders = orders.docs.map((doc) => {
    // * destructe properties from the document
    const {
      userID,
      orderedItems,
      total,
      orderedAt,
      orderNumber,
      userEmail,
      status,
    } = doc.data();

    // * return final object with desired data
    return {
      orderID: doc.id,
      orderNumber: orderNumber,
      userID: userID,
      userEmail: userEmail,
      orderedItems: orderedItems,
      total: total,
      orderedAt: orderedAt,
      status: status,
    };
  });
  return transformedOrders.map((order) => order);
};

export const getOrderCounter = async () => {
  const ordersCounterRef = firestore.collection("orders").doc("--counter--");
  const currentCount = await ordersCounterRef.get();
  const data = currentCount.data();
  const { counter } = data;

  return counter;
};

export const incrementOrderNumber = async () => {
  const ordersCounterRef = firestore.collection("orders").doc("--counter--");

  const increment = firebase.firestore.FieldValue.increment(1);

  await ordersCounterRef.update({ counter: increment });
};

export const clearFirebaseCart = async (userId) => {
  const firebaseCartRef = firestore
    .collection("carts")
    .where("userId", "==", userId);

  const snapShot = await firebaseCartRef.get();

  await snapShot.docs[0].ref.update({ cartItems: [] });
};

export default firebase;
