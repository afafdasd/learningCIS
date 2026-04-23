// Все запросы идут через nginx-прокси на /api
const BACKEND_URL = "";

async function fetchStudentInfo() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/hello`);
    const data = await res.json();
    document.getElementById("student-label").textContent =
      "Student: " + data.student;
  } catch (e) {
    document.getElementById("student-label").textContent =
      "Student: connection error";
  }
}

document.getElementById("ping-btn").addEventListener("click", async () => {
  const box = document.getElementById("response-box");
  box.classList.remove("hidden");
  box.textContent = "Loading...";
  try {
    const res = await fetch(`${BACKEND_URL}/api/hello`);
    const data = await res.json();
    box.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    box.textContent = "Error: could not reach backend.\n" + e.message;
  }
});

fetchStudentInfo();