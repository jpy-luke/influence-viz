declare namespace _default {
    export { TYPES };
    export { CONSTRUCTION_TYPES };
    export { CONSTRUCTION_STATUSES };
    export { CONSTRUCTION_STATUS_LABELS };
    export { DECONSTRUCTION_PENALTY };
    export { GRACE_PERIOD };
    export { IDS };
    export { getConstructionTime };
    export { getConstructionType };
    export { getType };
}
export default _default;
/**
 * Constants
 */
declare const TYPES: {
    [x: number]: {
        i: number;
        name: string;
        description: string;
    };
};
declare const CONSTRUCTION_TYPES: {
    [x: number]: {
        constructionTime: number;
        requirements: {
            [x: number]: number;
        };
    };
};
declare namespace CONSTRUCTION_STATUSES {
    let UNPLANNED: number;
    let PLANNED: number;
    let UNDER_CONSTRUCTION: number;
    let OPERATIONAL: number;
}
declare const CONSTRUCTION_STATUS_LABELS: {
    [x: number]: string;
};
declare const DECONSTRUCTION_PENALTY: 0.1;
declare const GRACE_PERIOD: number;
declare namespace IDS {
    let EMPTY_LOT: number;
    let WAREHOUSE: number;
    let EXTRACTOR: number;
    let REFINERY: number;
    let BIOREACTOR: number;
    let FACTORY: number;
    let SHIPYARD: number;
    let SPACEPORT: number;
    let MARKETPLACE: number;
    let HABITAT: number;
}
/**
 * @param {integer} buildingType A constructable capable type
 * @param {float} totalBonus The crew bonus to apply to the construction time
 * @returns The construction time required in seconds
 */
declare function getConstructionTime(buildingType: integer, totalBonus?: float): number;
declare function getConstructionType(type: any): {
    constructionTime: number;
    requirements: {
        [x: number]: number;
    };
};
declare function getType(type: any): {
    i: number;
    name: string;
    description: string;
};
