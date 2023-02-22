import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

//Config
import { firebaseConfig } from "../config/firebase";
import { setProduct } from '../store/productSlice';
import { setProducts } from '../store/productsSlice';

export const FirebaseDB = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const dispatch = useDispatch();

    async function getProducts() {
        try {
            const colData = await getDocs(collection(db, "products"));
            const data = colData.docs.map((doc) => ({...doc.data(), id: doc.id}));
    
            dispatch(setProducts(data));
        } catch (_err) {
            console.info(_err);
        }
    }

    async function getProduct(id) {
        try {
            const product = doc(db, 'products', id);
            const colData = await getDoc(product);
            const data = colData.data();

            dispatch(setProduct(data));
        } catch (_err) {
            console.info(_err);
        }
    }

    return {
        getProducts,
        getProduct
    };
};
