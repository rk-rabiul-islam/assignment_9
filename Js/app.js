


    const student = [
        {
            roll        : 01,
            name        : 'Rk',
            fatherName : 'kk',
            bn          : 80,
            en          : 80,
            math        : 80,
            s           : 80
        },
        {
            roll        : 02,
            name        : 'Rasel',
            fatherName  : 'Ronjon ali',
            bn          : 80,
            en          : 50,
            math        : 60,
            s           : 45
        },
        {
            roll        : 03,
            name        : 'Arifull',
            fatherName  : 'Habibur Rohman',
            bn          : 80,
            en          : 70,
            math        : 60,
            s           : 55
        },
     ];
     const phoneBook = [
        {
            name        : 'Rk Rabiul Islam (Razu)',
            Number      :  1626761798,
            relation    : 'Own'
    
        },
        {
            name        : 'Sakib Hossain',
            Number      :  1878286007,
            relation    : 'Bro'
    
        },
        {
            name        : 'Md Shipon Khan',
            Number      :  1673352434,
            relation    : 'Bro'
        },
        {
            name        : 'Md Hossain Al Mahmud',
            Number      :  1917805868,
            relation    : 'Bro'
        },
        {
            name        : 'Abdur Razzak',
            Number      :  1787866217,
            relation    : 'Friend'
        },
        {
            name        : 'Afran Aisha',
            Number      :  1781467171,
            relation    : 'Apu'
        },
        {
            name        : 'Faisal Ahmed',
            Number      :  1608514801,
            relation    : 'Janina ke ata'
        },
        {
            name        : 'Faisal Ahmed',
            Number      :  1776362232,
            relation    : 'Cinina'
        },
        {
            name        : 'Tohidul Islam',
            Number      :  1710470230,
            relation    : 'Cinina'
        },
        {
            name        : 'Kota Bondu',
            Number      :  1734559700,
            relation    : 'Kota bole beshi'
        }
    ];
    const deves = [

        {
            id          : 01,
            name        : 'rk',
            location    : 'Cumilla',
            skill       : 'mern stack',
            salary      : 500
        },
        {
            id          : 02,
            name        : 'Arifull',
            location    : 'sirajganj',
            skill       : 'Laravel',
            salary      : 700
        },
        {
            id          : 03,
            name        : 'Raju',
            location    : 'Cumilla',
            skill       : 'java',
            salary      : 1000
        },
        {
            id          : 04,
            name        : 'shakil',
            location    : 'sherpur',
            skill       : 'Django',
            salary      : 800
        },
        {
            id          : 05,
            name        : 'Ridoy',
            location    : 'Chittagong',
            skill       : 'Golan',
            salary      : 1200
        },
        {
            id          : 06,
            name        : 'Rabiul',
            location    : 'Cumilla',
            skill       : 'WordPress',
            salary      : 600
        },
    ];

    let data = JSON.stringify(student);
    let data2 = JSON.stringify(phoneBook);
    let data3 = JSON.stringify(deves);

console.log(`

    Student Data    = ${data}
    ==========================================
    Phone Book      = ${data2}
    ==========================================
    Deves Data    = ${data3}
    ==========================================
`);
