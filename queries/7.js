// Найдите рестораны, которые находятся по широте меньше, чем -95.754168.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$addFields": {
            latitude: { "$first": "$address.coord" }
        }
    },
    {
        "$match": {
            latitude: { "$lt": -95.754168 }
        }
    },
    {
        "$unset": "latitude"
    }
])
    .forEach(printjson)
