from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS

from service import LangChainResponseGenerator, RetrievalQA

app = Flask(__name__)
CORS(app, origins='*') 


def load_data():
    global qa_chain
    srcs = [
        "documents/HeadachesMigraines.pdf"
    ]
    lcrg = LangChainResponseGenerator(srcs)

    llm = lcrg.create_llm()
    vdb = lcrg.create_vector_db()
    
    qa_chain = RetrievalQA.from_chain_type(
        llm,
        retriever=vdb.as_retriever()
    )


load_data()  # Call the function to load the data when the app starts

@app.route('/api/message', methods=['POST'])
@cross_origin()
def get_data():
    data = request.get_json()
    message = data["message"]

    result = qa_chain({"query": message})
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1234)
