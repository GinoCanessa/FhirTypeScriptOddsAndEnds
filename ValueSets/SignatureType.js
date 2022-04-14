"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureType = void 0;
/**
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 */
exports.SignatureType = {
    /**
     * the signature of the primary or sole author of a health information document. There can be only one primary author of a health information document.
     */
    signature_type_AuthorQuoteSSignature: {
        code: "1.2.840.10065.1.12.1.1",
        display: "Author's Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual who has witnessed another individual who is known to them signing a document. (Example the identity witness is a notary public.)
     */
    signature_type_IdentityWitnessSignature: {
        code: "1.2.840.10065.1.12.1.10",
        display: "Identity Witness Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual who has witnessed the health care provider counselling a patient.
     */
    signature_type_ConsentWitnessSignature: {
        code: "1.2.840.10065.1.12.1.11",
        display: "Consent Witness Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual who has translated health care information during an event or the obtaining of consent to a treatment.
     */
    signature_type_InterpreterSignature: {
        code: "1.2.840.10065.1.12.1.12",
        display: "Interpreter Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of a person, device, or algorithm that has reviewed or filtered data for inclusion into the patient record. ( Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.)
     */
    signature_type_ReviewSignature: {
        code: "1.2.840.10065.1.12.1.13",
        display: "Review Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an automated data source. (Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.)
     */
    signature_type_SourceSignature: {
        code: "1.2.840.10065.1.12.1.14",
        display: "Source Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature on a new amended document of an individual who has corrected, edited, or amended an original health information document. An addendum signature can either be a signature type or a signature sub-type (see 8.1). Any document with an addendum signature shall have a companion document that is the original document with its original, unaltered content, and original signatures. The original document shall be referenced via an attribute in the new document, which contains, for example, the digest of the old document. Whether the original, unaltered, document is always displayed with the addended document is a local matter, but the original, unaltered, document must remain as part of the patient record and be retrievable on demand.
     */
    signature_type_AddendumSignature: {
        code: "1.2.840.10065.1.12.1.15",
        display: "Addendum Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature on an original document of an individual who has generated a new amended document. This (original) document shall reference the new document via an additional signature purpose. This is the inverse of an addendum signature and provides a pointer from the original to the amended document.
     */
    signature_type_ModificationSignature: {
        code: "1.2.840.10065.1.12.1.16",
        display: "Modification Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual who is certifying that the document is invalidated by an error(s), or is placed in the wrong chart. An administrative (error/edit) signature must include an addendum to the document and therefore shall have an addendum signature sub-type (see 8.1). This signature is reserved for the highest health information system administrative classification, since it is a statement that the entire document is invalidated by the error and that the document should no longer be used for patient care, although for legal reasons the document must remain part of the permanent patient record.
     */
    signature_type_AdministrativeErrorEditSignature: {
        code: "1.2.840.10065.1.12.1.17",
        display: "Administrative (Error/Edit) Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature by an entity or device trusted to provide accurate timestamps. This timestamp might be provided, for example, in the signature time attribute.
     */
    signature_type_TimestampSignature: {
        code: "1.2.840.10065.1.12.1.18",
        display: "Timestamp Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of a health information document coauthor. There can be multiple coauthors of a health information document.
     */
    signature_type_CoauthorQuoteSSignature: {
        code: "1.2.840.10065.1.12.1.2",
        display: "Coauthor's Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual who is a participant in the health information document but is not an author or coauthor. (Example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.)
     */
    signature_type_CoParticipantQuoteSSignature: {
        code: "1.2.840.10065.1.12.1.3",
        display: "Co-participant's Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual who has transcribed a dictated document or recorded written text into a digital machine readable format.
     */
    signature_type_TranscriptionistRecorderSignature: {
        code: "1.2.840.10065.1.12.1.4",
        display: "Transcriptionist/Recorder Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * a signature verifying the information contained in a document. (Example a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.)
     */
    signature_type_VerificationSignature: {
        code: "1.2.840.10065.1.12.1.5",
        display: "Verification Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * a signature validating a health information document for inclusion in the patient record. (Example a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.)
     */
    signature_type_ValidationSignature: {
        code: "1.2.840.10065.1.12.1.6",
        display: "Validation Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of an individual consenting to what is described in a health information document.
     */
    signature_type_ConsentSignature: {
        code: "1.2.840.10065.1.12.1.7",
        display: "Consent Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of a witness to any other signature.
     */
    signature_type_SignatureWitnessSignature: {
        code: "1.2.840.10065.1.12.1.8",
        display: "Signature Witness Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
    /**
     * the signature of a witness to an event. (Example the witness has observed a procedure and is attesting to this fact.)
     */
    signature_type_EventWitnessSignature: {
        code: "1.2.840.10065.1.12.1.9",
        display: "Event Witness Signature",
        system: "urn:iso-astm:E1762-95:2013"
    },
};
//# sourceMappingURL=SignatureType.js.map