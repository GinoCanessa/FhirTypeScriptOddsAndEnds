import * as fhir from '../fhir.js';
import { ParticipantRoleValueSetType } from '../fhirValueSets/ParticipantRoleValueSet.js';
import { CareTeamStatusValueSetType, CareTeamStatusValueSetEnum } from '../fhirValueSets/CareTeamStatusValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export declare type ICareTeamParticipant = fhir.IBackboneElement & {
    /**
     * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
     */
    role?: fhir.ICodeableConcept[] | undefined;
    /**
     * Patient only needs to be listed if they have a role other than "subject of care".
     * Member is optional because some participants may be known only by their role, particularly in draft plans.
     */
    member?: fhir.IReference | undefined;
    /**
     * The organization of the practitioner.
     */
    onBehalfOf?: fhir.IReference | undefined;
    /**
     * Indicates when the specific member or organization did (or is intended to) come into effect and end.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export declare type ICareTeam = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CareTeam";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
     */
    status?: CareTeamStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CareTeam.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * There may be multiple axis of categorization and one team may serve multiple purposes.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CareTeam.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Identifies the patient or group whose intended care is handled by the team.
     */
    subject?: fhir.IReference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Indicates when the team did (or is intended to) come into effect and end.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: fhir.ICareTeamParticipant[] | undefined;
    /**
     * Describes why the care team exists.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Condition(s) that this care team addresses.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The organization responsible for the care team.
     */
    managingOrganization?: fhir.IReference[] | undefined;
    /**
     * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * Comments made about the CareTeam.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export declare class CareTeamParticipant extends fhir.BackboneElement implements ICareTeamParticipant {
    /**
     * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
     */
    role?: fhir.CodeableConcept[] | undefined;
    /**
     * Patient only needs to be listed if they have a role other than "subject of care".
     * Member is optional because some participants may be known only by their role, particularly in draft plans.
     */
    member?: fhir.Reference | undefined;
    /**
     * The organization of the practitioner.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Indicates when the specific member or organization did (or is intended to) come into effect and end.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for CareTeamParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICareTeamParticipant>);
    /**
     * Example-bound Value Set for role
     */
    roleExampleValueSet(): ParticipantRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export declare class CareTeam extends fhir.DomainResource implements ICareTeam {
    /**
     * Resource Type Name
     */
    resourceType: "CareTeam";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
     */
    status?: CareTeamStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CareTeam.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * There may be multiple axis of categorization and one team may serve multiple purposes.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CareTeam.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Identifies the patient or group whose intended care is handled by the team.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Indicates when the team did (or is intended to) come into effect and end.
     */
    period?: fhir.Period | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: fhir.CareTeamParticipant[] | undefined;
    /**
     * Describes why the care team exists.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Condition(s) that this care team addresses.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The organization responsible for the care team.
     */
    managingOrganization?: fhir.Reference[] | undefined;
    /**
     * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Comments made about the CareTeam.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for CareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICareTeam>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): CareTeamStatusValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=CareTeam.d.ts.map