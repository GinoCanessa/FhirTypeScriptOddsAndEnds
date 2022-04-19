import * as fhir from '../fhir';
/**
 * Associated or related knowledge about a medication.
 */
export declare type IMedicationKnowledgeRelatedMedicationKnowledge = fhir.IBackboneElement & {
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.IReference[] | null;
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Associated documentation about the medication.
 */
export declare type IMedicationKnowledgeMonograph = fhir.IBackboneElement & {
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.IReference | undefined;
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare type IMedicationKnowledgeIngredient = fhir.IBackboneElement & {
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    _isActive?: fhir.IFhirElement | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhir.IRatio | undefined;
};
/**
 * The price of the medication.
 */
export declare type IMedicationKnowledgeCost = fhir.IBackboneElement & {
    /**
     * The price of the medication.
     */
    cost: fhir.IMoney | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    _source?: fhir.IFhirElement | undefined;
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * The program under which the medication is reviewed.
 */
export declare type IMedicationKnowledgeMonitoringProgram = fhir.IBackboneElement & {
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Dosage for the medication for the specific guidelines.
 */
export declare type IMedicationKnowledgeAdministrationGuidelinesDosage = fhir.IBackboneElement & {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.IDosage[] | null;
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export declare type IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = fhir.IBackboneElement & {
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicQuantity?: fhir.IQuantity | undefined;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: string[] | undefined;
    _value?: fhir.IFhirElement[] | undefined;
};
/**
 * Guidelines for the administration of the medication.
 */
export declare type IMedicationKnowledgeAdministrationGuidelines = fhir.IBackboneElement & {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhir.IMedicationKnowledgeAdministrationGuidelinesDosage[] | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: fhir.IReference | undefined;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhir.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined;
};
/**
 * Categorization of the medication within a formulary or classification system.
 */
export declare type IMedicationKnowledgeMedicineClassification = fhir.IBackboneElement & {
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.ICodeableConcept[] | undefined;
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Information that only applies to packages (not products).
 */
export declare type IMedicationKnowledgePackaging = fhir.IBackboneElement & {
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export declare type IMedicationKnowledgeDrugCharacteristic = fhir.IBackboneElement & {
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhir.IFhirElement | undefined;
};
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export declare type IMedicationKnowledgeRegulatorySubstitution = fhir.IBackboneElement & {
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: boolean | null;
    _allowed?: fhir.IFhirElement | undefined;
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export declare type IMedicationKnowledgeRegulatorySchedule = fhir.IBackboneElement & {
    /**
     * Specifies the specific drug schedule.
     */
    schedule: fhir.ICodeableConcept | null;
};
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export declare type IMedicationKnowledgeRegulatoryMaxDispense = fhir.IBackboneElement & {
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.IDuration | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.IQuantity | null;
};
/**
 * Regulatory information about a medication.
 */
export declare type IMedicationKnowledgeRegulatory = fhir.IBackboneElement & {
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.IMedicationKnowledgeRegulatoryMaxDispense | undefined;
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.IReference | null;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.IMedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.IMedicationKnowledgeRegulatorySubstitution[] | undefined;
};
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export declare type IMedicationKnowledgeKinetics = fhir.IBackboneElement & {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhir.IQuantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.IDuration | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.IQuantity[] | undefined;
};
/**
 * Information about a medication that is used to support knowledge.
 */
export declare type IMedicationKnowledge = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationKnowledge";
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.IMedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhir.IQuantity | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.IReference[] | undefined;
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.IReference[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhir.IMedicationKnowledgeCost[] | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhir.ICodeableConcept | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.IMedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.IMedicationKnowledgeIngredient[] | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.ICodeableConcept[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.IMedicationKnowledgeKinetics[] | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.IReference | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.IMedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.IMedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.IMedicationKnowledgeMonograph[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.IMedicationKnowledgePackaging | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    _preparationInstruction?: fhir.IFhirElement | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.IMedicationKnowledgeRegulatory[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.IMedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationKnowledgeStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    _synonym?: fhir.IFhirElement[] | undefined;
};
/**
 * Associated or related knowledge about a medication.
 */
export declare class MedicationKnowledgeRelatedMedicationKnowledge extends fhir.BackboneElement implements fhir.IMedicationKnowledgeRelatedMedicationKnowledge {
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.Reference[] | null;
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeRelatedMedicationKnowledge - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeRelatedMedicationKnowledge>);
    /**
     * Check if the current MedicationKnowledgeRelatedMedicationKnowledge contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeRelatedMedicationKnowledge from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeRelatedMedicationKnowledge): MedicationKnowledgeRelatedMedicationKnowledge;
}
/**
 * Associated documentation about the medication.
 */
export declare class MedicationKnowledgeMonograph extends fhir.BackboneElement implements fhir.IMedicationKnowledgeMonograph {
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.Reference | undefined;
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonograph - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeMonograph>);
    /**
     * Check if the current MedicationKnowledgeMonograph contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeMonograph from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeMonograph): MedicationKnowledgeMonograph;
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare class MedicationKnowledgeIngredient extends fhir.BackboneElement implements fhir.IMedicationKnowledgeIngredient {
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    _isActive?: fhir.FhirElement | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationKnowledgeIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeIngredient>);
    /**
     * Check if the current MedicationKnowledgeIngredient contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeIngredient from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeIngredient): MedicationKnowledgeIngredient;
}
/**
 * The price of the medication.
 */
export declare class MedicationKnowledgeCost extends fhir.BackboneElement implements fhir.IMedicationKnowledgeCost {
    /**
     * The price of the medication.
     */
    cost: fhir.Money | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    _source?: fhir.FhirElement | undefined;
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeCost>);
    /**
     * Check if the current MedicationKnowledgeCost contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeCost from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeCost): MedicationKnowledgeCost;
}
/**
 * The program under which the medication is reviewed.
 */
export declare class MedicationKnowledgeMonitoringProgram extends fhir.BackboneElement implements fhir.IMedicationKnowledgeMonitoringProgram {
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonitoringProgram - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeMonitoringProgram>);
    /**
     * Check if the current MedicationKnowledgeMonitoringProgram contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeMonitoringProgram from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeMonitoringProgram): MedicationKnowledgeMonitoringProgram;
}
/**
 * Dosage for the medication for the specific guidelines.
 */
export declare class MedicationKnowledgeAdministrationGuidelinesDosage extends fhir.BackboneElement implements fhir.IMedicationKnowledgeAdministrationGuidelinesDosage {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.Dosage[] | null;
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeAdministrationGuidelinesDosage>);
    /**
     * Check if the current MedicationKnowledgeAdministrationGuidelinesDosage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeAdministrationGuidelinesDosage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeAdministrationGuidelinesDosage): MedicationKnowledgeAdministrationGuidelinesDosage;
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export declare class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends fhir.BackboneElement implements fhir.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicQuantity?: fhir.Quantity | undefined;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: string[] | undefined;
    _value?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>);
    /**
     * Check if the current MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
}
/**
 * Guidelines for the administration of the medication.
 */
export declare class MedicationKnowledgeAdministrationGuidelines extends fhir.BackboneElement implements fhir.IMedicationKnowledgeAdministrationGuidelines {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhir.MedicationKnowledgeAdministrationGuidelinesDosage[] | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: fhir.Reference | undefined;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhir.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelines - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeAdministrationGuidelines>);
    /**
     * Check if the current MedicationKnowledgeAdministrationGuidelines contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeAdministrationGuidelines from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeAdministrationGuidelines): MedicationKnowledgeAdministrationGuidelines;
}
/**
 * Categorization of the medication within a formulary or classification system.
 */
export declare class MedicationKnowledgeMedicineClassification extends fhir.BackboneElement implements fhir.IMedicationKnowledgeMedicineClassification {
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.CodeableConcept[] | undefined;
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeMedicineClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeMedicineClassification>);
    /**
     * Check if the current MedicationKnowledgeMedicineClassification contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeMedicineClassification from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeMedicineClassification): MedicationKnowledgeMedicineClassification;
}
/**
 * Information that only applies to packages (not products).
 */
export declare class MedicationKnowledgePackaging extends fhir.BackboneElement implements fhir.IMedicationKnowledgePackaging {
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationKnowledgePackaging - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgePackaging>);
    /**
     * Check if the current MedicationKnowledgePackaging contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgePackaging from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgePackaging): MedicationKnowledgePackaging;
}
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export declare class MedicationKnowledgeDrugCharacteristic extends fhir.BackboneElement implements fhir.IMedicationKnowledgeDrugCharacteristic {
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationKnowledgeDrugCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeDrugCharacteristic>);
    /**
     * Check if the current MedicationKnowledgeDrugCharacteristic contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeDrugCharacteristic from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeDrugCharacteristic): MedicationKnowledgeDrugCharacteristic;
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export declare class MedicationKnowledgeRegulatorySubstitution extends fhir.BackboneElement implements fhir.IMedicationKnowledgeRegulatorySubstitution {
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: boolean | null;
    _allowed?: fhir.FhirElement | undefined;
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeRegulatorySubstitution>);
    /**
     * Check if the current MedicationKnowledgeRegulatorySubstitution contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeRegulatorySubstitution from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeRegulatorySubstitution): MedicationKnowledgeRegulatorySubstitution;
}
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export declare class MedicationKnowledgeRegulatorySchedule extends fhir.BackboneElement implements fhir.IMedicationKnowledgeRegulatorySchedule {
    /**
     * Specifies the specific drug schedule.
     */
    schedule: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySchedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeRegulatorySchedule>);
    /**
     * Check if the current MedicationKnowledgeRegulatorySchedule contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeRegulatorySchedule from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeRegulatorySchedule): MedicationKnowledgeRegulatorySchedule;
}
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export declare class MedicationKnowledgeRegulatoryMaxDispense extends fhir.BackboneElement implements fhir.IMedicationKnowledgeRegulatoryMaxDispense {
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.Duration | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.Quantity | null;
    /**
     * Default constructor for MedicationKnowledgeRegulatoryMaxDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeRegulatoryMaxDispense>);
    /**
     * Check if the current MedicationKnowledgeRegulatoryMaxDispense contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeRegulatoryMaxDispense from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeRegulatoryMaxDispense): MedicationKnowledgeRegulatoryMaxDispense;
}
/**
 * Regulatory information about a medication.
 */
export declare class MedicationKnowledgeRegulatory extends fhir.BackboneElement implements fhir.IMedicationKnowledgeRegulatory {
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.MedicationKnowledgeRegulatoryMaxDispense | undefined;
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.Reference | null;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.MedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.MedicationKnowledgeRegulatorySubstitution[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeRegulatory>);
    /**
     * Check if the current MedicationKnowledgeRegulatory contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeRegulatory from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeRegulatory): MedicationKnowledgeRegulatory;
}
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export declare class MedicationKnowledgeKinetics extends fhir.BackboneElement implements fhir.IMedicationKnowledgeKinetics {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhir.Quantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.Duration | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.Quantity[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeKinetics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledgeKinetics>);
    /**
     * Check if the current MedicationKnowledgeKinetics contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledgeKinetics from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledgeKinetics): MedicationKnowledgeKinetics;
}
/**
 * Information about a medication that is used to support knowledge.
 */
export declare class MedicationKnowledge extends fhir.DomainResource implements fhir.IMedicationKnowledge {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationKnowledge";
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.MedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.Reference[] | undefined;
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.Reference[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhir.MedicationKnowledgeCost[] | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhir.CodeableConcept | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.MedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.MedicationKnowledgeIngredient[] | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.CodeableConcept[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.MedicationKnowledgeKinetics[] | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.MedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.MedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.MedicationKnowledgeMonograph[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.MedicationKnowledgePackaging | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    _preparationInstruction?: fhir.FhirElement | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.CodeableConcept[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.MedicationKnowledgeRegulatory[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.MedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationKnowledgeStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    _synonym?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for MedicationKnowledge - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationKnowledge>);
    /**
     * Check if the current MedicationKnowledge contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationKnowledge from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationKnowledge): MedicationKnowledge;
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