import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Coding words or phrases of the name.
 */
export declare class MedicinalProductNameNamePart extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductNameNamePart {
    /**
     * A fragment of a product name.
     */
    part: string;
    _part?: fhirModels.Element | undefined;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhirModels.Coding;
    /**
     * Default constructor for MedicinalProductNameNamePart from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductNameNamePart);
}
/**
 * Country where the name applies.
 */
export declare class MedicinalProductNameCountryLanguage extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductNameCountryLanguage {
    /**
     * Country code for where this name applies.
     */
    country: fhirModels.CodeableConcept;
    /**
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: fhirModels.CodeableConcept | undefined;
    /**
     * Language code for this name.
     */
    language: fhirModels.CodeableConcept;
    /**
     * Default constructor for MedicinalProductNameCountryLanguage from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductNameCountryLanguage);
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export declare class MedicinalProductName extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductName {
    /**
     * Country where the name applies.
     */
    countryLanguage?: fhirModels.MedicinalProductNameCountryLanguage[] | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: fhirModels.MedicinalProductNameNamePart[] | undefined;
    /**
     * The full product name.
     */
    productName: string;
    _productName?: fhirModels.Element | undefined;
    /**
     * Default constructor for MedicinalProductName from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductName);
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export declare class MedicinalProductManufacturingBusinessOperation extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductManufacturingBusinessOperation {
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhirModels.Identifier | undefined;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhirModels.CodeableConcept | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string | undefined;
    _effectiveDate?: fhirModels.Element | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: fhirModels.Reference[] | undefined;
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhirModels.CodeableConcept | undefined;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhirModels.Reference | undefined;
    /**
     * Default constructor for MedicinalProductManufacturingBusinessOperation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductManufacturingBusinessOperation);
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export declare class MedicinalProductSpecialDesignation extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductSpecialDesignation {
    /**
     * Date when the designation was granted.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhirModels.Reference | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhirModels.CodeableConcept | undefined;
    /**
     * Animal species for which this applies.
     */
    species?: fhirModels.CodeableConcept | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductSpecialDesignation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductSpecialDesignation);
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export declare class MedicinalProduct extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProduct {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProduct";
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhirModels.CodeableConcept | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: fhirModels.Reference[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: fhirModels.Reference[] | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhirModels.CodeableConcept | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: fhirModels.Reference[] | undefined;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: fhirModels.Identifier[] | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhirModels.Coding | undefined;
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhirModels.CodeableConcept | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: fhirModels.MedicinalProductManufacturingBusinessOperation[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: fhirModels.MarketingStatus[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: fhirModels.Reference[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: fhirModels.MedicinalProductName[];
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: fhirModels.Reference[] | undefined;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhirModels.CodeableConcept | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: fhirModels.Reference[] | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: fhirModels.MedicinalProductSpecialDesignation[] | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: string[] | undefined;
    _specialMeasures?: fhirModels.Element[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProduct from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProduct);
}
//# sourceMappingURL=MedicinalProduct.d.ts.map