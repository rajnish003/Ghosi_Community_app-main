import { useState, useContext, useEffect, useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { DataContext } from "../App";

const YouthVocal = () => {
  const { cardData } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [expandedCards, setExpandedCards] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  // Adjust number of visible cards based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 640 ? 1 : 2);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => (window.removeEventListener("resize", updateCardsPerSlide));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cardData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cardData.length - 1
    );
  };

  const toggleExpanded = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Add longer text content for demonstration
  const getExtendedText = (originalText, cardId) => {
    const extendedTexts = {
      1: "This is very good platform to unite all like-minded ghosi people at one station. Through this platform, we can share our experiences, knowledge, and support each other in various aspects of life. The community bonding that this website fosters is truly remarkable and helps us stay connected with our roots while embracing modern technology.",
      2: "We should support each other and must have increased our networking through this Website. This platform provides us with opportunities to collaborate on various projects, share professional opportunities, and help each other grow both personally and professionally. The networking capabilities here are invaluable for our community's progress.",
      3: "This website will help us to know each other and support each other. It serves as a bridge between different generations of our community, allowing us to learn from each other's experiences and wisdom. The cultural exchange and mutual support system it creates is essential for our community's development.",
      4: "Thank you, Ghosi.in, for illuminating our paths with insightful content and bringing our community closer together. The platform has become a source of inspiration and knowledge sharing, helping us preserve our cultural heritage while adapting to modern times. It's a wonderful initiative that strengthens our community bonds.",
      5: "Ghosi.in एक अद्वितीय प्लेटफ़ॉर्म है, जो हमारी संस्कृति, शऊर, और समाजी एकजुटता का अक्स पेश करता है। यह दिखाता है कि आज का नौजवान सिर्फ़ अपने भविष्य के लिए नहीं, बल्कि अपने समाज और तहज़ीब की सेवा के लिए भी उत्साहित और एकजुट है। Ghosi.in जैसी कोशिशें हमारे लिए फ़ख़्र की बात हैं, जो साबित करती हैं कि इल्म, आगाही, और फ़िक्र अब भी ज़िंदा हैं। यह प्लेटफ़ॉर्म हमारी पुरानी परंपराओं को नई तकनीक के साथ जोड़कर एक बेहतर भविष्य बनाने में मदद कर रहा है।"
    };
    return extendedTexts[cardId] || originalText;
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="relative text-center max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-400 py-3 px-6 rounded-xl shadow-md mt-5 mx-[25%]">
        Youth Vocal
      </h3>

      <div className="relative w-full overflow-hidden p-5">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white px-4 py-2 rounded-full shadow-md z-10"
        >
          ◀
        </button>

        {/* Cards Container with Touch Support */}
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerSlide}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {cardData.map((user) => (
            <div key={user.id} className="w-full sm:w-1/2 p-3 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                    src={user.image}
                    alt={user.name || "User Profile"}
                  />
                </div>
                <div className="mt-6">
                  <p className="font-bold text-2xl text-gray-800">{user.name}</p>
                  <p className="text-violet-500 uppercase text-sm mt-1">{user.job}</p>
                </div>
                <div className="mt-4 relative bg-gray-100 p-4 rounded-xl shadow-inner">
                  <FaQuoteLeft className="text-violet-400 text-xl absolute -top-4 left-4" />
                  <div className="text-gray-700 text-sm md:text-base px-2">
                    {expandedCards[user.id] ? (
                      <p>{getExtendedText(user.text, user.id)}</p>
                    ) : (
                      <p>{user.text.length > 100 ? `${user.text.substring(0, 100)}...` : user.text}</p>
                    )}
                  </div>
                  <FaQuoteRight className="text-violet-400 text-xl absolute -bottom-4 right-4" />
                  
                  {/* Read More Button */}
                  {user.text.length > 100 && (
                    <button
                      onClick={() => toggleExpanded(user.id)}
                      className="mt-3 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      {expandedCards[user.id] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white px-4 py-2 rounded-full shadow-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default YouthVocal;
