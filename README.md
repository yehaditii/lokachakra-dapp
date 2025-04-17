##Lokachakra dApp:

A decentralized innovation platform enabling students, mentors, investors, and researchers to collaborate, build, and grow together. Built with Web3 technologies, AI integration, and privacy-preserving zk-ID features.

---

##🚀 Features

- 🧠 AI Assistant (OpenAI): Idea coaching, legal help
- 👤 zk-ID Integration: Privacy-preserving onboarding using Semaphore/ZKPass
- 🗳️ DAO Governance: Proposal creation, voting, treasury control
- 🧾 Mentor NFTs: Mint NFTs as proof of mentorship and contribution
- 💰 Token Staking & Rewards: Staking smart contract for fair tokenized incentives
- 🌐 IPFS Integration: Decentralized storage for NFT metadata
## 🧱 Project Structure

```
lokachakra-dapp/
│
├── frontend/                # React App
│   ├── src/
│   │   ├── components/     # Role-based dashboards, forms
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── .env                # OpenAI API Key, etc.
│
├── smart-contracts/        # Solidity smart contracts
│   ├── MentorNFT.sol
│   ├── DAOProposal.sol
│   └── Staking.sol
│
├── backend/                # IPFS uploader, AI agent integration
│   ├── ipfs.js             # NFT metadata uploader
│   ├── openaiAgent.js      # AI advisor route
│   └── server.js           # Node.js express server
│
└── README.md
```

---

## 🔧 Tech Stack

- 🖥️ **Frontend**: React, TailwindCSS, React Router
- ⚙️ **Smart Contracts**: Solidity, Hardhat
- 💬 **AI Integration**: OpenAI API
- ☁️ **Storage**: IPFS (via nft.storage)
- 🔐 **zk-ID**: Semaphore, ZKPass (simulated)

---

## 🧪 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/lokachakra-dapp.git
cd lokachakra-dapp
```

### 2. Install Dependencies
```bash
cd frontend
npm install
cd ../smart-contracts
npm install --save-dev hardhat
cd ../backend
npm install
```

### 3. Setup Environment

Create a `.env` file in `frontend/`:
```env
REACT_APP_OPENAI_API_KEY=your_api_key
```

### 4. Compile and Deploy Smart Contracts
```bash
cd smart-contracts
npx hardhat compile
npx hardhat run scripts/deploy.js --network hardhat
```

### 5. Start Frontend
```bash
cd frontend
npm start
```

### 6. Start Backend Server
```bash
cd backend
node server.js
```

---

## 📝 Smart Contracts Overview

### 🧾 MentorNFT.sol
- Mint NFT as proof of mentorship with metadata URI (stored on IPFS)

### 🗳️ DAOProposal.sol
- Create and vote on proposals

### 💰 Staking.sol
- Stake tokens, earn rewards based on time and contribution

---

## 🌐 Deployment Guide (GitHub)

1. Create a repo on GitHub
2. Initialize and push:
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/lokachakra-dapp.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## 🏁 Hackathon Submission Checklist

✅ Functional Prototype (frontend + contracts + backend)
✅ Role-flow and token/NFT usage
✅ zk-ID + OpenAI integration
✅ README with setup and architecture
✅ Bonus: Gamified dashboards, DAO voting, mentor proof NFTs

---

## 🧠 Authors / Contributors

- You 👩‍💻👨‍💻
- [OpenAI Copilot (AI agent)]

---

## 📄 License
MIT License
