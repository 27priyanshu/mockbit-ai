# MockBit - AI Interviewer

![img1](https://github.com/27priyanshu/mockbit-ai/assets/95427620/96ae6152-33c2-4f9b-95c6-3afc75b90fed)

![img2](https://github.com/27priyanshu/mockbit-ai/assets/95427620/4a831c0a-0e1f-4893-9451-fd075c4031ea)

Presentation link: https://www.canva.com/design/DAGBKn-TS1s/tNauwePA3f8-gpx3Xwvwhw/edit?utm_content=DAGBKn-TS1s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Demo video: https://www.loom.com/share/ae48f9a6d0b242a4a605d1da6183cdb5?sid=6b41b782-85d9-4304-91d1-130be9356280

## Technology used:
* Artificial Intelligence
* Langchain
* LLM(Large language model)
* Nextjs
* Tailwindcss
* FastAPI

## Working:
### Project Overview:
The project aims to create an interactive web-based platform for practicing data science interview questions. It provides a simulated interview environment where users can receive questions, submit answers, and receive evaluations.

### Architecture:
The project follows a client-server architecture. The frontend is built using Nextjs, a popular JavaScript library for building user interfaces, while the backend is implemented using Python.

The frontend consists of several components designed to provide a seamless user experience. It includes a navbar for navigation, a main page for displaying interview questions, and an input area for submitting answers. The frontend communicates with the backend to fetch interview questions, submit answers, and receive evaluations.

The backend serves as the core of the application, handling data processing, authentication, and authorization. It is implemented using FastAPI, which provides automatic validation, serialization, and documentation of API endpoints. The backend exposes RESTful APIs for fetching interview questions, evaluating answers, and managing user sessions. FastAPI's asynchronous capabilities ensure high performance and scalability, making it suitable for handling concurrent requests efficiently.

### User flow
1. Fetching Questions: Upon loading the application, the frontend sends a request to the backend API implemented in FastAPI to fetch a data science interview question.
2. Submitting Answers: Users input their answers in the provided text area and submit them using the designated button. The frontend sends the user's answer to the backend API for evaluation.
3. Evaluation: The backend API receives the user's answer, processes it, and provides an evaluation based on predefined criteria. The evaluation result is sent back to the frontend for display.
4. User Interaction: Users can interact with the application by navigating through different pages, submitting answers, and viewing evaluation results. The frontend dynamically updates based on user actions and backend API responses.
5. Security consideration: HTTPS: All communication between the client and server is encrypted using HTTPS to prevent data interception and tampering.
