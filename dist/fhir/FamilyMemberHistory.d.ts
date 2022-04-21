import * as fhir from '../fhir.js';
import { ConditionCodeValueSetType } from '../fhirValueSets/ConditionCodeValueSet.js';
import { ConditionOutcomeValueSetType } from '../fhirValueSets/ConditionOutcomeValueSet.js';
import { HistoryStatusValueSetType, HistoryStatusValueSetEnum } from '../fhirValueSets/HistoryStatusValueSet.js';
import { HistoryAbsentReasonValueSetType } from '../fhirValueSets/HistoryAbsentReasonValueSet.js';
import { V3FamilyMemberValueSetType } from '../fhirValueSets/V3FamilyMemberValueSet.js';
import { AdministrativeGenderValueSetType } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export declare type IFamilyMemberHistoryCondition = fhir.IBackboneElement & {
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhir.ICodeableConcept | undefined;
    /**
     * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
     */
    contributedToDeath?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.condition.contributedToDeath
     */
    _contributedToDeath?: fhir.IFhirElement | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: fhir.IAge | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: fhir.IRange | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: fhir.IPeriod | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.condition.onset[x]
     */
    _onsetString?: fhir.IFhirElement | undefined;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export declare type IFamilyMemberHistory = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.instantiatesUri
     */
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: HistoryStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Describes why the family member's history is not available.
     */
    dataAbsentReason?: fhir.ICodeableConcept | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.IReference | null;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.ICodeableConcept | null;
    /**
     * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
     */
    sex?: fhir.ICodeableConcept | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornPeriod?: fhir.IPeriod | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornDate?: fhir.IFhirElement | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornString?: fhir.IFhirElement | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageAge?: fhir.IAge | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageRange?: fhir.IRange | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.age[x]
     */
    _ageString?: fhir.IFhirElement | undefined;
    /**
     * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.estimatedAge
     */
    _estimatedAge?: fhir.IFhirElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedBoolean?: fhir.IFhirElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedAge?: fhir.IAge | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhir.IRange | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedDate?: fhir.IFhirElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedString?: fhir.IFhirElement | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */
    condition?: fhir.IFamilyMemberHistoryCondition[] | undefined;
};
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export declare class FamilyMemberHistoryCondition extends fhir.BackboneElement implements IFamilyMemberHistoryCondition {
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
    contributedToDeath?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.condition.contributedToDeath
     */
    _contributedToDeath?: fhir.FhirElement | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: fhir.Age | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: fhir.Range | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: fhir.Period | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.condition.onset[x]
     */
    _onsetString?: fhir.FhirElement | undefined;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for FamilyMemberHistoryCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IFamilyMemberHistoryCondition>);
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ConditionCodeValueSetType;
    /**
     * Example-bound Value Set for outcome
     */
    outcomeExampleValueSet(): ConditionOutcomeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export declare class FamilyMemberHistory extends fhir.DomainResource implements IFamilyMemberHistory {
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
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: HistoryStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.status
     */
    _status?: fhir.FhirElement | undefined;
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.name
     */
    _name?: fhir.FhirElement | undefined;
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
    bornPeriod?: fhir.Period | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornDate?: fhir.FhirElement | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornString?: fhir.FhirElement | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageAge?: fhir.Age | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageRange?: fhir.Range | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.age[x]
     */
    _ageString?: fhir.FhirElement | undefined;
    /**
     * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.estimatedAge
     */
    _estimatedAge?: fhir.FhirElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedBoolean?: fhir.FhirElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedAge?: fhir.Age | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhir.Range | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedDate?: fhir.FhirElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedString?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IFamilyMemberHistory>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): HistoryStatusValueSetType;
    /**
     * Example-bound Value Set for dataAbsentReason
     */
    dataAbsentReasonExampleValueSet(): HistoryAbsentReasonValueSetType;
    /**
     * Example-bound Value Set for relationship
     */
    relationshipExampleValueSet(): V3FamilyMemberValueSetType;
    /**
     * Extensible-bound Value Set for sex
     */
    sexExtensibleValueSet(): AdministrativeGenderValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map