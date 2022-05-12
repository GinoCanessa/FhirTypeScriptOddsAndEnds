import * as fhir from '../fhir.js';
import { ConditionCodeValueSetType } from '../fhirValueSets/ConditionCodeValueSet.js';
import { ConditionOutcomeValueSetType } from '../fhirValueSets/ConditionOutcomeValueSet.js';
import { HistoryStatusValueSetType } from '../fhirValueSets/HistoryStatusValueSet.js';
import { HistoryStatusValueSetEnum } from '../valueSetEnums.js';
import { HistoryAbsentReasonValueSetType } from '../fhirValueSets/HistoryAbsentReasonValueSet.js';
import { V3FamilyMemberValueSetType } from '../fhirValueSets/V3FamilyMemberValueSet.js';
import { AdministrativeGenderValueSetType } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * Valid arguments for the FamilyMemberHistoryCondition type.
 */
export interface FamilyMemberHistoryConditionArgs extends fhir.BackboneElementArgs {
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
     */
    contributedToDeath?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onset?: fhir.Age | fhir.Range | fhir.Period | fhir.FhirString | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: fhir.AgeArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export declare class FamilyMemberHistoryCondition extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
     */
    contributedToDeath?: fhir.FhirBoolean | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onset?: (fhir.Age | fhir.Range | fhir.Period | fhir.FhirString) | undefined;
    readonly __onsetIsChoice: true;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for FamilyMemberHistoryCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FamilyMemberHistoryConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ConditionCodeValueSetType;
    /**
     * Example-bound Value Set for outcome
     */
    static outcomeExampleValueSet(): ConditionOutcomeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the FamilyMemberHistory type.
 */
export interface FamilyMemberHistoryArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: HistoryStatusValueSetEnum | null;
    /**
     * Describes why the family member's history is not available.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConceptArgs | null;
    /**
     * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
     */
    sex?: fhir.CodeableConceptArgs | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    born?: fhir.Period | fhir.FhirDate | fhir.FhirString | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: fhir.FhirDate | string | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: fhir.FhirString | string | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    age?: fhir.Age | fhir.Range | fhir.FhirString | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageAge?: fhir.AgeArgs | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageRange?: fhir.RangeArgs | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageString?: fhir.FhirString | string | undefined;
    /**
     * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceased?: fhir.FhirBoolean | fhir.Age | fhir.Range | fhir.FhirDate | fhir.FhirString | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedAge?: fhir.AgeArgs | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhir.RangeArgs | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: fhir.FhirDate | string | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: fhir.FhirString | string | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */
    condition?: fhir.FamilyMemberHistoryConditionArgs[] | undefined;
}
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export declare class FamilyMemberHistory extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: HistoryStatusValueSetEnum | null;
    /**
     * Describes why the family member's history is not available.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.Reference | null;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: fhir.FhirString | undefined;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConcept | null;
    /**
     * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
     */
    sex?: fhir.CodeableConcept | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    born?: (fhir.Period | fhir.FhirDate | fhir.FhirString) | undefined;
    readonly __bornIsChoice: true;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    age?: (fhir.Age | fhir.Range | fhir.FhirString) | undefined;
    readonly __ageIsChoice: true;
    /**
     * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: fhir.FhirBoolean | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceased?: (fhir.FhirBoolean | fhir.Age | fhir.Range | fhir.FhirDate | fhir.FhirString) | undefined;
    readonly __deceasedIsChoice: true;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */
    condition?: fhir.FamilyMemberHistoryCondition[] | undefined;
    /**
     * Default constructor for FamilyMemberHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FamilyMemberHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): HistoryStatusValueSetType;
    /**
     * Example-bound Value Set for dataAbsentReason
     */
    static dataAbsentReasonExampleValueSet(): HistoryAbsentReasonValueSetType;
    /**
     * Example-bound Value Set for relationship
     */
    static relationshipExampleValueSet(): V3FamilyMemberValueSetType;
    /**
     * Extensible-bound Value Set for sex
     */
    static sexExtensibleValueSet(): AdministrativeGenderValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map