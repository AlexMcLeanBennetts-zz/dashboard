const testData = {
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
        purchaseDate: '2002-06-01',
        overnightLocation: 'Garage',
        registeredOwner: 'Policyholder',
    },
    policyDetails: {
        start: '2022-04-03',
        end: '2023-04-02',
        excess: {
            compulsory: 100,
            voluntary: 50,
        },
        usage: 'A - Social Domestic & Pleasure',
        extras: {
            "90 Days European Cover": true,
            "Driving other cars": true,
            "Courtesy car": true,
            "Key cover": true,
        },
        optionalExtras: {
            "Personal Accident Cover": false,
            "Legal Expenses": false,
            "Breakdown Cover": true,
            "Hire Car Cover": false
        }
    }
};

export default testData;