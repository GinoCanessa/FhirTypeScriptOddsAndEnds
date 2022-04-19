import * as fhir from '../fhir';
/**
 * Batch numbering.
 */
export declare type IMedicinalProductPackagedBatchIdentifier = fhir.IBackboneElement & {
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhir.IIdentifier | undefined;
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: fhir.IIdentifier | null;
};
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export declare type IMedicinalProductPackagedPackageItem = fhir.IBackboneElement & {
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhir.ICodeableConcept[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhir.IReference[] | undefined;
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhir.IReference[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * Material type of the package item.
     */
    material?: fhir.ICodeableConcept[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.ICodeableConcept[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhir.IMedicinalProductPackagedPackageItem[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.IProdCharacteristic | undefined;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity: fhir.IQuantity | null;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.IProductShelfLife[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type: fhir.ICodeableConcept | null;
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
     * Batch numbering.
     */
    batchIdentifier?: fhir.IMedicinalProductPackagedBatchIdentifier[] | undefined;
    /**
     * Textual description.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Unique identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.ICodeableConcept | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhir.IReference | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhir.IMarketingStatus[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: fhir.IMedicinalProductPackagedPackageItem[] | null;
    /**
     * The product with this is a pack for.
     */
    subject?: fhir.IReference[] | undefined;
};
/**
 * Batch numbering.
 */
export declare class MedicinalProductPackagedBatchIdentifier extends fhir.BackboneElement implements fhir.IMedicinalProductPackagedBatchIdentifier {
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhir.Identifier | undefined;
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: fhir.Identifier | null;
    /**
     * Default constructor for MedicinalProductPackagedBatchIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPackagedBatchIdentifier>);
    /**
     * Check if the current MedicinalProductPackagedBatchIdentifier contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPackagedBatchIdentifier from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductPackagedBatchIdentifier): MedicinalProductPackagedBatchIdentifier;
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export declare class MedicinalProductPackagedPackageItem extends fhir.BackboneElement implements fhir.IMedicinalProductPackagedPackageItem {
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhir.CodeableConcept[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhir.Reference[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Material type of the package item.
     */
    material?: fhir.CodeableConcept[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConcept[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhir.MedicinalProductPackagedPackageItem[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity: fhir.Quantity | null;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLife[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductPackagedPackageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPackagedPackageItem>);
    /**
     * Check if the current MedicinalProductPackagedPackageItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPackagedPackageItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductPackagedPackageItem): MedicinalProductPackagedPackageItem;
}
/**
 * A medicinal product in a container or package.
 */
export declare class MedicinalProductPackaged extends fhir.DomainResource implements fhir.IMedicinalProductPackaged {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPackaged";
    /**
     * Batch numbering.
     */
    batchIdentifier?: fhir.MedicinalProductPackagedBatchIdentifier[] | undefined;
    /**
     * Textual description.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Unique identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhir.Reference | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhir.MarketingStatus[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: fhir.MedicinalProductPackagedPackageItem[] | null;
    /**
     * The product with this is a pack for.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductPackaged - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPackaged>);
    /**
     * Check if the current MedicinalProductPackaged contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPackaged from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductPackaged): MedicinalProductPackaged;
}
//# sourceMappingURL=MedicinalProductPackaged.d.ts.map