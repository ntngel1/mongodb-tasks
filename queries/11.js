// Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые в качестве первых 
// трех букв используют «Wil».

db = db.getSiblingDB('test')

db.restaurants.find(
    {
        "name": {"$regex": /^Wil/}
    },
    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
)
    .forEach(printjson)
