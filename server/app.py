from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random
from mockinterview_llama import model_setup
import csv
from fastapi import FastAPI
from langserve import add_routes

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

llm = model_setup()

if llm is not None:
    print("Model loaded successfully.")
else:
    print("Failed to load the model.")

file = "./Combined_Data_set.csv"
rows = []

with open(file, 'r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    next(csvreader)  # Skip header row
    rows = list(csvreader)

def get_question():
    try:
        topic = random.choice(rows)[0]
        template = f"""
        You are a data science interviewer between an interview, ask a question regarding the following given topic:
        Topic to ask question on as an interviewer: {topic}
        """
        print("Template:", template)
        next_question = llm(template)
        print("Generated question:", next_question)
        json_ques = {"question": next_question, "topic": topic}
        return json_ques
    except Exception as e:
        print("Error generating question:", e)
        return {"error": str(e)}

def get_evaluation(response):
    topic = "machine learning"
    template = f'''
    Consider yourself as a data science expert, you are in conversation with a person regarding data science and he has given you a response to the question: {topic}
    The response given by that person: {response}
    Comment on the response given by that person, whether it's correct or not, and what improvements could have been made in his response, if no improvements are required
    say that the answer was perfect, do not make up any random improvements.
    '''
    evaluation = llm(template, stream=False)
    json_eval = {"response": evaluation}
    print(json_eval)
    return json_eval

@app.route('/getquestion', methods=['GET'])
def generate_question():
    print("Generating question...")
    try:
        result = get_question()
        print("Generated question:", result)
        return jsonify(result)
    except Exception as e:
        print("Error generating question:", e)
        return jsonify({"error": str(e)}), 500

@app.route('/evaluate', methods=['POST'])
def evaluate_response():
    try:
        data = request.get_json()
        response = data['response']
        result = get_evaluation(response)
        return jsonify(result)
    except Exception as e:
        print("Error evaluating response:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
