import datetime

import kafka
import psycopg2
import json
import pandas as pd
from psycopg2 import sql

# import datetime
consumer = kafka.KafkaConsumer("zsmk-9433-dev-01",
                               bootstrap_servers= 'rc1a-2ar1hqnl386tvq7k.mdb.yandexcloud.net:9091',
                               # bootstrap_servers="rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091",
                               auto_offset_reset="latest",
                               enable_auto_commit=False,
                               group_id="Algorithms4",
                               sasl_mechanism="SCRAM-SHA-512",
                               # max_poll_records = 1,
                               # sasl_plain_password=os.environ["KAFKA_PASSWORD"],
                               sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
                               sasl_plain_username="9433_reader",
                               ssl_cafile='resources/CA.pem',
                               security_protocol="SASL_SSL",
                               value_deserializer=lambda x: x.decode("utf-8"))

connection = psycopg2.connect(user="postgres",
                              password="1111",
                              host="127.0.0.1",
                              port="5432",
                              database="TestEvraz")
cursor = connection.cursor()

signals_kafka = pd.read_excel('resources/signals_kafka.xlsx')

for message in consumer:
    print('begin',datetime.datetime.now())

    print(message)
    message_value = json.loads(message.value)

    time_moment = message_value['moment']
    print('moment',time_moment)
    message_value.pop('moment')

    bearing_wv = {1: {1: {}, 2: {}, 7: {}, 8: {}}, 2: {1: {}, 2: {}, 7: {}, 8: {}}, 3: {1: {}, 2: {}, 7: {}, 8: {}},
                  4: {1: {}, 2: {}, 7: {}, 8: {}}, 5: {1: {}, 2: {}, 7: {}, 8: {}}, 6: {1: {}, 2: {}, 7: {}, 8: {}}}

    bearing_nv = {1: {3: {}, 4: {}, 5: {}, 6: {}, 9: {}}, 2: {3: {}, 4: {}, 5: {}, 6: {}, 9: {}},
                  3: {3: {}, 4: {}, 5: {}, 6: {}, 9: {}},
                  4: {3: {}, 4: {}, 5: {}, 6: {}, 9: {}}, 5: {3: {}, 4: {}, 5: {}, 6: {}, 9: {}},
                  6: {3: {}, 4: {}, 5: {}, 6: {}, 9: {}}}

    cooler = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}}
    gas_collector = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}}
    gas_valve = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}}
    gear = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}}
    oil_system = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}}
    work_exhauster = {1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}}

    for key in message_value:
        row = signals_kafka[signals_kafka.place == key]
        module = row['module'].values[0]

        if module in ['b1', 'b2', 'b7', 'b8']:
            bearing_wv[row['exhauster'].values[0]][int(module.strip('b'))][
                row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['b3', 'b4', 'b5', 'b6', 'b9']:
            bearing_nv[row['exhauster'].values[0]][int(module.strip('b'))][
                row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['c']:
            cooler[row['exhauster'].values[0]][row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['gc']:
            gas_collector[row['exhauster'].values[0]][row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['gv']:
            gas_valve[row['exhauster'].values[0]][row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['g']:
            gear[row['exhauster'].values[0]][row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['os']:
            oil_system[row['exhauster'].values[0]][row['sygnal_name'].values[0]] = message_value.get(key)

        if module in ['we']:
            work_exhauster[row['exhauster'].values[0]][row['sygnal_name'].values[0]] = message_value.get(key)

    for exhauster in bearing_wv:
        for bearing in bearing_wv[exhauster]:
            temp_bearings_wv = [time_moment, exhauster, bearing, bearing_wv[exhauster][bearing].get('temperature'),
                                bearing_wv[exhauster][bearing].get('temp_alarm_max'),
                                bearing_wv[exhauster][bearing].get('temp_alarm_min'),
                                bearing_wv[exhauster][bearing].get(
                                    'temp_warning_max'), bearing_wv[exhauster][bearing].get('temp_warning_min'),
                                bearing_wv[exhauster][
                                    bearing].get('vibration_axial'), bearing_wv[exhauster][bearing].get('va_alarm_max'),
                                bearing_wv[exhauster][bearing].get('va_alarm_min'),
                                bearing_wv[exhauster][bearing].get('va_warning_max'),
                                bearing_wv[exhauster][bearing].get('va_warning_min'),
                                bearing_wv[exhauster][bearing].get(
                                    'vibration_horizontal'), bearing_wv[exhauster][bearing].get('vh_alarm_max'),
                                bearing_wv[exhauster][
                                    bearing].get('vh_alarm_min'), bearing_wv[exhauster][bearing].get('vh_warning_max'),
                                bearing_wv[exhauster][bearing].get('vh_warning_min'),
                                bearing_wv[exhauster][bearing].get(
                                    'vibration_vertical'), bearing_wv[exhauster][bearing].get('vv_alarm_max'),
                                bearing_wv[exhauster][
                                    bearing].get('vv_alarm_min'), bearing_wv[exhauster][bearing].get('vv_warning_max'),
                                bearing_wv[exhauster][bearing].get('vv_warning_min')]
            insert_query = sql.SQL(
                "INSERT INTO Bearing_wv (moment, exhauster_num,	bearing_num,	temperature,	temp_alarm_max,	temp_alarm_min	,temp_warning_max,	temp_warning_min,	vibration_axial,	va_alarm_max,	va_alarm_min	,va_warning_max,	va_warning_min,	vibration_horizontal,	vh_alarm_max	,vh_alarm_min,	vh_warning_max,	vh_warning_min	,vibration_vertical,	vv_alarm_max,	vv_alarm_min,	vv_warning_max,	vv_warning_min) VALUES ({})").format(
                sql.SQL(',').join(map(sql.Literal, temp_bearings_wv)))
            cursor.execute(insert_query)
            connection.commit()

    for exhauster in bearing_nv:
        for bearing in bearing_nv[exhauster]:
            temp_bearings_nv = [time_moment, exhauster, bearing, bearing_nv[exhauster][bearing].get('temperature'),
                                bearing_nv[exhauster][bearing].get('temp_alarm_max'),
                                bearing_nv[exhauster][bearing].get('temp_alarm_min'),
                                bearing_nv[exhauster][bearing].get(
                                    'temp_warning_max'), bearing_nv[exhauster][bearing].get('temp_warning_min')]
            insert_query = sql.SQL(
                "INSERT INTO Bearing_nv (moment, exhauster_num,	bearing_num,	temperature,	temp_alarm_max,	temp_alarm_min	,temp_warning_max,	temp_warning_min) VALUES ({})").format(
                sql.SQL(',').join(map(sql.Literal, temp_bearings_nv)))
            cursor.execute(insert_query)
            connection.commit()

    for exhauster in cooler:
        temp_cooler = [time_moment, exhauster, cooler[exhauster].get('oil_temperature_after'),
                       cooler[exhauster].get('oil_temperature_before'),
                       cooler[exhauster].get('water_temperature_after'),
                       cooler[exhauster].get('water_temperature_before')]
        insert_query = sql.SQL(
            "INSERT INTO Cooler (moment, exhauster_num,	oil_temperature_after,	oil_temperature_before,	water_temperature_after,	water_temperature_before) VALUES ({})").format(
            sql.SQL(',').join(map(sql.Literal, temp_cooler)))
        cursor.execute(insert_query)
        connection.commit()

    for exhauster in gas_collector:
        temp_gas_collector = [time_moment, exhauster, gas_collector[exhauster].get('temperature_before'),
                              gas_collector[exhauster].get('underpressure_before')]
        insert_query = sql.SQL(
            "INSERT INTO Gas_collector (moment, exhauster_num,	temperature_before,	underpressure_before) VALUES ({})").format(
            sql.SQL(',').join(map(sql.Literal, temp_gas_collector)))
        cursor.execute(insert_query)
        connection.commit()

    for exhauster in gas_valve:
        temp_gas_valve = [time_moment, exhauster, gas_valve[exhauster].get('gas_valve_closed'),
                          gas_valve[exhauster].get('gas_valve_open'),
                          gas_valve[exhauster].get('gas_valve_position')]
        insert_query = sql.SQL(
            "INSERT INTO Gas_valve (moment, exhauster_num,	gas_valve_closed,	gas_valve_open,	gas_valve_position) VALUES ({})").format(
            sql.SQL(',').join(map(sql.Literal, temp_gas_valve)))
        cursor.execute(insert_query)
        connection.commit()

    for exhauster in gear:
        temp_gear = [time_moment, exhauster, gear[exhauster].get('rotor_current'),
                     gear[exhauster].get('rotor_voltage'),
                     gear[exhauster].get('stator_current'),
                     gear[exhauster].get('stator_voltage')]
        insert_query = sql.SQL(
            "INSERT INTO Gear (moment, exhauster_num,rotor_current,	rotor_voltage,	stator_current,	stator_voltage) VALUES ({})").format(
            sql.SQL(',').join(map(sql.Literal, temp_gear)))
        cursor.execute(insert_query)
        connection.commit()

    for exhauster in oil_system:
        temp_oil_system = [time_moment, exhauster, oil_system[exhauster].get('oil_level'),
                           oil_system[exhauster].get('oil_pressure')]
        insert_query = sql.SQL(
            "INSERT INTO Oil_system (moment, exhauster_num,oil_level,	oil_pressure) VALUES ({})").format(
            sql.SQL(',').join(map(sql.Literal, temp_oil_system)))
        cursor.execute(insert_query)
        connection.commit()

    for exhauster in work_exhauster:
        temp_work_exhauster = [time_moment, exhauster, work_exhauster[exhauster].get('work')]
        insert_query = sql.SQL(
            "INSERT INTO Work_exhauster (moment, exhauster_num, working) VALUES ({})").format(
            sql.SQL(',').join(map(sql.Literal, temp_work_exhauster)))
        cursor.execute(insert_query)
        connection.commit()

    print('finish', datetime.datetime.now())
