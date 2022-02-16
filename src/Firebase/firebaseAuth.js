import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

const signInGoogle = async (auth, provider) => {
  let userInfo;
  const login = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      
      userInfo = {
        email: user.email,
        name: user.displayName,
        photoUrl: user.photoURL,
      };
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  return userInfo;
};

const signOutFromFirebase = async (auth) => {
  let signOutSuccesFully;
  const logOut = await signOut(auth)
    .then(() => {
      // Sign-out successful.
      signOutSuccesFully = true;
    })
    .catch((error) => {
      signOutSuccesFully = false;
      console.log(error);
      // An error happened.
    });
  return signOutSuccesFully;
};

// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

export { signInGoogle, signOutFromFirebase, auth, provider };
