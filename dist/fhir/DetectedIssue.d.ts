import * as fhir from '../fhir';
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
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.IReference | undefined;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
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
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.IReference | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: string | undefined;
    _detail?: fhir.IFhirElement | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhir.IDetectedIssueEvidence[] | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string | undefined;
    _identifiedDateTime?: fhir.IFhirElement | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhir.IPeriod | undefined;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.IReference[] | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.IDetectedIssueMitigation[] | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.IReference | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    _reference?: fhir.IFhirElement | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedIssueSeverityEnum | undefined;
    _severity?: fhir.IFhirElement | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: DetectedIssueStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export declare class DetectedIssueEvidence extends fhir.BackboneElement implements fhir.IDetectedIssueEvidence {
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
    constructor(source?: Partial<fhir.IDetectedIssueEvidence>);
    /**
     * Check if the current DetectedIssueEvidence contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DetectedIssueEvidence from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDetectedIssueEvidence): DetectedIssueEvidence;
}
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export declare class DetectedIssueMitigation extends fhir.BackboneElement implements fhir.IDetectedIssueMitigation {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConcept | null;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.Reference | undefined;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDetectedIssueMitigation>);
    /**
     * Check if the current DetectedIssueMitigation contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DetectedIssueMitigation from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDetectedIssueMitigation): DetectedIssueMitigation;
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export declare class DetectedIssue extends fhir.DomainResource implements fhir.IDetectedIssue {
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue";
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.Reference | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: string | undefined;
    _detail?: fhir.FhirElement | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhir.DetectedIssueEvidence[] | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string | undefined;
    _identifiedDateTime?: fhir.FhirElement | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhir.Period | undefined;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.Reference[] | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.DetectedIssueMitigation[] | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    _reference?: fhir.FhirElement | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: DetectedIssueSeverityEnum | undefined;
    _severity?: fhir.FhirElement | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: DetectedIssueStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDetectedIssue>);
    /**
     * Check if the current DetectedIssue contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DetectedIssue from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDetectedIssue): DetectedIssue;
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