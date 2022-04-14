import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export declare class CatalogEntryRelatedEntry extends fhirModels.BackboneElement implements fhirInterfaces.ICatalogEntryRelatedEntry {
    /**
     * The reference to the related item.
     */
    item: fhirModels.Reference;
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: CatalogEntryRelatedEntryRelationtypeEnum;
    _relationtype?: fhirModels.Element | undefined;
    /**
     * Default constructor for CatalogEntryRelatedEntry from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICatalogEntryRelatedEntry);
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
export declare class CatalogEntry extends fhirModels.DomainResource implements fhirInterfaces.ICatalogEntry {
    /**
     * Resource Type Name
     */
    readonly resourceType = "CatalogEntry";
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhirModels.CodeableConcept[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhirModels.Identifier[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    _lastUpdated?: fhirModels.Element | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: boolean;
    _orderable?: fhirModels.Element | undefined;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhirModels.Reference;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhirModels.CatalogEntryRelatedEntry[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: CatalogEntryStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhirModels.Period | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string | undefined;
    _validTo?: fhirModels.Element | undefined;
    /**
     * Default constructor for CatalogEntry from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICatalogEntry);
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
//# sourceMappingURL=CatalogEntry.d.ts.map