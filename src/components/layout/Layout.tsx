import React from "react";
import { useTheme } from "../../utils/themeProvider";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className="text-xs md:min-w-full truncate"
      style={{
        color: theme.foreground,
      }}
    >
      <main
        className="text-clip w-full h-full p-2"
        style={{
          background: theme.background,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
