// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentManifest

import * as fhir from '../fhir.js'

import { DocumentReferenceStatusValueSet, DocumentReferenceStatusValueSetType, DocumentReferenceStatusValueSetEnum } from '../fhirValueSets/DocumentReferenceStatusValueSet.js'
import { V3ActCodeValueSet, V3ActCodeValueSetType, V3ActCodeValueSetEnum } from '../fhirValueSets/V3ActCodeValueSet.js'

/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
export type IDocumentManifestRelated = fhir.IBackboneElement & { 
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  ref?: fhir.IReference|undefined;
}

/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export type IDocumentManifest = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "DocumentManifest";
  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   */
  masterIdentifier?: fhir.IIdentifier|undefined;
  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
   */
  status: DocumentReferenceStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: DocumentManifest.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  subject?: fhir.IReference|undefined;
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
   */
  created?: string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.created
   */
  _created?: fhir.IFhirElement|undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  author?: fhir.IReference[]|undefined;
  /**
   * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
   */
  recipient?: fhir.IReference[]|undefined;
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  source?: string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.source
   */
  _source?: fhir.IFhirElement|undefined;
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
   */
  content: fhir.IReference[]|null;
  /**
   * May be identifiers or resources that caused the DocumentManifest to be created.
   */
  related?: fhir.IDocumentManifestRelated[]|undefined;
}

/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
export class DocumentManifestRelated extends fhir.BackboneElement implements IDocumentManifestRelated {
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  public ref?: fhir.Reference|undefined;
  /**
   * Default constructor for DocumentManifestRelated - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IDocumentManifestRelated> = { }) {
    super(source);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier!); }
    if (source['ref']) { this.ref = new fhir.Reference(source.ref!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["identifier"]) { results.push(...this.identifier.doModelValidation()); }
    if (this["ref"]) { results.push(...this.ref.doModelValidation()); }
    return results;
  }
}

/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export class DocumentManifest extends fhir.DomainResource implements IDocumentManifest {
  /**
   * Resource Type Name
   */
  public resourceType: "DocumentManifest";
  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   */
  public masterIdentifier?: fhir.Identifier|undefined;
  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
   */
  public status: DocumentReferenceStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: DocumentManifest.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
   */
  public created?: string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.created
   */
  public _created?: fhir.FhirElement|undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  public author?: fhir.Reference[]|undefined;
  /**
   * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
   */
  public recipient?: fhir.Reference[]|undefined;
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  public source?: string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.source
   */
  public _source?: fhir.FhirElement|undefined;
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
   */
  public content: fhir.Reference[]|null;
  /**
   * May be identifiers or resources that caused the DocumentManifest to be created.
   */
  public related?: fhir.DocumentManifestRelated[]|undefined;
  /**
   * Default constructor for DocumentManifest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IDocumentManifest> = { }) {
    super(source);
    this.resourceType = 'DocumentManifest';
    if (source['masterIdentifier']) { this.masterIdentifier = new fhir.Identifier(source.masterIdentifier!); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject!); }
    if (source['created']) { this.created = source.created; }
    if (source['_created']) { this._created = new fhir.FhirElement(source._created!); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x)); }
    if (source['source']) { this.source = source.source; }
    if (source['_source']) { this._source = new fhir.FhirElement(source._source!); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['content']) { this.content = source.content.map((x) => new fhir.Reference(x)); }
    else { this.content = null; }
    if (source['related']) { this.related = source.related.map((x) => new fhir.DocumentManifestRelated(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():DocumentReferenceStatusValueSetType {
    return DocumentReferenceStatusValueSet;
  }
  /**
   * Example-bound Value Set for type
   */
  public typeExampleValueSet():V3ActCodeValueSetType {
    return V3ActCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: DocumentManifest.resourceType']); }
    if (this["masterIdentifier"]) { results.push(...this.masterIdentifier.doModelValidation()); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["status"]) { results.push(["status",'Missing required element: DocumentManifest.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["subject"]) { results.push(...this.subject.doModelValidation()); }
    if (this["_created"]) { results.push(...this._created.doModelValidation()); }
    if (this["author"]) { this.author.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["recipient"]) { this.recipient.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_source"]) { results.push(...this._source.doModelValidation()); }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if ((!this["content"]) || (this["content"].length === 0)) { results.push(["content",'Missing required element: DocumentManifest.content']); }
    if (this["content"]) { this.content.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["related"]) { this.related.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
