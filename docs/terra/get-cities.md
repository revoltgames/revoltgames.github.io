---
sidebar_position: 5
---

# Get Cities

The `/api/cities` routes return a curated list of all cities in the world

## Get cities by ids

```
GET https://terra.neopolis.app/api/cities/findByIds?city_ids=FRA_Agen,FRA_AixenProvence
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok"
    "data": [
        {
            "country_id": "FRA",
            "id": "FRA_Agen",
            "latlng": {
                "latitude": 44.2005017,
                "longitude": 0.6332844
            },
            "name": "Agen",
            "population": 59000,
            "region_name": "Aquitaine"
        },
        {
            "country_id": "FRA",
            "id": "FRA_AixenProvence",
            "latlng": {
                "latitude": 43.5230558,
                "longitude": 5.4536094
            },
            "name": "Aix-en-Provence",
            "population": 147000,
            "region_name": "Provence-Alpes-Côte-d'Azur"
        }
    ],
}
```

</p>
</details>

## Get all cities contained in countries

```
GET https://terra.neopolis.app/api/cities/findByCountries?country_ids=FRA,ESP&limit=100&offset=0
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok"
    "data": [
        {
            "country_id": "FRA",
            "id": "FRA_Agen",
            "latlng": {
                "latitude": 44.2005017,
                "longitude": 0.6332844
            },
            "name": "Agen",
            "population": 59000,
            "region_name": "Aquitaine"
        },
        (...)
    ],
}
```

</p>
</details>

## Get the city closest to the given land

```
GET https://terra.neopolis.app/api/cities/findByLocation?land_id=8818699b1bfffff
```

OR

```
GET https://terra.neopolis.app/api/cities/findByLocation?lat=45.9&lng=1.5
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok"
    "data": {
        "country_id": "FRA",
        "id": "FRA_Agen",
        "latlng": {
            "latitude": 44.2005017,
            "longitude": 0.6332844
        },
        "name": "Agen",
        "population": 59000,
        "region_name": "Aquitaine"
    },
}
```

</p>
</details>

:::info
The returned city will always be in the same country, even if there is a closer city across a border.
:::
