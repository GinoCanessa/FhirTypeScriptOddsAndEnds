import * as fhir from '../fhirJson.js';
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export interface ResearchSubject extends fhir.DomainResource {
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
    status: 'candidate' | 'eligible' | 'follow-up' | 'ineligible' | 'not-registered' | 'off-study' | 'on-study' | 'on-study-intervention' | 'on-study-observation' | 'pending-on-study' | 'potential-candidate' | 'screening' | 'withdrawn' | null;
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
    _assignedArm?: fhir.FhirElement;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.actualArm
     */
    _actualArm?: fhir.FhirElement;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.Reference | undefined;
}
//# sourceMappingURL=ResearchSubject.d.ts.map