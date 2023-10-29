# GPT LiveDoc Interpreter

## Overview

The **GPT LiveDoc Interpreter** is a project designed to leverage the power of language models, specifically GPT (Generative Pre-trained Transformer), for interpreting and interacting with documents in real-time. The project uses LangChain, OpenAI, and Flask to create a seamless integration between document retrieval, question-answering, and conversational interactions.

## Features

- **Document Loading:** Fetch documents from various sources, including PDFs and YouTube audio transcripts.
  
- **Question Answering:** Utilize GPT models for answering user questions related to the loaded documents.

- **Conversational Retrieval Chain:** Incorporate chat history for follow-up questions, creating a dynamic conversational experience.

- **Memory Incorporation:** Implement a conversation buffer memory to store and retrieve chat history.

## Setup

### Prerequisites

- Python 3+
- Pip
- Node.js
- npm

### Installation

1. Clone the repository:

    ```bash
   git clone <repository-url>
   cd gpt-livedoc-interpreter

2. Install Python dependencies:

    ```bash
   pip install -r requirements.txt

4. Install Node.js dependencies for the React frontend:

    ```bash
    git clone <repository-url>
    cd gpt-livedoc-interpreter

### Usage

1. Start the Flask server:

    ```bash
    python app.py
**The server will run on http://localhost:5000.

2. Start the React server

    ```bash
    cd react-app
    npm start
**The React app will run on http://localhost:3000.

3. Open your browser and visit http://localhost:3000 to interact with the GPT LiveDoc Interpreter.
  
## Configuration

### OpenAI API Key
To use the OpenAI API, replace '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' in the code with your actual OpenAI API key.

    ```code
    embedding = OpenAIEmbeddings(openai_api_key='your-openai-api-key')
    llm = ChatOpenAI(model_name=llm_name, temperature=0, openai_api_key='your-openai-api-key')

### .env File
Ensure that you have the .env.local file with the respective API Key and environment variables aswell. Refer to the provided .env.example for reference.

## Acknowledgments
- LangChain
- OpenAI
- Flask
- React
- NodeJS
- Clojure

## Contact
For any inquiries or support, please contact me at anitej.thamma@rutgers.edu

