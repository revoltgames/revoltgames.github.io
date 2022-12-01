---
sidebar_position: 4
---

# Party Ranking

## Get global ranking

```
POST https://prod.neopolis.app/public/getPartiesRanking

{
    "page": 1
}
```

<details>
<summary>Example Response</summary>
<p>

```
{
  "status": "ok",
  "success": {
    "ranking": [
      {
        "id": "PARTY_ID",
        "name": "Party Name",
        "score": 10000,
        "logo": "5_4_0",
        "level": 20,
        "members_count": 15,
        "members_max_bonus": 0,
        "city_id": "fr_Paris",
        "city_name": "Paris"
      },
      (...)
    ],
}
```

</p>
</details>

:::info

The 1st page is `1` , not `0` . Page `0` is actually the last page.

:::

## Get ranking details for a party

```
POST https://prod.neopolis.app/public/getPartyRanking

{
    "party_id": "PARTY_ID"
}
```

<details>
<summary>Example Response</summary>
<p>

```
{
  "status": "ok",
  "success": {
    "city": 1, // Ranking within the party's city
    "global": 1 // Global ranking
  }
}
```

</p>
</details>
