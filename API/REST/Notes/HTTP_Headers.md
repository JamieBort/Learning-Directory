# HTTP_Headers



>HTTP defines a set of standard request and response headers. Use the headers to provide information about the entity or other resource that you are requesting. The Decision Server Insights REST API supports the following HTTP headers.

> The REST headers and parameters contain a wealth of information that can help you track down issues when you encounter them. HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. Headers carry information for:

1. Request and Response Body
2. Request Authorization
3. Response Caching 
4. Response Cookies

>Other than the above categories HTTP headers also carry a lot of other information around HTTP connection types, proxies etc. Most of these headers are for management of connections between client, server and proxies and do not require explicit validation through testing.

### HTTP Request Headers

>Indicate the format of the request and allowed response, or to enable optimistic updating with ETag.

**Table 1. Request headers**
| Header name | Description | Examples |
| ----------- | ----------- | ----------- |
| Accept | Specifies the content types that are valid in the response message. If the server cannot respond with the requested content type, the 406 Not Acceptable HTTP status message is returned. | application/xml application/json |
| Content-Type | Indicates the content type that is used in the body of the request. The supported content type is XML. | application/xml       |
| If-Match | Including **If-Match** in the header enables optimistic updating with ETag. The server checks to make sure that the entity version numbers match, then writes the entity and increments the version. | a8f34, or any string of characters that represents a specific version of the entity |
| If-None-Match | Including **If-None-Match** in the header enables optimistic reading of entities by using ETag. The server determines whether the ETag information matches when a GET request is processed. If the information matches, then the entity did not change since the last request. The server returns the HTTP status message 304 Not Modified and does not retrieve the entity. If there is not a match, the GET request is processed. | a8f34, or any string of characters that represents a specific version of the entity |

### HTTP Response Headers

>Response headers provide information about the status of the request, and return ETag information. The response also includes a status code.

>Every REST request must contain three HTTP header fields: Accept, Content-Type, and Cookie.

**Table 2. REST response headers**
| Header name | Description | Examples |
| ----------- | ----------- | ----------- |
| Allow | Lists the allowed request types for the solution or entity. If an invalid request is received, the HTTP status message 405 Method not allowed is returned. | GET |
| Content-Type | The MIME type of the response content.  | application/xml |
| ETag | An alphanumeric string that represents the entity version. | a8f34, or any string that represents a specific version of the entity |
| Status  | The **Status** line in the HTTP response indicates whether the server responded to the request successfully, or if there was an error. | 200 - OK indicates a successful response 405 - Method not allowed indicates an error |

#### Response status codes

The REST response includes a status code that indicates whether the request was successful, and if not, the type of error that occurred.

**Table 3. REST response status codes**
| Code | Description |
| ----------- | ----------- |
| 200 | OK: the request was successful. |
| 201 | Created: the request was successful, and one or more entities was created. |
| 304 | Not Modified: the entity was not updated, possibly because the ETag condition, such as If-Match or If-None-Match, stopped the request from completing. |
| 400 | Bad Request: the request was not properly formed and therefore was not successful. |
| 404 | Not Found: the URI path is incorrect, or communication with the server was unsuccessful. |
| 405 | Method Not Allowed: the syntax of the request does not match the request type. The Allow header provides more information about the supported types. |
| 406 | Not Acceptable: the Accept header response type is not supported. The supported types are XML and JSON. |
| 409 | Conflict: the entity or entities cannot be overwritten or deleted. |
| 412 | Precondition Failed: when the If-Match header is included in the request, this status indicates that the ETag information did not match and therefore the entity was not updated. |
| 413 | Request Too Large: the number of entities that is returned is too large. |
| 415 | Unsupported Media Type: the request contains a format that the server cannot interpret. |
| 500 | Internal Server Error: this status indicates that an error occurred on the server and it was unable to respond. |
| 503 | Service Not Available: the solution is not ready and could not respond to the request. |

---
 #### Sources for these notes

 * https://www.soapui.org/learn/api/understanding-rest-headers-and-parameters/
 
 * https://www.ibm.com/docs/en/odm/8.9.1?topic=api-rest-headers-status-codes