import { ethers } from "hardhat";

async function main() {
  
  const academicCertificates = await ethers.deployContract("AcademicCertificates");

  await academicCertificates.waitForDeployment();

  console.log(
    `Academic Certificates deployed to ${academicCertificates.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
