import * as fhir from '../fhir.js';
import { DocumentRelationshipTypeValueSetType } from '../fhirValueSets/DocumentRelationshipTypeValueSet.js';
import { DocumentRelationshipTypeValueSetEnum } from '../valueSetEnums.js';
import { FormatcodesValueSetType } from '../fhirValueSets/FormatcodesValueSet.js';
import { V3ActCodeValueSetType } from '../fhirValueSets/V3ActCodeValueSet.js';
import { C80FacilitycodesValueSetType } from '../fhirValueSets/C80FacilitycodesValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { DocumentReferenceStatusValueSetType } from '../fhirValueSets/DocumentReferenceStatusValueSet.js';
import { DocumentReferenceStatusValueSetEnum } from '../valueSetEnums.js';
import { CompositionStatusValueSetType } from '../fhirValueSets/CompositionStatusValueSet.js';
import { CompositionStatusValueSetEnum } from '../valueSetEnums.js';
import { C80DocTypecodesValueSetType } from '../fhirValueSets/C80DocTypecodesValueSet.js';
import { DocumentClasscodesValueSetType } from '../fhirValueSets/DocumentClasscodesValueSet.js';
import { SecurityLabelsValueSetType } from '../fhirValueSets/SecurityLabelsValueSet.js';
/**
 * Valid arguments for the DocumentReferenceRelatesTo type.
 */
export interface DocumentReferenceRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: DocumentRelationshipTypeValueSetEnum | null;
    /**
     * The target document of this relationship.
     */
    target: fhir.ReferenceArgs | null;
}
/**
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export declare class DocumentReferenceRelatesTo extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: DocumentRelationshipTypeValueSetEnum | null;
    /**
     * The target document of this relationship.
     */
    target: fhir.Reference | null;
    /**
     * Default constructor for DocumentReferenceRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceRelatesToArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet(): DocumentRelationshipTypeValueSetType;
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
 * Valid arguments for the DocumentReferenceContent type.
 */
export interface DocumentReferenceContentArgs extends fhir.BackboneElementArgs {
    /**
     * The document or URL of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.AttachmentArgs | null;
    /**
     * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
     */
    format?: fhir.CodingArgs | undefined;
}
/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export declare class DocumentReferenceContent extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The document or URL of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.Attachment | null;
    /**
     * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
     */
    format?: fhir.Coding | undefined;
    /**
     * Default constructor for DocumentReferenceContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceContentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for format
     */
    static formatPreferredValueSet(): FormatcodesValueSetType;
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
 * Valid arguments for the DocumentReferenceContext type.
 */
export interface DocumentReferenceContextArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the clinical encounter or type of care that the document content is associated with.
     */
    encounter?: fhir.ReferenceArgs[] | undefined;
    /**
     * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
     */
    event?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The time period over which the service that is described by the document was provided.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: fhir.CodeableConceptArgs | undefined;
    /**
     * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
     */
    practiceSetting?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhir.ReferenceArgs | undefined;
    /**
     * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
     */
    related?: fhir.ReferenceArgs[] | undefined;
}
/**
 * These values are primarily added to help with searching for interesting/relevant documents.
 */
export declare class DocumentReferenceContext extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Describes the clinical encounter or type of care that the document content is associated with.
     */
    encounter?: fhir.Reference[] | undefined;
    /**
     * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
     */
    event?: fhir.CodeableConcept[] | undefined;
    /**
     * The time period over which the service that is described by the document was provided.
     */
    period?: fhir.Period | undefined;
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: fhir.CodeableConcept | undefined;
    /**
     * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
     */
    practiceSetting?: fhir.CodeableConcept | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhir.Reference | undefined;
    /**
     * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
     */
    related?: fhir.Reference[] | undefined;
    /**
     * Default constructor for DocumentReferenceContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceContextArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for event
     */
    static eventExampleValueSet(): V3ActCodeValueSetType;
    /**
     * Example-bound Value Set for facilityType
     */
    static facilityTypeExampleValueSet(): C80FacilitycodesValueSetType;
    /**
     * Example-bound Value Set for practiceSetting
     */
    static practiceSettingExampleValueSet(): C80PracticeCodesValueSetType;
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
 * Valid arguments for the DocumentReference type.
 */
export interface DocumentReferenceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DocumentReference" | undefined;
    /**
     * CDA Document Id extension and root.
     */
    masterIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This is the status of the DocumentReference object, which might be independent from the docStatus element.
     * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
     */
    status: DocumentReferenceStatusValueSetEnum | null;
    /**
     * The document that is pointed to might be in various lifecycle states.
     */
    docStatus?: CompositionStatusValueSetEnum | undefined;
    /**
     * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Referencing/indexing time is used for tracking, organizing versions and searching.
     */
    date?: fhir.FhirInstant | string | undefined;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
     */
    authenticator?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
     */
    custodian?: fhir.ReferenceArgs | undefined;
    /**
     * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
     */
    relatesTo?: fhir.DocumentReferenceRelatesToArgs[] | undefined;
    /**
     * What the document is about,  a terse summary of the document.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.
     * In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
     */
    securityLabel?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhir.DocumentReferenceContentArgs[] | null;
    /**
     * These values are primarily added to help with searching for interesting/relevant documents.
     */
    context?: fhir.DocumentReferenceContextArgs | undefined;
}
/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export declare class DocumentReference extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DocumentReference";
    /**
     * CDA Document Id extension and root.
     */
    masterIdentifier?: fhir.Identifier | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This is the status of the DocumentReference object, which might be independent from the docStatus element.
     * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
     */
    status: DocumentReferenceStatusValueSetEnum | null;
    /**
     * The document that is pointed to might be in various lifecycle states.
     */
    docStatus?: CompositionStatusValueSetEnum | undefined;
    /**
     * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhir.Reference | undefined;
    /**
     * Referencing/indexing time is used for tracking, organizing versions and searching.
     */
    date?: fhir.FhirInstant | undefined;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
     */
    author?: fhir.Reference[] | undefined;
    /**
     * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
     */
    authenticator?: fhir.Reference | undefined;
    /**
     * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
     */
    relatesTo?: fhir.DocumentReferenceRelatesTo[] | undefined;
    /**
     * What the document is about,  a terse summary of the document.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.
     * In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
     */
    securityLabel?: fhir.CodeableConcept[] | undefined;
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhir.DocumentReferenceContent[] | null;
    /**
     * These values are primarily added to help with searching for interesting/relevant documents.
     */
    context?: fhir.DocumentReferenceContext | undefined;
    /**
     * Default constructor for DocumentReference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): DocumentReferenceStatusValueSetType;
    /**
     * Required-bound Value Set for docStatus
     */
    static docStatusRequiredValueSet(): CompositionStatusValueSetType;
    /**
     * Preferred-bound Value Set for type
     */
    static typePreferredValueSet(): C80DocTypecodesValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): DocumentClasscodesValueSetType;
    /**
     * Extensible-bound Value Set for securityLabel
     */
    static securityLabelExtensibleValueSet(): SecurityLabelsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=DocumentReference.d.ts.map