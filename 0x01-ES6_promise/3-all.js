import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;
      const { firstName, lastName } = userResponse;

      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}

export default handleProfileSignup;
