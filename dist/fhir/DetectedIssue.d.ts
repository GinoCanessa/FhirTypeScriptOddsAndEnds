import * as fhir from '../fhir.js';
import { ManifestationOrSymptomValueSetType } from '../fhirValueSets/ManifestationOrSymptomValueSet.js';
import { DetectedissueMitigationActionValueSetType } from '../fhirValueSets/DetectedissueMitigationActionValueSet.js';
import { ObservationStatusValueSetType } from '../fhirValueSets/ObservationStatusValueSet.js';
import { ObservationStatusValueSetEnum } from '../valueSetEnums.js';
import { DetectedissueCategoryValueSetType } from '../fhirValueSets/DetectedissueCategoryValueSet.js';
import { DetectedissueSeverityValueSetType } from '../fhirValueSets/DetectedissueSeverityValueSet.js';
import { DetectedissueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the DetectedIssueEvidence type.
 */
export interface DetectedIssueEvidenceArgs extends fhir.BackboneElementArgs {
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export declare class DetectedIssueEvidence extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail?: fhir.Reference[] | undefined;
    /**
     * Default constructor for DetectedIssueEvidence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueEvidenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ManifestationOrSymptomValueSetType;
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
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConceptArgs | null;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export declare class DetectedIssueMitigation extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConcept | null;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueMitigationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for action
     */
    static actionPreferredValueSet(): DetectedissueMitigationActionValueSetType;
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
 * Valid arguments for the DetectedIssue type.
 */
export interface DetectedIssueArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue" | undefined;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedissueSeverityValueSetEnum | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identified?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.ReferenceArgs[] | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhir.DetectedIssueEvidenceArgs[] | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: fhir.FhirString | string | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: fhir.FhirUri | string | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.DetectedIssueMitigationArgs[] | undefined;
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export declare class DetectedIssue extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue";
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedissueSeverityValueSetEnum | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identified?: (fhir.FhirDateTime | fhir.Period) | undefined;
    readonly __identifiedIsChoice: true;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.Reference | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.Reference[] | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhir.DetectedIssueEvidence[] | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: fhir.FhirString | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: fhir.FhirUri | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.DetectedIssueMitigation[] | undefined;
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ObservationStatusValueSetType;
    /**
     * Preferred-bound Value Set for code
     */
    static codePreferredValueSet(): DetectedissueCategoryValueSetType;
    /**
     * Required-bound Value Set for severity
     */
    static severityRequiredValueSet(): DetectedissueSeverityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=DetectedIssue.d.ts.map