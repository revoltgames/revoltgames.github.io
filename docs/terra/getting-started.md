---
sidebar_position: 2
---

# Getting Started

The API endpoint can be found at `https://terra.neopolis.app`

## API Authentification

All endpoints require a token for making queries. In each query's, add the header `Authorization: Bearer <TOKEN>` and replace `<TOKEN>` by your actual token

### Public API token

For testing the publicly available endpoints, this specific token can be used

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjYxMDY3NjMsIm5hbWUiOiJ0ZXN0aW5nIiwicGVybXMiOiJwdWJsaWMifQ.-vArzQevtLyfpTYnFcu-rPrKT0aLrkM-iGCzr_yzJxk
```
Last edited: 18 Oct 2022

:::caution
Do not use this development token in production, this particular token can be rewoked at any time
:::

### Production token

To get a production token, send an email at `roland <at> neopolis <dot> io`

## Example query with curl

```
curl --header 'Authorization: Bearer <AUTH_TOKEN>' "terra.neopolis.app/countries/findByIds?country_ids=FRA"
```

Expected Response:

```
{"status":"ok","data":[{"id":"FRA","name":"France","continent":"Europe","population":67060000}]}
```
