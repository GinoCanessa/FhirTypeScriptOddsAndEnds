// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * How a property is represented when serialized.
 */
export const PropertyRepresentationValueSet = {
  /**
   * Use CDA narrative instead of XHTML.
   */
  property_representation_CDATextFormat: new Coding({
    code: "cdaText",
    display: "CDA Text Format",
    system: "http://hl7.org/fhir/property-representation"
  }),
  /**
   * The type of this element is indicated using xsi:type.
   */
  property_representation_TypeAttribute: new Coding({
    code: "typeAttr",
    display: "Type Attribute",
    system: "http://hl7.org/fhir/property-representation"
  }),
  /**
   * The property is represented using XHTML.
   */
  property_representation_XHTML: new Coding({
    code: "xhtml",
    display: "XHTML",
    system: "http://hl7.org/fhir/property-representation"
  }),
  /**
   * In XML, this property is represented as an attribute not an element.
   */
  property_representation_XMLAttribute: new Coding({
    code: "xmlAttr",
    display: "XML Attribute",
    system: "http://hl7.org/fhir/property-representation"
  }),
  /**
   * This element is represented using the XML text attribute (primitives only).
   */
  property_representation_XMLText: new Coding({
    code: "xmlText",
    display: "XML Text",
    system: "http://hl7.org/fhir/property-representation"
  }),
};
