import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * How this product was collected.
 */
export declare class BiologicallyDerivedProductCollection extends fhirModels.BackboneElement implements fhirInterfaces.IBiologicallyDerivedProductCollection {
    /**
     * Time of product collection.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhirModels.Element | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhirModels.Period | undefined;
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhirModels.Reference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhirModels.Reference | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductCollection from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBiologicallyDerivedProductCollection>);
    /**
     * Factory function to create a BiologicallyDerivedProductCollection from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBiologicallyDerivedProductCollection): BiologicallyDerivedProductCollection;
    /**
     * Check if the current BiologicallyDerivedProductCollection contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare class BiologicallyDerivedProductProcessing extends fhirModels.BackboneElement implements fhirInterfaces.IBiologicallyDerivedProductProcessing {
    /**
     * Substance added during processing.
     */
    additive?: fhirModels.Reference | undefined;
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Procesing code.
     */
    procedure?: fhirModels.CodeableConcept | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhirModels.Element | undefined;
    /**
     * Time of processing.
     */
    timePeriod?: fhirModels.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductProcessing from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBiologicallyDerivedProductProcessing>);
    /**
     * Factory function to create a BiologicallyDerivedProductProcessing from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBiologicallyDerivedProductProcessing): BiologicallyDerivedProductProcessing;
    /**
     * Check if the current BiologicallyDerivedProductProcessing contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export declare class BiologicallyDerivedProductManipulation extends fhirModels.BackboneElement implements fhirInterfaces.IBiologicallyDerivedProductManipulation {
    /**
     * Description of manipulation.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhirModels.Element | undefined;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhirModels.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductManipulation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBiologicallyDerivedProductManipulation>);
    /**
     * Factory function to create a BiologicallyDerivedProductManipulation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBiologicallyDerivedProductManipulation): BiologicallyDerivedProductManipulation;
    /**
     * Check if the current BiologicallyDerivedProductManipulation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Product storage.
 */
export declare class BiologicallyDerivedProductStorage extends fhirModels.BackboneElement implements fhirInterfaces.IBiologicallyDerivedProductStorage {
    /**
     * Description of storage.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhirModels.Period | undefined;
    /**
     * Temperature scale used.
     */
    scale?: BiologicallyDerivedProductStorageScaleEnum | undefined;
    _scale?: fhirModels.Element | undefined;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    _temperature?: fhirModels.Element | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductStorage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBiologicallyDerivedProductStorage>);
    /**
     * Factory function to create a BiologicallyDerivedProductStorage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBiologicallyDerivedProductStorage): BiologicallyDerivedProductStorage;
    /**
     * Check if the current BiologicallyDerivedProductStorage contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class BiologicallyDerivedProduct extends fhirModels.DomainResource implements fhirInterfaces.IBiologicallyDerivedProduct {
    /**
     * Resource Type Name
     */
    readonly resourceType = "BiologicallyDerivedProduct";
    /**
     * How this product was collected.
     */
    collection?: fhirModels.BiologicallyDerivedProductCollection | undefined;
    /**
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhirModels.BiologicallyDerivedProductManipulation | undefined;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhirModels.Reference[] | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhirModels.BiologicallyDerivedProductProcessing[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: BiologicallyDerivedProductProductCategoryEnum | undefined;
    _productCategory?: fhirModels.Element | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhirModels.CodeableConcept | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number | undefined;
    _quantity?: fhirModels.Element | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhirModels.Reference[] | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: BiologicallyDerivedProductStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Product storage.
     */
    storage?: fhirModels.BiologicallyDerivedProductStorage[] | undefined;
    /**
     * Default constructor for BiologicallyDerivedProduct from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBiologicallyDerivedProduct>);
    /**
     * Factory function to create a BiologicallyDerivedProduct from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBiologicallyDerivedProduct): BiologicallyDerivedProduct;
    /**
     * Check if the current BiologicallyDerivedProduct contains all required elements.
     */
    checkRequiredElements(): string[];
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