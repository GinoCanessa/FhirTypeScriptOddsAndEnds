// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/repository-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * Type for access of external URI.
 */
export const RepositoryTypeValueSet = {
  /**
   * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format).
   */
  ClickAndSee: new Coding({
    display: "Click and see",
    code: "directlink",
    system: "http://hl7.org/fhir/repository-type",
  }),
  /**
   * login: When logged into the website, the resource can be seen.
   */
  ResultCannotBeAccessUnlessAnAccountIsLoggedIn: new Coding({
    display: "Result cannot be access unless an account is logged in",
    code: "login",
    system: "http://hl7.org/fhir/repository-type",
  }),
  /**
   * oauth: When logged in and  follow the API in the website related with URL, the resource can be seen.
   */
  ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: new Coding({
    display: "Result need to be fetched with API and need LOGIN( or cookies are required when visiting the link of resource)",
    code: "oauth",
    system: "http://hl7.org/fhir/repository-type",
  }),
  /**
   * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).
   */
  TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: new Coding({
    display: "The URL is the RESTful or other kind of API that can access to the result.",
    code: "openapi",
    system: "http://hl7.org/fhir/repository-type",
  }),
  /**
   * other: Some other complicated or particular way to get resource from URL.
   */
  SomeOtherComplicatedOrParticularWayToGetResourceFromURL: new Coding({
    display: "Some other complicated or particular way to get resource from URL.",
    code: "other",
    system: "http://hl7.org/fhir/repository-type",
  }),
} as const;

/**
 * Type for access of external URI.
 */
export type RepositoryTypeValueSetType = typeof RepositoryTypeValueSet;

/**
 * Type for access of external URI.
 */
