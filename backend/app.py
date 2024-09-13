from langchain_community.llms import Ollama
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS

logging.basicConfig(level = logging.DEBUG)

app = Flask(__name__)
CORS(app)


def initialize_codellama():
    try:
        create_prompt = ChatPromptTemplate.from_messages(
            [
                ("user", "Question : {question}")
            ]
        )
        model = Ollama(model = "codellama")
        format_outuput = StrOutputParser()

        chatbot_pipeline = create_prompt | model | format_outuput

        return chatbot_pipeline
    
    except Exception as e:
        logging.error(f"failed : {e}")
        raise




@app.route("/time_complexity", methods = ['POST', 'GET'])
def time_complexity():
    chatbot_pipeline = initialize_codellama()
    code = request.json['code']
    query = f"give me the time complexity of this code: {code}"

    try:
        response = chatbot_pipeline.invoke({"question":query})
        print(response)

        return jsonify({
            "tc": response
        })

    except Exception as e:
        logging.error(f"Error: {e}")


if __name__ == '__main__':
    app.run()

