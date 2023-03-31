import React, {useEffect} from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useState } from 'react';

export default function TestConsulta() {
    const [item, setItem] = useState({});
    useEffect(() => {
        const db = getFirestore();
        const ger = doc(db, 'products', 'TQstOFwYmnbtD17orPVK');
        getDoc(ger).then((res) => {
            setItem({...res.data(), id: res.id});
        });
    }, []);

    return (
        <div>{item && <>{JSON.stringify(item)}</>}</div>
    )
}
