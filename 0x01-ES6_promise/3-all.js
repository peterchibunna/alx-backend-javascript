import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()]).then((response) => {
    const { body } = response[1];
    const { firstName, lastName } = response[0];
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
