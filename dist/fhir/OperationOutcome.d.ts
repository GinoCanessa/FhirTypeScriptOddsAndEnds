import * as fhir from '../fhir.js';
import { IssueSeverityValueSetType, IssueSeverityValueSetEnum } from '../fhirValueSets/IssueSeverityValueSet.js';
import { IssueTypeValueSetType } from '../fhirValueSets/IssueTypeValueSet.js';
import { OperationOutcomeValueSetType } from '../fhirValueSets/OperationOutcomeValueSet.js';
/**
 * An error, warning, or information message that results from a system action.
 */
export declare type IOperationOutcomeIssue = fhir.IBackboneElement & {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: IssueSeverityValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.severity
     */
    _severity?: fhir.IFhirElement | undefined;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.ICodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.IFhirElement | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: fhir.IFhirElement[] | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.expression
     */
    _expression?: fhir.IFhirElement[] | undefined;
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
export declare class OperationOutcomeIssue extends fhir.BackboneElement implements IOperationOutcomeIssue {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: IssueSeverityValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.severity
     */
    _severity?: fhir.FhirElement | undefined;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.FhirElement | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: fhir.FhirElement[] | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.expression
     */
    _expression?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOperationOutcomeIssue>);
    /**
     * Required-bound Value Set for severity
     */
    severityRequiredValueSet(): IssueSeverityValueSetType;
    /**
     * Required-bound Value Set for code
     */
    codeRequiredValueSet(): IssueTypeValueSetType;
    /**
     * Example-bound Value Set for details
     */
    detailsExampleValueSet(): OperationOutcomeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export declare class OperationOutcome extends fhir.DomainResource implements IOperationOutcome {
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
    constructor(source?: Partial<IOperationOutcome>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=OperationOutcome.d.ts.map