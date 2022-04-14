import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Associated or related knowledge about a medication.
 */
export declare class MedicationKnowledgeRelatedMedicationKnowledge extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeRelatedMedicationKnowledge {
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference?: fhirModels.Reference[] | undefined;
    /**
     * The category of the associated medication knowledge reference.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeRelatedMedicationKnowledge from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeRelatedMedicationKnowledge>);
    /**
     * Factory function to create a MedicationKnowledgeRelatedMedicationKnowledge from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeRelatedMedicationKnowledge): MedicationKnowledgeRelatedMedicationKnowledge;
    /**
     * Check if the current MedicationKnowledgeRelatedMedicationKnowledge contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Associated documentation about the medication.
 */
export declare class MedicationKnowledgeMonograph extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeMonograph {
    /**
     * Associated documentation about the medication.
     */
    source?: fhirModels.Reference | undefined;
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonograph from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeMonograph>);
    /**
     * Factory function to create a MedicationKnowledgeMonograph from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeMonograph): MedicationKnowledgeMonograph;
    /**
     * Check if the current MedicationKnowledgeMonograph contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare class MedicationKnowledgeIngredient extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeIngredient {
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    _isActive?: fhirModels.Element | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhirModels.Reference | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhirModels.Ratio | undefined;
    /**
     * Default constructor for MedicationKnowledgeIngredient from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeIngredient>);
    /**
     * Factory function to create a MedicationKnowledgeIngredient from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeIngredient): MedicationKnowledgeIngredient;
    /**
     * Check if the current MedicationKnowledgeIngredient contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The price of the medication.
 */
export declare class MedicationKnowledgeCost extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeCost {
    /**
     * The price of the medication.
     */
    cost?: fhirModels.Money | undefined;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    _source?: fhirModels.Element | undefined;
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeCost from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeCost>);
    /**
     * Factory function to create a MedicationKnowledgeCost from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeCost): MedicationKnowledgeCost;
    /**
     * Check if the current MedicationKnowledgeCost contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The program under which the medication is reviewed.
 */
export declare class MedicationKnowledgeMonitoringProgram extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeMonitoringProgram {
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonitoringProgram from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeMonitoringProgram>);
    /**
     * Factory function to create a MedicationKnowledgeMonitoringProgram from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeMonitoringProgram): MedicationKnowledgeMonitoringProgram;
    /**
     * Check if the current MedicationKnowledgeMonitoringProgram contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Dosage for the medication for the specific guidelines.
 */
export declare class MedicationKnowledgeAdministrationGuidelinesDosage extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesDosage {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhirModels.Dosage[] | undefined;
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesDosage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesDosage>);
    /**
     * Factory function to create a MedicationKnowledgeAdministrationGuidelinesDosage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesDosage): MedicationKnowledgeAdministrationGuidelinesDosage;
    /**
     * Check if the current MedicationKnowledgeAdministrationGuidelinesDosage contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export declare class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicQuantity?: fhirModels.Quantity | undefined;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: string[] | undefined;
    _value?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>);
    /**
     * Factory function to create a MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
    /**
     * Check if the current MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Guidelines for the administration of the medication.
 */
export declare class MedicationKnowledgeAdministrationGuidelines extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeAdministrationGuidelines {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhirModels.MedicationKnowledgeAdministrationGuidelinesDosage[] | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: fhirModels.Reference | undefined;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhirModels.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelines from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeAdministrationGuidelines>);
    /**
     * Factory function to create a MedicationKnowledgeAdministrationGuidelines from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeAdministrationGuidelines): MedicationKnowledgeAdministrationGuidelines;
    /**
     * Check if the current MedicationKnowledgeAdministrationGuidelines contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Categorization of the medication within a formulary or classification system.
 */
export declare class MedicationKnowledgeMedicineClassification extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeMedicineClassification {
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeMedicineClassification from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeMedicineClassification>);
    /**
     * Factory function to create a MedicationKnowledgeMedicineClassification from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeMedicineClassification): MedicationKnowledgeMedicineClassification;
    /**
     * Check if the current MedicationKnowledgeMedicineClassification contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information that only applies to packages (not products).
 */
export declare class MedicationKnowledgePackaging extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgePackaging {
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgePackaging from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgePackaging>);
    /**
     * Factory function to create a MedicationKnowledgePackaging from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgePackaging): MedicationKnowledgePackaging;
    /**
     * Check if the current MedicationKnowledgePackaging contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export declare class MedicationKnowledgeDrugCharacteristic extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeDrugCharacteristic {
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirModels.Element | undefined;
    /**
     * Default constructor for MedicationKnowledgeDrugCharacteristic from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeDrugCharacteristic>);
    /**
     * Factory function to create a MedicationKnowledgeDrugCharacteristic from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeDrugCharacteristic): MedicationKnowledgeDrugCharacteristic;
    /**
     * Check if the current MedicationKnowledgeDrugCharacteristic contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export declare class MedicationKnowledgeRegulatorySubstitution extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeRegulatorySubstitution {
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed?: boolean | undefined;
    _allowed?: fhirModels.Element | undefined;
    /**
     * Specifies the type of substitution allowed.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySubstitution from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeRegulatorySubstitution>);
    /**
     * Factory function to create a MedicationKnowledgeRegulatorySubstitution from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeRegulatorySubstitution): MedicationKnowledgeRegulatorySubstitution;
    /**
     * Check if the current MedicationKnowledgeRegulatorySubstitution contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export declare class MedicationKnowledgeRegulatorySchedule extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeRegulatorySchedule {
    /**
     * Specifies the specific drug schedule.
     */
    schedule?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySchedule from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeRegulatorySchedule>);
    /**
     * Factory function to create a MedicationKnowledgeRegulatorySchedule from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeRegulatorySchedule): MedicationKnowledgeRegulatorySchedule;
    /**
     * Check if the current MedicationKnowledgeRegulatorySchedule contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export declare class MedicationKnowledgeRegulatoryMaxDispense extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeRegulatoryMaxDispense {
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhirModels.Duration | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatoryMaxDispense from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeRegulatoryMaxDispense>);
    /**
     * Factory function to create a MedicationKnowledgeRegulatoryMaxDispense from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeRegulatoryMaxDispense): MedicationKnowledgeRegulatoryMaxDispense;
    /**
     * Check if the current MedicationKnowledgeRegulatoryMaxDispense contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Regulatory information about a medication.
 */
export declare class MedicationKnowledgeRegulatory extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeRegulatory {
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhirModels.MedicationKnowledgeRegulatoryMaxDispense | undefined;
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority?: fhirModels.Reference | undefined;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhirModels.MedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhirModels.MedicationKnowledgeRegulatorySubstitution[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatory from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeRegulatory>);
    /**
     * Factory function to create a MedicationKnowledgeRegulatory from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeRegulatory): MedicationKnowledgeRegulatory;
    /**
     * Check if the current MedicationKnowledgeRegulatory contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export declare class MedicationKnowledgeKinetics extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationKnowledgeKinetics {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhirModels.Quantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhirModels.Duration | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhirModels.Quantity[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeKinetics from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledgeKinetics>);
    /**
     * Factory function to create a MedicationKnowledgeKinetics from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledgeKinetics): MedicationKnowledgeKinetics;
    /**
     * Check if the current MedicationKnowledgeKinetics contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about a medication that is used to support knowledge.
 */
export declare class MedicationKnowledge extends fhirModels.DomainResource implements fhirInterfaces.IMedicationKnowledge {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicationKnowledge";
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhirModels.MedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhirModels.Quantity | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhirModels.Reference[] | undefined;
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhirModels.Reference[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhirModels.MedicationKnowledgeCost[] | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhirModels.CodeableConcept | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhirModels.MedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhirModels.MedicationKnowledgeIngredient[] | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhirModels.MedicationKnowledgeKinetics[] | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhirModels.Reference | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhirModels.MedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhirModels.MedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhirModels.MedicationKnowledgeMonograph[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhirModels.MedicationKnowledgePackaging | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    _preparationInstruction?: fhirModels.Element | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhirModels.MedicationKnowledgeRegulatory[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhirModels.MedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationKnowledgeStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    _synonym?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for MedicationKnowledge from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicationKnowledge>);
    /**
     * Factory function to create a MedicationKnowledge from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicationKnowledge): MedicationKnowledge;
    /**
     * Check if the current MedicationKnowledge contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the MedicationKnowledge.status field
 */
export declare enum MedicationKnowledgeStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=MedicationKnowledge.d.ts.map