from flask import Flask, request, render_template
import google.generativeai as genai                                                                                                                                                # type: ignore
import os

app = Flask(__name__)

API_KEY = os.environ.get('GEMINI_API_KEY') 
if not API_KEY:
    raise ValueError("GEMINI_API_KEY not set in environment variables.")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

def get_mermaid_flow(project_name):
    try:
        prompt = f"Create a MermaidJS flowchart for an {project_name}."
        response = model.generate_content(prompt)

        if "```mermaid" in response.text:
            mermaid_code = response.text.split("```mermaid")[1].split("```")[0].strip()
        else:
            mermaid_code = response.text.strip()

        return mermaid_code

    except Exception as e:
        print("Error:", e)
        return "flowchart TD\n    Error[Could not generate diagram]"
    from flask import Flask, render_template


@app.route("/", methods=["GET", "POST"])
def home():
    project_name = ""
    mermaid_code = None
    if request.method == "POST":
        project_name = request.form.get("project_name", "")
        if project_name:
            mermaid_code = get_mermaid_flow(project_name)

    return render_template("index.html",
                            project_name=project_name,
                            mermaid_code=mermaid_code)

if __name__ == "__main__":
    app.run(debug=True)
