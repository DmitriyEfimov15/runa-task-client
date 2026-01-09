const CenterFlex: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="min-h-screen flex justify-center items-center">{children}</div>;
};

export default CenterFlex;
