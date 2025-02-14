import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import axios from "axios";

import "./App.css";

function App() {
  const [code, setCode] = useState(`functon sum ()={retrun a+b}`);
  const [review, setReview] = useState(``);
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function GetReview() {
    const response = await axios.post(`http://localhost:3000/ai/get-review`, {
      code,
    });

    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={20}
              style={{
                fontFamily: "fira code",
                fontSize: "20px",
                border: "6px solid #addd",
                borderRadius: "2rem",
                height: "90vh",
                width: "100%",
                color: "white",
                overflow: "scroll",
              }}
            />
          </div>
          <div className="review" onClick={GetReview}>
            Code Review
          </div>
        </div>

        <div className="right">
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
