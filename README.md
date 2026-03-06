# DesafioBclouder

Este projeto foi gerado por  [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

## Tecnologias

![Angular](https://img.shields.io/badge/Angular-20-red)
![Node](https://img.shields.io/badge/Node.js-LTS-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)
![License](https://img.shields.io/badge/license-MIT-blue)

## Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

Node.js (versão LTS recomendada)

npm ou yarn

Angular CLI

Instalar Angular CLI globalmente: ``` npm install -g @angular/cli ```

Verificar instalação: ``` ng version ```

## Como baixar o projeto

Clone o repositório: ``` git clone https://github.com/DomeniqueRosa/desafio_bclouder.git ```

Entre na pasta do projeto: ``` cd desafio-bclouder ```

## Rodar o projeto

Execute o servidor de desenvolvimento: ```ng serve ```

A aplicação estará disponível em: http://localhost:4200

## Estrutura do Projeto

A aplicação segue uma organização baseada em responsabilidades para facilitar manutenção, escalabilidade e reutilização de código.

```
src/app
 ├── components
 ├── models
 ├── pages
 └── services
```

- Components: Contem os componentes reutilizáveis da interface,como navbar, searc-filter e cards.

- Pages: Contém os componentes de página, que representam as telas principais da aplicação. - Exemplo: página de listagem de países (Home) e página de detalhes (DetailCountry)

- Models: Contém a model que faz a  tipagens dos dados vindo da API.

- Services: Contém os serviços responsáveis pela comunicação com API.

Esses serviços são injetados nos componentes ou páginas utilizando Dependency Injection do Angular.

## Decisões Técnicas

### Angular 20

O projeto foi desenvolvido utilizando Angular 20, aproveitando as melhorias recentes do framework, como melhor performance, suporte aprimorado a Signals e uma arquitetura mais reativa.

### Tailwind CSS

Foi utilizado Tailwind CSS para estilização da aplicação.

Motivos da escolha: Desenvolvimento de interfaces mais rápido, Estilização diretamente no HTML através de classes utilitárias, Redução de CSS customizado, Melhor manutenção e consistência visual

### Mobile First

A aplicação foi desenvolvida utilizando a abordagem **mobile-first**, priorizando a experiência em dispositivos móveis e depois adaptando para telas maiores.

### Angular Signals

Implementação de Signals para controle e acompanhamento do estado da aplicação, permitindo supervisionar a comunicação com a API e o recebimento de informações, além de possibilitar o tratamento de estados de carregamento (loading) e erros

Motivos da escolha:

Reatividade mais simples e previsível

Melhor performance 

Atualização automática da UI quando o valor do signal muda

Autora

Desenvolvido por Alires Rosa

GitHub:
https://github.com/DomeniqueRosa
