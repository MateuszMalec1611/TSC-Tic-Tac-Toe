import {
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    query,
    updateDoc,
} from '@firebase/firestore';
import { database } from 'src/firebase';
import { UpdatedUserData } from 'src/types/userData.types';

export const fetchUserData = async (id: string) => {
    const userDataRef = doc(database, 'ranking', id);
    const userDataSnap = await getDoc(userDataRef);

    if (userDataSnap.exists()) return userDataSnap.data();
    return false;
};

export const fetchUsersData = async () => {
    const q = query(collection(database, 'ranking'));

    const querySnapshot = await getDocs(q);
    let data: DocumentData[] = [];

    querySnapshot.forEach(doc => data.push(doc.data()));

    return data;
};

export const setUserData = async (id: string, updatedUserData: UpdatedUserData) => {
    const userDataRef = doc(database, 'ranking', id);
    await updateDoc(userDataRef, {
        gamesPlayed: updatedUserData.gamesPlayed,
        lostGames: updatedUserData.lostGames,
        wonGames: updatedUserData.wonGames,
    });
};
