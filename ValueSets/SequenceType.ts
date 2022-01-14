// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 */
export const SequenceType = {
  /**
   * Amino acid sequence.
   */
  sequence_type_AASequence: {
    code: "aa",
    display: "AA Sequence",
    system: "http://hl7.org/fhir/sequence-type"
  } as Coding,
  /**
   * DNA Sequence.
   */
  sequence_type_DNASequence: {
    code: "dna",
    display: "DNA Sequence",
    system: "http://hl7.org/fhir/sequence-type"
  } as Coding,
  /**
   * RNA Sequence.
   */
  sequence_type_RNASequence: {
    code: "rna",
    display: "RNA Sequence",
    system: "http://hl7.org/fhir/sequence-type"
  } as Coding,
};
