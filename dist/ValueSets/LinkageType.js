"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkageType = void 0;
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
exports.LinkageType = {
    /**
     * The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.
     */
    linkage_type_AlternateRecord: {
        code: "alternate",
        display: "Alternate Record",
        system: "http://hl7.org/fhir/linkage-type"
    },
    /**
     * The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.
     */
    linkage_type_HistoricalObsoleteRecord: {
        code: "historical",
        display: "Historical/Obsolete Record",
        system: "http://hl7.org/fhir/linkage-type"
    },
    /**
     * The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    linkage_type_SourceOfTruth: {
        code: "source",
        display: "Source of Truth",
        system: "http://hl7.org/fhir/linkage-type"
    },
};
//# sourceMappingURL=LinkageType.js.map