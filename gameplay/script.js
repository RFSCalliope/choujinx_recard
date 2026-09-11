// Database Karakter Lengkap (Termasuk Semua Musuh Battle)
const characterLore = [
    {
        name: "SIETTA MINAKKEN",
        baseImage: "../media/photo/Sietta_Minakken.png",
        choujinImage: "../media/photo/Sietta_Choujin.png",
        wikiUrl: null,
        desc: "Internal Choujin. Laki-laki penuh hampa yang menguasai manipulasi energi realita, manipulasi wujud distorsi dekstruktif, serta kehampaan akut."
    },
    {
        name: "TOKIO KUROHARA",
        baseImage: "../media/photo/Tokio_Kurohara.png",
        choujinImage: "../media/photo/Tokio_Choujin.png",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Tokio_Kurohara",
        desc: "Bestial (Vulture) Choujin. Anggota Yamato Mori yang bertarung dengan sayap pemakan bangkai, cakar tajam, dan fleksibilitas pertempuran udara."
    },
    {
        name: "AZUMA HIGASHI",
        baseImage: "../media/photo/Azuma_Higashi.webp",
        choujinImage: "../media/photo/Azuma_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Azuma_Higashi",
        desc: "Iron Choujin. Memiliki rasa keadilan tinggi dengan kemampuan melapisi serta mengubah tubuhnya menjadi baja berpelindung kokoh."
    },
    {
        name: "ELY OTTA",
        baseImage: "../media/photo/Ely_Otta.png",
        choujinImage: "../media/photo/Ely_Choujin.png",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Ely_Otta",
        desc: "Smoke & Fire Choujin. Gadis desa berkemampuan unik menyerap kekuatan Choujin lain serta memanipulasi asap dan semburan api destruktif."
    },
    {
        name: "SIMON KAGOMURA",
        baseImage: "../media/photo/Simon_Kagomura.webp",
        choujinImage: "../media/photo/Simon_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Simon_Kagomura",
        desc: "Sword Choujin. Keturunan klan Kagomura yang ahli bertarung menggunakan teknik pedang dan manifestasi bilah-bilah ilmu hitam legendaris."
    },
    {
        name: "MAIKO MOMOMA",
        baseImage: "../media/photo/Momoma_Maiko.webp",
        choujinImage: "../media/photo/Momoma_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Maiko_Momoma",
        desc: "Paper Choujin. Keberadaan tangguh di Yamato Mori yang mampu memanipulasi struktur kertas menjadi pertahanan super keras atau senjata tajam."
    },
    {
        name: "TEZUYA SHIOZAKI",
        baseImage: "../media/photo/Tezuya_Shiozaki.webp",
        choujinImage: "../media/photo/Shiozaki_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Tezuya_Shiozaki",
        desc: "Sink Choujin. Mantan atlet bisbol yang membangkitkan kemampuan manipulasi gravitasi, lemparan sinker berdaya hancur tinggi, dan pertahanan fisik."
    },
    {
        name: "CHANDRA HUME",
        baseImage: "../media/photo/Chandra_Hume.webp",
        choujinImage: "../media/photo/Chandra_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Chandra_Hume",
        desc: "Smoke Choujin. Tokoh antagonis penguasa kabut dan asap bertekanan tinggi yang mampu membutakan mata serta membakar musuhnya."
    },
    {
        name: "NARI TSUMUJI",
        baseImage: "../media/photo/Nari_Tsumuji.webp",
        choujinImage: "../media/photo/Nari_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Nari_Tsumuji",
        desc: "Snake Choujin. Musuh yang sangat lincah dengan kemampuan mengubah seluruh anatomi tubuhnya menjadi ular raksasa berbisa mematikan."
    },
    {
        name: "SORA SIRUHA (ZORA)",
        baseImage: "../media/photo/Sora_Siruha.webp",
        choujinImage: "../media/photo/Zora_Choujin.webp",
        wikiUrl: "https://choujin-x.fandom.com/wiki/Sora_Siruha",
        desc: "Choujin X Legendaris. Pendiri Tower of Mourning dengan kekuatan absolut, penglihatan masa depan (Prophecy), dan manipulasi energi destruktif."
    }
];

// Database Musuh Per Mode (Diselaraskan nama karakter sesuai perbaikan)
const enemiesBase = {
    easy: [
        { name: "AZUMA HIGASHI", baseHP: 100, image: "../media/photo/Azuma_Higashi.webp", deck: [{ name: "Iron Fist", baseAtk: 12 }, { name: "Hero Rush", baseAtk: 18 }] },
        { name: "ELY OTTA", baseHP: 120, image: "../media/photo/Ely_Otta.webp", deck: [{ name: "Smoke Screen", baseAtk: 15 }, { name: "Fire Blast", baseAtk: 22 }] },
        { name: "TEZUYA SHIOZAKI", baseHP: 140, image: "../media/photo/Tezuya_Shiozaki.webp", deck: [{ name: "Sink Pitch", baseAtk: 20 }] }
    ],
    normal: [
        { name: "AZUMA HIGASHI", choujinName: "AZUMA (IRON FORM)", baseHP: 130, image: "../media/photo/Azuma_Higashi.webp", choujinImage: "../media/photo/Azuma_Choujin.webp", deck: [{ name: "Iron Strike", baseAtk: 20 }] },
        { name: "ELY OTTA", choujinName: "ELY (FIRE FORM)", baseHP: 150, image: "../media/photo/Ely_Otta.webp", choujinImage: "../media/photo/Ely_Choujin.webp", deck: [{ name: "Flame Tempest", baseAtk: 25 }] },
        { name: "SIMON KAGOMURA", choujinName: "SIMON (SWORD FORM)", baseHP: 170, image: "../media/photo/Simon_Kagomura.webp", choujinImage: "../media/photo/Simon_Choujin.webp", deck: [{ name: "Blade Dance", baseAtk: 28 }] },
        { name: "MAIKO MOMOMA", choujinName: "MOMOMA (PAPER FORM)", baseHP: 180, image: "../media/photo/Momoma_Maiku.webp", choujinImage: "../media/photo/Momoma_Choujin.webp", deck: [{ name: "Paper Cut", baseAtk: 30 }] },
        { name: "CHANDRA HUME", choujinName: "CHANDRA (SMOKE FORM)", baseHP: 200, image: "../media/photo/Chandra_Hume.webp", choujinImage: "../media/photo/Chandra_Choujin.webp", deck: [{ name: "Asphyxiate", baseAtk: 32 }] },
        { name: "NARI TSUMUJI", choujinName: "NARI (SNAKE FORM)", baseHP: 220, image: "../media/photo/Nari_Tsumuji.webp", choujinImage: "../media/photo/Nari_Choujin.webp", deck: [{ name: "Venom Bite", baseAtk: 35 }] }
    ],
    hard: [
        { name: "AZUMA HIGASHI", choujinName: "AZUMA (IRON FORM)", baseHP: 150, image: "../media/photo/Azuma_Higashi.webp", choujinImage: "../media/photo/Azuma_Choujin.webp", deck: [{ name: "Iron Strike", baseAtk: 22 }] },
        { name: "ELY OTTA", choujinName: "ELY (FIRE FORM)", baseHP: 170, image: "../media/photo/Ely_Otta.webp", choujinImage: "../media/photo/Ely_Choujin.webp", deck: [{ name: "Flame Tempest", baseAtk: 28 }] },
        { name: "SIMON KAGOMURA", choujinName: "SIMON (SWORD FORM)", baseHP: 190, image: "../media/photo/Simon_Kagomura.webp", choujinImage: "../media/photo/Simon_Choujin.webp", deck: [{ name: "Blade Dance", baseAtk: 30 }] },
        { name: "TOKIO KUROHARA", choujinName: "TOKIO (VULTURE FORM)", baseHP: 210, image: "../media/photo/Tokio_Kurohara.webp", choujinImage: "../media/photo/Tokio_Choujin.webp", deck: [{ name: "Vulture Claw", baseAtk: 32 }] },
        { name: "CHANDRA HUME", choujinName: "CHANDRA (SMOKE FORM)", baseHP: 230, image: "../media/photo/Chandra_Hume.webp", choujinImage: "../media/photo/Chandra_Choujin.webp", deck: [{ name: "Asphyxiate", baseAtk: 35 }] },
        { name: "NARI TSUMUJI", choujinName: "NARI (SNAKE FORM)", baseHP: 250, image: "../media/photo/Nari_Tsumuji.webp", choujinImage: "../media/photo/Nari_Choujin.webp", deck: [{ name: "Venom Bite", baseAtk: 38 }] },
        { name: "TEZUYA SHIOZAKI", choujinName: "SHIOZAKI (SINK FORM)", baseHP: 270, image: "../media/photo/Tezuya_Shiozaki.webp", choujinImage: "../media/photo/Shiozaki_Choujin.webp", deck: [{ name: "Sink Pitch", baseAtk: 40 }] },
        { name: "MAIKO MOMOMA", choujinName: "MOMOMA (PAPER FORM)", baseHP: 290, image: "../media/photo/Momoma_Maiku.webp", choujinImage: "../media/photo/Momoma_Choujin.webp", deck: [{ name: "Paper Cut", baseAtk: 42 }] },
        { name: "SORA SIRUHA", choujinName: "ZORA (GOD CHOUJIN)", baseHP: 380, image: "../media/photo/Sora_Siruha.webp", choujinImage: "../media/photo/Zora_Choujin.webp", deck: [{ name: "X Prophecy", baseAtk: 48 }] }
    ]
};

// Reward Pool Kartu
const rewardCardPool = [
    { title: "Shadow Slash", type: "attack", cost: 2, val: 38, desc: "Tebasan bayangan pekat (+38 Atk)." },
    { title: "Crow Shield", type: "shield", cost: 1, val: 30, desc: "Pelindung bulu gagak (+30 Shield)." },
    { title: "Dark Healing", type: "heal", cost: 2, val: 35, desc: "Memulihkan kegelapan (+35 HP)." },
    { title: "Feather Storm", type: "attack", cost: 3, val: 65, desc: "Badai bulu gagak raksasa (+65 Atk)." },
    { title: "Chaos Barrier", type: "shield", cost: 2, val: 45, desc: "Perisai Chaos tebal (+45 Shield)." }
];

// State Variabel Game
let currentDifficulty = 'normal';
let currentEnemyIndex = 0;
let playerHP = 100, playerMaxHP = 100, playerShield = 0, playerMana = 3, maxMana = 3;
let enemyHP = 100, enemyMaxHP = 100, enemyShield = 0;
let chaosGauge = 0, enemyChaosGauge = 0;
let isPlayerChaosMode = false, isEnemyChaosMode = false;
let masterDeck = [], playerDeck = [], playerHand = [];
let isTurnBusy = false;
let soundVolume = 0.5, bgmVolume = 0.3;

// Pengaturan Audio BGM & SFX
function tryPlayBGM() {
    const bgm = document.getElementById("bgm-player");
    if (bgm) {
        bgm.volume = bgmVolume;
        bgm.play().catch(() => {});
    }
}

function updateBGMVolume(val) {
    bgmVolume = parseFloat(val);
    const bgm = document.getElementById("bgm-player");
    if (bgm) bgm.volume = bgmVolume;
}

function updateVolume(val) {
    soundVolume = parseFloat(val);
}

function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.value = soundVolume * 0.2;

        if (type === 'click') {
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } else if (type === 'attack') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.2);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        }
    } catch (e) {}
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

// Navigasi Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function showMainMenu() {
    playSound('click');
    isTurnBusy = false;
    showScreen('main-menu');
}

function startGameSequence() {
    tryPlayBGM();
    showDifficultyMenu();
}

function showDifficultyMenu() {
    playSound('click');
    showScreen('difficulty-menu');
}

function showOptionsMenu() {
    playSound('click');
    showScreen('options-menu');
}

function showCreditsMenu() {
    playSound('click');
    showScreen('credits-menu');
}

function showCharacterMenu() {
    playSound('click');
    showScreen('character-menu');
    
    const listBtn = document.getElementById("char-list-buttons");
    listBtn.innerHTML = "";
    
    characterLore.forEach((char, index) => {
        const btn = document.createElement("button");
        btn.innerText = `> ${char.name}`;
        btn.onclick = () => selectCharacterDetail(index);
        listBtn.appendChild(btn);
    });

    selectCharacterDetail(0);
}

function selectCharacterDetail(index) {
    playSound('click');
    const char = characterLore[index];
    
    const imgBase = document.getElementById("char-detail-img-base");
    const imgChoujin = document.getElementById("char-detail-img-choujin");
    const linkBase = document.getElementById("char-wiki-link-base");
    const linkChoujin = document.getElementById("char-wiki-link-choujin");

    imgBase.src = char.baseImage;
    
    if (char.wikiUrl) {
        linkBase.href = char.wikiUrl;
        linkBase.style.cursor = "pointer";
        linkBase.onclick = null;
    } else {
        linkBase.removeAttribute("href");
        linkBase.style.cursor = "default";
        linkBase.onclick = (e) => e.preventDefault();
    }

    if (char.choujinImage) {
        imgChoujin.src = char.choujinImage;
        if (char.wikiUrl) {
            linkChoujin.href = char.wikiUrl;
            linkChoujin.style.cursor = "pointer";
            linkChoujin.onclick = null;
        } else {
            linkChoujin.removeAttribute("href");
            linkChoujin.style.cursor = "default";
            linkChoujin.onclick = (e) => e.preventDefault();
        }
        linkChoujin.style.display = "flex";
    } else {
        linkChoujin.style.display = "none";
    }

    document.getElementById("char-detail-name").innerText = char.name;
    document.getElementById("char-detail-desc").innerText = char.desc;
}

// Inisialisasi Dek Sietta
function initMasterDeck() {
    masterDeck = [
        { title: "Cakar Crow", type: "attack", cost: 1, val: 18, desc: "Cakar kegelapan ringan." },
        { title: "Cakar Crow", type: "attack", cost: 1, val: 18, desc: "Cakar kegelapan ringan." },
        { title: "Tebasan Bulu", type: "attack", cost: 2, val: 32, desc: "Sabetan bulu tajam." },
        { title: "Tebasan Bulu", type: "attack", cost: 2, val: 32, desc: "Sabetan bulu tajam." },
        { title: "Sayap Bayangan", type: "attack", cost: 2, val: 35, desc: "Kepakan sayap hitam." },
        { title: "Crow Guard", type: "shield", cost: 1, val: 20, desc: "Tengkorak perisai crow." },
        { title: "Crow Guard", type: "shield", cost: 1, val: 20, desc: "Tengkorak perisai crow." },
        { title: "Dinding Bulu", type: "shield", cost: 2, val: 35, desc: "Perisai bulu rapat." },
        { title: "Regen Bayangan", type: "heal", cost: 2, val: 25, desc: "Memulihkan HP Sietta." },
        { title: "Regen Bayangan", type: "heal", cost: 2, val: 25, desc: "Memulihkan HP Sietta." },
        { title: "Crow Strike", type: "attack", cost: 3, val: 55, desc: "Serangan pemungkas crow." },
        { title: "Dark Burst", type: "attack", cost: 3, val: 60, desc: "Ledakan energi kegelapan." }
    ];
}

function startGame(diff) {
    playSound('click');
    currentDifficulty = diff;
    currentEnemyIndex = 0;
    playerHP = 100;
    chaosGauge = 0;
    isPlayerChaosMode = false;
    isTurnBusy = false;
    
    document.getElementById("chaos-mode-badge").classList.add("hidden");
    
    initMasterDeck();
    showScreen('duel-board');
    document.getElementById("diff-text").innerText = `MODE: ${diff.toUpperCase()}`;
    
    startRound();
}

function startRound() {
    isTurnBusy = false;
    playerDeck = [...masterDeck];
    playerDeck.sort(() => Math.random() - 0.5);
    playerHand = [];
    playerShield = 0;
    playerMana = maxMana;
    
    drawCards(3);
    loadEnemy();
}

function drawCards(count) {
    for (let i = 0; i < count; i++) {
        if (playerDeck.length === 0 && masterDeck.length > 0) {
            playerDeck = [...masterDeck];
            playerDeck.sort(() => Math.random() - 0.5);
        }
        if (playerDeck.length > 0 && playerHand.length < 4) {
            playerHand.push(playerDeck.shift());
        }
    }
    renderHand();
}

function renderHand() {
    const handContainer = document.getElementById("hand-container");
    handContainer.innerHTML = "";
    
    playerHand.forEach((card, idx) => {
        const cEl = document.createElement("div");
        cEl.className = `card ${card.type} ${playerMana < card.cost || isTurnBusy ? 'disabled' : ''}`;
        cEl.innerHTML = `
            <div class="card-cost">${card.cost} STM</div>
            <div class="card-title">${card.title}</div>
            <div class="card-desc">${card.desc}</div>
        `;
        cEl.onclick = () => playCard(idx);
        handContainer.appendChild(cEl);
    });
    
    document.getElementById("deck-count").innerText = playerDeck.length;
}

function playCard(index) {
    if (isTurnBusy) return;
    const card = playerHand[index];
    if (playerMana < card.cost) return;

    playerMana -= card.cost;
    playerHand.splice(index, 1);
    playSound('attack');

    const bonusAtk = isPlayerChaosMode ? 15 : 0;

    if (card.type === 'attack') {
        let dmg = card.val + bonusAtk;
        if (enemyShield > 0) {
            if (enemyShield >= dmg) enemyShield -= dmg;
            else {
                let rem = dmg - enemyShield;
                enemyShield = 0;
                enemyHP = Math.max(0, enemyHP - rem);
            }
        } else {
            enemyHP = Math.max(0, enemyHP - dmg);
        }
        chaosGauge = Math.min(100, chaosGauge + 20);
    } else if (card.type === 'shield') {
        playerShield += card.val;
    } else if (card.type === 'heal') {
        playerHP = Math.min(playerMaxHP, playerHP + card.val);
    }

    if (chaosGauge >= 100 && !isPlayerChaosMode) {
        isPlayerChaosMode = true;
        document.getElementById("chaos-mode-badge").classList.remove("hidden");
    }

    updateUI();
    renderHand();

    if (enemyHP <= 0) {
        handleEnemyDefeated();
    }
}

function loadEnemy() {
    const list = enemiesBase[currentDifficulty];
    const enemy = list[currentEnemyIndex];
    enemyMaxHP = enemy.baseHP;
    enemyHP = enemyMaxHP;
    enemyShield = 0;
    enemyChaosGauge = 0;
    isEnemyChaosMode = false;

    document.getElementById("enemy-name").innerText = enemy.name;
    document.getElementById("enemy-avatar").src = enemy.image;
    document.getElementById("enemy-count-text").innerText = `MUSUH: ${currentEnemyIndex + 1}/${list.length}`;
    document.getElementById("log-box").innerText = "Pertempuran dimulai...";
    
    updateUI();
}

function endPlayerTurn() {
    if (isTurnBusy) return;
    isTurnBusy = true;
    playSound('click');
    renderHand();

    document.getElementById("log-box").innerText = "Giliran Musuh...";

    setTimeout(() => {
        const list = enemiesBase[currentDifficulty];
        const enemy = list[currentEnemyIndex];

        // Mekanisme Transformasi Choujin Form Musuh
        if (currentDifficulty !== 'easy' && !isEnemyChaosMode) {
            enemyChaosGauge += 35;
            if (enemyChaosGauge >= 100) {
                isEnemyChaosMode = true;
                enemyHP = Math.min(enemyMaxHP + 50, enemyHP + 40);
                document.getElementById("enemy-name").innerText = enemy.choujinName || enemy.name;
                if (enemy.choujinImage) {
                    document.getElementById("enemy-avatar").src = enemy.choujinImage;
                }
                document.getElementById("log-box").innerText = `${enemy.name} BERTRANSFORMASI MENJADI CHOUJIN FORM!`;
            }
        }

        const randomCard = enemy.deck[Math.floor(Math.random() * enemy.deck.length)];
        let dmg = randomCard.baseAtk + (isEnemyChaosMode ? 15 : 0);

        if (playerShield > 0) {
            if (playerShield >= dmg) playerShield -= dmg;
            else {
                let rem = dmg - playerShield;
                playerShield = 0;
                playerHP = Math.max(0, playerHP - rem);
            }
        } else {
            playerHP = Math.max(0, playerHP - dmg);
        }

        playSound('attack');
        if (!isEnemyChaosMode) {
            document.getElementById("log-box").innerText = `${enemy.name} melancarkan ${randomCard.name} (${dmg} Dmg)!`;
        }

        // PERBAIKAN: Selalu reset isTurnBusy ketika giliran selesai atau game over
        isTurnBusy = false;

        if (playerHP <= 0) {
            showEndScreen("GAME OVER", "Sietta Minakken telah dikalahkan...");
            return;
        }

        playerMana = maxMana;
        drawCards(2);
        updateUI();
    }, 1000);
}

function handleEnemyDefeated() {
    isTurnBusy = false;
    const list = enemiesBase[currentDifficulty];
    currentEnemyIndex++;

    if (currentEnemyIndex >= list.length) {
        showEndScreen("VICTORY!", "Selamat! Sietta Minakken berhasil mengalahkan semua Choujin!");
    } else {
        showRewardScreen();
    }
}

function showRewardScreen() {
    showScreen('reward-screen');
    const container = document.getElementById("reward-cards-container");
    container.innerHTML = "";

    const shuffled = [...rewardCardPool].sort(() => Math.random() - 0.5).slice(0, 3);

    shuffled.forEach(card => {
        const cEl = document.createElement("div");
        cEl.className = `card ${card.type}`;
        cEl.innerHTML = `
            <div class="card-cost">${card.cost} STM</div>
            <div class="card-title">${card.title}</div>
            <div class="card-desc">${card.desc}</div>
        `;
        cEl.onclick = () => selectCardReward(card);
        container.appendChild(cEl);
    });
}

function selectCardReward(card) {
    playSound('click');
    masterDeck.push(card);
    showScreen('duel-board');
    startRound();
}

function updateUI() {
    document.getElementById("player-hp-text").innerText = `${playerHP}/${playerMaxHP}`;
    document.getElementById("player-hp-bar").style.width = `${Math.max(0, (playerHP / playerMaxHP) * 100)}%`;
    document.getElementById("player-shield-text").innerText = playerShield;
    document.getElementById("player-mana-text").innerText = `${playerMana}/${maxMana}`;

    document.getElementById("enemy-hp-text").innerText = `${enemyHP}/${enemyMaxHP}`;
    document.getElementById("enemy-hp-bar").style.width = `${Math.max(0, (enemyHP / enemyMaxHP) * 100)}%`;
    document.getElementById("enemy-shield-text").innerText = enemyShield;

    document.getElementById("chaos-text").innerText = `${chaosGauge}%`;
    document.getElementById("chaos-bar").style.width = `${chaosGauge}%`;
}

function showEndScreen(title, msg) {
    isTurnBusy = false;
    showScreen('end-screen');
    document.getElementById("end-title").innerText = title;
    document.getElementById("end-message").innerText = msg;
}