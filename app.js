var sentences = [
    "no snowflake in an avalanche ever feels responsible",
    "don't be afraid to take that big step",
    "practice non-attachment",
    "be friends with fear",
    "your shadow is your friend",
    "vulnerability and courage are not opposites",
    "don't run away from novelty",
    "learn to love your mistakes",
    "take care of your inner child",
    "do something for you today",
    ]
    
    function riskIt() {
        var randomNumber = Math.floor(Math.random()*sentences.length);
        document.getElementById('newSentence').innerHTML = sentences[randomNumber];
    }
    
    function sound(){
        var snd = new Audio('partir.mp3');
        snd.play();
    }
    
    function scrollToSlide6() {
        const slide4 = document.getElementById('slide6');
        slide4.scrollIntoView({ behavior: 'smooth' });
      }
    
    
    window.onbeforeunload = function() {
    window.scrollTo(0, 0);
    }

    function sound(){
        var audio = new Audio("ladyandman.mp3");
            var isPlaying = false;
        
            function toggleMusic() {
              if (isPlaying) {
                audio.pause();
                isPlaying = false;
              } else {
                audio.play();
                isPlaying = true;
              }
            }
    }