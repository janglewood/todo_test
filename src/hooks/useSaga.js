import {/*useEffect*/ useMemo} from 'react';
import store from '../store/configureStore';

export const useSaga = (saga, params = [], shouldCancel = true) => {
    useMemo(() => {
        console.log('hi from saga');
        const runningSaga = store.runSaga(saga, ...params);

        if (shouldCancel) {
            return () => {
                console.log('by from saga');
                runningSaga.cancel();
            };
        }
    }, [saga, shouldCancel]);
};