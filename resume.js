function analyzeResume() {
    const input = document.getElementById("resumeInput").value.trim();
    const results = document.getElementById("results");
  
    if (!input) {
      results.innerHTML = "<p>Please paste your resume first.</p>";
      return;
    }
  
    // Dummy analysis logic
    const feedback = [];
  
    if (input.toLowerCase().includes("team")) {
      feedback.push("✅ Good mention of teamwork.");
    } else {
      feedback.push("⚠️ Consider adding teamwork experience.");
    }
  
    if (input.toLowerCase().includes("python")) {
      feedback.push("✅ Python skill detected.");
    } else {
      feedback.push("⚠️ No mention of Python — include key skills.");
    }
  
    if (input.length < 500) {
      feedback.push("⚠️ Resume seems short — consider adding more detail.");
    } else {
      feedback.push("✅ Resume length looks good.");
    }
  
    results.innerHTML = feedback.map(item => `<p>${item}</p>`).join("");
  }
  