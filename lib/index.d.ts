/// <reference types="node" />
export declare enum PhotoType {
    Random = -1,
    Person = 0,
    Cat = 1,
    Horse = 2,
    Art = 3,
    Room = 4
}
export declare function getImage(type?: PhotoType): Promise<Buffer>;
