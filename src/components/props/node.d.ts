import { FrameMap, TextMap, ImageMap, SpaceMap, ButtonMap, ComponentSetMap } from './nodeMap';
import { NodeTreeType } from './nodeTree';
export interface Frame extends FrameMap {
    children: Node[];
    order: number;
    nodeTreeType: NodeTreeType;
}
export interface Text extends TextMap {
    order: number;
    nodeTreeType: NodeTreeType;
}
export interface Image extends ImageMap {
    order: number;
    nodeTreeType: NodeTreeType;
}
export interface Space extends SpaceMap {
    order: number;
    nodeTreeType: NodeTreeType;
}
export interface Button extends ButtonMap {
    order: number;
    nodeTreeType: NodeTreeType;
}
export interface ComponentSet extends ComponentSetMap {
    order: number;
    nodeTreeType: NodeTreeType;
}
export declare type BasicNode = Image | Text | Space | Button;
export declare type Node = Frame | ComponentSet | BasicNode;
//# sourceMappingURL=node.d.ts.map