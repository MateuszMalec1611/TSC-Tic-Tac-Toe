import { doc, getDoc } from '@firebase/firestore';
import { database } from 'src/firebase';

export const fetchUserData = async (id: string) => {
    const userDataRef = doc(database, 'ranking', id);
    const userDataSnap = await getDoc(userDataRef);

    if (userDataSnap.exists()) return userDataSnap.data();
    return false;
};
