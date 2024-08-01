/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      daisyui: {
        theme: ["light", "dark", "automn"],
      },
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem", // 14px
        4: "1rem", // 16px
        5: "1.25rem", // 18px
        6: "1.5rem", // 20px
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem", // 40px
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        22: "5.4375rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        54: "13.5625",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
