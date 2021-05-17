// Отобразите следующие 5 ресторанов после пропуска первых 5, которые находятся в районе Bronx.

db = db.getSiblingDB('test')

db.restaurants.find({"borough": "Bronx"})
    .skip(5)
    .limit(5)
    .forEach(printjson)
