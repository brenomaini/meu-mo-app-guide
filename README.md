# Manual Digital do Residencial Parque do Clube

## Sobre o Projeto

O **Manual Digital do Residencial Parque do Clube** é uma aplicação web moderna que centraliza todas as informações essenciais para os moradores do condomínio. O projeto oferece acesso fácil e intuitivo a:

- 📋 Guia completo do morador
- 🗺️ Mapas interativos dos espaços e churrasqueiras
- 📞 Contatos úteis
- 🔗 Sistema de reservas integrado
- 📱 Interface responsiva para todos os dispositivos

**URL do Projeto**: https://manualrpc.vercel.app

## Como Colaborar

**Este projeto é aberto à colaboração de todos os moradores!** 🏢✨

Você pode contribuir de várias maneiras:

### 1. Reportar Problemas ou Sugestões
- Abra uma [Issue](https://github.com/seu-usuario/meu-mo-app-guide/issues) para reportar bugs ou sugerir melhorias
- Descreva claramente o problema ou sugestão
- Inclua capturas de tela se necessário

### 2. Contribuir com Código
Se você tem conhecimento técnico, pode:
- Fazer fork do repositório
- Criar uma branch para suas alterações
- Enviar um Pull Request com suas melhorias

### 3. Atualizar Informações
Ajude a manter o manual sempre atualizado:
- Informações de contatos
- Novos espaços ou equipamentos
- Correções de horários e procedimentos
- Atualizações de empresas homologadas

## Como Editar o Código

### Pré-requisitos
- Node.js & npm instalados - [instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Git configurado

### Passos para Desenvolvimento Local

```sh
# Passo 1: Clone o repositório
git clone https://github.com/seu-usuario/meu-mo-app-guide.git

# Passo 2: Navegue para o diretório do projeto
cd meu-mo-app-guide

# Passo 3: Instale as dependências
npm install

# Passo 4: Inicie o servidor de desenvolvimento
npm run dev
```

### Fazendo Alterações

```sh
# 1. Faça suas alterações no código
# 2. Teste localmente com npm run dev
# 3. Faça commit das alterações
git add .
git commit -m "Descrição clara das alterações"

# 4. Envie para o GitHub
git push origin main
```

**Deploy Automático**: Todas as alterações enviadas para o branch `main` são automaticamente deployadas na Vercel! 🚀

## Tecnologias Utilizadas

Este projeto foi construído com tecnologias modernas:

- **Vite** - Build tool rápido e moderno
- **TypeScript** - JavaScript com tipagem estática
- **React** - Biblioteca para interfaces de usuário
- **shadcn/ui** - Componentes de UI elegantes
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e consistentes

## Deploy e Infraestrutura

- **Hospedagem**: Vercel
- **Domínio**: manualrpc.vercel.app
- **Deploy**: Automático via GitHub
- **SSL**: Habilitado automaticamente

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do shadcn/ui
│   ├── Layout.tsx      # Layout principal
│   ├── Header.tsx      # Cabeçalho
│   └── Interactive*.tsx # Mapas interativos
├── pages/              # Páginas da aplicação
│   ├── Manual.tsx      # Guia do morador
│   ├── MapasEspacos.tsx # Mapas dos espaços
│   ├── MapasChurrasqueiras.tsx # Mapas das churrasqueiras
│   └── Contatos.tsx    # Contatos úteis
├── assets/             # Imagens e recursos
└── lib/                # Utilitários e configurações
```

## Para Administradores

### Atualizando Informações de Reserva
Os IDs dos itens de reserva estão mapeados nos arquivos:
- `src/components/InteractiveCondominiumMap.tsx`
- `src/components/InteractiveChurrasqueirasMap.tsx`

### Adicionando Novos Espaços
1. Atualize os dados nos componentes de mapa
2. Adicione as coordenadas corretas
3. Configure os links de reserva apropriados

## Licença

Este projeto é de código aberto e está disponível para todos os moradores do Residencial Parque do Clube.

## Contato

Para dúvidas técnicas ou sugestões sobre o projeto, entre em contato através dos canais oficiais do condomínio ou abra uma issue neste repositório.

---

**Desenvolvido com ❤️ para a comunidade do Residencial Parque do Clube**
