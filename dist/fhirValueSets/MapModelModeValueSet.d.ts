import { Coding } from '../fhir.js';
/**
 * How the referenced structure is used in this mapping.
 */
export declare const MapModelModeValueSet: {
    /**
     * produced: This structure describes an instance that the mapping engine may ask to create that is used a target of data.
     */
    readonly ProducedStructureDefinition: Coding;
    /**
     * queried: This structure describes an instance that the mapping engine may ask for that is used a source of data.
     */
    readonly QueriedStructureDefinition: Coding;
    /**
     * source: This structure describes an instance passed to the mapping engine that is used a source of data.
     */
    readonly SourceStructureDefinition: Coding;
    /**
     * target: This structure describes an instance passed to the mapping engine that is used a target of data.
     */
    readonly TargetStructureDefinition: Coding;
};
/**
 * How the referenced structure is used in this mapping.
 */
export declare type MapModelModeValueSetType = typeof MapModelModeValueSet;
/**
 * How the referenced structure is used in this mapping.
 */
//# sourceMappingURL=MapModelModeValueSet.d.ts.map