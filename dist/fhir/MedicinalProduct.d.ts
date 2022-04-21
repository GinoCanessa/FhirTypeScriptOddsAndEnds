import * as fhir from '../fhir.js';
/**
 * Coding words or phrases of the name.
 */
export declare type IMedicinalProductNameNamePart = fhir.IBackboneElement & {
    /**
     * A fragment of a product name.
     */
    part: string | null;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.namePart.part
     */
    _part?: fhir.IFhirElement | undefined;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhir.ICoding | null;
};
/**
 * Country where the name applies.
 */
export declare type IMedicinalProductNameCountryLanguage = fhir.IBackboneElement & {
    /**
     * Country code for where this name applies.
     */
    country: fhir.ICodeableConcept | null;
    /**
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: fhir.ICodeableConcept | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.ICodeableConcept | null;
};
/**
 * The product's name, including full name and possibly coded parts.
 */
export declare type IMedicinalProductName = fhir.IBackboneElement & {
    /**
     * The full product name.
     */
    productName: string | null;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.productName
     */
    _productName?: fhir.IFhirElement | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhir.IMedicinalProductNameNamePart[] | undefined;
    /**
     * Country where the name applies.
     */
    countryLanguage?: fhir.IMedicinalProductNameCountryLanguage[] | undefined;
};
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export declare type IMedicinalProductManufacturingBusinessOperation = fhir.IBackboneElement & {
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.ICodeableConcept | undefined;
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.IIdentifier | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.manufacturingBusinessOperation.effectiveDate
     */
    _effectiveDate?: fhir.IFhirElement | undefined;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.ICodeableConcept | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhir.IReference | undefined;
};
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export declare type IMedicinalProductSpecialDesignation = fhir.IBackboneElement & {
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.ICodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhir.IReference | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * Date when the designation was granted.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialDesignation.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.ICodeableConcept | undefined;
};
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export declare type IMedicinalProduct = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProduct";
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.ICoding | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.ICodeableConcept | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.ICodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.ICodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: string[] | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialMeasures
     */
    _specialMeasures?: fhir.IFhirElement[] | undefined;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.ICodeableConcept | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: fhir.ICodeableConcept[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: fhir.IMarketingStatus[] | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: fhir.IReference[] | undefined;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: fhir.IReference[] | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: fhir.IReference[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: fhir.IReference[] | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhir.IReference[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhir.IReference[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.IMedicinalProductName[] | null;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: fhir.IIdentifier[] | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: fhir.IMedicinalProductManufacturingBusinessOperation[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: fhir.IMedicinalProductSpecialDesignation[] | undefined;
};
/**
 * Coding words or phrases of the name.
 */
export declare class MedicinalProductNameNamePart extends fhir.BackboneElement implements IMedicinalProductNameNamePart {
    /**
     * A fragment of a product name.
     */
    part: string | null;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.namePart.part
     */
    _part?: fhir.FhirElement | undefined;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhir.Coding | null;
    /**
     * Default constructor for MedicinalProductNameNamePart - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductNameNamePart>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Country where the name applies.
 */
export declare class MedicinalProductNameCountryLanguage extends fhir.BackboneElement implements IMedicinalProductNameCountryLanguage {
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConcept | null;
    /**
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductNameCountryLanguage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductNameCountryLanguage>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export declare class MedicinalProductName extends fhir.BackboneElement implements IMedicinalProductName {
    /**
     * The full product name.
     */
    productName: string | null;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.productName
     */
    _productName?: fhir.FhirElement | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhir.MedicinalProductNameNamePart[] | undefined;
    /**
     * Country where the name applies.
     */
    countryLanguage?: fhir.MedicinalProductNameCountryLanguage[] | undefined;
    /**
     * Default constructor for MedicinalProductName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductName>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export declare class MedicinalProductManufacturingBusinessOperation extends fhir.BackboneElement implements IMedicinalProductManufacturingBusinessOperation {
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.CodeableConcept | undefined;
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.Identifier | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.manufacturingBusinessOperation.effectiveDate
     */
    _effectiveDate?: fhir.FhirElement | undefined;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.CodeableConcept | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicinalProductManufacturingBusinessOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductManufacturingBusinessOperation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export declare class MedicinalProductSpecialDesignation extends fhir.BackboneElement implements IMedicinalProductSpecialDesignation {
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhir.Reference | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date when the designation was granted.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialDesignation.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductSpecialDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductSpecialDesignation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export declare class MedicinalProduct extends fhir.DomainResource implements IMedicinalProduct {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProduct";
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.Coding | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: string[] | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialMeasures
     */
    _specialMeasures?: fhir.FhirElement[] | undefined;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: fhir.CodeableConcept[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: fhir.MarketingStatus[] | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: fhir.Reference[] | undefined;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: fhir.Reference[] | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: fhir.Reference[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: fhir.Reference[] | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhir.Reference[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhir.Reference[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.MedicinalProductName[] | null;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: fhir.Identifier[] | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: fhir.MedicinalProductManufacturingBusinessOperation[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: fhir.MedicinalProductSpecialDesignation[] | undefined;
    /**
     * Default constructor for MedicinalProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProduct>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProduct.d.ts.map