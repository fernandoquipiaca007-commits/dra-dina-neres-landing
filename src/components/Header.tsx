import logoSemFundo from '../assets/logo_sem_fundo.png';

export function Header() {
  return (
    <header className="bg-forest py-10 md:py-14 lg:py-16 px-6 flex justify-center items-center w-full border-b border-forest-dark/40 shadow-sm">
      <div className="flex justify-center items-center w-full max-w-4xl">
        <img
          src={logoSemFundo}
          alt="Diná Neres Advocacia e Consultoria"
          className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto max-w-full object-contain filter drop-shadow-sm"
        />
      </div>
    </header>
  );
}
