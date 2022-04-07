import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export declare class MedicationIngredient extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationIngredient {
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    _isActive?: fhirModels.Element | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
     */
    itemCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
     */
    itemReference?: fhirModels.Reference | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhirModels.Ratio | undefined;
    /**
     * Default constructor for MedicationIngredient from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicationIngredient);
}
/**
 * Information that only applies to packages (not products).
 */
export declare class MedicationBatch extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationBatch {
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhirModels.Element | undefined;
    /**
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhirModels.Element | undefined;
    /**
     * Default constructor for MedicationBatch from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicationBatch);
}
/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export declare class Medication extends fhirModels.DomainResource implements fhirInterfaces.IMedication {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Medication";
    /**
     * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
     */
    amount?: fhirModels.Ratio | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    batch?: fhirModels.MedicationBatch | undefined;
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    form?: fhirModels.CodeableConcept | undefined;
    /**
     * The serial number could be included as an identifier.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
     */
    ingredient?: fhirModels.MedicationIngredient[] | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhirModels.Reference | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for Medication from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedication);
}
/**
 * Code Values for the Medication.status field
 */
export declare enum MedicationStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Medication.d.ts.map