import datetime
import psycopg2
import json
import pandas as pd
from psycopg2 import sql

connection = psycopg2.connect(user="postgres",
                              # пароль, который указали при установке PostgreSQL
                              password="1111",
                              host="127.0.0.1",
                              port="5432",
                              database="TestEvraz")
cursor = connection.cursor()


mobileID = 35

cursor = connection.cursor()
count_exhausters = 6
for i in range(6):
    for j in range(9):
        if j in [1,2,7,8]:
            postgreSQL_select_Query = "SELECT * FROM cooler WHERE moment = (SELECT MAX (moment)FROM cooler);"
            cursor.execute(postgreSQL_select_Query)
            mobile_records = cursor.fetchall()


print(mobile_records)
print(len(mobile_records))

