# Project Workflow Generator

This is a web application that generates MermaidJS flowcharts based on a given project name. It uses the Flask framework for the backend and integrates Google Gemini AI (Generative AI) for content generation. The application allows users to input a project name and receive a flowchart representing the project workflow.

## Features
- **Flowchart Generation**: Automatically generates a flowchart based on the provided project name using Google Gemini's Generative AI model.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Download Flowchart**: Save the generated flowchart as an image (JPEG format).
  
## Tech Stack
- **Backend**: Flask (Python)
- **Generative AI**: Google Gemini AI
- **Frontend**: HTML, CSS, JavaScript, MermaidJS
- **Styling**: Custom CSS with light and dark mode support
- **Flowchart Rendering**: MermaidJS
- **Download**: HTML2Canvas for rendering the flowchart to an image

## Installation

### Prerequisites
1. Install Python 3.9 or higher.
2. Install the required libraries.

## Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/NityaSharma02/Project-Workflow-Generator.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Project-Workflow-Generator
    ```

3. **Install the required Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Set your Gemini API Key in your environment variables. You can do this by adding the following line to your `.env` file:**
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

5. **Run the Flask app:**
    ```bash
    python generator.py
    ```

6. **Open your browser and go to `http://127.0.0.1:5000/` to use the flowchart generator.**


## Usage
-----

1. **Enter a project name** (e.g., "E-commerce Website").
    
2. **Click "Generate Diagram"** to see the MermaidJS flowchart.
    
3. **Use the toggle button** to switch between light and dark themes.
    
4. **Click the "Download" button** to save the flowchart as a JPEG image.

## Folder Structure
----------------

* **generator.py**: The main Flask app that handles the backend and interacts with Google Gemini AI.
    
* **templates/index.html**: The HTML file for the web interface.
    
* **static/styles.css**: Custom CSS for styling the app.
    
* **static/script.js**: JavaScript for theme toggling and flowchart download functionality.
    
* **.gitignore**: Specifies files and directories to ignore in the Git repository (e.g., Python cache, environment files, IDE configurations).
    
* **requirements.txt**: Python dependencies required to run the app.

## Contributing
------------

If you'd like to contribute to this project, feel free to fork it and submit pull requests. Please ensure that your changes are well-documented and follow the existing code style.
