// function toggleMenu() {
//   document.getElementById('navbar').classList.toggle('active');
// }


// let answers = {
//   deeriTipi: "",
//   deeriProblemi: "",
//   budce: ""
// };

// document.querySelector(".start-btn").addEventListener("click", function() {
//   document.querySelector(".questionnaire").style.display = "block";
//   this.style.display = "none";
//   showQuestion(0); 
// });

// let currentQuestion = 0;
// const questions = document.querySelectorAll(".question");

// const results = {
//   "Yağlı-Sızanaq-Yüksək": "Yağlı dəri, Sızanaq problemi və yüksək büdcə ilə mükəmməl bir krem.",
//   "Yağlı-Sızanaq-Orta": "Yağlı dəri, Sızanaq problemi və orta büdcə ilə dermatologi məhsul.",
//   "Yağlı-Qırışlar-Yüksək": "Yağlı dəri, Qırışlar və yüksək büdcə ilə anti-aging məhsul.",
//   "Yağlı-Qırışlar-Orta": "Yağlı dəri, Qırışlar və orta büdcə ilə bərpaedici krem.",
//   "Yağlı-Rəng bərabərsizliyi-Yüksək": "Yağlı dəri, Rəng bərabərsizliyi və yüksək büdcə ilə dəri tonunu bərpa edən krem.",
//   "Yağlı-Rəng bərabərsizliyi-Orta": "Yağlı dəri, Rəng bərabərsizliyi və orta büdcə ilə uyğun dermatologi məhsul.",
//   "Quru-Sızanaq-Yüksək": "Quru dəri, Sızanaq problemi və yüksək büdcə ilə uyğun müalicə.",
//   "Quru-Sızanaq-Orta": "Quru dəri, Sızanaq problemi və orta büdcə ilə təmizləyici krem.",
//   "Quru-Qırışlar-Yüksək": "Quru dəri, Qırışlar və yüksək büdcə ilə bərpa edici krem.",
//   "Quru-Qırışlar-Orta": "Quru dəri, Qırışlar və orta büdcə ilə qırış qarşısı alıcı məhsul.",
//   "Quru-Rəng bərabərsizliyi-Yüksək": "Quru dəri, Rəng bərabərsizliyi və yüksək büdcə ilə dermatologi məhsul.",
//   "Quru-Rəng bərabərsizliyi-Orta": "Quru dəri, Rəng bərabərsizliyi və orta büdcə ilə ton bərabərləşdirici krem.",
//   "Qarışıq-Sızanaq-Yüksək": "Qarışıq dəri, Sızanaq problemi və yüksək büdcə ilə mükəmməl üz kremi.",
//   "Qarışıq-Sızanaq-Orta": "Qarışıq dəri, Sızanaq problemi və orta büdcə ilə təmizləyici krem.",
//   "Qarışıq-Qırışlar-Yüksək": "Qarışıq dəri, Qırışlar və yüksək büdcə ilə anti-aging kremi.",
//   "Qarışıq-Qırışlar-Orta": "Qarışıq dəri, Qırışlar və orta büdcə ilə yaşlanma qarşıtı krem.",
//   "Qarışıq-Rəng bərabərsizliyi-Yüksək": "Qarışıq dəri, Rəng bərabərsizliyi və yüksək büdcə ilə uyumlu ton bərabərləşdirici krem.",
//   "Qarışıq-Rəng bərabərsizliyi-Orta": "Qarışıq dəri, Rəng bərabərsizliyi və orta büdcə ilə təmizləyici krem."
// };

// function showQuestion(index) {
//   if (index < questions.length) {
//       questions[index].style.display = "block";
//   } else {
//       showResult();
//   }
// }

// function setAnswer(question, answer) {
//   answers[question] = answer;
//   currentQuestion++;
//   document.querySelectorAll(".question")[currentQuestion - 1].style.display = "none";
  
//   if (currentQuestion < 3) {
//       showQuestion(currentQuestion);
//   } else {
//       showResult();
//   }
// }

// function showResult() {
//   const resultText = generateResultText();
//   document.querySelector(".result").style.display = "block";
//   document.querySelector("#resultText").textContent = resultText;
// }

// function generateResultText() {
//   const combination = `${answers.deeriTipi}-${answers.deeriProblemi}-${answers.budce}`;
  
//   return results[combination] || "Uyğun məhsul tapılmadı. Yenidən yoxlayın.";
// }

// JavaScript kodları

// let answers = {
//   deeriTipi: "",
//   deeriProblemi: "",
//   budce: ""
// };

// document.querySelector(".start-btn").addEventListener("click", function() {
//   document.querySelector(".questionnaire").style.display = "block";
//   this.style.display = "none";
//   showQuestion(0); 
// });

// let currentQuestion = 0;
// const questions = document.querySelectorAll(".question");

// const results = {
//   "Yağlı-Sızanaq-Yüksək": "Yağlı dəri, Sızanaq problemi və yüksək büdcə ilə mükəmməl bir krem.",
//   "Yağlı-Sızanaq-Orta": "Yağlı dəri, Sızanaq problemi və orta büdcə ilə dermatologi məhsul.",
//   "Yağlı-Qırışlar-Yüksək": "Yağlı dəri, Qırışlar və yüksək büdcə ilə anti-aging məhsul.",
//   "Yağlı-Qırışlar-Orta": "Yağlı dəri, Qırışlar və orta büdcə ilə bərpaedici krem.",
//   "Yağlı-Rəng bərabərsizliyi-Yüksək": "Yağlı dəri, Rəng bərabərsizliyi və yüksək büdcə ilə dəri tonunu bərpa edən krem.",
//   "Yağlı-Rəng bərabərsizliyi-Orta": "Yağlı dəri, Rəng bərabərsizliyi və orta büdcə ilə uyğun dermatologi məhsul.",
//   "Quru-Sızanaq-Yüksək": "Quru dəri, Sızanaq problemi və yüksək büdcə ilə uyğun müalicə.",
//   "Quru-Sızanaq-Orta": "Quru dəri, Sızanaq problemi və orta büdcə ilə təmizləyici krem.",
//   "Quru-Qırışlar-Yüksək": "Quru dəri, Qırışlar və yüksək büdcə ilə bərpa edici krem.",
//   "Quru-Qırışlar-Orta": "Quru dəri, Qırışlar və orta büdcə ilə qırış qarşısı alıcı məhsul.",
//   "Quru-Rəng bərabərsizliyi-Yüksək": "Quru dəri, Rəng bərabərsizliyi və yüksək büdcə ilə dermatologi məhsul.",
//   "Quru-Rəng bərabərsizliyi-Orta": "Quru dəri, Rəng bərabərsizliyi və orta büdcə ilə ton bərabərləşdirici krem.",
//   "Qarışıq-Sızanaq-Yüksək": "Qarışıq dəri, Sızanaq problemi və yüksək büdcə ilə mükəmməl üz kremi.",
//   "Qarışıq-Sızanaq-Orta": "Qarışıq dəri, Sızanaq problemi və orta büdcə ilə təmizləyici krem.",
//   "Qarışıq-Qırışlar-Yüksək": "Qarışıq dəri, Qırışlar və yüksək büdcə ilə anti-aging kremi.",
//   "Qarışıq-Qırışlar-Orta": "Qarışıq dəri, Qırışlar və orta büdcə ilə yaşlanma qarşıtı krem.",
//   "Qarışıq-Rəng bərabərsizliyi-Yüksək": "Qarışıq dəri, Rəng bərabərsizliyi və yüksək büdcə ilə uyumlu ton bərabərləşdirici krem.",
//   "Qarışıq-Rəng bərabərsizliyi-Orta": "Qarışıq dəri, Rəng bərabərsizliyi və orta büdcə ilə təmizləyici krem."
// };

// function showQuestion(index) {
//   if (index < questions.length) {
//       questions[index].style.display = "block";
//   } else {
//       showResult();
//   }
// }

// function setAnswer(question, answer) {
//   answers[question] = answer;
//   currentQuestion++;
//   document.querySelectorAll(".question")[currentQuestion - 1].style.display = "none";

//   if (currentQuestion < 3) {
//       showQuestion(currentQuestion);
//   } else {
//       showResult();
//   }
// }

// function showResult() {
//   const resultText = generateResultText();
//   document.querySelector(".result").style.display = "block";
//   document.querySelector("#resultText").textContent = resultText;
// }

// function generateResultText() {
//   const combination = `${answers.deeriTipi}-${answers.deeriProblemi}-${answers.budce}`;

//   return results[combination] || "Uyğun məhsul tapılmadı. Yenidən yoxlayın.";
// }

// document.getElementById('option1').addEventListener('click', () => setAnswer('deeriTipi', 'Yağlı'));
// document.getElementById('option2').addEventListener('click', () => setAnswer('deeriTipi', 'Quru'));
// document.getElementById('option3').addEventListener('click', () => setAnswer('deeriTipi', 'Qarışıq'));
// document.getElementById('option4').addEventListener('click', () => setAnswer('deeriProblemi', 'Sızanaq'));
// document.getElementById('option5').addEventListener('click', () => setAnswer('deeriProblemi', 'Qırışlar'));
// document.getElementById('option6').addEventListener('click', () => setAnswer('deeriProblemi', 'Rəng bərabərsizliyi'));
// document.getElementById('option7').addEventListener('click', () => setAnswer('budce', 'Aşağı'));
// document.getElementById('option8').addEventListener('click', () => setAnswer('budce', 'Orta'));
// document.getElementById('option9').addEventListener('click', () => setAnswer('budce', 'Yüksək'));


let answers = {
  skinType: "",
  skinProblem: "",
  budget: ""
};

document.querySelector(".start-btn").addEventListener("click", function() {
  document.querySelector(".questionnaire").style.display = "block";
  this.style.display = "none";
  showQuestion(0); 
});

let currentQuestion = 0;
const questions = document.querySelectorAll(".question");

const results = {
  "Oily-Acne-High": "Perfect cream for oily skin, acne problem, and high budget.",
  "Oily-Acne-Medium": "Dermatological product for oily skin, acne problem, and medium budget.",
  "Oily-Wrinkles-High": "Anti-aging product for oily skin, wrinkles, and high budget.",
  "Oily-Wrinkles-Medium": "Restorative cream for oily skin, wrinkles, and medium budget.",
  "Oily-Irregular tone-High": "Cream for restoring skin tone for oily skin with irregular tone and high budget.",
  "Oily-Irregular tone-Medium": "Suitable dermatological product for oily skin with irregular tone and medium budget.",
  "Dry-Acne-High": "Suitable treatment for dry skin with acne and high budget.",
  "Dry-Acne-Medium": "Cleansing cream for dry skin with acne and medium budget.",
  "Dry-Wrinkles-High": "Restorative cream for dry skin with wrinkles and high budget.",
  "Dry-Wrinkles-Medium": "Wrinkle prevention product for dry skin with wrinkles and medium budget.",
  "Dry-Irregular tone-High": "Dermatological product for dry skin with irregular tone and high budget.",
  "Dry-Irregular tone-Medium": "Tone-evening cream for dry skin with irregular tone and medium budget.",
  "Combination-Acne-High": "Perfect face cream for combination skin, acne problem, and high budget.",
  "Combination-Acne-Medium": "Cleansing cream for combination skin with acne and medium budget.",
  "Combination-Wrinkles-High": "Anti-aging cream for combination skin, wrinkles, and high budget.",
  "Combination-Wrinkles-Medium": "Anti-aging product for combination skin, wrinkles, and medium budget.",
  "Combination-Irregular tone-High": "Tone-evening cream suitable for combination skin with irregular tone and high budget.",
  "Combination-Irregular tone-Medium": "Cleansing cream for combination skin with irregular tone and medium budget."
};

function showQuestion(index) {
  if (index < questions.length) {
      questions[index].style.display = "block";
  } else {
      showResult();
  }
}

function setAnswer(question, answer) {
  answers[question] = answer;
  currentQuestion++;
  document.querySelectorAll(".question")[currentQuestion - 1].style.display = "none";

  if (currentQuestion < 3) {
      showQuestion(currentQuestion);
  } else {
      showResult();
  }
}

function showResult() {
  const resultText = generateResultText();
  document.querySelector(".result").style.display = "block";
  document.querySelector("#resultText").textContent = resultText;
}

function generateResultText() {
  const combination = `${answers.skinType}-${answers.skinProblem}-${answers.budget}`;
  return results[combination] || "No suitable product found. Please try again.";
}

document.getElementById('option1').addEventListener('click', () => setAnswer('skinType', 'Oily'));
document.getElementById('option2').addEventListener('click', () => setAnswer('skinType', 'Dry'));
document.getElementById('option3').addEventListener('click', () => setAnswer('skinType', 'Combination'));
document.getElementById('option4').addEventListener('click', () => setAnswer('skinProblem', 'Acne'));
document.getElementById('option5').addEventListener('click', () => setAnswer('skinProblem', 'Wrinkles'));
document.getElementById('option6').addEventListener('click', () => setAnswer('skinProblem', 'Irregular tone'));
document.getElementById('option7').addEventListener('click', () => setAnswer('budget', 'Low'));
document.getElementById('option8').addEventListener('click', () => setAnswer('budget', 'Medium'));
document.getElementById('option9').addEventListener('click', () => setAnswer('budget', 'High'));
