const inactivePolicy = {
    policyNumber: 'XYZ789',
    policyHolder: {
        name: 'Dave Smith',
        address: ['22 Road Name', 'City name', 'YY12 3ZY'],
        occupation: 'Software Engineer',
        dob: '1993-09-04',
        ukResidentSince: '1993-09-04',
        licenceType: 'Full [UK]',
        datePassedTest: '2013-01-10',
        drivingLicenceNumber: '1234567890',
        NCB: '1',
        claimsAndConvictions: [],
        paymentInformation: {
            accountNumber: 987654321,
            sortCode: '98-76-54',
        }
    },
    policyType: 'thirdParty',
    price: {
        total: '400.55',
        type: 'annual',
    },
    car: {
        registration: 'FW32ETR',
        make: 'BMW',
        model: '132D',
        value: 3000,
        annualMilage: 20000,
        purchaseDate: '06/01/2002',
        overnightLocation: 'Garage',
        registeredOwner: 'Policyholder',
    },
    policyDetails: {
        start: '2020-04-03',
        end: '2021-04-02',
        excess: {
            compulsory: 100,
            voluntary: 50,
        },
        usage: 'A - Social Domestic & Pleasure',
        extras: {
            europeanCover: true,
            drivingOtherCars: true,
            courtesyCar: true,
            keyCover: true,
        },
        optionalExtras: {
            personalAccidentCover: false,
            legalExpenses: false,
            breakdownCover: true,
            hireCarCover: false
        }
    },
};

export default inactivePolicy;