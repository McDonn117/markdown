import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  const [inputMD, setInputMD] = useState(
    `  # H1 Heading

  ## H2 heading

  **bold text**

  > blockquote

  1. First list item
  2. Second list item

  \`code\`

  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

  [title](https://www.google.com)

  ![alt text](https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)

  `
  );

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="container-fluid p-5 bg-secondary">
      <div class="d-sm-flex align-items-center justify-content-center mb-4">
        <h1 class="h1 mb-2 text-gray-800 text-center">McDonn Markdown</h1>
      </div>
      <div className="row">
        <div className="col-lg-5 pb-5">
          <div class="card shadow h-100 py-2 bg-info border-black">
            <div class="card-body">
              <h6>Input Markdown:</h6>
              <textarea
                id="editor"
                value={inputMD}
                onChange={(e) => {
                  setInputMD(e.target.value);
                  console.log(inputMD);
                }}
                className="border-0 p-2"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-7 pb-5">
          <div class="card border border-primary border-2 shadow h-100 py-2  bg-light ">
            <div class="card-body">
              <div
                id="preview"
                dangerouslySetInnerHTML={{
                  __html: marked(inputMD),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
