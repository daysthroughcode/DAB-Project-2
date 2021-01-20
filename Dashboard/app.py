from flask import Flask, render_template, redirect,jsonify,render_template
app = Flask(__name__)

from sqlalchemy import create_engine
import pandas as pd

# for pandas reqd_sql
engine = create_engine(f"postgresql://postgres:asd@localhost:5432/DAB-Project-2")
connection = engine.connect()

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/view_one')
def view1():
    return render_template('view_one.html')
@app.route('/view_two')
def view2():
    return render_template('view_two.html')

@app.route("/data")
def data():
    
    df = pd.read_sql("SELECT * FROM finalcrash_data ",connection)
    records = df.to_json(orient='records')
    return records


if __name__ == "__main__":
    app.run(debug=True)