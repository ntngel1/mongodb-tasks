// Найдите рестораны, которые относятся к району Бронкс и готовят американские или китайские блюда.

db = db.getSiblingDB('test')

db.restaurants.find(
    {
        "borough": "Bronx",
        "cuisine": {"$in": ["American ", "Chinese"]}
    }
)
    .forEach(printjson)
