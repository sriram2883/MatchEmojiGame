import React, {useState , useRef} from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Body from './components/body/Body.jsx';
function App() {
    const [time, setTime] = useState(90);
    const intervalRef = useRef(null);
    function resetTime() {
        matchRef.current = false;
        const updatedEmojisList = emojislist.map((emoji) =>
          emoji.status === "visible" ? { ...emoji, status: "hidden" } : emoji
        );
    
        setEmojisList(updatedEmojisList);
        console.log(mainEmojislist)
        setEmojisList([...mainEmojislist])
        setMatchedCards([]);
        setSteps(0);
    
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setTime(90);
        intervalRef.current = null;
      }
    
      function startTimer() {
        matchRef.current = false;
        if (intervalRef.current) return;



        const updatedEmojisList = emojislist.map((emoji) =>
          emoji.status === "visible" ? { ...emoji, status: "hidden" } : emoji
        );
        setEmojisList(updatedEmojisList);
        setMatchedCards([])
        setSteps(0);
        resetTime();
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime === 1) {
              clearInterval(intervalRef.current); 
              resetTime();
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      }
    
  const [minSteps, setMinSteps] = useState(Number.MAX_VALUE);
  const [steps, setSteps] = useState(0);
  const [matchedCards, setMatchedCards] = useState([]);
  const matchRef = useRef(false);

  const [mainEmojislist, setMainEmojisList] = React.useState([
    {
        id: 0,
        emojiNmae: 'Smiling Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
    },
    {
        id: 1,
        emojiNmae: 'Smiling Emoji with Eyes Opened',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1571606036',
    },
    {
        id: 2,
        emojiNmae: 'Smiling Emoji with Smiling Eyes',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
    },
    {
        id: 3,
        emojiNmae: 'Smiling Face with Tightly Closed eyes',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Tightly_Closed_eyes_large.png?v=1571606036',
    },
    {
        id: 4,
        emojiNmae: 'Smirk Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
    },
    {
        id: 5,
        emojiNmae: 'Unamused Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
    },
    {
        id: 6,
        emojiNmae: 'Sad Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037',
    },
    {
        id: 7,
        emojiNmae: 'Relieved Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Relieved_Emoji_large.png?v=1571606037',
    },
    {
        id: 8,
        emojiNmae: 'Smiling Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
    },
    {
        id: 9,
        emojiNmae: 'Smiling Emoji with Eyes Opened',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1571606036',
    },
    {
        id: 10,
        emojiNmae: 'Smiling Emoji with Smiling Eyes',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
    },
    {
        id: 11,
        emojiNmae: 'Smiling Face with Tightly Closed eyes',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Tightly_Closed_eyes_large.png?v=1571606036',
    },
    {
        id: 12,
        emojiNmae: 'Smirk Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
    },
    {
        id: 13,
        emojiNmae: 'Unamused Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
    },
    {
        id: 14,
        emojiNmae: 'Sad Face Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037',
    },
    {
        id: 15,
        emojiNmae: 'Relieved Emoji',
        status: 'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Relieved_Emoji_large.png?v=1571606037',
    }
]);

const [emojislist, setEmojisList] = React.useState([
  {
      id: 0,
      emojiNmae: 'Smiling Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
  },
  {
      id: 1,
      emojiNmae: 'Smiling Emoji with Eyes Opened',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1571606036',
  },
  {
      id: 2,
      emojiNmae: 'Smiling Emoji with Smiling Eyes',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
  },
  {
      id: 3,
      emojiNmae: 'Smiling Face with Tightly Closed eyes',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Tightly_Closed_eyes_large.png?v=1571606036',
  },
  {
      id: 4,
      emojiNmae: 'Smirk Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
  },
  {
      id: 5,
      emojiNmae: 'Unamused Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
  },
  {
      id: 6,
      emojiNmae: 'Sad Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037',
  },
  {
      id: 7,
      emojiNmae: 'Relieved Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Relieved_Emoji_large.png?v=1571606037',
  },
  {
      id: 8,
      emojiNmae: 'Smiling Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
  },
  {
      id: 9,
      emojiNmae: 'Smiling Emoji with Eyes Opened',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1571606036',
  },
  {
      id: 10,
      emojiNmae: 'Smiling Emoji with Smiling Eyes',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
  },
  {
      id: 11,
      emojiNmae: 'Smiling Face with Tightly Closed eyes',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Tightly_Closed_eyes_large.png?v=1571606036',
  },
  {
      id: 12,
      emojiNmae: 'Smirk Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
  },
  {
      id: 13,
      emojiNmae: 'Unamused Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
  },
  {
      id: 14,
      emojiNmae: 'Sad Face Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037',
  },
  {
      id: 15,
      emojiNmae: 'Relieved Emoji',
      status: 'hidden',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Relieved_Emoji_large.png?v=1571606037',
  }
]);

  return (
    <div className="App">
     <Header matchRef={matchRef} time={time} setTime={setTime} intervalRef={intervalRef} resetTime={resetTime} startTimer={startTimer}mainEmojislist={mainEmojislist}matchedCards={matchedCards} setMatchedCards={setMatchedCards} emojislist={emojislist} setEmojisList={setEmojisList} setSteps={setSteps} minSteps={minSteps} steps={steps} setMinSteps={setMinSteps}/>
      <Body  startTimer={startTimer} intervalRef={intervalRef} resetTime={resetTime} matchedCards={matchedCards} setMatchedCards={setMatchedCards} emojislist={emojislist} setEmojisList={setEmojisList} setSteps={setSteps} minSteps={minSteps} steps={steps} setMinSteps={setMinSteps} matchRef={matchRef}/>
      <Footer   emojislist={emojislist} setEmojisList={setEmojisList} setSteps={setSteps} minSteps={minSteps} steps={steps} setMinSteps={setMinSteps}/>
    </div>
  );
}

export default App;
