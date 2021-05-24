// Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, в которых готовят любую кухню,
// кроме «американской» и «китайской», или название ресторана начинается с букв «Wil».

db = db.getSiblingDB('test')

db.restaurants.find(
    {
        "$or": [
            {
                "cuisine": {
                    "$nin": ["American ", "Chinese"]
                }
            },
            {
                "name": /^Wil/
            }
        ]
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
