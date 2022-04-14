import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export interface IDetectedIssueEvidence extends fhirInterfaces.IBackboneElement {
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export interface IDetectedIssueMitigation extends fhirInterfaces.IBackboneElement {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export interface IDetectedIssue extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "DetectedIssue";
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: string | undefined;
    _detail?: fhirInterfaces.IElement | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhirInterfaces.IDetectedIssueEvidence[] | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string | undefined;
    _identifiedDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhirInterfaces.IReference[] | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhirInterfaces.IDetectedIssueMitigation[] | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    _reference?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedIssueSeverityEnum | undefined;
    _severity?: fhirInterfaces.IElement | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status?: DetectedIssueStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the DetectedIssue.severity field
 */
export declare enum DetectedIssueSeverityEnum {
    HIGH = "high",
    MODERATE = "moderate",
    LOW = "low"
}
/**
 * Code Values for the DetectedIssue.status field
 */
export declare enum DetectedIssueStatusEnum {
    REGISTERED = "registered",
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    CORRECTED = "corrected",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IDetectedIssue.d.ts.map