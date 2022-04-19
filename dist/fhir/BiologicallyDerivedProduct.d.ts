import * as fhir from '../fhir';
/**
 * How this product was collected.
 */
export declare type IBiologicallyDerivedProductCollection = fhir.IBackboneElement & {
    /**
     * Time of product collection.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhir.IFhirElement | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhir.IPeriod | undefined;
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhir.IReference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhir.IReference | undefined;
};
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare type IBiologicallyDerivedProductProcessing = fhir.IBackboneElement & {
    /**
     * Substance added during processing.
     */
    additive?: fhir.IReference | undefined;
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Procesing code.
     */
    procedure?: fhir.ICodeableConcept | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhir.IFhirElement | undefined;
    /**
     * Time of processing.
     */
    timePeriod?: fhir.IPeriod | undefined;
};
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export declare type IBiologicallyDerivedProductManipulation = fhir.IBackboneElement & {
    /**
     * Description of manipulation.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhir.IFhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhir.IPeriod | undefined;
};
/**
 * Product storage.
 */
export declare type IBiologicallyDerivedProductStorage = fhir.IBackboneElement & {
    /**
     * Description of storage.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.IPeriod | undefined;
    /**
     * Temperature scale used.
     */
    scale?: BiologicallyDerivedProductStorageScaleEnum | undefined;
    _scale?: fhir.IFhirElement | undefined;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    _temperature?: fhir.IFhirElement | undefined;
};
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export declare type IBiologicallyDerivedProduct = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "BiologicallyDerivedProduct";
    /**
     * How this product was collected.
     */
    collection?: fhir.IBiologicallyDerivedProductCollection | undefined;
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhir.IBiologicallyDerivedProductManipulation | undefined;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhir.IReference[] | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhir.IBiologicallyDerivedProductProcessing[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: BiologicallyDerivedProductProductCategoryEnum | undefined;
    _productCategory?: fhir.IFhirElement | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.ICodeableConcept | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number | undefined;
    _quantity?: fhir.IFhirElement | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhir.IReference[] | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: BiologicallyDerivedProductStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Product storage.
     */
    storage?: fhir.IBiologicallyDerivedProductStorage[] | undefined;
};
/**
 * How this product was collected.
 */
export declare class BiologicallyDerivedProductCollection extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductCollection {
    /**
     * Time of product collection.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhir.FhirElement | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhir.Period | undefined;
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhir.Reference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhir.Reference | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductCollection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBiologicallyDerivedProductCollection>);
    /**
     * Check if the current BiologicallyDerivedProductCollection contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a BiologicallyDerivedProductCollection from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IBiologicallyDerivedProductCollection): BiologicallyDerivedProductCollection;
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare class BiologicallyDerivedProductProcessing extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductProcessing {
    /**
     * Substance added during processing.
     */
    additive?: fhir.Reference | undefined;
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Procesing code.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhir.FhirElement | undefined;
    /**
     * Time of processing.
     */
    timePeriod?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductProcessing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBiologicallyDerivedProductProcessing>);
    /**
     * Check if the current BiologicallyDerivedProductProcessing contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a BiologicallyDerivedProductProcessing from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IBiologicallyDerivedProductProcessing): BiologicallyDerivedProductProcessing;
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export declare class BiologicallyDerivedProductManipulation extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductManipulation {
    /**
     * Description of manipulation.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhir.FhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductManipulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBiologicallyDerivedProductManipulation>);
    /**
     * Check if the current BiologicallyDerivedProductManipulation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a BiologicallyDerivedProductManipulation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IBiologicallyDerivedProductManipulation): BiologicallyDerivedProductManipulation;
}
/**
 * Product storage.
 */
export declare class BiologicallyDerivedProductStorage extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductStorage {
    /**
     * Description of storage.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.Period | undefined;
    /**
     * Temperature scale used.
     */
    scale?: BiologicallyDerivedProductStorageScaleEnum | undefined;
    _scale?: fhir.FhirElement | undefined;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    _temperature?: fhir.FhirElement | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductStorage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBiologicallyDerivedProductStorage>);
    /**
     * Check if the current BiologicallyDerivedProductStorage contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a BiologicallyDerivedProductStorage from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IBiologicallyDerivedProductStorage): BiologicallyDerivedProductStorage;
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export declare class BiologicallyDerivedProduct extends fhir.DomainResource implements fhir.IBiologicallyDerivedProduct {
    /**
     * Resource Type Name
     */
    resourceType: "BiologicallyDerivedProduct";
    /**
     * How this product was collected.
     */
    collection?: fhir.BiologicallyDerivedProductCollection | undefined;
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhir.BiologicallyDerivedProductManipulation | undefined;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhir.Reference[] | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhir.BiologicallyDerivedProductProcessing[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: BiologicallyDerivedProductProductCategoryEnum | undefined;
    _productCategory?: fhir.FhirElement | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.CodeableConcept | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number | undefined;
    _quantity?: fhir.FhirElement | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhir.Reference[] | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: BiologicallyDerivedProductStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Product storage.
     */
    storage?: fhir.BiologicallyDerivedProductStorage[] | undefined;
    /**
     * Default constructor for BiologicallyDerivedProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBiologicallyDerivedProduct>);
    /**
     * Check if the current BiologicallyDerivedProduct contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a BiologicallyDerivedProduct from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IBiologicallyDerivedProduct): BiologicallyDerivedProduct;
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
//# sourceMappingURL=BiologicallyDerivedProduct.d.ts.map