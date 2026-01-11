import PropTypes from 'prop-types';

const ToolCard = ({ tool }) => {
  const {
    title,
    description,
    icon,
    link,
    isActive,
    bgColor,
    shadowColor,
    hoverShadow,
    buttonBg,
    buttonShadow,
    hoverColor,
    decorBg
  } = tool;

  if (!isActive) {
    // Disabled/Coming Soon Card
    return (
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col h-full border-white/5">
        <div className="relative z-10 flex flex-col flex-grow opacity-75">
          <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 border border-white/10">
            <i className={`${icon} text-2xl text-gray-400`} />
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-300 font-heading">
            {title}
          </h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed flex-grow">
            {description}
          </p>

          {/* Disabled Button State */}
          <div className="mt-auto inline-flex items-center justify-between w-full px-5 py-3 bg-white/5 border border-white/5 rounded-xl text-gray-500 cursor-not-allowed select-none">
            <span className="font-semibold text-sm">Coming Soon</span>
            <i className="fa-solid fa-lock text-xs opacity-50" />
          </div>
        </div>
      </div>
    );
  }

  // Active Card
  return (
    <div
      className={`glass-card rounded-2xl p-6 group cursor-pointer relative overflow-hidden flex flex-col h-full ${hoverShadow}`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${decorBg} rounded-bl-[100px] -mr-8 -mt-8 transition-all pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        <div
          className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-6 shadow-lg ${shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
        >
          <i className={`${icon} text-2xl text-white`} />
        </div>

        <h3
          className={`text-xl font-bold mb-3 text-white ${hoverColor} transition-colors font-heading`}
        >
          {title}
        </h3>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center justify-between w-full px-5 py-3 ${buttonBg} rounded-xl text-white transition-all duration-300 shadow-lg ${buttonShadow}`}
        >
          <span className="font-semibold text-sm">Launch Tool</span>
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

ToolCard.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    bgColor: PropTypes.string,
    shadowColor: PropTypes.string,
    hoverShadow: PropTypes.string,
    buttonBg: PropTypes.string,
    buttonShadow: PropTypes.string,
    hoverColor: PropTypes.string,
    decorBg: PropTypes.string
  }).isRequired
};

export default ToolCard;


