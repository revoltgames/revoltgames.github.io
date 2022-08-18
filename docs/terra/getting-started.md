---
sidebar_position: 2
---

# Getting Started

The API endpoint can be found at `https://terra.neopolis.app`

## API Authentification

All endpoints require a token for making queries. In each query's, add the header `Authorization: Bearer <TOKEN>` and replace `<TOKEN>` by your actual token

### Development token

For developement, this specific token can be used

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXJyYS9kZXYiLCJpYXQiOjE2NjA4MTcyMjAsIm5hbWUiOiJ0ZXN0LTEifQ.WWQ8wrohZg8GgSLVB-Sv_MtqBg-GWKK50WSIFrKY6VM
```

:::caution

Do not use this development token in production, it could be rewoked at any time

:::

### Production token

To get a production token, send an email at `roland <at> neopolis <dot> io`

## Example query with curl

```
curl --header 'Authorization: Bearer <AUTH_TOKEN>' --data '{"country_ids":["FRA"]}' terra.neopolis.app/api/countries/findByIds
```

Expected Response:

```
{"status":"ok","data":[{"id":"FRA","name":"France","continent":"Europe","population":67060000}]}
```
