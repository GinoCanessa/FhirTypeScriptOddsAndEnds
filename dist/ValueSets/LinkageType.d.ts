import { Coding } from '../strictmodels';
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
export declare const LinkageType: {
    /**
     * The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.
     */
    linkage_type_AlternateRecord: Coding;
    /**
     * The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.
     */
    linkage_type_HistoricalObsoleteRecord: Coding;
    /**
     * The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    linkage_type_SourceOfTruth: Coding;
};
//# sourceMappingURL=LinkageType.d.ts.map