/***********************
 *  APP QCM – SPP       *
 ***********************/

let MODE = null;
let QUESTION_BANK = [];
let QUIZ = [];
let TIMER = null;
let timeLeft = 0;

// Toutes les catégories possibles
const CATEGORIES = [
  "culture_admin","droit_sc","orga_sdis","management",
  "operatoire","risques","transmissions","prevention",
  "finances_publiques","europe","environment",
  "international","territorial","fpt","securite_publique"
];

// Stockage local des erreurs
let MISSED_QUESTIONS = JSON.parse(localStorage.getItem("missedQuestions") || "[]");
function saveMissedQuestions(){
  localStorage.setItem("missedQuestions", JSON.stringify(MISSED_QUESTIONS));
}

// Helpers UI
function show(id){ document.getElementById(id).classList.remove("hidden"); }
function hide(id){ document.getElementById(id).classList.add("hidden"); }
function setText(id,txt){ const el=document.getElementById(id); if(el) el.innerHTML = txt; }
function warn(id,txt){ const el=document.getElementById(id); if(!el)return;
  if(txt){ el.innerHTML=txt; el.classList.remove("hidden"); }
  else { el.innerHTML=""; el.classList.add("hidden"); }
}

// Chargement catégories
window.onload = () => {
  const cl = document.getElementById("categoryList");
  if (!cl) return;
  CATEGORIES.forEach(cat=>{
    const el=document.createElement("label");
    el.className="choice";
    el.style.background="var(--muted)";
    el.innerHTML = `<input type="checkbox" value="${cat}" checked> ${cat.replace(/_/g," ").toUpperCase()}`;
    cl.appendChild(el);
  });
};

// Navigation
function backHome(){
  ["modeSelect","revisionPanel","examenPanel","reviewErrorsPanel","timer","progress","result","validateBtn"]
    .forEach(hide);
  show("modeSelect");
  setText("quiz","");
}

function startMode(m){
  MODE = m;
  ["modeSelect","revisionPanel","examenPanel","reviewErrorsPanel","timer","progress","result","validateBtn"]
    .forEach(hide);

  if(m==="revision"){ show("revisionPanel"); checkBanks("revWarn"); }
  else if(m==="examen"){ show("examenPanel"); checkBanks("examWarn"); }
  else if(m==="reviewErrors"){
    show("reviewErrorsPanel");
    if(MISSED_QUESTIONS.length===0) warn("errWarn","Aucune erreur enregistrée.");
    else warn("errWarn","");
  }
}

function checkBanks(w){
  const sums = (arr)=> Array.isArray(arr) ? arr.length : 0;
  const total =
    sums(BANK_BASE_CLEAN)+
    sums(ANN_2018_FULL)+
    sums(ANN_2020_EXT)+
    sums(ANN_2022_EXT)+
    sums(ANN_2024_EXT);

  if(total===0)
    warn(w,"⚠️ Aucune question trouvée. Ajoutez vos QCM dans les fichiers JS.");
  else
    warn(w,"");
}

// Lancement révision
function launchRevision(){
  const cats = [...document.querySelectorAll("#categoryList input:checked")].map(x=>x.value);
  QUESTION_BANK = [];

  [BANK_BASE_CLEAN, ANN_2018_FULL, ANN_2020_EXT, ANN_2022_EXT, ANN_2024_EXT]
    .forEach(b => { if(Array.isArray(b)) QUESTION_BANK.push(...b); });

  if(QUESTION_BANK.length===0){ warn("revWarn","⚠️ Aucune question dans les banques !"); return; }

  QUESTION_BANK = QUESTION_BANK.filter(q=>cats.includes(q.cat));
  let n = document.getElementById("revCount").value;
  n = (n==="all") ? QUESTION_BANK.length : parseInt(n);

  if(n===0 || QUESTION_BANK.length===0){
    warn("revWarn","⚠️ Aucune question trouvée dans ces catégories.");
    return;
  }

  QUIZ = shuffle(QUESTION_BANK).slice(0,n);
  MODE="revision";
  startQuizDisplay();
}

// Lancement examen
function launchExamen(){
  const ds=document.getElementById("examDataset").value;
  QUESTION_BANK =
    ds==="ann_2024_ext" ? [...ANN_2024_EXT] :
    ds==="ann_2022_ext" ? [...ANN_2022_EXT] :
    ds==="ann_2020_ext" ? [...ANN_2020_EXT] :
    [...ANN_2018_FULL];

  if(QUESTION_BANK.length===0){
    warn("examWarn","⚠️ Ce sujet est vide !");
    return;
  }

  QUIZ=[...QUESTION_BANK];
  timeLeft=90*60;
  setText("timer","Temps restant : 90m 00s");
  show("timer");
  TIMER=setInterval(updateTimer,1000);

  MODE="examen";
  startQuizDisplay();
}

// Erreurs à revoir
function launchReviewErrors(){
  if(MISSED_QUESTIONS.length===0){
    warn("errWarn","⚠️ Aucune erreur enregistrée.");
    return;
  }
  QUIZ = shuffle(MISSED_QUESTIONS);
  MODE="reviewErrors";
  startQuizDisplay();
}

function clearReviewErrors(){
  if(confirm("Effacer l'historique ?")){
    MISSED_QUESTIONS=[];
    saveMissedQuestions();
    warn("errWarn","Historique effacé.");
  }
}

// Affichage des questions
function startQuizDisplay(){
  ["modeSelect","revisionPanel","examenPanel","reviewErrorsPanel","result"].forEach(hide);
  setText("quiz","");
  setText("progress", QUIZ.length+" questions chargées");
  show("progress");
  show("validateBtn");

  const quiz=document.getElementById("quiz");
  QUIZ.forEach((q,i)=>{
    const div=document.createElement("div");
    div.className="question";
    let html=`<b>Question ${i+1}</b><br>${q.q}`;
    q.a.forEach((ans,j)=>{
      html+=`<label class='choice'><input type='checkbox' name='q${i}' value='${j}'> ${ans}</label>`;
    });
    div.innerHTML=html;
    quiz.appendChild(div);
  });
}

function updateTimer(){
  timeLeft--;
  if(timeLeft<=0){
    clearInterval(TIMER);
    TIMER=null;
    validateQuiz();
    return;
  }
  const m=Math.floor(timeLeft/60), s=timeLeft%60;
  setText("timer",`Temps restant : ${m}m ${s<10? "0"+s:s}s`);
}

// Validation
function validateQuiz(){
  if(TIMER){ clearInterval(TIMER); TIMER=null; }
  hide("validateBtn");

  let score=0;
  QUIZ.forEach((q,i)=>{
    const checked=[...document.querySelectorAll(`input[name=q${i}]:checked`)]
      .map(e=>parseInt(e.value));

    if(checked.length===0){
      if(MODE==="examen") score-=.25;
      if(!MISSED_QUESTIONS.some(x=>x.q===q.q)){
        MISSED_QUESTIONS.push(q);
        saveMissedQuestions();
      }
      return;
    }

    const wrong=checked.some(v=>!q.c.includes(v));
    if(wrong){
      if(MODE==="examen") score-=.25;
      if(!MISSED_QUESTIONS.some(x=>x.q===q.q)){
        MISSED_QUESTIONS.push(q);
        saveMissedQuestions();
      }
    } else {
      if(checked.length===q.c.length) score+=1;
      else score += (MODE==="examen") ? 0.5 : 1;
    }
  });

  const note=(QUIZ.length>0)?(score/QUIZ.length*20):0;

  const html = `
    <h3>Résultat</h3>
    <p><b>Score :</b> ${score.toFixed(2)} / ${QUIZ.length}</p>
    <p><b>Note /20 :</b> ${note.toFixed(2)}</p>
    <p class="muted">Questions en erreur ajoutées au mode dédié.</p>

    <div class="row" style="margin-top:14px">
      <button class="btn" onclick="backHome()">Menu</button>
      <button class="btn success" onclick="startQuizDisplay()">Revoir les questions</button>
    </div>
  `;

  setText("result",html);
  show("result");
}

// Utils
function shuffle(a){return a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);}
