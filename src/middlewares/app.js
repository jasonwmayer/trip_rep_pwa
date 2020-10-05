import { apiRequest } from "../actions/api";
import { LOGIN} from "../actions/actionTypes";
import {baseServerUrl} from '../constants/default_request';

export const appMiddleware = () => next => action => {
    next(action);
    if (action.type === LOGIN) {
            next(
                apiRequest({
                    url: baseServerUrl + '/apps/fol/base_api',
                    method: 'post',
                    data: action.payload
                })
            );
        }
};