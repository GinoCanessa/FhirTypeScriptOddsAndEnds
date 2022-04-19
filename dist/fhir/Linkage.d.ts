import * as fhir from '../fhir';
/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export declare type ILinkageItem = fhir.IBackboneElement & {
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.IReference | null;
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: LinkageItemTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
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
export declare class LinkageItem extends fhir.BackboneElement implements fhir.ILinkageItem {
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.Reference | null;
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: LinkageItemTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for LinkageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ILinkageItem>);
    /**
     * Check if the current LinkageItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a LinkageItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ILinkageItem): LinkageItem;
}
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export declare class Linkage extends fhir.DomainResource implements fhir.ILinkage {
    /**
     * Resource Type Name
     */
    resourceType: "Linkage";
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: boolean | undefined;
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
    constructor(source?: Partial<fhir.ILinkage>);
    /**
     * Check if the current Linkage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Linkage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ILinkage): Linkage;
}
/**
 * Code Values for the Linkage.item.type field
 */
export declare enum LinkageItemTypeEnum {
    SOURCE = "source",
    ALTERNATE = "alternate",
    HISTORICAL = "historical"
}
//# sourceMappingURL=Linkage.d.ts.map