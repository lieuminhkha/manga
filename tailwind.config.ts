import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        gw: "#38DC60",
        lg: "#212529",
        btn: "#7e1025",
        btn1: "#9c1b33",
      },
      fontSize: {
        "20": "20px",
        "40": "40px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
      },
      padding: {
        "5": "5px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "30": "30px",
        "40": "40px",
      },
      borderRadius: {
        "5": "5px",
        "10": "10px",
      },
      width: {
        content: "84%",
      },
      spacing: {
        "37": "37px",
        "45": "45px",
      },
      colors: {
        y: "#FFA500",
        g30: "#303030",
        rw: "#ff6347",
        g48: "rgb(48,48,48)",
        bb: "#007bff",
        gc: "#6f6f6f",
        gw: "#c1c1c1",
        lg1: "#212529",
      },
      boxShadow: {
        "1": "0 0 40px 2px rgba(128, 128, 128, 0.8)",
        "2": "0px 4px 27px rgba(0, 0, 0, 0.07)",
        "3": "0 2 5px 10px rgba(0,0,0,0.1)",
      },
      borderColor: {
        125: "rgba(0,0,0,.125)",
      },
    },
  },
  plugins: [],
};
export default config;
