import * as fhir from '../fhir.js';
import { ProcedureCodeValueSetType } from '../fhirValueSets/ProcedureCodeValueSet.js';
import { ProductStorageScaleValueSetType, ProductStorageScaleValueSetEnum } from '../fhirValueSets/ProductStorageScaleValueSet.js';
import { ProductCategoryValueSetType, ProductCategoryValueSetEnum } from '../fhirValueSets/ProductCategoryValueSet.js';
import { ProductStatusValueSetType, ProductStatusValueSetEnum } from '../fhirValueSets/ProductStatusValueSet.js';
/**
 * How this product was collected.
 */
export declare type IBiologicallyDerivedProductCollection = fhir.IBackboneElement & {
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: fhir.IReference | undefined;
    /**
     * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
     */
    source?: fhir.IReference | undefined;
    /**
     * Time of product collection.
     */
    collectedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.collection.collected[x]
     */
    _collectedDateTime?: fhir.IFhirElement | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhir.IPeriod | undefined;
};
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare type IBiologicallyDerivedProductProcessing = fhir.IBackboneElement & {
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.processing.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Procesing code.
     */
    procedure?: fhir.ICodeableConcept | undefined;
    /**
     * Substance added during processing.
     */
    additive?: fhir.IReference | undefined;
    /**
     * Time of processing.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.processing.time[x]
     */
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
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.time[x]
     */
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
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.temperature
     */
    _temperature?: fhir.IFhirElement | undefined;
    /**
     * Temperature scale used.
     */
    scale?: ProductStorageScaleValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.scale
     */
    _scale?: fhir.IFhirElement | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.IPeriod | undefined;
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
     * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Broad category of this product.
     */
    productCategory?: ProductCategoryValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.productCategory
     */
    _productCategory?: fhir.IFhirElement | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.ICodeableConcept | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: ProductStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: fhir.IReference[] | undefined;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.quantity
     */
    _quantity?: fhir.IFhirElement | undefined;
    /**
     * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
     */
    parent?: fhir.IReference[] | undefined;
    /**
     * How this product was collected.
     */
    collection?: fhir.IBiologicallyDerivedProductCollection | undefined;
    /**
     * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
     */
    processing?: fhir.IBiologicallyDerivedProductProcessing[] | undefined;
    /**
     * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
     */
    manipulation?: fhir.IBiologicallyDerivedProductManipulation | undefined;
    /**
     * Product storage.
     */
    storage?: fhir.IBiologicallyDerivedProductStorage[] | undefined;
};
/**
 * How this product was collected.
 */
export declare class BiologicallyDerivedProductCollection extends fhir.BackboneElement implements IBiologicallyDerivedProductCollection {
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
    _collectedDateTime?: fhir.FhirElement | undefined;
    /**
     * Time of product collection.
     */
    collectedPeriod?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductCollection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IBiologicallyDerivedProductCollection>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare class BiologicallyDerivedProductProcessing extends fhir.BackboneElement implements IBiologicallyDerivedProductProcessing {
    /**
     * Description of of processing.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.processing.description
     */
    _description?: fhir.FhirElement | undefined;
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
    _timeDateTime?: fhir.FhirElement | undefined;
    /**
     * Time of processing.
     */
    timePeriod?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductProcessing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IBiologicallyDerivedProductProcessing>);
    /**
     * Example-bound Value Set for procedure
     */
    static procedureExampleValueSet(): ProcedureCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export declare class BiologicallyDerivedProductManipulation extends fhir.BackboneElement implements IBiologicallyDerivedProductManipulation {
    /**
     * Description of manipulation.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.manipulation.time[x]
     */
    _timeDateTime?: fhir.FhirElement | undefined;
    /**
     * Time of manipulation.
     */
    timePeriod?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductManipulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IBiologicallyDerivedProductManipulation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Product storage.
 */
export declare class BiologicallyDerivedProductStorage extends fhir.BackboneElement implements IBiologicallyDerivedProductStorage {
    /**
     * Description of storage.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Storage temperature.
     */
    temperature?: number | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.temperature
     */
    _temperature?: fhir.FhirElement | undefined;
    /**
     * Temperature scale used.
     */
    scale?: ProductStorageScaleValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.storage.scale
     */
    _scale?: fhir.FhirElement | undefined;
    /**
     * Storage timeperiod.
     */
    duration?: fhir.Period | undefined;
    /**
     * Default constructor for BiologicallyDerivedProductStorage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IBiologicallyDerivedProductStorage>);
    /**
     * Required-bound Value Set for scale
     */
    static scaleRequiredValueSet(): ProductStorageScaleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export declare class BiologicallyDerivedProduct extends fhir.DomainResource implements IBiologicallyDerivedProduct {
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
    productCategory?: ProductCategoryValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.productCategory
     */
    _productCategory?: fhir.FhirElement | undefined;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: fhir.CodeableConcept | undefined;
    /**
     * Whether the product is currently available.
     */
    status?: ProductStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: BiologicallyDerivedProduct.status
     */
    _status?: fhir.FhirElement | undefined;
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
    _quantity?: fhir.FhirElement | undefined;
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
    /**
     * Default constructor for BiologicallyDerivedProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IBiologicallyDerivedProduct>);
    /**
     * Required-bound Value Set for productCategory
     */
    static productCategoryRequiredValueSet(): ProductCategoryValueSetType;
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ProductStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=BiologicallyDerivedProduct.d.ts.map