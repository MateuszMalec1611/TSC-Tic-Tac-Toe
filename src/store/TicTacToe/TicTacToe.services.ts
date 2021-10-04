import { doc, getDoc, updateDoc } from '@firebase/firestore';
import { database } from 'src/firebase';
import { updatedUserData } from 'src/types/userData.types';

export const fetchUserData = async (id: string) => {
    const userDataRef = doc(database, 'ranking', id);
    const userDataSnap = await getDoc(userDataRef);

    if (userDataSnap.exists()) return userDataSnap.data();
    return false;
};
export const setUserData = async (id: string, updatedUserData: updatedUserData) => {
    const userDataRef = doc(database, 'ranking', id);
    await updateDoc(userDataRef, {
        gamesPlayed: updatedUserData.gamesPlayed,
        lostGames: updatedUserData.lostGames,
        wonGames: updatedUserData.wonGames,
    });
};
