import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
export declare class DocumentManifestRelated extends fhirModels.BackboneElement implements fhirInterfaces.IDocumentManifestRelated {
    /**
     * If both identifier and ref elements are present they shall refer to the same thing.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * If both identifier and ref elements are present they shall refer to the same thing.
     */
    ref?: fhirModels.Reference | undefined;
    /**
     * Default constructor for DocumentManifestRelated from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDocumentManifestRelated>);
    /**
     * Factory function to create a DocumentManifestRelated from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDocumentManifestRelated): DocumentManifestRelated;
    /**
     * Check if the current DocumentManifestRelated contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export declare class DocumentManifest extends fhirModels.DomainResource implements fhirInterfaces.IDocumentManifest {
    /**
     * Resource Type Name
     */
    readonly resourceType = "DocumentManifest";
    /**
     * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
     */
    author?: fhirModels.Reference[] | undefined;
    /**
     * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
     */
    content?: fhirModels.Reference[] | undefined;
    /**
     * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Other identifiers associated with the document manifest, including version independent  identifiers.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
     */
    masterIdentifier?: fhirModels.Identifier | undefined;
    /**
     * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
     */
    recipient?: fhirModels.Reference[] | undefined;
    /**
     * May be identifiers or resources that caused the DocumentManifest to be created.
     */
    related?: fhirModels.DocumentManifestRelated[] | undefined;
    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: string | undefined;
    _source?: fhirModels.Element | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
     */
    status?: DocumentManifestStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for DocumentManifest from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDocumentManifest>);
    /**
     * Factory function to create a DocumentManifest from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDocumentManifest): DocumentManifest;
    /**
     * Check if the current DocumentManifest contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the DocumentManifest.status field
 */
export declare enum DocumentManifestStatusEnum {
    CURRENT = "current",
    SUPERSEDED = "superseded",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=DocumentManifest.d.ts.map