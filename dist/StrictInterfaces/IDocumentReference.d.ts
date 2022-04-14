import * as fhirInterfaces from '../strictinterfaces';
/**
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export interface IDocumentReferenceRelatesTo extends fhirInterfaces.IBackboneElement {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: DocumentReferenceRelatesToCodeEnum;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * The target document of this relationship.
     */
    target: fhirInterfaces.IReference;
}
/**
 * Code Values for the DocumentReference.relatesTo.code field
 */
export declare enum DocumentReferenceRelatesToCodeEnum {
    REPLACES = "replaces",
    TRANSFORMS = "transforms",
    SIGNS = "signs",
    APPENDS = "appends"
}
/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export interface IDocumentReferenceContent extends fhirInterfaces.IBackboneElement {
    /**
     * The document or URL of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhirInterfaces.IAttachment;
    /**
     * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
     */
    format?: fhirInterfaces.ICoding | undefined;
}
/**
 * These values are primarily added to help with searching for interesting/relevant documents.
 */
export interface IDocumentReferenceContext extends fhirInterfaces.IBackboneElement {
    /**
     * Describes the clinical encounter or type of care that the document content is associated with.
     */
    encounter?: fhirInterfaces.IReference[] | undefined;
    /**
     * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
     */
    event?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The time period over which the service that is described by the document was provided.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
     */
    practiceSetting?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
     */
    related?: fhirInterfaces.IReference[] | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhirInterfaces.IReference | undefined;
}
/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export interface IDocumentReference extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "DocumentReference";
    /**
     * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
     */
    authenticator?: fhirInterfaces.IReference | undefined;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
     */
    author?: fhirInterfaces.IReference[] | undefined;
    /**
     * Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhirInterfaces.IDocumentReferenceContent[];
    /**
     * These values are primarily added to help with searching for interesting/relevant documents.
     */
    context?: fhirInterfaces.IDocumentReferenceContext | undefined;
    /**
     * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
     */
    custodian?: fhirInterfaces.IReference | undefined;
    /**
     * Referencing/indexing time is used for tracking, organizing versions and searching.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * What the document is about,  a terse summary of the document.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The document that is pointed to might be in various lifecycle states.
     */
    docStatus?: DocumentReferenceDocStatusEnum | undefined;
    _docStatus?: fhirInterfaces.IElement | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * CDA Document Id extension and root.
     */
    masterIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
     */
    relatesTo?: fhirInterfaces.IDocumentReferenceRelatesTo[] | undefined;
    /**
     * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.
     * In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
     */
    securityLabel?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This is the status of the DocumentReference object, which might be independent from the docStatus element.
     * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
     */
    status: DocumentReferenceStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the DocumentReference.docStatus field
 */
export declare enum DocumentReferenceDocStatusEnum {
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    ENTERED_IN_ERROR = "entered-in-error"
}
/**
 * Code Values for the DocumentReference.status field
 */
export declare enum DocumentReferenceStatusEnum {
    CURRENT = "current",
    SUPERSEDED = "superseded",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IDocumentReference.d.ts.map