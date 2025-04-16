from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", name="John Doe", job="Penetration Tester", skills=["Python", "Burp Suite", "CTFs", "Linux"])

if __name__ == "__main__":
    app.run(debug=True)
