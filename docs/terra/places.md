---
sidebar_position: 7
---

# Places (restricted)

The `/places` routes return `place` entities, which represent real-world point-of-interests (building, station, shop, office, etc...).

:::caution
The `/places/` endpoints are restricted for internal use only, both for read and write. They cannot be accessed via a public API token.
:::

## Get places by ids

```
GET /places/findByIds?place_ids=021b293db598402ec928ec56,07e19d5e63ee449019a1b384
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok",
    "data": [
        {
            "id": "021b293db598402ec928ec56",
            "land_id": "881f90254dfffff",
            "name": "Le Bar d'à Côté",
            "subtitle": "Bistro",
            "category": "bar",
            "latlng": {
                "latitude": 45.768223,
                "longitude": 4.845756
            },
            "address": "27 rue de Sèze, 69006 Lyon",
            "photos": [
                "PHOTO_URL",
                (...)
            ],
            "popularity": 0.96573395,
            "rating": 8.9,
            "website": "http://www.lebardacote.com/"
        },
        (...)
    ]
}

```

</p>
</details>

## Get places by location (an optionnal kring)

See [Get Lands](./lands.md) for `kring` explanation

```
GET /places/findByLocation?land_id=8818699b1bfffff&kring=1&limit=100&offset=0
```

OR

```
GET /places/findByLocation?lat=45.9&lng=1.5&kring=1&limit=100&offset=0`
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok",
    "data": [
        {
            "id": "021b293db598402ec928ec56",
            "land_id": "881f90254dfffff",
            "name": "Le Bar d'à Côté",
            "subtitle": "Bistro",
            "category": "bar",
            "latlng": {
                "latitude": 45.768223,
                "longitude": 4.845756
            },
            "address": "27 rue de Sèze, 69006 Lyon",
            "photos": [
                "PHOTO_URL",
                (...)
            ],
            "popularity": 0.96573395,
            "rating": 8.9,
            "website": "http://www.lebardacote.com/"
        },
        (...)
    ]
}

```

</p>
</details>
