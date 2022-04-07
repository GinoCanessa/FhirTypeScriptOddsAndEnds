/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export var SequenceType = {
    /**
     * Amino acid sequence.
     */
    sequence_type_AASequence: {
        code: "aa",
        display: "AA Sequence",
        system: "http://hl7.org/fhir/sequence-type"
    },
    /**
     * DNA Sequence.
     */
    sequence_type_DNASequence: {
        code: "dna",
        display: "DNA Sequence",
        system: "http://hl7.org/fhir/sequence-type"
    },
    /**
     * RNA Sequence.
     */
    sequence_type_RNASequence: {
        code: "rna",
        display: "RNA Sequence",
        system: "http://hl7.org/fhir/sequence-type"
    }
};
