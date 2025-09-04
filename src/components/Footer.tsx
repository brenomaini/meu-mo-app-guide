const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-text-secondary">
          <p className="text-sm">
            © {currentYear} Reserva Parque Clube - Manual Digital da Comunidade
          </p>
          <p className="text-xs mt-1">
            Desenvolvido para facilitar a vida dos moradores
          </p>
          <p className="text-xs mt-2">
            <a
              href="https://github.com/brenomaini/meu-mo-app-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary/80"
            >
              GitHub: brenomaini/meu-mo-app-guide
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
