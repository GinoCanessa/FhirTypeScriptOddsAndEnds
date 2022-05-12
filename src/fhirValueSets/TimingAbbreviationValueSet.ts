// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/timing-abbreviation|4.0.1

import { Coding } from '../fhir.js'

/**
 * Code for a known / defined timing pattern.
 */
export const TimingAbbreviationValueSet = {
  /**
   * AM: Every morning at institution specified times.
   */
  AM: new Coding({
    display: "AM",
    code: "AM",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * BED: At bedtime (institution specified time).
   */
  AtBedtime: new Coding({
    display: "at bedtime",
    code: "BED",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * BID: Two times a day at institution specified time
   */
  BID: new Coding({
    display: "BID",
    code: "BID",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * MO: Monthly at institution specified time.
   */
  Monthly: new Coding({
    display: "monthly",
    code: "MO",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * PM: Every afternoon at institution specified times.
   */
  PM: new Coding({
    display: "PM",
    code: "PM",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * Q1H: Every hour at institution specified times.
   */
  EveryHour: new Coding({
    display: "every hour",
    code: "Q1H",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * Q2H: Every 2 hours at institution specified times.
   */
  Every2Hours: new Coding({
    display: "every 2 hours",
    code: "Q2H",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * Q3H: Every 3 hours at institution specified times.
   */
  Every3Hours: new Coding({
    display: "every 3 hours",
    code: "Q3H",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * Q4H: Every 4 hours at institution specified time
   */
  Q4H: new Coding({
    display: "Q4H",
    code: "Q4H",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * Q6H: Every 6 hours at institution specified time
   */
  Q6H: new Coding({
    display: "Q6H",
    code: "Q6H",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * Q8H: Every 8 hours at institution specified times.
   */
  Every8Hours: new Coding({
    display: "every 8 hours",
    code: "Q8H",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * QD: Every day at institution specified times.
   */
  QD: new Coding({
    display: "QD",
    code: "QD",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * QID: Four times a day at institution specified time
   */
  QID: new Coding({
    display: "QID",
    code: "QID",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * QOD: Every other day at institution specified times.
   */
  QOD: new Coding({
    display: "QOD",
    code: "QOD",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * TID: Three times a day at institution specified time
   */
  TID: new Coding({
    display: "TID",
    code: "TID",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
  /**
   * WK: Weekly at institution specified time.
   */
  Weekly: new Coding({
    display: "weekly",
    code: "WK",
    system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
  }),
} as const;

/**
 * Code for a known / defined timing pattern.
 */
export type TimingAbbreviationValueSetType = typeof TimingAbbreviationValueSet;

/**
 * Code for a known / defined timing pattern.
 */
