import {useEffect} from 'react';
import store from '../store/configureStore';

export const useSaga = (saga, shouldCancel = true) => {
    useEffect(() => {
        console.log('hi from saga');
        const runningSaga = store.runSaga(saga);

        if (shouldCancel) {
            return () => {
                console.log('by from saga');
                runningSaga.cancel();
            };
        }
    }, [saga, shouldCancel]);
};