import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => (
      response.map((data) => ({
        status: data.status,
        value: data.status === 'rejected' ? data.reason.toString() : data.value,
      }))
    ));
}
