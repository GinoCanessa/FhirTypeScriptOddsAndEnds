import { Coding } from '../fhir.js';
/**
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 */
export declare const SignatureTypeValueSet: {
    /**
     * 1.2.840.10065.1.12.1.1: the signature of the primary or sole author of a health information document. There can be only one primary author of a health information document.
     */
    readonly AuthorQuoteSSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.10: the signature of an individual who has witnessed another individual who is known to them signing a document. (Example the identity witness is a notary public.)
     */
    readonly IdentityWitnessSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.11: the signature of an individual who has witnessed the health care provider counselling a patient.
     */
    readonly ConsentWitnessSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.12: the signature of an individual who has translated health care information during an event or the obtaining of consent to a treatment.
     */
    readonly InterpreterSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.13: the signature of a person, device, or algorithm that has reviewed or filtered data for inclusion into the patient record. ( Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.)
     */
    readonly ReviewSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.14: the signature of an automated data source. (Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.)
     */
    readonly SourceSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.15: the signature on a new amended document of an individual who has corrected, edited, or amended an original health information document. An addendum signature can either be a signature type or a signature sub-type (see 8.1). Any document with an addendum signature shall have a companion document that is the original document with its original, unaltered content, and original signatures. The original document shall be referenced via an attribute in the new document, which contains, for example, the digest of the old document. Whether the original, unaltered, document is always displayed with the addended document is a local matter, but the original, unaltered, document must remain as part of the patient record and be retrievable on demand.
     */
    readonly AddendumSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.16: the signature on an original document of an individual who has generated a new amended document. This (original) document shall reference the new document via an additional signature purpose. This is the inverse of an addendum signature and provides a pointer from the original to the amended document.
     */
    readonly ModificationSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.17: the signature of an individual who is certifying that the document is invalidated by an error(s), or is placed in the wrong chart. An administrative (error/edit) signature must include an addendum to the document and therefore shall have an addendum signature sub-type (see 8.1). This signature is reserved for the highest health information system administrative classification, since it is a statement that the entire document is invalidated by the error and that the document should no longer be used for patient care, although for legal reasons the document must remain part of the permanent patient record.
     */
    readonly AdministrativeErrorEditSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.18: the signature by an entity or device trusted to provide accurate timestamps. This timestamp might be provided, for example, in the signature time attribute.
     */
    readonly TimestampSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.2: the signature of a health information document coauthor. There can be multiple coauthors of a health information document.
     */
    readonly CoauthorQuoteSSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.3: the signature of an individual who is a participant in the health information document but is not an author or coauthor. (Example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.)
     */
    readonly CoParticipantQuoteSSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.4: the signature of an individual who has transcribed a dictated document or recorded written text into a digital machine readable format.
     */
    readonly TranscriptionistRecorderSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.5: a signature verifying the information contained in a document. (Example a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.)
     */
    readonly VerificationSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.6: a signature validating a health information document for inclusion in the patient record. (Example a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.)
     */
    readonly ValidationSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.7: the signature of an individual consenting to what is described in a health information document.
     */
    readonly ConsentSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.8: the signature of a witness to any other signature.
     */
    readonly SignatureWitnessSignature: Coding;
    /**
     * 1.2.840.10065.1.12.1.9: the signature of a witness to an event. (Example the witness has observed a procedure and is attesting to this fact.)
     */
    readonly EventWitnessSignature: Coding;
};
/**
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 */
export declare type SignatureTypeValueSetType = typeof SignatureTypeValueSet;
/**
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 */
export declare enum SignatureTypeValueSetEnum {
    /**
     * 1.2.840.10065.1.12.1.1: the signature of the primary or sole author of a health information document. There can be only one primary author of a health information document.
     */
    AuthorQuoteSSignature = "1.2.840.10065.1.12.1.1",
    /**
     * 1.2.840.10065.1.12.1.10: the signature of an individual who has witnessed another individual who is known to them signing a document. (Example the identity witness is a notary public.)
     */
    IdentityWitnessSignature = "1.2.840.10065.1.12.1.10",
    /**
     * 1.2.840.10065.1.12.1.11: the signature of an individual who has witnessed the health care provider counselling a patient.
     */
    ConsentWitnessSignature = "1.2.840.10065.1.12.1.11",
    /**
     * 1.2.840.10065.1.12.1.12: the signature of an individual who has translated health care information during an event or the obtaining of consent to a treatment.
     */
    InterpreterSignature = "1.2.840.10065.1.12.1.12",
    /**
     * 1.2.840.10065.1.12.1.13: the signature of a person, device, or algorithm that has reviewed or filtered data for inclusion into the patient record. ( Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.)
     */
    ReviewSignature = "1.2.840.10065.1.12.1.13",
    /**
     * 1.2.840.10065.1.12.1.14: the signature of an automated data source. (Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.)
     */
    SourceSignature = "1.2.840.10065.1.12.1.14",
    /**
     * 1.2.840.10065.1.12.1.15: the signature on a new amended document of an individual who has corrected, edited, or amended an original health information document. An addendum signature can either be a signature type or a signature sub-type (see 8.1). Any document with an addendum signature shall have a companion document that is the original document with its original, unaltered content, and original signatures. The original document shall be referenced via an attribute in the new document, which contains, for example, the digest of the old document. Whether the original, unaltered, document is always displayed with the addended document is a local matter, but the original, unaltered, document must remain as part of the patient record and be retrievable on demand.
     */
    AddendumSignature = "1.2.840.10065.1.12.1.15",
    /**
     * 1.2.840.10065.1.12.1.16: the signature on an original document of an individual who has generated a new amended document. This (original) document shall reference the new document via an additional signature purpose. This is the inverse of an addendum signature and provides a pointer from the original to the amended document.
     */
    ModificationSignature = "1.2.840.10065.1.12.1.16",
    /**
     * 1.2.840.10065.1.12.1.17: the signature of an individual who is certifying that the document is invalidated by an error(s), or is placed in the wrong chart. An administrative (error/edit) signature must include an addendum to the document and therefore shall have an addendum signature sub-type (see 8.1). This signature is reserved for the highest health information system administrative classification, since it is a statement that the entire document is invalidated by the error and that the document should no longer be used for patient care, although for legal reasons the document must remain part of the permanent patient record.
     */
    AdministrativeErrorEditSignature = "1.2.840.10065.1.12.1.17",
    /**
     * 1.2.840.10065.1.12.1.18: the signature by an entity or device trusted to provide accurate timestamps. This timestamp might be provided, for example, in the signature time attribute.
     */
    TimestampSignature = "1.2.840.10065.1.12.1.18",
    /**
     * 1.2.840.10065.1.12.1.2: the signature of a health information document coauthor. There can be multiple coauthors of a health information document.
     */
    CoauthorQuoteSSignature = "1.2.840.10065.1.12.1.2",
    /**
     * 1.2.840.10065.1.12.1.3: the signature of an individual who is a participant in the health information document but is not an author or coauthor. (Example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.)
     */
    CoParticipantQuoteSSignature = "1.2.840.10065.1.12.1.3",
    /**
     * 1.2.840.10065.1.12.1.4: the signature of an individual who has transcribed a dictated document or recorded written text into a digital machine readable format.
     */
    TranscriptionistRecorderSignature = "1.2.840.10065.1.12.1.4",
    /**
     * 1.2.840.10065.1.12.1.5: a signature verifying the information contained in a document. (Example a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.)
     */
    VerificationSignature = "1.2.840.10065.1.12.1.5",
    /**
     * 1.2.840.10065.1.12.1.6: a signature validating a health information document for inclusion in the patient record. (Example a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.)
     */
    ValidationSignature = "1.2.840.10065.1.12.1.6",
    /**
     * 1.2.840.10065.1.12.1.7: the signature of an individual consenting to what is described in a health information document.
     */
    ConsentSignature = "1.2.840.10065.1.12.1.7",
    /**
     * 1.2.840.10065.1.12.1.8: the signature of a witness to any other signature.
     */
    SignatureWitnessSignature = "1.2.840.10065.1.12.1.8",
    /**
     * 1.2.840.10065.1.12.1.9: the signature of a witness to an event. (Example the witness has observed a procedure and is attesting to this fact.)
     */
    EventWitnessSignature = "1.2.840.10065.1.12.1.9"
}
//# sourceMappingURL=SignatureTypeValueSet.d.ts.map