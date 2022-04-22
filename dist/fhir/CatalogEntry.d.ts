import * as fhir from '../fhir.js';
import { RelationTypeValueSetType, RelationTypeValueSetEnum } from '../fhirValueSets/RelationTypeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export declare type ICatalogEntryRelatedEntry = fhir.IBackboneElement & {
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: RelationTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CatalogEntry.relatedEntry.relationtype
     */
    _relationtype?: fhir.IFhirElement | undefined;
    /**
     * The reference to the related item.
     */
    item: fhir.IReference | null;
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
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: boolean | null;
    /**
     * Extended properties for primitive element: CatalogEntry.orderable
     */
    _orderable?: fhir.IFhirElement | undefined;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhir.IReference | null;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhir.IIdentifier[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhir.ICodeableConcept[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: PublicationStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.IPeriod | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.validTo
     */
    _validTo?: fhir.IFhirElement | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.lastUpdated
     */
    _lastUpdated?: fhir.IFhirElement | undefined;
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhir.ICodeableConcept[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhir.ICodeableConcept[] | undefined;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhir.ICatalogEntryRelatedEntry[] | undefined;
};
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export declare class CatalogEntryRelatedEntry extends fhir.BackboneElement implements ICatalogEntryRelatedEntry {
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: RelationTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CatalogEntry.relatedEntry.relationtype
     */
    _relationtype?: fhir.FhirElement | undefined;
    /**
     * The reference to the related item.
     */
    item: fhir.Reference | null;
    /**
     * Default constructor for CatalogEntryRelatedEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICatalogEntryRelatedEntry>);
    /**
     * Required-bound Value Set for relationtype
     */
    static relationtypeRequiredValueSet(): RelationTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export declare class CatalogEntry extends fhir.DomainResource implements ICatalogEntry {
    /**
     * Resource Type Name
     */
    resourceType: "CatalogEntry";
    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Whether the entry represents an orderable item.
     */
    orderable: boolean | null;
    /**
     * Extended properties for primitive element: CatalogEntry.orderable
     */
    _orderable?: fhir.FhirElement | undefined;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: fhir.Reference | null;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: fhir.Identifier[] | undefined;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: fhir.CodeableConcept[] | undefined;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: PublicationStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.validTo
     */
    _validTo?: fhir.FhirElement | undefined;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.lastUpdated
     */
    _lastUpdated?: fhir.FhirElement | undefined;
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: fhir.CodeableConcept[] | undefined;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: fhir.CodeableConcept[] | undefined;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: fhir.CatalogEntryRelatedEntry[] | undefined;
    /**
     * Default constructor for CatalogEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICatalogEntry>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=CatalogEntry.d.ts.map