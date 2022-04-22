import * as fhir from '../fhir.js';
import { MedicationknowledgePackageTypeValueSetType } from '../fhirValueSets/MedicationknowledgePackageTypeValueSet.js';
import { MedicationknowledgeCharacteristicValueSetType } from '../fhirValueSets/MedicationknowledgeCharacteristicValueSet.js';
import { MedicationCodesValueSetType } from '../fhirValueSets/MedicationCodesValueSet.js';
import { MedicationknowledgeStatusValueSetType, MedicationknowledgeStatusValueSetEnum } from '../fhirValueSets/MedicationknowledgeStatusValueSet.js';
import { MedicationFormCodesValueSetType } from '../fhirValueSets/MedicationFormCodesValueSet.js';
import { RouteCodesValueSetType } from '../fhirValueSets/RouteCodesValueSet.js';
/**
 * Associated or related knowledge about a medication.
 */
export declare type IMedicationKnowledgeRelatedMedicationKnowledge = fhir.IBackboneElement & {
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.IReference[] | null;
};
/**
 * Associated documentation about the medication.
 */
export declare type IMedicationKnowledgeMonograph = fhir.IBackboneElement & {
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.IReference | undefined;
};
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare type IMedicationKnowledgeIngredient = fhir.IBackboneElement & {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.ingredient.isActive
     */
    _isActive?: fhir.IFhirElement | undefined;
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
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.cost.source
     */
    _source?: fhir.IFhirElement | undefined;
    /**
     * The price of the medication.
     */
    cost: fhir.IMoney | null;
};
/**
 * The program under which the medication is reviewed.
 */
export declare type IMedicationKnowledgeMonitoringProgram = fhir.IBackboneElement & {
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.monitoringProgram.name
     */
    _name?: fhir.IFhirElement | undefined;
};
/**
 * Dosage for the medication for the specific guidelines.
 */
export declare type IMedicationKnowledgeAdministrationGuidelinesDosage = fhir.IBackboneElement & {
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.IDosage[] | null;
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
    /**
     * Extended properties for primitive element: MedicationKnowledge.administrationGuidelines.patientCharacteristics.value
     */
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
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Information that only applies to packages (not products).
 */
export declare type IMedicationKnowledgePackaging = fhir.IBackboneElement & {
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.IQuantity | undefined;
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
    /**
     * Extended properties for primitive element: MedicationKnowledge.drugCharacteristic.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.drugCharacteristic.value[x]
     */
    _valueBase64Binary?: fhir.IFhirElement | undefined;
};
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export declare type IMedicationKnowledgeRegulatorySubstitution = fhir.IBackboneElement & {
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: boolean | null;
    /**
     * Extended properties for primitive element: MedicationKnowledge.regulatory.substitution.allowed
     */
    _allowed?: fhir.IFhirElement | undefined;
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
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.IQuantity | null;
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.IDuration | undefined;
};
/**
 * Regulatory information about a medication.
 */
export declare type IMedicationKnowledgeRegulatory = fhir.IBackboneElement & {
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.IReference | null;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.IMedicationKnowledgeRegulatorySubstitution[] | undefined;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.IMedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.IMedicationKnowledgeRegulatoryMaxDispense | undefined;
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
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.IQuantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.IDuration | undefined;
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
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationknowledgeStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.IReference | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhir.ICodeableConcept | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhir.IQuantity | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.synonym
     */
    _synonym?: fhir.IFhirElement[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.IMedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.IReference[] | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.IMedicationKnowledgeMonograph[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.IMedicationKnowledgeIngredient[] | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.preparationInstruction
     */
    _preparationInstruction?: fhir.IFhirElement | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.ICodeableConcept[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhir.IMedicationKnowledgeCost[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.IMedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.IMedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.IMedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.IMedicationKnowledgePackaging | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.IMedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.IReference[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.IMedicationKnowledgeRegulatory[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.IMedicationKnowledgeKinetics[] | undefined;
};
/**
 * Associated or related knowledge about a medication.
 */
export declare class MedicationKnowledgeRelatedMedicationKnowledge extends fhir.BackboneElement implements IMedicationKnowledgeRelatedMedicationKnowledge {
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.Reference[] | null;
    /**
     * Default constructor for MedicationKnowledgeRelatedMedicationKnowledge - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeRelatedMedicationKnowledge>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Associated documentation about the medication.
 */
export declare class MedicationKnowledgeMonograph extends fhir.BackboneElement implements IMedicationKnowledgeMonograph {
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonograph - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeMonograph>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare class MedicationKnowledgeIngredient extends fhir.BackboneElement implements IMedicationKnowledgeIngredient {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.ingredient.isActive
     */
    _isActive?: fhir.FhirElement | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationKnowledgeIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeIngredient>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The price of the medication.
 */
export declare class MedicationKnowledgeCost extends fhir.BackboneElement implements IMedicationKnowledgeCost {
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.cost.source
     */
    _source?: fhir.FhirElement | undefined;
    /**
     * The price of the medication.
     */
    cost: fhir.Money | null;
    /**
     * Default constructor for MedicationKnowledgeCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeCost>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The program under which the medication is reviewed.
 */
export declare class MedicationKnowledgeMonitoringProgram extends fhir.BackboneElement implements IMedicationKnowledgeMonitoringProgram {
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.monitoringProgram.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonitoringProgram - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeMonitoringProgram>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Dosage for the medication for the specific guidelines.
 */
export declare class MedicationKnowledgeAdministrationGuidelinesDosage extends fhir.BackboneElement implements IMedicationKnowledgeAdministrationGuidelinesDosage {
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.Dosage[] | null;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeAdministrationGuidelinesDosage>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export declare class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends fhir.BackboneElement implements IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
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
    /**
     * Extended properties for primitive element: MedicationKnowledge.administrationGuidelines.patientCharacteristics.value
     */
    _value?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Guidelines for the administration of the medication.
 */
export declare class MedicationKnowledgeAdministrationGuidelines extends fhir.BackboneElement implements IMedicationKnowledgeAdministrationGuidelines {
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
    constructor(source?: Partial<IMedicationKnowledgeAdministrationGuidelines>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Categorization of the medication within a formulary or classification system.
 */
export declare class MedicationKnowledgeMedicineClassification extends fhir.BackboneElement implements IMedicationKnowledgeMedicineClassification {
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for MedicationKnowledgeMedicineClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeMedicineClassification>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information that only applies to packages (not products).
 */
export declare class MedicationKnowledgePackaging extends fhir.BackboneElement implements IMedicationKnowledgePackaging {
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for MedicationKnowledgePackaging - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgePackaging>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): MedicationknowledgePackageTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export declare class MedicationKnowledgeDrugCharacteristic extends fhir.BackboneElement implements IMedicationKnowledgeDrugCharacteristic {
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
    /**
     * Extended properties for primitive element: MedicationKnowledge.drugCharacteristic.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.drugCharacteristic.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationKnowledgeDrugCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeDrugCharacteristic>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): MedicationknowledgeCharacteristicValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export declare class MedicationKnowledgeRegulatorySubstitution extends fhir.BackboneElement implements IMedicationKnowledgeRegulatorySubstitution {
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: boolean | null;
    /**
     * Extended properties for primitive element: MedicationKnowledge.regulatory.substitution.allowed
     */
    _allowed?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeRegulatorySubstitution>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export declare class MedicationKnowledgeRegulatorySchedule extends fhir.BackboneElement implements IMedicationKnowledgeRegulatorySchedule {
    /**
     * Specifies the specific drug schedule.
     */
    schedule: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySchedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeRegulatorySchedule>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export declare class MedicationKnowledgeRegulatoryMaxDispense extends fhir.BackboneElement implements IMedicationKnowledgeRegulatoryMaxDispense {
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.Quantity | null;
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.Duration | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatoryMaxDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeRegulatoryMaxDispense>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Regulatory information about a medication.
 */
export declare class MedicationKnowledgeRegulatory extends fhir.BackboneElement implements IMedicationKnowledgeRegulatory {
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.Reference | null;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.MedicationKnowledgeRegulatorySubstitution[] | undefined;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.MedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.MedicationKnowledgeRegulatoryMaxDispense | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeRegulatory>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export declare class MedicationKnowledgeKinetics extends fhir.BackboneElement implements IMedicationKnowledgeKinetics {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhir.Quantity[] | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.Quantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.Duration | undefined;
    /**
     * Default constructor for MedicationKnowledgeKinetics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledgeKinetics>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about a medication that is used to support knowledge.
 */
export declare class MedicationKnowledge extends fhir.DomainResource implements IMedicationKnowledge {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationKnowledge";
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationknowledgeStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhir.CodeableConcept | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.synonym
     */
    _synonym?: fhir.FhirElement[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.MedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.Reference[] | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.CodeableConcept[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.MedicationKnowledgeMonograph[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.MedicationKnowledgeIngredient[] | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.preparationInstruction
     */
    _preparationInstruction?: fhir.FhirElement | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.CodeableConcept[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhir.MedicationKnowledgeCost[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.MedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.MedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.MedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.MedicationKnowledgePackaging | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.MedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.Reference[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.MedicationKnowledgeRegulatory[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.MedicationKnowledgeKinetics[] | undefined;
    /**
     * Default constructor for MedicationKnowledge - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationKnowledge>);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): MedicationCodesValueSetType;
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): MedicationknowledgeStatusValueSetType;
    /**
     * Example-bound Value Set for doseForm
     */
    static doseFormExampleValueSet(): MedicationFormCodesValueSetType;
    /**
     * Example-bound Value Set for intendedRoute
     */
    static intendedRouteExampleValueSet(): RouteCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicationKnowledge.d.ts.map