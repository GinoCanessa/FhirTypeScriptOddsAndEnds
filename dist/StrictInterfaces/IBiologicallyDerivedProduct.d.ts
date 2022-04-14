import * as fhirInterfaces from '../strictinterfaces';
/**
 * How this product was collected.
 */
export interface IBiologicallyDerivedProductCollection extends fhirInterfaces.IBackboneElement {
    /**
     * Time of product collection.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhirInterfaces.IReference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhirInterfaces.IReference | undefined;
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export interface IBiologicallyDerivedProductProcessing extends fhirInterfaces.IBackboneElement {
    /**
     * Substance added during processing.
     */
    additive?: fhirInterfaces.IReference | undefined;
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Procesing code.
     */
    procedure?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Time of processing.
     */
    timePeriod?: fhirInterfaces.IPeriod | undefined;
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export interface IBiologicallyDerivedProductManipulation extends fhirInterfaces.IBackboneElement {
    /**
     * Description of manipulation.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhirInterfaces.IPeriod | undefined;
}
/**
 * Product storage.
 */
export interface IBiologicallyDerivedProductStorage extends fhirInterfaces.IBackboneElement {
    /**
     * Description of storage.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhirInterfaces.IPeriod | undefined;
    /**
     * Temperature scale used.
     */
    scale?: BiologicallyDerivedProductStorageScaleEnum | undefined;
    _scale?: fhirInterfaces.IElement | undefined;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    _temperature?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the BiologicallyDerivedProduct.storage.scale field
 */
export declare enum BiologicallyDerivedProductStorageScaleEnum {
    FARENHEIT = "farenheit",
    CELSIUS = "celsius",
    KELVIN = "kelvin"
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export interface IBiologicallyDerivedProduct extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "BiologicallyDerivedProduct";
    /**
     * How this product was collected.
     */
    collection?: fhirInterfaces.IBiologicallyDerivedProductCollection | undefined;
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhirInterfaces.IBiologicallyDerivedProductManipulation | undefined;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhirInterfaces.IReference[] | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhirInterfaces.IBiologicallyDerivedProductProcessing[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: BiologicallyDerivedProductProductCategoryEnum | undefined;
    _productCategory?: fhirInterfaces.IElement | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number | undefined;
    _quantity?: fhirInterfaces.IElement | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhirInterfaces.IReference[] | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: BiologicallyDerivedProductStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Product storage.
     */
    storage?: fhirInterfaces.IBiologicallyDerivedProductStorage[] | undefined;
}
/**
 * Code Values for the BiologicallyDerivedProduct.productCategory field
 */
export declare enum BiologicallyDerivedProductProductCategoryEnum {
    ORGAN = "organ",
    TISSUE = "tissue",
    FLUID = "fluid",
    CELLS = "cells",
    BIOLOGICALAGENT = "biologicalAgent"
}
/**
 * Code Values for the BiologicallyDerivedProduct.status field
 */
export declare enum BiologicallyDerivedProductStatusEnum {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable"
}
//# sourceMappingURL=IBiologicallyDerivedProduct.d.ts.map