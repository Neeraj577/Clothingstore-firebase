import {
  signInWithGooglePopup,
  createUserdocumentfromAuth
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserdocumentfromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>This is a Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google Popup.</button>
    </div>
  );
};

export default SignIn;
