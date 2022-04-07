import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export declare class DetectedIssueEvidence extends fhirModels.BackboneElement implements fhirInterfaces.IDetectedIssueEvidence {
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for DetectedIssueEvidence from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDetectedIssueEvidence>);
    /**
     * Factory function to create a DetectedIssueEvidence from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDetectedIssueEvidence): DetectedIssueEvidence;
    /**
     * Check if the current DetectedIssueEvidence contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export declare class DetectedIssueMitigation extends fhirModels.BackboneElement implements fhirInterfaces.IDetectedIssueMitigation {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action?: fhirModels.CodeableConcept | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Default constructor for DetectedIssueMitigation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDetectedIssueMitigation>);
    /**
     * Factory function to create a DetectedIssueMitigation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDetectedIssueMitigation): DetectedIssueMitigation;
    /**
     * Check if the current DetectedIssueMitigation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export declare class DetectedIssue extends fhirModels.DomainResource implements fhirInterfaces.IDetectedIssue {
    /**
     * Resource Type Name
     */
    readonly resourceType = "DetectedIssue";
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: string | undefined;
    _detail?: fhirModels.Element | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhirModels.DetectedIssueEvidence[] | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string | undefined;
    _identifiedDateTime?: fhirModels.Element | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhirModels.Period | undefined;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhirModels.Reference[] | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhirModels.DetectedIssueMitigation[] | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    _reference?: fhirModels.Element | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedIssueSeverityEnum | undefined;
    _severity?: fhirModels.Element | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status?: DetectedIssueStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for DetectedIssue from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDetectedIssue>);
    /**
     * Factory function to create a DetectedIssue from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDetectedIssue): DetectedIssue;
    /**
     * Check if the current DetectedIssue contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=DetectedIssue.d.ts.map