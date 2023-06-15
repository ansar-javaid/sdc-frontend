import { IResume } from "../../models/resume.model";

export const dummyResumeData: IResume = {
    personalInformation: {
        firstName: 'Rabbaniyeh',
        lastName: 'Neakakhter',
        city: 'Mansehra',
        phoneNumber: '03312387222',
        website: 'www.rabbaniyeh.com',
        linkedIn: 'www.linkedin.com',
        summary: 'Lorem ipsum dolor sit amet, cond Phi esse molestie vel fel  kalsjd djkashd dywuflafa kjahfduao;fe jakshflsaudfaiwefnhalsiufha afdkjwhelfiunewafca aweki;fjawef'
    },
    education: [
        {
            instituteName: 'Comsats University Islamabad',
            major: 'BS in Computer Science',
            startYear: '2019',
            endYear: '2023'
        },
        {
            instituteName: 'Comsats University Islamabad',
            major: 'BS in Computer Science',
            startYear: '2019',
            endYear: '2023'
        },
        {
            instituteName: 'Comsats University Islamabad',
            major: 'BS in Computer Science',
            startYear: '2019',
            endYear: '2023'
        }
    ],
    work: [
        {
            companyName: 'Techietex',
            jobTitle: 'Angular Developer',
            startYear: '2022',
            endYear: 'Present'
        },
        {
            companyName: 'Techietex',
            jobTitle: 'Angular Developer',
            startYear: '2022',
            endYear: 'Present'
        },
        {
            companyName: 'Techietex',
            jobTitle: 'Angular Developer',
            startYear: '2022',
            endYear: 'Present'
        }
    ],
    awards: [
        {
            awardName: 'Speed Coding',
            year: '2022',
        },
        {
            awardName: 'Speed Coding',
            year: '2022',
        },
        {
            awardName: 'Speed Coding',
            year: '2022',
        }
    ],
    certifications: [
        {
            certificationName: 'Intro To Angular',
            certificationFrom: 'Google',
            year: '2020'
        },
        {
            certificationName: 'Intro To Angular',
            certificationFrom: 'Google',
            year: '2020'
        }
    ],
    references: [
        {
            name: 'Inam',
            phoneNumber: '03218372635',
            email: 'inam@gmail.com',
        },
        {
            name: 'Inam',
            phoneNumber: '03218372635',
            email: 'inam@gmail.com',
        },
    ],
    skills: [
        { skillName: 'Angular' },
        { skillName: 'React' },
        { skillName: 'Node' },
        { skillName: 'Java' },
        { skillName: 'Python' },
        { skillName: 'Project Management' },
    ]
}