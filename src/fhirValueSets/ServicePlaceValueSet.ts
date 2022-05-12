// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-place|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes a smattering of Service Place codes.
 */
export const ServicePlaceValueSet = {
  /**
   * 01: A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients.
   */
  Pharmacy: new Coding({
    display: "Pharmacy",
    code: "01",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 03: A facility whose primary purpose is education.
   */
  School: new Coding({
    display: "School",
    code: "03",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 04: A facility or location whose primary purpose is to provide temporary housing to homeless individuals (e.g., emergency shelters, individual or family shelters).
   */
  HomelessShelter: new Coding({
    display: "Homeless Shelter",
    code: "04",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 05: A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to American Indians and Alaska Natives who do not require hospitalization.
   */
  IndianHealthServiceFreeStandingFacility: new Coding({
    display: "Indian Health Service Free-standing Facility",
    code: "05",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 06: A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services rendered by, or under the supervision of, physicians to American Indians and Alaska Natives admitted as inpatients or outpatients.
   */
  IndianHealthServiceProviderBasedFacility: new Coding({
    display: "Indian Health Service Provider-based Facility",
    code: "06",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 07: A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members who do not require hospitalization.
   */
  Tribal638FreeStandingFacility: new Coding({
    display: "Tribal 638 Free-Standing Facility",
    code: "07",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 08: A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members admitted as inpatients or outpatients.
   */
  Tribal638ProviderBasedFacility: new Coding({
    display: "Tribal 638 Provider-Based Facility",
    code: "08",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 09: A prison, jail, reformatory, work farm, detention center, or any other similar facility maintained by either Federal, State or local authorities for the purpose of confinement or rehabilitation of adult or juvenile criminal offenders.
   */
  PrisonCorrectionalFacility: new Coding({
    display: "Prison/Correctional Facility",
    code: "09",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 11: Location, other than a hospital, skilled nursing facility (SNF), military treatment facility, community health center, State or local public health clinic, or intermediate care facility (ICF), where the health professional routinely provides health examinations, diagnosis, and treatment of illness or injury on an ambulatory basis.
   */
  Office: new Coding({
    display: "Office",
    code: "11",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 12: Location, other than a hospital or other facility, where the patient receives care in a private residence.
   */
  Home: new Coding({
    display: "Home",
    code: "12",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 13: Congregate residential facility with self-contained living units providing assessment of each resident's needs and on-site support 24 hours a day, 7 days a week, with the capacity to deliver or arrange for services including some health care and other services.
   */
  AssistedLivingFa: new Coding({
    display: "Assisted Living Fa",
    code: "13",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 14: A residence, with shared living areas, where clients receive supervision and other services such as social and/or behavioral services, custodial service, and minimal services (e.g., medication administration).
   */
  GroupHome: new Coding({
    display: "Group Home",
    code: "14",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 15: A facility/unit that moves from place-to-place equipped to provide preventive, screening, diagnostic, and/or treatment services.
   */
  MobileUnit: new Coding({
    display: "Mobile Unit",
    code: "15",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 19: portion of an off-campus hospital provider-based department which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization.
   */
  OffCampusOutpatientHospital: new Coding({
    display: "Off Campus-Outpatient Hospital",
    code: "19",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 20: Location, distinct from a hospital emergency room, an office, or a clinic, whose purpose is to diagnose and treat illness or injury for unscheduled, ambulatory patients seeking immediate medical attention.
   */
  UrgentCareFacility: new Coding({
    display: "Urgent Care Facility",
    code: "20",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 21: A facility, other than psychiatric, which primarily provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services by, or under, the supervision of physicians to patients admitted for a variety of medical conditions.
   */
  InpatientHospital: new Coding({
    display: "Inpatient Hospital",
    code: "21",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
  /**
   * 41: A land vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured.
   */
  AmbulanceLand: new Coding({
    display: "Ambulance—Land",
    code: "41",
    system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  }),
} as const;

/**
 * This value set includes a smattering of Service Place codes.
 */
export type ServicePlaceValueSetType = typeof ServicePlaceValueSet;

/**
 * This value set includes a smattering of Service Place codes.
 */
