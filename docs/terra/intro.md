---
sidebar_position: 1
---

# Introduction

:::info Note
This documentation is still WIP. If you notice any typo, broken link or other issue for the API or documentation, make sure to file a Github Issue by clicking on the `Report an issue` button at the top right corner.
:::

Terra is an API of real-world data indexed on h3. This data is served via an API for Neopolis and Neoland.

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
* `countries` a curated list of soverain states in the world
* `cities` a curated list of cities in the world
* `lands` are the building blocks of Terra and are associated to a `closest city` and to `biomes`. Their ids are h3 indexes of resolution 8.
* `places` defines a real-world point of interest (building, station, shop, office, etc...)

## Lands and h3Geo

Each land is identified by a unique h3 index of resolution 8, representing a geospatial hexagon with en edge length of ~460m. For more info on h3, see [the official documentation](https://h3geo.org/).

## Lands and biomes

All lands have a `main_biome` , which is the most dominant biome in the given land. It il also possible to get the biome details, in percentage for all biomes in the land.

For a complete list of available biomes, see [Biomes](./biomes)

## Country translations

Country names can be translated in a various langages using the `lang` parameter. To see all available langcodes, see [Langcodes](./langcodes)

## Example Graphics

Countries and cities in North America
![North America](./img/countries-usa.png)

Closest city vizualisation in France (data not up-to-date)
![Closest City in France](./img/closest-city-france.png)