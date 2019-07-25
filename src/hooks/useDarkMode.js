import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage(false);
  console.log(isDark);

  useEffect(
    isDark => {
      if (isDark === true) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    },
    [isDark]
  );

  return [isDark, setIsDark];
};

export default useDarkMode;
