import { MovieActionEnum } from './action';
import { IMovieStateContext } from './context';

export function MovieReducer(
    incomingState: IMovieStateContext,
    action: ReduxActions.Action<IMovieStateContext>
): IMovieStateContext {
    const { type, payload } = action;

    switch (type) {
        case MovieActionEnum.getMoviesRequest:
            return { ...incomingState, ...payload };
        ca

        default:
            incomingState;
    }
}
