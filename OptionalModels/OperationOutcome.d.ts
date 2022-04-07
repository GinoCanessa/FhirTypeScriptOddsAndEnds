import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * An error, warning, or information message that results from a system action.
 */
export declare class OperationOutcomeIssue extends fhirModels.BackboneElement implements fhirInterfaces.IOperationOutcomeIssue {
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code?: string | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhirModels.CodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    _diagnostics?: fhirModels.Element | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    _expression?: fhirModels.Element[] | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    _location?: fhirModels.Element[] | undefined;
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity?: OperationOutcomeIssueSeverityEnum | undefined;
    _severity?: fhirModels.Element | undefined;
    /**
     * Default constructor for OperationOutcomeIssue from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IOperationOutcomeIssue>);
    /**
     * Factory function to create a OperationOutcomeIssue from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IOperationOutcomeIssue): OperationOutcomeIssue;
    /**
     * Check if the current OperationOutcomeIssue contains all required elements.
     */
    checkRequiredElements(): string[];
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
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export declare class OperationOutcome extends fhirModels.DomainResource implements fhirInterfaces.IOperationOutcome {
    /**
     * Resource Type Name
     */
    readonly resourceType = "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue?: fhirModels.OperationOutcomeIssue[] | undefined;
    /**
     * Default constructor for OperationOutcome from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IOperationOutcome>);
    /**
     * Factory function to create a OperationOutcome from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IOperationOutcome): OperationOutcome;
    /**
     * Check if the current OperationOutcome contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=OperationOutcome.d.ts.map