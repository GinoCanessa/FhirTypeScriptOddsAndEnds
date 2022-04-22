import * as fhir from '../fhir.js';
import { ReferencerangeMeaningValueSetType } from '../fhirValueSets/ReferencerangeMeaningValueSet.js';
import { ReferencerangeAppliestoValueSetType } from '../fhirValueSets/ReferencerangeAppliestoValueSet.js';
import { ObservationCodesValueSetType } from '../fhirValueSets/ObservationCodesValueSet.js';
import { DataAbsentReasonValueSetType } from '../fhirValueSets/DataAbsentReasonValueSet.js';
import { ObservationInterpretationValueSetType } from '../fhirValueSets/ObservationInterpretationValueSet.js';
import { ObservationStatusValueSetType, ObservationStatusValueSetEnum } from '../fhirValueSets/ObservationStatusValueSet.js';
import { ObservationCategoryValueSetType } from '../fhirValueSets/ObservationCategoryValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { ObservationMethodsValueSetType } from '../fhirValueSets/ObservationMethodsValueSet.js';
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export declare type IObservationReferenceRange = fhir.IBackboneElement & {
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.IQuantity | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
     */
    high?: fhir.IQuantity | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.
     */
    appliesTo?: fhir.ICodeableConcept[] | undefined;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
     */
    age?: fhir.IRange | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.referenceRange.text
     */
    _text?: fhir.IFhirElement | undefined;
};
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
export declare type IObservationComponent = fhir.IBackboneElement & {
    /**
     * *All* code-value and  component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.IRatio | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.ISampledData | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
     */
    dataAbsentReason?: fhir.ICodeableConcept | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation?: fhir.ICodeableConcept[] | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.IObservationReferenceRange[] | undefined;
};
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export declare type IObservation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Observation";
    /**
     * A unique identifier assigned to this observation.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * To link an Observation to an Encounter use `encounter`.  See the  [Notes](observation.html#obsgrouping) below for guidance on referencing another Observation.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Observation.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the distinction between the subject and what is directly measured for an observation is specified in the observation code itself ( e.g., "Blood Glucose") and does not need to be represented separately using this element.  Use `specimen` if a reference to a specimen is required.  If a code is required instead of a resource use either  `bodysite` for bodysites or the standard extension [focusCode](extension-observation-focuscode.html).
     */
    focus?: fhir.IReference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.IReference | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.effective[x]
     */
    _effectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveTiming?: fhir.ITiming | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.effective[x]
     */
    _effectiveInstant?: fhir.IFhirElement | undefined;
    /**
     * For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn’t require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.issued
     */
    _issued?: fhir.IFhirElement | undefined;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: fhir.IReference[] | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.IRatio | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.ISampledData | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when &gt; 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
     */
    dataAbsentReason?: fhir.ICodeableConcept | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation?: fhir.ICodeableConcept[] | undefined;
    /**
     * May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * Only used if not implicit in code for Observation.code.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).
     */
    specimen?: fhir.IReference | undefined;
    /**
     * Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such devices may be documented using the Provenance resource where relevant.
     */
    device?: fhir.IReference | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.IObservationReferenceRange[] | undefined;
    /**
     * When using this element, an observation will typically have either a value or a set of related resources, although both may be present in some cases.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.  Note that a system may calculate results from [QuestionnaireResponse](questionnaireresponse.html)  into a final score and represent the score as an Observation.
     */
    hasMember?: fhir.IReference[] | undefined;
    /**
     * All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.
     */
    derivedFrom?: fhir.IReference[] | undefined;
    /**
     * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
     */
    component?: fhir.IObservationComponent[] | undefined;
};
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export declare class ObservationReferenceRange extends fhir.BackboneElement implements IObservationReferenceRange {
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.Quantity | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
     */
    high?: fhir.Quantity | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.
     */
    appliesTo?: fhir.CodeableConcept[] | undefined;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
     */
    age?: fhir.Range | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.referenceRange.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ObservationReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IObservationReferenceRange>);
    /**
     * Preferred-bound Value Set for type
     */
    static typePreferredValueSet(): ReferencerangeMeaningValueSetType;
    /**
     * Example-bound Value Set for appliesTo
     */
    static appliesToExampleValueSet(): ReferencerangeAppliestoValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
export declare class ObservationComponent extends fhir.BackboneElement implements IObservationComponent {
    /**
     * *All* code-value and  component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation?: fhir.CodeableConcept[] | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.ObservationReferenceRange[] | undefined;
    /**
     * Default constructor for ObservationComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IObservationComponent>);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ObservationCodesValueSetType;
    /**
     * Extensible-bound Value Set for dataAbsentReason
     */
    static dataAbsentReasonExtensibleValueSet(): DataAbsentReasonValueSetType;
    /**
     * Extensible-bound Value Set for interpretation
     */
    static interpretationExtensibleValueSet(): ObservationInterpretationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export declare class Observation extends fhir.DomainResource implements IObservation {
    /**
     * Resource Type Name
     */
    resourceType: "Observation";
    /**
     * A unique identifier assigned to this observation.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * To link an Observation to an Encounter use `encounter`.  See the  [Notes](observation.html#obsgrouping) below for guidance on referencing another Observation.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Observation.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.CodeableConcept | null;
    /**
     * One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the distinction between the subject and what is directly measured for an observation is specified in the observation code itself ( e.g., "Blood Glucose") and does not need to be represented separately using this element.  Use `specimen` if a reference to a specimen is required.  If a code is required instead of a resource use either  `bodysite` for bodysites or the standard extension [focusCode](extension-observation-focuscode.html).
     */
    focus?: fhir.Reference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.Reference | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveTiming?: fhir.Timing | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.effective[x]
     */
    _effectiveInstant?: fhir.FhirElement | undefined;
    /**
     * For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn’t require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.issued
     */
    _issued?: fhir.FhirElement | undefined;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: fhir.Reference[] | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when &gt; 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation?: fhir.CodeableConcept[] | undefined;
    /**
     * May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Only used if not implicit in code for Observation.code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).
     */
    specimen?: fhir.Reference | undefined;
    /**
     * Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such devices may be documented using the Provenance resource where relevant.
     */
    device?: fhir.Reference | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.ObservationReferenceRange[] | undefined;
    /**
     * When using this element, an observation will typically have either a value or a set of related resources, although both may be present in some cases.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.  Note that a system may calculate results from [QuestionnaireResponse](questionnaireresponse.html)  into a final score and represent the score as an Observation.
     */
    hasMember?: fhir.Reference[] | undefined;
    /**
     * All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.
     */
    derivedFrom?: fhir.Reference[] | undefined;
    /**
     * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
     */
    component?: fhir.ObservationComponent[] | undefined;
    /**
     * Default constructor for Observation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IObservation>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ObservationStatusValueSetType;
    /**
     * Preferred-bound Value Set for category
     */
    static categoryPreferredValueSet(): ObservationCategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ObservationCodesValueSetType;
    /**
     * Extensible-bound Value Set for dataAbsentReason
     */
    static dataAbsentReasonExtensibleValueSet(): DataAbsentReasonValueSetType;
    /**
     * Extensible-bound Value Set for interpretation
     */
    static interpretationExtensibleValueSet(): ObservationInterpretationValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Example-bound Value Set for method
     */
    static methodExampleValueSet(): ObservationMethodsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Observation.d.ts.map