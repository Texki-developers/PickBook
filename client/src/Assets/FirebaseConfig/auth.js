import firebase from '../FirebaseConfig/firebaseConfig';
import instance from '../server/instance'
// import Action from '../Essentials/EssentialAction'



const socialMediaAuth = (provider) => {

    return new Promise((resolve, reject) => {
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
               const userData = {
                    uid: res.user.uid,
                    name: res.user.displayName,
                    mail: res.user.email,
                    phone: res.user.phoneNumber,
                    photo: res.user.photoURL
                };
                instance.post('/login', userData).then(res => {
                    console.log(res);
                    resolve(userData);
                })

            }).catch((err) => {
                return err;
            })
    })
}
export default socialMediaAuth;