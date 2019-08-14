import {useEffect} from 'react';
import store from '../store/configureStore';

export const useSaga = (saga, shouldCancel = true) => {
    useEffect(() => {
        const runningSaga = store.runSaga(saga);

        if (shouldCancel) {
            return () => {
                runningSaga.cancel();
            };
        }
    }, []);
};