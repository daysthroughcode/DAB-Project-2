from flask import Flask, render_template, redirect,jsonify,render_template
app = Flask(__name__)
import psycopg2
# from psycopg2 import Error
from sqlalchemy import create_engine
import pandas as pd

# for pandas reqd_sql
engine = create_engine(f"postgresql://postgres:asd@localhost:5432/DAB-Project-2")
connection = engine.connect()

# connection = psycopg2.connect(user="postgres",
#                                   password="asd",
#                                   host="127.0.0.1",
#                                   port="5432",
#                                   database="DAB-Project-2")

#     # Create a cursor to perform database operations
# cursor = connection.cursor()
    # Print PostgreSQL details

    # Executing a SQL query
# cursor.execute('SELECT * FROM airline_crash')
#     # Fetch result
# record = cursor.fetchall()


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/data")
def data():
    
    df = pd.read_sql("SELECT * FROM airline_crash ",connection)
    records = df.to_json()
    # Fetch result
    # for rows in records:
    return records
    # return jsonify(records)

if __name__ == "__main__":
    app.run(debug=True)