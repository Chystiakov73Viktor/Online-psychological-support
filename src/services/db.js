import { get, ref, push, set } from 'firebase/database';
import { database } from './firebase';
import { Notify } from 'notiflix';

export const fetchGetPsychologists = async () => {
  try {
    const psychologistsRef = ref(database, 'psychologists');

    const snapshot = await get(psychologistsRef);
    const data = snapshot.val();

    if (data) {
      const psychologistsArray = Object.values(data);
      return psychologistsArray;
    } else {
      Notify.failure('No data available');
      return null;
    }
  } catch (error) {
    Notify.failure('Error fetching psychologists');
    return null;
  }
};

 export const fetchAddPsychologists = async (psychologists) => {
  try {
    const psychologistsRef = ref(database, 'psychologists');

    psychologists.forEach(psychologist => {
      const newPsychologistRef = push(psychologistsRef);
      
      const newPsychologistKey = newPsychologistRef.key;
      
      psychologist.id = newPsychologistKey;
      
      set(newPsychologistRef, psychologist);
    });

    console.log('Data written successfully to Realtime Database');
  } catch (error) {
    console.error('Error writing data to Realtime Database:', error);
    throw error;
  }
};

export const fetchDeletePsychologist = async id => {
  await database.ref('psychologists').child(id).remove();
};
