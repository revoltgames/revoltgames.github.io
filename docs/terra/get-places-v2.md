---
sidebar_position: 7
---

# Get PlacesV2

The `/api/placeV2` routes return `place` entities, which represent real-world point-of-interests (building, station, shop, office, etc...).

:::caution
As of now, Neopolis uses the `placesV2` , but Neoland currently uses `placesV3` , which are NOT compatible. The migration to `placesV3` for Neopolis is in preparation.
:::

## Get placesV2 by ids

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
            "city_id": "FRA_Versailles",
            "city_name": "Versailles",
            "id": "4e79b60445dd919c61427316",
            "land_id": "881fb46625fffff",
            "latlng": {
                "latitude": 48.858154,
                "longitude": 2.349975
            },
            "name": "Histoire d'Or",
            "subtitle": "Jewelry Store",
            "type": "shop"
        }
        (...)
    ]
}

```

</p>
</details>

## Get placesV2 by location (an optionnal kring)

See [Get Lands](./get-lands.md) for `kring` explanation

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
            "city_id": "FRA_Versailles",
            "city_name": "Versailles",
            "id": "4e79b60445dd919c61427316",
            "land_id": "881fb46625fffff",
            "latlng": {
                "latitude": 48.858154,
                "longitude": 2.349975
            },
            "name": "Histoire d'Or",
            "subtitle": "Jewelry Store",
            "type": "shop"
        }
        (...)
    ]
}

```

</p>
</details>
