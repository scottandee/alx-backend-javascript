import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  let signUp = '';

  Promise.all([photo, user]).then((objects) => {
    for (const obj of objects) {
      for (const [key, value] of Object.entries(obj)) {
        if (key !== 'status') {
          signUp += value;
          signUp += ' ';
        }
      }
    }
    signUp = signUp.trim();
    console.log(signUp);
  }).catch((() => console.log('Signup system offline')));
}
