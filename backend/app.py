from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

USER = os.environ.get("STUDENT_ID", "XX")

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({
        "message": f"Hello from student red{USER}!",
        "student": f"red{USER}",
        "status": "ok"
    })

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)