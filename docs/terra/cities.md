---
sidebar_position: 5
---

# Cities

The `/cities` routes return a curated list of all cities in the world

## Primary Cities

Just like countries, some cities have been selected to be considered `primary`. By default, the API returns all available cities, but it is possible to filter only primary cities by adding `primary_only=true`.

In Neopolis, only Primary Cities should be used.

## Get cities by ids

```
GET https://terra.neopolis.app/cities/findByIds?city_ids=NLD_Amsterdam,NLD_TheHague
```

<details>
<summary>Example Response</summary>
<p>

```
{
  "status": "ok",
  "data": [
    {
      "id": "NLD_Amsterdam",
      "country_id": "NLD",
      "name": "Amsterdam",
      "region_name": "Noord-Holland",
      "population": 1031000,
      "latlng": {
        "latitude": 52.350387797913726,
        "longitude": 4.90877386838879
      }
    },
    (...)
  ]
}
```

</p>
</details>

## Get all cities contained in countries

```
GET https://terra.neopolis.app/cities/findByCountries?country_ids=FRA,ESP&limit=100&offset=0
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
GET https://terra.neopolis.app/cities/findByLocation?land_id=8818699b1bfffff
```

OR

```
GET https://terra.neopolis.app/cities/findByLocation?lat=45.9&lng=1.5
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

:::warning
If the landId or lat/lng are outside any country, the return value will be an empty `city` object with `id=NO_CITY` and `country_id=NO_COUNTRY`
:::
