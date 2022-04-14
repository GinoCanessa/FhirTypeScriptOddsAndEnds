import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Associated or related knowledge about a medication.
 */
export interface IMedicationKnowledgeRelatedMedicationKnowledge extends fhirInterfaces.IBackboneElement {
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The category of the associated medication knowledge reference.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Associated documentation about the medication.
 */
export interface IMedicationKnowledgeMonograph extends fhirInterfaces.IBackboneElement {
    /**
     * Associated documentation about the medication.
     */
    source?: fhirInterfaces.IReference | undefined;
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export interface IMedicationKnowledgeIngredient extends fhirInterfaces.IBackboneElement {
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    _isActive?: fhirInterfaces.IElement | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhirInterfaces.IReference | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhirInterfaces.IRatio | undefined;
}
/**
 * The price of the medication.
 */
export interface IMedicationKnowledgeCost extends fhirInterfaces.IBackboneElement {
    /**
     * The price of the medication.
     */
    cost?: fhirInterfaces.IMoney | undefined;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    _source?: fhirInterfaces.IElement | undefined;
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The program under which the medication is reviewed.
 */
export interface IMedicationKnowledgeMonitoringProgram extends fhirInterfaces.IBackboneElement {
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Dosage for the medication for the specific guidelines.
 */
export interface IMedicationKnowledgeAdministrationGuidelinesDosage extends fhirInterfaces.IBackboneElement {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhirInterfaces.IDosage[] | undefined;
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export interface IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends fhirInterfaces.IBackboneElement {
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: string[] | undefined;
    _value?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Guidelines for the administration of the medication.
 */
export interface IMedicationKnowledgeAdministrationGuidelines extends fhirInterfaces.IBackboneElement {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesDosage[] | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: fhirInterfaces.IReference | undefined;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined;
}
/**
 * Categorization of the medication within a formulary or classification system.
 */
export interface IMedicationKnowledgeMedicineClassification extends fhirInterfaces.IBackboneElement {
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Information that only applies to packages (not products).
 */
export interface IMedicationKnowledgePackaging extends fhirInterfaces.IBackboneElement {
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export interface IMedicationKnowledgeDrugCharacteristic extends fhirInterfaces.IBackboneElement {
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirInterfaces.IElement | undefined;
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export interface IMedicationKnowledgeRegulatorySubstitution extends fhirInterfaces.IBackboneElement {
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed?: boolean | undefined;
    _allowed?: fhirInterfaces.IElement | undefined;
    /**
     * Specifies the type of substitution allowed.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export interface IMedicationKnowledgeRegulatorySchedule extends fhirInterfaces.IBackboneElement {
    /**
     * Specifies the specific drug schedule.
     */
    schedule?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export interface IMedicationKnowledgeRegulatoryMaxDispense extends fhirInterfaces.IBackboneElement {
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhirInterfaces.IDuration | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
}
/**
 * Regulatory information about a medication.
 */
export interface IMedicationKnowledgeRegulatory extends fhirInterfaces.IBackboneElement {
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhirInterfaces.IMedicationKnowledgeRegulatoryMaxDispense | undefined;
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority?: fhirInterfaces.IReference | undefined;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhirInterfaces.IMedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhirInterfaces.IMedicationKnowledgeRegulatorySubstitution[] | undefined;
}
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export interface IMedicationKnowledgeKinetics extends fhirInterfaces.IBackboneElement {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhirInterfaces.IQuantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhirInterfaces.IDuration | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhirInterfaces.IQuantity[] | undefined;
}
/**
 * Information about a medication that is used to support knowledge.
 */
export interface IMedicationKnowledge extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicationKnowledge";
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhirInterfaces.IMedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhirInterfaces.IQuantity | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhirInterfaces.IReference[] | undefined;
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhirInterfaces.IReference[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhirInterfaces.IMedicationKnowledgeCost[] | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhirInterfaces.IMedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhirInterfaces.IMedicationKnowledgeIngredient[] | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhirInterfaces.IMedicationKnowledgeKinetics[] | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhirInterfaces.IReference | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhirInterfaces.IMedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhirInterfaces.IMedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhirInterfaces.IMedicationKnowledgeMonograph[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhirInterfaces.IMedicationKnowledgePackaging | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    _preparationInstruction?: fhirInterfaces.IElement | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhirInterfaces.IMedicationKnowledgeRegulatory[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhirInterfaces.IMedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationKnowledgeStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    _synonym?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Code Values for the MedicationKnowledge.status field
 */
export declare enum MedicationKnowledgeStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IMedicationKnowledge.d.ts.map