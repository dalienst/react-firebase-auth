import { format } from "date-fns";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

const BUCKET_URL = "gs://react-authentication-94257.appspot.com";

export async function uploadImage(image, uid) {
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  const storageRef = ref(storage, bucket);
  await uploadBytes(storageRef, image);
  return bucket;
}
