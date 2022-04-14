import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export interface ICatalogEntryRelatedEntry extends fhirInterfaces.IBackboneElement {
    /**
     * The reference to the related item.
     */
    item?: fhirInterfaces.IReference | undefined;
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype?: CatalogEntryRelatedEntryRelationtypeEnum | undefined;
    _relationtype?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CatalogEntry.relatedEntry.relationtype field
 */
export declare enum CatalogEntryRelatedEntryRelationtypeEnum {
    TRIGGERS = "triggers",
    IS_REPLACED_BY = "is-replaced-by"
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export interface ICatalogEntry extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "CatalogEntry";
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    _lastUpdated?: fhirInterfaces.IElement | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable?: boolean | undefined;
    _orderable?: fhirInterfaces.IElement | undefined;
    /**
     * The item in a catalog or definition.
     */
    referencedItem?: fhirInterfaces.IReference | undefined;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhirInterfaces.ICatalogEntryRelatedEntry[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: CatalogEntryStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string | undefined;
    _validTo?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CatalogEntry.status field
 */
export declare enum CatalogEntryStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ICatalogEntry.d.ts.map