declare type FlexibleString = {
    type: 'text' | 'variable';
    value: string;
}[];
declare type Variable = {
    key: string;
    value: string;
};
interface BaseAction {
    trigger: 'click';
    type: 'externalLink' | 'internalLink' | 'api';
    input: {
        variables: Variable[];
    };
    output: {
        variables: Variable[];
    };
}
interface LinkAction extends BaseAction {
    type: 'externalLink' | 'internalLink';
    value: string;
}
interface BaseAPIAction extends BaseAction {
    type: 'api';
    method: 'get' | 'post';
    endpoint: `http://${string}` | `https://${string}`;
    authorization: FlexibleString;
    headers: {
        key: string;
        value: FlexibleString;
    }[];
}
interface GetAPIAction extends BaseAPIAction {
    method: 'get';
    queryParams: {
        key: string;
        value: FlexibleString;
    }[];
}
interface PostAPIAction extends BaseAPIAction {
    method: 'post';
    payloadType: 'form' | 'json' | 'xml' | 'row';
    data: {
        key: string;
        value: FlexibleString;
    }[];
    file: any;
}
declare type APIAction = GetAPIAction | PostAPIAction;
export declare type Action = LinkAction | APIAction;
export {};
//# sourceMappingURL=action.d.ts.map