import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductPackagedBatchIdentifier type.
 */
export interface MedicinalProductPackagedBatchIdentifierArgs extends fhir.BackboneElementArgs {
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: fhir.IdentifierArgs | null;
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhir.IdentifierArgs | undefined;
}
/**
 * Batch numbering.
 */
export declare class MedicinalProductPackagedBatchIdentifier extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: fhir.Identifier | null;
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhir.Identifier | undefined;
    /**
     * Default constructor for MedicinalProductPackagedBatchIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPackagedBatchIdentifierArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MedicinalProductPackagedPackageItem type.
 */
export interface MedicinalProductPackagedPackageItemArgs extends fhir.BackboneElementArgs {
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity: fhir.QuantityArgs | null;
    /**
     * Material type of the package item.
     */
    material?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhir.ReferenceArgs[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhir.ReferenceArgs[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhir.MedicinalProductPackagedPackageItemArgs[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristicArgs | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLifeArgs[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export declare class MedicinalProductPackagedPackageItem extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity: fhir.Quantity | null;
    /**
     * Material type of the package item.
     */
    material?: fhir.CodeableConcept[] | undefined;
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhir.CodeableConcept[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhir.Reference[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhir.MedicinalProductPackagedPackageItem[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLife[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductPackagedPackageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPackagedPackageItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MedicinalProductPackaged type.
 */
export interface MedicinalProductPackagedArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPackaged" | undefined;
    /**
     * Unique identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The product with this is a pack for.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * Textual description.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConceptArgs | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhir.MarketingStatusArgs[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhir.ReferenceArgs | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Batch numbering.
     */
    batchIdentifier?: fhir.MedicinalProductPackagedBatchIdentifierArgs[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: fhir.MedicinalProductPackagedPackageItemArgs[] | null;
}
/**
 * A medicinal product in a container or package.
 */
export declare class MedicinalProductPackaged extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPackaged";
    /**
     * Unique identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The product with this is a pack for.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * Textual description.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhir.MarketingStatus[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhir.Reference | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Batch numbering.
     */
    batchIdentifier?: fhir.MedicinalProductPackagedBatchIdentifier[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: fhir.MedicinalProductPackagedPackageItem[] | null;
    /**
     * Default constructor for MedicinalProductPackaged - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPackagedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=MedicinalProductPackaged.d.ts.map