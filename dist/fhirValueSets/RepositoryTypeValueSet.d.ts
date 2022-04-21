import { Coding } from '../fhir.js';
/**
 * Type for access of external URI.
 */
export declare const RepositoryTypeValueSet: {
    /**
     * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format).
     */
    readonly ClickAndSee: Coding;
    /**
     * login: When logged into the website, the resource can be seen.
     */
    readonly ResultCannotBeAccessUnlessAnAccountIsLoggedIn: Coding;
    /**
     * oauth: When logged in and  follow the API in the website related with URL, the resource can be seen.
     */
    readonly ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: Coding;
    /**
     * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).
     */
    readonly TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: Coding;
    /**
     * other: Some other complicated or particular way to get resource from URL.
     */
    readonly SomeOtherComplicatedOrParticularWayToGetResourceFromURL: Coding;
};
/**
 * Type for access of external URI.
 */
export declare type RepositoryTypeValueSetType = typeof RepositoryTypeValueSet;
/**
 * Type for access of external URI.
 */
export declare enum RepositoryTypeValueSetEnum {
    /**
     * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format).
     */
    ClickAndSee = "directlink",
    /**
     * login: When logged into the website, the resource can be seen.
     */
    ResultCannotBeAccessUnlessAnAccountIsLoggedIn = "login",
    /**
     * oauth: When logged in and  follow the API in the website related with URL, the resource can be seen.
     */
    ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource = "oauth",
    /**
     * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).
     */
    TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult = "openapi",
    /**
     * other: Some other complicated or particular way to get resource from URL.
     */
    SomeOtherComplicatedOrParticularWayToGetResourceFromURL = "other"
}
//# sourceMappingURL=RepositoryTypeValueSet.d.ts.map