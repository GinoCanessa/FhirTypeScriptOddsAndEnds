import * as fhir from '../fhirJson.js';
/**
 * How this product was collected.
 */
export interface BiologicallyDerivedProductCollection extends fhir.BackboneElement {
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhir.Reference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhir.Reference | undefined;
    /**
     * Time of product collection.
     */
    collectedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.collection.collected[x]
     */
    _collectedDateTime?: fhir.FhirElement;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhir.Period | undefined;
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export interface BiologicallyDerivedProductProcessing extends fhir.BackboneElement {
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.processing.description
     */
    _description?: fhir.FhirElement;
    /**
     * Procesing code.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Substance added during processing.
     */
    additive?: fhir.Reference | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.processing.time[x]
     */
    _timeDateTime?: fhir.FhirElement;
    /**
     * Time of processing.
     */
    timePeriod?: fhir.Period | undefined;
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export interface BiologicallyDerivedProductManipulation extends fhir.BackboneElement {
    /**
     * Description of manipulation.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.description
     */
    _description?: fhir.FhirElement;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.time[x]
     */
    _timeDateTime?: fhir.FhirElement;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhir.Period | undefined;
}
/**
 * Product storage.
 */
export interface BiologicallyDerivedProductStorage extends fhir.BackboneElement {
    /**
     * Description of storage.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.description
     */
    _description?: fhir.FhirElement;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.temperature
     */
    _temperature?: fhir.FhirElement;
    /**
     * Temperature scale used.
     */
    scale?: 'celsius' | 'farenheit' | 'kelvin' | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.Period | undefined;
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export interface BiologicallyDerivedProduct extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "BiologicallyDerivedProduct";
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: 'biologicalAgent' | 'cells' | 'fluid' | 'organ' | 'tissue' | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.CodeableConcept | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: 'available' | 'unavailable' | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhir.Reference[] | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.quantity
     */
    _quantity?: fhir.FhirElement;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhir.Reference[] | undefined;
    /**
     * How this product was collected.
     */
    collection?: fhir.BiologicallyDerivedProductCollection | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhir.BiologicallyDerivedProductProcessing[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhir.BiologicallyDerivedProductManipulation | undefined;
    /**
     * Product storage.
     */
    storage?: fhir.BiologicallyDerivedProductStorage[] | undefined;
}
//# sourceMappingURL=BiologicallyDerivedProduct.d.ts.map