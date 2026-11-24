import { useState } from "react";
import {
  FiMic,
  FiSend,
  FiVolume2,
  FiTrash2,
  FiUser,
  FiCpu,
} from "react-icons/fi";

function VoiceAssistant() {
  const [language, setLanguage] = useState("en");
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am Agri-Sahayak. Ask me anything about farming, crops, fertilizers, diseases or market prices.",
    },
  ]);

  const getResponse = (question) => {
    const q = question.toLowerCase();

    if (language === "hi") {
      if (q.includes("गेहूं") || q.includes("wheat")) {
        return "गेहूं की अच्छी फसल के लिए उचित सिंचाई, संतुलित उर्वरक और खरपतवार नियंत्रण जरूरी है।";
      }

      if (q.includes("चावल") || q.includes("rice")) {
        return "चावल की फसल में पानी का उचित प्रबंधन और नाइट्रोजन की संतुलित मात्रा महत्वपूर्ण है।";
      }

      if (
        q.includes("बीमारी") ||
        q.includes("रोग") ||
        q.includes("disease")
      ) {
        return "फसल में बीमारी के लक्षण दिखाई देने पर प्रभावित पत्तियों को अलग करें और उचित कृषि विशेषज्ञ की सलाह लें।";
      }

      if (
        q.includes("खाद") ||
        q.includes("उर्वरक") ||
        q.includes("fertilizer")
      ) {
        return "उर्वरक का उपयोग मिट्टी की जांच और फसल की आवश्यकता के अनुसार करना चाहिए।";
      }

      if (
        q.includes("बाजार") ||
        q.includes("मंडी") ||
        q.includes("market")
      ) {
        return "बेहतर कीमत के लिए अलग-अलग मंडियों की कीमतों की तुलना करें और फसल बेचने से पहले बाजार की स्थिति देखें।";
      }

      return "मैं खेती, फसल रोग, उर्वरक, सिंचाई, मंडी और कृषि संबंधी सामान्य जानकारी में आपकी सहायता कर सकता हूं।";
    }

    if (q.includes("wheat") || q.includes("गेहूं")) {
      return "For healthy wheat crops, maintain proper irrigation, balanced fertilizer application and effective weed management.";
    }

    if (q.includes("rice") || q.includes("चावल")) {
      return "For rice farming, proper water management and balanced nitrogen application are important for healthy crop growth.";
    }

    if (
      q.includes("disease") ||
      q.includes("crop disease") ||
      q.includes("रोग")
    ) {
      return "If you notice disease symptoms, isolate affected leaves and use appropriate treatment recommended for the specific crop disease.";
    }

    if (
      q.includes("fertilizer") ||
      q.includes("fertiliser") ||
      q.includes("खाद")
    ) {
      return "Use fertilizers according to soil-test results and the nutrient requirements of your crop.";
    }

    if (
      q.includes("market") ||
      q.includes("mandi") ||
      q.includes("price") ||
      q.includes("मंडी")
    ) {
      return "Compare prices across nearby mandis before selling your crop and choose the market offering suitable returns.";
    }

    if (
      q.includes("water") ||
      q.includes("irrigation") ||
      q.includes("सिंचाई")
    ) {
      return "Irrigate according to the crop's growth stage, soil moisture and local weather conditions. Avoid unnecessary irrigation.";
    }

    return "I can help you with crop diseases, fertilizers, irrigation, farming practices, mandi prices and other agricultural questions.";
  };

const speakResponse = (text) => {
  if (!window.speechSynthesis) {
    alert("Speech is not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.rate = 0.85;
  speech.pitch = 1;
  speech.volume = 1;

  if (language === "hi") {
    speech.lang = "hi-IN";
  } else {
    speech.lang = "en-IN";
  }

  speech.onstart = () => {
    console.log("Speech started:", language);
  };

  speech.onend = () => {
    console.log("Speech finished");
  };

  speech.onerror = (event) => {
    console.error("Speech error:", event.error);
  };

  // Chrome/Brave sometimes loads voices asynchronously
  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    const preferredVoice = voices.find(
      (voice) =>
        voice.lang.toLowerCase() ===
        (language === "hi" ? "hi-in" : "en-in")
    );

    if (preferredVoice) {
      speech.voice = preferredVoice;
    }
  }

  window.speechSynthesis.speak(speech);
};

  const sendMessage = (text = input) => {
    const question = text.trim();

    if (!question) return;

    const answer = getResponse(question);

    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: question,
      },
      {
        sender: "bot",
        text: answer,
      },
    ]);

    setInput("");

    setTimeout(() => {
      speakResponse(answer);
    }, 100);
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice recognition is not supported in this browser. Please use a supported browser."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = language === "hi" ? "hi-IN" : "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setInput(transcript);

      setTimeout(() => {
        sendMessage(transcript);
      }, 200);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const clearConversation = () => {
    setMessages([
      {
        sender: "bot",
        text:
          language === "hi"
            ? "नमस्ते! मैं Agri-Sahayak हूं। खेती से संबंधित कोई भी सवाल पूछें।"
            : "Hello! I am Agri-Sahayak. Ask me anything about farming.",
      },
    ]);
  };

  const quickQuestions =
    language === "hi"
      ? ["गेहूं की देखभाल कैसे करें?", "फसल में रोग कैसे रोकें?", "उर्वरक कब डालें?"]
      : [
          "How should I take care of wheat?",
          "How can I prevent crop diseases?",
          "When should I use fertilizer?",
        ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-green-100 font-semibold mb-3">
            AI Farming Assistant
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "hi"
              ? "किसानों का स्मार्ट वॉइस असिस्टेंट"
              : "Smart Voice Assistant for Farmers"}
          </h1>

          <p className="max-w-2xl mx-auto text-green-50">
            {language === "hi"
              ? "हिंदी या अंग्रेजी में खेती से संबंधित सवाल पूछें।"
              : "Ask farming questions in Hindi or English using your voice or text."}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center p-5 border-b">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Agri-Sahayak AI
              </h2>

              <p className="text-sm text-gray-500">
                {language === "hi"
                  ? "कृषि सहायता के लिए पूछें"
                  : "Ask your farming question"}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  language === "en"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLanguage("hi")}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  language === "hi"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                हिंदी
              </button>

              <button
                onClick={clearConversation}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                title="Clear conversation"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[420px] overflow-y-auto p-5 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <FiCpu />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <p>{message.text}</p>

                  {message.sender === "bot" && (
                    <button
                      onClick={() => speakResponse(message.text)}
                      className="mt-2 flex items-center gap-2 text-xs font-semibold text-green-700"
                    >
                      <FiVolume2 />
                      Listen
                    </button>
                  )}
                </div>

                {message.sender === "user" && (
                  <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white shrink-0">
                    <FiUser />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-5 pb-4">
            <p className="text-sm font-semibold text-gray-600 mb-3">
              {language === "hi" ? "त्वरित सवाल" : "Quick questions"}
            </p>

            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  className="px-3 py-2 text-sm border border-green-200 text-green-700 rounded-full hover:bg-green-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-5 border-t bg-gray-50">
            <div className="flex gap-2">
              <button
                onClick={startListening}
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${
                  listening
                    ? "bg-red-500 animate-pulse"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                title="Voice input"
              >
                <FiMic className="text-xl" />
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder={
                  language === "hi"
                    ? "अपना सवाल लिखें..."
                    : "Type your farming question..."
                }
                className="flex-1 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                onClick={() => sendMessage()}
                className="w-12 h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
              >
                <FiSend />
              </button>
            </div>

            {listening && (
              <p className="text-sm text-red-500 mt-3 text-center font-medium">
                {language === "hi"
                  ? "🎙️ सुन रहा हूं..."
                  : "🎙️ Listening..."}
              </p>
            )}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <FiMic className="text-2xl text-green-600 mb-3" />
            <h3 className="font-bold text-gray-800">
              {language === "hi" ? "वॉइस इनपुट" : "Voice Input"}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {language === "hi"
                ? "बोलकर अपना सवाल पूछें।"
                : "Ask your question using your voice."}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <FiCpu className="text-2xl text-green-600 mb-3" />
            <h3 className="font-bold text-gray-800">
              {language === "hi" ? "स्मार्ट जवाब" : "Smart Responses"}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {language === "hi"
                ? "कृषि संबंधी सवालों के जवाब प्राप्त करें।"
                : "Get instant responses to common farming questions."}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <FiVolume2 className="text-2xl text-green-600 mb-3" />
            <h3 className="font-bold text-gray-800">
              {language === "hi" ? "जवाब सुनें" : "Listen to Answers"}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {language === "hi"
                ? "AI का जवाब आवाज में सुनें।"
                : "Listen to the assistant's response."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VoiceAssistant;