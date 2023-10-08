import { expect } from 'chai';
import { ethers } from 'hardhat';
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe('AcademicCertificates Contract', function () {

  async function deployAcademicCertificates() {

    const [owner, otherAccount] = await ethers.getSigners();

    const AcademicCertificates = await ethers.getContractFactory("AcademicCertificates");
    const academicCertificates = await AcademicCertificates.deploy();

    const { BigNumber } = require('ethers')

    return {academicCertificates, owner, otherAccount, BigNumber};

    
  }
  
  describe("Iteracting with contract", function() {

    it('Should set the right owner', async function () {

      const { academicCertificates, owner } = await loadFixture(deployAcademicCertificates);

      expect(await academicCertificates.owner()).to.equal(owner.address);

    })

    it('should create a new discipline', async function () {
      
      const { academicCertificates, owner } = await loadFixture(deployAcademicCertificates);

      const disciplineName = "Discipline";
      const studentCount = 2;

      await academicCertificates.createDiscipline(disciplineName, studentCount);
      
      const discipline = await academicCertificates.disciplines(disciplineName);
      
      expect(discipline.issuer).to.equal(await owner.address);
      expect(discipline.studentCount).to.equal(studentCount);
    });

     it('should update student count for a discipline', async function () {

      const { academicCertificates, owner } = await loadFixture(deployAcademicCertificates);

      const disciplineName = "Discipline";
      const studentCount = 2;

      await academicCertificates.createDiscipline(disciplineName, studentCount);
      
      const newStudentCount = 150;

      await academicCertificates.updateStudentCount(disciplineName, newStudentCount);

      const discipline = await academicCertificates.disciplines(disciplineName);

      expect(discipline.studentCount).to.equal(studentCount + newStudentCount);

    });

    it('should issue a certificate', async function () {
      const { academicCertificates, owner, BigNumber } = await loadFixture(deployAcademicCertificates);

      const disciplineName = "Discipline";
      const studentCount = 2;

      const institution = 'University XYZ';
      const course = 'Computer Science';
      const personalIdentifier = '12345';
      const studentName = 'Alice';


      await academicCertificates.createDiscipline(disciplineName, studentCount);

      await academicCertificates.issueCertificate(
        institution,
        course,
        personalIdentifier,
        studentName,
        disciplineName
      );

      const certificate = await academicCertificates.certificates(disciplineName, personalIdentifier);

      expect(certificate.issuer).to.equal(owner.address);
      expect(certificate.institution).to.equal(institution);
      expect(certificate.course).to.equal(course);
      expect(certificate.personalIdentifier).to.equal(personalIdentifier);
      expect(certificate.studentName).to.equal(studentName);
      expect(certificate.isValid).to.equal(true);
      
    });

  
  })
  

  




});
