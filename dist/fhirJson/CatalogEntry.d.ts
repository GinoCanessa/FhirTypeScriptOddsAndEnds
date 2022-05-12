import * as fhir from '../fhirJson.js';
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export interface CatalogEntryRelatedEntry extends fhir.BackboneElement {
    /**
     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
     */
    relationtype: 'is-replaced-by' | 'triggers' | null;
    /**
     * The reference to the related item.
     */
    item: fhir.Reference | null;
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export interface CatalogEntry extends fhir.DomainResource {
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
    _orderable?: fhir.FhirElement;
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
    status?: 'active' | 'draft' | 'retired' | 'unknown' | undefined;
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
    _validTo?: fhir.FhirElement;
    /**
     * Perhaps not needed - if we use fhir resource metadata.
     */
    lastUpdated?: string | undefined;
    /**
     * Extended properties for primitive element: CatalogEntry.lastUpdated
     */
    _lastUpdated?: fhir.FhirElement;
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
}
//# sourceMappingURL=CatalogEntry.d.ts.map