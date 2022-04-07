import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Batch numbering.
 */
export declare class MedicinalProductPackagedBatchIdentifier extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPackagedBatchIdentifier {
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhirModels.Identifier | undefined;
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging?: fhirModels.Identifier | undefined;
    /**
     * Default constructor for MedicinalProductPackagedBatchIdentifier from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPackagedBatchIdentifier>);
    /**
     * Factory function to create a MedicinalProductPackagedBatchIdentifier from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPackagedBatchIdentifier): MedicinalProductPackagedBatchIdentifier;
    /**
     * Check if the current MedicinalProductPackagedBatchIdentifier contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export declare class MedicinalProductPackagedPackageItem extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPackagedPackageItem {
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhirModels.Reference[] | undefined;
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhirModels.Reference[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhirModels.Reference[] | undefined;
    /**
     * Material type of the package item.
     */
    material?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhirModels.MedicinalProductPackagedPackageItem[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhirModels.ProdCharacteristic | undefined;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhirModels.ProductShelfLife[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductPackagedPackageItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPackagedPackageItem>);
    /**
     * Factory function to create a MedicinalProductPackagedPackageItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPackagedPackageItem): MedicinalProductPackagedPackageItem;
    /**
     * Check if the current MedicinalProductPackagedPackageItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A medicinal product in a container or package.
 */
export declare class MedicinalProductPackaged extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductPackaged {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductPackaged";
    /**
     * Batch numbering.
     */
    batchIdentifier?: fhirModels.MedicinalProductPackagedBatchIdentifier[] | undefined;
    /**
     * Textual description.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Unique identifier.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhirModels.CodeableConcept | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhirModels.Reference[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhirModels.Reference | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhirModels.MarketingStatus[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem?: fhirModels.MedicinalProductPackagedPackageItem[] | undefined;
    /**
     * The product with this is a pack for.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductPackaged from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPackaged>);
    /**
     * Factory function to create a MedicinalProductPackaged from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPackaged): MedicinalProductPackaged;
    /**
     * Check if the current MedicinalProductPackaged contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=MedicinalProductPackaged.d.ts.map