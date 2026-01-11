const Background = () => {
  return (
    <>
      {/* Noise Overlay */}
      <div className="bg-noise" />

      {/* Background Orbs */}
      <div className="orb w-96 h-96 bg-purple-600 top-0 left-0 animate-pulse-slow" />
      <div
        className="orb w-80 h-80 bg-blue-600 bottom-0 right-0 animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="orb w-64 h-64 bg-pink-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />
    </>
  );
};

export default Background;


