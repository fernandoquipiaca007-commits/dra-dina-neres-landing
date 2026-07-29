import logoImg from '../assets/logo.jpeg';

export function Header() {
  return (
    <header className="bg-forest py-6 px-4 flex justify-center items-center border-b border-forest-dark/30 shadow-sm">
      <div className="flex justify-center items-center">
        <img
          src={logoImg}
          alt="Diná Neres Advocacia e Consultoria"
          className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </header>
  );
}
