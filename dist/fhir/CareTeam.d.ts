import * as fhir from '../fhir.js';
import { ParticipantRoleValueSetType } from '../fhirValueSets/ParticipantRoleValueSet.js';
import { CareTeamStatusValueSetType } from '../fhirValueSets/CareTeamStatusValueSet.js';
import { CareTeamStatusValueSetEnum } from '../valueSetEnums.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * Valid arguments for the CareTeamParticipant type.
 */
export interface CareTeamParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Patient only needs to be listed if they have a role other than "subject of care".
     * Member is optional because some participants may be known only by their role, particularly in draft plans.
     */
    member?: fhir.ReferenceArgs | undefined;
    /**
     * The organization of the practitioner.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the specific member or organization did (or is intended to) come into effect and end.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export declare class CareTeamParticipant extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<CareTeamParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for role
     */
    static roleExampleValueSet(): ParticipantRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the CareTeam type.
 */
export interface CareTeamArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CareTeam" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
     */
    status?: CareTeamStatusValueSetEnum | undefined;
    /**
     * There may be multiple axis of categorization and one team may serve multiple purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Identifies the patient or group whose intended care is handled by the team.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the team did (or is intended to) come into effect and end.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: fhir.CareTeamParticipantArgs[] | undefined;
    /**
     * Describes why the care team exists.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Condition(s) that this care team addresses.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * The organization responsible for the care team.
     */
    managingOrganization?: fhir.ReferenceArgs[] | undefined;
    /**
     * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Comments made about the CareTeam.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export declare class CareTeam extends fhir.DomainResource {
    readonly __dataType: string;
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
     * There may be multiple axis of categorization and one team may serve multiple purposes.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
     */
    name?: fhir.FhirString | undefined;
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
    constructor(source?: Partial<CareTeamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): CareTeamStatusValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=CareTeam.d.ts.map