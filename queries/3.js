// Отобразите все рестораны, которые находятся в районе Bronx.

db = db.getSiblingDB('test')

db.restaurants.find({"borough": "Bronx"})
    .forEach(printjson)
