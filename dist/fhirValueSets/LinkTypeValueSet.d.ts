import { Coding } from '../fhir.js';
/**
 * The type of link between this patient resource and another patient resource.
 */
export declare const LinkTypeValueSet: {
    /**
     * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
     */
    readonly Refer: Coding;
    /**
     * replaced-by: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
     */
    readonly ReplacedBy: Coding;
    /**
     * replaces: The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
     */
    readonly Replaces: Coding;
    /**
     * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
     */
    readonly SeeAlso: Coding;
};
/**
 * The type of link between this patient resource and another patient resource.
 */
export declare type LinkTypeValueSetType = typeof LinkTypeValueSet;
/**
 * The type of link between this patient resource and another patient resource.
 */
//# sourceMappingURL=LinkTypeValueSet.d.ts.map