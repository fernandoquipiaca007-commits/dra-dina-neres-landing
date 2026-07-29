import logoSemFundo from '../assets/logo_sem_fundo.png';

export function Header() {
  return (
    <header className="bg-forest py-12 md:py-16 lg:py-20 px-6 flex justify-center items-center w-full border-b border-forest-dark/40 shadow-sm">
      <div className="flex justify-center items-center w-full max-w-3xl">
        <img
          src={logoSemFundo}
          alt="Diná Neres Advocacia e Consultoria"
          className="h-44 sm:h-52 md:h-64 lg:h-72 xl:h-80 w-auto max-w-full object-contain filter drop-shadow-sm"
        />
      </div>
    </header>
  );
}
