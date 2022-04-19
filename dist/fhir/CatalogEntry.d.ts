import * as fhir from '../fhir';
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export declare type ICatalogEntryRelatedEntry = fhir.IBackboneElement & {
    /**
     * The reference to the related item.
     */
    item: fhir.IReference | null;
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: CatalogEntryRelatedEntryRelationtypeEnum | null;
    _relationtype?: fhir.IFhirElement | undefined;
};
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export declare type ICatalogEntry = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CatalogEntry";
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhir.ICodeableConcept[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhir.ICodeableConcept[] | undefined;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhir.IIdentifier[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhir.ICodeableConcept[] | undefined;
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    _lastUpdated?: fhir.IFhirElement | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: boolean | null;
    _orderable?: fhir.IFhirElement | undefined;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhir.IReference | null;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhir.ICatalogEntryRelatedEntry[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: CatalogEntryStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.IPeriod | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string | undefined;
    _validTo?: fhir.IFhirElement | undefined;
};
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export declare class CatalogEntryRelatedEntry extends fhir.BackboneElement implements fhir.ICatalogEntryRelatedEntry {
    /**
     * The reference to the related item.
     */
    item: fhir.Reference | null;
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: CatalogEntryRelatedEntryRelationtypeEnum | null;
    _relationtype?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CatalogEntryRelatedEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICatalogEntryRelatedEntry>);
    /**
     * Check if the current CatalogEntryRelatedEntry contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CatalogEntryRelatedEntry from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICatalogEntryRelatedEntry): CatalogEntryRelatedEntry;
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export declare class CatalogEntry extends fhir.DomainResource implements fhir.ICatalogEntry {
    /**
     * Resource Type Name
     */
    resourceType: "CatalogEntry";
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhir.CodeableConcept[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhir.CodeableConcept[] | undefined;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhir.Identifier[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhir.CodeableConcept[] | undefined;
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    _lastUpdated?: fhir.FhirElement | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: boolean | null;
    _orderable?: fhir.FhirElement | undefined;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhir.Reference | null;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhir.CatalogEntryRelatedEntry[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: CatalogEntryStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string | undefined;
    _validTo?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CatalogEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICatalogEntry>);
    /**
     * Check if the current CatalogEntry contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CatalogEntry from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICatalogEntry): CatalogEntry;
}
/**
 * Code Values for the CatalogEntry.relatedEntry.relationtype field
 */
export declare enum CatalogEntryRelatedEntryRelationtypeEnum {
    TRIGGERS = "triggers",
    IS_REPLACED_BY = "is-replaced-by"
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