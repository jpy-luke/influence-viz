declare module '@influenceth/sdk' {
    export const ADALIA_MASS: number;

    export class AdalianOrbit {
        static fromStateVectors(r: any, v: any): AdalianOrbit;

        constructor(...args: any[]);

        orbit: any;

        getRadius(nu: any): number;

        getPosByAngle(nu: any): {
            x: number;
            y: number;
            z: number;
        };

        getSmoothOrbit(numPoints: any): any;

        getPeriod(): number;

        getPositionAtTime(elapsed: any): {
            x: number;
            y: number;
            z: number;
        };

        getTrueAnomalyAtPos(pos: any): any;
    }

    namespace address {
        export {toStandard};
        export {areEqual};
        export {getChain};
    }
    namespace assets {
        const Building: {
            [x: number]: {
                iconVersion: number;
                modelVersion: number;
            };
        };
        const Product: {
            [x: number]: {
                iconVersion: number;
                modelVersion: number;
            };
        };
        const Ship: {
            [x: number]: {
                iconVersion: number;
                modelVersion: number;
            };
        };
    }
    export namespace Asteroid {
        export {BONUS_IDS};
        export {FREE_TRANSPORT_RADIUS};
        export {HOPPER_SPEED};
        export {MAX_LOT_REGIONS};
        export {MAX_RADIUS};
        export {RARITIES};
        export {SCANNING_TIME};
        export {SCAN_STATUSES};
        export {SIZES};
        export {SPECTRAL_IDS};
        export {SPECTRAL_TYPES};
        export {TOTAL_ASTEROIDS};
        export {getAbundanceAtLot};
        export {getAbundanceAtPosition};
        export {getAbundanceMapSettings};
        export {getAbundances};
        export {getBaseName};
        export {getBonus};
        export {getBonusByResource};
        export {getBonuses};
        export {getBoostFromPurchaseOrder};
        export {getClosestLots};
        export {getHopperTravelTime};
        export {getLotDistance};
        export {getLotPosition};
        export {getLotRegionTally};
        export {getLotTravelTime};
        export {getMass};
        export {getRadius};
        export {getRarity};
        export {getRegionsOfLotPositions};
        export {getSeed};
        export {getSize};
        export {getSpectralType};
        export {getSurfaceArea};
        export {getUnpackedAsteroidDetails};
        export {Entity$4 as Entity};
        export {Component$3 as Component};
    }
    export namespace Building {
        export {TYPES$d as TYPES};
        export {CONSTRUCTION_TYPES$1 as CONSTRUCTION_TYPES};
        export {CONSTRUCTION_STATUSES};
        export {CONSTRUCTION_STATUS_LABELS};
        export {DECONSTRUCTION_PENALTY};
        export {GRACE_PERIOD};
        export {IDS$d as IDS};
        export {getConstructionTime};
        export {getConstructionType$1 as getConstructionType};
        export {getType$9 as getType};
    }
    namespace crew {
        export {CREWMATE_STACKING_BONUS_EFFICIENCY};
        export {CREWMATE_FOOD_PER_YEAR};
        export {STARVING_MULTIPLIER};
        export {getAbilityBonus};
        export {getCurrentFoodRatio};
        export {getFoodMultiplier};
        export {getTimeSinceFed};
        export {getAbilityBonusFromFood};
    }
    export namespace Crewmate {
        export {ABILITY_IDS};
        export {ABILITY_TYPES};
        export {CLASSES};
        export {CLASS_IDS};
        export {CLOTHES};
        export {COLLECTIONS};
        export {COLLECTION_IDS};
        export {DEPARTMENTS};
        export {DEPARTMENT_IDS};
        export {FACES};
        export {GENDERS};
        export {HAIR_COLORS};
        export {HAIRS};
        export {HEADS};
        export {ITEMS};
        export {TITLES};
        export {TRAIT_TYPES};
        export {TRAITS};
        export {TRAIT_IDS};
        export {getAbility};
        export {getClass};
        export {getClothes};
        export {getCollection};
        export {getCombinedTraits};
        export {getFace};
        export {getGender};
        export {getHair};
        export {getHairColor};
        export {getHead};
        export {getItem};
        export {getTitle};
        export {getTrait};
        export {nextTraits};
        export {packAppearance};
        export {unpackAppearance};
        export {Entity$3 as Entity};
        export {Component$2 as Component};
    }
    namespace delivery {
        export {STATUSES$5 as STATUSES};
    }
    namespace deposit {
        export {MAX_YIELD};
        export {SAMPLE_TIME};
        export {STATUSES$4 as STATUSES};
        export {getSampleBounds};
        export {getSampleTime};
    }
    namespace dock {
        export {IDS$9 as IDS};
        export {TYPES$9 as TYPES};
        export {getType$5 as getType};
        export {getGroundDelay};
        export {Entity$1 as Entity};
        export {Component};
    }
    namespace dryDock {
        export {IDS$8 as IDS};
        export {STATUSES$3 as STATUSES};
        export {TYPES$8 as TYPES};
        export {getType$4 as getType};
    }
    export namespace Entity {
        export {getPolicyDetails};
        export {getPrepaidPolicyRate};
    }
    namespace exchange {
        export {IDS$6 as IDS};
        export {TYPES$6 as TYPES};
        export {getType$3 as getType};
    }
    namespace extractor {
        export {EXTRACTION_SETUP_TIME};
        export {MAX_EXTRACTION_TIME};
        export {MAX_YIELD_PER_RUN};
        export {STATUSES$2 as STATUSES};
        export {IDS$5 as IDS};
        export {TYPES$5 as TYPES};
        export {getExtractionTime};
        export {getType$2 as getType};
    }
    namespace fixed {
        export {Fixed64ONE};
        export {realToFixed64};
        export {fixed64ToReal};
        export {Fixed128ONE};
        export {realToFixed128};
        export {fixed128ToReal};
    }
    export const GM_ADALIA: number;
    export namespace Inventory {
        export {CATEGORIES};
        export {IDS$c as IDS};
        export {STATUSES$7 as STATUSES};
        export {TYPES$c as TYPES};
        export {getContents};
        export {getFilledCapacity};
        export {getType$8 as getType};
    }
    export namespace Lot {
        export {toId};
        export {toIndex};
        export {toPosition};
    }

    class MerkleTree {
        static sortedHash(a: any, b: any): string;

        static generateRoot(values: any): any;

        static generateTree(values: any, ...args: any[]): any;

        static generateProof(values: any, index: any): any;

        static generateProofFromTree(tree: any, index: any): any;

        static verify(leaf: any, root: any, proof: any): boolean;
    }

    namespace name {
        export {TYPES$4 as TYPES};
        export {getNameError};
        export {getType$1 as getType};
        export {getTypeRegex};
        export {isNameValid};
    }
    namespace order {
        export {FEE_SCALE};
        export {IDS$4 as IDS};
        export {STATUSES$1 as STATUSES};
        export {getBuyOrderDeposit};
        export {getFillBuyOrderWithdrawals};
        export {getFillSellOrderPayments};
        export {adjustedFee};
        export {netEffFeeBonus};
    }
    namespace permission {
        export {IDS$3 as IDS};
        export {TYPES$3 as TYPES};
        export {POLICY_IDS};
        export {POLICY_TYPES};
        export {MAX_POLICY_DURATION};
        export {getAdaliaPrimeLotRate};
        export {getPolicyDetails};
        export {getPrepaidPolicyRate};
        export {isPermitted};
        export {Entity};
    }
    const planet: Readonly<{
        __proto__: any;
        TYPES: {
            ROCKY: number;
            GAS_GIANT: number;
        };
        planets: ({
            radius: number;
            orbital: {
                a: number;
                e: number;
                i: number;
                o: number;
                w: number;
                m: number;
            };
            celestial: number;
            planetType?: undefined;
        } | {
            radius: number;
            orbital: {
                a: number;
                e: number;
                i: number;
                o: number;
                w: number;
                m: number;
            };
            planetType: number;
            celestial?: undefined;
        })[];
    }>;
    export namespace Process {
        export {IDS$1 as IDS};
        export {TYPES$1 as TYPES};
        export {getListByProcessorType};
        export {getProcessingTime};
        export {getSetupTime};
        export {getType};
    }
    export namespace Processor {
        export {IDS$2 as IDS};
        export {STATUSES};
    }
    export namespace Product {
        export {CATEGORIES$1 as CATEGORIES};
        export {CLASSIFICATIONS};
        export {IDS$e as IDS};
        export {TYPES$e as TYPES};
        export {getListByCategory};
        export {getListByClassification};
        export {getType$a as getType};
    }

    export class ProductionJSON {
        productionChainsJSON: {
            _hash: {};
            buildings: any[];
            processes: any[];
            products: any[];
            spectralTypes: any[];
        };
        processorIdToBuildingId: {};
        shipIdToProductId: {};
        buildingIdToProductId: {};
        rawMaterialIdToMiningProcessId: {};

        getHoursFromSeconds(seconds: any): string;

        getFormattedInputsOrOutputs(inputsOrOutputs: any): any[];

        getObjectHash(obj: any): number;

        generateJSON(): {
            _hash: {};
            buildings: any[];
            processes: any[];
            products: any[];
            spectralTypes: any[];
        };
    }

    namespace randomEvent {
        export {MIN_ROUNDS};
        export {IDS};
        export {TYPES};
        export {ACTION_IDS};
        export {ACTION_TYPES};
    }
    export const SIMPLEX_POLY_FIT: any;
    export namespace Ship {
        export {CONSTRUCTION_TYPES};
        export {EMERGENCY_PROP_GEN_TIME};
        export {IDS$b as IDS};
        export {STATUSES$6 as STATUSES};
        export {TYPES$b as TYPES};
        export {getConstructionType};
        export {getEmergencyPropellantAmount};
        export {getPropellantRequirement};
        export {getTimeUntilEmergencyPropellantFull};
        export {getType$7 as getType};
        export {getVariant};
        export {propellantToDeltaV};
        export {Entity$5 as Entity};
        export {Component$4 as Component};
    }
    namespace simplex {
        export {snoise};
        export {recursiveSNoise};
    }
    export namespace Station {
        export {IDS$a as IDS};
        export {TYPES$a as TYPES};
        export {getType$6 as getType};
        export {getEfficiency};
        export {Entity$2 as Entity};
        export {Component$1 as Component};
    }
    namespace system {
        export {formatSystemCalldata};
        export {getApproveErc20Call};
        export {getEscrowDepositCall};
        export {getEscrowWithdrawCall};
        export {getFormattedCall};
        export {getRunSystemCall};
        export {getTransferWithConfirmationCall};
        export {Systems};
    }

    export class Time {
        static toGameDuration(inRealityDuration: any, timeAcceleration: any): number;

        static toRealDuration(inGameDuration: any, timeAcceleration: any): number;

        static getSecondsPerAday(...args: any[]): number;

        static fromGameClockADays(adalianClockTime: any, ...args: any[]): Time;

        static fromOrbitADays(elapsedOrbitADays: any, ...args: any[]): Time;

        static fromUnixSeconds(unixTime: any, ...args: any[]): Time;

        static fromUnixMilliseconds(unixTime: any, ...args: any[]): Time;

        constructor(unixTimeMS: any, ...args: any[]);

        unixTimeMS: any;
        secondsPerAday: any;

        toGameClockADays(...args: any[]): number;

        toOrbitADays(): number;

        toDate(): Date;
    }

    namespace ethereum_abis {
        export const ArvadCitizenGenerator: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const ArvadCrewGenerator: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        export const ArvadLeadersGenerator: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        export const ArvadSpecialistGenerator: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        export const ArvadCrewSale: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const AsteroidBridge: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const AsteroidFeatures: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        export const AsteroidNames: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const AsteroidSale: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const AsteroidScans: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const AsteroidToken: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const CrewFeatures: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const CrewNames: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const CrewToken: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const CrewmateBridge: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const CrewmateToken: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const Crew: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const CrewBridge: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const IStarknetCore: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const Planets: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        const Ship_1: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export {Ship_1 as Ship};
        export const ShipBridge: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const StarknetSwayVolume: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const SwayBridge: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const SwayGovernor: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        export const SwayToken: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
    }
    namespace starknet_abis {
        export const Dispatcher: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            variants: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            variants?: undefined;
            members?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
        })[];
        export const Asteroid: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            members?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            variants: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            members?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        })[];
        const Crew_1: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            members?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            variants: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        })[];
        export {Crew_1 as Crew};
        export const Crewmate: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            members?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            variants: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
        })[];
        export const Designate: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            kind?: undefined;
            members?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            members?: undefined;
        })[];
        export const Escrow: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            members?: undefined;
            kind?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        })[];
        const Ship_2: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            members?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            variants: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            variants?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        })[];
        export {Ship_2 as Ship};
        export const Sway: ({
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            members?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            members: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            variants: {
                name: string;
                type: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            inputs: {
                name: string;
                type: string;
            }[];
            outputs: {
                type: string;
            }[];
            state_mutability: string;
            members?: undefined;
            variants?: undefined;
            kind?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            members: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            variants?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        } | {
            type: string;
            name: string;
            kind: string;
            variants: {
                name: string;
                type: string;
                kind: string;
            }[];
            inputs?: undefined;
            members?: undefined;
            outputs?: undefined;
            state_mutability?: undefined;
        })[];
    }

    function toStandard(address: any, explicitChain: any): string;

    function areEqual(address1: any, address2: any, chain1: any, chain2: any): boolean;

    function getChain(address: any): "ethereum" | "starknet";

    namespace BONUS_IDS {
        const YIELD_1: number;
        const YIELD_2: number;
        const YIELD_3: number;
        const VOLATILE_1: number;
        const VOLATILE_2: number;
        const VOLATILE_3: number;
        const METAL_1: number;
        const METAL_2: number;
        const METAL_3: number;
        const ORGANIC_1: number;
        const ORGANIC_2: number;
        const ORGANIC_3: number;
        const RARE_EARTH: number;
        const FISSILE: number;
    }
    const FREE_TRANSPORT_RADIUS: number;
    const HOPPER_SPEED: number;
    const MAX_LOT_REGIONS: number;
    const MAX_RADIUS: number;
    const RARITIES: string[];
    const SCANNING_TIME: number;
    namespace SCAN_STATUSES {
        const UNSCANNED: number;
        const SURFACE_SCANNING: number;
        const SURFACE_SCANNED: number;
        const RESOURCE_SCANNING: number;
        const RESOURCE_SCANNED: number;
    }
    const SIZES: string[];
    namespace SPECTRAL_IDS {
        const C_TYPE: number;
        const CM_TYPE: number;
        const CI_TYPE: number;
        const CS_TYPE: number;
        const CMS_TYPE: number;
        const CIS_TYPE: number;
        const S_TYPE: number;
        const SM_TYPE: number;
        const SI_TYPE: number;
        const M_TYPE: number;
        const I_TYPE: number;
    }
    const SPECTRAL_TYPES: {
        [x: number]: {
            name: string;
            density: number;
            resources: number[];
        };
    };
    const TOTAL_ASTEROIDS: number;

    function getAbundanceAtLot(asteroidId: any, lotIndex: any, resourceId: any, abundances: any): number;

    function getAbundanceAtPosition(point: any, settings: any): number;

    function getAbundanceMapSettings(asteroidId: any, resourceId: any, abundances: any): {
        abundance: any;
        octaves: number;
        polyParams: any;
        pointScale: number;
        pointShift: any[];
    };

    function getAbundances(packed: any): {};

    function getBaseName(asteroidId: any, spectralType: any): string;

    function getBonus(num: any): any;

    function getBonusByResource(bonuses: any, resourceId: any): {
        bonuses: any[];
        totalBonus: number;
    };

    function getBonuses(packed: any, spectralType: any): any[];

    function getBoostFromPurchaseOrder(purchaseOrder: any): 1 | 2 | 3 | 4;

    function getClosestLots(_ref: any): number[];

    function getHopperTravelTime(distance: any, ...args: any[]): number;

    function getLotDistance(asteroidId: any, originLotIndex: any, destLotIndex: any): number;

    function getLotPosition(asteroidId: any, lotIndex: any, ...args: any[]): number[];

    function getLotRegionTally(...args: any[]): number;

    function getLotTravelTime(asteroidId: any, originLotIndex: any, destLotIndex: any, ...args: any[]): number;

    function getMass(spectralType: any, radius: any): number;

    function getRadius(asteroidId: any): number;

    function getRarity(...args: any[]): string;

    function getRegionsOfLotPositions(flatPositions: any, regionTally: any): Int16Array;

    function getSeed(asteroidId: any): string;

    function getSize(radius: any): string;

    function getSpectralType(spectralTypeId: any): string;

    function getSurfaceArea(asteroidId: any, ...args: any[]): number;

    function getUnpackedAsteroidDetails(packed: any): {
        i: number;
        r: number;
        spectralType: number;
        orbital: {
            a: number;
            e: number;
            i: number;
            o: number;
            w: number;
            m: number;
        };
    }[];

    namespace Entity$4 {
        function getBaseName(asteroid: any): string;

        function getRadius(asteroid: any): any;

        function getSurfaceArea(asteroid: any): number;

        function getAbundances(asteroid: any): {};

        function getBonuses(asteroid: any): any[];

        function getBonusByResource(asteroid: any, resourceId: any): {
            bonuses: any[];
            totalBonus: number;
        };

        function getRarity(asteroid: any): string;

        function getMass(asteroid: any): number;

        function getSize(asteroid: any): string;

        function getSpectralType(asteroid: any): string;

        function getEscapeVelocity(asteroid: any): number;

        function getSeed(asteroid: any): string;

        function getAbundanceAtLot(asteroid: any, lotIndex: any, resourceId: any): number;
    }
    namespace Component$3 {
        function getRadius(celestial: any): any;

        function getSurfaceArea(celestial: any): number;

        function getAbundances(celestial: any): {};

        function getBonuses(celestial: any): any[];

        function getBonusByResource(celestial: any, resourceId: any): {
            bonuses: any[];
            totalBonus: number;
        };

        function getRarity(celestial: any): string;

        function getMass(celestial: any): number;

        function getSize(celestial: any): string;

        function getSpectralType(celestial: any): string;

        function getEscapeVelocity(celestial: any): number;
    }
    const TYPES$d: {
        [x: number]: {
            i: number;
            name: string;
            description: string;
        };
    };
    const CONSTRUCTION_TYPES$1: {
        [x: number]: {
            constructionTime: number;
            requirements: {
                [x: number]: number;
            };
        };
    };
    namespace CONSTRUCTION_STATUSES {
        const UNPLANNED: number;
        const PLANNED: number;
        const UNDER_CONSTRUCTION: number;
        const OPERATIONAL: number;
    }
    const CONSTRUCTION_STATUS_LABELS: {
        [x: number]: string;
    };
    const DECONSTRUCTION_PENALTY: number;
    const GRACE_PERIOD: number;
    namespace IDS$d {
        const EMPTY_LOT: number;
        const WAREHOUSE: number;
        const EXTRACTOR: number;
        const REFINERY: number;
        const BIOREACTOR: number;
        const FACTORY: number;
        const SHIPYARD: number;
        const SPACEPORT: number;
        const MARKETPLACE: number;
        const HABITAT: number;
    }

    function getConstructionTime(buildingType: any, ...args: any[]): number;

    function getConstructionType$1(type: any): any;

    function getType$9(type: any): any;

    const CREWMATE_STACKING_BONUS_EFFICIENCY: number[];
    const CREWMATE_FOOD_PER_YEAR: number;
    const STARVING_MULTIPLIER: number;

    function getAbilityBonus(abilityId: any, ...args: any[]): {
        name: string;
        class: {};
        traits: {};
        titles: {};
        crewmatesMultiplier: number;
    };

    function getCurrentFoodRatio(...args: any[]): number;

    function getFoodMultiplier(...args: any[]): number;

    function getTimeSinceFed(currentFoodRatio: any, ...args: any[]): number;

    function getAbilityBonusFromFood(timeSinceFed: any, ...args: any[]): {
        foodMultiplier: number;
    };

    namespace ABILITY_IDS {
        const CORE_SAMPLE_TIME: number;
        const CORE_SAMPLE_QUALITY: number;
        const HOPPER_TRANSPORT_TIME: number;
        const EXTRACTION_TIME: number;
        const CONSTRUCTION_TIME: number;
        const INVENTORY_MASS_CAPACITY: number;
        const PROPELLANT_EXHAUST_VELOCITY: number;
        const REFINING_TIME: number;
        const MANUFACTURING_TIME: number;
        const REACTION_TIME: number;
        const FREE_TRANSPORT_DISTANCE: number;
        const DECONSTRUCTION_YIELD: number;
        const SECONDARY_REFINING_YIELD: number;
        const FOOD_CONSUMPTION_TIME: number;
        const FOOD_RATIONING_PENALTY: number;
        const MARKETPLACE_FEE_ENFORCEMENT: number;
        const MARKETPLACE_FEE_REDUCTION: number;
        const PROPELLANT_FLOW_RATE: number;
        const INVENTORY_VOLUME_CAPACITY: number;
        const SHIP_INTEGRATION_TIME: number;
    }
    const ABILITY_TYPES: {
        [x: number]: {
            name: string;
            class: number;
            departments: {
                [x: number]: number;
            };
            traits: {
                [x: number]: number;
            };
            notFurtherModified?: undefined;
        } | {
            name: string;
            class: number;
            traits: {
                [x: number]: number;
            };
            notFurtherModified: boolean;
            departments?: undefined;
        } | {
            name: string;
            class: number;
            departments: {
                [x: number]: number;
            };
            traits?: undefined;
            notFurtherModified?: undefined;
        } | {
            name: string;
            departments: {
                [x: number]: number;
            };
            traits: {
                [x: number]: number;
            };
            class?: undefined;
            notFurtherModified?: undefined;
        } | {
            name: string;
            class: number;
            departments?: undefined;
            traits?: undefined;
            notFurtherModified?: undefined;
        } | {
            name: string;
            traits: {
                [x: number]: number;
            };
            notFurtherModified: boolean;
            class?: undefined;
            departments?: undefined;
        } | {
            name: string;
            departments: {
                [x: number]: number;
            };
            notFurtherModified: boolean;
            class?: undefined;
            traits?: undefined;
        } | {
            name: string;
            class: number;
            departments: {
                [x: number]: number;
            };
            traits: {
                [x: number]: number;
            };
            notFurtherModified: boolean;
        } | {
            name: string;
            traits: {
                [x: number]: number;
            };
            class?: undefined;
            departments?: undefined;
            notFurtherModified?: undefined;
        } | {
            name: string;
            departments: {
                [x: number]: number;
            };
            traits: {
                [x: number]: number;
            };
            notFurtherModified: boolean;
            class?: undefined;
        } | {
            name: string;
            departments: {
                [x: number]: number;
            };
            class?: undefined;
            traits?: undefined;
            notFurtherModified?: undefined;
        };
    };
    const CLASSES: {
        0: {
            name: string;
            description: string;
        };
        1: {
            name: string;
            description: string;
        };
        2: {
            name: string;
            description: string;
        };
        3: {
            name: string;
            description: string;
        };
        4: {
            name: string;
            description: string;
        };
        5: {
            name: string;
            description: string;
        };
    };
    namespace CLASS_IDS {
        const UNDECIDED: number;
        const PILOT: number;
        const ENGINEER: number;
        const MINER: number;
        const MERCHANT: number;
        const SCIENTIST: number;
    }
    const CLOTHES: {
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
        6: {
            name: string;
        };
        7: {
            name: string;
        };
        8: {
            name: string;
        };
        9: {
            name: string;
        };
        10: {
            name: string;
        };
        11: {
            name: string;
        };
        12: {
            name: string;
        };
        13: {
            name: string;
        };
        14: {
            name: string;
        };
        15: {
            name: string;
        };
        16: {
            name: string;
        };
        17: {
            name: string;
        };
        18: {
            name: string;
        };
        19: {
            name: string;
        };
        20: {
            name: string;
        };
        21: {
            name: string;
        };
        22: {
            name: string;
        };
        23: {
            name: string;
        };
        24: {
            name: string;
        };
        25: {
            name: string;
        };
        26: {
            name: string;
        };
        27: {
            name: string;
        };
        28: {
            name: string;
        };
        29: {
            name: string;
        };
        30: {
            name: string;
        };
        31: {
            name: string;
        };
        32: {
            name: string;
        };
        33: {
            name: string;
        };
        34: {
            name: string;
        };
        35: {
            name: string;
        };
        36: {
            name: string;
        };
        37: {
            name: string;
        };
        38: {
            name: string;
        };
        39: {
            name: string;
        };
        40: {
            name: string;
        };
        41: {
            name: string;
        };
    };
    const COLLECTIONS: {
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
    };
    namespace COLLECTION_IDS {
        const ARVAD_SPECIALIST: number;
        const ARVAD_CITIZEN: number;
        const ARVAD_LEADERSHIP: number;
        const ADALIAN: number;
    }
    const DEPARTMENTS: {
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
        6: {
            name: string;
        };
        7: {
            name: string;
        };
        8: {
            name: string;
        };
        9: {
            name: string;
        };
        10: {
            name: string;
        };
        11: {
            name: string;
        };
        12: {
            name: string;
        };
        13: {
            name: string;
        };
    };
    namespace DEPARTMENT_IDS {
        const NAVIGATION: number;
        const EDUCATION: number;
        const KNOWLEDGE: number;
        const MEDICINE: number;
        const SECURITY: number;
        const LOGISTICS: number;
        const MAINTENANCE: number;
        const TECHNOLOGY: number;
        const ENGINEERING: number;
        const FOOD_PRODUCTION: number;
        const FOOD_PREPARATION: number;
        const ARTS_ENTERTAINMENT: number;
        const MANAGEMENT: number;
    }
    const FACES: {
        0: {
            name: string;
        };
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
        6: {
            name: string;
        };
        7: {
            name: string;
        };
    };
    const GENDERS: {
        1: {
            name: string;
        };
        2: {
            name: string;
        };
    };
    const HAIR_COLORS: {
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
    };
    const HAIRS: {
        0: {
            name: string;
        };
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
        6: {
            name: string;
        };
        7: {
            name: string;
        };
        8: {
            name: string;
        };
        9: {
            name: string;
        };
        10: {
            name: string;
        };
        11: {
            name: string;
        };
    };
    const HEADS: {
        0: {
            name: string;
        };
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
        6: {
            name: string;
        };
        7: {
            name: string;
        };
        8: {
            name: string;
        };
        9: {
            name: string;
        };
        10: {
            name: string;
        };
        11: {
            name: string;
        };
        12: {
            name: string;
        };
        13: {
            name: string;
        };
        14: {
            name: string;
        };
        15: {
            name: string;
        };
        16: {
            name: string;
        };
    };
    const ITEMS: {
        0: {
            name: string;
        };
        1: {
            name: string;
        };
        2: {
            name: string;
        };
        3: {
            name: string;
        };
        4: {
            name: string;
        };
        5: {
            name: string;
        };
        6: {
            name: string;
        };
        7: {
            name: string;
        };
        8: {
            name: string;
        };
    };
    const TITLES: {
        0: {
            name: string;
        };
        1: {
            name: string;
            department: number;
            tier: number;
        };
        2: {
            name: string;
            department: number;
            tier: number;
        };
        3: {
            name: string;
            department: number;
            tier: number;
        };
        4: {
            name: string;
            department: number;
            tier: number;
        };
        5: {
            name: string;
            department: number;
            tier: number;
        };
        6: {
            name: string;
            department: number;
            tier: number;
        };
        7: {
            name: string;
            department: number;
            tier: number;
        };
        8: {
            name: string;
            department: number;
            tier: number;
        };
        9: {
            name: string;
            department: number;
            tier: number;
        };
        10: {
            name: string;
            department: number;
            tier: number;
        };
        11: {
            name: string;
            department: number;
            tier: number;
        };
        12: {
            name: string;
            department: number;
            tier: number;
        };
        13: {
            name: string;
            department: number;
            tier: number;
        };
        14: {
            name: string;
            department: number;
            tier: number;
        };
        15: {
            name: string;
            department: number;
            tier: number;
        };
        16: {
            name: string;
            department: number;
            tier: number;
        };
        17: {
            name: string;
            department: number;
            tier: number;
        };
        18: {
            name: string;
            department: number;
            tier: number;
        };
        19: {
            name: string;
            department: number;
            tier: number;
        };
        20: {
            name: string;
            department: number;
            tier: number;
        };
        21: {
            name: string;
            department: number;
            tier: number;
        };
        22: {
            name: string;
            department: number;
            tier: number;
        };
        23: {
            name: string;
            department: number;
            tier: number;
        };
        24: {
            name: string;
            department: number;
            tier: number;
        };
        25: {
            name: string;
            department: number;
            tier: number;
        };
        26: {
            name: string;
            department: number;
            tier: number;
        };
        27: {
            name: string;
            department: number;
            tier: number;
        };
        28: {
            name: string;
            department: number;
            tier: number;
        };
        29: {
            name: string;
            department: number;
            tier: number;
        };
        30: {
            name: string;
            department: number;
            tier: number;
        };
        31: {
            name: string;
            department: number;
            tier: number;
        };
        32: {
            name: string;
            department: number;
            tier: number;
        };
        33: {
            name: string;
            department: number;
            tier: number;
        };
        34: {
            name: string;
            department: number;
            tier: number;
        };
        35: {
            name: string;
            department: number;
            tier: number;
        };
        36: {
            name: string;
            department: number;
            tier: number;
        };
        37: {
            name: string;
            department: number;
            tier: number;
        };
        38: {
            name: string;
            department: number;
            tier: number;
        };
        39: {
            name: string;
            department: number;
            tier: number;
        };
        40: {
            name: string;
            department: number;
            tier: number;
        };
        41: {
            name: string;
            department: number;
            tier: number;
        };
        42: {
            name: string;
            department: number;
            tier: number;
        };
        43: {
            name: string;
            department: number;
            tier: number;
        };
        44: {
            name: string;
            department: number;
            tier: number;
        };
        45: {
            name: string;
            department: number;
            tier: number;
        };
        46: {
            name: string;
            department: number;
            tier: number;
        };
        47: {
            name: string;
            department: number;
            tier: number;
        };
        48: {
            name: string;
            department: number;
            tier: number;
        };
        49: {
            name: string;
            department: number;
            tier: number;
        };
        50: {
            name: string;
            department: number;
            tier: number;
        };
        51: {
            name: string;
            department: number;
            tier: number;
        };
        52: {
            name: string;
            department: number;
            tier: number;
        };
        53: {
            name: string;
            department: number;
            tier: number;
        };
        54: {
            name: string;
            department: number;
            tier: number;
        };
        55: {
            name: string;
            department: number;
            tier: number;
        };
        56: {
            name: string;
            department: number;
            tier: number;
        };
        57: {
            name: string;
            department: number;
            tier: number;
        };
        58: {
            name: string;
            department: number;
            tier: number;
        };
        59: {
            name: string;
            department: number;
            tier: number;
        };
        60: {
            name: string;
            department: number;
            tier: number;
        };
        61: {
            name: string;
            department: number;
            tier: number;
        };
        62: {
            name: string;
            department: number;
            tier: number;
        };
        63: {
            name: string;
            department: number;
            tier: number;
        };
        64: {
            name: string;
            department: number;
            tier: number;
        };
        65: {
            name: string;
            department: number;
            tier: number;
        };
        66: {
            name: string;
        };
        67: {
            name: string;
        };
    };
    namespace TRAIT_TYPES {
        const COSMETIC: string;
        const IMPACTFUL: string;
    }
    const TRAITS: {
        1: {
            name: string;
            type: string;
            description: string;
        };
        2: {
            name: string;
            type: string;
            description: string;
        };
        3: {
            name: string;
            type: string;
            description: string;
        };
        4: {
            name: string;
            type: string;
            description: string;
        };
        5: {
            name: string;
            type: string;
            description: string;
        };
        6: {
            name: string;
            type: string;
            description: string;
        };
        7: {
            name: string;
            type: string;
            description: string;
        };
        8: {
            name: string;
            type: string;
            description: string;
        };
        9: {
            name: string;
            type: string;
            description: string;
        };
        10: {
            name: string;
            type: string;
            description: string;
        };
        11: {
            name: string;
            type: string;
            description: string;
        };
        12: {
            name: string;
            type: string;
            description: string;
        };
        13: {
            name: string;
            type: string;
            description: string;
        };
        14: {
            name: string;
            type: string;
            description: string;
        };
        15: {
            name: string;
            type: string;
            description: string;
        };
        16: {
            name: string;
            type: string;
            description: string;
        };
        17: {
            name: string;
            type: string;
            description: string;
        };
        18: {
            name: string;
            type: string;
            description: string;
        };
        19: {
            name: string;
            type: string;
            description: string;
        };
        20: {
            name: string;
            type: string;
            description: string;
        };
        21: {
            name: string;
            type: string;
            description: string;
        };
        22: {
            name: string;
            type: string;
            description: string;
        };
        23: {
            name: string;
            type: string;
            description: string;
        };
        24: {
            name: string;
            type: string;
            description: string;
        };
        25: {
            name: string;
            type: string;
            description: string;
        };
        26: {
            name: string;
            type: string;
            description: string;
        };
        27: {
            name: string;
            type: string;
            description: string;
        };
        28: {
            name: string;
            type: string;
            description: string;
        };
        29: {
            name: string;
            type: string;
            description: string;
        };
        30: {
            name: string;
            type: string;
            description: string;
        };
        31: {
            name: string;
            type: string;
            description: string;
        };
        32: {
            name: string;
            type: string;
            description: string;
        };
        33: {
            name: string;
            type: string;
            description: string;
        };
        34: {
            name: string;
            type: string;
            description: string;
        };
        35: {
            name: string;
            type: string;
            description: string;
        };
        36: {
            name: string;
            type: string;
            description: string;
        };
        37: {
            name: string;
            type: string;
            description: string;
        };
        38: {
            name: string;
            type: string;
            description: string;
        };
        39: {
            name: string;
            type: string;
            description: string;
        };
        40: {
            name: string;
            type: string;
            description: string;
        };
        41: {
            name: string;
            type: string;
            description: string;
        };
        42: {
            name: string;
            type: string;
            description: string;
        };
        43: {
            name: string;
            type: string;
            description: string;
        };
        44: {
            name: string;
            type: string;
            description: string;
        };
        45: {
            name: string;
            type: string;
            description: string;
        };
        46: {
            name: string;
            type: string;
            description: string;
        };
        47: {
            name: string;
            type: string;
            description: string;
        };
        48: {
            name: string;
            type: string;
            description: string;
        };
        49: {
            name: string;
            type: string;
            description: string;
        };
        50: {
            name: string;
            type: string;
            description: string;
        };
    };
    namespace TRAIT_IDS {
        const DRIVE_SURVIVAL: number;
        const DRIVE_SERVICE: number;
        const DRIVE_GLORY: number;
        const DRIVE_COMMAND: number;
        const ADVENTUROUS: number;
        const AMBITIOUS: number;
        const ARROGANT: number;
        const CAUTIOUS: number;
        const CREATIVE: number;
        const CURIOUS: number;
        const FIERCE: number;
        const FLEXIBLE: number;
        const FRANTIC: number;
        const HOPEFUL: number;
        const INDEPENDENT: number;
        const IRRATIONAL: number;
        const LOYAL: number;
        const PRAGMATIC: number;
        const RATIONAL: number;
        const RECKLESS: number;
        const REGRESSIVE: number;
        const SERIOUS: number;
        const STEADFAST: number;
        const COUNCIL_LOYALIST: number;
        const COUNCIL_MODERATE: number;
        const INDEPENDENT_MODERATE: number;
        const INDEPENDENT_RADICAL: number;
        const NAVIGATOR: number;
        const DIETITIAN: number;
        const REFINER: number;
        const SURVEYOR: number;
        const HAULER: number;
        const OPTIMISTIC: number;
        const THOUGHTFUL: number;
        const PESSIMISTIC: number;
        const RIGHTEOUS: number;
        const COMMUNAL: number;
        const IMPARTIAL: number;
        const ENTERPRISING: number;
        const OPPORTUNISTIC: number;
        const BUSTER: number;
        const MOGUL: number;
        const SCHOLAR: number;
        const RECYCLER: number;
        const MECHANIC: number;
        const OPERATOR: number;
        const LOGISTICIAN: number;
        const EXPERIMENTER: number;
        const BUILDER: number;
        const PROSPECTOR: number;
    }

    function getAbility(abilityId: any): {
        name: string;
        class: number;
        departments: {
            [x: number]: number;
        };
        traits: {
            [x: number]: number;
        };
        notFurtherModified?: undefined;
    } | {
        name: string;
        class: number;
        traits: {
            [x: number]: number;
        };
        notFurtherModified: boolean;
        departments?: undefined;
    } | {
        name: string;
        class: number;
        departments: {
            [x: number]: number;
        };
        traits?: undefined;
        notFurtherModified?: undefined;
    } | {
        name: string;
        departments: {
            [x: number]: number;
        };
        traits: {
            [x: number]: number;
        };
        class?: undefined;
        notFurtherModified?: undefined;
    } | {
        name: string;
        class: number;
        departments?: undefined;
        traits?: undefined;
        notFurtherModified?: undefined;
    } | {
        name: string;
        traits: {
            [x: number]: number;
        };
        notFurtherModified: boolean;
        class?: undefined;
        departments?: undefined;
    } | {
        name: string;
        departments: {
            [x: number]: number;
        };
        notFurtherModified: boolean;
        class?: undefined;
        traits?: undefined;
    } | {
        name: string;
        class: number;
        departments: {
            [x: number]: number;
        };
        traits: {
            [x: number]: number;
        };
        notFurtherModified: boolean;
    } | {
        name: string;
        traits: {
            [x: number]: number;
        };
        class?: undefined;
        departments?: undefined;
        notFurtherModified?: undefined;
    } | {
        name: string;
        departments: {
            [x: number]: number;
        };
        traits: {
            [x: number]: number;
        };
        notFurtherModified: boolean;
        class?: undefined;
    } | {
        name: string;
        departments: {
            [x: number]: number;
        };
        class?: undefined;
        traits?: undefined;
        notFurtherModified?: undefined;
    };

    function getClass(classId: any): any;

    function getClothes(clothesId: any): any;

    function getCollection(collectionId: any): any;

    function getCombinedTraits(crewmate: any): any[];

    function getFace(faceId: any): any;

    function getGender(genderId: any): any;

    function getHair(hairId: any): any;

    function getHairColor(hairColorId: any): any;

    function getHead(headId: any): any;

    function getItem(itemId: any): any;

    function getTitle(titleId: any): any;

    function getTrait(traitId: any): any;

    function nextTraits(collection: any, ...args: any[]): any[];

    function packAppearance(details: any): string;

    function unpackAppearance(appearance: any): {};

    namespace Entity$3 {
        function getCollection(entity: any): any;

        function getClass(entity: any): any;

        function getTitle(entity: any): any;

        function getCombinedTraits(entity: any): any[];

        function unpackAppearance(entity: any): {};

        function getItem(entity: any): any;

        function getFace(entity: any): any;

        function getGender(entity: any): any;

        function getHairColor(entity: any): any;

        function getHair(entity: any): any;

        function getHead(entity: any): any;

        function getClothes(entity: any): any;
    }
    namespace Component$2 {
        export function getCollection(crewmate: any): any;

        export function getClass(crewmate: any): any;

        export function getTitle(crewmate: any): any;

        export {getCombinedTraits};

        export function unpackAppearance(crewmate: any): {};

        export function getItem(crewmate: any): any;

        export function getFace(crewmate: any): any;

        export function getGender(crewmate: any): any;

        export function getHairColor(crewmate: any): any;

        export function getHair(crewmate: any): any;

        export function getHead(crewmate: any): any;

        export function getClothes(crewmate: any): any;
    }
    namespace STATUSES$5 {
        const PACKAGED: number;
        const ON_HOLD: number;
        const SENT: number;
        const COMPLETE: number;
    }
    const MAX_YIELD: number;
    const SAMPLE_TIME: number;
    namespace STATUSES$4 {
        const UNDISCOVERED: number;
        const SAMPLING: number;
        const SAMPLED: number;
        const USED: number;
    }

    function getSampleBounds(abundance: any, ...args: any[]): {
        lower: any;
        upper: number;
    };

    function getSampleTime(...args: any[]): number;

    namespace IDS$9 {
        const BASIC: number;
    }
    const TYPES$9: {
        [x: number]: {
            i: number;
            cap: number;
            delayPerShip: number;
        };
    };

    function getType$5(type: any): any;

    function getGroundDelay(dockType: any, dockedShips: any): number;

    namespace Entity$1 {
        function getGroundDelay(dockable: any): number;
    }
    namespace Component {
        function getGroundDelay(dock: any): number;
    }
    namespace IDS$8 {
        const BASIC_1: number;
        export {BASIC_1 as BASIC};
    }
    namespace STATUSES$3 {
        const IDLE: number;
        const RUNNING: number;
    }
    const TYPES$8: {
        [x: number]: {
            i: number;
            maxMass: number;
            maxVolume: number;
        };
    };

    function getType$4(type: any): any;

    function getPolicyDetails(entity: any, ...args: any[]): any;

    function getPrepaidPolicyRate(entity: any): any;

    namespace IDS$6 {
        const BASIC_2: number;
        export {BASIC_2 as BASIC};
    }
    const TYPES$6: {
        [x: number]: {
            i: number;
            productCap: number;
        };
    };

    function getType$3(type: any): any;

    const EXTRACTION_SETUP_TIME: number;
    const MAX_EXTRACTION_TIME: number;
    const MAX_YIELD_PER_RUN: number;
    namespace STATUSES$2 {
        const IDLE_1: number;
        export {IDLE_1 as IDLE};
        const RUNNING_1: number;
        export {RUNNING_1 as RUNNING};
    }
    namespace IDS$5 {
        const BASIC_3: number;
        export {BASIC_3 as BASIC};
    }
    const TYPES$5: {
        [x: number]: {
            i: number;
        };
    };

    function getExtractionTime(targetYield: any, remainingYield: any, ...args: any[]): number;

    function getType$2(type: any): any;

    const Fixed64ONE: bigint;

    function realToFixed64(real: any): bigint;

    function fixed64ToReal(fixed: any): number;

    const Fixed128ONE: bigint;

    function realToFixed128(real: any): bigint;

    function fixed128ToReal(fixed: any): number;

    namespace CATEGORIES {
        const SITE: string;
        const PRIMARY: string;
        const PROPELLANT: string;
    }
    namespace IDS$c {
        const WAREHOUSE_SITE: number;
        const EXTRACTOR_SITE: number;
        const REFINERY_SITE: number;
        const BIOREACTOR_SITE: number;
        const FACTORY_SITE: number;
        const SHIPYARD_SITE: number;
        const SPACEPORT_SITE: number;
        const MARKETPLACE_SITE: number;
        const HABITAT_SITE: number;
        const WAREHOUSE_PRIMARY: number;
        const PROPELLANT_TINY: number;
        const PROPELLANT_SMALL: number;
        const PROPELLANT_MEDIUM: number;
        const PROPELLANT_LARGE: number;
        const CARGO_SMALL: number;
        const CARGO_MEDIUM: number;
        const CARGO_LARGE: number;
    }
    namespace STATUSES$7 {
        const UNAVAILABLE: number;
        const AVAILABLE: number;
    }
    const TYPES$c: {
        [x: number]: {
            i: number;
            massConstraint: number;
            volumeConstraint: number;
            productConstraints: {
                [x: number]: number;
            };
            category: string;
        };
    };

    function getContents(products: any, ...args: any[]): {
        products: {};
        totals: {
            mass: number;
            volume: number;
        };
    };

    function getFilledCapacity(inventoryType: any, ...args: any[]): {
        filledMass: any;
        filledVolume: any;
    };

    function getType$8(type: any, ...args: any[]): any;

    function toId(asteroidId: any, lotIndex: any): number;

    function toIndex(lotId: any): number;

    function toPosition(entityOrLotId: any): {
        asteroidId: number;
        lotIndex: number;
    };

    const TYPES$4: {
        [x: number]: {
            min: number;
            max: number;
            alpha: boolean;
            num: boolean;
            sym: boolean;
        };
    };

    function getNameError(...args: any[]): string;

    function getType$1(entityType: any): any;

    function getTypeRegex(entityType: any): string;

    function isNameValid(...args: any[]): boolean;

    const FEE_SCALE: number;
    namespace IDS$4 {
        const LIMIT_BUY: number;
        const LIMIT_SELL: number;
    }
    namespace STATUSES$1 {
        const UNINITIALIZED: number;
        const OPEN: number;
        const FILLED: number;
        const CANCELLED: number;
    }

    function getBuyOrderDeposit(value: any, makerFee: any, ...args: any[]): any;

    function getFillBuyOrderWithdrawals(value: any, makerFee: any, takerFee: any, ...args: any[]): {
        toExchange: number;
        toPlayer: number;
    };

    function getFillSellOrderPayments(value: any, makerFee: any, takerFee: any, ...args: any[]): {
        toExchange: number;
        toPlayer: number;
    };

    function adjustedFee(fee: any, ...args: any[]): number;

    function netEffFeeBonus(bonus: any, ...args: any[]): any;

    namespace IDS$3 {
        export const USE_LOT: number;
        export const RUN_PROCESS: number;
        export const ADD_PRODUCTS: number;
        export const REMOVE_PRODUCTS: number;
        export const STATION_CREW: number;
        export const RECRUIT_CREWMATE: number;
        export const DOCK_SHIP: number;
        export const BUY: number;
        export const SELL: number;
        const LIMIT_BUY_1: number;
        export {LIMIT_BUY_1 as LIMIT_BUY};
        const LIMIT_SELL_1: number;
        export {LIMIT_SELL_1 as LIMIT_SELL};
        export const EXTRACT_RESOURCES: number;
        export const ASSEMBLE_SHIP: number;
    }
    const TYPES$3: {
        [x: number]: {
            name: string;
            isApplicable: (entity: any) => boolean;
            isExclusive: boolean;
        } | {
            name: string;
            isApplicable: (entity: any) => boolean;
            isExclusive?: undefined;
        };
    };
    namespace POLICY_IDS {
        const PRIVATE: number;
        const PUBLIC: number;
        const PREPAID: number;
        const CONTRACT: number;
    }
    const POLICY_TYPES: {
        [x: number]: {
            name: string;
            description: string;
            policyKey: string;
            agreementKey: any;
            additionSystem: string;
            removalSystem: string;
            nameShort?: undefined;
        } | {
            name: string;
            nameShort: string;
            description: string;
            policyKey: string;
            agreementKey: string;
            additionSystem: string;
            removalSystem: string;
        };
    };
    const MAX_POLICY_DURATION: number;

    function getAdaliaPrimeLotRate(policy: any, lotIndex: any): number;

    function isPermitted(crew: any, permission: any, hydratedTarget: any): boolean;

    namespace IDS$1 {
        const WATER_ELECTROLYSIS: number;
        const WATER_VACUUM_EVAPORATION_DESALINATION: number;
        const SABATIER_PROCESS: number;
        const OLIVINE_ENHANCED_WEATHERING: number;
        const BITUMEN_HYDRO_CRACKING: number;
        const TAENITE_ELECTROLYTIC_REFINING: number;
        const CALCITE_CALCINATION: number;
        const HUELS_PROCESS: number;
        const AMMONIA_CARBONATION: number;
        const SALT_SULFIDIZATION_AND_PHOSPHORIZATION: number;
        const BASIC_FOOD_COOKING_AND_PACKAGING: number;
        const TROILITE_CENTRIFUGAL_FROTH_FLOTATION: number;
        const SILICA_FUSING: number;
        const SILICA_PULTRUSION: number;
        const COPPER_WIRE_DRAWING: number;
        const SALTY_CEMENT_MIXING: number;
        const SALT_SELECTIVE_CRYSTALLIZATION: number;
        const NAPHTHA_STEAM_CRACKING: number;
        const STEEL_ALLOYING: number;
        const SILICA_CARBOTHERMIC_REDUCTION: number;
        const OSTWALD_PROCESS: number;
        const WET_SULFURIC_ACID_PROCESS: number;
        const FUNGAL_SOILBUILDING: number;
        const IRON_OXIDE_AND_SILICA_CARBOTHERMIC_REDUCTION: number;
        const METHANE_STEAM_REFORMING_AND_WATER_GAS_SHIFT: number;
        const ACETYLENE_OXALIC_ACID_PRODUCTION: number;
        const LEAD_SULFIDE_SMELTING: number;
        const TIN_SULFIDE_SMELTING: number;
        const IRON_SULFIDE_ROASTING: number;
        const HABER_BOSCH_PROCESS: number;
        const MOLYBDENUM_DISULFIDE_ROASTING: number;
        const SILICA_GAS_ATOMIZATION: number;
        const SOLDER_MANUFACTURING: number;
        const QUARTZ_FILAMENT_DRAWING_AND_WRAPPING: number;
        const STEEL_BEAM_ROLLING: number;
        const STEEL_SHEET_ROLLING: number;
        const STEEL_PIPE_ROLLING: number;
        const STEEL_WIRE_DRAWING: number;
        const PROPYLENE_AMMOXIDATION: number;
        const PROPYLENE_POLYMERIZATION: number;
        const MAGNESIUM_CHLORIDE_MOLTEN_SALT_ELECTROLYSIS: number;
        const SOLVAY_PROCESS: number;
        const BORON_TRIOXIDE_HYDRATION: number;
        const PYROXENE_ACID_LEACHING_DIGESTION_AND_ION_EXCHANGE: number;
        const APATITE_ACID_EXTRACTION: number;
        const HYDROGEN_COMBUSTION: number;
        const CARBON_MONOXIDE_COMBUSTION: number;
        const BORAX_ACID_EXTRACTION: number;
        const NITROGEN_CRYOCOOLING_AND_FRACTIONAL_DISTILLATION: number;
        const OLIVINE_ACID_LEACHING_AND_CALCINING: number;
        const ANORTHITE_FELDSPAR_ACID_LEACHING_AND_CARBONATION: number;
        const SODIUM_CHLORALKALAI_PROCESS: number;
        const POTASSIUM_CHLORALKALAI_PROCESS: number;
        const APATITE_ACID_RE_EXTRACTION: number;
        const AMMONIUM_CARBONATE_OXALATION: number;
        const XENOTIME_HOT_ACID_LEACHING: number;
        const MERRILLITE_HOT_ACID_LEACHING: number;
        const AMMONIA_CATALYTIC_CRACKING: number;
        const URANINITE_ACID_LEACHING_SOLVENT_EXTRACTION_AND_PRECIPITATION: number;
        const COFFINITE_ACID_LEACHING_SOLVENT_EXTRACTION_AND_PRECIPITATION: number;
        const ALUMINA_FORMING_AND_SINTERING: number;
        const AUSTENITIC_NICHROME_ALLOYING: number;
        const COPPER_WIRE_INSULATING: number;
        const SILICON_CZOCHRALSKI_PROCESS_AND_WAFER_SLICING: number;
        const STEEL_CABLE_LAYING: number;
        const ACRYLONITRILE_POLYMERIZATION: number;
        const SOYBEAN_GROWING: number;
        const BORIC_ACID_THERMAL_DECOMPOSITION: number;
        const LITHIUM_CARBONATE_CHLORINATION: number;
        const LITHIUM_SULFATE_CARBONATION: number;
        const IRON_OXIDE_DIRECT_REDUCTION: number;
        const ZINC_OXIDE_DIRECT_REDUCTION: number;
        const NICKEL_OXIDE_DIRECT_REDUCTION: number;
        const PIDGEON_PROCESS: number;
        const POLYPROPYLENE_CHLORINATION_AND_BASIFICATION: number;
        const POTATO_GROWING: number;
        const RARE_EARTHS_OXALATION_AND_CALCINATION: number;
        const AMMONIA_CHLORINATION: number;
        const HALL_HEROULT_PROCESS: number;
        const CALCIUM_CHLORIDE_MOLTEN_SALT_ELECTROLYSIS: number;
        const CEMENT_MIXING: number;
        const NATURAL_FLAVORINGS_GROWING: number;
        const YELLOWCAKE_DIGESTION_SOLVENT_EXTRACTION_AND_PRECIPITATION: number;
        const HYDROFLUORIC_ACID_COLD_ELECTROLYSIS: number;
        const RHABDITE_ROASTING_AND_ACID_EXTRACTION: number;
        const FERRITE_SINTERING: number;
        const DIODE_DOPING_AND_ASSEMBLY: number;
        const BALL_VALVE_MACHINING: number;
        const ALUMINIUM_BEAM_ROLLING: number;
        const ALUMINIUM_SHEET_ROLLING: number;
        const ALUMINIUM_PIPE_ROLLING: number;
        const POLYACRYLONITRILE_WEAVING: number;
        const COLD_GAS_THRUSTER_PRINTING: number;
        const POLYACRYLONITRILE_OXIDATION_AND_CARBONIZATION: number;
        const ALUMINIUM_SMALL_PROPELLANT_TANK_ASSEMBLY: number;
        const BOROSILICATE_GLASSMAKING: number;
        const BALL_BEARING_MACHINING_AND_ASSEMBLY: number;
        const LARGE_THRUST_BEARING_MACHINING_AND_ASSEMBLY: number;
        const BORON_TRIOXIDE_MAGNESIOTHERMIC_REDUCTION: number;
        const LITHIUM_CHLORIDE_MOLTEN_SALT_ELECTROLYSIS: number;
        const DIEPOXY_STEP_GROWTH_POLYMERIZATION: number;
        const RARE_EARTH_OXIDES_ION_EXCHANGE: number;
        const CALCIUM_OXIDE_ALUMINOTHERMIC_REDUCTION: number;
        const SODIUM_CHROMATE_ACIDIFICATION_AND_CRYSTALLIZATION: number;
        const SULFURIC_ACID_HOT_CATALYTIC_REDUCTION: number;
        const MOLYBDENUM_TRIOXIDE_ALUMINOTHERMIC_REDUCTION_AND_ALLOYING: number;
        const URANYL_NITRATE_REDOX_AND_PRECIPITATION: number;
        const SODIUM_TUNGSTATE_ION_EXCHANGE_PRECIPITATION_AND_CRYSTALLIZATION: number;
        const STAINLESS_STEEL_ALLOYING: number;
        const BOARD_PRINTING: number;
        const FERRITE_BEAD_INDUCTOR_WINDING: number;
        const CORE_DRILL_BIT_MILLING: number;
        const CORE_DRILL_THRUSTER_ASSEMBLY: number;
        const PARABOLIC_DISH_ASSEMBLY: number;
        const PHOTOVOLTAIC_PANEL_AMORPHIZATION_AND_ASSEMBLY: number;
        const LIPO_BATTERY_ASSEMBLY: number;
        const NEODYMIUM_OXIDE_CHLORINATION: number;
        const SODIUM_DICHROMATE_HOT_SULFUR_REDUCTION: number;
        const PHOTORESIST_EPOXY_STOICHIOMETRY_AND_PACKAGING: number;
        const AMMONIUM_DIURANATE_CALCINATION_AND_HYDROGEN_REDUCTION: number;
        const AMMONIUM_PARATUNGSTATE_CALCINATION_AND_HYDROGEN_REDUCTION: number;
        const ENGINE_BELL_ADDITIVE_MANUFACTURING: number;
        const STEEL_TRUSS_CONSTRUCTION: number;
        const ALUMINIUM_HULL_PLATE_CONSTRUCTION: number;
        const ALUMINIUM_TRUSS_CONSTRUCTION: number;
        const CARGO_MODULE_CONSTRUCTION: number;
        const ALUMINIUM_PRESSURE_VESSEL_CONSTRUCTION: number;
        const ALUMINIUM_PROPELLANT_TANK_CONSTRUCTION: number;
        const SHUTTLE_HULL_CONSTRUCTION: number;
        const LIGHT_TRANSPORT_HULL_CONSTRUCTION: number;
        const CARGO_RING_CONSTRUCTION: number;
        const HEAVY_TRANSPORT_HULL_CONSTRUCTION: number;
        const TUNGSTEN_GAS_ATOMIZATION: number;
        const HYDROGEN_CRYOCOOLING_AND_REACTOR_CONSUMABLES_STOICHIOMETRY: number;
        const STAINLESS_STEEL_SHEET_ROLLING: number;
        const STAINLESS_STEEL_PIPE_ROLLING: number;
        const SILICON_WAFER_CPU_PHOTOLITHOGRAPHY_BALL_BONDING_AND_ENCAPSULATION: number;
        const CORE_DRILL_ASSEMBLY: number;
        const NEODYMIUM_TRICHLORIDE_VACUUM_CALCIOTHERMIC_REDUCTION: number;
        const NEODYMIUM_TRICHLORIDE_MOLTEN_SALT_ELECTROLYSIS: number;
        const CHROMIA_ALUMINOTHERMIC_REDUCTION: number;
        const URANIUM_DIOXIDE_OXIDATION: number;
        const LEACHED_COFFINITE_FROTH_FLOTATION_SOLVENT_EXTRACTION_AND_PRECIPITATION: number;
        const ND_YAG_CZOCHRALSKI_PROCESS: number;
        const NICHROME_ALLOYING: number;
        const MAGNET_SINTERING_AND_MAGNETIZATION: number;
        const URANIUM_TETRAFLUORIDE_FLUORIDATION: number;
        const URANIUM_HEXAFLUORIDE_CENTRIFUGE_CASCADE_ENRICHMENT: number;
        const ND_YAG_LASER_ASSEMBLY: number;
        const THIN_FILM_RESISTOR_SPUTTERING_AND_LASER_TRIMMING: number;
        const HEUF6_MAGNESIOTHERMIC_REDUCTION_AND_FINE_DIVISION: number;
        const SPIRULINA_AND_CHLORELLA_ALGAE_GROWING: number;
        const PEDOT_BACTERIA_CULTURING: number;
        const BPA_BACTERIA_CULTURING: number;
        const POTASSIUM_HYDROXIDE_CARBONATION: number;
        const NOVOLAK_BACTERIA_CULTURING: number;
        const FERROCHROMIUM_ALLOYING: number;
        const POTASSIUM_CARBONATE_FLUORIDATION: number;
        const RHABDITE_SLAG_ACID_LEACHING: number;
        const TANTALATE_NIOBATE_LIQUID_LIQUID_EXTRACTION_AND_REDOX: number;
        const CARBON_DIOXIDE_FERROCATALYSIS: number;
        const POTASSIUM_HEPTAFLUOROTANTALATE_SODIOTHERMIC_REDUCTION: number;
        const RHABDITE_CARBOTHERMIC_REDUCTION: number;
        const POLYMER_TANTALUM_CAPACITOR_ASSEMBLY: number;
        const SURFACE_MOUNT_DEVICE_REEL_ASSEMBLY: number;
        const PICK_AND_PLACE_BOARD_POPULATION: number;
        const MOTOR_STATOR_ASSEMBLY: number;
        const MOTOR_ROTOR_ASSEMBLY: number;
        const BRUSHLESS_MOTOR_ASSEMBLY: number;
        const LANDING_LEG_ASSEMBLY: number;
        const LANDING_AUGER_ASSEMBLY: number;
        const PUMP_ASSEMBLY: number;
        const ANTENNA_ASSEMBLY: number;
        const FIBER_OPTIC_GYROSCOPE_ASSEMBLY: number;
        const STAR_TRACKER_ASSEMBLY: number;
        const COMPUTER_ASSEMBLY: number;
        const CONTROL_MOMENT_GYROSCOPE_ASSEMBLY: number;
        const ROBOTIC_ARM_ASSEMBLY: number;
        const FELDSPAR_ALUMINIUM_HYDROXIDE_CALCINATION: number;
        const FERROCHROMIUM_ROASTING_AND_HOT_BASE_LEACHING: number;
        const BERYLLIUM_CARBONATE_CALCINATION: number;
        const BERYLLIA_FORMING_AND_SINTERING: number;
        const SILICON_WAFER_CCD_PHOTOLITHOGRAPHY_BALL_BONDING_AND_PACKAGING: number;
        const HEAT_EXCHANGER_ASSEMBLY: number;
        const TURBOPUMP_ASSEMBLY: number;
        const LASER_DIODE_DOPING_AMORPHIZATION_AND_ASSEMBLY: number;
        const SEPARATOR_CENTRIFUGE_ASSEMBLY: number;
        const FUEL_MAKE_UP_TANK_ASSEMBLY: number;
        const NEON_MAKE_UP_TANK_ASSEMBLY: number;
        const LIGHTBULB_END_MODERATORS_ASSEMBLY: number;
        const COLD_GAS_TORQUE_THRUSTER_PRINTING: number;
        const FUSED_QUARTZ_LIGHTBULB_ADDITIVE_SUBTRACTIVE_ASSEMBLY: number;
        const REACTOR_PLUMBING_ASSEMBLY_SQUARED: number;
        const FLOW_DIVIDER_MODERATOR_ASSEMBLY: number;
        const NUCLEAR_LIGHTBULB_ASSEMBLY: number;
        const REACTOR_SHELL_ASSEMBLY: number;
        const CLOSED_CYCLE_GAS_CORE_NUCLEAR_REACTOR_ENGINE_ASSEMBLY: number;
        const HABITATION_MODULE_ASSEMBLY: number;
        const MOBILITY_MODULE_ASSEMBLY: number;
        const FLUIDS_AUTOMATION_MODULE_ASSEMBLY: number;
        const SOLIDS_AUTOMATION_MODULE_ASSEMBLY: number;
        const TERRAIN_INTERFACE_MODULE_ASSEMBLY: number;
        const AVIONICS_MODULE_ASSEMBLY: number;
        const ESCAPE_MODULE_ASSEMBLY: number;
        const ATTITUDE_CONTROL_MODULE_ASSEMBLY: number;
        const POWER_MODULE_ASSEMBLY: number;
        const THERMAL_MODULE_ASSEMBLY: number;
        const PROPULSION_MODULE_ASSEMBLY: number;
        const SULFUR_DIOXIDE_PLASMA_CATALYSIS: number;
        const PARKES_PROCESS: number;
        const BICARBONATE_SOLVAY_PROCESS: number;
        const SOLVAY_HOU_PROCESS: number;
        const BICARBONATE_SOLVAY_HOU_PROCESS: number;
        const SODIUM_BICARBONATE_CALCINATION: number;
        const EPOXY_STOICHIOMETRY_AND_PACKAGING: number;
        const PEDOT_ALGAE_GROWING: number;
        const BPA_ALGAE_GROWING: number;
        const NOVOLAK_ALGAE_GROWING: number;
    }
    const TYPES$1: {
        [x: number]: {
            i: number;
            name: string;
            processorType: number;
            setupTime: number;
            recipeTime: number;
            batched: boolean;
            inputs: {
                [x: number]: number;
            };
            outputs: {
                [x: number]: number;
            };
        };
    };

    function getListByProcessorType(processorType: any): {
        i: number;
        name: string;
        processorType: number;
        setupTime: number;
        recipeTime: number;
        batched: boolean;
        inputs: {
            [x: number]: number;
        };
        outputs: {
            [x: number]: number;
        };
    }[];

    function getProcessingTime(processId: any, recipes: any, ...args: any[]): number;

    function getSetupTime(processId: any, ...args: any[]): number;

    function getType(type: any): any;

    namespace IDS$2 {
        const REFINERY_1: number;
        export {REFINERY_1 as REFINERY};
        const FACTORY_1: number;
        export {FACTORY_1 as FACTORY};
        const BIOREACTOR_1: number;
        export {BIOREACTOR_1 as BIOREACTOR};
        const SHIPYARD_1: number;
        export {SHIPYARD_1 as SHIPYARD};
        export const DRY_DOCK: number;
    }
    namespace STATUSES {
        const IDLE_2: number;
        export {IDLE_2 as IDLE};
        const RUNNING_2: number;
        export {RUNNING_2 as RUNNING};
    }
    namespace CATEGORIES$1 {
        export const ACID: string;
        export const ADHESIVE: string;
        export const ALLOY: string;
        export const BASE: string;
        export const CARBONATE: string;
        export const CERAMIC: string;
        export const CONSTRUCTION: string;
        export const CRYSTAL: string;
        export const ELECTROMECHANICAL: string;
        export const ELECTRONICS: string;
        export const ELECTRO_OPTICAL: string;
        export const ENGINE_PART: string;
        export const FABRIC: string;
        const FISSILE_1: string;
        export {FISSILE_1 as FISSILE};
        export const FLUORIDE: string;
        export const FOOD: string;
        export const GROWN_ORGANIC: string;
        export const HULL_MODULE: string;
        export const INGREDIENT: string;
        export const INTEGRATION_MODULE: string;
        export const MECHANISM: string;
        export const METAL: string;
        export const NITRATE: string;
        export const NONMETAL: string;
        export const ORGANIC: string;
        export const ORGANIC_SUBSTRATE: string;
        export const OXIDE: string;
        export const PHOSPHATE: string;
        export const POLYMER: string;
        export const POWDER: string;
        export const PROCESSED_GLASS: string;
        export const PROCESSED_METAL: string;
        const PROPELLANT_1: string;
        export {PROPELLANT_1 as PROPELLANT};
        const RARE_EARTH_1: string;
        export {RARE_EARTH_1 as RARE_EARTH};
        export const REFINED_FISSILE: string;
        export const REFINED_GLASS: string;
        export const REFINED_METAL: string;
        export const REFINED_ORGANIC: string;
        export const REFINED_RARE_EARTH: string;
        export const REFINED_VOLATILE: string;
        export const SALT: string;
        export const SEMI_REFINED: string;
        export const SHIP_HULL: string;
        export const SHIP_PART: string;
        export const SULFATE: string;
        export const SULFIDE: string;
        export const TOOL: string;
        export const VOLATILE: string;
    }
    namespace CLASSIFICATIONS {
        const ASSEMBLY: string;
        const CROP: string;
        const MANUFACTURED_GOOD: string;
        const RAW_MATERIAL: string;
        const REFINED_MATERIAL: string;
    }
    namespace IDS$e {
        export const WATER: number;
        export const HYDROGEN: number;
        export const AMMONIA: number;
        export const NITROGEN: number;
        export const SULFUR_DIOXIDE: number;
        export const CARBON_DIOXIDE: number;
        export const CARBON_MONOXIDE: number;
        export const METHANE: number;
        export const APATITE: number;
        export const BITUMEN: number;
        export const CALCITE: number;
        export const FELDSPAR: number;
        export const OLIVINE: number;
        export const PYROXENE: number;
        export const COFFINITE: number;
        export const MERRILLITE: number;
        export const XENOTIME: number;
        export const RHABDITE: number;
        export const GRAPHITE: number;
        export const TAENITE: number;
        export const TROILITE: number;
        export const URANINITE: number;
        export const OXYGEN: number;
        export const DEIONIZED_WATER: number;
        export const RAW_SALTS: number;
        export const SILICA: number;
        export const NAPHTHA: number;
        export const SODIUM_BICARBONATE: number;
        export const IRON: number;
        export const COPPER: number;
        export const NICKEL: number;
        export const QUICKLIME: number;
        export const ACETYLENE: number;
        export const AMMONIUM_CARBONATE: number;
        export const TRIPLE_SUPERPHOSPHATE: number;
        export const PHOSPHATE_AND_SULFATE_SALTS: number;
        export const IRON_SULFIDE: number;
        export const LEAD_SULFIDE: number;
        export const TIN_SULFIDE: number;
        export const MOLYBDENUM_DISULFIDE: number;
        export const FUSED_QUARTZ: number;
        export const FIBERGLASS: number;
        export const BARE_COPPER_WIRE: number;
        export const CEMENT: number;
        export const SODIUM_CHLORIDE: number;
        export const POTASSIUM_CHLORIDE: number;
        export const BORAX: number;
        export const LITHIUM_CARBONATE: number;
        export const MAGNESIUM_CHLORIDE: number;
        export const PROPYLENE: number;
        export const SULFUR: number;
        export const STEEL: number;
        export const SILICON: number;
        export const NITRIC_ACID: number;
        export const SULFURIC_ACID: number;
        export const SOIL: number;
        export const FERROSILICON: number;
        export const WEATHERED_OLIVINE: number;
        export const OXALIC_ACID: number;
        export const SILVER: number;
        export const GOLD: number;
        export const TIN: number;
        export const IRON_OXIDE: number;
        export const SPIRULINA_AND_CHLORELLA_ALGAE: number;
        export const MOLYBDENUM_TRIOXIDE: number;
        export const SILICA_POWDER: number;
        export const SOLDER: number;
        export const FIBER_OPTIC_CABLE: number;
        export const STEEL_BEAM: number;
        export const STEEL_SHEET: number;
        export const STEEL_PIPE: number;
        export const STEEL_WIRE: number;
        export const ACRYLONITRILE: number;
        export const POLYPROPYLENE: number;
        export const MAGNESIUM: number;
        export const CHLORINE: number;
        export const SODIUM_CARBONATE: number;
        export const CALCIUM_CHLORIDE: number;
        export const BORIA: number;
        export const LITHIUM_SULFATE: number;
        export const HYDROCHLORIC_ACID: number;
        export const HYDROFLUORIC_ACID: number;
        export const PHOSPHORIC_ACID: number;
        export const BORIC_ACID: number;
        export const ZINC_OXIDE: number;
        export const NICKEL_OXIDE: number;
        export const MAGNESIA: number;
        export const ALUMINA: number;
        export const SODIUM_HYDROXIDE: number;
        export const POTASSIUM_HYDROXIDE: number;
        export const SOYBEANS: number;
        export const POTATOES: number;
        export const AMMONIUM_OXALATE: number;
        export const RARE_EARTH_SULFATES: number;
        export const FERROCHROMIUM: number;
        export const YELLOWCAKE: number;
        export const ALUMINA_CERAMIC: number;
        export const AUSTENITIC_NICHROME: number;
        export const COPPER_WIRE: number;
        export const SILICON_WAFER: number;
        export const STEEL_CABLE: number;
        export const POLYACRYLONITRILE: number;
        export const NATURAL_FLAVORINGS: number;
        export const PLATINUM: number;
        export const LITHIUM_CHLORIDE: number;
        export const ZINC: number;
        export const EPICHLOROHYDRIN: number;
        export const BISPHENOL_A: number;
        export const RARE_EARTH_OXIDES: number;
        export const AMMONIUM_CHLORIDE: number;
        export const ALUMINIUM: number;
        export const CALCIUM: number;
        export const SODIUM_CHROMATE: number;
        export const LEACHED_COFFINITE: number;
        export const URANYL_NITRATE: number;
        export const FLUORINE: number;
        export const SODIUM_TUNGSTATE: number;
        export const FERRITE: number;
        export const DIODE: number;
        export const LASER_DIODE: number;
        export const BALL_VALVE: number;
        export const ALUMINIUM_BEAM: number;
        export const ALUMINIUM_SHEET: number;
        export const ALUMINIUM_PIPE: number;
        export const POLYACRYLONITRILE_FABRIC: number;
        export const COLD_GAS_THRUSTER: number;
        export const COLD_GAS_TORQUE_THRUSTER: number;
        export const CARBON_FIBER: number;
        const FOOD_1: number;
        export {FOOD_1 as FOOD};
        export const SMALL_PROPELLANT_TANK: number;
        export const BOROSILICATE_GLASS: number;
        export const BALL_BEARING: number;
        export const LARGE_THRUST_BEARING: number;
        export const BORON: number;
        export const LITHIUM: number;
        export const EPOXY: number;
        export const NEODYMIUM_OXIDE: number;
        export const YTTRIA: number;
        export const SODIUM_DICHROMATE: number;
        export const NOVOLAK_PREPOLYMER_RESIN: number;
        export const FERROMOLYBDENUM: number;
        export const AMMONIUM_DIURANATE: number;
        export const AMMONIUM_PARATUNGSTATE: number;
        export const ENGINE_BELL: number;
        export const STEEL_TRUSS: number;
        export const ALUMINIUM_HULL_PLATE: number;
        export const ALUMINIUM_TRUSS: number;
        export const CARGO_MODULE: number;
        export const PRESSURE_VESSEL: number;
        export const PROPELLANT_TANK: number;
        export const STAINLESS_STEEL: number;
        export const BARE_CIRCUIT_BOARD: number;
        export const FERRITE_BEAD_INDUCTOR: number;
        export const CORE_DRILL_BIT: number;
        export const CORE_DRILL_THRUSTER: number;
        export const PARABOLIC_DISH: number;
        export const PHOTOVOLTAIC_PANEL: number;
        export const LIPO_BATTERY: number;
        export const NEODYMIUM_TRICHLORIDE: number;
        export const CHROMIA: number;
        export const PHOTORESIST_EPOXY: number;
        export const URANIUM_DIOXIDE: number;
        export const TUNGSTEN: number;
        export const SHUTTLE_HULL: number;
        export const LIGHT_TRANSPORT_HULL: number;
        export const CARGO_RING: number;
        export const HEAVY_TRANSPORT_HULL: number;
        export const TUNGSTEN_POWDER: number;
        export const HYDROGEN_PROPELLANT: number;
        export const STAINLESS_STEEL_SHEET: number;
        export const STAINLESS_STEEL_PIPE: number;
        export const CCD: number;
        export const COMPUTER_CHIP: number;
        export const CORE_DRILL: number;
        export const NEODYMIUM: number;
        export const CHROMIUM: number;
        export const URANIUM_TETRAFLUORIDE: number;
        export const PURE_NITROGEN: number;
        export const ND_YAG_LASER_ROD: number;
        export const NICHROME: number;
        export const NEODYMIUM_MAGNET: number;
        export const UNENRICHED_URANIUM_HEXAFLUORIDE: number;
        export const HIGHLY_ENRICHED_URANIUM_HEXAFLUORIDE: number;
        export const ND_YAG_LASER: number;
        export const THIN_FILM_RESISTOR: number;
        export const HIGHLY_ENRICHED_URANIUM_POWDER: number;
        export const LEACHED_FELDSPAR: number;
        export const ROASTED_RHABDITE: number;
        export const RHABDITE_SLAG: number;
        export const POTASSIUM_CARBONATE: number;
        export const HYDROGEN_HEPTAFLUOROTANTALATE_AND_NIOBATE: number;
        export const LEAD: number;
        export const POTASSIUM_FLUORIDE: number;
        export const POTASSIUM_HEPTAFLUOROTANTALATE: number;
        export const DIEPOXY_PREPOLYMER_RESIN: number;
        export const TANTALUM: number;
        export const PEDOT: number;
        export const POLYMER_TANTALUM_CAPACITOR: number;
        export const SURFACE_MOUNT_DEVICE_REEL: number;
        export const CIRCUIT_BOARD: number;
        export const BRUSHLESS_MOTOR_STATOR: number;
        export const BRUSHLESS_MOTOR_ROTOR: number;
        export const BRUSHLESS_MOTOR: number;
        export const LANDING_LEG: number;
        export const LANDING_AUGER: number;
        export const PUMP: number;
        export const RADIO_ANTENNA: number;
        export const FIBER_OPTIC_GYROSCOPE: number;
        export const STAR_TRACKER: number;
        export const COMPUTER: number;
        export const CONTROL_MOMENT_GYROSCOPE: number;
        export const ROBOTIC_ARM: number;
        export const BERYLLIUM_CARBONATE: number;
        export const BERYLLIA: number;
        export const BERYLLIA_CERAMIC: number;
        export const NEON: number;
        export const HEAT_EXCHANGER: number;
        export const TURBOPUMP: number;
        export const NEON_FUEL_SEPARATOR_CENTRIFUGE: number;
        export const FUEL_MAKE_UP_TANK: number;
        export const NEON_MAKE_UP_TANK: number;
        export const LIGHTBULB_END_MODERATORS: number;
        export const FUSED_QUARTZ_LIGHTBULB_TUBE: number;
        export const REACTOR_PLUMBING_ASSEMBLY: number;
        export const FLOW_DIVIDER_MODERATOR: number;
        export const NUCLEAR_LIGHTBULB: number;
        export const COMPOSITE_OVERWRAPPED_REACTOR_SHELL: number;
        export const CLOSED_CYCLE_GAS_CORE_NUCLEAR_REACTOR_ENGINE: number;
        export const HABITATION_MODULE: number;
        export const MOBILITY_MODULE: number;
        export const FLUIDS_AUTOMATION_MODULE: number;
        export const SOLIDS_AUTOMATION_MODULE: number;
        export const TERRAIN_INTERFACE_MODULE: number;
        export const AVIONICS_MODULE: number;
        export const ESCAPE_MODULE: number;
        export const ATTITUDE_CONTROL_MODULE: number;
        export const POWER_MODULE: number;
        export const THERMAL_MODULE: number;
        export const PROPULSION_MODULE: number;
    }
    const TYPES$e: {
        [x: number]: {
            i: number;
            name: string;
            classification: string;
            category: string;
            massPerUnit: number;
            volumePerUnit: number;
            isAtomic: boolean;
        };
    };

    function getListByCategory(category: any): number[];

    function getListByClassification(classification: any): number[];

    function getType$a(type: any): any;

    const MIN_ROUNDS: number;
    namespace IDS {
        const STARDUST: number;
        const GROUNDBREAKING: number;
        const KEEP_EM_SEPARATED: number;
        const NO_SOUND_IN_SPACE: number;
        const THE_CAKE_IS_A_HALF_TRUTH: number;
        const FLY_ME_TO_THE_MOON: number;
        const ALWAYS_LEAVE_A_NOTE: number;
        const GREATNESS: number;
    }
    const TYPES: {
        [x: number]: {
            name: string;
            choices: number[];
            maxChance: number;
        };
    };
    namespace ACTION_IDS {
        const SAMPLE_DEPOSIT_STARTED: number;
        const EXTRACT_RESOURCE_STARTED: number;
        const PROCESS_PRODUCTS_STARTED: number;
        const ASSEMBLE_SHIP_STARTED: number;
        const TRANSIT_BETWEEN_STARTED: number;
    }
    const ACTION_TYPES: {
        [x: number]: {
            events: number[];
        };
    };
    const CONSTRUCTION_TYPES: {
        [x: number]: {
            setupTime: number;
            constructionTime: number;
            requirements: {
                [x: number]: number;
            };
        };
    };
    const EMERGENCY_PROP_GEN_TIME: number;
    namespace IDS$b {
        const ESCAPE_MODULE_1: number;
        export {ESCAPE_MODULE_1 as ESCAPE_MODULE};
        export const LIGHT_TRANSPORT: number;
        export const HEAVY_TRANSPORT: number;
        export const SHUTTLE: number;
    }
    namespace STATUSES$6 {
        const UNDER_CONSTRUCTION_1: number;
        export {UNDER_CONSTRUCTION_1 as UNDER_CONSTRUCTION};
        const AVAILABLE_1: number;
        export {AVAILABLE_1 as AVAILABLE};
        export const DISABLED: number;
    }
    const TYPES$b: {
        [x: number]: {
            i: number;
            name: string;
            description: string;
            landing: boolean;
            docking: boolean;
            propellantSlot: number;
            propellantInventoryType: number;
            exhaustVelocity: number;
            hullMass: number;
            emergencyPropellantCap: number;
            cargoSlot?: undefined;
            cargoInventoryType?: undefined;
        } | {
            i: number;
            name: string;
            description: string;
            landing: boolean;
            docking: boolean;
            propellantSlot: number;
            propellantInventoryType: number;
            cargoSlot: number;
            cargoInventoryType: number;
            exhaustVelocity: number;
            hullMass: number;
            emergencyPropellantCap: number;
        };
    };

    function getConstructionType(type: any): any;

    function getEmergencyPropellantAmount(generationTime: any, propLimit: any, inventoryConfig: any, startingAmount: any, ...args: any[]): number;

    function getPropellantRequirement(shipType: any, wetMass: any, deltaV_ms: any, ...args: any[]): number;

    function getTimeUntilEmergencyPropellantFull(inventoryConfig: any, propLimit: any, startingAmount: any, ...args: any[]): number;

    function getType$7(type: any): any;

    function getVariant(variant: any): any;

    function propellantToDeltaV(shipType: any, wetMass: any, propellantMass: any, ...args: any[]): number;

    namespace Entity$5 {
        function getConstructionType(entity: any): any;

        function getType(entity: any): any;

        function getVariant(entity: any): any;

        function getPropellantRequirement(ship: any, deltaV_ms: any, ...args: any[]): number;

        function propellantToDeltaV(ship: any, propellantMass: any, ...args: any[]): number;

        function getEmergencyPropellantAmount(ship: any, ...args: any[]): number;

        function getTimeUntilEmergencyPropellantFull(ship: any, ...args: any[]): number;
    }
    namespace Component$4 {
        function getConstructionType(ship: any): any;

        function getType(ship: any): any;

        function getVariant(ship: any): any;
    }

    function snoise(v: any): any;

    function recursiveSNoise(p: any, pers: any, octaves: any): number;

    namespace IDS$a {
        export const STANDARD_QUARTERS: number;
        export const EXPANDED_QUARTERS: number;
        const HABITAT_1: number;
        export {HABITAT_1 as HABITAT};
    }
    const TYPES$a: {
        [x: number]: {
            i: number;
            cap: number;
            recruitment: boolean;
            efficiency: number;
        };
    };

    function getType$6(type: any): any;

    function getEfficiency(stationType: any, population: any): any;

    namespace Entity$2 {
        function getEfficiency(stationable: any): any;
    }
    namespace Component$1 {
        function getEfficiency(station: any): any;
    }

    function formatSystemCalldata(name: any, vars: any, ...args: any[]): any;

    function getApproveErc20Call(amount: any, erc20Address: any, dispatcherAddress: any): {
        contractAddress: any;
        entrypoint: any;
        calldata: import("starknet").Calldata;
    };

    function getEscrowDepositCall(amount: any, depositHook: any, withdrawHook: any, escrowAddress: any, swayAddress: any): {
        contractAddress: any;
        entrypoint: any;
        calldata: import("starknet").Calldata;
    };

    function getEscrowWithdrawCall(withdrawals: any, depositCaller: any, withdrawHook: any, withdrawData: any, escrowAddress: any, swayAddress: any): {
        contractAddress: any;
        entrypoint: any;
        calldata: import("starknet").Calldata;
    };

    function getFormattedCall(contractAddress: any, entrypoint: any, calldata: any): {
        contractAddress: any;
        entrypoint: any;
        calldata: import("starknet").Calldata;
    };

    function getRunSystemCall(name: any, input: any, dispatcherAddress: any, ...args: any[]): {
        contractAddress: any;
        entrypoint: any;
        calldata: import("starknet").Calldata;
    };

    function getTransferWithConfirmationCall(recipient: any, amount: any, memo: any, consumerAddress: any, swayAddress: any): {
        contractAddress: any;
        entrypoint: any;
        calldata: import("starknet").Calldata;
    };

    const Systems: {};
    export {
        address as Address,
        assets as Assets,
        crew as Crew,
        delivery as Delivery,
        deposit as Deposit,
        dock as Dock,
        dryDock as DryDock,
        exchange as Exchange,
        extractor as Extractor,
        fixed as Fixed,
        MerkleTree as Merkle,
        name as Name,
        order as Order,
        permission as Permission,
        planet as Planet,
        randomEvent as RandomEvent,
        simplex as Simplex,
        system as System,
        ethereum_abis as ethereumContracts,
        starknet_abis as starknetContracts
    };
}
