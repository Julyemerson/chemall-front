export function Footer() {
  return (
    <footer className="flex flex-col gap-8 px-5 py-10 mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap items-start justify-around gap-8 text-left">
        <div className="flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold">Institucional</h3>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Sobre Nós</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Trabalhe Conosco</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Imprensa</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold">Atendimento ao Cliente</h3>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Fale Conosco</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Meus Pedidos</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">FAQ</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold">Políticas</h3>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Política de Privacidade</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Termos de Serviço</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal" href="#">Política de Devolução</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold">Contato</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">email@chembiz.com</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm">(11) 99999-9999</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">© 2023 ChemBiz. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
