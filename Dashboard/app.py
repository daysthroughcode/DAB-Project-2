import pandas as pd
from config import pg_pwd
from sqlalchemy import create_engine
from flask import Flask, render_template, redirect, jsonify, render_template
app = Flask(__name__)

# for pandas reqd_sql
engine = create_engine(
    f"postgresql://postgres:{pg_pwd}@localhost:5432/airline_crash")
connection = engine.connect()


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route("/data")
def data():

    df = pd.read_sql("SELECT * FROM airline_data ", connection)
    df = df.groupby(['ac_type', 'operator'])['fatalities'].sum().reset_index()
    records = df.to_json(orient='records')
    return records


@app.route("/data0")
def data0():

    df = pd.read_sql("SELECT * FROM airline_data ", connection)
    df = df.groupby(['decade', 'operator'])['fatalities'].sum().reset_index()
    #df = df.nlargest(15, 'fatalities')
    records = df.to_json(orient='records')
    return records


@app.route("/vis1")
def pointcloud():
    return render_template('pointcloud.html')


@app.route("/vis2")
def donut():
    return render_template('donut.html')


@app.route("/vis3")
@app.route("/default")
def default():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
