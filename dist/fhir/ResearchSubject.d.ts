import * as fhir from '../fhir.js';
import { ResearchSubjectStatusValueSetType } from '../fhirValueSets/ResearchSubjectStatusValueSet.js';
import { ResearchSubjectStatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the ResearchSubject type.
 */
export interface ResearchSubjectArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject" | undefined;
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusValueSetEnum | null;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.ReferenceArgs | null;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.ReferenceArgs | null;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: fhir.FhirString | string | undefined;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: fhir.FhirString | string | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.ReferenceArgs | undefined;
}
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare class ResearchSubject extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject";
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusValueSetEnum | null;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.Period | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.Reference | null;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.Reference | null;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: fhir.FhirString | undefined;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: fhir.FhirString | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.Reference | undefined;
    /**
     * Default constructor for ResearchSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchSubjectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ResearchSubjectStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=ResearchSubject.d.ts.map