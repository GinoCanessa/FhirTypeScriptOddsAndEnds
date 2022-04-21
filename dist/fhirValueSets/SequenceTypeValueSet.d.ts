import { Coding } from '../fhir.js';
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export declare const SequenceTypeValueSet: {
    /**
     * aa: Amino acid sequence.
     */
    readonly AASequence: Coding;
    /**
     * dna: DNA Sequence.
     */
    readonly DNASequence: Coding;
    /**
     * rna: RNA Sequence.
     */
    readonly RNASequence: Coding;
};
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export declare type SequenceTypeValueSetType = typeof SequenceTypeValueSet;
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export declare enum SequenceTypeValueSetEnum {
    /**
     * aa: Amino acid sequence.
     */
    AASequence = "aa",
    /**
     * dna: DNA Sequence.
     */
    DNASequence = "dna",
    /**
     * rna: RNA Sequence.
     */
    RNASequence = "rna"
}
//# sourceMappingURL=SequenceTypeValueSet.d.ts.map