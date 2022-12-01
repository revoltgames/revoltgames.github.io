---
sidebar_position: 3
---

# User Ranking

## Get global ranking

```
POST https://prod.neopolis.app/public/getUsersRanking

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
        "id": "USER_ID",
        "name": "Username",
        "discriminator": "2001",
        "score": 1000000,
        "avatar": 13,
        "city_id": "de_Berlin",
        "city_name": "Berlin"
      },
      (...)
    ],
}
```

</p>
</details>

:::info
The users are ordered by score, meaning the 1st user in the reponse is the player with the most score.
:::

:::caution
The top of the ranking starts at `page = 1` , not `0` .
:::

## Get ranking details for a single user

```
POST https://prod.neopolis.app/public/getUserRanking

{
    "user_id": "USER_ID"
}
```

<details>
<summary>Example Response</summary>
<p>

```
{
  "status": "ok",
  "success": {
    "city": 100,
    "global": 1200,
    "league": "master_3",
    "league_progress": 1,
    "score": 1000000,
    "top_percent": 3
  }
}
```

</p>
</details>
