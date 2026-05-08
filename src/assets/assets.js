import background from '../assets/background.jpg'
import gradientBackground from '../assets/gradientBackground.png'
import glologo from '../assets/glo.png'

const myNumber = "09050481320"

export const myContact = 
    {
        id: "1",
        firstName: "Ebanehita",
        lastName: "Aikhegbe",
        number: "09050481320",
        network:"Glo",
    }


export const myDummyContacts = [
    {
        id: "1",
        firstName: "Tyler",
        lastName: "Durden",
        number: "08118446382",
        network:"Glo",
    },
    {
        id: "2",
        firstName: "Patrick",
        lastName: "Bateman",
        number: "08033541819",
        network:"MTN",
    },
    {
        id: "3",
        firstName: "Relu",
        lastName: "",
        number: "08054161281",
        network:"Glo",
    }
]

export const networkLogos = [
    {name: "Glo", logo: glologo},
    {name: "MTN" , logo: ''},
    {name: "Airtel", logo: ''},
    {name: "9mobile", logo: ''}
]

export const assets = {
    background,
    gradientBackground,
    glologo,
    myNumber,
}

const ContactInfo = 
    {
        firstName: "Tyler",
        lastName: "Durden",
        number: "08118446382",
        network:"glo",
    }

export const dataPlans = [
    {network: "Glo", plans: [
        {id:1, name: "Glo 200MB", price: 100, data: "200MB", validity: "1 days", duration: "Daily"},
        {id:2, name: "Glo 500MB", price: 500, data: "500MB", validity: "7 days", duration: "Weekly"},,
        {id:3, name: "Glo 1GB", price: 1000, data: "1GB", validity: "14 days", duration: "Weekly"},
        {id:4, name: "Glo 2GB", price: 2000, data: "2GB", validity: "28 days", duration: "Monthly"},
        {id:5, name: "Glo 5GB", price: 5000, data: "5GB", validity: "28 days", duration: "Weekly"}
    ]},
    {network: "MTN", plans: [
        {id:6, name: "MTN 200MB", price: 100, data: "200MB", validity: "1 days", duration: "Daily"},
        {id:7, name: "MTN 500MB", price: 500, data: "500MB", validity: "7 days", duration: "Weekly"},,
        {id:8, name: "MTN 1GB", price: 1000, data: "1GB", validity: "14 days", duration: "Weekly"},
        {id:9, name: "MTN 2GB", price: 2000, data: "2GB", validity: "14 days", duration: "Weekly"},
        {id:10, name: "MTN 5GB", price: 5000, data: "5GB", validity: "14 days", duration: "Weekly"}
    ]},
    {network: "Airtel", plans: [
        {id:11, name: "Airtel 200MB", price: 100, data: "200MB", validity: "1 days", duration: "Daily"},
        {id:12, name: "Airtel 500MB", price: 500, data: "500MB", validity: "7 days", duration: "Weekly"},,
        {id:13, name: "Airtel 1GB", price: 1000, data: "1GB", validity: "14 days", duration: "Weekly"},
        {id:14, name: "Airtel 2GB", price: 2000, data: "2GB", validity: "14 days", duration: "Weekly"},
        {id:15, name: "Airtel 5GB", price: 5000, data: "5GB", validity: "14 days", duration: "Weekly"}
    ]},
    {network: "9mobile", plans: [
        {id:16, name: "9mobile 200MB", price: 100, data: "200MB", validity: "1 days", duration: "Daily"},
        {id:17, name: "9mobile 500MB", price: 500, data: "500MB", validity: "7 days", duration: "Weekly"},,
        {id:18, name: "9mobile 1GB", price: 1000, data: "1GB", validity: "14 days", duration: "Weekly"},
        {id:19, name: "9mobile 2GB", price: 2000, data: "2GB", validity: "14 days", duration: "Weekly"},
        {id:20, name: "9mobile 5GB", price: 5000, data: "5GB", validity: "14 days", duration: "Weekly"}
    ]}

]

export const networkPrefixes = {
    MTN: ["0703", "0706", "0803", "0806", "0813", "0816", "0903", "0906"],
    Airtel: ["0701", "0708", "0802", "0808", "0812", "0902", "0907"],
    Glo: ["0705", "0805", "0807", "0811", "0815", "0905"],
    "9mobile": ["0809", "0817", "0818", "0908", "0909"]
}

export const networkProviders = [
    "Glo", "MTN", "Airtel", "9Mobile"
]
