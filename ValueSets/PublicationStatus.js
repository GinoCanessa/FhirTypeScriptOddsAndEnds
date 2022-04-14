"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationStatus = void 0;
/**
 * The lifecycle status of an artifact.
 */
exports.PublicationStatus = {
    /**
     * This resource is ready for normal use.
     */
    publication_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/publication-status"
    },
    /**
     * This resource is still under development and is not yet considered to be ready for normal use.
     */
    publication_status_Draft: {
        code: "draft",
        display: "Draft",
        system: "http://hl7.org/fhir/publication-status"
    },
    /**
     * This resource has been withdrawn or superseded and should no longer be used.
     */
    publication_status_Retired: {
        code: "retired",
        display: "Retired",
        system: "http://hl7.org/fhir/publication-status"
    },
    /**
     * The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    publication_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/publication-status"
    },
};
//# sourceMappingURL=PublicationStatus.js.map