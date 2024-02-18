from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
parser = reqparse.RequestParser()
parser.add_argument('task')


@app.route("/api", methods=["GET"])
def api_call():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}


@app.route("/api/upload", methods=["POST","axios"])
def upload_file():
    print(request.data)
    
    return {"status": "success", "message": "File uploaded successfully"}

if __name__ == "__main__":
    app.run(debug=True)