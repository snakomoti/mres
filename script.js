// Sample student data with marks stored in JavaScript
const studentData = {
  "12345": {
    class: "10",
    name: "Ali Ahmed",
    marks: {
      "Mathematics": 88,
      "Science": 92,
      "English": 85,
      "Arabic": 90,
      "History": 78
    }
  },
  "67890": {
    class: "9",
    name: "Fatima Noor",
    marks: {
      "Mathematics": 75,
      "Science": 80,
      "English": 82,
      "Arabic": 95,
      "History": 88
    }
  }
};

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const admissionInput = document.getElementById("admission").value.trim();
  const classInput = document.getElementById("class").value.trim();

  const student = studentData[admissionInput];
  if (student && student.class === classInput) {
    // Hide login and show results
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";

    // Display student name
    document.getElementById("studentName").textContent = student.name;

    // Build table with marks
    let tableHTML = "<table><thead><tr><th>Subject</th><th>Marks</th></tr></thead><tbody>";
    for (const subject in student.marks) {
      tableHTML += `<tr><td>${subject}</td><td>${student.marks[subject]}</td></tr>`;
    }
    tableHTML += "</tbody></table>";
    document.getElementById("marksTableContainer").innerHTML = tableHTML;
  } else {
    alert("No student found with the given Admission Number and Class!");
  }
});

// Back button to return to login
document.getElementById("backButton").addEventListener("click", function () {
  document.getElementById("loginForm").reset();
  document.getElementById("resultSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
});
