---
sidebar_position: 1
---

# Introduction

:::info Note
This documentation is still WIP. If you notice any typo, broken link or other issue, make sure to file an issue by clicking on the `Report an issue` button at the top right corner.
:::

Terra is a database with real-world data, indexed on h3. This data is served via an API for geolocalised games like Neopolis and Neoland.

* Cultural data (country, closest city)
* Natural data (biomes: urban, forst, desert, etc)
* Curated Places (real world buildings)

:::danger Disclaimer
At the time of writing (18/08/2022), the API is available for testing only. It is NOT fully compatible with either Neopolis or Neoland.

The list of differences includes :
* Countries & cities are not the same as in Neoland or Neopolis. The ids are also different
* The land informations (ex: closest city or even associated country) may be different
* The places are currently only in v2 (incompatible with Neoland) and are NOT kept up-to-date

The Terra Database will be updated regularly for solving these incompatibility issues & other bugs that may arrise.
:::

## Terra entities

Terra has 4 main entities
* `countries`, all soverain states in the world (used to categorise lands)
* `cities`, a curated list of all cities in the world (used for closest city in lands)
* `lands` (h3 resolution 8) is the building block of Terra and are associated to a `closest city` and to `biomes`
* `places` defines a real-world point of interest (building, station, shop, office, etc...)

## Lands and h3Geo

Each land is identified by a unique h3 index of resolution 8, representing a geospacial hexagon with en edge length of ~460m. For more info on h3, see [the official documentation](https://h3geo.org/).

## Lands and biomes

All lands have a `main_biome` , which is the most dominent biome in the given land. It il also possible to get the biome details, in percentage for all biomes in the land.

For a complete list of available biomes, see [Biomes](./biomes)

## Country translations

Country names can be translated in a various langages using the `lang` parameter. To see all available langcodes, see [Langcodes](./langcodes)
