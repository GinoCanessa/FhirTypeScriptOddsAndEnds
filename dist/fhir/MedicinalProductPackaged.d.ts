import * as fhir from '../fhir.js';
/**
 * Batch numbering.
 */
export declare type IMedicinalProductPackagedBatchIdentifier = fhir.IBackboneElement & {
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: fhir.IIdentifier | null;
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhir.IIdentifier | undefined;
};
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export declare type IMedicinalProductPackagedPackageItem = fhir.IBackboneElement & {
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity: fhir.IQuantity | null;
    /**
     * Material type of the package item.
     */
    material?: fhir.ICodeableConcept[] | undefined;
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhir.ICodeableConcept[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhir.IReference[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhir.IReference[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhir.IMedicinalProductPackagedPackageItem[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.IProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.ICodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.IProductShelfLife[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.IReference[] | undefined;
};
/**
 * A medicinal product in a container or package.
 */
export declare type IMedicinalProductPackaged = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPackaged";
    /**
     * Unique identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The product with this is a pack for.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * Textual description.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPackaged.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.ICodeableConcept | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhir.IMarketingStatus[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhir.IReference | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * Batch numbering.
     */
    batchIdentifier?: fhir.IMedicinalProductPackagedBatchIdentifier[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: fhir.IMedicinalProductPackagedPackageItem[] | null;
};
/**
 * Batch numbering.
 */
export declare class MedicinalProductPackagedBatchIdentifier extends fhir.BackboneElement implements IMedicinalProductPackagedBatchIdentifier {
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
    constructor(source?: Partial<IMedicinalProductPackagedBatchIdentifier>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export declare class MedicinalProductPackagedPackageItem extends fhir.BackboneElement implements IMedicinalProductPackagedPackageItem {
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
    constructor(source?: Partial<IMedicinalProductPackagedPackageItem>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A medicinal product in a container or package.
 */
export declare class MedicinalProductPackaged extends fhir.DomainResource implements IMedicinalProductPackaged {
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
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPackaged.description
     */
    _description?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IMedicinalProductPackaged>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductPackaged.d.ts.map