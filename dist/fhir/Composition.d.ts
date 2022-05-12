import * as fhir from '../fhir.js';
import { CompositionAttestationModeValueSetType } from '../fhirValueSets/CompositionAttestationModeValueSet.js';
import { CompositionAttestationModeValueSetEnum } from '../valueSetEnums.js';
import { DocumentRelationshipTypeValueSetType } from '../fhirValueSets/DocumentRelationshipTypeValueSet.js';
import { DocumentRelationshipTypeValueSetEnum } from '../valueSetEnums.js';
import { V3ActCodeValueSetType } from '../fhirValueSets/V3ActCodeValueSet.js';
import { DocSectionCodesValueSetType } from '../fhirValueSets/DocSectionCodesValueSet.js';
import { ListModeValueSetType } from '../fhirValueSets/ListModeValueSet.js';
import { ListModeValueSetEnum } from '../valueSetEnums.js';
import { ListOrderValueSetType } from '../fhirValueSets/ListOrderValueSet.js';
import { ListEmptyReasonValueSetType } from '../fhirValueSets/ListEmptyReasonValueSet.js';
import { CompositionStatusValueSetType } from '../fhirValueSets/CompositionStatusValueSet.js';
import { CompositionStatusValueSetEnum } from '../valueSetEnums.js';
import { DocTypecodesValueSetType } from '../fhirValueSets/DocTypecodesValueSet.js';
import { DocumentClasscodesValueSetType } from '../fhirValueSets/DocumentClasscodesValueSet.js';
import { V3ConfidentialityClassificationValueSetType } from '../fhirValueSets/V3ConfidentialityClassificationValueSet.js';
/**
 * Valid arguments for the CompositionAttester type.
 */
export interface CompositionAttesterArgs extends fhir.BackboneElementArgs {
    /**
     * The type of attestation the authenticator offers.
     */
    mode: CompositionAttestationModeValueSetEnum | null;
    /**
     * When the composition was attested by the party.
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * Who attested the composition in the specified way.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * Only list each attester once.
 */
export declare class CompositionAttester extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The type of attestation the authenticator offers.
     */
    mode: CompositionAttestationModeValueSetEnum | null;
    /**
     * When the composition was attested by the party.
     */
    time?: fhir.FhirDateTime | undefined;
    /**
     * Who attested the composition in the specified way.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for CompositionAttester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionAttesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet(): CompositionAttestationModeValueSetType;
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
 * Valid arguments for the CompositionRelatesTo type.
 */
export interface CompositionRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: DocumentRelationshipTypeValueSetEnum | null;
    /**
     * The target composition/document of this relationship.
     */
    target?: fhir.Identifier | fhir.Reference | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: fhir.ReferenceArgs | undefined;
}
/**
 * A document is a version specific composition.
 */
export declare class CompositionRelatesTo extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code: DocumentRelationshipTypeValueSetEnum | null;
    /**
     * The target composition/document of this relationship.
     */
    target: (fhir.Identifier | fhir.Reference) | null;
    readonly __targetIsChoice: true;
    /**
     * Default constructor for CompositionRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionRelatesToArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the CompositionEvent type.
 */
export interface CompositionEventArgs extends fhir.BackboneElementArgs {
    /**
     * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export declare class CompositionEvent extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhir.Period | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: fhir.Reference[] | undefined;
    /**
     * Default constructor for CompositionEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): V3ActCodeValueSetType;
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
 * Valid arguments for the CompositionSection type.
 */
export interface CompositionSectionArgs extends fhir.BackboneElementArgs {
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
     */
    focus?: fhir.ReferenceArgs | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: fhir.NarrativeArgs | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: ListModeValueSetEnum | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.ReferenceArgs[] | undefined;
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section?: fhir.CompositionSectionArgs[] | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export declare class CompositionSection extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: fhir.Reference[] | undefined;
    /**
     * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
     */
    focus?: fhir.Reference | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: fhir.Narrative | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: ListModeValueSetEnum | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.Reference[] | undefined;
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section?: fhir.CompositionSection[] | undefined;
    /**
     * Default constructor for CompositionSection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionSectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): DocSectionCodesValueSetType;
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet(): ListModeValueSetType;
    /**
     * Preferred-bound Value Set for orderedBy
     */
    static orderedByPreferredValueSet(): ListOrderValueSetType;
    /**
     * Preferred-bound Value Set for emptyReason
     */
    static emptyReasonPreferredValueSet(): ListEmptyReasonValueSetType;
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
 * Valid arguments for the Composition type.
 */
export interface CompositionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Composition" | undefined;
    /**
     * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.
     * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
     */
    status: CompositionStatusValueSetEnum | null;
    /**
     * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For clinical documents, this is usually the patient.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
     */
    author: fhir.ReferenceArgs[] | null;
    /**
     * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
     */
    confidentiality?: fhir.FhirCode | string | undefined;
    /**
     * Only list each attester once.
     */
    attester?: fhir.CompositionAttesterArgs[] | undefined;
    /**
     * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
     */
    custodian?: fhir.ReferenceArgs | undefined;
    /**
     * A document is a version specific composition.
     */
    relatesTo?: fhir.CompositionRelatesToArgs[] | undefined;
    /**
     * The event needs to be consistent with the type element, though can provide further information if desired.
     */
    event?: fhir.CompositionEventArgs[] | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: fhir.CompositionSectionArgs[] | undefined;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export declare class Composition extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Composition";
    /**
     * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.
     * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
     */
    status: CompositionStatusValueSetEnum | null;
    /**
     * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * For clinical documents, this is usually the patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
     */
    author: fhir.Reference[] | null;
    /**
     * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
     */
    title: fhir.FhirString | null;
    /**
     * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
     */
    confidentiality?: fhir.FhirCode | undefined;
    /**
     * Only list each attester once.
     */
    attester?: fhir.CompositionAttester[] | undefined;
    /**
     * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * A document is a version specific composition.
     */
    relatesTo?: fhir.CompositionRelatesTo[] | undefined;
    /**
     * The event needs to be consistent with the type element, though can provide further information if desired.
     */
    event?: fhir.CompositionEvent[] | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: fhir.CompositionSection[] | undefined;
    /**
     * Default constructor for Composition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompositionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): CompositionStatusValueSetType;
    /**
     * Preferred-bound Value Set for type
     */
    static typePreferredValueSet(): DocTypecodesValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): DocumentClasscodesValueSetType;
    /**
     * Required-bound Value Set for confidentiality
     */
    static confidentialityRequiredValueSet(): V3ConfidentialityClassificationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Composition.d.ts.map