interface IIconAIProps {
  size?: number;
}

export const IconAI = ({ size = 48 }: IIconAIProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.923 18.4616L39.2307 13.3847L44.3076 11.077L39.2307 8.76931L36.923 3.69238L34.6153 8.76931L29.5384 11.077L34.6153 13.3847L36.923 18.4616ZM23.0769 19.3847L18.4615 9.23084L13.8461 19.3847L3.69226 24.0001L13.8461 28.6155L18.4615 38.7693L23.0769 28.6155L33.2307 24.0001L23.0769 19.3847ZM36.923 29.5385L34.6153 34.6155L29.5384 36.9232L34.6153 39.2308L36.923 44.3078L39.2307 39.2308L44.3076 36.9232L39.2307 34.6155L36.923 29.5385Z"
        fill="url(#paint0_linear_149_5841)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_149_5841"
          x1="3.69226"
          y1="24.0001"
          x2="44.3076"
          y2="24.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7DEFA4" />
          <stop offset="1" stopColor="#00BEE8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
