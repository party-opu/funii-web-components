export declare type NodeTreeType = 'unit' | 'layout';
export declare type Layout = {
    id: string;
    order: number;
    nodeTreeType: NodeTreeType;
    children?: {
        id: string;
        order: number;
    }[];
};
export declare type UnitNode = {
    id: string;
    order: number;
    nodeTreeType: NodeTreeType;
};
export declare type NodeTree = Layout | UnitNode;
//# sourceMappingURL=nodeTree.d.ts.map