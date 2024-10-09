import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  Analytics,
  getAnalytics,
  initializeAnalytics,
} from "firebase/analytics";
// import { FIREBASE_CONFIG } from '@/config/config';

const app = initializeApp(FIREBASE_CONFIG);
// eslint-disable-next-line import/no-mutable-exports
let firebaseAnalytics: Analytics;
if (typeof window !== "undefined") {
  firebaseAnalytics = getAnalytics(app);

  if (firebaseAnalytics) {
    initializeAnalytics(app);
  }
}
const firebaseAuth = getAuth(app);

const getBearer = async (): Promise<string> => {
  try {
    if (!firebaseAuth.currentUser) return "";

    const token = await firebaseAuth.currentUser.getIdToken();

    return `Bearer ${token}`;
  } catch (e) {
    console.log(e);
    return "";
  }
};

export { firebaseAuth, firebaseAnalytics, getBearer };
