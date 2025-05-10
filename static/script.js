// Initialize Mermaid
try {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default",
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
    },
  });
} catch (e) {
  console.error("Mermaid error:", e);
}

// Toggle Light/Dark Theme
function toggleMode() {
  const body = document.body;
  if (body.style.backgroundColor === "var(--bg-dark)") {
    body.style.backgroundColor = "var(--bg-light)";
    body.style.color = "var(--text-light)";
  } else {
    body.style.backgroundColor = "var(--bg-dark)";
    body.style.color = "var(--text-dark)";
  }
}

function downloadFlowchart() {
    const container = document.querySelector(".mermaid-container");
    if (!container) {
        alert("Please generate a flowchart first!");
        return;
    }

    // Step 1: Save old styles
    const oldHeight = container.style.height;
    const oldOverflow = container.style.overflow;

    // Step 2: Expand container to show full content
    container.style.height = "auto";
    container.style.overflow = "visible";

    // Step 3: Use html2canvas
    html2canvas(container, {
        scrollY: -window.scrollY,
        useCORS: true,
        allowTaint: true,
        scale: 2
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "flowchart.jpeg";
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
        
        // Step 4: Revert back styles
        container.style.height = oldHeight;
        container.style.overflow = oldOverflow;
    }).catch(error => {
        console.error("Download error:", error);
        
        // Revert even if error
        container.style.height = oldHeight;
        container.style.overflow = oldOverflow;
    });
}

