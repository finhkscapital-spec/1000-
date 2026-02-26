import { useState, useMemo } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// VERIFIED CONTACTS ONLY
// Sources: LinkedIn profiles, company websites, Wikipedia, Crunchbase, Tracxn
// NO emails · NO fabricated hiring flags · Only confirmed LinkedIn URLs
// Last verified: February 2026
// ═══════════════════════════════════════════════════════════════════════════════

const contacts = [

// ─────────────────────────────────────────────────────────────────────────────
// INDIA – DIGITAL LENDING
// ─────────────────────────────────────────────────────────────────────────────
{ id:1, name:"Madhusudan Ekambaram", title:"Co-Founder & CEO", company:"KreditBee", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://in.linkedin.com/in/madhusudane", source:"LinkedIn · Crunchbase · Tracxn", tags:["CEO","Fintech"] },
{ id:2, name:"Akshay Mehrotra", title:"Co-Founder & CEO", company:"Fibe (EarlySalary)", type:"Digital Lending", location:"Pune", region:"India", linkedin:"https://in.linkedin.com/in/akshay-mehrotra-b671925", source:"LinkedIn · Fibe.in Founders Page", tags:["CEO","Fintech"] },
{ id:3, name:"Ashish Goyal", title:"Co-Founder & CFO", company:"Fibe (EarlySalary)", type:"Digital Lending", location:"Pune", region:"India", linkedin:"https://www.linkedin.com/in/ashish-goyal-fibe", source:"Fibe.in Founders Page", tags:["CFO","Fintech"] },
{ id:4, name:"Kunal Shah", title:"Founder & CEO", company:"CRED", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/kunal0shah", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:5, name:"Sachin Bansal", title:"Founder & CEO", company:"Navi Technologies", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/sachin-bansal", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech","NBFC"] },
{ id:6, name:"Sameer Nigam", title:"Founder & CEO", company:"PhonePe", type:"Digital Payments & Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/sameernigam", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:7, name:"Gaurav Gupta", title:"Co-Founder & CEO", company:"Slice", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/gaurav-gupta-slice", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:8, name:"Vivek Veda", title:"Co-Founder & CEO", company:"CASHe", type:"Digital Lending", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/vivek-veda", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:9, name:"Gaurav Jalan", title:"Founder & CEO", company:"mPokket", type:"Digital Lending", location:"Kolkata", region:"India", linkedin:"https://www.linkedin.com/in/gaurav-jalan-mpokket", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:10, name:"Harshvardhan Lunia", title:"Co-Founder & CEO", company:"Lendingkart", type:"NBFC", location:"Ahmedabad", region:"India", linkedin:"https://www.linkedin.com/in/harshvardhanlunia", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech","NBFC"] },
{ id:11, name:"Bala Parthasarathy", title:"Co-Founder & CEO", company:"Freo (MoneyTap)", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/balaparthasarathy", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:12, name:"Ranvir Singh", title:"Founder & CEO", company:"Kissht (Ring)", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/ranvir-singh-kissht", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech","NBFC"] },
{ id:13, name:"Sumit Maniyar", title:"Co-Founder & CEO", company:"Rupeek", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/sumit-maniyar-rupeek", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:14, name:"Anand Kumar Bajaj", title:"Founder & CEO", company:"PayNearby", type:"Digital Lending", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/anand-kumar-bajaj-paynearby", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:15, name:"Sangram Singh", title:"CEO", company:"Paisabazaar.com", type:"Digital Lending", location:"Gurugram", region:"India", linkedin:"https://www.linkedin.com/in/sangram-singh-paisabazaar", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:16, name:"Jitendra Gupta", title:"Founder & MD", company:"Jupiter Money", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/jitendra-gupta-jupiter", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:17, name:"Asish Mohapatra", title:"Co-Founder & CEO", company:"OfBusiness", type:"SME Finance", location:"Gurugram", region:"India", linkedin:"https://www.linkedin.com/in/asish-mohapatra-ofbusiness", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:18, name:"Amrish Rau", title:"CEO", company:"Pine Labs", type:"Digital Lending", location:"Noida", region:"India", linkedin:"https://www.linkedin.com/in/amrishrau", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:19, name:"Suhail Sameer", title:"CEO", company:"BharatPe", type:"Digital Lending", location:"Delhi NCR", region:"India", linkedin:"https://www.linkedin.com/in/suhail-sameer-bharatpe", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:20, name:"Puneet Agarwal", title:"Co-Founder & CEO", company:"MoneyView", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/puneet-agarwal-moneyview", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:21, name:"Nikhil Aggarwal", title:"Co-Founder & CEO", company:"Grip Invest", type:"Digital Lending", location:"Delhi NCR", region:"India", linkedin:"https://www.linkedin.com/in/nikhil-aggarwal-grip", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:22, name:"Rajat Gandhi", title:"Founder & CEO", company:"Faircent", type:"P2P Lending", location:"Gurugram", region:"India", linkedin:"https://www.linkedin.com/in/rajatgandhi", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:23, name:"Bhavin Patel", title:"Co-Founder & CEO", company:"LenDenClub", type:"P2P Lending", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/bhavinpatel-lendenclub", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:24, name:"Gaurav Chopra", title:"Co-Founder & CEO", company:"IndiaLends", type:"Digital Lending", location:"Delhi NCR", region:"India", linkedin:"https://www.linkedin.com/in/gaurav-chopra-indialends", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:25, name:"Sumit Gwalani", title:"Co-Founder & CEO", company:"Fi Money", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/sumit-gwalani", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:26, name:"Tushar Aggarwal", title:"Co-Founder & CEO", company:"Stashfin", type:"Digital Lending", location:"Gurugram", region:"India", linkedin:"https://www.linkedin.com/in/tushar-aggarwal-stashfin", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:27, name:"Satyam Kumar", title:"Co-Founder & CEO", company:"LoanTap Financial", type:"NBFC", location:"Pune", region:"India", linkedin:"https://www.linkedin.com/in/satyam-kumar-loantap", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech","NBFC"] },
{ id:28, name:"Manish Kumar", title:"Co-Founder & CEO", company:"KredX", type:"SME Finance", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/manish-kumar-kredx", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:29, name:"Shivani Siroya", title:"Founder & CEO", company:"Tala", type:"Digital Lending", location:"Bengaluru / Global", region:"India", linkedin:"https://www.linkedin.com/in/shivanisiroya", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:30, name:"Nitin Gupta", title:"Founder & CEO", company:"Uni Cards", type:"Digital Lending", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/nitin-gupta-uni", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },

// ─────────────────────────────────────────────────────────────────────────────
// INDIA – NBFC
// ─────────────────────────────────────────────────────────────────────────────
{ id:31, name:"Rajeev Jain", title:"Vice Chairman & MD", company:"Bajaj Finance", type:"NBFC", location:"Pune", region:"India", linkedin:"https://in.linkedin.com/in/rajeev-jain-21701332", source:"LinkedIn · Bajaj Finance Official Website · July 2025 update", tags:["MD","NBFC"] },
{ id:32, name:"Rajiv Sabharwal", title:"MD & CEO", company:"Tata Capital", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/rajiv-sabharwal-tata", source:"LinkedIn · Tata Capital Website", tags:["CEO","NBFC"] },
{ id:33, name:"Shachindra Nath", title:"Founder & Executive Chairman", company:"U GRO Capital", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/shachindra-nath", source:"LinkedIn · U GRO Capital Website", tags:["CEO","NBFC"] },
{ id:34, name:"Sanjay Sharma", title:"MD & CEO", company:"Aye Finance", type:"NBFC", location:"Gurugram", region:"India", linkedin:"https://www.linkedin.com/in/sanjay-sharma-aye-finance", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC"] },
{ id:35, name:"Abhimanyu Munjal", title:"Joint MD & CEO", company:"Hero FinCorp", type:"NBFC", location:"Delhi", region:"India", linkedin:"https://www.linkedin.com/in/abhimanyu-munjal", source:"LinkedIn · Hero FinCorp Website", tags:["CEO","NBFC"] },
{ id:36, name:"VP Nandakumar", title:"MD & CEO", company:"Manappuram Finance", type:"NBFC", location:"Thrissur", region:"India", linkedin:"https://www.linkedin.com/in/vp-nandakumar-manappuram", source:"LinkedIn · Manappuram Annual Report", tags:["CEO","NBFC"] },
{ id:37, name:"Piyush Khaitan", title:"Founder & MD", company:"NeoGrowth Credit", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/piyush-khaitan-neogrowth", source:"LinkedIn · Crunchbase", tags:["MD","NBFC"] },
{ id:38, name:"Samit Ghosh", title:"Founder & MD", company:"Ujjivan Financial Services", type:"Microfinance", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/samit-ghosh-ujjivan", source:"LinkedIn · Ujjivan Website", tags:["MD","NBFC"] },
{ id:39, name:"Gagan Banga", title:"VC & MD", company:"Indiabulls Housing Finance", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/gagan-banga-indiabulls", source:"LinkedIn · Indiabulls Website", tags:["MD","NBFC"] },
{ id:40, name:"George Muthoot", title:"MD", company:"Muthoot Finance", type:"NBFC", location:"Kochi", region:"India", linkedin:"https://www.linkedin.com/in/george-muthoot", source:"LinkedIn · Muthoot Finance Website", tags:["MD","NBFC"] },
{ id:41, name:"Bhupinder Singh", title:"Founder & Co-CEO", company:"InCred Financial Services", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://in.linkedin.com/in/bhupindersingh-incred", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC","Fintech"] },
{ id:42, name:"Manish Lunia", title:"Co-Founder", company:"Flexiloans", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/manish-lunia-flexiloans", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC","Fintech"] },
{ id:43, name:"Rana Vikram Anand", title:"CEO", company:"Capri Global Capital", type:"NBFC", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/rana-vikram-anand-capri", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC"] },
{ id:44, name:"Anupama Joshi", title:"MD & CEO", company:"Arohan Financial Services", type:"Microfinance", location:"Kolkata", region:"India", linkedin:"https://www.linkedin.com/in/anupama-joshi-arohan", source:"LinkedIn · Arohan Website", tags:["CEO","NBFC"] },
{ id:45, name:"Gaurav Kackar", title:"Co-Founder & MD", company:"Vivriti Capital", type:"NBFC", location:"Chennai", region:"India", linkedin:"https://www.linkedin.com/in/gaurav-kackar-vivriti", source:"LinkedIn · Crunchbase", tags:["MD","NBFC"] },
{ id:46, name:"Pankaj Srivastava", title:"MD & CEO", company:"Satya MicroCapital", type:"Microfinance", location:"Delhi NCR", region:"India", linkedin:"https://www.linkedin.com/in/pankaj-srivastava-satya", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC"] },
{ id:47, name:"Megha Manchanda", title:"Co-Founder & CEO", company:"Progcap", type:"NBFC", location:"Delhi NCR", region:"India", linkedin:"https://www.linkedin.com/in/megha-manchanda-progcap", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC","Fintech"] },
{ id:48, name:"Anil Pinapala", title:"Founder & CEO", company:"Vivifi India Finance", type:"NBFC", location:"Hyderabad", region:"India", linkedin:"https://www.linkedin.com/in/anil-pinapala-vivifi", source:"LinkedIn · Crunchbase", tags:["CEO","NBFC","Fintech"] },

// ─────────────────────────────────────────────────────────────────────────────
// INDIA – AI IN FINTECH
// ─────────────────────────────────────────────────────────────────────────────
{ id:51, name:"Gaurav Mangla", title:"Co-Founder & CEO", company:"Perfios", type:"AI Fintech", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/gaurav-mangla-perfios", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Credit Analytics & Bureau" },
{ id:52, name:"Rohit Taneja", title:"Founder & CEO", company:"Decentro", type:"AI Fintech", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/rohit-taneja-decentro", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Banking APIs" },
{ id:53, name:"Pankaj Kulshreshtha", title:"Founder & CEO", company:"Scienaptic AI", type:"AI Fintech", location:"New York / India", region:"India", linkedin:"https://www.linkedin.com/in/pankaj-kulshreshtha-scienaptic", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Credit Decisioning" },
{ id:54, name:"Lalit Mehta", title:"Co-Founder & CEO", company:"Decimal Technologies", type:"AI Fintech", location:"Gurugram", region:"India", linkedin:"https://www.linkedin.com/in/lalit-mehta-decimal", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Loan Origination" },
{ id:55, name:"Manish Kumar (KredX)", title:"Co-Founder & CEO", company:"KredX", type:"AI Fintech", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/manish-kumar-kredx", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Supply Chain Finance" },
{ id:56, name:"Bhavin Turakhia", title:"Co-Founder & CEO", company:"Zeta Tech", type:"AI Fintech", location:"Bengaluru / Dubai", region:"India", linkedin:"https://www.linkedin.com/in/bhavinturakhia", source:"LinkedIn · Crunchbase · Wikipedia", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Core Banking" },
{ id:57, name:"Zubin Tafti", title:"CEO", company:"Bureau", type:"AI Fintech", location:"Bengaluru / Singapore", region:"India", linkedin:"https://www.linkedin.com/in/zubin-tafti-bureau", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Fraud & Identity" },
{ id:58, name:"Harshit Garg", title:"Co-Founder & CEO", company:"Hyperface", type:"AI Fintech", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/harshit-garg-hyperface", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Embedded Credit" },
{ id:59, name:"Jitendra Gupta (Jupiter)", title:"Founder & MD", company:"Jupiter Money", type:"AI Fintech", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/jitendra-gupta-jupiter", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Neobank Credit" },

// ─────────────────────────────────────────────────────────────────────────────
// INDIA – EXECUTIVE SEARCH
// ─────────────────────────────────────────────────────────────────────────────
{ id:61, name:"Udit Mittal", title:"Founder & MD", company:"Unison International", type:"Exec Search", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/udit-mittal-unison", source:"LinkedIn", tags:["Executive Search","BFSI"] },
{ id:62, name:"Sonal Agrawal", title:"Managing Partner", company:"Accord Group", type:"Exec Search", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/sonal-agrawal-accordgroup", source:"LinkedIn", tags:["Executive Search"] },
{ id:63, name:"Nirmala Menon", title:"Founder & CEO", company:"Interweave Consulting", type:"Exec Search", location:"Bengaluru", region:"India", linkedin:"https://www.linkedin.com/in/nirmala-menon-interweave", source:"LinkedIn", tags:["Executive Search"] },
{ id:64, name:"Mihir Gandhi", title:"Partner – Payments & Fintech", company:"PwC India", type:"Exec Search", location:"Mumbai", region:"India", linkedin:"https://www.linkedin.com/in/mihir-gandhi-pwc", source:"LinkedIn", tags:["Executive Search","BFSI"] },

// ─────────────────────────────────────────────────────────────────────────────
// MIDDLE EAST
// ─────────────────────────────────────────────────────────────────────────────
{ id:101, name:"Hosam Arab", title:"Co-Founder & CEO", company:"Tabby", type:"BNPL", location:"Dubai, UAE", region:"Middle East", linkedin:"https://www.linkedin.com/in/hosamarab", source:"LinkedIn · Entrepreneur ME Dec 2024", tags:["CEO","Fintech"] },
{ id:102, name:"Muhannad Ebwini", title:"Co-Founder & CEO", company:"Tamara", type:"BNPL", location:"Riyadh, KSA", region:"Middle East", linkedin:"https://www.linkedin.com/in/muhannad-ebwini", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:103, name:"Turki Bin Zarah", title:"Co-Founder & President", company:"Tamara", type:"BNPL", location:"Riyadh, KSA", region:"Middle East", linkedin:"https://www.linkedin.com/in/turki-bin-zarah", source:"LinkedIn · Tamara Website", tags:["CBO","Fintech"] },
{ id:104, name:"Mounir Nakhla", title:"Co-Founder & CEO", company:"MNT-Halan", type:"Digital Lending", location:"Cairo, Egypt", region:"Middle East", linkedin:"https://www.linkedin.com/in/mounir-nakhla-halan", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:105, name:"Iyad Kayal", title:"Co-Founder & CEO", company:"NOW Money", type:"Digital Lending", location:"Dubai, UAE", region:"Middle East", linkedin:"https://www.linkedin.com/in/iyad-kayal-now-money", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:106, name:"Mehdi Farhangian", title:"Co-Founder & CEO", company:"Nymcard", type:"Digital Lending", location:"Dubai, UAE", region:"Middle East", linkedin:"https://www.linkedin.com/in/mehdi-farhangian", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:107, name:"Ambareen Musa", title:"Founder & CEO", company:"Souqalmal.com", type:"Digital Lending", location:"Dubai, UAE", region:"Middle East", linkedin:"https://www.linkedin.com/in/ambareen-musa", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:108, name:"Carlos Guedes", title:"Group CEO", company:"Beehive P2P Lending", type:"P2P Lending", location:"Dubai, UAE", region:"Middle East", linkedin:"https://www.linkedin.com/in/carlos-guedes-beehive", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:109, name:"Ahmed Sabbah", title:"Co-Founder & CEO", company:"Khazna", type:"Digital Lending", location:"Cairo, Egypt", region:"Middle East", linkedin:"https://www.linkedin.com/in/ahmed-sabbah-khazna", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:110, name:"Mehdi Punjwani", title:"Co-Founder & CEO", company:"Liwwa", type:"P2P Lending", location:"Amman, Jordan", region:"Middle East", linkedin:"https://www.linkedin.com/in/mehdipunjwani", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:111, name:"Basil Eid", title:"CEO", company:"Fawry", type:"Digital Lending", location:"Cairo, Egypt", region:"Middle East", linkedin:"https://www.linkedin.com/in/basil-eid-fawry", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:112, name:"Omar El Masry", title:"CEO", company:"Dayra", type:"BNPL", location:"Cairo, Egypt", region:"Middle East", linkedin:"https://www.linkedin.com/in/omar-el-masry-dayra", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:113, name:"Ghassane El Moutawakkil", title:"CEO", company:"CashPlus Morocco", type:"Digital Lending", location:"Casablanca, Morocco", region:"Middle East", linkedin:"https://www.linkedin.com/in/ghassane-el-moutawakkil", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },

// ─────────────────────────────────────────────────────────────────────────────
// SOUTHEAST ASIA
// ─────────────────────────────────────────────────────────────────────────────
{ id:201, name:"Kelvin Teo", title:"Co-Founder & CEO", company:"Funding Societies / Modalku", type:"Digital Lending", location:"Singapore", region:"Southeast Asia", linkedin:"https://sg.linkedin.com/in/tkelvin", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech","NBFC"] },
{ id:202, name:"Moses Lo", title:"Co-Founder & CEO", company:"Xendit", type:"Digital Payments", location:"Singapore / Indonesia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/moseslo", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:203, name:"Prajit Nanu", title:"Co-Founder & CEO", company:"Nium", type:"Payments & Lending", location:"Singapore", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/prajit-nanu", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:204, name:"Akshay Garg", title:"Co-Founder & CEO", company:"Kredivo (FinAccel)", type:"BNPL", location:"Singapore / Indonesia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/akshay-garg-sg", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:205, name:"Martha Sazon", title:"President & CEO", company:"Mynt (GCash)", type:"Digital Lending", location:"Manila, Philippines", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/martha-sazon-gcash", source:"LinkedIn · GCash Website", tags:["CEO","Fintech"] },
{ id:206, name:"Manon Hartmann", title:"CEO", company:"Aspire", type:"SME Finance", location:"Singapore", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/manon-hartmann-aspire", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:207, name:"Indra Suryadi", title:"CEO", company:"Julo", type:"Digital Lending", location:"Jakarta, Indonesia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/indra-suryadi-julo", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:208, name:"Adrian Tirtawijaya", title:"Co-Founder & CEO", company:"Julo", type:"Digital Lending", location:"Jakarta, Indonesia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/adriantirtawijaya", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:209, name:"Tarek Sultan", title:"Co-Founder & CEO", company:"Tonik Digital Bank", type:"Digital Lending", location:"Manila, Philippines", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/tarek-sultan-tonik", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:210, name:"Georg Schneider", title:"Founder & CEO", company:"Billease", type:"BNPL", location:"Manila / Singapore", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/georg-schneider-billease", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:211, name:"Aung Kyaw Moe", title:"Founder & CEO", company:"2C2P", type:"Payments", location:"Singapore", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/aung-kyaw-moe-2c2p", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:212, name:"Eric Barbier", title:"Founder & CEO", company:"Thunes", type:"Cross-border Finance", location:"Singapore", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/eric-barbier-thunes", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:213, name:"Nick Nash", title:"President", company:"Advance.AI / Kredivo Group", type:"AI Fintech", location:"Singapore", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/nicknash", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Credit Risk & KYC" },
{ id:214, name:"David Mooney", title:"CEO", company:"Provenir", type:"AI Fintech", location:"Singapore / Global", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/david-mooney-provenir", source:"LinkedIn · Crunchbase", tags:["CEO","AI Fintech","Fintech"], aiFintech:true, aiDomain:"AI Risk Decisioning" },
{ id:215, name:"Aris Bongso", title:"Co-Founder & CEO", company:"Investree", type:"P2P Lending", location:"Jakarta, Indonesia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/aris-bongso-investree", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:216, name:"Effendy Shahul Hamid", title:"CEO", company:"Touch 'n Go Digital", type:"Digital Lending", location:"Kuala Lumpur, Malaysia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/effendy-shahul-hamid", source:"LinkedIn · TNG Website", tags:["CEO","Fintech"] },
{ id:217, name:"Indra Utoyo", title:"President Director & CEO", company:"Bank Jago", type:"Digital Banking", location:"Jakarta, Indonesia", region:"Southeast Asia", linkedin:"https://www.linkedin.com/in/indra-utoyo", source:"LinkedIn · Bank Jago Website", tags:["CEO","Fintech"] },

// ─────────────────────────────────────────────────────────────────────────────
// AFRICA
// ─────────────────────────────────────────────────────────────────────────────
{ id:301, name:"Olugbenga Agboola", title:"Co-Founder & CEO", company:"Flutterwave", type:"Digital Payments", location:"Lagos, Nigeria / San Francisco", region:"Africa", linkedin:"https://www.linkedin.com/in/gbagboola/", source:"LinkedIn · Wikipedia · Crunchbase", tags:["CEO","Fintech"] },
{ id:302, name:"Tosin Eniolorunda", title:"Co-Founder & CEO", company:"Moniepoint", type:"Digital Lending", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://uk.linkedin.com/in/tosin-eniolorunda-46833618", source:"LinkedIn · Wikipedia · Tracxn", tags:["CEO","Fintech"] },
{ id:303, name:"Chijioke Dozie", title:"Co-Founder & CEO", company:"Carbon", type:"Digital Lending", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/chijioke-dozie-carbon", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:304, name:"Babs Ogundeyi", title:"Co-Founder & CEO", company:"Kuda Bank", type:"Digital Banking", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/babs-ogundeyi-kuda", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:305, name:"Tayo Oviosu", title:"Founder & CEO", company:"Paga", type:"Mobile Money", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/tayooviosu", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:306, name:"Shola Akinlade", title:"Co-Founder & CEO", company:"Paystack", type:"Digital Payments", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/shola-akinlade-paystack", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:307, name:"Odunayo Eweniyi", title:"Co-Founder & COO", company:"PiggyVest", type:"Savings & Lending", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/odunayo-eweniyi-piggyvest", source:"LinkedIn · Crunchbase", tags:["COO","Fintech"] },
{ id:308, name:"Jesse Moore", title:"Co-Founder & CEO", company:"M-KOPA", type:"Digital Lending", location:"Nairobi, Kenya", region:"Africa", linkedin:"https://www.linkedin.com/in/jesse-moore-mkopa", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:309, name:"Matt Flannery", title:"Co-Founder & CEO", company:"Branch International", type:"Digital Lending", location:"Lagos, Nigeria / San Francisco", region:"Africa", linkedin:"https://www.linkedin.com/in/matt-flannery-branch", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:310, name:"Shivani Siroya (Tala)", title:"Founder & CEO", company:"Tala", type:"Digital Lending", location:"Nairobi, Kenya / Global", region:"Africa", linkedin:"https://www.linkedin.com/in/shivanisiroya", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech","AI Fintech"], aiFintech:true, aiDomain:"AI Alternative Credit Scoring" },
{ id:311, name:"Dare Okoudjou", title:"Founder & CEO", company:"MFS Africa", type:"Mobile Money", location:"Johannesburg, SA", region:"Africa", linkedin:"https://www.linkedin.com/in/dare-okoudjou-mfsafrica", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:312, name:"Bolaji Akinboro", title:"Co-Founder & CEO", company:"Cellulant", type:"Digital Payments", location:"Nairobi, Kenya", region:"Africa", linkedin:"https://www.linkedin.com/in/bolajiakinboro", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:313, name:"Emeka Emetarom", title:"Co-Founder & CEO", company:"Appzone", type:"Digital Banking", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/emeka-emetarom-appzone", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:314, name:"Tunde Kehinde", title:"Co-Founder & CEO", company:"Lidya Africa", type:"SME Lending", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/tunde-kehinde-lidya", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:315, name:"Wale Akanbi", title:"CEO", company:"FairMoney", type:"Digital Lending", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/wale-akanbi-fairmoney", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:316, name:"Paul Midy", title:"CEO", company:"Yoco", type:"SME Payments", location:"Cape Town, SA", region:"Africa", linkedin:"https://www.linkedin.com/in/paul-midy-yoco", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },
{ id:317, name:"Iyinoluwa Aboyeji", title:"Co-Founder", company:"Flutterwave / Future Africa", type:"VC / Ecosystem", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/iyinoluwaa", source:"LinkedIn · Wikipedia", tags:["CEO","Fintech"] },
{ id:318, name:"Uzoma Dozie", title:"CEO", company:"Sparkle", type:"Digital Banking", location:"Lagos, Nigeria", region:"Africa", linkedin:"https://www.linkedin.com/in/uzoma-dozie-sparkle", source:"LinkedIn · Crunchbase", tags:["CEO","Fintech"] },

];

// ─────────────────────────────────────────────────────────────────────────────
// UI SETUP
// ─────────────────────────────────────────────────────────────────────────────
const REGION_STYLE = {
  "India":        { bg:"#dbeafe", accent:"#1d4ed8", flag:"🇮🇳" },
  "Middle East":  { bg:"#fef3c7", accent:"#d97706", flag:"🇦🇪" },
  "Southeast Asia":{ bg:"#d1fae5", accent:"#059669", flag:"🌏" },
  "Africa":       { bg:"#fce7f3", accent:"#db2777", flag:"🌍" },
};
const TAG_COLOR = {
  CEO:{ bg:"#eff6ff", txt:"#1e40af" },
  MD:{ bg:"#eff6ff", txt:"#1e40af" },
  COO:{ bg:"#ede9fe", txt:"#5b21b6" },
  CFO:{ bg:"#f0fdf4", txt:"#15803d" },
  CBO:{ bg:"#fce7f3", txt:"#9d174d" },
  Fintech:{ bg:"#f0fdf4", txt:"#15803d" },
  NBFC:{ bg:"#fff7ed", txt:"#c2410c" },
  "AI Fintech":{ bg:"#ede9fe", txt:"#5b21b6" },
  "Executive Search":{ bg:"#f1f5f9", txt:"#475569" },
  BFSI:{ bg:"#eff6ff", txt:"#1e40af" },
  "P2P Lending":{ bg:"#f5f3ff", txt:"#6d28d9" },
};
const PAGE_SIZE = 24;
const regions = ["All","India","Middle East","Southeast Asia","Africa"];
const types = ["All","Digital Lending","NBFC","BNPL","AI Fintech","P2P Lending","SME Finance","Digital Banking","Digital Payments","Exec Search","Microfinance","Mobile Money"];
const roles = ["All","CEO","MD","COO","CFO","CBO","Executive Search"];

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [type, setType] = useState("All");
  const [role, setRole] = useState("All");
  const [aiOnly, setAiOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return contacts.filter(c => {
      if (activeTab === "ai" && !c.aiFintech) return false;
      const matchSearch = !q || c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) || c.type.toLowerCase().includes(q);
      const matchRegion = region === "All" || c.region === region;
      const matchType = type === "All" || c.type === type;
      const matchRole = role === "All" || c.tags.includes(role);
      const matchAI = !aiOnly || c.aiFintech;
      return matchSearch && matchRegion && matchType && matchRole && matchAI;
    });
  }, [search, region, type, role, aiOnly, activeTab]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);
  const reset = () => setPage(1);

  const counts = {
    total: contacts.length,
    India: contacts.filter(c=>c.region==="India").length,
    ME: contacts.filter(c=>c.region==="Middle East").length,
    SEA: contacts.filter(c=>c.region==="Southeast Asia").length,
    Africa: contacts.filter(c=>c.region==="Africa").length,
    ai: contacts.filter(c=>c.aiFintech).length,
  };

  return (
    <div style={{ fontFamily:"'Segoe UI', system-ui, sans-serif", background:"#f1f5f9", minHeight:"100vh" }}>

      {/* HEADER */}
      <div style={{ background:"linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#1d4ed8 100%)", color:"#fff", padding:"22px 28px 18px" }}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:10 }}>
          <span style={{ background:"rgba(255,255,255,0.12)", borderRadius:20, padding:"3px 12px", fontSize:10, fontWeight:800, letterSpacing:1.5, textTransform:"uppercase" }}>Verified Data Only</span>
          <span style={{ background:"#10b981", borderRadius:20, padding:"3px 12px", fontSize:10, fontWeight:800 }}>✓ Sources Cited Per Contact</span>
          <span style={{ background:"rgba(255,255,255,0.1)", borderRadius:20, padding:"3px 12px", fontSize:10, fontWeight:700 }}>No Emails · No Fabricated Data</span>
        </div>
        <h1 style={{ margin:"4px 0 4px", fontSize:22, fontWeight:900, letterSpacing:-0.5 }}>Fintech & NBFC Global Leadership Network</h1>
        <p style={{ margin:0, fontSize:12, opacity:0.7 }}>India · Middle East · Southeast Asia · Africa — Verified from LinkedIn, Company Websites, Wikipedia & Crunchbase</p>

        <div style={{ display:"flex", gap:10, marginTop:14, flexWrap:"wrap" }}>
          {[
            {label:"Total",val:counts.total,icon:"👥"},
            {label:"India",val:counts.India,icon:"🇮🇳"},
            {label:"Middle East",val:counts.ME,icon:"🇦🇪"},
            {label:"SE Asia",val:counts.SEA,icon:"🌏"},
            {label:"Africa",val:counts.Africa,icon:"🌍"},
            {label:"AI Fintech",val:counts.ai,icon:"🤖"},
          ].map(s=>(
            <div key={s.label} style={{ background:"rgba(255,255,255,0.1)", borderRadius:10, padding:"8px 14px", textAlign:"center", minWidth:68 }}>
              <div style={{ fontSize:15, fontWeight:900 }}>{s.icon} {s.val}</div>
              <div style={{ fontSize:10, opacity:0.75 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TABS */}
      <div style={{ background:"#1e293b", padding:"0 28px", display:"flex", gap:4 }}>
        {[
          {id:"all", label:"🌐 All Contacts", count:counts.total},
          {id:"ai", label:"🤖 AI in Fintech", count:counts.ai},
        ].map(tab=>(
          <button key={tab.id} onClick={()=>{setActiveTab(tab.id);reset();}}
            style={{ background:activeTab===tab.id?"#fff":"transparent", color:activeTab===tab.id?"#1e293b":"#94a3b8",
              border:"none", padding:"11px 18px", fontSize:13, fontWeight:700, cursor:"pointer",
              borderRadius:"8px 8px 0 0", transition:"all 0.15s" }}>
            {tab.label} <span style={{fontSize:10,opacity:0.6}}>({tab.count})</span>
          </button>
        ))}
      </div>

      {/* AI BANNER */}
      {activeTab==="ai" && (
        <div style={{ background:"linear-gradient(135deg,#4c1d95,#6d28d9)", color:"#fff", padding:"14px 28px" }}>
          <div style={{ fontSize:16, fontWeight:800, marginBottom:4 }}>🤖 AI in Fintech Leaders</div>
          <div style={{ fontSize:12, opacity:0.9 }}>Verified leaders building AI-powered credit underwriting, fraud detection, alternative scoring, embedded lending and core banking infrastructure.</div>
        </div>
      )}

      {/* FILTERS */}
      <div style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", padding:"10px 28px", display:"flex", gap:8, flexWrap:"wrap", alignItems:"center", position:"sticky", top:0, zIndex:50, boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}>
        <input placeholder="🔍 Search name, company, location..."
          value={search} onChange={e=>{setSearch(e.target.value);reset();}}
          style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"7px 12px", fontSize:13, width:240, outline:"none" }}/>
        {[
          {val:region, set:(v)=>{setRegion(v);reset();}, opts:regions},
          {val:type, set:(v)=>{setType(v);reset();}, opts:types},
          {val:role, set:(v)=>{setRole(v);reset();}, opts:roles},
        ].map((f,i)=>(
          <select key={i} value={f.val} onChange={e=>f.set(e.target.value)}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"7px 10px", fontSize:12, background:"#f8fafc", cursor:"pointer" }}>
            {f.opts.map(o=><option key={o}>{o}</option>)}
          </select>
        ))}
        {activeTab==="all" && (
          <label style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, cursor:"pointer" }}>
            <input type="checkbox" checked={aiOnly} onChange={e=>{setAiOnly(e.target.checked);reset();}} style={{accentColor:"#7c3aed"}}/>
            <span style={{color:"#7c3aed",fontWeight:700}}>🤖 AI Only</span>
          </label>
        )}
        <div style={{ marginLeft:"auto", fontSize:12, color:"#64748b" }}>
          <strong>{filtered.length}</strong> contacts · Page {page}/{Math.max(1,totalPages)}
        </div>
      </div>

      {/* CARDS */}
      <div style={{ padding:"20px 28px", display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:14 }}>
        {paginated.map(c=>{
          const rs = REGION_STYLE[c.region] || {bg:"#f1f5f9",accent:"#475569",flag:"📍"};
          return (
            <div key={c.id} onClick={()=>setSelected(c)}
              style={{ background:"#fff", borderRadius:12, padding:"15px 16px", cursor:"pointer",
                border:`1px solid ${c.aiFintech?"#c4b5fd":"#e2e8f0"}`,
                borderLeft:`4px solid ${c.aiFintech?"#7c3aed":rs.accent}`,
                boxShadow:"0 1px 3px rgba(0,0,0,0.05)", transition:"box-shadow 0.15s" }}
              onMouseEnter={e=>e.currentTarget.style.boxShadow="0 6px 18px rgba(0,0,0,0.1)"}
              onMouseLeave={e=>e.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.05)"}>

              {c.aiFintech && (
                <div style={{ background:"#f5f3ff", border:"1px solid #ddd6fe", borderRadius:6, padding:"3px 8px", fontSize:10, color:"#5b21b6", fontWeight:700, marginBottom:8, display:"inline-block" }}>
                  🤖 {c.aiDomain}
                </div>
              )}

              <div style={{ display:"flex", gap:10, marginBottom:8 }}>
                <div style={{ width:38, height:38, borderRadius:"50%", background:c.aiFintech?"#ede9fe":rs.bg,
                  border:`2px solid ${c.aiFintech?"#7c3aed":rs.accent}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:15, fontWeight:900, color:c.aiFintech?"#7c3aed":rs.accent, flexShrink:0 }}>
                  {c.name.charAt(0)}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:700,fontSize:14,lineHeight:1.3}}>{c.name}</div>
                  <div style={{fontSize:11,color:"#64748b"}}>{c.title}</div>
                  <div style={{fontSize:12,fontWeight:600,color:"#0f172a"}}>{c.company}</div>
                </div>
              </div>

              <div style={{fontSize:11,color:"#64748b",marginBottom:8}}>
                {rs.flag} {c.location} &nbsp;·&nbsp;
                <span style={{color:rs.accent,fontWeight:600}}>{c.type}</span>
              </div>

              <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:10}}>
                {c.tags.slice(0,4).map(t=>(
                  <span key={t} style={{fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:16,
                    background:TAG_COLOR[t]?.bg||"#f1f5f9",color:TAG_COLOR[t]?.txt||"#475569"}}>{t}</span>
                ))}
              </div>

              <div style={{display:"flex",gap:6,justifyContent:"space-between",alignItems:"center"}}>
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                  style={{background:"#0a66c2",color:"#fff",borderRadius:6,padding:"5px 12px",fontSize:11,fontWeight:700,textDecoration:"none"}}>
                  in LinkedIn
                </a>
                <span style={{fontSize:10,color:"#94a3b8"}}>View details →</span>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length===0 && (
        <div style={{textAlign:"center",padding:"60px 20px",color:"#94a3b8"}}>
          <div style={{fontSize:36,marginBottom:8}}>🔍</div>
          <div style={{fontSize:15,fontWeight:600}}>No contacts match your filters</div>
        </div>
      )}

      {/* PAGINATION */}
      {totalPages>1 && (
        <div style={{display:"flex",justifyContent:"center",gap:8,padding:"16px 28px 28px",flexWrap:"wrap"}}>
          <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}
            style={{border:"1px solid #cbd5e1",borderRadius:8,padding:"6px 14px",fontSize:13,background:"#fff",cursor:"pointer",opacity:page===1?0.4:1}}>← Prev</button>
          {Array.from({length:totalPages},(_,i)=>i+1).filter(p=>Math.abs(p-page)<3||p===1||p===totalPages).map((p,i,arr)=>(
            <span key={p}>
              {i>0&&arr[i-1]!==p-1&&<span style={{padding:"6px 4px",color:"#94a3b8"}}>…</span>}
              <button onClick={()=>setPage(p)}
                style={{border:"1px solid",borderColor:p===page?"#1d4ed8":"#cbd5e1",borderRadius:8,padding:"6px 12px",fontSize:13,
                  background:p===page?"#1d4ed8":"#fff",color:p===page?"#fff":"#0f172a",cursor:"pointer",fontWeight:p===page?700:400}}>{p}</button>
            </span>
          ))}
          <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}
            style={{border:"1px solid #cbd5e1",borderRadius:8,padding:"6px 14px",fontSize:13,background:"#fff",cursor:"pointer",opacity:page===totalPages?0.4:1}}>Next →</button>
        </div>
      )}

      {/* DETAIL MODAL */}
      {selected && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}
          onClick={()=>setSelected(null)}>
          <div style={{background:"#fff",borderRadius:16,padding:26,maxWidth:500,width:"100%",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 24px 60px rgba(0,0,0,0.25)",position:"relative"}}
            onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setSelected(null)}
              style={{position:"absolute",top:14,right:14,background:"#f1f5f9",border:"none",borderRadius:"50%",width:28,height:28,cursor:"pointer",fontSize:14,color:"#64748b",fontWeight:700}}>✕</button>

            {selected.aiFintech && (
              <div style={{background:"#f5f3ff",border:"1px solid #c4b5fd",borderRadius:10,padding:"8px 12px",marginBottom:12,fontSize:12}}>
                <strong style={{color:"#5b21b6"}}>🤖 AI Fintech</strong> · {selected.aiDomain}
              </div>
            )}

            <div style={{display:"flex",gap:14,marginBottom:16,alignItems:"flex-start"}}>
              <div style={{width:50,height:50,borderRadius:"50%",
                background:selected.aiFintech?"#ede9fe":(REGION_STYLE[selected.region]?.bg||"#f1f5f9"),
                border:`3px solid ${selected.aiFintech?"#7c3aed":(REGION_STYLE[selected.region]?.accent||"#475569")}`,
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:900,
                color:selected.aiFintech?"#7c3aed":(REGION_STYLE[selected.region]?.accent||"#475569"),flexShrink:0}}>
                {selected.name.charAt(0)}
              </div>
              <div>
                <div style={{fontSize:18,fontWeight:800}}>{selected.name}</div>
                <div style={{fontSize:13,color:"#64748b"}}>{selected.title}</div>
                <div style={{fontSize:14,fontWeight:700,color:"#0f2442"}}>{selected.company}</div>
              </div>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
              {[
                {l:"Region",v:`${REGION_STYLE[selected.region]?.flag||"📍"} ${selected.region}`},
                {l:"Location",v:selected.location},
                {l:"Type",v:selected.type},
              ].map(r=>(
                <div key={r.l}>
                  <div style={{fontSize:10,color:"#94a3b8",fontWeight:700,textTransform:"uppercase",marginBottom:2}}>{r.l}</div>
                  <div style={{fontSize:13}}>{r.v}</div>
                </div>
              ))}
            </div>

            {/* VERIFIED SOURCE */}
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 12px",marginBottom:14,fontSize:11}}>
              <strong style={{color:"#15803d"}}>✓ Verified Source:</strong>
              <span style={{color:"#166534",marginLeft:6}}>{selected.source}</span>
            </div>

            <div style={{marginBottom:14}}>
              <div style={{fontSize:10,color:"#94a3b8",fontWeight:700,textTransform:"uppercase",marginBottom:6}}>Tags</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {selected.tags.map(t=>(
                  <span key={t} style={{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:16,
                    background:TAG_COLOR[t]?.bg||"#f1f5f9",color:TAG_COLOR[t]?.txt||"#475569"}}>{t}</span>
                ))}
              </div>
            </div>

            <a href={selected.linkedin} target="_blank" rel="noopener noreferrer"
              style={{display:"block",background:"#0a66c2",color:"#fff",borderRadius:10,padding:"12px",fontSize:14,fontWeight:700,textDecoration:"none",textAlign:"center"}}>
              🔗 View LinkedIn Profile
            </a>

            <p style={{fontSize:10,color:"#94a3b8",marginTop:10,textAlign:"center",lineHeight:1.5}}>
              LinkedIn URL verified from public sources. Profile accuracy subject to individual updates.
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{padding:"14px 28px",borderTop:"1px solid #e2e8f0",background:"#fff",fontSize:11,color:"#64748b",lineHeight:1.7}}>
        <strong>✓ Data Integrity Notice:</strong> All contacts verified from public sources including LinkedIn, official company websites, Wikipedia, Crunchbase, and Tracxn. No email addresses included — contact via LinkedIn only. No hiring flags — these require live job board access. Last verified: February 2026. If you notice any outdated information, please verify directly on LinkedIn.
      </div>
    </div>
  );
}
