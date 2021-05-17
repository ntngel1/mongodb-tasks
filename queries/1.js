// Отобразите поля идентификатор ресторана, название, район и кухня для всех документов.

db = db.getSiblingDB('test')

db.restaurants.find(
    {},
    {
        "restaurant_id": 1,
        "name": 1,
        "cuisine": 1,
        "borough": 1
    })
    .forEach(printjson)
