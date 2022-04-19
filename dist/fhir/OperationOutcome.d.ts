import * as fhir from '../fhir';
/**
 * An error, warning, or information message that results from a system action.
 */
export declare type IOperationOutcomeIssue = fhir.IBackboneElement & {
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: string | null;
    _code?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.ICodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    _diagnostics?: fhir.IFhirElement | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    _expression?: fhir.IFhirElement[] | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    _location?: fhir.IFhirElement[] | undefined;
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: OperationOutcomeIssueSeverityEnum | null;
    _severity?: fhir.IFhirElement | undefined;
};
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export declare type IOperationOutcome = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.IOperationOutcomeIssue[] | null;
};
/**
 * An error, warning, or information message that results from a system action.
 */
export declare class OperationOutcomeIssue extends fhir.BackboneElement implements fhir.IOperationOutcomeIssue {
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: string | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    _diagnostics?: fhir.FhirElement | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    _expression?: fhir.FhirElement[] | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    _location?: fhir.FhirElement[] | undefined;
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: OperationOutcomeIssueSeverityEnum | null;
    _severity?: fhir.FhirElement | undefined;
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IOperationOutcomeIssue>);
    /**
     * Check if the current OperationOutcomeIssue contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a OperationOutcomeIssue from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IOperationOutcomeIssue): OperationOutcomeIssue;
}
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export declare class OperationOutcome extends fhir.DomainResource implements fhir.IOperationOutcome {
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssue[] | null;
    /**
     * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IOperationOutcome>);
    /**
     * Check if the current OperationOutcome contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a OperationOutcome from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IOperationOutcome): OperationOutcome;
}
/**
 * Code Values for the OperationOutcome.issue.severity field
 */
export declare enum OperationOutcomeIssueSeverityEnum {
    FATAL = "fatal",
    ERROR = "error",
    WARNING = "warning",
    INFORMATION = "information"
}
//# sourceMappingURL=OperationOutcome.d.ts.map