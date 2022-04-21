import * as fhir from '../fhir.js';
import { LinkageTypeValueSetType, LinkageTypeValueSetEnum } from '../fhirValueSets/LinkageTypeValueSet.js';
/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export declare type ILinkageItem = fhir.IBackboneElement & {
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: LinkageTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Linkage.item.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.IReference | null;
};
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export declare type ILinkage = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Linkage";
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Linkage.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
     */
    author?: fhir.IReference | undefined;
    /**
     * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
     */
    item: fhir.ILinkageItem[] | null;
};
/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export declare class LinkageItem extends fhir.BackboneElement implements ILinkageItem {
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: LinkageTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Linkage.item.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.Reference | null;
    /**
     * Default constructor for LinkageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ILinkageItem>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): LinkageTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export declare class Linkage extends fhir.DomainResource implements ILinkage {
    /**
     * Resource Type Name
     */
    resourceType: "Linkage";
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Linkage.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
     */
    author?: fhir.Reference | undefined;
    /**
     * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
     */
    item: fhir.LinkageItem[] | null;
    /**
     * Default constructor for Linkage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ILinkage>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Linkage.d.ts.map