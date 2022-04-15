import { Coding } from '../fhir';
/**
 * One of the resource types defined as part of this version of FHIR.
 */
export declare const ResourceTypesValueSet: {
    /**
     * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
     */
    resource_types_Account: Coding;
    /**
     * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
     */
    resource_types_ActivityDefinition: Coding;
    /**
     * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
     */
    resource_types_AdverseEvent: Coding;
    /**
     * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
     */
    resource_types_AllergyIntolerance: Coding;
    /**
     * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    resource_types_Appointment: Coding;
    /**
     * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
     */
    resource_types_AppointmentResponse: Coding;
    /**
     * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
    resource_types_AuditEvent: Coding;
    /**
     * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
     */
    resource_types_Basic: Coding;
    /**
     * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
     */
    resource_types_Binary: Coding;
    /**
     * A material substance originating from a biological entity intended to be transplanted or infused
     * into another (possibly the same) biological entity.
     */
    resource_types_BiologicallyDerivedProduct: Coding;
    /**
     * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
     */
    resource_types_BodyStructure: Coding;
    /**
     * A container for a collection of resources.
     */
    resource_types_Bundle: Coding;
    /**
     * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
    resource_types_CapabilityStatement: Coding;
    /**
     * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
    resource_types_CarePlan: Coding;
    /**
     * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
     */
    resource_types_CareTeam: Coding;
    /**
     * Catalog entries are wrappers that contextualize items included in a catalog.
     */
    resource_types_CatalogEntry: Coding;
    /**
     * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
     */
    resource_types_ChargeItem: Coding;
    /**
     * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
     */
    resource_types_ChargeItemDefinition: Coding;
    /**
     * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
     */
    resource_types_Claim: Coding;
    /**
     * This resource provides the adjudication details from the processing of a Claim resource.
     */
    resource_types_ClaimResponse: Coding;
    /**
     * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
     */
    resource_types_ClinicalImpression: Coding;
    /**
     * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
     */
    resource_types_CodeSystem: Coding;
    /**
     * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
     */
    resource_types_Communication: Coding;
    /**
     * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
     */
    resource_types_CommunicationRequest: Coding;
    /**
     * A compartment definition that defines how resources are accessed on a server.
     */
    resource_types_CompartmentDefinition: Coding;
    /**
     * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
     */
    resource_types_Composition: Coding;
    /**
     * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
     */
    resource_types_ConceptMap: Coding;
    /**
     * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
     */
    resource_types_Condition: Coding;
    /**
     * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
     */
    resource_types_Consent: Coding;
    /**
     * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
     */
    resource_types_Contract: Coding;
    /**
     * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
     */
    resource_types_Coverage: Coding;
    /**
     * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
     */
    resource_types_CoverageEligibilityRequest: Coding;
    /**
     * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
     */
    resource_types_CoverageEligibilityResponse: Coding;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
     */
    resource_types_DetectedIssue: Coding;
    /**
     * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    resource_types_Device: Coding;
    /**
     * The characteristics, operational status and capabilities of a medical-related component of a medical device.
     */
    resource_types_DeviceDefinition: Coding;
    /**
     * Describes a measurement, calculation or setting capability of a medical device.
     */
    resource_types_DeviceMetric: Coding;
    /**
     * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
     */
    resource_types_DeviceRequest: Coding;
    /**
     * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
     */
    resource_types_DeviceUseStatement: Coding;
    /**
     * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
     */
    resource_types_DiagnosticReport: Coding;
    /**
     * A collection of documents compiled for a purpose together with metadata that applies to the collection.
     */
    resource_types_DocumentManifest: Coding;
    /**
     * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
     */
    resource_types_DocumentReference: Coding;
    /**
     * A resource that includes narrative, extensions, and contained resources.
     */
    resource_types_DomainResource: Coding;
    /**
     * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
     */
    resource_types_EffectEvidenceSynthesis: Coding;
    /**
     * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
    resource_types_Encounter: Coding;
    /**
     * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
     */
    resource_types_Endpoint: Coding;
    /**
     * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
     */
    resource_types_EnrollmentRequest: Coding;
    /**
     * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
     */
    resource_types_EnrollmentResponse: Coding;
    /**
     * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
     */
    resource_types_EpisodeOfCare: Coding;
    /**
     * The EventDefinition resource provides a reusable description of when a particular event can occur.
     */
    resource_types_EventDefinition: Coding;
    /**
     * The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
     */
    resource_types_Evidence: Coding;
    /**
     * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
     */
    resource_types_EvidenceVariable: Coding;
    /**
     * Example of workflow instance.
     */
    resource_types_ExampleScenario: Coding;
    /**
     * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
     */
    resource_types_ExplanationOfBenefit: Coding;
    /**
     * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
     */
    resource_types_FamilyMemberHistory: Coding;
    /**
     * Prospective warnings of potential issues when providing care to the patient.
     */
    resource_types_Flag: Coding;
    /**
     * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    resource_types_Goal: Coding;
    /**
     * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
     */
    resource_types_GraphDefinition: Coding;
    /**
     * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
     */
    resource_types_Group: Coding;
    /**
     * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
     */
    resource_types_GuidanceResponse: Coding;
    /**
     * The details of a healthcare service available at a location.
     */
    resource_types_HealthcareService: Coding;
    /**
     * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
     */
    resource_types_ImagingStudy: Coding;
    /**
     * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
     */
    resource_types_Immunization: Coding;
    /**
     * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
     */
    resource_types_ImmunizationEvaluation: Coding;
    /**
     * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
     */
    resource_types_ImmunizationRecommendation: Coding;
    /**
     * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
     */
    resource_types_ImplementationGuide: Coding;
    /**
     * Details of a Health Insurance product/plan provided by an organization.
     */
    resource_types_InsurancePlan: Coding;
    /**
     * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
     */
    resource_types_Invoice: Coding;
    /**
     * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
     */
    resource_types_Library: Coding;
    /**
     * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
     */
    resource_types_Linkage: Coding;
    /**
     * A list is a curated collection of resources.
     */
    resource_types_List: Coding;
    /**
     * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    resource_types_Location: Coding;
    /**
     * The Measure resource provides the definition of a quality measure.
     */
    resource_types_Measure: Coding;
    /**
     * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
     */
    resource_types_MeasureReport: Coding;
    /**
     * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
     */
    resource_types_Media: Coding;
    /**
     * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
     */
    resource_types_Medication: Coding;
    /**
     * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
     */
    resource_types_MedicationAdministration: Coding;
    /**
     * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
     */
    resource_types_MedicationDispense: Coding;
    /**
     * Information about a medication that is used to support knowledge.
     */
    resource_types_MedicationKnowledge: Coding;
    /**
     * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
     */
    resource_types_MedicationRequest: Coding;
    /**
     * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
     * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
     */
    resource_types_MedicationStatement: Coding;
    /**
     * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
     */
    resource_types_MedicinalProduct: Coding;
    /**
     * The regulatory authorization of a medicinal product.
     */
    resource_types_MedicinalProductAuthorization: Coding;
    /**
     * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
     */
    resource_types_MedicinalProductContraindication: Coding;
    /**
     * Indication for the Medicinal Product.
     */
    resource_types_MedicinalProductIndication: Coding;
    /**
     * An ingredient of a manufactured item or pharmaceutical product.
     */
    resource_types_MedicinalProductIngredient: Coding;
    /**
     * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
     */
    resource_types_MedicinalProductInteraction: Coding;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    resource_types_MedicinalProductManufactured: Coding;
    /**
     * A medicinal product in a container or package.
     */
    resource_types_MedicinalProductPackaged: Coding;
    /**
     * A pharmaceutical product described in terms of its composition and dose form.
     */
    resource_types_MedicinalProductPharmaceutical: Coding;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    resource_types_MedicinalProductUndesirableEffect: Coding;
    /**
     * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
     */
    resource_types_MessageDefinition: Coding;
    /**
     * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
     */
    resource_types_MessageHeader: Coding;
    /**
     * Raw data describing a biological sequence.
     */
    resource_types_MolecularSequence: Coding;
    /**
     * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
     */
    resource_types_NamingSystem: Coding;
    /**
     * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
    resource_types_NutritionOrder: Coding;
    /**
     * Measurements and simple assertions made about a patient, device or other subject.
     */
    resource_types_Observation: Coding;
    /**
     * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
     */
    resource_types_ObservationDefinition: Coding;
    /**
     * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    resource_types_OperationDefinition: Coding;
    /**
     * A collection of error, warning, or information messages that result from a system action.
     */
    resource_types_OperationOutcome: Coding;
    /**
     * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    resource_types_Organization: Coding;
    /**
     * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
     */
    resource_types_OrganizationAffiliation: Coding;
    /**
     * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
     */
    resource_types_Parameters: Coding;
    /**
     * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    resource_types_Patient: Coding;
    /**
     * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
     */
    resource_types_PaymentNotice: Coding;
    /**
     * This resource provides the details including amount of a payment and allocates the payment items being paid.
     */
    resource_types_PaymentReconciliation: Coding;
    /**
     * Demographics and administrative information about a person independent of a specific health-related context.
     */
    resource_types_Person: Coding;
    /**
     * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
     */
    resource_types_PlanDefinition: Coding;
    /**
     * A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    resource_types_Practitioner: Coding;
    /**
     * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
     */
    resource_types_PractitionerRole: Coding;
    /**
     * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
     */
    resource_types_Procedure: Coding;
    /**
     * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
     */
    resource_types_Provenance: Coding;
    /**
     * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
     */
    resource_types_Questionnaire: Coding;
    /**
     * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
     */
    resource_types_QuestionnaireResponse: Coding;
    /**
     * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
     */
    resource_types_RelatedPerson: Coding;
    /**
     * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
     */
    resource_types_RequestGroup: Coding;
    /**
     * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
     */
    resource_types_ResearchDefinition: Coding;
    /**
     * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
     */
    resource_types_ResearchElementDefinition: Coding;
    /**
     * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
     */
    resource_types_ResearchStudy: Coding;
    /**
     * A physical entity which is the primary unit of operational and/or administrative interest in a study.
     */
    resource_types_ResearchSubject: Coding;
    /**
     * This is the base resource type for everything.
     */
    resource_types_Resource: Coding;
    /**
     * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
     */
    resource_types_RiskAssessment: Coding;
    /**
     * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
     */
    resource_types_RiskEvidenceSynthesis: Coding;
    /**
     * A container for slots of time that may be available for booking appointments.
     */
    resource_types_Schedule: Coding;
    /**
     * A search parameter that defines a named search item that can be used to search/filter on a resource.
     */
    resource_types_SearchParameter: Coding;
    /**
     * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    resource_types_ServiceRequest: Coding;
    /**
     * A slot of time on a schedule that may be available for booking appointments.
     */
    resource_types_Slot: Coding;
    /**
     * A sample to be used for analysis.
     */
    resource_types_Specimen: Coding;
    /**
     * A kind of specimen with associated set of requirements.
     */
    resource_types_SpecimenDefinition: Coding;
    /**
     * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
     */
    resource_types_StructureDefinition: Coding;
    /**
     * A Map of relationships between 2 structures that can be used to transform data.
     */
    resource_types_StructureMap: Coding;
    /**
     * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
     */
    resource_types_Subscription: Coding;
    /**
     * A homogeneous material with a definite composition.
     */
    resource_types_Substance: Coding;
    /**
     * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
     */
    resource_types_SubstanceNucleicAcid: Coding;
    /**
     * Todo.
     */
    resource_types_SubstancePolymer: Coding;
    /**
     * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
     */
    resource_types_SubstanceProtein: Coding;
    /**
     * Todo.
     */
    resource_types_SubstanceReferenceInformation: Coding;
    /**
     * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
     */
    resource_types_SubstanceSourceMaterial: Coding;
    /**
     * The detailed description of a substance, typically at a level beyond what is used for prescribing.
     */
    resource_types_SubstanceSpecification: Coding;
    /**
     * Record of delivery of what is supplied.
     */
    resource_types_SupplyDelivery: Coding;
    /**
     * A record of a request for a medication, substance or device used in the healthcare setting.
     */
    resource_types_SupplyRequest: Coding;
    /**
     * A task to be performed.
     */
    resource_types_Task: Coding;
    /**
     * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
    resource_types_TerminologyCapabilities: Coding;
    /**
     * A summary of information based on the results of executing a TestScript.
     */
    resource_types_TestReport: Coding;
    /**
     * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
     */
    resource_types_TestScript: Coding;
    /**
     * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
     */
    resource_types_ValueSet: Coding;
    /**
     * Describes validation requirements, source(s), status and dates for one or more elements.
     */
    resource_types_VerificationResult: Coding;
    /**
     * An authorization for the provision of glasses and/or contact lenses to a patient.
     */
    resource_types_VisionPrescription: Coding;
};
//# sourceMappingURL=ResourceTypesValueSet.d.ts.map