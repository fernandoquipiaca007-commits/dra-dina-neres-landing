import logoSemFundo from '../assets/logo_sem_fundo.png';

export function Header() {
  return (
    <header className="bg-forest py-5 sm:py-6 md:py-7 lg:py-8 px-6 flex justify-center items-center w-full border-b border-forest-dark/30 shadow-sm">
      <div className="flex justify-center items-center w-full max-w-2xl">
        <img
          src={logoSemFundo}
          alt="Diná Neres Advocacia e Consultoria"
          className="h-20 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto max-w-full object-contain filter drop-shadow-sm"
        />
      </div>
    </header>
  );
}
