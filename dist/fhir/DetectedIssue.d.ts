import * as fhir from '../fhir.js';
import { ManifestationOrSymptomValueSetType } from '../fhirValueSets/ManifestationOrSymptomValueSet.js';
import { DetectedissueMitigationActionValueSetType } from '../fhirValueSets/DetectedissueMitigationActionValueSet.js';
import { ObservationStatusValueSetType, ObservationStatusValueSetEnum } from '../fhirValueSets/ObservationStatusValueSet.js';
import { DetectedissueCategoryValueSetType } from '../fhirValueSets/DetectedissueCategoryValueSet.js';
import { DetectedissueSeverityValueSetType, DetectedissueSeverityValueSetEnum } from '../fhirValueSets/DetectedissueSeverityValueSet.js';
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export declare type IDetectedIssueEvidence = fhir.IBackboneElement & {
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail?: fhir.IReference[] | undefined;
};
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export declare type IDetectedIssueMitigation = fhir.IBackboneElement & {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.ICodeableConcept | null;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.mitigation.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.IReference | undefined;
};
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export declare type IDetectedIssue = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue";
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: DetectedIssue.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedissueSeverityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.severity
     */
    _severity?: fhir.IFhirElement | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.IReference | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.identified[x]
     */
    _identifiedDateTime?: fhir.IFhirElement | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhir.IPeriod | undefined;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.IReference | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.IReference[] | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhir.IDetectedIssueEvidence[] | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.detail
     */
    _detail?: fhir.IFhirElement | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.reference
     */
    _reference?: fhir.IFhirElement | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.IDetectedIssueMitigation[] | undefined;
};
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export declare class DetectedIssueEvidence extends fhir.BackboneElement implements IDetectedIssueEvidence {
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
    constructor(source?: Partial<IDetectedIssueEvidence>);
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ManifestationOrSymptomValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export declare class DetectedIssueMitigation extends fhir.BackboneElement implements IDetectedIssueMitigation {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConcept | null;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.mitigation.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDetectedIssueMitigation>);
    /**
     * Preferred-bound Value Set for action
     */
    actionPreferredValueSet(): DetectedissueMitigationActionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export declare class DetectedIssue extends fhir.DomainResource implements IDetectedIssue {
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
     * Extended properties for primitive element: DetectedIssue.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedissueSeverityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.severity
     */
    _severity?: fhir.FhirElement | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.identified[x]
     */
    _identifiedDateTime?: fhir.FhirElement | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhir.Period | undefined;
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
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.detail
     */
    _detail?: fhir.FhirElement | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.reference
     */
    _reference?: fhir.FhirElement | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.DetectedIssueMitigation[] | undefined;
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDetectedIssue>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ObservationStatusValueSetType;
    /**
     * Preferred-bound Value Set for code
     */
    codePreferredValueSet(): DetectedissueCategoryValueSetType;
    /**
     * Required-bound Value Set for severity
     */
    severityRequiredValueSet(): DetectedissueSeverityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=DetectedIssue.d.ts.map