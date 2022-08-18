---
sidebar_position: 3
---

# Error Responses

There are two types of error responses: 
* `HTTP Errors` means that the client didn't make a valid request
* `Internal Server Errors` means that the request was valid, but could not be fulfulled by the server

If everything went fine, the response will be formatted in JSON and contain `"status": "ok"` .

:::info
When quering an entity by id, if the id is well formatted but does not exist in the database, the id will be ignored instead of throwing an error. It it therefore possible to receive a `status`  `ok` response with and empty `data` field.
:::

## HTTP Errors ( `status code != 200` )

When the reponse contains a status code that is NOT `200 OK` , the request body is a simple error message formatted as a string. This usually means that a mistake was made on the caller's side (e.g request badly formatted or invalid authentification token)

For example, the response for an invalid token is:

```
HTTP/1.1 401 Unauthorized
Content-Type: text/plain; charset=utf-8
(...)

unauthorized error: unauthorized: invalid jwt: signature is invalid
```

## Internal Server Errors ( `status code == 200` )

When the response status is `200 OK` , this means that the request made by the caller is valid. However, if something went wrong while handeling the request, the server will return a error message formatted like this :

```
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
(...)

{
    "status": "error"
    "error_message": "The error message, in plain english"
}
```
