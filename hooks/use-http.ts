import { AnyMxRecord } from 'dns';
import { useCallback, useReducer } from 'react';

export enum Action {
  SEND = 'SEND',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

type ActionType = {
  type: string;
  responseData?: any;
  errorMessage?: string;
};

function httpReducer(state: string, action: ActionType): any {
  if (action.type === Action.SEND) {
    return {
      data: null,
      error: null,
      status: 'pending'
    };
  }
  if (action.type === Action.SUCCESS) {
    return {
      data: action.responseData,
      error: null,
      status: 'completed'
    };
  }
  if (action.type === Action.ERROR) {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed'
    };
  }
  return state;
}

//Function requestFunction takes object with unknown number of properties.
interface RequestFunctionObject {
  [key: string]: string;
}

function useHttp(requestFunction: (requestData: RequestFunctionObject) => void, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null
  });

  const sendRequest = useCallback(
    async function (requestData: RequestFunctionObject) {
      dispatch({ type: Action.SEND });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: Action.SUCCESS, responseData });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: 'ERROR',
            errorMessage: error.message || 'Something went wrong!'
          });
        }
      }
    },
    [requestFunction]
  );

  return { sendRequest, ...httpState };
}

export default useHttp;
