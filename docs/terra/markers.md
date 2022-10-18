---
sidebar_position: 7
---

# Markers (restricted)

The `/markers/` routes return `marker` entities, which represent real-world point-of-interests (building, station, shop, office, etc...) with minimal information, just enough te be displayed on a map. 

Some markers are `built` and contain the `icon` and `skin` fields. If those fields are missing, then the marker is considered `constructible` (aka: not `built`).

:::info
Only the buildings built this season (this month, in Neopolis) are considered built. This means that when a new season starts in Neopolis, all markers return to the `constructible` state.
:::

:::caution
The `/markers/` endpoints are restricted for internal use only, both for read and write. They cannot be accessed via a public API token.
:::

## Get markers within a Radius

```
GET /markers/findByRadius?lat=45.766750&lng=4.844647&radius=500&season=1
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok",
    "data": [
        // TODO
    ]
}

```

</p>
</details>

## Update a marker's information

TODO Write a description

```
PUT /markers/update

{
  "id": "MY_PLACE_ID",
  "season": 1, // used to know in which Neopolis' season the marker was built
  "icon": 10,
  "skin": "SKIN_ID" // use an empty string as default
}
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok",
}

```

</p>
</details>


## Remove a marker's information

TODO Write a description

```
PUT /markers/remove

{
  "id": "MY_PLACE_ID",
}
```

<details>
<summary>Example Response</summary>
<p>

```
{
    "status": "ok",
}

```

</p>
</details>
