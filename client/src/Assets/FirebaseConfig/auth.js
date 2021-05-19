import firebase from '../FirebaseConfig/firebaseConfig';
import instance from '../server/instance' 


const socialMediaAuth = (provider) => {
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then(async(res) => {
       
        var userData={
            uid:res.user.uid,
            name:res.user.displayName,
            mail:res.user.email,
            phone:res.user.phoneNumber,
            photo:res.user.photoURL
        };
        
        var loginServer = await instance.post('users/login',userData)

    }).catch((err) => {
        return err;
    })
}
export default socialMediaAuth;