// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract AcademicCertificates {

    struct Discipline {
        address issuer;
        uint256 studentCount;
    }

    struct Certificate {
        uint256 id;
        address issuer;
        string institution;
        string course;
        string disciplineName; //used as a key
        string personalIdentifier; //used as a key
        string studentName;
        uint256 issueDate;
        bool isValid;
        bytes32 certificateHash;
    }

    address public owner;

    //Mappings
    mapping(string => Discipline) public disciplines;

    mapping(string => mapping(string => Certificate)) public certificates;
    mapping(string => mapping(string => bool)) private usedPersonalIdentifiers;
    mapping(string => uint256) private idCounters;
    mapping(string => Certificate[]) private personalIdentifierToCertificates; 

    //Retrieve Information            
    mapping(bytes32 => Certificate) public certificateHashToCertificate;
        
    //Events
    event NewDiscipline(address indexed issuer, string disciplineName, uint256 studentCount, uint256 issueDate);

    event StudentCountUpdated(string disciplineName, uint256 studentCount, uint256 issueDate);

    event CertificateIssued(
        uint256 indexed id, 
        address indexed issuer, 
        string institution, 
        string course, 
        string personalIdentifier, 
        string studentName, 
        string disciplineName, 
        uint256 issueDate,
        bytes32 certificateHash
    );


    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function createDiscipline(
        string memory _disciplineName,
        uint256 _studentCount
    ) external onlyOwner {

        require(disciplines[_disciplineName].issuer == address(0), "Disciplina con este nombre ya existe");

        disciplines[_disciplineName].issuer = owner;
        
        disciplines[_disciplineName].studentCount = _studentCount;

        emit NewDiscipline(disciplines[_disciplineName].issuer, _disciplineName,  disciplines[_disciplineName].studentCount, block.timestamp);

    }

    function updateStudentCount(
    string memory _disciplineName,
    uint256 _newStudentCount
    ) external onlyOwner {
        
        require(disciplines[_disciplineName].issuer != address(0), "Disciplina con este nombre aun no existe. Por favor creale primero");
        
        disciplines[_disciplineName].studentCount = disciplines[_disciplineName].studentCount + _newStudentCount;
        
        emit StudentCountUpdated(_disciplineName, disciplines[_disciplineName].studentCount, block.timestamp);
}


    function issueCertificate(
        string memory _institution,
        string memory _course,
        string memory _personalIdentifier,
        string memory _studentName,
        string memory _disciplineName
    ) external onlyOwner {

        require(disciplines[_disciplineName].issuer != address(0), "Disciplina no registrada aun");

        require(!usedPersonalIdentifiers[_disciplineName][_personalIdentifier], "Identificador Personal ya utilizado");

        require( (disciplines[_disciplineName].studentCount -1) >= idCounters[_disciplineName], "Excedido el numero de certificados a ser emitidos");

        bytes32 certificateDataHash = keccak256(abi.encodePacked(_institution, _personalIdentifier, _disciplineName));

        uint256 idCounter = idCounters[_disciplineName];

        certificates[_disciplineName][_personalIdentifier] = Certificate(idCounter, msg.sender, _institution, _course, _disciplineName, _personalIdentifier, _studentName, block.timestamp, true, certificateDataHash);

        usedPersonalIdentifiers[_disciplineName][_personalIdentifier] = true;

        idCounters[_disciplineName]++;

        // Store the certificateDataHash in the certificateHashToId mapping
        certificateHashToCertificate[certificateDataHash] = certificates[_disciplineName][_personalIdentifier];               

        // Store the certificateDataHash in the studentCertificateMap
        personalIdentifierToCertificates[_personalIdentifier].push(certificates[_disciplineName][_personalIdentifier]); 

        emit CertificateIssued(idCounter, msg.sender, _institution, _course,_personalIdentifier, _studentName, _disciplineName, block.timestamp, certificateDataHash);
    }

    function findCertificateByHash(bytes32 _hash) public view returns (Certificate memory) {
        return certificateHashToCertificate[_hash];
    }

    function getCertificatesByPersonalIdentifier(string memory _personalIdentifier) public view returns (Certificate[] memory) {
        return personalIdentifierToCertificates[_personalIdentifier];
    }

    function getCertificatesByDisciplineAndPersonalIdentifier(string memory _disciplineName, string memory _personalIdentifier) public view returns (Certificate memory) {
        return certificates[_disciplineName][_personalIdentifier];
    }

    function validateCertificateByHash(bytes32 _hash, string memory _institution, string memory _personalIdentifier, string memory _disciplineName) public view returns (Certificate memory) {
        bytes32 hashToValidate = keccak256(abi.encodePacked(_institution, _personalIdentifier, _disciplineName));
        require(_hash == hashToValidate, "El certificado es faslo");
        return certificateHashToCertificate[_hash];
    }


}
