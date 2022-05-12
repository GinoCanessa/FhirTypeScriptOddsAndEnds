import { Coding } from '../fhir.js';
/**
 * A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.
 */
export declare const AllTypesValueSet: {
    /**
     * Account: A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
     */
    readonly Account: Coding;
    /**
     * ActivityDefinition: This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
     */
    readonly ActivityDefinition: Coding;
    /**
     * Address: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
     */
    readonly Address: Coding;
    /**
     * AdverseEvent: Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
     */
    readonly AdverseEvent: Coding;
    /**
     * Age: A duration of time during which an organism (or a process) has existed.
     */
    readonly Age: Coding;
    /**
     * AllergyIntolerance: Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
     */
    readonly AllergyIntolerance: Coding;
    /**
     * Annotation: A  text note which also  contains information about who made the statement and when.
     */
    readonly Annotation: Coding;
    /**
     * Any: A place holder that means any kind of resource
     */
    readonly Any: Coding;
    /**
     * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    readonly Appointment: Coding;
    /**
     * AppointmentResponse: A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
     */
    readonly AppointmentResponse: Coding;
    /**
     * Attachment: For referring to data content defined in other formats.
     */
    readonly Attachment: Coding;
    /**
     * AuditEvent: A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
    readonly AuditEvent: Coding;
    /**
     * BackboneElement: Base definition for all elements that are defined inside a resource - but not those in a data type.
     */
    readonly BackboneElement: Coding;
    /**
     * base64Binary: A stream of bytes
     */
    readonly Base64Binary: Coding;
    /**
     * Basic: Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
     */
    readonly Basic: Coding;
    /**
     * Binary: A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
     */
    readonly Binary: Coding;
    /**
     * BiologicallyDerivedProduct: A material substance originating from a biological entity intended to be transplanted or infused
     * into another (possibly the same) biological entity.
     */
    readonly BiologicallyDerivedProduct: Coding;
    /**
     * BodyStructure: Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
     */
    readonly BodyStructure: Coding;
    /**
     * boolean: Value of "true" or "false"
     */
    readonly VALBoolean: Coding;
    /**
     * Bundle: A container for a collection of resources.
     */
    readonly Bundle: Coding;
    /**
     * canonical: A URI that is a reference to a canonical URL on a FHIR resource
     */
    readonly Canonical: Coding;
    /**
     * CapabilityStatement: A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
    readonly CapabilityStatement: Coding;
    /**
     * CarePlan: Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
    readonly CarePlan: Coding;
    /**
     * CareTeam: The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
     */
    readonly CareTeam: Coding;
    /**
     * CatalogEntry: Catalog entries are wrappers that contextualize items included in a catalog.
     */
    readonly CatalogEntry: Coding;
    /**
     * ChargeItem: The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
     */
    readonly ChargeItem: Coding;
    /**
     * ChargeItemDefinition: The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
     */
    readonly ChargeItemDefinition: Coding;
    /**
     * Claim: A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
     */
    readonly Claim: Coding;
    /**
     * ClaimResponse: This resource provides the adjudication details from the processing of a Claim resource.
     */
    readonly ClaimResponse: Coding;
    /**
     * ClinicalImpression: A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
     */
    readonly ClinicalImpression: Coding;
    /**
     * code: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    readonly Code: Coding;
    /**
     * CodeableConcept: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
     */
    readonly CodeableConcept: Coding;
    /**
     * CodeSystem: The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
     */
    readonly CodeSystem: Coding;
    /**
     * Coding: A reference to a code defined by a terminology system.
     */
    readonly Coding: Coding;
    /**
     * Communication: An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
     */
    readonly Communication: Coding;
    /**
     * CommunicationRequest: A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
     */
    readonly CommunicationRequest: Coding;
    /**
     * CompartmentDefinition: A compartment definition that defines how resources are accessed on a server.
     */
    readonly CompartmentDefinition: Coding;
    /**
     * Composition: A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
     */
    readonly Composition: Coding;
    /**
     * ConceptMap: A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
     */
    readonly ConceptMap: Coding;
    /**
     * Condition: A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
     */
    readonly Condition: Coding;
    /**
     * Consent: A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
     */
    readonly Consent: Coding;
    /**
     * ContactDetail: Specifies contact information for a person or organization.
     */
    readonly ContactDetail: Coding;
    /**
     * ContactPoint: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
     */
    readonly ContactPoint: Coding;
    /**
     * Contract: Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
     */
    readonly Contract: Coding;
    /**
     * Contributor: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
     */
    readonly Contributor: Coding;
    /**
     * Count: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    readonly Count: Coding;
    /**
     * Coverage: Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
     */
    readonly Coverage: Coding;
    /**
     * CoverageEligibilityRequest: The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
     */
    readonly CoverageEligibilityRequest: Coding;
    /**
     * CoverageEligibilityResponse: This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
     */
    readonly CoverageEligibilityResponse: Coding;
    /**
     * DataRequirement: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
     */
    readonly DataRequirement: Coding;
    /**
     * date: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    readonly Date: Coding;
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    readonly DateTime: Coding;
    /**
     * decimal: A rational number with implicit precision
     */
    readonly Decimal: Coding;
    /**
     * DetectedIssue: Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
     */
    readonly DetectedIssue: Coding;
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    readonly Device: Coding;
    /**
     * DeviceDefinition: The characteristics, operational status and capabilities of a medical-related component of a medical device.
     */
    readonly DeviceDefinition: Coding;
    /**
     * DeviceMetric: Describes a measurement, calculation or setting capability of a medical device.
     */
    readonly DeviceMetric: Coding;
    /**
     * DeviceRequest: Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
     */
    readonly DeviceRequest: Coding;
    /**
     * DeviceUseStatement: A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
     */
    readonly DeviceUseStatement: Coding;
    /**
     * DiagnosticReport: The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
     */
    readonly DiagnosticReport: Coding;
    /**
     * Distance: A length - a value with a unit that is a physical distance.
     */
    readonly Distance: Coding;
    /**
     * DocumentManifest: A collection of documents compiled for a purpose together with metadata that applies to the collection.
     */
    readonly DocumentManifest: Coding;
    /**
     * DocumentReference: A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
     */
    readonly DocumentReference: Coding;
    /**
     * DomainResource: A resource that includes narrative, extensions, and contained resources.
     */
    readonly DomainResource: Coding;
    /**
     * Dosage: Indicates how the medication is/was taken or should be taken by the patient.
     */
    readonly Dosage: Coding;
    /**
     * Duration: A length of time.
     */
    readonly Duration: Coding;
    /**
     * EffectEvidenceSynthesis: The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
     */
    readonly EffectEvidenceSynthesis: Coding;
    /**
     * Element: Base definition for all elements in a resource.
     */
    readonly VALElement: Coding;
    /**
     * ElementDefinition: Captures constraints on each element within the resource, profile, or extension.
     */
    readonly ElementDefinition: Coding;
    /**
     * Encounter: An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
    readonly Encounter: Coding;
    /**
     * Endpoint: The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
     */
    readonly Endpoint: Coding;
    /**
     * EnrollmentRequest: This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
     */
    readonly EnrollmentRequest: Coding;
    /**
     * EnrollmentResponse: This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
     */
    readonly EnrollmentResponse: Coding;
    /**
     * EpisodeOfCare: An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
     */
    readonly EpisodeOfCare: Coding;
    /**
     * EventDefinition: The EventDefinition resource provides a reusable description of when a particular event can occur.
     */
    readonly EventDefinition: Coding;
    /**
     * Evidence: The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
     */
    readonly Evidence: Coding;
    /**
     * EvidenceVariable: The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
     */
    readonly EvidenceVariable: Coding;
    /**
     * ExampleScenario: Example of workflow instance.
     */
    readonly ExampleScenario: Coding;
    /**
     * ExplanationOfBenefit: This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
     */
    readonly ExplanationOfBenefit: Coding;
    /**
     * Expression: A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
     */
    readonly Expression: Coding;
    /**
     * Extension: Optional Extension Element - found in all resources.
     */
    readonly Extension: Coding;
    /**
     * FamilyMemberHistory: Significant health conditions for a person related to the patient relevant in the context of care for the patient.
     */
    readonly FamilyMemberHistory: Coding;
    /**
     * Flag: Prospective warnings of potential issues when providing care to the patient.
     */
    readonly Flag: Coding;
    /**
     * Goal: Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    readonly Goal: Coding;
    /**
     * GraphDefinition: A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
     */
    readonly GraphDefinition: Coding;
    /**
     * Group: Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
     */
    readonly Group: Coding;
    /**
     * GuidanceResponse: A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
     */
    readonly GuidanceResponse: Coding;
    /**
     * HealthcareService: The details of a healthcare service available at a location.
     */
    readonly HealthcareService: Coding;
    /**
     * HumanName: A human's name with the ability to identify parts and usage.
     */
    readonly HumanName: Coding;
    /**
     * id: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    readonly Id: Coding;
    /**
     * Identifier: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
     */
    readonly Identifier: Coding;
    /**
     * ImagingStudy: Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
     */
    readonly ImagingStudy: Coding;
    /**
     * Immunization: Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
     */
    readonly Immunization: Coding;
    /**
     * ImmunizationEvaluation: Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
     */
    readonly ImmunizationEvaluation: Coding;
    /**
     * ImmunizationRecommendation: A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
     */
    readonly ImmunizationRecommendation: Coding;
    /**
     * ImplementationGuide: A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
     */
    readonly ImplementationGuide: Coding;
    /**
     * instant: An instant in time - known at least to the second
     */
    readonly Instant: Coding;
    /**
     * InsurancePlan: Details of a Health Insurance product/plan provided by an organization.
     */
    readonly InsurancePlan: Coding;
    /**
     * integer: A whole number
     */
    readonly Integer: Coding;
    /**
     * Invoice: Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
     */
    readonly Invoice: Coding;
    /**
     * Library: The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
     */
    readonly Library: Coding;
    /**
     * Linkage: Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
     */
    readonly Linkage: Coding;
    /**
     * List: A list is a curated collection of resources.
     */
    readonly List: Coding;
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    readonly Location: Coding;
    /**
     * markdown: A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine
     */
    readonly Markdown: Coding;
    /**
     * MarketingStatus: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
     */
    readonly MarketingStatus: Coding;
    /**
     * Measure: The Measure resource provides the definition of a quality measure.
     */
    readonly Measure: Coding;
    /**
     * MeasureReport: The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
     */
    readonly MeasureReport: Coding;
    /**
     * Media: A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
     */
    readonly Media: Coding;
    /**
     * Medication: This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
     */
    readonly Medication: Coding;
    /**
     * MedicationAdministration: Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
     */
    readonly MedicationAdministration: Coding;
    /**
     * MedicationDispense: Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
     */
    readonly MedicationDispense: Coding;
    /**
     * MedicationKnowledge: Information about a medication that is used to support knowledge.
     */
    readonly MedicationKnowledge: Coding;
    /**
     * MedicationRequest: An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
     */
    readonly MedicationRequest: Coding;
    /**
     * MedicationStatement: A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
     * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
     */
    readonly MedicationStatement: Coding;
    /**
     * MedicinalProduct: Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
     */
    readonly MedicinalProduct: Coding;
    /**
     * MedicinalProductAuthorization: The regulatory authorization of a medicinal product.
     */
    readonly MedicinalProductAuthorization: Coding;
    /**
     * MedicinalProductContraindication: The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
     */
    readonly MedicinalProductContraindication: Coding;
    /**
     * MedicinalProductIndication: Indication for the Medicinal Product.
     */
    readonly MedicinalProductIndication: Coding;
    /**
     * MedicinalProductIngredient: An ingredient of a manufactured item or pharmaceutical product.
     */
    readonly MedicinalProductIngredient: Coding;
    /**
     * MedicinalProductInteraction: The interactions of the medicinal product with other medicinal products, or other forms of interactions.
     */
    readonly MedicinalProductInteraction: Coding;
    /**
     * MedicinalProductManufactured: The manufactured item as contained in the packaged medicinal product.
     */
    readonly MedicinalProductManufactured: Coding;
    /**
     * MedicinalProductPackaged: A medicinal product in a container or package.
     */
    readonly MedicinalProductPackaged: Coding;
    /**
     * MedicinalProductPharmaceutical: A pharmaceutical product described in terms of its composition and dose form.
     */
    readonly MedicinalProductPharmaceutical: Coding;
    /**
     * MedicinalProductUndesirableEffect: Describe the undesirable effects of the medicinal product.
     */
    readonly MedicinalProductUndesirableEffect: Coding;
    /**
     * MessageDefinition: Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
     */
    readonly MessageDefinition: Coding;
    /**
     * MessageHeader: The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
     */
    readonly MessageHeader: Coding;
    /**
     * Meta: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    readonly Meta: Coding;
    /**
     * MolecularSequence: Raw data describing a biological sequence.
     */
    readonly MolecularSequence: Coding;
    /**
     * Money: An amount of economic utility in some recognized currency.
     */
    readonly Money: Coding;
    /**
     * Code: MoneyQuantity
     */
    readonly MoneyQuantity: Coding;
    /**
     * NamingSystem: A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
     */
    readonly NamingSystem: Coding;
    /**
     * Narrative: A human-readable summary of the resource conveying the essential clinical and business information for the resource.
     */
    readonly Narrative: Coding;
    /**
     * NutritionOrder: A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
    readonly NutritionOrder: Coding;
    /**
     * Observation: Measurements and simple assertions made about a patient, device or other subject.
     */
    readonly Observation: Coding;
    /**
     * ObservationDefinition: Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
     */
    readonly ObservationDefinition: Coding;
    /**
     * oid: An OID represented as a URI
     */
    readonly Oid: Coding;
    /**
     * OperationDefinition: A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    readonly OperationDefinition: Coding;
    /**
     * OperationOutcome: A collection of error, warning, or information messages that result from a system action.
     */
    readonly OperationOutcome: Coding;
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    readonly Organization: Coding;
    /**
     * OrganizationAffiliation: Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
     */
    readonly OrganizationAffiliation: Coding;
    /**
     * ParameterDefinition: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
     */
    readonly ParameterDefinition: Coding;
    /**
     * Parameters: This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
     */
    readonly Parameters: Coding;
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    readonly Patient: Coding;
    /**
     * PaymentNotice: This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
     */
    readonly PaymentNotice: Coding;
    /**
     * PaymentReconciliation: This resource provides the details including amount of a payment and allocates the payment items being paid.
     */
    readonly PaymentReconciliation: Coding;
    /**
     * Period: A time period defined by a start and end date and optionally time.
     */
    readonly Period: Coding;
    /**
     * Person: Demographics and administrative information about a person independent of a specific health-related context.
     */
    readonly Person: Coding;
    /**
     * PlanDefinition: This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
     */
    readonly PlanDefinition: Coding;
    /**
     * Population: A populatioof people with some set of grouping criteria.
     */
    readonly Population: Coding;
    /**
     * positiveInt: An integer with a value that is positive (e.g. &gt;0)
     */
    readonly PositiveInt: Coding;
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    readonly Practitioner: Coding;
    /**
     * PractitionerRole: A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
     */
    readonly PractitionerRole: Coding;
    /**
     * Procedure: An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
     */
    readonly Procedure: Coding;
    /**
     * ProdCharacteristic: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
     */
    readonly ProdCharacteristic: Coding;
    /**
     * ProductShelfLife: The shelf-life and storage information for a medicinal product item or container can be described using this class.
     */
    readonly ProductShelfLife: Coding;
    /**
     * Provenance: Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
     */
    readonly Provenance: Coding;
    /**
     * Quantity: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    readonly Quantity: Coding;
    /**
     * Questionnaire: A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
     */
    readonly Questionnaire: Coding;
    /**
     * QuestionnaireResponse: A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
     */
    readonly QuestionnaireResponse: Coding;
    /**
     * Range: A set of ordered Quantities defined by a low and high limit.
     */
    readonly Range: Coding;
    /**
     * Ratio: A relationship of two Quantity values - expressed as a numerator and a denominator.
     */
    readonly Ratio: Coding;
    /**
     * Reference: A reference from one resource to another.
     */
    readonly Reference: Coding;
    /**
     * RelatedArtifact: Related artifacts such as additional documentation, justification, or bibliographic references.
     */
    readonly RelatedArtifact: Coding;
    /**
     * RelatedPerson: Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
     */
    readonly RelatedPerson: Coding;
    /**
     * RequestGroup: A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
     */
    readonly RequestGroup: Coding;
    /**
     * ResearchDefinition: The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
     */
    readonly ResearchDefinition: Coding;
    /**
     * ResearchElementDefinition: The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
     */
    readonly ResearchElementDefinition: Coding;
    /**
     * ResearchStudy: A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
     */
    readonly ResearchStudy: Coding;
    /**
     * ResearchSubject: A physical entity which is the primary unit of operational and/or administrative interest in a study.
     */
    readonly ResearchSubject: Coding;
    /**
     * Resource: This is the base resource type for everything.
     */
    readonly Resource: Coding;
    /**
     * RiskAssessment: An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
     */
    readonly RiskAssessment: Coding;
    /**
     * RiskEvidenceSynthesis: The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
     */
    readonly RiskEvidenceSynthesis: Coding;
    /**
     * SampledData: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
     */
    readonly SampledData: Coding;
    /**
     * Schedule: A container for slots of time that may be available for booking appointments.
     */
    readonly Schedule: Coding;
    /**
     * SearchParameter: A search parameter that defines a named search item that can be used to search/filter on a resource.
     */
    readonly SearchParameter: Coding;
    /**
     * ServiceRequest: A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    readonly ServiceRequest: Coding;
    /**
     * Signature: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
     */
    readonly Signature: Coding;
    /**
     * Code: SimpleQuantity
     */
    readonly SimpleQuantity: Coding;
    /**
     * Slot: A slot of time on a schedule that may be available for booking appointments.
     */
    readonly Slot: Coding;
    /**
     * Specimen: A sample to be used for analysis.
     */
    readonly Specimen: Coding;
    /**
     * SpecimenDefinition: A kind of specimen with associated set of requirements.
     */
    readonly SpecimenDefinition: Coding;
    /**
     * string: A sequence of Unicode characters
     */
    readonly VALString: Coding;
    /**
     * StructureDefinition: A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
     */
    readonly StructureDefinition: Coding;
    /**
     * StructureMap: A Map of relationships between 2 structures that can be used to transform data.
     */
    readonly StructureMap: Coding;
    /**
     * Subscription: The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
     */
    readonly Subscription: Coding;
    /**
     * Substance: A homogeneous material with a definite composition.
     */
    readonly Substance: Coding;
    /**
     * SubstanceAmount: Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
     */
    readonly SubstanceAmount: Coding;
    /**
     * SubstanceNucleicAcid: Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
     */
    readonly SubstanceNucleicAcid: Coding;
    /**
     * SubstancePolymer: Todo.
     */
    readonly SubstancePolymer: Coding;
    /**
     * SubstanceProtein: A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
     */
    readonly SubstanceProtein: Coding;
    /**
     * SubstanceReferenceInformation: Todo.
     */
    readonly SubstanceReferenceInformation: Coding;
    /**
     * SubstanceSourceMaterial: Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
     */
    readonly SubstanceSourceMaterial: Coding;
    /**
     * SubstanceSpecification: The detailed description of a substance, typically at a level beyond what is used for prescribing.
     */
    readonly SubstanceSpecification: Coding;
    /**
     * SupplyDelivery: Record of delivery of what is supplied.
     */
    readonly SupplyDelivery: Coding;
    /**
     * SupplyRequest: A record of a request for a medication, substance or device used in the healthcare setting.
     */
    readonly SupplyRequest: Coding;
    /**
     * Task: A task to be performed.
     */
    readonly Task: Coding;
    /**
     * TerminologyCapabilities: A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
    readonly TerminologyCapabilities: Coding;
    /**
     * TestReport: A summary of information based on the results of executing a TestScript.
     */
    readonly TestReport: Coding;
    /**
     * TestScript: A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
     */
    readonly TestScript: Coding;
    /**
     * time: A time during the day, with no date specified
     */
    readonly Time: Coding;
    /**
     * Timing: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
     */
    readonly Timing: Coding;
    /**
     * TriggerDefinition: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
     */
    readonly TriggerDefinition: Coding;
    /**
     * Type: A place holder that means any kind of data type
     */
    readonly Type: Coding;
    /**
     * unsignedInt: An integer with a value that is not negative (e.g. &gt;= 0)
     */
    readonly UnsignedInt: Coding;
    /**
     * uri: String of characters used to identify a name or a resource
     */
    readonly Uri: Coding;
    /**
     * url: A URI that is a literal reference
     */
    readonly Url: Coding;
    /**
     * UsageContext: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
     */
    readonly UsageContext: Coding;
    /**
     * uuid: A UUID, represented as a URI
     */
    readonly Uuid: Coding;
    /**
     * ValueSet: A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
     */
    readonly ValueSet: Coding;
    /**
     * VerificationResult: Describes validation requirements, source(s), status and dates for one or more elements.
     */
    readonly VerificationResult: Coding;
    /**
     * VisionPrescription: An authorization for the provision of glasses and/or contact lenses to a patient.
     */
    readonly VisionPrescription: Coding;
    /**
     * xhtml: XHTML format, as defined by W3C, but restricted usage (mainly, no active content)
     */
    readonly XHTML: Coding;
};
/**
 * A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.
 */
export declare type AllTypesValueSetType = typeof AllTypesValueSet;
/**
 * A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.
 */
//# sourceMappingURL=AllTypesValueSet.d.ts.map