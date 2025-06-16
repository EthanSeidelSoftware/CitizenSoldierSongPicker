function nextQuestion(num) {
  // Hide all question elements
  document.querySelectorAll('.question').forEach(q => q.classList.remove("active"));

  // Show only the current one
  const next = document.getElementById(`q${num}`);
  if (next) {
    next.classList.add("active");
    document.getElementById("progressText").textContent = `Question ${num} of 3`;
  }
}

async function pickSong() {
  const mood = document.getElementById("mood").value;
  const struggle = document.getElementById("struggle").value;
  const need = document.getElementById("need").value;

  const apiKey = "AIzaSyA1SQu9WYxe6Nb-s-xcetgh9FtmYDaWBx8"; // Replace with your actual key
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const prompt = `Give me the title and YouTube link of a Citizen Soldier song that fits this:
Mood: ${mood}
Struggle: ${struggle}
Need: ${need}
The title should feel emotionally resonant and original, as if it could be the name of a real song someone would relate to in this situation. Only write the title of the song and its link. Do not make a song.
Here's a list of every song
“Let It Burn” https://www.youtube.com/watch?v=YCmEO0ipKxg
“Buried Alive” https://www.youtube.com/watch?v=DLJi0uxXGY4
“15 Minutes of Fame” https://www.youtube.com/watch?v=Rf_Oj-mrZxw
“Soldier” https://youtu.be/iQ4vyQMwEP0?si=GIwdiMU2u17YOHKq
“Caroline” https://youtu.be/QL7YC285Xvc?si=hhezcST4KxSGYtbs
“Found” https://youtu.be/EdfhzKK3WJs?si=-a00t44QQMAWH28S
“First Blood” https://youtu.be/2WUEaS1Lfpk?si=UXUcg85zRYrR-cqG
“Bitter” https://youtu.be/i2a34KywNQw?si=90oTxz2EN6q1s05a
“Cannibal” https://youtu.be/Vy2DifKG_HY?si=ksoB3TW7QKEcjMSc
 “If These Scars Could Speak” https://youtu.be/hbtDPxKcijY?si=u4Pd-SnEPXnOkQiA
“Weight of the Would” https://youtu.be/jZvmXSgzZZ8?si=SX7GnoC1Nze92Sng
“Never Good Enough” https://youtu.be/oHN3TPq1upw?si=TYv5iOdwhP-bmegw
“Say Goodbye” https://youtu.be/v0XYCNsi7H8?si=QlcS-5kq0Gnir4eo
“Devil Inside” https://youtu.be/B_9fg9PRKck?si=X7MFTSweT5kt9ONs
“Better Place” https://youtu.be/aLKZSxpzrPE?si=REvX_F7YHDAvBTxY
“Kill My Memory” https://youtu.be/W1UpXNj8sgc?si=r2s9U6YuO2vmGiDp
“Unbreakable” https://youtu.be/zFdidR8HObI?si=b5g-jxZqZbi3pX_I
“In Pieces” https://youtu.be/ahMZEFLTm6U?si=OiGrzgLJZJyNIKTn
“Death of Me” https://youtu.be/ahMZEFLTm6U?si=I-eCZNzbvv36o2Qz
“Sacred” https://youtu.be/To2vGYoD8IQ?si=HuEl8dSxYsDI9PGL
“Hope It Haunts You” https://youtu.be/XrW9X7wdrh4?si=9W4nSWy41rDiM9ea
“Would Anyone Care” https://youtu.be/5gyANphz_Kk?si=ElY1tGEgP-hHAmKr
“Mess of Me” https://youtu.be/qrltjLUIXxo?si=QqbcU9wjcDKSnuqh
“Gunshot Lullabies” https://youtu.be/VJFE2Nd7H34?si=KwHJ9Iwi8jcVbcMh
“My Little Secret” https://youtu.be/PkH2EURE4sY?si=2fUO7XracrfxxRQc
“Forever Damned” https://youtu.be/GVDRTWOgjoE?si=ddA1Tcje9yochayn
“I’m Not Okay” https://youtu.be/mTtucss80tc?si=tpZTFploVGnRX8F9
“The Cage” https://youtu.be/lPVoG7cUzyE?si=TB1e5PxA_pfItOS4
“Make Hate to Me” https://youtu.be/ntwBRyFZtDs?si=4lQtuW43th9C74ik
“Hallelujah” https://youtu.be/WvhwU5Pl1Wk?si=YfUCewDVpMIxvb9i
“Stronger Than My Storm” https://youtu.be/YvU4wdY1SVk?si=U5aKXxLaQu7c_2tv 
“If I Surrender” https://youtu.be/HB7We-iDuC4?si=RVNseDSTXX62Wb07
“Face to Face” https://youtu.be/a8GIw-xmwfo?si=j4XOQRg3SNLO-Uou
“Always December” https://youtu.be/ISt4ocYuqBA?si=ikp3hDZNzpkA_Xmm
“Thank You for Hating Me” https://youtu.be/Tqgm8BIqsF8?si=o8AUp6ymTfVe0hW6
“Empty Cup” https://youtu.be/B3p3JIIFMKw?si=xTG4NukN5_Mza8wb
“Bedroom Ceiling” https://youtu.be/NQ6bYzaTzgY?si=dKulMFtbOofI4JMq
“Hand Me Down” https://youtu.be/GjanmFaBzmQ?si=71jFR7PWVFoPjl6y
“Just Be Happy” https://youtu.be/0HgHIfg7ewE?si=OjhwR03AWthSBZmu
“Isolate” https://youtu.be/vIwkyHlZhBw?si=4a3fAKEEaMvaE_TD
“Invisible” https://youtu.be/cvdK864_0wo?si=PhszFLCORgF3lOl1
“Pandora’s Box” https://youtu.be/2fx3pIiwlwQ?si=uwoB-W_JRbRBg5fI
“Unsaid” https://youtu.be/kagg1q5W-XM?si=NCMkN3rWt_ICbGkD
“Irreplaceable” https://youtu.be/e8huhxZsVHk?si=ELZaZklRdnVdAq17
“Pretend My Pain Away” https://youtu.be/ggCKssfqI2c?si=fPWmFGOSJRAPaKab
“Numb to Everything” https://youtu.be/OP6JCt-mZcc?si=fz15ZsABhbkuSUT6
“Waiting on the Sun” https://youtu.be/HuZVHVrSaT4?si=_mpvlqpmSNI4hoFq 
“Wanted” https://youtu.be/atv_c3frqMU?si=0ePZDKcQJRVsYCM9 
“Screaming in Silence” https://youtu.be/nC4A2WUXsZk?si=bQS-g7HqV69SZceS 
“Still Breathing” https://youtu.be/JFAs8GKyZJE?si=-i9x1zn-n673l1Vc
“You Are Not Your Past” https://youtu.be/eCaizOaDWnU?si=Kk9tizy6iqbay-Hn
“Who I Am” https://youtu.be/SGsIBi5vyLk?si=6hPWMFAbo54Q8GIm
“This Is Your Sign” https://youtu.be/HvmIqAJ_xxY?si=xU3c0g7gyATrarZS
“Monster Made of Memories”https://youtu.be/-1bTiy8bVcM?si=jg32AbOoHl4g3kHk
“Save Your Story” https://youtu.be/9uEMaVxfH7s?si=ZfpeybauDGYT6xsx
“Let Me Let Go” https://youtu.be/pEF_1P8cK6Y?si=xtjj5KtviwbzPB8Y
“Fever” https://youtu.be/NomS716PhXQ?si=CcNSZpcVzT_KgjZS
“Easy’s Never Been This Hard”  https://youtu.be/gvzQ2z1Up7Q?si=AWKuTZu4wetjCVTG
“Words That Don’t Exist” https://youtu.be/KmPPdkAwQKo?si=agZyB2MU632ymluE
“Run Away From MySelf” https://youtu.be/mmpsiA_RfAk?si=pq0p2ZD01r2R1XW_
“This Is Not a Phase” https://youtu.be/SmESXfTqaFU?si=yERtmuFdaqx7nSE1
“Anybody But Me” https://youtu.be/dctAyqdTpQo?si=hoSaLIMogyp004Ro
“Deathbed” https://youtu.be/dctAyqdTpQo?si=25rh0QTfPwPPfuGc
“Still Framed” https://youtu.be/vfXUTN5gFg4?si=jbkPxA1Z4Qlzcw73
“Madhouse” https://youtu.be/yL1dWngIqyQ?si=Lrt-N_rPnL6am4rw
“Golden Weather” https://youtu.be/NhMKS4UVfO4?si=iFGouNqphoIZZPbo
“I Hate Myself” https://youtu.be/eQm3RZEAA_8?si=BYOKOqwZ9lPcU2DI
“Scarecrow” https://youtu.be/LFTLCnDuSDs?si=rv_um-TBFe3-QteO
“Tattoos” https://youtu.be/jN7bq6GU6SA?si=Z4KbrBXWqJN0o2jy
“Suicide Note” https://youtu.be/EkByciNiOzw?si=t39p4aCzlZMcnLa9
“Through Hell” https://youtu.be/2ilDGJtoc20?si=5OfnI2MmMMWYg0PR
“Afterlife” https://youtu.be/KEQqJfVTyrM?si=NjAWPNtv5zlNsmrI
“My Own Miracle” https://youtu.be/7F2vNShcECk?si=By8h1oK1X-PeIiG6
“Broken Like Me” https://youtu.be/rlH-LAfUzO0?si=1E1pBrdK7sp_yTf6
“Reason to Live” https://youtu.be/ERAwSIr818o?si=hQx04HuSt02qipTD
“Wired for Worthless” https://youtu.be/KlEBEthFVAA?si=oHsc8YXDWhbwicEP
“Talk Me Down” https://youtu.be/2VyiyTvRsyI?si=cU5NSxg-uJf5W2lJ
“Strong for Somebody Else” https://youtu.be/eQ7KZ3HKZvE?si=-2Ijt5Lwn3dTS0la
“Alone With Myself” https://youtu.be/X_EbSt6IRmE?si=PkWZbR9Y9TY1r4gv
“Good Enough for God”  https://youtu.be/Bs7FqpD-qyg?si=3DMkP6So4iE2Kqb-
“Comparison” https://youtu.be/N2CfoFN8JMQ?si=akNahZBMYlURL6Ou
“Give Up To Ghosts” https://youtu.be/7oP4LEu7v0Q?si=GzpSVNV8Rj5BR9Sa
“Therapy” https://youtu.be/KTOLnOc1IRM?si=_5FMtUsUDk3-RUE2
“You Are Enough” https://youtu.be/nX5k_MYf_hQ?si=9wsLqGtVkrN4T1LJ
“ICU” (“I See You”) https://youtu.be/nX5k_MYf_hQ?si=rQ3AMpy_6Xn1Jvtq
“Black Hole Brain” https://youtu.be/EnzQ05DVLvo?si=DAAOKN28j35oFMFG
“Made By Misery” https://youtu.be/QWlw8rQtT7M?si=9YEwOVJnLodmLZ38
“Without You” https://youtu.be/-0rVMfIOAQo?si=RMG9m1UMeR-u6CLr
“Different Kind of Animal” NOT ON YT
“Everyday Hero” NOT ON YT
“Life Sentence” NOT ON YT
“‘Til Death Do Us Part” NOT ON YT
“Chasing Your Ghost” NOT ON YT
“Dead-End Life” https://youtu.be/oGPYkA21eNk?si=5vEpa7ujor-F1zmh
“Where Were You” https://youtu.be/B4QcrRDC5W4?si=-nAKZ2slw9V_fkTD
“Everybody Hates You” https://youtu.be/lE-QCn9C29c?si=fbPUV8h1K1xLRnKe
“Letdown” https://youtu.be/QAujbq2Tms8?si=1UFuesbWn1rv9lMY
“Burden” https://youtu.be/6VhOQhTTamA?si=Zfl_meBhsv2COf7v
“Live Again” https://youtu.be/qT9P1QzGwD0?si=fAlsevhXnS5hKcbN
“Good Old Days” https://youtu.be/K4SwFd6FVaM?si=zoifitgg35KgC3Hh
“Save Me From My Angels” https://youtu.be/z2xmnJkqf7Y?si=uKJu90GNe-3QLbcw
“The Liar” https://youtu.be/cHgOennReYQ?si=E7DygDoEPwcdN9cw
“Figure Me Out” https://youtu.be/zqNX4ymM_4Y?si=mdf5qxbGkHu91KAS
“Better Off Broken” https://youtu.be/vQJADFTaXVE?si=vj_l78vem8_Vh52w
“Inner Critic” https://youtu.be/jsO1Rx363Q8?si=Zx8tpauc7Wmg86L8
“Life Support” https://youtu.be/RyEmcK08Yf4?si=AK90t8D7UIWzBJbi
“Bulletproof” AWAITING RELEASE, SEEMS SOON3/3`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]
  };

  document.getElementById("result").innerHTML = "🎵 Finding your song...";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) throw new Error(`API error: ${response.statusText}`);

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const match = text.match(/^(.*?)\s*(https?:\/\/\S+)/s);

    let title = "Unknown Song";
    let link = "#";

    if (match) {
      title = match[1];
      link = match[2];
    } else {
      title = text.trim();
    }

    document.getElementById("quizForm").style.display = "none";
    document.getElementById("progressText").style.display = "none";
    document.getElementById("result").innerHTML = `🎵 <strong>${title}</strong><br><a href="${link}" target="_blank">Listen on YouTube</a>`;
  } catch (error) {
    console.error("Error fetching song:", error);
    document.getElementById("result").innerHTML = "❌ Sorry, something went wrong.\nThe API is probably rate-limited.";
  }
}

