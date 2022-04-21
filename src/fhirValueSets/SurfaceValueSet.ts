// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/surface|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes a smattering of FDI tooth surface codes.
 */
export const SurfaceValueSet = {
  /**
   * B: The surface of a posterior tooth facing the cheeks.
   */
  Buccal: new Coding({
    display: "Buccal",
    code: "B",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * D: The surface of a tooth that faces away from the midline of the face.
   */
  Distal: new Coding({
    display: "Distal",
    code: "D",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * DI: The Distoincisal surfaces of a tooth.
   */
  Distoincisal: new Coding({
    display: "Distoincisal",
    code: "DI",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * DO: The Distoclusal surfaces of a tooth.
   */
  Distoclusal: new Coding({
    display: "Distoclusal",
    code: "DO",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * I: The biting edge of anterior teeth.
   */
  Incisal: new Coding({
    display: "Incisal",
    code: "I",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * L: The surface of a tooth facing the tongue.
   */
  Lingual: new Coding({
    display: "Lingual",
    code: "L",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * M: The surface of a tooth that is closest to the midline (middle) of the face.
   */
  Mesial: new Coding({
    display: "Mesial",
    code: "M",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * MO: The Mesioclusal surfaces of a tooth.
   */
  Mesioclusal: new Coding({
    display: "Mesioclusal",
    code: "MO",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * MOD: The Mesioclusodistal surfaces of a tooth.
   */
  Mesioclusodistal: new Coding({
    display: "Mesioclusodistal",
    code: "MOD",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * O: The chewing surface of posterior teeth.
   */
  Occlusal: new Coding({
    display: "Occlusal",
    code: "O",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
  /**
   * V: The surface of a tooth facing the lips.
   */
  Ventral: new Coding({
    display: "Ventral",
    code: "V",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  }),
} as const;

/**
 * This value set includes a smattering of FDI tooth surface codes.
 */
export type SurfaceValueSetType = typeof SurfaceValueSet;

/**
 * This value set includes a smattering of FDI tooth surface codes.
 */
export enum SurfaceValueSetEnum {
  /**
   * B: The surface of a posterior tooth facing the cheeks.
   */
  Buccal = "B",
  /**
   * D: The surface of a tooth that faces away from the midline of the face.
   */
  Distal = "D",
  /**
   * DI: The Distoincisal surfaces of a tooth.
   */
  Distoincisal = "DI",
  /**
   * DO: The Distoclusal surfaces of a tooth.
   */
  Distoclusal = "DO",
  /**
   * I: The biting edge of anterior teeth.
   */
  Incisal = "I",
  /**
   * L: The surface of a tooth facing the tongue.
   */
  Lingual = "L",
  /**
   * M: The surface of a tooth that is closest to the midline (middle) of the face.
   */
  Mesial = "M",
  /**
   * MO: The Mesioclusal surfaces of a tooth.
   */
  Mesioclusal = "MO",
  /**
   * MOD: The Mesioclusodistal surfaces of a tooth.
   */
  Mesioclusodistal = "MOD",
  /**
   * O: The chewing surface of posterior teeth.
   */
  Occlusal = "O",
  /**
   * V: The surface of a tooth facing the lips.
   */
  Ventral = "V",
}
