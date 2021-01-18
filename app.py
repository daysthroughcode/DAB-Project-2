# Import Dependencies
from config import pg_pwd
# SQLalchemy Packages
import psycopg2
from psycopg2 import Error
# Further Dependencies if needed
import datetime as dt
import numpy as np
import pandas as pd
# Flask
from flask import Flask, jsonify
app = Flask(__name__)

# Set up database connection
try:
    connection = psycopg2.connect(
        database='airline_crash',
        user='postgres',
        password=pg_pwd,
        host='localhost',
        port='5432')
    cursor = connection.cursor()

    print('PostgresSQL server information')
    print(connection.get_dsn_parameters(), "\n")
# Execute SQL Query
    cursor.execute("SELECT version();")
    record = cursor.fetchone()
    print("You are connected to - ", record, "\n")

except (Exception, Error)as error:
    print("Error while connecting to PostgresSQL")
finally:
    if (connection):
        cursor.close()
        connection.close()
        print("PostgresSQL connection is closed")

# Route


@app.route('/')
def welcome():
    return "Hello Mr Bond"


if __name__ == "__main__":
    app.run(debug=True)
