interface BaseAction {
    trigger: 'click';
    type: 'externalLink' | 'internalLink' | 'api';
}
interface LinkAction extends BaseAction {
    type: 'externalLink' | 'internalLink';
    value: string;
}
interface BaseAPIAction extends BaseAction {
    type: 'api';
    method: 'get' | 'post';
    endpoint: `http://${string}` | `https://${string}`;
    authorization: string | null;
    headers: {
        key: string;
        value: string;
    }[];
}
interface GetAPIAction extends BaseAPIAction {
    method: 'get';
    queryParams: {
        key: string;
        value: string;
    }[];
}
interface PostAPIAction extends BaseAPIAction {
    method: 'post';
    payloadType: 'form' | 'json' | 'xml' | 'row';
    data: {
        key: string;
        value: string;
    }[];
    file: any;
}
declare type APIAction = GetAPIAction | PostAPIAction;
export declare type Action = LinkAction | APIAction;
export {};
//# sourceMappingURL=action.d.ts.map