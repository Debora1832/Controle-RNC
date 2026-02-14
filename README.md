 # Sistema de Controle RNC 8D

Sistema de gestão de RNC (Relatório de Não Conformidade) utilizando a metodologia 8D, com integração Firebase para autenticação e persistência de dados.

## 🚀 Funcionalidades

- ✅ Autenticação de usuários com Firebase Authentication
- ✅ Armazenamento de dados no Firestore
- ✅ Metodologia 8D completa (8 disciplinas)
- ✅ Dashboard com métricas e estatísticas
- ✅ Controle de prazos e reprazos
- ✅ Filtros por status e responsável
- ✅ Interface moderna e responsiva

## 📋 Pré-requisitos

- Node.js 16+ instalado
- Conta no Firebase (gratuita)
- Navegador moderno (Chrome, Firefox, Edge, Safari)

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Debora1832/Controle-RNC.git
cd Controle-RNC
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Firebase

#### 3.1. Crie um projeto no Firebase Console

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Siga os passos para criar seu projeto

#### 3.2. Ative a Autenticação

1. No menu lateral, clique em "Authentication"
2. Clique em "Começar"
3. Ative o método "E-mail/senha"

#### 3.3. Crie o banco de dados Firestore

1. No menu lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha o modo de produção
4. Selecione a localização (recomendado: southamerica-east1)

#### 3.4. Configure as regras de segurança

Copie o conteúdo do arquivo `firestore.rules` para as regras do Firestore no Firebase Console.

#### 3.5. Ative o Storage (opcional)

1. No menu lateral, clique em "Storage"
2. Clique em "Começar"
3. Copie o conteúdo do arquivo `storage.rules` para as regras do Storage

#### 3.6. Crie um usuário de teste

No Firebase Console, vá em Authentication > Users e adicione um usuário de teste:
- Email: debora@empresa.com
- Senha: 123456 (ou outra de sua preferência)

### 4. Execute o projeto

#### Modo desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

#### Build para produção

```bash
npm run build
```

Os arquivos de produção estarão na pasta `dist/`

#### Preview da build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
Controle-RNC/
├── src/
│   ├── config/
│   │   └── firebase.js          # Configuração do Firebase
│   ├── services/
│   │   ├── authService.js       # Serviço de autenticação
│   │   └── rncService.js        # Serviço CRUD de RNCs
│   └── utils/
│       └── firebaseHelpers.js   # Utilitários Firebase
├── index.html                   # Página principal
├── package.json                 # Dependências do projeto
├── vite.config.js              # Configuração Vite
├── firestore.rules             # Regras Firestore (referência)
├── storage.rules               # Regras Storage (referência)
└── README.md                   # Este arquivo
```

## 🔐 Segurança

### Regras do Firestore

As regras de segurança do Firestore garantem que:
- Apenas usuários autenticados podem ler/criar/atualizar RNCs
- Apenas administradores podem deletar RNCs
- Usuários só podem editar seus próprios dados

### Credenciais Firebase

⚠️ **IMPORTANTE**: As credenciais Firebase estão atualmente no código para facilitar a configuração inicial. Para uso em produção:

1. Crie um arquivo `.env` na raiz do projeto
2. Mova as credenciais para variáveis de ambiente
3. Atualize `src/config/firebase.js` para usar as variáveis de ambiente

## 📖 Metodologia 8D

O sistema implementa as 8 disciplinas da metodologia 8D:

1. **D1 - Equipe**: Formar equipe multifuncional
2. **D2 - Problema**: Descrever o problema
3. **D3 - Contenção**: Implementar ações de contenção
4. **D4 - Causa Raiz**: Identificar causa raiz (5 Porquês)
5. **D5 - Ações Corretivas**: Definir ações corretivas
6. **D6 - Implementação**: Implementar ações permanentes
7. **D7 - Prevenção**: Prevenir recorrência
8. **D8 - Encerramento**: Reconhecer equipe e lições aprendidas

## 🎯 Como Usar

### Login

1. Acesse o sistema
2. Use as credenciais configuradas no Firebase Authentication
3. Clique em "Acessar"

### Dashboard

- Visualize métricas gerais das RNCs
- Filtre por status (Em Dia, Em Risco, Atrasadas, Concluídas)
- Acompanhe tendências mensais

### Controle 8D

- Visualize todas as RNCs cadastradas
- Clique em uma RNC para ver detalhes
- Navegue pelas 8 disciplinas usando as abas
- Salve as alterações em cada fase

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👩‍💻 Autora

Débora Silva

## 🌐 Deploy

Deploy disponível em: https://debora1832.github.io/Controle-RNC/
