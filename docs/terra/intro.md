---
sidebar_position: 1
---

# Introduction

Terra is a database with real-world data, indexed on h3geo. This data is served via an API for geolocalised games like Neopolis and Neoland.

* Cultural data (country, closest city)
* Natural data (biomes: urban, forst, desert, etc)
* Curated Places (real world buildings)

## Terra entities

Terra has 4 main entities
* `countries`, all soverain states in the world (used to categorise lands)
* `cities`, a curated list of all cities in the world (used for closest city in lands)
* `lands` (h3geo resoltuion 8) is the building block of Terra and are associated to a `closest city` and to `biomes`
* `places` defines a real-world point of interest (building, station, shop, office, etc...)

## Lands and h3Geo

Each land is identified by a unique h3geo index of resolution 8, representing a geospacial hexagon with en edge length of ~460m. For more info on h3geo, see [the official documentation](https://h3geo.org/).

## Biomes

TODO

## Country names transations

TODO
