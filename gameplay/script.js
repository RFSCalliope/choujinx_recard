let playerHP = 100, enemyHP = 100;
let playerShield = 0, enemyShield = 0;
let playerMana = 3, maxMana = 3;
let aetherGauge = 0;
let currentEnemyIndex = 0;
let isTurnBusy = false;
let currentDifficulty = 'normal';
let isCrowForm = false;

let deck = [];
let hand = [];

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let sfxVolume = 0.8;

function playSound(type) {
    if (sfxVolume <= 0) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        gain.gain.value = sfxVolume * 0.1;

        if (type === 'attack') {
            osc.frequency.setValueAtTime(300, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.15);
            osc.start(); osc.stop(audioCtx.currentTime + 0.15);
        } else if (type === 'heal') {
            osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.2);
            osc.start(); osc.stop(audioCtx.currentTime + 0.2);
        } else if (type === 'click') {
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            osc.start(); osc.stop(audioCtx.currentTime + 0.05);
        }
    } catch (e) {}
}

const difficultyModifiers = {
    easy: { hpMult: 0.8, atkMult: 0.7 },
    normal: { hpMult: 1.0, atkMult: 1.0 },
    hard: { hpMult: 1.3, atkMult: 1.3 }
};

const siettaImage = "https://i.pinimg.com/1200x/a1/66/58/a1665834d9bdb6140016c64950d531e0.jpg";

const enemiesBase = [
    {
        name: "TOKIO KUROHARA",
        baseHP: 100,
        image: "Tokio_Profile_Art.webp",
        deck: [
            { name: "Vulture Claw", baseAtk: 16 },
            { name: "Wing Gust", baseAtk: 22 },
            { name: "Screeching Strike", baseAtk: 30 }
        ]
    },
    {
        name: "AZUMA HIGASHI",
        baseHP: 130,
        image: "Azuma_March_2003.webp",
        deck: [
            { name: "Iron Fist", baseAtk: 22 },
            { name: "Counter Kick", baseAtk: 28 },
            { name: "Hero Rush", baseAtk: 36 }
        ]
    },
    {
        name: "ELY OTTA",
        baseHP: 160,
        image: "Ely_Profile_Art2.webp",
        deck: [
            { name: "Smoke Screen", baseAtk: 18 },
            { name: "Fire Blast", baseAtk: 32 },
            { name: "Choujin Awakening", baseAtk: 45 }
        ]
    }
];

const masterPlayerCards = [
    { id: 1, mana: 1, name: "Feather Slash", atk: 20, desc: "Tebasan bulu hitam." },
    { id: 2, mana: 2, name: "Crow Dive", atk: 35, desc: "Serangan menukik." },
    { id: 3, mana: 3, name: "Dark Aether Burst", atk: 55, desc: "Serangan Aether kuat.", reqAether: 40 },
    { id: 4, mana: 1, name: "Aether Shield", shield: 25, desc: "+25 Shield Bumper." },
    { id: 5, mana: 2, name: "Aether Heal", heal: 30, desc: "Memulihkan HP & Aether." }
];

let logEl, handEl;

window.onload = function() {
    logEl = document.getElementById("log");
    handEl = document.getElementById("hand");
    checkSaveData();
};

function checkSaveData() {
    const saveData = localStorage.getItem("dark_aether_save");
    const btnContinue = document.getElementById("btn-continue");
    if (btnContinue) btnContinue.disabled = !saveData;
}

function showDifficultyMenu() {
    playSound('click');
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("difficulty-menu").classList.remove("hidden");
}

function showOptionsMenu() {
    playSound('click');
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("options-menu").classList.remove("hidden");
}

function backToMainMenu() {
    playSound('click');
    document.getElementById("difficulty-menu").classList.add("hidden");
    document.getElementById("options-menu").classList.add("hidden");
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("duel-board").classList.add("hidden");
    document.getElementById("main-menu").classList.remove("hidden");
    checkSaveData();
}

function closeGame() {
    if (confirm("Yakin ingin keluar?")) {
        window.close();
        alert("Game ditutup.");
    }
}

function updateAudioSettings() {
    sfxVolume = document.getElementById("sfx-volume").value / 100;
}

function toggleFullscreen() {
    if (document.getElementById("fullscreen-toggle").checked) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

function initDeck() {
    deck = [];
    for (let i = 0; i < 3; i++) {
        deck.push(...masterPlayerCards);
    }
    deck.sort(() => Math.random() - 0.5);
    hand = [];
    drawCards(4);
}

function drawCards(count) {
    for (let i = 0; i < count; i++) {
        if (deck.length > 0 && hand.length < 5) {
            hand.push(deck.pop());
        }
    }
    document.getElementById("deck-count").innerText = deck.length;
}

function startGame(diff) {
    playSound('click');
    currentDifficulty = diff;
    currentEnemyIndex = 0;
    playerHP = 100; playerShield = 0; enemyShield = 0;
    aetherGauge = 0; isCrowForm = false;
    playerMana = maxMana;

    document.getElementById("difficulty-menu").classList.add("hidden");
    document.getElementById("duel-board").classList.remove("hidden");
    document.getElementById("diff-text").innerText = diff.toUpperCase();
    
    initDeck();
    loadEnemy();
    renderHand();
    isTurnBusy = false;
    saveGameProgress();
}

function continueGame() {
    playSound('click');
    const saveData = JSON.parse(localStorage.getItem("dark_aether_save"));
    if (saveData) {
        currentDifficulty = saveData.diff;
        currentEnemyIndex = saveData.enemyIndex;
        playerHP = saveData.playerHP;
        enemyHP = saveData.enemyHP;
        aetherGauge = saveData.aether;
        playerShield = saveData.playerShield || 0;
        enemyShield = saveData.enemyShield || 0;

        document.getElementById("main-menu").classList.add("hidden");
        document.getElementById("duel-board").classList.remove("hidden");
        document.getElementById("diff-text").innerText = currentDifficulty.toUpperCase();

        initDeck();
        loadEnemy();
        updateUI();
        renderHand();
        isTurnBusy = false;
    }
}

function saveGameProgress() {
    const saveState = {
        diff: currentDifficulty,
        enemyIndex: currentEnemyIndex,
        playerHP: playerHP,
        enemyHP: enemyHP,
        aether: aetherGauge,
        playerShield: playerShield,
        enemyShield: enemyShield
    };
    localStorage.setItem("dark_aether_save", JSON.stringify(saveState));
}

function loadEnemy() {
    const enemy = enemiesBase[currentEnemyIndex];
    const mod = difficultyModifiers[currentDifficulty];
    enemyHP = Math.round(enemy.baseHP * mod.hpMult);

    document.getElementById("enemy-name").innerText = enemy.name;
    document.getElementById("enemy-avatar").src = enemy.image;
    document.getElementById("player-avatar").src = siettaImage;

    logEl.innerText = `Giliranmu! Lawan bertarung: ${enemy.name}.`;
    updateUI();
}

function renderHand() {
    handEl.innerHTML = "";
    hand.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerHTML = `
            <div class="card-header">
                <div class="card-title">${card.name}</div>
                <div class="card-mana">${card.mana}</div>
            </div>
            <div class="card-desc">${card.desc}</div>
            <div class="card-atk">${card.heal ? 'HEAL:'+card.heal : (card.shield ? 'SHIELD:'+card.shield : 'ATK:'+card.atk)}</div>
        `;
        cardDiv.onclick = () => playTurn(index);
        handEl.appendChild(cardDiv);
    });
}

function triggerShake() {
    const board = document.getElementById("duel-board");
    board.classList.add("shake");
    setTimeout(() => board.classList.remove("shake"), 300);
}

function playTurn(cardIndex) {
    if (isTurnBusy) return;

    const card = hand[cardIndex];

    if (playerMana < card.mana) {
        logEl.innerText = "Mana tidak cukup!";
        return;
    }

    if (card.reqAether && aetherGauge < card.reqAether) {
        logEl.innerText = `Aether tidak cukup! Butuh ${card.reqAether}%.`;
        return;
    }

    isTurnBusy = true;
    playerMana -= card.mana;
    hand.splice(cardIndex, 1);

    document.getElementById("player-active-card").innerHTML = `<strong style="color:#c084fc">${card.name}</strong>`;

    if (card.heal) {
        playSound('heal');
        playerHP = Math.min(100, playerHP + card.heal);
        aetherGauge = Math.min(100, aetherGauge + 20);
        logEl.innerText = `Sietta menggunakan ${card.name}! HP memulih.`;
    } else if (card.shield) {
        playSound('heal');
        playerShield += card.shield;
        logEl.innerText = `Sietta memasang ${card.name}! +${card.shield} Shield.`;
    } else {
        playSound('attack');
        triggerShake();
        let totalDamage = card.atk;
        if (isCrowForm) totalDamage += 15;

        if (enemyShield > 0) {
            if (enemyShield >= totalDamage) {
                enemyShield -= totalDamage;
            } else {
                let rem = totalDamage - enemyShield;
                enemyShield = 0;
                enemyHP = Math.max(0, enemyHP - rem);
            }
        } else {
            enemyHP = Math.max(0, enemyHP - totalDamage);
        }
        
        aetherGauge = Math.min(100, aetherGauge + 15);
        logEl.innerText = `Sietta menyerang dengan ${card.name}! (${totalDamage} damage)`;
    }

    if (aetherGauge >= 100 && !isCrowForm) {
        isCrowForm = true;
        document.getElementById("player-title").innerText = "SIETTA (CROW FORM)";
        document.getElementById("duel-board").classList.add("crow-form-active");
        logEl.innerText += " SIETTA BERUBAH MENJADI CROW FORM (+15 ATK)!";
    }

    updateUI();
    renderHand();
    saveGameProgress();

    if (enemyHP <= 0) {
        currentEnemyIndex++;
        if (currentEnemyIndex < enemiesBase.length) {
            setTimeout(() => {
                logEl.innerText = `Musuh kalah! Lawan berikutnya mendekat...`;
                enemyShield = 0;
                loadEnemy();
                isTurnBusy = false;
            }, 1200);
        } else {
            localStorage.removeItem("dark_aether_save");
            showEndScreen("VICTORY!", "Sietta berhasil menguasai Aether dan mengalahkan semua Choujin!");
        }
        return;
    }

    isTurnBusy = false;
}

function endPlayerTurn() {
    if (isTurnBusy) return;
    isTurnBusy = true;
    logEl.innerText = "Giliran Musuh...";

    setTimeout(() => {
        const currentEnemy = enemiesBase[currentEnemyIndex];
        const mod = difficultyModifiers[currentDifficulty];
        const randomCard = currentEnemy.deck[Math.floor(Math.random() * currentEnemy.deck.length)];
        const calcAtk = Math.round(randomCard.baseAtk * mod.atkMult);

        playSound('attack');
        triggerShake();

        document.getElementById("enemy-active-card").innerHTML = `<strong style="color:#f87171">${randomCard.name}</strong>`;

        if (playerShield > 0) {
            if (playerShield >= calcAtk) {
                playerShield -= calcAtk;
            } else {
                let rem = calcAtk - playerShield;
                playerShield = 0;
                playerHP = Math.max(0, playerHP - rem);
            }
        } else {
            playerHP = Math.max(0, playerHP - calcAtk);
        }

        playerMana = maxMana;
        drawCards(2);

        logEl.innerText = `${currentEnemy.name} membalas dengan ${randomCard.name} (${calcAtk} damage)! Giliranmu kembali.`;
        
        updateUI();
        renderHand();
        saveGameProgress();

        if (playerHP <= 0) {
            localStorage.removeItem("dark_aether_save");
            showEndScreen("GAME OVER", "Sietta dikalahkan.");
        } else {
            isTurnBusy = false;
        }
    }, 1200);
}

function updateUI() {
    const enemy = enemiesBase[currentEnemyIndex];
    const mod = difficultyModifiers[currentDifficulty];
    const maxEnemyHP = Math.round(enemy.baseHP * mod.hpMult);

    document.getElementById("player-hp").style.width = playerHP + "%";
    document.getElementById("player-hp-text").innerText = `HP: ${playerHP} / 100`;
    document.getElementById("player-shield-text").innerText = `Shield: ${playerShield}`;

    const enemyHpPercent = Math.max(0, (enemyHP / maxEnemyHP) * 100);
    document.getElementById("enemy-hp").style.width = enemyHpPercent + "%";
    document.getElementById("enemy-hp-text").innerText = `HP: ${enemyHP} / ${maxEnemyHP}`;
    document.getElementById("enemy-shield-text").innerText = `Shield: ${enemyShield}`;

    document.getElementById("mana-text").innerText = `${playerMana} / ${maxMana}`;
    document.getElementById("aether-text").innerText = `${aetherGauge}%`;
}

function showEndScreen(title, message) {
    document.getElementById("duel-board").classList.add("hidden");
    document.getElementById("end-title").innerText = title;
    document.getElementById("end-message").innerText = message;
    document.getElementById("end-screen").classList.remove("hidden");
}