// Найдите рестораны, которые находятся по широте меньше, чем -95.754168.

db = db.getSiblingDB('test')

db.restaurants.find({"address.coord.0": { "lt": -95.754168 }})
    .forEach(printjson)
