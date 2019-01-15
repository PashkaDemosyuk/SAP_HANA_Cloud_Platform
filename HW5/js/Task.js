function Working(country) {
    this.country = country;
    this.getCountry = function () {
        return this.country;
    };
    this.setCountry = function (value) {
        this.country = value;
    };
    this.toString = function () {
        return '\nCountry: ' + this.getCountry();
    }
}

function FactoryWorker(name, speciality, age, experience, salary, gender, placeOfWork, EmploymentYear, DismissalYear, DismissalReason, country) {
    Working.call(this, country);
    this.name = name;
    this.speciality = speciality;
    this.age = age;
    this.experience = experience;
    this.salary = salary;
    this.gender = gender;
    this.placeOfWork = placeOfWork;
    this.EmploymentYear = EmploymentYear;
    this.DismissalYear = DismissalYear;
    this.DismissalReason = DismissalReason;
    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };

    this.getSpeciality = function () {
        return this.speciality;
    };
    this.setSpeciality = function (value) {
        this.speciality = value;
    };

    this.getAge = function () {
        return this.age;
    };
    this.setAge = function (value) {
        this.age = value;
    };

    this.setExperience = function (value) {
        this.experience = value;
    };
    this.getExperience = function () {
        return this.experience;
    };

    this.getSalary = function () {
        return this.salary;
    };
    this.setSalary = function (value) {
        this.salary = value;
    };

    this.getGender = function () {
        return this.gender;
    };
    this.setGender = function (value) {
        this.gender = value;
    };

    this.setPlaceOfWork = function (value) {
        this.placeOfWork = value;
    };
    this.getPlaceOfWork = function () {
        return this.placeOfWork;
    };

    this.setEmploymentYear = function (value) {
        this.EmploymentYear = value;
    };
    this.getEmploymentYear = function () {
        return this.EmploymentYear;
    };

    this.setDismissalYear = function (value) {
        this.DismissalYear = value;
    };
    this.getDismissalYear = function () {
        return this.DismissalYear;
    };

    this.setDismissalReason = function (value) {
        this.DismissalReason = value;
    };
    this.getDismissalReason = function () {
        return this.DismissalReason;
    };

    this.getInfo = function () {
        return "\n ___Worker___" +
            this.toString() +
            "\nName: " + this.getName() +
            "\nAge: " + this.getAge() +
            "\nSpeciality: " + this.getSpeciality() +
            "\nExperience: " + this.getExperience() +
            "\nGender: " + this.getGender() +
            "\nPlaceOfWork: " + this.getPlaceOfWork() +
            "\nEmploymentYear: " + this.getEmploymentYear() +
            "\nDismissalYear: " + this.getDismissalYear() +
            "\nDismissalReason: " + this.getDismissalReason();
    }
}

function TransportEnterprise(company, city, country) {
    Working.call(this, country);
    this.company = company;
    this.city = city;
    this.setCompany = function (value) {
        this.company = value
    };
    this.getCompany = function () {
        return this.company;
    };

    this.setCity = function (value) {
        this.city = value;
    };
    this.getCity = function () {
        return this.city;
    };



    this.getInfo = function () {
        return "\n ___Company___" +
            // this.toString() +
            '\nCompany: ' + this.getCompany() +
            '\nCity: ' + this.getCity() +
            '\nCountry: ' + this.getCountry();

    }
}

function Show() {
    alert("Object Is Created");
}

var WorkingPlace = new Working('USA');

var WorkerVasya = new FactoryWorker('Vasya', 'Engineer', 46, 'Senior', 1000, 'Male', 'Zavod', 2015, 2018, 'butterfingers', 'USA');
console.log(WorkerVasya.getInfo());

var WorkerVasserman = new FactoryWorker('Vasserman', 'Programmist', 60, 'Team Leader', 1500, 'Male', 'Roga&Kopyta', 2013, 2018, '', 'Russia');
WorkerVasserman.setDismissalReason('too many pockets');
console.log(WorkerVasserman.getInfo());

var Company = new TransportEnterprise('Roga&Kopyta', 'Kiev', 'Ukraine');
console.log(Company.getInfo());