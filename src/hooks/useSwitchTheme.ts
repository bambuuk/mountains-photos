import { useEffect, useState } from 'react'

const useSwitchTheme = () => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem('mountainsTheme');
    return storedTheme !== null ? storedTheme : 'light';
  });

  const switchTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('mountainsTheme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('mountainsTheme', 'light');
      setTheme('light');
    }
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    switchTheme,
    theme,
  }
}

export default useSwitchTheme;
