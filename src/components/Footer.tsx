interface IProps {
  theme: "dark" | "light";
}

const Footer: React.FC<IProps> = ({ theme }) => {
  return (
    <footer
      className={` ${
        theme === "dark"
          ? "bg-black border-t text-white border-white/5"
          : "bg-samsung-light text-black"
      }`}
    >
      <div className="container text-center py-4">
        Created by{" "}
        <a
          className="font-bold hover:underline inline-block hover:text-black/90 transition-opacity duration-150"
          href="https://almarrr.nl"
        >
          Almar Groenewald
        </a>
      </div>
    </footer>
  );
};

export default Footer;
