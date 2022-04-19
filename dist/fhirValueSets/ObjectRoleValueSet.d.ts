import { Coding } from '../fhir';
/**
 * Code representing the role the entity played in the audit event.
 */
export declare const ObjectRoleValueSet: {
    /**
     * This object is the patient that is the subject of care related to this event.  It is identifiable by patient ID or equivalent.  The patient may be either human or animal.
     */
    object_role_Patient: Coding;
    /**
     * Insurance company, or any other organization who accepts responsibility for paying for the healthcare event.
     */
    object_role_Guarantor: Coding;
    /**
     * A person or active system object involved in the event with a security role.
     */
    object_role_SecurityUserEntity: Coding;
    /**
     * A person or system object involved in the event with the authority to modify security roles of other objects.
     */
    object_role_SecurityUserGroup: Coding;
    /**
     * A passive object, such as a role table, that is relevant to the event.
     */
    object_role_SecurityResource: Coding;
    /**
     * (deprecated)  Relevant to certain RBAC security methodologies.
     */
    object_role_SecurityGranularityDefinition: Coding;
    /**
     * Any person or organization responsible for providing care.  This encompasses all forms of care, licensed or otherwise, and all sorts of teams and care groups. Note the distinction between practitioner and the doctor that actually provided the care to the patient.
     */
    object_role_Practitioner: Coding;
    /**
     * The source or destination for data transfer, when it does not match some other role.
     */
    object_role_DataDestination: Coding;
    /**
     * A source or destination for data transfer that acts as an archive, database, or similar role.
     */
    object_role_DataRepository: Coding;
    /**
     * An object that holds schedule information.  This could be an appointment book, availability information, etc.
     */
    object_role_Schedule: Coding;
    /**
     * An organization or person that is the recipient of services.  This could be an organization that is buying services for a patient, or a person that is buying services for an animal.
     */
    object_role_Customer: Coding;
    /**
     * This is a location identified as related to the event.  This is usually the location where the event took place.  Note that for shipping, the usual events are arrival at a location or departure from a location.
     */
    object_role_Location: Coding;
    /**
     * An order, task, work item, procedure step, or other description of work to be performed; e.g. a particular instance of an MPPS.
     */
    object_role_Job: Coding;
    /**
     * A list of jobs or a system that provides lists of jobs; e.g. an MWL SCP.
     */
    object_role_JobStream: Coding;
    /**
     * (Deprecated).
     */
    object_role_Table: Coding;
    /**
     * An object that specifies or controls the routing or delivery of items.  For example, a distribution list is the routing criteria for mail.  The items delivered may be documents, jobs, or other objects.
     */
    object_role_RoutingCriteria: Coding;
    /**
     * The contents of a query.  This is used to capture the contents of any kind of query.  For security surveillance purposes knowing the queries being made is very important.
     */
    object_role_Query: Coding;
    /**
     * This object is any kind of persistent document created as a result of the event.  This could be a paper report, film, electronic report, DICOM Study, etc.  Issues related to medical records life cycle management are conveyed elsewhere.
     */
    object_role_Report: Coding;
    /**
     * A logical object related to a health record event.  This is any healthcare  specific resource (object) not restricted to FHIR defined Resources.
     */
    object_role_DomainResource: Coding;
    /**
     * This is any configurable file used to control creation of documents.  Examples include the objects maintained by the HL7 Master File transactions, Value Sets, etc.
     */
    object_role_MasterFile: Coding;
    /**
     * A human participant not otherwise identified by some other category.
     */
    object_role_User: Coding;
    /**
     * (deprecated).
     */
    object_role_List: Coding;
    /**
     * Typically, a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
     */
    object_role_Doctor: Coding;
    /**
     * A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
     */
    object_role_Subscriber: Coding;
};
//# sourceMappingURL=ObjectRoleValueSet.d.ts.map