import React, {useEffect} from 'react'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useState } from 'react';

export default function TestConsCol() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const products = query(collection(db, 'products'), where('category', '==', 'retro'));
        getDocs(products).then((res) => {
            const auxArray = res.docs.map((item) => ({...item.data(), id: item.id}));
            setItems(auxArray);
        });
    }, []);

    return (
        <div>{items && <>{JSON.stringify(items)}</>}</div>
    )
}
