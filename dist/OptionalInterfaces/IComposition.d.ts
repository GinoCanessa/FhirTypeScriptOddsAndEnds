import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Only list each attester once.
 */
export interface ICompositionAttester extends fhirInterfaces.IBackboneElement {
    /**
     * The type of attestation the authenticator offers.
     */
    mode?: CompositionAttesterModeEnum | undefined;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * Who attested the composition in the specified way.
     */
    party?: fhirInterfaces.IReference | undefined;
    /**
     * When the composition was attested by the party.
     */
    time?: string | undefined;
    _time?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Composition.attester.mode field
 */
export declare enum CompositionAttesterModeEnum {
    PERSONAL = "personal",
    PROFESSIONAL = "professional",
    LEGAL = "legal",
    OFFICIAL = "official"
}
/**
 * A document is a version specific composition.
 */
export interface ICompositionRelatesTo extends fhirInterfaces.IBackboneElement {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
     */
    code?: CompositionRelatesToCodeEnum | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: fhirInterfaces.IReference | undefined;
}
/**
 * Code Values for the Composition.relatesTo.code field
 */
export declare enum CompositionRelatesToCodeEnum {
    REPLACES = "replaces",
    TRANSFORMS = "transforms",
    SIGNS = "signs",
    APPENDS = "appends"
}
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export interface ICompositionEvent extends fhirInterfaces.IBackboneElement {
    /**
     * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: fhirInterfaces.IReference[] | undefined;
    /**
     * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */
    period?: fhirInterfaces.IPeriod | undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export interface ICompositionSection extends fhirInterfaces.IBackboneElement {
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: fhirInterfaces.IReference[] | undefined;
    /**
     * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.
     * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhirInterfaces.IReference[] | undefined;
    /**
     * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
     */
    focus?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode?: CompositionSectionModeEnum | undefined;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Nested sections are primarily used to help human readers navigate to particular portions of the document.
     */
    section?: fhirInterfaces.ICompositionSection[] | undefined;
    /**
     * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: fhirInterfaces.INarrative | undefined;
    /**
     * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Composition.section.mode field
 */
export declare enum CompositionSectionModeEnum {
    WORKING = "working",
    SNAPSHOT = "snapshot",
    CHANGES = "changes"
}
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export interface IComposition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Composition";
    /**
     * Only list each attester once.
     */
    attester?: fhirInterfaces.ICompositionAttester[] | undefined;
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
     */
    author?: fhirInterfaces.IReference[] | undefined;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
     */
    confidentiality?: string | undefined;
    _confidentiality?: fhirInterfaces.IElement | undefined;
    /**
     * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
     */
    custodian?: fhirInterfaces.IReference | undefined;
    /**
     * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * The event needs to be consistent with the type element, though can provide further information if desired.
     */
    event?: fhirInterfaces.ICompositionEvent[] | undefined;
    /**
     * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * A document is a version specific composition.
     */
    relatesTo?: fhirInterfaces.ICompositionRelatesTo[] | undefined;
    /**
     * The root of the sections that make up the composition.
     */
    section?: fhirInterfaces.ICompositionSection[] | undefined;
    /**
     * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.
     * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
     */
    status?: CompositionStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * For clinical documents, this is usually the patient.
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the Composition.status field
 */
export declare enum CompositionStatusEnum {
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IComposition.d.ts.map