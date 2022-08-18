---
sidebar_position: 4
---

# Get Countries

The `/api/countries/` routes return selected states in the world. 

:::tip
All `/api/countries/` routes accept an optionnal `lang` parameter, which defaults to `en`. This parameter changes the language of the `name` field for every returned countries.
:::

## Get all countries

```
GET https://terra.neopolis.app/api/countries/findAll?limit=100&offset=0
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok"
    "data": [
        {
            "continent": "North America",
            "id": "ABW",
            "name": "Aruba",
            "population": 107000
        },
        (...)
    ]
}
```

</p>
</details>

## Get countries by ids

```
GET https://terra.neopolis.app/api/countries/findByIds?country_ids=ABW,ESP&lang=fr
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok"
    "data": [
        {
            "continent": "North America",
            "id": "ABW",
            "name": "Aruba",
            "population": 107000
        },
        (...)
    ]
}
```

</p>
</details>

:::info
All `country_ids` is a list of comma separate country_ids (3 letter ISO code, all uppercase). It is possible to have only 1 country in the list to get a specific country.
:::

## Find a country covering a specific location

```
GET https://terra.neopolis.app/api/countries/findByLocation?land_id=8818699b1bfffff&lang=fr
```

OR

```
GET https://terra.neopolis.app/api/countries/findByLocation?lat=45.9&lng=1.5&lang=fr
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok"
    "data":
        {
            "continent": "North America",
            "id": "ABW",
            "name": "Aruba",
            "population": 107000
        },
}
```

</p>
</details>

:::info
If no country covers the given location, a country with id `NO_COUNTRY` and name `International Waters` is returned.
:::
