import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export interface IFamilyMemberHistoryCondition extends fhirInterfaces.IBackboneElement {
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
     */
    contributedToDeath?: boolean | undefined;
    _contributedToDeath?: fhirInterfaces.IElement | undefined;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: fhirInterfaces.IAge | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: fhirInterfaces.IRange | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: string | undefined;
    _onsetString?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface IFamilyMemberHistory extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "FamilyMemberHistory";
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageAge?: fhirInterfaces.IAge | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageRange?: fhirInterfaces.IRange | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageString?: string | undefined;
    _ageString?: fhirInterfaces.IElement | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: string | undefined;
    _bornDate?: fhirInterfaces.IElement | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string | undefined;
    _bornString?: fhirInterfaces.IElement | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */
    condition?: fhirInterfaces.IFamilyMemberHistoryCondition[] | undefined;
    /**
     * Describes why the family member's history is not available.
     */
    dataAbsentReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean | undefined;
    _deceasedBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedAge?: fhirInterfaces.IAge | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhirInterfaces.IRange | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: string | undefined;
    _deceasedDate?: fhirInterfaces.IElement | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string | undefined;
    _deceasedString?: fhirInterfaces.IElement | undefined;
    /**
     * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: boolean | undefined;
    _estimatedAge?: fhirInterfaces.IElement | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirInterfaces.IElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirInterfaces.IElement[] | undefined;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The person who this history concerns.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
     */
    sex?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: FamilyMemberHistoryStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the FamilyMemberHistory.status field
 */
export declare enum FamilyMemberHistoryStatusEnum {
    PARTIAL = "partial",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    HEALTH_UNKNOWN = "health-unknown"
}
//# sourceMappingURL=IFamilyMemberHistory.d.ts.map