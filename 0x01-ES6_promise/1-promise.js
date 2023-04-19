export default function getResponseFromAPI(success) {
  const successData = { status: 200, body: 'Success' };
  const errorData = 'The fake API is not working currently';
  return new Promise((resolve, reject)=>{
    if ( success) {
      resolve(successData);
    } else {
      reject(Error(errorData));
    }
  });
}
