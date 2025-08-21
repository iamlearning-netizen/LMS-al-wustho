document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let score = 0;

      // Kunci jawaban
      if (quizForm.q1.value === "a") score++;
      if (quizForm.q2.value === "b") score++;

      // Simpan progress ke localStorage
      localStorage.setItem("quizScore", score);

      // Tampilkan hasil
      const result = document.getElementById("result");
      result.textContent = `Skor Anda: ${score}/2`;
    });
  }
});
