"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectRole = void 0;
/**
 * Code representing the role the entity played in the audit event.
 */
exports.ObjectRole = {
    /**
     * This object is the patient that is the subject of care related to this event.  It is identifiable by patient ID or equivalent.  The patient may be either human or animal.
     */
    object_role_Patient: {
        code: "1",
        display: "Patient",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * Insurance company, or any other organization who accepts responsibility for paying for the healthcare event.
     */
    object_role_Guarantor: {
        code: "10",
        display: "Guarantor",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A person or active system object involved in the event with a security role.
     */
    object_role_SecurityUserEntity: {
        code: "11",
        display: "Security User Entity",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A person or system object involved in the event with the authority to modify security roles of other objects.
     */
    object_role_SecurityUserGroup: {
        code: "12",
        display: "Security User Group",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A passive object, such as a role table, that is relevant to the event.
     */
    object_role_SecurityResource: {
        code: "13",
        display: "Security Resource",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * (deprecated)  Relevant to certain RBAC security methodologies.
     */
    object_role_SecurityGranularityDefinition: {
        code: "14",
        display: "Security Granularity Definition",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * Any person or organization responsible for providing care.  This encompasses all forms of care, licensed or otherwise, and all sorts of teams and care groups. Note the distinction between practitioner and the doctor that actually provided the care to the patient.
     */
    object_role_Practitioner: {
        code: "15",
        display: "Practitioner",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * The source or destination for data transfer, when it does not match some other role.
     */
    object_role_DataDestination: {
        code: "16",
        display: "Data Destination",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A source or destination for data transfer that acts as an archive, database, or similar role.
     */
    object_role_DataRepository: {
        code: "17",
        display: "Data Repository",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * An object that holds schedule information.  This could be an appointment book, availability information, etc.
     */
    object_role_Schedule: {
        code: "18",
        display: "Schedule",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * An organization or person that is the recipient of services.  This could be an organization that is buying services for a patient, or a person that is buying services for an animal.
     */
    object_role_Customer: {
        code: "19",
        display: "Customer",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * This is a location identified as related to the event.  This is usually the location where the event took place.  Note that for shipping, the usual events are arrival at a location or departure from a location.
     */
    object_role_Location: {
        code: "2",
        display: "Location",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * An order, task, work item, procedure step, or other description of work to be performed; e.g. a particular instance of an MPPS.
     */
    object_role_Job: {
        code: "20",
        display: "Job",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A list of jobs or a system that provides lists of jobs; e.g. an MWL SCP.
     */
    object_role_JobStream: {
        code: "21",
        display: "Job Stream",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * (Deprecated).
     */
    object_role_Table: {
        code: "22",
        display: "Table",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * An object that specifies or controls the routing or delivery of items.  For example, a distribution list is the routing criteria for mail.  The items delivered may be documents, jobs, or other objects.
     */
    object_role_RoutingCriteria: {
        code: "23",
        display: "Routing Criteria",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * The contents of a query.  This is used to capture the contents of any kind of query.  For security surveillance purposes knowing the queries being made is very important.
     */
    object_role_Query: {
        code: "24",
        display: "Query",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * This object is any kind of persistent document created as a result of the event.  This could be a paper report, film, electronic report, DICOM Study, etc.  Issues related to medical records life cycle management are conveyed elsewhere.
     */
    object_role_Report: {
        code: "3",
        display: "Report",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A logical object related to a health record event.  This is any healthcare  specific resource (object) not restricted to FHIR defined Resources.
     */
    object_role_DomainResource: {
        code: "4",
        display: "Domain Resource",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * This is any configurable file used to control creation of documents.  Examples include the objects maintained by the HL7 Master File transactions, Value Sets, etc.
     */
    object_role_MasterFile: {
        code: "5",
        display: "Master file",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A human participant not otherwise identified by some other category.
     */
    object_role_User: {
        code: "6",
        display: "User",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * (deprecated).
     */
    object_role_List: {
        code: "7",
        display: "List",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * Typically, a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
     */
    object_role_Doctor: {
        code: "8",
        display: "Doctor",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
    /**
     * A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
     */
    object_role_Subscriber: {
        code: "9",
        display: "Subscriber",
        system: "http://terminology.hl7.org/CodeSystem/object-role"
    },
};
//# sourceMappingURL=ObjectRole.js.map