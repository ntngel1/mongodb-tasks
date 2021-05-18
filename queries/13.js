// Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые относятся к районам 
// Staten Island, Queens, Bronx или Brooklyn.

db = db.getSiblingDB('test')

db.restaurants.find(
    {
        "borough": {"$in": ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
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
