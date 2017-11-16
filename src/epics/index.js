import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {LOAD_CHORES, createChores, NEW_CHORE} from '../reducers/chores';

const choresUrl = 'http://localhost:3016/chores';

function loadChoresEpic(action$, store) {

    return action$.ofType(LOAD_CHORES)
        .switchMap(() =>  {
            return Observable.ajax.getJSON(choresUrl);
        })
        .map(results => createChores(results));
}

function addChoresEpic(action$) {

    return action$.ofType(NEW_CHORE)
        .switchMap(({payload}) => {
            return Observable.ajax({
                body: JSON.stringify(payload),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',                
                url: choresUrl
            });
        });
}

export const rootEpic = combineEpics(
    loadChoresEpic,
    addChoresEpic
);