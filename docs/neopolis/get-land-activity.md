---
sidebar_position: 5
---

# Land Activity

```
POST https://prod.neopolis.app/public/getLandActivity

{
	"land_id": "LAND_ID",
	"days": 7
}
```

<details>
<summary>Example Response</summary>
<p>

```
{
  "status": "ok",
  "success": {
    "ad_viewed": [
      18,
      100,
      (...)
    ],
    "neocoin_opened": [
      123,
      193,
      (...)
    ],
    "cards_opened": [
      90,
      50,
      (...)
    ],
    "heist_successful": [
      8,
      19,
      (...)
    ],
    "building_created": [
      2,
      9,
      (...)
    ],
    "unique_visitors": [
      131,
      109,
      (...)
    ],
    "iap_purchased": [
      1,
      3,
      (...)
    ]
  }
}
```

</p>
</details>
