// Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые возвращают 0 в качестве 
// остатка после деления баллов на 7.

db = db.getSiblingDB('test')

db.restaurants.find(
    {
        "grades": { 
            "$elemMatch": {
                "score": { "$mod": [7, 0] }
            }
        }
    },
    {
        "_id": 0,
        "restaurant_id": 1,
        "grades": 1,
        "name": 1
    }
)
    .forEach(printjson)
