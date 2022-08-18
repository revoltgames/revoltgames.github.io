---
sidebar_position: 3
---

# Error Responses

There are two types of error responses: 
* `HTTP Errors` means that the client didn't make a valid request
* `Internal Server Errors` means that the request was valid, but could not be fulfulled

If everything went fine, the response will be formatted in JSON and contain `"status": "ok"`.

## HTTP Errors (`status code != 200`)

When the reponse contains a status code that is NOT `200 OK` , the request body is a simple error message formatted as a string. This means that a mistake was made on the caller-side (e.g request badly formatted or invalid authentification token)

For example, the response for an invalid token is:

```
HTTP/1.1 401 Unauthorized
Content-Length: 68
Content-Type: text/plain; charset=utf-8
(...)

unauthorized error: unauthorized: invalid jwt: signature is invalid
```

## Internal Server Errors (`status code == 200`)

When the response status is `200 OK` , this means that the request made wy the caller is valid. However, if something went wrong while handeling the request, the server will return a error message formatted like this :

```
HTTP/1.1 200 OK
Content-Length: 168
Content-Type: text/plain; charset=utf-8
(...)

{
    "status": "error"
    "error_message": "The error message, in plain english"
}
```
