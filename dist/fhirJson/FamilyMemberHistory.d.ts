import * as fhir from '../fhirJson.js';
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export interface FamilyMemberHistoryCondition extends fhir.BackboneElement {
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
    _contributedToDeath?: fhir.FhirElement;
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
    _onsetString?: fhir.FhirElement;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.Annotation[] | undefined;
}
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory extends fhir.DomainResource {
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
    _instantiatesCanonical?: (fhir.FhirElement | null)[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElement | null)[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'health-unknown' | 'partial' | null;
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
    _date?: fhir.FhirElement;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.name
     */
    _name?: fhir.FhirElement;
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
    _bornDate?: fhir.FhirElement;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornString?: fhir.FhirElement;
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
    _ageString?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.estimatedAge
     */
    _estimatedAge?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedBoolean?: fhir.FhirElement;
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
    _deceasedDate?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedString?: fhir.FhirElement;
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
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map