// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export const HttpVerbValueSet = {
  /**
   * HTTP DELETE Command.
   */
  http_verb_DELETE: Coding.FromStrict({
    code: "DELETE",
    display: "DELETE",
    system: "http://hl7.org/fhir/http-verb"
  }),
  /**
   * HTTP GET Command.
   */
  http_verb_GET: Coding.FromStrict({
    code: "GET",
    display: "GET",
    system: "http://hl7.org/fhir/http-verb"
  }),
  /**
   * HTTP HEAD Command.
   */
  http_verb_HEAD: Coding.FromStrict({
    code: "HEAD",
    display: "HEAD",
    system: "http://hl7.org/fhir/http-verb"
  }),
  /**
   * HTTP PATCH Command.
   */
  http_verb_PATCH: Coding.FromStrict({
    code: "PATCH",
    display: "PATCH",
    system: "http://hl7.org/fhir/http-verb"
  }),
  /**
   * HTTP POST Command.
   */
  http_verb_POST: Coding.FromStrict({
    code: "POST",
    display: "POST",
    system: "http://hl7.org/fhir/http-verb"
  }),
  /**
   * HTTP PUT Command.
   */
  http_verb_PUT: Coding.FromStrict({
    code: "PUT",
    display: "PUT",
    system: "http://hl7.org/fhir/http-verb"
  }),
};