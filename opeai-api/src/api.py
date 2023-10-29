from flask import Flask, jsonify, request, render_template
from flask_cors import cross_origin, CORS
from src.service import LangChainResponseGenerator, RetrievalQA

app = Flask(__name__)
CORS(app, origins='*') 

def load_data():
    global qa_chain
    srcs = [
        "/Users/anitejthamma/Desktop/livedoc-main/opeai-api/src/documents/HeadachesMigraines.pdf"
    ]
    lcrg = LangChainResponseGenerator(srcs)

    llm = lcrg.create_llm()
    vdb = lcrg.create_vector_db()
    
    qa_chain = RetrievalQA.from_chain_type(
        llm,
        retriever=vdb.as_retriever()
    )

load_data()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/message', methods=['POST'])
@cross_origin()
def get_data():
    data = request.get_json()
    message = data["message"]
    result = qa_chain({"query": message})
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1234)