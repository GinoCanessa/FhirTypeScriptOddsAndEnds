import * as fhir from '../fhir';
/**
 * Coding words or phrases of the name.
 */
export declare type IMedicinalProductNameNamePart = fhir.IBackboneElement & {
    /**
     * A fragment of a product name.
     */
    part: string | null;
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
     * Country where the name applies.
     */
    countryLanguage?: fhir.IMedicinalProductNameCountryLanguage[] | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhir.IMedicinalProductNameNamePart[] | undefined;
    /**
     * The full product name.
     */
    productName: string | null;
    _productName?: fhir.IFhirElement | undefined;
};
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export declare type IMedicinalProductManufacturingBusinessOperation = fhir.IBackboneElement & {
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.IIdentifier | undefined;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.ICodeableConcept | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string | undefined;
    _effectiveDate?: fhir.IFhirElement | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.ICodeableConcept | undefined;
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
     * Date when the designation was granted.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhir.IReference | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.ICodeableConcept | undefined;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.ICodeableConcept | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.ICodeableConcept | undefined;
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
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.ICodeableConcept | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: fhir.IReference[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhir.IReference[] | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.ICodeableConcept | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhir.IReference[] | undefined;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: fhir.IIdentifier[] | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.ICoding | undefined;
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.ICodeableConcept | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: fhir.IMedicinalProductManufacturingBusinessOperation[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: fhir.IMarketingStatus[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: fhir.IReference[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.IMedicinalProductName[] | null;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: fhir.IReference[] | undefined;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.ICodeableConcept | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: fhir.IReference[] | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: fhir.IMedicinalProductSpecialDesignation[] | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: string[] | undefined;
    _specialMeasures?: fhir.IFhirElement[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Coding words or phrases of the name.
 */
export declare class MedicinalProductNameNamePart extends fhir.BackboneElement implements fhir.IMedicinalProductNameNamePart {
    /**
     * A fragment of a product name.
     */
    part: string | null;
    _part?: fhir.FhirElement | undefined;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhir.Coding | null;
    /**
     * Default constructor for MedicinalProductNameNamePart - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductNameNamePart>);
    /**
     * Check if the current MedicinalProductNameNamePart contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductNameNamePart from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductNameNamePart): MedicinalProductNameNamePart;
}
/**
 * Country where the name applies.
 */
export declare class MedicinalProductNameCountryLanguage extends fhir.BackboneElement implements fhir.IMedicinalProductNameCountryLanguage {
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
    constructor(source?: Partial<fhir.IMedicinalProductNameCountryLanguage>);
    /**
     * Check if the current MedicinalProductNameCountryLanguage contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductNameCountryLanguage from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductNameCountryLanguage): MedicinalProductNameCountryLanguage;
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export declare class MedicinalProductName extends fhir.BackboneElement implements fhir.IMedicinalProductName {
    /**
     * Country where the name applies.
     */
    countryLanguage?: fhir.MedicinalProductNameCountryLanguage[] | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhir.MedicinalProductNameNamePart[] | undefined;
    /**
     * The full product name.
     */
    productName: string | null;
    _productName?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicinalProductName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductName>);
    /**
     * Check if the current MedicinalProductName contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductName from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductName): MedicinalProductName;
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export declare class MedicinalProductManufacturingBusinessOperation extends fhir.BackboneElement implements fhir.IMedicinalProductManufacturingBusinessOperation {
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.Identifier | undefined;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string | undefined;
    _effectiveDate?: fhir.FhirElement | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.CodeableConcept | undefined;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicinalProductManufacturingBusinessOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductManufacturingBusinessOperation>);
    /**
     * Check if the current MedicinalProductManufacturingBusinessOperation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductManufacturingBusinessOperation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductManufacturingBusinessOperation): MedicinalProductManufacturingBusinessOperation;
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export declare class MedicinalProductSpecialDesignation extends fhir.BackboneElement implements fhir.IMedicinalProductSpecialDesignation {
    /**
     * Date when the designation was granted.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhir.Reference | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.CodeableConcept | undefined;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductSpecialDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductSpecialDesignation>);
    /**
     * Check if the current MedicinalProductSpecialDesignation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductSpecialDesignation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductSpecialDesignation): MedicinalProductSpecialDesignation;
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export declare class MedicinalProduct extends fhir.DomainResource implements fhir.IMedicinalProduct {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProduct";
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: fhir.Reference[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhir.Reference[] | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhir.Reference[] | undefined;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: fhir.Identifier[] | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.Coding | undefined;
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: fhir.MedicinalProductManufacturingBusinessOperation[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: fhir.MarketingStatus[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: fhir.Reference[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhir.MedicinalProductName[] | null;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: fhir.Reference[] | undefined;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: fhir.Reference[] | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: fhir.MedicinalProductSpecialDesignation[] | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: string[] | undefined;
    _specialMeasures?: fhir.FhirElement[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProduct>);
    /**
     * Check if the current MedicinalProduct contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProduct from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProduct): MedicinalProduct;
}
//# sourceMappingURL=MedicinalProduct.d.ts.map