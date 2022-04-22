import * as fhir from '../fhir.js';
import { ResearchSubjectStatusValueSetType, ResearchSubjectStatusValueSetEnum } from '../fhirValueSets/ResearchSubjectStatusValueSet.js';
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare type IResearchSubject = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject";
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ResearchSubject.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.IReference | null;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.IReference | null;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.assignedArm
     */
    _assignedArm?: fhir.IFhirElement | undefined;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.actualArm
     */
    _actualArm?: fhir.IFhirElement | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.IReference | undefined;
};
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare class ResearchSubject extends fhir.DomainResource implements IResearchSubject {
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
     * Extended properties for primitive element: ResearchSubject.status
     */
    _status?: fhir.FhirElement | undefined;
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
    assignedArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.assignedArm
     */
    _assignedArm?: fhir.FhirElement | undefined;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.actualArm
     */
    _actualArm?: fhir.FhirElement | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.Reference | undefined;
    /**
     * Default constructor for ResearchSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IResearchSubject>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ResearchSubjectStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ResearchSubject.d.ts.map