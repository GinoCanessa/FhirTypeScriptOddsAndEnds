import { Coding } from '../fhir';
/**
 * The lifecycle status of an artifact.
 */
export declare const PublicationStatusValueSet: {
    /**
     * This resource is ready for normal use.
     */
    publication_status_Active: Coding;
    /**
     * This resource is still under development and is not yet considered to be ready for normal use.
     */
    publication_status_Draft: Coding;
    /**
     * This resource has been withdrawn or superseded and should no longer be used.
     */
    publication_status_Retired: Coding;
    /**
     * The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    publication_status_Unknown: Coding;
};
//# sourceMappingURL=PublicationStatusValueSet.d.ts.map