    const songs = [
      { title: "Let It Burn", url: "https://www.youtube.com/watch?v=YCmEO0ipKxg", tags: ["angry", "strength"] },
      { title: "Found", url: "https://youtu.be/EdfhzKK3WJs", tags: ["hopeful", "healing"] },
      { title: "Say Goodbye", url: "https://youtu.be/v0XYCNsi7H8", tags: ["sad", "pain"] },
      { title: "Devil Inside", url: "https://youtu.be/B_9fg9PRKck", tags: ["angry", "trauma"] },
      { title: "Buried Alive", url: "https://www.youtube.com/watch?v=DLJi0uxXGY4", tags: ["numb", "mental-health"] },
      { title: "Better Place", url: "https://youtu.be/aLKZSxpzrPE", tags: ["hopeful", "healing"] },
      { title: "Unbreakable", url: "https://youtu.be/zFdidR8HObI", tags: ["strength", "hopeful"] },
      { title: "If These Scars Could Speak", url: "https://youtu.be/hbtDPxKcijY", tags: ["sad", "trauma", "understanding"] },
      { title: "Never Good Enough", url: "https://youtu.be/oHN3TPq1upw", tags: ["self-worth", "mental-health"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
      { title: "Kill My Memory", url: "https://youtu.be/W1UpXNj8sgc", tags: ["pain", "escape"] },
    ];

    function nextQuestion(num) {
      document.querySelector(`#q${num - 1}`).classList.remove("active");
      document.querySelector(`#q${num}`).classList.add("active");
      document.getElementById("progressText").textContent = `Question ${num} of 3`;
    }

    function pickSong() {
      const mood = document.getElementById("mood").value;
      const struggle = document.getElementById("struggle").value;
      const need = document.getElementById("need").value;

      const selectedTags = [mood, struggle, need].filter(Boolean);

      let matchingSongs = songs.filter(song =>
        selectedTags.every(tag => song.tags.includes(tag))
      );

      if (matchingSongs.length === 0) {
        matchingSongs = songs.filter(song =>
          selectedTags.some(tag => song.tags.includes(tag))
        );
      }

      const song = matchingSongs.length > 0
        ? matchingSongs[Math.floor(Math.random() * matchingSongs.length)]
        : songs[Math.floor(Math.random() * songs.length)];

      document.getElementById("quizForm").style.display = "none";
      document.getElementById("progressText").style.display = "none";
      document.getElementById("result").innerHTML = `🎵 <strong>${song.title}</strong><br><a href="${song.url}" target="_blank">Listen on YouTube</a>`;
    }
