# Authentication

### OAuth 2.0

>Before you can begin the OAuth process, you must first register a new app with the service. When registering a new app, you usually register basic information such as application name, website, a logo, etc. In addition, you must register a redirect URI to be used for redirecting users to for web server, browser-based, or mobile apps.

### Roles

**The Third-Party Application: "Client"**

The client is the application that is attempting to get access to the user's account. It needs to get permission from the user before it can do so.

**The API: "Resource Server"**

The resource server is the API server used to access the user's information.

**The Authorization Server**

This is the server that presents the interface where the user approves or denies the request. In smaller implementations, this may be the same server as the API server, but larger scale deployments will often build this as a separate component.

**The User: "Resource Owner"**

The resource owner is the person who is giving access to some portion of their account.

### Redirect URIs
The service will only redirect users to a registered URI, which helps prevent some attacks. Any HTTP redirect URIs must be served via HTTPS. This helps prevent tokens from being intercepted during the authorization process. Native apps may register a redirect URI with a custom URL scheme for the application, which may look like demoapp://redirect.

### Client ID and Secret
After registering your app, you will receive a client ID and optionally a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page. The client secret must be kept confidential. If a deployed app cannot keep the secret confidential, such as single-page Javascript apps or native apps, then the secret is not used, and ideally the service shouldn't issue a secret to these types of apps in the first place.

#### Secret

#### Client ID

### Tokens

---

Callback URL/Authorized redirect URIs
redirected to after the application is authorized.

Auth URL
endpoint for authorization server

Access Token URL
endpoint for authentication server

Scope

---
 #### Sources for these notes

 * https://aaronparecki.com/oauth-2-simplified/
    * https://aaronparecki.com/oauth-2-simplified/#roles

https://www.youtube.com/watch?v=z2c3ZBJlYKo