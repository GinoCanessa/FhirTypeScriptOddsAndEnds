import { Coding } from '../fhir.js';
/**
 * Mode for this instance of data.
 */
export declare const MapInputModeValueSet: {
    /**
     * source: Names an input instance used a source for mapping.
     */
    readonly SourceInstance: Coding;
    /**
     * target: Names an instance that is being populated.
     */
    readonly TargetInstance: Coding;
};
/**
 * Mode for this instance of data.
 */
export declare type MapInputModeValueSetType = typeof MapInputModeValueSet;
/**
 * Mode for this instance of data.
 */
export declare enum MapInputModeValueSetEnum {
    /**
     * source: Names an input instance used a source for mapping.
     */
    SourceInstance = "source",
    /**
     * target: Names an instance that is being populated.
     */
    TargetInstance = "target"
}
//# sourceMappingURL=MapInputModeValueSet.d.ts.map