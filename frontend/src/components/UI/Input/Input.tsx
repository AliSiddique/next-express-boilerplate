interface CardProps {
    title: string;
    showSub: boolean;
    rounded: boolean;
    textColour: string;
    children: React.ReactNode;
  }
  const Button = ({ title, showSub, textColour, rounded, children }:CardProps) => {
    return (
      <button
      className={`group ${rounded ? 'rounded-full' : 'rounded-none'}  px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9]  text-[${textColour}] no-underline active:scale-95 scale-100 duration-75`}
      style={{
        boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
      }}
    >
      <span className="mr-2"> {title}</span>
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.75 6.75L19.25 12L13.75 17.25"
          stroke="#1E2B3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 12H4.75"
          stroke="#1E2B3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    );
  };
  
  export default Button;
  