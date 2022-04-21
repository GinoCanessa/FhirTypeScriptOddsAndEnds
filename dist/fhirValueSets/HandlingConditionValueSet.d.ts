import { Coding } from '../fhir.js';
/**
 * Set of handling instructions prior testing of the specimen.
 */
export declare const HandlingConditionValueSet: {
    /**
     * frozen: frozen temperature.
     */
    readonly Frozen: Coding;
    /**
     * refrigerated: refrigerated temperature.
     */
    readonly Refrigerated: Coding;
    /**
     * room: room temperature.
     */
    readonly RoomTemperature: Coding;
};
/**
 * Set of handling instructions prior testing of the specimen.
 */
export declare type HandlingConditionValueSetType = typeof HandlingConditionValueSet;
/**
 * Set of handling instructions prior testing of the specimen.
 */
export declare enum HandlingConditionValueSetEnum {
    /**
     * frozen: frozen temperature.
     */
    Frozen = "frozen",
    /**
     * refrigerated: refrigerated temperature.
     */
    Refrigerated = "refrigerated",
    /**
     * room: room temperature.
     */
    RoomTemperature = "room"
}
//# sourceMappingURL=HandlingConditionValueSet.d.ts.map