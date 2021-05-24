// Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые набрали не более 10 баллов.

db = db.getSiblingDB('test')

db.restaurants.find(
    {
        "grades": { 
            "$elemMatch": { 
                "score": { "$lte": 10 }
            }
        }
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
