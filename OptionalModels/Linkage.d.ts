import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export declare class LinkageItem extends fhirModels.BackboneElement implements fhirInterfaces.ILinkageItem {
    /**
     * The resource instance being linked as part of the group.
     */
    resource?: fhirModels.Reference | undefined;
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type?: LinkageItemTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for LinkageItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ILinkageItem>);
    /**
     * Factory function to create a LinkageItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ILinkageItem): LinkageItem;
    /**
     * Check if the current LinkageItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Linkage.item.type field
 */
export declare enum LinkageItemTypeEnum {
    SOURCE = "source",
    ALTERNATE = "alternate",
    HISTORICAL = "historical"
}
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export declare class Linkage extends fhirModels.DomainResource implements fhirInterfaces.ILinkage {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Linkage";
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
     */
    item?: fhirModels.LinkageItem[] | undefined;
    /**
     * Default constructor for Linkage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ILinkage>);
    /**
     * Factory function to create a Linkage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ILinkage): Linkage;
    /**
     * Check if the current Linkage contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Linkage.d.ts.map