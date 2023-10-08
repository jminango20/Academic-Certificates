import { ethers } from "./ethers-5.6.esm.min.js";
import { contractAddress, abi } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const disciplineButton = document.getElementById("createDisciplineButton");
const getDisciplineButton = document.getElementById("getDisciplineButton");

connectButton.onclick = connect;
disciplineButton.onclick = createDiscipline;
getDisciplineButton.onclick = getDiscipline;

console.log(ethers);

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected!";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please Install Metamask";
  }
}

async function createDiscipline() {
  const disciplineName = document.getElementById("disciplineName").value;
  const studentCount = document.getElementById("studentCount").value;

  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.createDiscipline(
        disciplineName,
        studentCount
      );

      await listenForNewDisciplineEvent(transactionResponse, provider);
    } catch (error) {
      console.log(error);
    }
  }
}

async function getDiscipline() {
  const disciplineName = document.getElementById("getDisciplineName").value;
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const getDisciplineResponse = await contract.getDiscipline(disciplineName);
    console.log(getDisciplineResponse);
  }
}

function listenForNewDisciplineEvent(transactionResponse, provider) {
  console.log(`Created ${transactionResponse.hash}...`);
  //listen for this tx to finish
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations`
      );
      resolve();
    });
  });
}
