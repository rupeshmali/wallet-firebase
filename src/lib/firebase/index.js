import { addDoc, deleteDoc, getDoc, getDocs, updateDoc } from "firebase/firestore"

export const addOne = async (collectionRef, data) => {
    try {
        const docRef = await addDoc(collectionRef, data)
        console.log("One doc added successfully.");
        return docRef.id;
    } catch (error) {
        console.log("Error occured while adding doc - ", error);
    }
}

export const getAll = async (collectionRef) => {
    try {
        const snapShot = await getDocs(collectionRef);
        let docsArray = [];
        snapShot.docs.forEach((doc)=>{
            docsArray.push({
                ...doc.data(),
                id: doc.id
            })
        });
        console.log("docsArray in lib: ", docsArray);
        return docsArray;
    } catch (error) {   
        console.log("Error occured while fetching all docs - ", error);
    }
}

export const deleteOne = async (docRef, data) => {
    try {
        const response = await deleteDoc(docRef, data);
        console.log("Doc deleted successfully.");
        return response;
    } catch (error) {
        console.log("Error occured while deleting doc - ", error);
    }
}

export const getOne = async (id) => {
    try {
        const doc = await getDoc(id)
    } catch (error) {
        console.log("Error occured while fetching one doc - ", error);
    }
}

export const updateOne = async (docRef, data) => {
    try {
        const response = await updateDoc(docRef, data)
        console.log("One doc updated successfully.");
    } catch (error) {
        console.log("Error occured while updating one doc - ", error);
    }
}