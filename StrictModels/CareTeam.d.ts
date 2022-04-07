import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export declare class CareTeamParticipant extends fhirModels.BackboneElement implements fhirInterfaces.ICareTeamParticipant {
    /**
     * Patient only needs to be listed if they have a role other than "subject of care".
     * Member is optional because some participants may be known only by their role, particularly in draft plans.
     */
    member?: fhirModels.Reference | undefined;
    /**
     * The organization of the practitioner.
     */
    onBehalfOf?: fhirModels.Reference | undefined;
    /**
     * Indicates when the specific member or organization did (or is intended to) come into effect and end.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
     */
    role?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for CareTeamParticipant from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICareTeamParticipant);
}
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export declare class CareTeam extends fhirModels.DomainResource implements fhirInterfaces.ICareTeam {
    /**
     * Resource Type Name
     */
    readonly resourceType = "CareTeam";
    /**
     * There may be multiple axis of categorization and one team may serve multiple purposes.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The organization responsible for the care team.
     */
    managingOrganization?: fhirModels.Reference[] | undefined;
    /**
     * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Comments made about the CareTeam.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: fhirModels.CareTeamParticipant[] | undefined;
    /**
     * Indicates when the team did (or is intended to) come into effect and end.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Describes why the care team exists.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Condition(s) that this care team addresses.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
     */
    status?: CareTeamStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Identifies the patient or group whose intended care is handled by the team.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for CareTeam from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICareTeam);
}
/**
 * Code Values for the CareTeam.status field
 */
export declare enum CareTeamStatusEnum {
    PROPOSED = "proposed",
    ACTIVE = "active",
    SUSPENDED = "suspended",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=CareTeam.d.ts.map