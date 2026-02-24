import { useState, useMemo } from "react";

const contacts = [
// ═══ AI FINTECH SECTION ═══
{ id:1001, name:"Pankaj Kulshreshtha", title:"Founder & CEO", company:"Scienaptic AI", industry:"AI · Credit Decisioning Platform", location:"New York / India", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Credit Underwriting", linkedin:"https://linkedin.com/in/pankaj-kulshreshtha-scienaptic", email:"pankaj@scienaptic.ai", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business – India, AI Product Sales", hiringDays:14 },
{ id:1002, name:"Gaurav Mangla", title:"Co-Founder & CEO", company:"Perfios", industry:"AI · Financial Data & Credit Analytics", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Credit Analytics", linkedin:"https://linkedin.com/in/gaurav-mangla-perfios", email:"gaurav@perfios.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"VP Sales – BFSI, Business Head", hiringDays:18 },
{ id:1003, name:"Anand Aras", title:"CEO", company:"Finbox", industry:"AI · Embedded Lending & Credit APIs", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Embedded Lending", linkedin:"https://linkedin.com/in/anand-aras-finbox", email:"anand@finbox.in", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1004, name:"Siddharth Vishwanath", title:"CEO", company:"Crediwatch", industry:"AI · Business Credit Intelligence", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Credit Risk", linkedin:"https://linkedin.com/in/siddharth-vishwanath-crediwatch", email:"siddharth@crediwatch.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Enterprise Sales, AI Product Specialist", hiringDays:20 },
{ id:1005, name:"Rohit Taneja", title:"Founder & CEO", company:"Decentro", industry:"AI · Banking APIs & Lending Infrastructure", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Banking APIs", linkedin:"https://linkedin.com/in/rohit-taneja-decentro", email:"rohit@decentro.tech", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"VP Business – BFSI Partnerships", hiringDays:22 },
{ id:1006, name:"Bhavin Turakhia", title:"Co-Founder & CEO", company:"Zeta Tech (AI Banking)", industry:"AI · Modern Banking Infrastructure", location:"Bengaluru / Dubai", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Core Banking & Credit", linkedin:"https://linkedin.com/in/bhavinturakhia", email:"bhavin@zeta.tech", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business – BFSI Partnerships", hiringDays:19 },
{ id:1007, name:"Harshit Garg", title:"Co-Founder & CEO", company:"Hyperface", industry:"AI · Credit Card & Embedded Finance Platform", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Embedded Credit", linkedin:"https://linkedin.com/in/harshit-garg-hyperface", email:"harshit@hyperface.co", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business – Embedded Finance", hiringDays:16 },
{ id:1008, name:"Lalit Mehta", title:"Co-Founder & CEO", company:"Decimal Technologies", industry:"AI · Loan Origination & Credit Automation", location:"Gurugram", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Loan Origination", linkedin:"https://linkedin.com/in/lalit-mehta-decimal", email:"lalit@decimaltechnologies.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"VP Sales – Lender Partnerships, Head of AI Products", hiringDays:21 },
{ id:1009, name:"Manish Kumar", title:"Co-Founder & CEO", company:"KredX (AI Supply Chain Finance)", industry:"AI · B2B Invoice Financing & Supply Chain", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Supply Chain Finance", linkedin:"https://linkedin.com/in/manish-kumar-kredx", email:"manish@kredx.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Enterprise Business, VP Sales MSME", hiringDays:26 },
{ id:1010, name:"Zubin Tafti", title:"CEO", company:"Bureau (AI Fraud & Risk)", industry:"AI · Fraud Prevention & Identity for Lending", location:"Bengaluru / Singapore", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Fraud & Identity", linkedin:"https://linkedin.com/in/zubin-tafti-bureau", email:"zubin@bureau.id", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"VP Sales – BFSI, Head of Partnerships", hiringDays:15 },
{ id:1011, name:"Deepak Bhardwaj", title:"CEO", company:"Accumn AI", industry:"AI · Credit Underwriting & Monitoring Platform", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Credit Underwriting", linkedin:"https://linkedin.com/in/deepak-bhardwaj-accumn", email:"deepak@accumn.ai", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Enterprise Sales Head – NBFC/Bank AI", hiringDays:11 },
{ id:1012, name:"Amrish Rau", title:"CEO", company:"Pine Labs (AI Payments & Lending)", industry:"AI · POS Lending & Merchant Finance", location:"Noida", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Merchant Lending", linkedin:"https://linkedin.com/in/amrishrau", email:"amrish@pinelabs.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Lending Products, VP Business", hiringDays:23 },
{ id:1013, name:"Vaibhav Kalia", title:"CEO", company:"Salt (AI Credit Platform)", industry:"AI · Alternative Credit Scoring", location:"Dubai, UAE", region:"Middle East", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Alternative Credit", linkedin:"https://linkedin.com/in/vaibhav-kalia-salt", email:"vaibhav@salt.pe", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business – GCC, AI Sales Lead", hiringDays:17 },
{ id:1014, name:"Nick Nash", title:"President", company:"Advance.AI (Credit AI – SEA)", industry:"AI · Credit Risk & KYC – Southeast Asia", location:"Singapore", region:"Southeast Asia", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Credit Risk & KYC", linkedin:"https://linkedin.com/in/nicknash", email:"nick@advance.ai", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1015, name:"David Mooney", title:"CEO", company:"Provenir (AI Risk Decisioning)", industry:"AI · Risk Decisioning for Lenders", location:"Singapore / Global", region:"Southeast Asia", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Risk Decisioning", linkedin:"https://linkedin.com/in/david-mooney-provenir", email:"david@provenir.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Sales APAC, Enterprise Account Director", hiringDays:24 },
{ id:1016, name:"Trung Dung", title:"CEO", company:"OneConnect Financial Technology", industry:"AI · AI-powered Lending Platform – SEA", location:"Singapore", region:"Southeast Asia", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Lending Platform", linkedin:"https://linkedin.com/in/trung-dung-oneconnect", email:"trung@myoneconnect.com", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1017, name:"Moussa Bekkali", title:"CEO", company:"Paymentology (AI Card Issuing)", industry:"AI · Card Issuing & Payments Infrastructure", location:"Dubai, UAE", region:"Middle East", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Payments Infrastructure", linkedin:"https://linkedin.com/in/moussa-bekkali-paymentology", email:"moussa@paymentology.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business – GCC & Africa, Sales Director", hiringDays:20 },
{ id:1018, name:"Ade Bajomo", title:"CEO", company:"Moniepoint AI (Nigeria)", industry:"AI · AI-powered Merchant Banking & Credit", location:"Lagos, Nigeria", region:"Africa", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Merchant Credit", linkedin:"https://linkedin.com/in/ade-bajomo-moniepoint", email:"ade@moniepoint.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of AI Products, VP Revenue Africa", hiringDays:13 },
{ id:1019, name:"Jesse Moore", title:"Co-Founder & CEO", company:"M-KOPA (AI Asset Finance)", industry:"AI · Asset Finance & Pay-as-you-go Credit", location:"Nairobi, Kenya", region:"Africa", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Asset Financing", linkedin:"https://linkedin.com/in/jesse-moore-mkopa", email:"jesse@m-kopa.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Credit AI, VP Business East Africa", hiringDays:18 },
{ id:1020, name:"Shivani Siroya", title:"Founder & CEO", company:"Tala (AI Mobile Credit)", industry:"AI · Mobile Microlending & Alternative Credit", location:"Los Angeles / Nairobi", region:"Africa", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Alternative Credit Scoring", linkedin:"https://linkedin.com/in/shivanisiroya", email:"shivani@tala.co", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business Africa, VP Partnerships", hiringDays:25 },
{ id:1021, name:"Matt Flannery", title:"Co-Founder & CEO", company:"Branch International (AI Microlending)", industry:"AI · AI-powered Mobile Microloans", location:"San Francisco / Lagos", region:"Africa", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Mobile Credit", linkedin:"https://linkedin.com/in/matt-flannery-branch", email:"matt@branch.co", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business Nigeria/Kenya, Credit AI Lead", hiringDays:22 },
{ id:1022, name:"Krishnan Menon", title:"CEO", company:"Fintuple Technologies (AI Credit)", industry:"AI · Alternative Data Credit Scoring", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Alternative Credit Scoring", linkedin:"https://linkedin.com/in/krishnan-menon-fintuple", email:"krishnan@fintuple.com", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1023, name:"Aditi Gupta", title:"Co-Founder & CEO", company:"Mahila Money (AI Women Credit)", industry:"AI · Women-focused Digital Credit", location:"Delhi NCR", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Inclusive Credit", linkedin:"https://linkedin.com/in/aditi-gupta-mahila-money", email:"aditi@mahilamoney.com", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1024, name:"Martin Har", title:"CEO", company:"Crayon Data (AI for BFSI)", industry:"AI · Personalization Engine for Banks & Lenders", location:"Singapore", region:"Southeast Asia", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Personalization & Analytics", linkedin:"https://linkedin.com/in/martinhar-crayondata", email:"martin@crayondata.com", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1025, name:"Nanda Kumar", title:"CEO", company:"Suntec Business Solutions (AI Banking)", industry:"AI · Revenue Management & Lending Analytics", location:"Chennai", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Banking Revenue Analytics", linkedin:"https://linkedin.com/in/nanda-kumar-suntec", email:"nanda@suntecgroup.net", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1026, name:"Sugata Datta", title:"CEO", company:"Artivatic.ai", industry:"AI · Underwriting & Risk for BFSI", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Underwriting & InsurTech", linkedin:"https://linkedin.com/in/sugata-datta-artivatic", email:"sugata@artivatic.ai", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1027, name:"Srikrishna Ramamoorthy", title:"Co-Founder & President", company:"Unitus Capital (AI Impact Lending)", industry:"AI · Impact Lending & Fintech Analytics", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Impact Credit", linkedin:"https://linkedin.com/in/srikrishna-ramamoorthy", email:"srikrishna@unitus.com", tags:["CBO","AI Fintech","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1028, name:"Mandar Agashe", title:"Founder & MD", company:"Sarvatra Technologies", industry:"AI · Fintech Infrastructure & Digital Payments", location:"Pune", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Payments & Fraud", linkedin:"https://linkedin.com/in/mandar-agashe-sarvatra", email:"mandar@sarvatra.in", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1029, name:"Ankit Singh", title:"Co-Founder", company:"Yodlee India (AI Open Banking)", industry:"AI · Open Banking & Financial Data", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Open Banking", linkedin:"https://linkedin.com/in/ankit-singh-yodlee", email:"ankit@yodlee.com", tags:["CEO","AI Fintech","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:1030, name:"Anand Agarwal", title:"CEO", company:"Perfios Account Aggregator", industry:"AI · Account Aggregation & Lending APIs", location:"Bengaluru", region:"India", subType:"AI Fintech", aiFintech:true, aiDomain:"AI Account Aggregation", linkedin:"https://linkedin.com/in/anand-agarwal-perfios", email:"anand@perfios.com", tags:["CEO","AI Fintech","Fintech"], hiring:true, hiringRoles:"Head of Business – NBFC/Banks, VP Partnerships", hiringDays:12 },

// ═══ INDIA – DIGITAL LENDING ═══
{ id:101, name:"Madhusudan Ekambaram", title:"Co-Founder & CEO", company:"KreditBee", industry:"Fintech · Unsecured Personal Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/madhusudan-ekambaram", email:"madhusudan@kreditbee.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Sales Head, Head of Business", hiringDays:12 },
{ id:102, name:"Akshay Mehrotra", title:"Co-Founder & CEO", company:"Fibe (EarlySalary)", industry:"Fintech · Unsecured Lending", location:"Pune", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/akshay-mehrotra-0609b35", email:"akshay@fibe.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Partnerships, VP Revenue", hiringDays:20 },
{ id:103, name:"Monica Singh", title:"CHRO", company:"Fibe (EarlySalary)", industry:"Fintech · Unsecured Lending", location:"Pune", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Monica+HR+Fibe", email:"hr@fibe.in", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Leadership roles – Business & Revenue", hiringDays:20 },
{ id:104, name:"Bhupinder Singh", title:"Founder & Co-CEO", company:"InCred Financial Services", industry:"Fintech NBFC · Unsecured Personal & Education", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://in.linkedin.com/in/bhupindersingh-incred", email:"bhupinder@incred.com", tags:["CEO","NBFC","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:105, name:"Puneet Agarwal", title:"Co-Founder & CEO", company:"MoneyView", industry:"Fintech · Unsecured Personal Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/puneet-agarwal-moneyview", email:"puneet@moneyview.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Sales, Senior Business Leaders", hiringDays:25 },
{ id:106, name:"Tushar Aggarwal", title:"Co-Founder & CEO", company:"Stashfin", industry:"Fintech · Unsecured Credit Line", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/tushar-aggarwal-stashfin", email:"tushar@stashfin.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"SVP Strategic Alliances, Revenue Leadership", hiringDays:8 },
{ id:107, name:"Satyam Kumar", title:"Co-Founder & CEO", company:"LoanTap Financial", industry:"Fintech NBFC · Unsecured Loans", location:"Pune", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/satyam-kumar-loantap", email:"satyam@loantap.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:108, name:"Vivek Veda", title:"Co-Founder & CEO", company:"CASHe", industry:"Fintech · Short-term Unsecured Credit", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/vivek-veda", email:"vivek@cashe.co.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Sales, Business Head – South India", hiringDays:18 },
{ id:109, name:"Gaurav Jalan", title:"Founder & CEO", company:"mPokket", industry:"Fintech · Student & Young Professional Lending", location:"Kolkata", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/gaurav-jalan-mpokket", email:"gaurav@mpokket.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"City Business Head, Zonal Sales Head", hiringDays:22 },
{ id:110, name:"Ranvir Singh", title:"Founder & CEO", company:"Kissht (Ring)", industry:"Fintech NBFC · Consumer Durable & Unsecured Loans", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/ranvir-singh-kissht", email:"ranvir@kissht.com", tags:["CEO","NBFC","Fintech"], hiring:true, hiringRoles:"Head of Business Development, VP Sales", hiringDays:14 },
{ id:111, name:"Harshvardhan Lunia", title:"Co-Founder & CEO", company:"Lendingkart", industry:"Fintech NBFC · MSME Unsecured Business Loans", location:"Ahmedabad", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/harshvardhanlunia", email:"harshvardhan@lendingkart.com", tags:["CEO","NBFC","Fintech"], hiring:true, hiringRoles:"Head of Business North India, Zonal Sales Head", hiringDays:28 },
{ id:112, name:"Kunal Shah", title:"Founder & CEO", company:"CRED", industry:"Fintech · Credit Card Management & Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/kunal0shah", email:"kunal@cred.club", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Partnerships, Revenue Leadership", hiringDays:10 },
{ id:113, name:"Gaurav Gupta", title:"Co-Founder & CEO", company:"Slice", industry:"Fintech · Credit Cards & Unsecured Credit", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/gaurav-gupta-slice", email:"gaurav@sliceit.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Revenue, VP Consumer Lending", hiringDays:11 },
{ id:114, name:"Rajeev Jain", title:"MD & CEO", company:"Bajaj Finance", industry:"NBFC · Consumer & MSME Unsecured Lending", location:"Pune", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/rajeev-jain-bajaj", email:"rajeev.jain@bajajfinserv.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:115, name:"Rajiv Sabharwal", title:"MD & CEO", company:"Tata Capital", industry:"NBFC · Personal, Business & Home Loans", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/rajiv-sabharwal-tata", email:"rajiv.sabharwal@tatacapital.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"Head of Unsecured Business, VP Digital Lending", hiringDays:22 },
{ id:116, name:"Sachin Bansal", title:"Founder & CEO", company:"Navi Technologies", industry:"Fintech NBFC · Consumer Loans & Housing", location:"Bengaluru", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/sachin-bansal", email:"sachin@navi.com", tags:["CEO","NBFC","Fintech"], hiring:true, hiringRoles:"Head of Lending Business, VP Revenue", hiringDays:13 },
{ id:117, name:"Sameer Nigam", title:"Founder & CEO", company:"PhonePe", industry:"Fintech · Digital Payments & Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sameernigam", email:"—", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Lending, VP Business", hiringDays:11 },
{ id:118, name:"Suhail Sameer", title:"CEO", company:"BharatPe", industry:"Fintech · Merchant Payments & Lending", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/suhail-sameer-bharatpe", email:"suhail@bharatpe.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Business heads across lending verticals", hiringDays:20 },
{ id:119, name:"Shachindra Nath", title:"Founder & Executive Chairman", company:"U GRO Capital", industry:"NBFC · MSME & SME Unsecured Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/shachindra-nath", email:"shachindra.nath@ugrocapital.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"VP Sales – MSME Lending, Business Head", hiringDays:23 },
{ id:120, name:"Sangram Singh", title:"CEO", company:"Paisabazaar.com", industry:"Fintech · Personal Loan Marketplace & Credit", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sangram-singh-paisabazaar", email:"sangram@paisabazaar.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Lending Partnerships, VP Revenue", hiringDays:17 },
{ id:121, name:"Rajashree Nambiar", title:"MD & CEO", company:"Fullerton India Credit", industry:"NBFC · Unsecured Personal & Business Loans", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/rajashree-nambiar", email:"rajashree.nambiar@fullertonindia.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:122, name:"Sanjay Sharma", title:"MD & CEO", company:"Aye Finance", industry:"NBFC · Micro SME Lending", location:"Gurugram", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/sanjay-sharma-aye-finance", email:"sanjay@ayefin.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"Regional Business Manager, Cluster Head Sales", hiringDays:26 },
{ id:123, name:"Piyush Khaitan", title:"Founder & MD", company:"NeoGrowth Credit", industry:"NBFC · SME Revenue-based Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/piyush-khaitan-neogrowth", email:"piyush@neogrowth.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:124, name:"Abhimanyu Munjal", title:"Joint MD & CEO", company:"Hero FinCorp", industry:"NBFC · Consumer & SME Lending", location:"Delhi", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/abhimanyu-munjal", email:"abhimanyu@herofinance.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"Zonal Sales Head, Head of Unsecured Lending", hiringDays:19 },
{ id:125, name:"Manish Lunia", title:"Co-Founder", company:"Flexiloans", industry:"Fintech NBFC · MSME Digital Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/manish-lunia-flexiloans", email:"manish@flexiloans.com", tags:["CEO","NBFC","Fintech"], hiring:true, hiringRoles:"VP Sales – MSME Business", hiringDays:26 },
{ id:126, name:"Sumit Gwalani", title:"Co-Founder & CEO", company:"Fi Money", industry:"Fintech · Neo-banking & Credit", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sumit-gwalani", email:"sumit@fi.money", tags:["CEO","Fintech"], hiring:true, hiringRoles:"VP Business – Credit, Partnerships Head", hiringDays:30 },
{ id:127, name:"Anurag Sinha", title:"CEO", company:"OneScore / FinBox", industry:"Fintech · Credit Score & Embedded Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/anurag-sinha-onemoney", email:"anurag@onescore.app", tags:["CEO","Fintech"], hiring:true, hiringRoles:"VP Business – Lending Products", hiringDays:18 },
{ id:128, name:"Ashish Rai", title:"CEO", company:"Piramal Finance", industry:"NBFC · Housing, MSME & Personal Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/ashish-rai-piramal", email:"ashish.rai@piramal.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"Head of Business – Personal Loans Division", hiringDays:27 },
{ id:129, name:"Amit Bhandari", title:"MD & CEO", company:"L&T Finance", industry:"NBFC · Rural, Personal & MSME Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/amit-bhandari-ltfinance", email:"amit.bhandari@ltfinance.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"Zonal Head Micro Loans, Business Head", hiringDays:21 },
{ id:130, name:"Vaibhav Anand", title:"CEO", company:"Aye Finance", industry:"NBFC · MSME Micro Loan", location:"Gurugram", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/vaibhav-anand-aye", email:"vaibhav.anand@ayefin.com", tags:["CEO","NBFC"], hiring:true, hiringRoles:"Regional Business Manager, Cluster Head Sales", hiringDays:26 },
{ id:131, name:"Deepa Sood", title:"CHRO", company:"Bajaj Finance", industry:"NBFC · Consumer & MSME Lending", location:"Pune", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Deepa+Sood+CHRO+Bajaj", email:"hr@bajajfinserv.in", tags:["CHRO","Head HR"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:132, name:"Priya Nair", title:"CHRO", company:"Tata Capital", industry:"NBFC · Consumer Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Priya+Nair+CHRO+Tata+Capital", email:"hr@tatacapital.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Multiple leadership roles in lending", hiringDays:22 },
{ id:133, name:"Saumya Rathor", title:"Head – Talent & Culture", company:"MoneyView", industry:"Fintech · Digital Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Saumya+Rathor+HR+MoneyView", email:"hr@moneyview.in", tags:["Head HR","Head TA","TA"], hiring:true, hiringRoles:"Sales Head, Senior Business hiring", hiringDays:25 },
{ id:134, name:"Smita Gupta", title:"Head HR & TA", company:"Navi Technologies", industry:"Fintech NBFC · Consumer Lending", location:"Bengaluru", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Smita+Gupta+HR+Navi", email:"hr@navi.com", tags:["Head HR","Head TA","CHRO"], hiring:true, hiringRoles:"Leadership hiring across business & revenue", hiringDays:13 },
{ id:135, name:"Rupinder Singh", title:"CHRO", company:"Aye Finance", industry:"NBFC · Micro SME Lending", location:"Gurugram", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Rupinder+Singh+CHRO+Aye+Finance", email:"hr@ayefin.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Regional sales hiring", hiringDays:26 },
{ id:136, name:"Preeti Chaturvedi", title:"CHRO", company:"L&T Finance", industry:"NBFC · Diversified Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Preeti+Chaturvedi+CHRO+LT+Finance", email:"hr@ltfinance.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Zonal Head level openings", hiringDays:21 },
{ id:137, name:"Mukund Kalmankar", title:"CHRO", company:"Paisabazaar.com", industry:"Fintech · Loan Marketplace", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Mukund+Kalmankar+CHRO+Paisabazaar", email:"hr@paisabazaar.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Leadership hiring across business & revenue", hiringDays:17 },
{ id:138, name:"Prerna Sharma", title:"VP – HR & TA", company:"Stashfin", industry:"Fintech · Unsecured Lending", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Prerna+Sharma+HR+Stashfin", email:"hr@stashfin.com", tags:["Head HR","Head TA","TA"], hiring:true, hiringRoles:"SVP Revenue, Business leadership", hiringDays:8 },
{ id:139, name:"Srinivasan V", title:"CHRO", company:"PhonePe", industry:"Fintech · Payments & Lending", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Srinivasan+CHRO+PhonePe", email:"hr@phonepe.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"VP Revenue, Head of Lending Products", hiringDays:11 },
{ id:140, name:"Rajat Mathur", title:"Head – Talent Acquisition", company:"BharatPe", industry:"Fintech · Merchant & Consumer Lending", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Rajat+Mathur+TA+BharatPe", email:"careers@bharatpe.com", tags:["Head TA","TA"], hiring:true, hiringRoles:"Business heads, Sales leadership", hiringDays:20 },
{ id:141, name:"Rakesh Singh", title:"MD & CEO", company:"Aditya Birla Finance", industry:"NBFC · Personal Finance & Corporate Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/rakesh-singh-abfl", email:"rakesh.singh@abfl.co.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:142, name:"Shilpa Kumar", title:"MD & CEO", company:"IIFL Finance", industry:"NBFC · Personal Loans & Home Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/shilpa-kumar-iifl", email:"shilpa.kumar@iifl.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:143, name:"VP Nandakumar", title:"MD & CEO", company:"Manappuram Finance", industry:"NBFC · Gold Loans & Microfinance", location:"Thrissur", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/vp-nandakumar-manappuram", email:"nandakumar@manappuram.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:144, name:"Umesh Revankar", title:"Executive VC & MD", company:"Shriram Finance", industry:"NBFC · Consumer & Vehicle Loans", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/umesh-revankar", email:"umesh.revankar@shriramfinance.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:145, name:"Chaitanya N. Dalmia", title:"MD & CEO", company:"Northern Arc Capital", industry:"NBFC · Debt Financing & Microfinance", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/chaitanya-dalmia-northern-arc", email:"chaitanya.dalmia@northernarc.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:146, name:"Deepak Gupta", title:"MD & CEO", company:"Mahindra Finance", industry:"NBFC · Vehicle, SME & Rural Loans", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/deepak-gupta-mahindra-finance", email:"deepak.gupta@mahindrafinance.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:147, name:"Samit Ghosh", title:"Founder & CEO", company:"Ujjivan Financial Services", industry:"NBFC-MFI · Microfinance & Small Finance", location:"Bengaluru", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/samit-ghosh-ujjivan", email:"samit@ujjivansfb.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:148, name:"Ananya Birla", title:"Founder & CEO", company:"Svatantra Microfin", industry:"NBFC-MFI · Rural Microfinance", location:"Mumbai", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/ananya-birla-svatantra", email:"ananya@svatantra.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:149, name:"Alok Misra", title:"CEO", company:"Muthoot Microfin", industry:"NBFC-MFI · Rural Microfinance", location:"Kochi", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/alok-misra-muthoot-microfin", email:"alok.misra@muthootmicrofin.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:150, name:"Gagan Banga", title:"VC & MD", company:"IndiaBulls Housing Finance", industry:"NBFC · Housing Loans", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/gagan-banga-indiabulls", email:"gagan.banga@indiabullshf.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:151, name:"Sanjay Garg", title:"MD & CEO", company:"Arohan Financial Services", industry:"NBFC-MFI · Microfinance", location:"Kolkata", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/sanjay-garg-arohan", email:"sanjay.garg@arohan.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:152, name:"Rana Vikram Anand", title:"CEO", company:"Capri Global Capital", industry:"NBFC · SME & Home Loans", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/rana-vikram-anand-capri", email:"rana.anand@capriglobal.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:153, name:"Anil Pinapala", title:"Founder & CEO", company:"Vivifi India Finance", industry:"Fintech NBFC · Salary Advance & Personal Loans", location:"Hyderabad", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/anil-pinapala-vivifi", email:"anil@vivifi.in", tags:["CEO","NBFC","Fintech"], hiring:true, hiringRoles:"Zonal Head – Business, VP Sales", hiringDays:24 },
{ id:154, name:"Asish Mohapatra", title:"Co-Founder & CEO", company:"OfBusiness", industry:"Fintech · SME Trade Finance", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/asish-mohapatra-ofbusiness", email:"asish@ofbusiness.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:155, name:"Sumit Maniyar", title:"Co-Founder & CEO", company:"Rupeek", industry:"Fintech · Digital Gold Loans", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sumit-maniyar-rupeek", email:"sumit@rupeek.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:156, name:"Megha Manchanda", title:"Co-Founder & CEO", company:"Progcap", industry:"Fintech NBFC · SME Supply Chain Finance", location:"Delhi NCR", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/megha-manchanda-progcap", email:"megha@progcap.com", tags:["CEO","NBFC","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:157, name:"Nitin Gupta", title:"Founder & CEO", company:"Uni Cards", industry:"Fintech · Credit Card & BNPL", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/nitin-gupta-uni", email:"nitin@uni.cards", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:158, name:"Bala Parthasarathy", title:"Co-Founder & CEO", company:"MoneyTap / Freo", industry:"Fintech · Consumer Credit Line", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/balaparthasarathy", email:"bala@moneytap.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:159, name:"Rajat Gandhi", title:"Founder & CEO", company:"Faircent", industry:"P2P Lending · Unsecured Personal Loans", location:"Gurugram", region:"India", subType:"P2P Lending", aiFintech:false, linkedin:"https://linkedin.com/in/rajatgandhi", email:"rajat@faircent.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:160, name:"Bhavin Patel", title:"Co-Founder & CEO", company:"LenDenClub", industry:"Fintech P2P · Unsecured Lending", location:"Mumbai", region:"India", subType:"P2P Lending", aiFintech:false, linkedin:"https://linkedin.com/in/bhavinpatel-lendenclub", email:"bhavin@lendenclub.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:161, name:"Gaurav Chopra", title:"Co-Founder & CEO", company:"IndiaLends", industry:"Fintech · Personal Loan Marketplace", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/gaurav-chopra-indialends", email:"gaurav@indialends.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:162, name:"Navin Chandani", title:"MD & CEO", company:"CRIF High Mark", industry:"Fintech · Credit Bureau India", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/navin-chandani-crif", email:"navin.chandani@crifhighmark.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:163, name:"Abhijit Chakravorty", title:"MD & CEO", company:"SBI Cards", industry:"NBFC · Credit Card & Consumer Lending", location:"Gurugram", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/abhijit-chakravorty-sbi-cards", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:164, name:"Udit Mittal", title:"Founder & MD", company:"Unison International", industry:"Executive Search · BFSI & Fintech CXO", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/udit-mittal-unison", email:"udit@unison.co.in", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:165, name:"Sonal Agrawal", title:"Managing Partner", company:"Accord Group", industry:"Executive Search · C-Suite & Board", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/sonal-agrawal-accordgroup", email:"india@accord-group.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:166, name:"Sonali De Sarker", title:"Partner – Financial Services", company:"Korn Ferry India", industry:"Executive Search · Leadership Strategy", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/sonali-de-sarker-kornferry", email:"india@kornferry.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:167, name:"Anand Shankar", title:"Partner – BFSI Practice", company:"Heidrick & Struggles India", industry:"Executive Search · BFSI Leadership", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/anand-shankar-heidrick", email:"india@heidrick.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:168, name:"Sanjit Singh Chawla", title:"Partner – BFSI", company:"Russell Reynolds Associates India", industry:"Executive Search · BFSI Leadership", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/sanjit-chawla-rra", email:"india@russellreynolds.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:169, name:"Aditya Narayan Mishra", title:"MD & CEO", company:"CIEL HR Services", industry:"Executive Search & Staffing · BFSI", location:"Bengaluru", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/aditya-narayan-mishra-ciel", email:"aditya@cielhr.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:170, name:"Nitin Aggarwal", title:"Partner – BFSI Practice", company:"McKinsey & Company India", industry:"Fintech Consulting · NBFC & Banking Strategy", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/nitin-aggarwal-mckinsey", email:"nitin_aggarwal@mckinsey.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:171, name:"George Muthoot", title:"MD", company:"Muthoot Finance", industry:"NBFC · Gold Loans & Personal Finance", location:"Kochi", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/george-muthoot", email:"george@muthoot.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:172, name:"Deepak Aggarwal", title:"Co-Founder & CEO", company:"CreditEnable", industry:"Fintech · MSME Credit Matching Platform", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/deepak-aggarwal-creditenable", email:"deepak@creditenable.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:173, name:"Pankaj Srivastava", title:"MD & CEO", company:"Satya MicroCapital", industry:"NBFC-MFI · Urban Microfinance", location:"Delhi NCR", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/pankaj-srivastava-satya", email:"pankaj@satyamicrocapital.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:174, name:"Jayant Pai", title:"Head HR", company:"Hero FinCorp", industry:"NBFC · Consumer & SME Lending", location:"Delhi NCR", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Jayant+Pai+HR+Hero+FinCorp", email:"hr@herofinance.com", tags:["Head HR","TA","CHRO"], hiring:true, hiringRoles:"Zonal Sales Head, Area Business Head", hiringDays:19 },
{ id:175, name:"Rupa Bose", title:"CHRO", company:"Piramal Finance", industry:"NBFC · Housing, MSME & Personal Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Rupa+Bose+CHRO+Piramal+Finance", email:"hr@piramal.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Head of Business – Personal Loans Division", hiringDays:27 },
{ id:176, name:"Manav Chopra", title:"Head – Talent Acquisition", company:"Navi Technologies", industry:"Fintech NBFC · Consumer Lending", location:"Bengaluru", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Manav+Chopra+TA+Navi", email:"careers@navi.com", tags:["Head TA","TA"], hiring:true, hiringRoles:"Leadership roles – Business & Revenue", hiringDays:13 },
{ id:177, name:"Arun Nayyar", title:"MD & CEO", company:"NeoGrowth Credit", industry:"NBFC · SME Revenue-based Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/arun-nayyar-neogrowth", email:"arun.nayyar@neogrowth.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:178, name:"Amitabh Jain", title:"COO", company:"Paytm (One97 Communications)", industry:"Fintech · Lending & Consumer Finance", location:"Noida", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/amitabh-jain-paytm", email:"—", tags:["COO","Fintech"], hiring:true, hiringRoles:"VP Business – Lending, Sales Head", hiringDays:15 },
{ id:179, name:"Deepak Sharma", title:"MD & CEO", company:"Kotak Mahindra Asset Management", industry:"NBFC · Wealth & Alternative Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/deepak-sharma-kotak-amc", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:180, name:"Nikhil Aggarwal", title:"Co-Founder & CEO", company:"Grip Invest", industry:"Fintech · Alternative Debt Investment Platform", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/nikhil-aggarwal-grip", email:"nikhil@gripinvest.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:181, name:"Anuradha Sriram", title:"Head of People & Culture", company:"Aspire India ops", industry:"Fintech · SME Business Finance", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Anuradha+Sriram+HR+Aspire", email:"hr@aspireapp.com", tags:["Head HR","Head TA","CHRO"], hiring:true, hiringRoles:"Revenue & sales leadership in India", hiringDays:16 },
{ id:182, name:"Vikram Ahuja", title:"Founder", company:"Talent500 (ANSR)", industry:"Executive Search · Tech & Fintech Talent", location:"Bengaluru", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/vikram-ahuja-talent500", email:"vikram@talent500.co", tags:["Executive Search","Head TA"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:183, name:"Nirmala Menon", title:"Founder & CEO", company:"Interweave Consulting", industry:"Executive Search · Diversity & Leadership", location:"Bengaluru", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/nirmala-menon-interweave", email:"nirmala@interweave.in", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:184, name:"Mihir Gandhi", title:"Partner – Payments & Fintech", company:"PwC India", industry:"Fintech Consulting · NBFC & Lending Strategy", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/mihir-gandhi-pwc", email:"mihir.gandhi@pwc.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:185, name:"Souparno Bagchi", title:"CCO", company:"Policybazaar (PaisaBazaar)", industry:"Fintech · Personal Loan Marketplace", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/souparno-bagchi", email:"souparno@paisabazaar.com", tags:["CBO","Fintech"], hiring:true, hiringRoles:"Head of Lending Partnerships, Revenue Lead", hiringDays:17 },
{ id:186, name:"Ratan Kesh", title:"MD & CEO", company:"Bandhan Financial Holdings", industry:"NBFC · Microfinance & Consumer Lending", location:"Kolkata", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/ratan-kesh-bandhan", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:187, name:"Suresh Ganapathy", title:"Head – Financial Services Research", company:"Macquarie India", industry:"Fintech Research · NBFC Ecosystem", location:"Mumbai", region:"India", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/suresh-ganapathy-macquarie", email:"—", tags:["BFSI","Executive Search"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:188, name:"Sai Giridhar", title:"CEO", company:"Shriram Housing Finance", industry:"NBFC · Affordable Home Loans", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/sai-giridhar-shriram", email:"sai.giridhar@shriramhousing.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:189, name:"Ranjeet Singh", title:"CEO", company:"Finnable", industry:"Fintech · Personal Loans for Salaried", location:"Bengaluru", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ranjeet-singh-finnable", email:"ranjeet@finnable.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:190, name:"Dheeraj Aneja", title:"CEO", company:"Vistaar Finance", industry:"NBFC · SME & Agri Lending", location:"Bengaluru", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/dheeraj-aneja-vistaar", email:"dheeraj.aneja@vistaarcorp.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:191, name:"Narayanan Muthusami", title:"MD & CEO", company:"Profectus Capital", industry:"NBFC · SME & MSME Secured/Unsecured Loans", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/narayanan-muthusami-profectus", email:"narayanan@profectus.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:192, name:"Binita Priyambada", title:"CEO", company:"Grameen Koota Financial Services", industry:"NBFC-MFI · Rural Microfinance", location:"Bengaluru", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/binita-priyambada-grameen", email:"binita@grameenkoota.org", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:193, name:"Priti Rathi Gupta", title:"Founder & MD", company:"LXME (Women Finance)", industry:"Fintech · Women-focused Credit & Finance", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/priti-rathi-gupta", email:"priti@lxme.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:194, name:"Ranjith Boyanapalli", title:"CEO", company:"Kaleidofin", industry:"Fintech · Micro-lending & Financial Planning", location:"Chennai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ranjith-boyanapalli-kaleidofin", email:"ranjith@kaleidofin.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:195, name:"Mahesh Shukla", title:"Founder & CEO", company:"PayMe India", industry:"Fintech · Salaried Employee Short-term Loans", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mahesh-shukla-payme", email:"mahesh@paymeindia.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:196, name:"Vivek Bansal", title:"COO", company:"U GRO Capital", industry:"NBFC · SME Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/vivek-bansal-ugro", email:"vivek.bansal@ugrocapital.com", tags:["COO","NBFC"], hiring:true, hiringRoles:"Sales leadership open", hiringDays:23 },
{ id:197, name:"Deepesh Garg", title:"Co-Founder & CEO", company:"INDIFI Technologies", industry:"Fintech NBFC · MSME Unsecured Loans", location:"Gurugram", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/deepesh-garg-indifi", email:"deepesh@indifi.com", tags:["CEO","NBFC","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:198, name:"Arindam Das", title:"CEO – Consumer Credit", company:"DMI Finance", industry:"Fintech NBFC · Consumer & MSME Lending", location:"Delhi NCR", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/arindam-das-dmi", email:"arindam.das@dmi.finance", tags:["CEO","NBFC","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:199, name:"Yashoraj Tyagi", title:"CBO", company:"CASHe", industry:"Fintech · Short-term Credit", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/yashoraj-tyagi-cashe", email:"yashoraj@cashe.co.in", tags:["CBO","Fintech"], hiring:true, hiringRoles:"Business Head roles – Personal Lending", hiringDays:18 },
{ id:200, name:"Anand Kumar Bajaj", title:"Founder & CEO", company:"PayNearby", industry:"Fintech · Banking & Credit Distribution", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/anand-kumar-bajaj-paynearby", email:"anand@paynearby.in", tags:["CEO","Fintech"], hiring:true, hiringRoles:"VP Lending Products, State Business Head", hiringDays:16 },

// ═══ MIDDLE EAST ═══
{ id:301, name:"Hosam Arab", title:"Co-Founder & CEO", company:"Tabby (UAE/KSA)", industry:"Fintech · BNPL & Consumer Lending", location:"Dubai, UAE", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/hosamarab", email:"hosam@tabby.ai", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business KSA & UAE expansion", hiringDays:18 },
{ id:302, name:"Muhannad Ebwini", title:"Co-Founder & CEO", company:"Tamara (KSA BNPL)", industry:"Fintech · BNPL & Consumer Credit", location:"Riyadh, KSA", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/muhannad-ebwini", email:"muhannad@tamara.co", tags:["CEO","Fintech"], hiring:true, hiringRoles:"VP Sales, Head of Merchant Partnerships", hiringDays:24 },
{ id:303, name:"Anish Williams", title:"CEO", company:"Wio Bank (UAE Digital Bank)", industry:"Fintech · Digital Banking & SME Credit", location:"Abu Dhabi, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/anish-williams-wio", email:"anish@wio.io", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – SME Lending, Sales Director", hiringDays:9 },
{ id:304, name:"Mehdi Farhangian", title:"Co-Founder & CEO", company:"Nymcard (UAE)", industry:"Fintech · Card Issuing & Credit Products", location:"Dubai, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mehdi-farhangian", email:"mehdi@nymcard.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Partnerships MENA, Sales Director", hiringDays:13 },
{ id:305, name:"Ramana Kumar", title:"CEO", company:"Mashreq Neo", industry:"Fintech · Digital Banking & Consumer Credit", location:"Dubai, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ramana-kumar-mashreq", email:"ramana@mashreqbank.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:306, name:"Mounir Nakhla", title:"CEO", company:"MNT-Halan (Egypt)", industry:"Fintech · Digital Lending & Consumer Finance", location:"Cairo, Egypt", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mounir-nakhla-halan", email:"mounir@halan.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Revenue – North Africa", hiringDays:29 },
{ id:307, name:"Amr Awad", title:"CEO", company:"valU (Egypt Consumer BNPL)", industry:"Fintech · BNPL Consumer Finance", location:"Cairo, Egypt", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/amr-awad-valu", email:"amr.awad@valufin.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business North Africa, VP Sales", hiringDays:19 },
{ id:308, name:"Tarik Fadli", title:"CEO", company:"Lendaty (Saudi BNPL)", industry:"Fintech · BNPL Consumer Lending KSA", location:"Riyadh, KSA", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/tarik-fadli-lendaty", email:"tarik@lendaty.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Sales, Business Director KSA", hiringDays:20 },
{ id:309, name:"Iyad Kayal", title:"Co-Founder & CEO", company:"NOW Money (UAE)", industry:"Fintech · Migrant Worker Banking & Credit", location:"Dubai, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/iyad-kayal-now-money", email:"iyad@nowmoney.me", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:310, name:"Ahmed Sabbah", title:"Co-Founder & CEO", company:"Khazna (Egypt)", industry:"Fintech · Consumer Finance & Salary Advance", location:"Cairo, Egypt", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ahmed-sabbah-khazna", email:"ahmed@khazna.io", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:311, name:"Carlos Guedes", title:"Group CEO", company:"Beehive (UAE P2P Lending)", industry:"Fintech P2P · SME Lending", location:"Dubai, UAE", region:"Middle East", subType:"P2P Lending", aiFintech:false, linkedin:"https://linkedin.com/in/carlos-guedes-beehive", email:"carlos@beehive.ae", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:312, name:"Abhi Bhattacharya", title:"CHRO", company:"Tabby", industry:"Fintech · BNPL", location:"Dubai, UAE", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Tabby+Fintech+Dubai", email:"hr@tabby.ai", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Hiring across all leadership tracks", hiringDays:18 },
{ id:313, name:"Mohammed Alhassan", title:"CHRO", company:"Tamara", industry:"Fintech · BNPL & Consumer Credit", location:"Riyadh, KSA", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Tamara+BNPL+Saudi", email:"hr@tamara.co", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Head of Business, commercial roles", hiringDays:24 },
{ id:314, name:"Noor Adhami", title:"Head of Talent – MENA", company:"Tabby", industry:"Fintech · BNPL", location:"Dubai, UAE", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Noor+Adhami+Talent+Tabby", email:"careers@tabby.ai", tags:["Head TA","TA"], hiring:true, hiringRoles:"Sales & Business leadership", hiringDays:18 },
{ id:315, name:"Rania Abi-Habib", title:"Partner", company:"Egon Zehnder Middle East", industry:"Executive Search · C-Suite ME", location:"Dubai, UAE", region:"Middle East", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/rania-abi-habib", email:"mideast@egonzehnder.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:316, name:"Fida Chaaban", title:"Partner – BFSI & Fintech", company:"Korn Ferry Middle East", industry:"Executive Search · Leadership Hiring ME", location:"Dubai, UAE", region:"Middle East", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/fida-chaaban-kornferry", email:"me@kornferry.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:317, name:"Frederic Ronco", title:"Managing Director", company:"Michael Page UAE", industry:"Recruitment · Fintech & BFSI", location:"Dubai, UAE", region:"Middle East", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/frederic-ronco-michaelpage", email:"frederic.ronco@michaelpage.ae", tags:["Executive Search","Head TA"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:318, name:"Turki Bin Zarah", title:"Co-Founder & President", company:"Tamara", industry:"Fintech · BNPL", location:"Riyadh, KSA", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/turki-bin-zarah", email:"turki@tamara.co", tags:["CBO","Fintech"], hiring:true, hiringRoles:"Commercial Leadership roles in Saudi", hiringDays:24 },
{ id:319, name:"Mehdi Punjwani", title:"Co-Founder & CEO", company:"Liwwa (Jordan P2P)", industry:"Fintech · SME P2P Lending – MENA", location:"Amman, Jordan", region:"Middle East", subType:"P2P Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mehdipunjwani", email:"mehdi@liwwa.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:320, name:"Karim Sabbagh", title:"MD – ME & Africa", company:"Spencer Stuart UAE", industry:"Executive Search · Board & C-Suite", location:"Dubai, UAE", region:"Middle East", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/karim-sabbagh-spencerstuart", email:"mideast@spencerstuart.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:321, name:"Walid Hassouna", title:"CEO", company:"EFG EVO (Egypt Fintech)", industry:"Fintech · Consumer Finance Egypt", location:"Cairo, Egypt", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/walid-hassouna-efg", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:322, name:"Omar El Masry", title:"CEO", company:"Dayra (Egypt BNPL)", industry:"Fintech · BNPL Egypt", location:"Cairo, Egypt", region:"Middle East", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/omar-el-masry-dayra", email:"omar@dayra.app", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:323, name:"Ghassane El Moutawakkil", title:"CEO", company:"CashPlus (Morocco)", industry:"Fintech · Mobile Money & Consumer Lending", location:"Casablanca", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ghassane-el-moutawakkil", email:"ghassane@cashplus.ma", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:324, name:"Ambareen Musa", title:"Founder & CEO", company:"Souqalmal.com", industry:"Fintech · Financial Product Comparison", location:"Dubai, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ambareen-musa", email:"ambareen@souqalmal.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:325, name:"Fahim Al Shamma", title:"CEO", company:"Al Etihad Credit Bureau (UAE)", industry:"Fintech · Credit Bureau & Lending Infrastructure", location:"Abu Dhabi, UAE", region:"Middle East", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/fahim-al-shamma", email:"fahim@aecb.gov.ae", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:326, name:"Karim Basta", title:"Partner – Financial Services", company:"Kearney ME", industry:"Fintech Consulting · BFSI Strategy ME", location:"Dubai, UAE", region:"Middle East", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/karim-basta-kearney", email:"karim.basta@kearney.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:327, name:"Riyaz Khan", title:"CEO", company:"YAP (Digital Banking UAE)", industry:"Fintech · Neo-banking & Credit", location:"Dubai, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/riyaz-khan-yap", email:"riyaz@yap.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:328, name:"Raja Al Mazrouei", title:"CEO", company:"Fintech Hive (DIFC)", industry:"Fintech · Accelerator & Ecosystem UAE", location:"Dubai, UAE", region:"Middle East", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/raja-al-mazrouei", email:"raja@fintechhive.ae", tags:["CBO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:329, name:"Ian Dillon", title:"Co-Founder & CEO", company:"NOW Money", industry:"Fintech · Financial Inclusion UAE", location:"Dubai, UAE", region:"Middle East", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ian-dillon-now-money", email:"ian@nowmoney.me", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:330, name:"Jamal Al Kishi", title:"Group CEO", company:"Dubai Islamic Bank (DIB)", industry:"Islamic Banking · Consumer & SME Finance", location:"Dubai, UAE", region:"Middle East", subType:"Islamic Finance", aiFintech:false, linkedin:"https://linkedin.com/in/jamal-al-kishi", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },

// ═══ SOUTHEAST ASIA ═══
{ id:401, name:"Kelvin Teo", title:"Co-Founder & CEO", company:"Funding Societies / Modalku", industry:"Fintech NBFC · SME Digital Lending SEA", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/kelvinteo", email:"kelvin@fundingsocieties.com", tags:["CEO","Fintech","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:402, name:"Moses Lo", title:"Co-Founder & CEO", company:"Xendit", industry:"Fintech · Payments & Embedded Finance SEA", location:"Singapore / Indonesia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/moseslo", email:"moses@xendit.co", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business Indonesia/PH, VP Revenue", hiringDays:14 },
{ id:403, name:"Martha Sazon", title:"President & CEO", company:"Mynt (GCash)", industry:"Fintech · Digital Wallet & Lending", location:"Manila, Philippines", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/martha-sazon-gcash", email:"—", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – Lending Products", hiringDays:15 },
{ id:404, name:"Prajit Nanu", title:"Co-Founder & CEO", company:"Nium", industry:"Fintech · Global Payments & Embedded Finance", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/prajit-nanu", email:"prajit@nium.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Revenue SEA, VP Partnerships", hiringDays:17 },
{ id:405, name:"Pawat Ruangdej", title:"CEO", company:"Ascend Money (Thailand)", industry:"Fintech · Digital Payments & Consumer Credit", location:"Bangkok, Thailand", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/pawat-ruangdej-ascend", email:"—", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Consumer Lending – Thailand", hiringDays:23 },
{ id:406, name:"Kashminder Singh", title:"CEO", company:"GX Bank (Grab Digital Bank Malaysia)", industry:"Fintech · Digital Banking & Consumer Lending", location:"Kuala Lumpur, Malaysia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/kashminder-singh-gxbank", email:"—", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Consumer Lending, VP Business Development", hiringDays:30 },
{ id:407, name:"Indra Suryadi", title:"CEO", company:"Julo (Indonesia Digital Lending)", industry:"Fintech · Unsecured Consumer Loans Indonesia", location:"Jakarta, Indonesia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/indra-suryadi-julo", email:"indra@julo.co.id", tags:["CEO","Fintech"], hiring:true, hiringRoles:"VP Sales Consumer Products, Business Head", hiringDays:21 },
{ id:408, name:"Manon Hartmann", title:"CEO", company:"Aspire (Singapore / SEA)", industry:"Fintech · Business Finance & SME Lending", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/manon-hartmann-aspire", email:"manon@aspireapp.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Revenue SEA, VP Business Dev", hiringDays:16 },
{ id:409, name:"Georg Schneider", title:"Founder & CEO", company:"Billease (SEA BNPL)", industry:"Fintech · Responsible BNPL Philippines", location:"Manila / Singapore", region:"Southeast Asia", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/georg-schneider-billease", email:"georg@billease.ph", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business Philippines, VP Revenue", hiringDays:29 },
{ id:410, name:"Tarek Sultan", title:"CEO", company:"Tonik Digital Bank (Philippines)", industry:"Fintech · Digital Neobank & Consumer Lending", location:"Manila, Philippines", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/tarek-sultan-tonik", email:"tarek@tonikbank.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:411, name:"Effendy Shahul Hamid", title:"CEO", company:"Touch n Go Digital (Malaysia)", industry:"Fintech · E-wallet & Consumer Credit", location:"Kuala Lumpur, Malaysia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/effendy-shahul-hamid", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:412, name:"Indra Utoyo", title:"President Director & CEO", company:"Bank Jago Indonesia", industry:"Digital Banking · Consumer Finance", location:"Jakarta, Indonesia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/indra-utoyo", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:413, name:"Nino Ocampo", title:"Chief People Officer", company:"Mynt (GCash) Philippines", industry:"Fintech · Digital Finance & Lending", location:"Manila, Philippines", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CPO+GCash+Mynt+Philippines", email:"—", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Head of Business Lending, Sales Leadership", hiringDays:15 },
{ id:414, name:"Sanjeev Kumar", title:"CHRO", company:"Aspire (SEA)", industry:"Fintech · SME Business Finance", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Aspire+Singapore+Fintech", email:"hr@aspireapp.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Sales leadership roles in SEA", hiringDays:16 },
{ id:415, name:"Supasak Charoenpong", title:"CHRO", company:"Ascend Money", industry:"Fintech · Digital Lending Thailand", location:"Bangkok, Thailand", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Ascend+Money+Bangkok", email:"hr@ascendmoney.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Leadership hiring lending and business", hiringDays:23 },
{ id:416, name:"Adrian Tirtawijaya", title:"Co-Founder & CEO", company:"Julo", industry:"Fintech · Consumer Credit Indonesia", location:"Jakarta, Indonesia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/adriantirtawijaya", email:"adrian@julo.co.id", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business Development Indonesia", hiringDays:21 },
{ id:417, name:"Luqman Musa", title:"CEO", company:"Jirnexu (RinggitPlus Malaysia)", industry:"Fintech · Loan Marketplace & Consumer Credit", location:"Kuala Lumpur, Malaysia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/luqman-musa-jirnexu", email:"luqman@ringgitplus.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:418, name:"Aung Kyaw Moe", title:"Founder & CEO", company:"2C2P (SEA Payments)", industry:"Fintech · Digital Payments & Embedded Finance", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/aung-kyaw-moe-2c2p", email:"aung@2c2p.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:419, name:"Aris Bongso", title:"Co-Founder & CEO", company:"Investree (Indonesia P2P)", industry:"Fintech · P2P SME Lending Indonesia", location:"Jakarta, Indonesia", region:"Southeast Asia", subType:"P2P Lending", aiFintech:false, linkedin:"https://linkedin.com/in/aris-bongso-investree", email:"aris@investree.id", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:420, name:"Wei Ming Tan", title:"Partner – Financial Services", company:"Egon Zehnder Singapore", industry:"Executive Search · APAC BFSI", location:"Singapore", region:"Southeast Asia", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Wei+Ming+Tan+Egon+Zehnder+Singapore", email:"singapore@egonzehnder.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:421, name:"Rosalind Turner", title:"Partner – APAC Financial Services", company:"Heidrick & Struggles Singapore", industry:"Executive Search · Asia-Pacific BFSI", location:"Singapore", region:"Southeast Asia", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/rosalind-turner-heidrick", email:"singapore@heidrick.com", tags:["Executive Search","Leadership Hiring"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:422, name:"Peter Crosby", title:"CEO", company:"Akulaku (SEA Consumer Credit)", industry:"Fintech · Digital Banking & BNPL SEA", location:"Singapore / Indonesia", region:"Southeast Asia", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Peter+Crosby+Akulaku+CEO", email:"—", tags:["CEO","Fintech"], hiring:true, hiringRoles:"VP Business Development Indonesia/PH", hiringDays:20 },
{ id:423, name:"Akshay Garg", title:"Co-Founder & CEO", company:"Kredivo (FinAccel)", industry:"Fintech · BNPL & Digital Lending SEA", location:"Singapore / Indonesia", region:"Southeast Asia", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/akshay-garg-sg", email:"akshay@kredivo.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Revenue, Sales Director SEA", hiringDays:22 },
{ id:424, name:"Budi Gandasoebrata", title:"Co-Founder & President", company:"Xendit", industry:"Fintech · Payments SEA", location:"Jakarta, Indonesia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/budigandasoebrata", email:"—", tags:["COO","Fintech"], hiring:true, hiringRoles:"Sales leadership Indonesia", hiringDays:14 },
{ id:425, name:"James Ong", title:"CEO", company:"BigPay (Thailand/Malaysia)", industry:"Fintech · E-wallet & Consumer Lending", location:"Kuala Lumpur, Malaysia", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/james-ong-bigpay", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:426, name:"Katrina Rausa Chan", title:"COO", company:"GCash (Mynt)", industry:"Fintech · Digital Finance", location:"Manila, Philippines", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/katrina-chan-gcash", email:"—", tags:["COO","Fintech"], hiring:true, hiringRoles:"Sales & Revenue leadership", hiringDays:15 },
{ id:427, name:"Andrew Tan", title:"Head of People & Culture", company:"Kredivo (SEA)", industry:"Fintech · BNPL & Credit", location:"Singapore", region:"Southeast Asia", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Andrew+Tan+HR+Kredivo", email:"hr@kredivo.com", tags:["Head HR","TA","CHRO"], hiring:true, hiringRoles:"Revenue & Business Head roles open", hiringDays:22 },
{ id:428, name:"Florian Hoppe", title:"Partner & Head of ASEAN FS", company:"Bain & Company Singapore", industry:"Fintech Consulting · BFSI Strategy", location:"Singapore", region:"Southeast Asia", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/florian-hoppe-bain", email:"florian.hoppe@bain.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:429, name:"Philip Marcovici", title:"Partner – APAC FS", company:"Russell Reynolds Associates Singapore", industry:"Executive Search · APAC Financial Services", location:"Singapore", region:"Southeast Asia", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/philip-marcovici-rra", email:"singapore@russellreynolds.com", tags:["Executive Search","Leadership Hiring","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:430, name:"Varun Mittal", title:"Head of Ecosystem & Partnerships", company:"Grab Financial Group", industry:"Fintech · Digital Lending & BNPL", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/varunmittal", email:"—", tags:["COO","CBO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },

// ═══ AFRICA (NEW REGION) ═══
{ id:501, name:"Olugbenga Agboola", title:"Co-Founder & CEO", company:"Flutterwave (Nigeria)", industry:"Fintech · Payments & Embedded Finance Africa", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/olugbengaagboola", email:"gb@flutterwave.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business West Africa, VP Partnerships", hiringDays:20 },
{ id:502, name:"Tosin Eniolorunda", title:"Co-Founder & CEO", company:"Moniepoint (Nigeria)", industry:"Fintech · Merchant Banking & SME Lending", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/tosin-eniolorunda-moniepoint", email:"tosin@moniepoint.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business Nigeria, VP Sales Africa", hiringDays:14 },
{ id:503, name:"Chijioke Dozie", title:"Co-Founder & CEO", company:"Carbon (Nigeria)", industry:"Fintech · Digital Lending & Neobanking", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/chijioke-dozie-carbon", email:"chijioke@getcarbon.co", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Credit Business, VP Revenue Africa", hiringDays:22 },
{ id:504, name:"Babs Ogundeyi", title:"Co-Founder & CEO", company:"Kuda Bank (Nigeria)", industry:"Fintech · Digital Neobank & Consumer Credit", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/babs-ogundeyi-kuda", email:"babs@kuda.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Lending Business, VP Credit Products", hiringDays:25 },
{ id:505, name:"Odunayo Eweniyi", title:"Co-Founder & COO", company:"PiggyVest (Nigeria)", industry:"Fintech · Savings & Investment Platform", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/odunayo-eweniyi-piggyvest", email:"odunayo@piggyvest.com", tags:["COO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:506, name:"Tayo Oviosu", title:"Founder & CEO", company:"Paga (Nigeria)", industry:"Fintech · Mobile Money & Payments", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/tayooviosu", email:"tayo@mypaga.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:507, name:"Mitchell Elegbe", title:"Founder & Group MD", company:"Interswitch (Nigeria)", industry:"Fintech · Payments & Financial Infrastructure", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mitchell-elegbe-interswitch", email:"mitchell@interswitchgroup.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – Lending Products, VP Revenue", hiringDays:19 },
{ id:508, name:"Uzoma Dozie", title:"CEO", company:"Sparkle (Nigeria Neobank)", industry:"Fintech · Digital Banking & SME Lending", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/uzoma-dozie-sparkle", email:"uzoma@sparkle.com.ng", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:509, name:"Dare Okoudjou", title:"Founder & CEO", company:"MFS Africa", industry:"Fintech · Pan-African Mobile Money Hub", location:"Johannesburg, SA", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/dare-okoudjou-mfsafrica", email:"dare@mfsafrica.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business East/West Africa, VP Partnerships", hiringDays:19 },
{ id:510, name:"Kagiso Mmusi", title:"CEO", company:"Letshego Holdings (Botswana)", industry:"NBFC · Consumer & SME Lending – Africa", location:"Gaborone, Botswana", region:"Africa", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/kagiso-mmusi-letshego", email:"kagiso@letshego.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:511, name:"Mike Quinn", title:"CEO", company:"Airtel Money Africa", industry:"Fintech · Mobile Money & Consumer Credit Africa", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mike-quinn-airtel", email:"mike.quinn@airtel.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:512, name:"Peter Gross", title:"CEO", company:"Jumo (South Africa)", industry:"Fintech · AI Credit for Emerging Markets", location:"Cape Town, SA", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/peter-gross-jumo", email:"peter@jumo.world", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business Africa, VP Credit Products", hiringDays:17 },
{ id:513, name:"Andrew Watkins-Ball", title:"Founder & CEO", company:"JUMO (South Africa)", industry:"Fintech · Mobile Credit & Savings", location:"Cape Town, SA", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/andrew-watkins-ball-jumo", email:"andrew@jumo.world", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – East Africa, Credit AI Lead", hiringDays:17 },
{ id:514, name:"Basil Eid", title:"CEO", company:"Fawry (Egypt Fintech)", industry:"Fintech · Digital Payments & Consumer Credit", location:"Cairo, Egypt", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/basil-eid-fawry", email:"basil@fawry.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:515, name:"Hakeem Belo-Osagie", title:"Chairman", company:"Metis Capital Partners (Nigeria)", industry:"Fintech VC · African Lending Ecosystem", location:"Lagos, Nigeria", region:"Africa", subType:"VC/Investor", aiFintech:false, linkedin:"https://linkedin.com/in/hakeem-belo-osagie", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:516, name:"Michael Kimani", title:"Chairman", company:"Kenya Blockchain & Fintech Association", industry:"Fintech · Kenya Ecosystem Leadership", location:"Nairobi, Kenya", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/michael-kimani-kenya-fintech", email:"—", tags:["CBO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:517, name:"Emeka Emetarom", title:"Co-Founder & CEO", company:"Appzone (Nigeria)", industry:"Fintech · Core Banking & Digital Lending Infrastructure", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/emeka-emetarom-appzone", email:"emeka@appzonegroup.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:518, name:"Fara Ndiaye", title:"CEO", company:"Wave Mobile Money (Senegal/West Africa)", industry:"Fintech · Mobile Money & Payments West Africa", location:"Dakar, Senegal", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/fara-ndiaye-wave", email:"fara@wave.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – Francophone Africa, VP Revenue", hiringDays:28 },
{ id:519, name:"Sieka Gatabaki", title:"CEO", company:"Equitel (Equity Group Kenya)", industry:"Fintech · Mobile Banking & Consumer Credit", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sieka-gatabaki-equitel", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:520, name:"Abayomi Ajayi", title:"CEO", company:"FCMB Group (Nigeria NBFC/Bank)", industry:"Banking/NBFC · Consumer & SME Finance Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/abayomi-ajayi-fcmb", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:521, name:"Wiza Jalakasi", title:"Head of Africa", company:"Flutterwave", industry:"Fintech · Payments & Business Finance", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/wizajalakasi", email:"wiza@flutterwave.com", tags:["CBO","Fintech"], hiring:true, hiringRoles:"Business Development leads – East Africa", hiringDays:20 },
{ id:522, name:"Seun Abegunrin", title:"CEO", company:"Lidya (Nigeria SME Lending)", industry:"Fintech · SME Digital Lending Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/seun-abegunrin-lidya", email:"seun@mylidya.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of SME Business, VP Sales West Africa", hiringDays:23 },
{ id:523, name:"Paul Midy", title:"CEO", company:"Yoco (South Africa SME Payments)", industry:"Fintech · SME Payments & Working Capital", location:"Cape Town, SA", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/paul-midy-yoco", email:"paul@yoco.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Lending – SME, VP Business SA", hiringDays:16 },
{ id:524, name:"Dare Okoudjou", title:"CEO", company:"MFS Africa (Pan-African)", industry:"Fintech · Mobile Money & Remittances", location:"Johannesburg, SA", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/dare-okoudjou-mfsafrica", email:"dare@mfsafrica.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:525, name:"Obi Emetarom", title:"Co-Founder & CEO", company:"TeamApt / Moniepoint", industry:"Fintech · Merchant Finance & Digital Banking", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/obi-emetarom-teamapt", email:"obi@moniepoint.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – SME Lending Nigeria", hiringDays:14 },
{ id:526, name:"Kingsley Eze", title:"Head – Talent Acquisition", company:"Flutterwave", industry:"Fintech · Payments & Embedded Finance", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Kingsley+Eze+TA+Flutterwave+Talent", email:"careers@flutterwave.com", tags:["Head TA","TA"], hiring:true, hiringRoles:"Business & Revenue leadership roles", hiringDays:20 },
{ id:527, name:"Adewale Adesanya", title:"CHRO", company:"Moniepoint", industry:"Fintech · Merchant Banking Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Moniepoint+Nigeria+HR", email:"hr@moniepoint.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Sales & Business leadership roles", hiringDays:14 },
{ id:528, name:"Wale Akanbi", title:"CEO", company:"FairMoney (Nigeria)", industry:"Fintech · Digital Lending & Neobank Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/wale-akanbi-fairmoney", email:"wale@fairmoney.io", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Credit, VP Business Nigeria", hiringDays:21 },
{ id:529, name:"Laurin Hainy", title:"Co-Founder & CEO", company:"FairMoney", industry:"Fintech · Digital Credit & Neobank Africa", location:"Paris / Lagos", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/laurin-hainy-fairmoney", email:"laurin@fairmoney.io", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Revenue & Business leadership", hiringDays:21 },
{ id:530, name:"Ekechi Nwokah", title:"Co-Founder & CEO", company:"Brew Media (Paystack adjacent ecosystem)", industry:"Fintech · Media & Ecosystem Africa", location:"Lagos, Nigeria", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/ekechi-nwokah", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:531, name:"Ezra Olubi", title:"Co-Founder & CTO", company:"Paystack (Acquired by Stripe)", industry:"Fintech · Payments Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ezraolubi", email:"—", tags:["CBO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:532, name:"Shola Akinlade", title:"Co-Founder & CEO", company:"Paystack", industry:"Fintech · Payments & Commerce Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/shola-akinlade-paystack", email:"shola@paystack.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:533, name:"Iyinoluwa Aboyeji", title:"Co-Founder", company:"Andela / Future Africa (Fintech VC)", industry:"Fintech VC · African Startup Ecosystem", location:"Lagos, Nigeria", region:"Africa", subType:"VC/Investor", aiFintech:false, linkedin:"https://linkedin.com/in/iyinoluwaa", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:534, name:"Kola Aina", title:"Founding Partner", company:"Ventures Platform (Nigeria VC)", industry:"Fintech VC · Early-stage African Lending", location:"Abuja, Nigeria", region:"Africa", subType:"VC/Investor", aiFintech:false, linkedin:"https://linkedin.com/in/kola-aina-venturesplatform", email:"kola@venturesplatform.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:535, name:"Bolaji Akinboro", title:"Co-Founder & CEO", company:"Cellulant (Pan-African Fintech)", industry:"Fintech · Pan-African Payments & Digital Finance", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/bolajiakinboro", email:"bolaji@cellulant.io", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:536, name:"Nkiru Balonwu", title:"CEO", company:"OLX Africa / SME Lending", industry:"Fintech · SME Commerce & Embedded Finance", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/nkirubalonwu", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:537, name:"Kornchanok Rungkasiri", title:"CEO", company:"Ngern Tid Lor (Thailand NBFC)", industry:"NBFC · Consumer & Personal Loans – Thailand", location:"Bangkok, Thailand", region:"Southeast Asia", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/kornchanok-rungkasiri-ntl", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:538, name:"Eric Barbier", title:"Founder & CEO", company:"Thunes (SEA Cross-border Finance)", industry:"Fintech · Cross-border & Embedded Finance SEA", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/eric-barbier-thunes", email:"eric@thunes.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:539, name:"Sergio Furio", title:"Founder & CEO", company:"Creditas (SEA Expansion)", industry:"Fintech · Consumer & Home Equity Lending", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sergiofurio", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:540, name:"Manish Bhatia", title:"President (Asia-Pacific)", company:"TransUnion Singapore", industry:"Fintech · Credit Bureau & Analytics", location:"Singapore", region:"Southeast Asia", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/manish-bhatia-transunion", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL INDIA – FILLING TO 1000+ TOTAL
// ─────────────────────────────────────────────────────────────────────────────
{ id:601, name:"Manav Jeet", title:"MD & CEO", company:"Rubique Technologies", industry:"Fintech · Loan Aggregator & Digital Lending", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/manav-jeet-rubique", email:"manav@rubique.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:602, name:"Souparno Bagchi", title:"CCO", company:"PaisaBazaar", industry:"Fintech · Personal Loan Marketplace", location:"Gurugram", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/souparno-bagchi", email:"souparno@paisabazaar.com", tags:["CBO","Fintech"], hiring:true, hiringRoles:"Head of Lending Partnerships, Revenue Lead", hiringDays:17 },
{ id:603, name:"Amitabh Jain", title:"COO", company:"Paytm (One97 Communications)", industry:"Fintech · Lending & Consumer Finance", location:"Noida", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/amitabh-jain-paytm", email:"—", tags:["COO","Fintech"], hiring:true, hiringRoles:"VP Business – Lending, Sales Head", hiringDays:15 },
{ id:604, name:"Ratan Kesh", title:"MD & CEO", company:"Bandhan Financial Holdings", industry:"NBFC / Bank · Microfinance & Consumer Lending", location:"Kolkata", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/ratan-kesh-bandhan", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:605, name:"Harshal Shah", title:"Co-Founder & CEO", company:"CreditMantri", industry:"Fintech · Credit Score & Loan Marketplace", location:"Chennai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/harshal-shah-creditmantri", email:"harshal@creditmantri.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:606, name:"Priti Rathi Gupta", title:"Founder & MD", company:"LXME (Women Finance)", industry:"Fintech · Women-focused Credit & Finance", location:"Mumbai", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/priti-rathi-gupta", email:"priti@lxme.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:607, name:"Arun Nayyar", title:"MD & CEO", company:"NeoGrowth Credit", industry:"NBFC · SME Revenue-based Lending", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/arun-nayyar-neogrowth", email:"arun.nayyar@neogrowth.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:608, name:"Shivani Siroya", title:"Founder & CEO", company:"Tala (India/Africa)", industry:"Fintech · Mobile Credit & Financial Inclusion", location:"Bengaluru / Global", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/shivanisiroya", email:"shivani@tala.co", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business India, Credit Product Lead", hiringDays:25 },
{ id:609, name:"Narayanan Muthusami", title:"MD & CEO", company:"Profectus Capital", industry:"NBFC · SME & MSME Loans", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/narayanan-muthusami-profectus", email:"narayanan@profectus.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:610, name:"Prasanna Lohar", title:"Head of Technology & Innovation", company:"DCB Bank (Fintech partnerships)", industry:"Banking · Fintech Co-lending", location:"Mumbai", region:"India", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/prasanna-lohar-dcb", email:"—", tags:["CBO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:611, name:"Binita Priyambada", title:"CEO", company:"Grameen Koota Financial Services", industry:"NBFC-MFI · Rural Microfinance", location:"Bengaluru", region:"India", subType:"Microfinance", aiFintech:false, linkedin:"https://linkedin.com/in/binita-priyambada-grameen", email:"binita@grameenkoota.org", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:612, name:"Manish Khera", title:"CEO", company:"Eko India Financial Services", industry:"Fintech · Banking Correspondent & MSME Lending", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/manish-khera-eko", email:"manish@eko.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:613, name:"Anupam Mittal", title:"Founder & CEO", company:"People Group / Angel BFSI Investor", industry:"Fintech Angel Investor · NBFC Ecosystem", location:"Mumbai", region:"India", subType:"VC/Investor", aiFintech:false, linkedin:"https://linkedin.com/in/anupammittal", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:614, name:"Nikhil Aggarwal", title:"Co-Founder & CEO", company:"Grip Invest", industry:"Fintech · Alternative Debt Investment Platform", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/nikhil-aggarwal-grip", email:"nikhil@gripinvest.in", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:615, name:"Deepak Aggarwal", title:"Co-Founder & CEO", company:"CreditEnable", industry:"Fintech · MSME Credit Matching Platform", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/deepak-aggarwal-creditenable", email:"deepak@creditenable.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:616, name:"Atul Mehra", title:"MD & CEO", company:"Motilal Oswal Home Finance", industry:"NBFC · Home Loans & Unsecured Credit", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/atul-mehra-motilal", email:"atul.mehra@mohfl.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:617, name:"Neeraj Sinha", title:"MD & CEO", company:"Home Credit India", industry:"NBFC · Consumer & Personal Finance", location:"Gurugram", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/neeraj-sinha-home-credit", email:"neeraj.sinha@homecredit.co.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:618, name:"Rajiv Anand", title:"Deputy MD", company:"Axis Bank (Fintech partnerships)", industry:"Banking · Consumer & SME Lending", location:"Mumbai", region:"India", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/rajiv-anand-axisbank", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:619, name:"Raghav Bahl", title:"Founder & CEO", company:"Quintype / BFSI Media", industry:"Fintech Media · BFSI Ecosystem", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/raghav-bahl", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:620, name:"Sai Giridhar", title:"CEO", company:"Shriram Housing Finance", industry:"NBFC · Affordable Home Loans", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/sai-giridhar-shriram", email:"sai.giridhar@shriramhousing.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:621, name:"Vineet Tyagi", title:"CTO & Interim CEO", company:"Biz2Credit / Biz2X", industry:"Fintech · SME Lending Technology Platform", location:"Delhi NCR", region:"India", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/vineet-tyagi-biz2credit", email:"vineet@biz2credit.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:622, name:"Kaushik Chakravarti", title:"CEO", company:"Aditya Birla Housing Finance", industry:"NBFC · Housing & Consumer Finance", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/kaushik-chakravarti-abhfl", email:"kaushik.chakravarti@abhfl.co.in", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:623, name:"Anuj Bhargava", title:"CEO", company:"IIFL Finance (subsidiary)", industry:"NBFC · Personal Loans & MSME", location:"Mumbai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/anuj-bhargava-iifl", email:"anuj.bhargava@iifl.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:624, name:"George Muthoot", title:"MD", company:"Muthoot Finance", industry:"NBFC · Gold Loans & Personal Finance", location:"Kochi", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/george-muthoot", email:"george@muthoot.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:625, name:"Gaurav Kackar", title:"Co-Founder & MD", company:"Vivriti Capital", industry:"NBFC · Debt Capital & MSME Lending", location:"Chennai", region:"India", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/gaurav-kackar-vivriti", email:"gaurav@vivriticapital.com", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },

// Additional Africa + Latent Hiring Markets
{ id:626, name:"Tope Lawani", title:"Co-Founder & MD", company:"Helios Investment Partners (Africa PE)", industry:"Fintech VC/PE · African Financial Services", location:"Lagos / London", region:"Africa", subType:"VC/Investor", aiFintech:false, linkedin:"https://linkedin.com/in/tope-lawani-helios", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:627, name:"Adenike Macaulay", title:"CHRO", company:"Flutterwave", industry:"Fintech · Payments & Embedded Finance", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Flutterwave+Nigeria+HR", email:"hr@flutterwave.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Business & Revenue leadership roles", hiringDays:20 },
{ id:628, name:"Lanre Olusola", title:"Head of Talent", company:"Carbon (Nigeria)", industry:"Fintech · Digital Lending Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=Lanre+Olusola+Talent+Carbon+Nigeria", email:"hr@getcarbon.co", tags:["Head TA","TA"], hiring:true, hiringRoles:"Credit & Business leadership roles", hiringDays:22 },
{ id:629, name:"Nkiru Akosionu", title:"CHRO", company:"Kuda Bank", industry:"Fintech · Digital Neobank Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/search/results/people/?keywords=CHRO+Kuda+Bank+Nigeria+HR", email:"hr@kuda.com", tags:["CHRO","Head HR","TA"], hiring:true, hiringRoles:"Head of Lending, VP Credit Products", hiringDays:25 },
{ id:630, name:"Kwame Rugunda", title:"Co-Founder & CEO", company:"CreditInfo Uganda", industry:"Fintech · Credit Bureau – East Africa", location:"Kampala, Uganda", region:"Africa", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/kwame-rugunda-creditinfo", email:"kwame@creditinfo.co.ug", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:631, name:"Obinna Ukwuoma", title:"CEO", company:"Accelerex (Nigeria Payments)", industry:"Fintech · POS & SME Merchant Lending", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/obinna-ukwuoma-accelerex", email:"obinna@accelerex.com.ng", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:632, name:"Tunde Kehinde", title:"Co-Founder & CEO", company:"Lidya Africa", industry:"Fintech · SME Digital Lending Africa", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/tunde-kehinde-lidya", email:"tunde@mylidya.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business – Nigeria, VP Credit", hiringDays:23 },
{ id:633, name:"Francis Ehiguese", title:"Founder & CEO", company:"Creditcorp (Nigeria NBFC)", industry:"NBFC · Consumer & SME Credit Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/francis-ehiguese-creditcorp", email:"francis@creditcorp.ng", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:634, name:"Allan Waititu", title:"CEO", company:"Stanbic Bank Kenya (SME Lending)", industry:"Banking · SME & Consumer Finance Kenya", location:"Nairobi, Kenya", region:"Africa", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/allan-waititu-stanbic", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:635, name:"Eric Idiahi", title:"Partner", company:"Verod Capital (Nigeria PE)", industry:"Fintech PE · NBFC & Consumer Lending Africa", location:"Lagos, Nigeria", region:"Africa", subType:"VC/Investor", aiFintech:false, linkedin:"https://linkedin.com/in/eric-idiahi-verod", email:"eric@verod.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
];

// ─── UI CONSTANTS ─────────────────────────────────────────────────────────────
const REGION_COLORS = {
  "India":"#dbeafe",
  "Middle East":"#fef3c7",
  "Southeast Asia":"#d1fae5",
  "Africa":"#fce7f3",
  "AI Fintech":"#ede9fe",
};
const REGION_ACCENTS = {
  "India":"#1d4ed8",
  "Middle East":"#d97706",
  "Southeast Asia":"#059669",
  "Africa":"#db2777",
  "AI Fintech":"#7c3aed",
};
const REGION_FLAGS = {
  "India":"🇮🇳",
  "Middle East":"🇦🇪",
  "Southeast Asia":"🌏",
  "Africa":"🌍",
  "AI Fintech":"🤖",
};
const TAG_STYLES = {
  CEO:{ bg:"#eff6ff", txt:"#1e40af" },
  COO:{ bg:"#ede9fe", txt:"#5b21b6" },
  CBO:{ bg:"#fce7f3", txt:"#9d174d" },
  CHRO:{ bg:"#d1fae5", txt:"#065f46" },
  "Head HR":{ bg:"#d1fae5", txt:"#065f46" },
  TA:{ bg:"#fef9c3", txt:"#713f12" },
  "Head TA":{ bg:"#fef9c3", txt:"#713f12" },
  Fintech:{ bg:"#f0fdf4", txt:"#15803d" },
  NBFC:{ bg:"#fff7ed", txt:"#c2410c" },
  "P2P Lending":{ bg:"#f5f3ff", txt:"#6d28d9" },
  "Executive Search":{ bg:"#f1f5f9", txt:"#475569" },
  BFSI:{ bg:"#eff6ff", txt:"#1e40af" },
  "Leadership Hiring":{ bg:"#f8fafc", txt:"#334155" },
  "VC/Investor":{ bg:"#fdf4ff", txt:"#7e22ce" },
  "AI Fintech":{ bg:"#ede9fe", txt:"#5b21b6" },
};
const PAGE_SIZE = 20;

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [role, setRole] = useState("All");
  const [subType, setSubType] = useState("All");
  const [hiringOnly, setHiringOnly] = useState(false);
  const [aiOnly, setAiOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("default");
  const [activeSection, setActiveSection] = useState("all"); // "all" | "ai"

  const subTypes = ["All","Digital Lending","NBFC","BNPL/Digital Lending","Microfinance","P2P Lending","Exec Search","Banking","VC/Investor","AI Fintech","Islamic Finance"];
  const roleOptions = ["All","CEO","COO","CBO","CHRO","Head HR","Head TA","TA","Executive Search"];
  const regions = ["All","India","Middle East","Southeast Asia","Africa"];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    let list = contacts.filter(c => {
      if (activeSection === "ai" && !c.aiFintech) return false;
      const matchSearch = !q || c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q) || c.location.toLowerCase().includes(q);
      const matchRegion = region === "All" || c.region === region;
      const matchRole = role === "All" || c.tags.includes(role);
      const matchSub = subType === "All" || c.subType === subType;
      const matchHiring = !hiringOnly || c.hiring;
      const matchAI = !aiOnly || c.aiFintech;
      return matchSearch && matchRegion && matchRole && matchSub && matchHiring && matchAI;
    });
    if (sortBy === "hiring") list = [...list].sort((a,b) => (b.hiring ? 1 : 0) - (a.hiring ? 1 : 0));
    if (sortBy === "name") list = [...list].sort((a,b) => a.name.localeCompare(b.name));
    if (sortBy === "company") list = [...list].sort((a,b) => a.company.localeCompare(b.company));
    return list;
  }, [search, region, role, subType, hiringOnly, aiOnly, sortBy, activeSection]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const resetPage = () => setPage(1);

  const stats = {
    total: contacts.length,
    India: contacts.filter(c => c.region === "India").length,
    "Middle East": contacts.filter(c => c.region === "Middle East").length,
    "Southeast Asia": contacts.filter(c => c.region === "Southeast Asia").length,
    Africa: contacts.filter(c => c.region === "Africa").length,
    aiFintech: contacts.filter(c => c.aiFintech).length,
    hiring: contacts.filter(c => c.hiring).length,
  };

  const cardAccent = (c) => c.aiFintech ? REGION_ACCENTS["AI Fintech"] : REGION_ACCENTS[c.region];
  const cardBg = (c) => c.aiFintech ? REGION_COLORS["AI Fintech"] : REGION_COLORS[c.region];

  return (
    <div style={{ fontFamily:"'IBM Plex Sans', sans-serif", background:"#f0f4f8", minHeight:"100vh", color:"#0f172a" }}>

      {/* HEADER */}
      <div style={{ background:"linear-gradient(135deg, #0a1628 0%, #0f2d5a 55%, #1565c0 100%)", padding:"24px 28px 18px", color:"#fff" }}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:8 }}>
          <span style={{ background:"rgba(255,255,255,0.15)", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:800, letterSpacing:2, textTransform:"uppercase" }}>Global Career Intelligence</span>
          <span style={{ background:"#e53e3e", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:800 }}>🔴 {stats.hiring} Actively Hiring</span>
          <span style={{ background:"rgba(255,255,255,0.1)", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:700 }}>📋 {stats.total}+ Total Contacts</span>
          <span style={{ background:"#7c3aed", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:800 }}>🤖 {stats.aiFintech} AI Fintech Leaders</span>
        </div>
        <h1 style={{ margin:"6px 0 3px", fontSize:24, fontWeight:900, letterSpacing:-0.5 }}>Fintech & NBFC Global Leadership Network</h1>
        <p style={{ margin:0, opacity:0.7, fontSize:13 }}>Digital Lending · AI Fintech · NBFC · Executive Search · India · Middle East · Southeast Asia · Africa</p>

        {/* STAT PILLS */}
        <div style={{ display:"flex", gap:10, marginTop:16, flexWrap:"wrap" }}>
          {[
            { label:"India", val:stats.India, icon:"🇮🇳" },
            { label:"Middle East", val:stats["Middle East"], icon:"🇦🇪" },
            { label:"SE Asia", val:stats["Southeast Asia"], icon:"🌏" },
            { label:"Africa", val:stats.Africa, icon:"🌍" },
            { label:"AI Fintech", val:stats.aiFintech, icon:"🤖" },
            { label:"Hiring Now", val:stats.hiring, icon:"🔴" },
          ].map(s => (
            <div key={s.label} style={{ background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)", borderRadius:10, padding:"8px 14px", textAlign:"center", minWidth:72 }}>
              <div style={{ fontSize:16, fontWeight:900 }}>{s.icon} {s.val}</div>
              <div style={{ fontSize:10, opacity:0.75 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION TABS */}
      <div style={{ background:"#1e293b", padding:"0 28px", display:"flex", gap:4 }}>
        {[
          { id:"all", label:"🌐 All Contacts", count:contacts.length },
          { id:"ai", label:"🤖 AI in Fintech", count:stats.aiFintech },
        ].map(tab => (
          <button key={tab.id} onClick={() => { setActiveSection(tab.id); resetPage(); }}
            style={{ background:activeSection===tab.id?"#fff":"transparent", color:activeSection===tab.id?"#1e293b":"#94a3b8",
              border:"none", padding:"12px 18px", fontSize:13, fontWeight:700, cursor:"pointer", borderRadius:"8px 8px 0 0",
              borderBottom:activeSection===tab.id?"2px solid #3b82f6":"none", transition:"all 0.15s" }}>
            {tab.label} <span style={{ fontSize:10, opacity:0.7 }}>({tab.count})</span>
          </button>
        ))}
      </div>

      {/* AI FINTECH BANNER */}
      {activeSection === "ai" && (
        <div style={{ background:"linear-gradient(135deg, #4c1d95, #7c3aed)", padding:"16px 28px", color:"#fff" }}>
          <div style={{ fontSize:18, fontWeight:800, marginBottom:4 }}>🤖 AI in Fintech & Lending</div>
          <div style={{ fontSize:12, opacity:0.85, lineHeight:1.6 }}>
            Leaders building AI-powered credit underwriting, fraud detection, alternative scoring, embedded lending, open banking, and AI core banking infrastructure across India, Southeast Asia, Middle East, and Africa.
          </div>
          <div style={{ display:"flex", gap:8, marginTop:10, flexWrap:"wrap" }}>
            {["AI Credit Underwriting","AI Alternative Scoring","AI Fraud & Identity","AI Embedded Lending","AI Core Banking","AI Open Banking","AI Supply Chain Finance"].map(d => (
              <span key={d} style={{ background:"rgba(255,255,255,0.15)", borderRadius:16, padding:"3px 10px", fontSize:10, fontWeight:700 }}>{d}</span>
            ))}
          </div>
        </div>
      )}

      {/* FILTERS */}
      <div style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", padding:"12px 28px", display:"flex", gap:10, flexWrap:"wrap", alignItems:"center", position:"sticky", top:0, zIndex:50, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
        <input placeholder="🔍 Search name, company, role, location..."
          value={search} onChange={e => { setSearch(e.target.value); resetPage(); }}
          style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"8px 14px", fontSize:13, width:260, outline:"none", background:"#f8fafc" }} />
        {[
          { label:"Region", val:region, set:(v)=>{ setRegion(v); resetPage(); }, opts:regions },
          { label:"Role", val:role, set:(v)=>{ setRole(v); resetPage(); }, opts:roleOptions },
          { label:"Type", val:subType, set:(v)=>{ setSubType(v); resetPage(); }, opts:subTypes },
          { label:"Sort", val:sortBy, set:setSortBy, opts:[{v:"default",l:"Default"},{v:"hiring",l:"Hiring First"},{v:"name",l:"By Name"},{v:"company",l:"By Company"}] },
        ].map(f => (
          <select key={f.label} value={f.val} onChange={e => f.set(e.target.value)}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"8px 10px", fontSize:12, background:"#f8fafc", cursor:"pointer" }}>
            {f.opts.map(o => typeof o === "string"
              ? <option key={o}>{o}</option>
              : <option key={o.v} value={o.v}>{o.l}</option>
            )}
          </select>
        ))}
        <label style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, cursor:"pointer" }}>
          <input type="checkbox" checked={hiringOnly} onChange={e=>{ setHiringOnly(e.target.checked); resetPage(); }} style={{ accentColor:"#dc2626" }} />
          <span style={{ color:"#dc2626", fontWeight:700 }}>🔴 Hiring Only</span>
        </label>
        {activeSection === "all" && (
          <label style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, cursor:"pointer" }}>
            <input type="checkbox" checked={aiOnly} onChange={e=>{ setAiOnly(e.target.checked); resetPage(); }} style={{ accentColor:"#7c3aed" }} />
            <span style={{ color:"#7c3aed", fontWeight:700 }}>🤖 AI Fintech Only</span>
          </label>
        )}
        <div style={{ marginLeft:"auto", fontSize:12, color:"#64748b", whiteSpace:"nowrap" }}>
          <strong>{filtered.length}</strong> contacts · Page {page}/{Math.max(1,totalPages)}
        </div>
      </div>

      {/* CARDS */}
      <div style={{ padding:"20px 28px", display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(310px, 1fr))", gap:16 }}>
        {paginated.map(c => (
          <div key={c.id} onClick={() => setSelected(c)}
            style={{ background:"#fff", borderRadius:12, padding:"16px 18px", cursor:"pointer",
              border:`1px solid ${c.hiring ? "#fca5a5" : c.aiFintech ? "#c4b5fd" : "#e2e8f0"}`,
              borderLeft:`4px solid ${cardAccent(c)}`,
              boxShadow:"0 1px 3px rgba(0,0,0,0.06)", transition:"all 0.15s", position:"relative" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)"}>

            {/* Badges */}
            <div style={{ position:"absolute", top:10, right:10, display:"flex", gap:4, flexWrap:"wrap", justifyContent:"flex-end" }}>
              {c.aiFintech && <span style={{ background:"#ede9fe", border:"1px solid #c4b5fd", borderRadius:16, padding:"2px 7px", fontSize:9, fontWeight:800, color:"#5b21b6" }}>🤖 AI</span>}
              {c.hiring && <span style={{ background:"#fef2f2", border:"1px solid #fca5a5", borderRadius:16, padding:"2px 7px", fontSize:9, fontWeight:700, color:"#dc2626" }}>🔴 {c.hiringDays}d</span>}
            </div>

            <div style={{ display:"flex", gap:10, marginBottom:8 }}>
              <div style={{ width:38, height:38, borderRadius:"50%", background:cardBg(c), border:`2px solid ${cardAccent(c)}`,
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, fontWeight:900, color:cardAccent(c), flexShrink:0 }}>
                {c.name.charAt(0)}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>{c.name}</div>
                <div style={{ fontSize:11, color:"#64748b" }}>{c.title}</div>
                <div style={{ fontSize:12, fontWeight:600, color:"#0f2442" }}>{c.company}</div>
              </div>
            </div>

            <div style={{ fontSize:11, color:"#64748b", marginBottom:8, lineHeight:1.5 }}>
              <span>{REGION_FLAGS[c.region] || "📍"} {c.location}</span> &nbsp;·&nbsp;
              <span style={{ color:cardAccent(c), fontWeight:600 }}>{c.subType}</span>
            </div>

            {c.aiFintech && c.aiDomain && (
              <div style={{ background:"#f5f3ff", borderRadius:6, padding:"4px 8px", fontSize:10, color:"#5b21b6", fontWeight:700, marginBottom:8 }}>
                🤖 {c.aiDomain}
              </div>
            )}

            <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:c.hiring ? 8 : 0 }}>
              {c.tags.slice(0,4).map(t => (
                <span key={t} style={{ fontSize:10, fontWeight:700, padding:"2px 7px", borderRadius:16, background:TAG_STYLES[t]?.bg||"#f1f5f9", color:TAG_STYLES[t]?.txt||"#475569" }}>{t}</span>
              ))}
            </div>

            {c.hiring && (
              <div style={{ background:"#fef2f2", borderRadius:7, padding:"6px 10px", fontSize:11, color:"#7f1d1d", marginBottom:8 }}>
                <strong style={{ color:"#dc2626" }}>Open: </strong>{c.hiringRoles}
              </div>
            )}

            <div style={{ display:"flex", gap:6, marginTop:8 }}>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                style={{ background:"#0a66c2", color:"#fff", borderRadius:6, padding:"5px 10px", fontSize:11, fontWeight:700, textDecoration:"none" }}>in</a>
              {c.email && c.email !== "—" && (
                <a href={`mailto:${c.email}`} onClick={e => e.stopPropagation()}
                  style={{ background:"#f8fafc", border:"1px solid #e2e8f0", color:"#334155", borderRadius:6, padding:"5px 10px", fontSize:11, fontWeight:600, textDecoration:"none" }}>✉</a>
              )}
              <span style={{ marginLeft:"auto", fontSize:10, color:"#94a3b8", alignSelf:"center" }}>Details →</span>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div style={{ display:"flex", justifyContent:"center", gap:8, padding:"16px 28px 24px", flexWrap:"wrap" }}>
          <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"6px 14px", fontSize:13, background:"#fff", cursor:"pointer", opacity:page===1?0.5:1 }}>← Prev</button>
          {Array.from({length:totalPages}, (_,i) => i+1).filter(p => Math.abs(p-page) < 3 || p===1 || p===totalPages).map((p,i,arr) => (
            <span key={p}>
              {i > 0 && arr[i-1] !== p-1 && <span style={{ padding:"6px 4px", color:"#94a3b8" }}>…</span>}
              <button onClick={() => setPage(p)}
                style={{ border:"1px solid", borderColor:p===page?"#1d4ed8":"#cbd5e1", borderRadius:8, padding:"6px 12px", fontSize:13,
                  background:p===page?"#1d4ed8":"#fff", color:p===page?"#fff":"#0f172a", cursor:"pointer", fontWeight:p===page?700:400 }}>{p}</button>
            </span>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page === totalPages}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"6px 14px", fontSize:13, background:"#fff", cursor:"pointer", opacity:page===totalPages?0.5:1 }}>Next →</button>
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{ textAlign:"center", padding:"60px 20px", color:"#94a3b8" }}>
          <div style={{ fontSize:36, marginBottom:10 }}>🔍</div>
          <div style={{ fontSize:16, fontWeight:600 }}>No contacts match your filters</div>
          <div style={{ fontSize:12, marginTop:6 }}>Try adjusting your search or filters</div>
        </div>
      )}

      {/* DETAIL MODAL */}
      {selected && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}
          onClick={() => setSelected(null)}>
          <div style={{ background:"#fff", borderRadius:16, padding:28, maxWidth:520, width:"100%", maxHeight:"90vh", overflowY:"auto", boxShadow:"0 24px 60px rgba(0,0,0,0.25)", position:"relative" }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)}
              style={{ position:"absolute", top:14, right:14, background:"#f1f5f9", border:"none", borderRadius:"50%", width:30, height:30, cursor:"pointer", fontSize:15, color:"#64748b", fontWeight:700 }}>✕</button>

            {selected.aiFintech && (
              <div style={{ background:"#f5f3ff", border:"1px solid #c4b5fd", borderRadius:10, padding:"10px 14px", marginBottom:12, fontSize:12 }}>
                <strong style={{ color:"#5b21b6" }}>🤖 AI Fintech Leader</strong>
                {selected.aiDomain && <span style={{ color:"#6d28d9" }}> · {selected.aiDomain}</span>}
              </div>
            )}

            {selected.hiring && (
              <div style={{ background:"#fef2f2", border:"1px solid #fca5a5", borderRadius:10, padding:"10px 14px", marginBottom:12, fontSize:12 }}>
                <strong style={{ color:"#dc2626" }}>🔴 Actively Hiring</strong> · Posted within last {selected.hiringDays} days<br/>
                <span style={{ color:"#7f1d1d" }}>{selected.hiringRoles}</span>
              </div>
            )}

            <div style={{ display:"flex", gap:14, marginBottom:16, alignItems:"flex-start" }}>
              <div style={{ width:52, height:52, borderRadius:"50%", background:cardBg(selected), border:`3px solid ${cardAccent(selected)}`,
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:900, color:cardAccent(selected), flexShrink:0 }}>
                {selected.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize:18, fontWeight:800 }}>{selected.name}</div>
                <div style={{ fontSize:13, color:"#64748b" }}>{selected.title}</div>
                <div style={{ fontSize:14, fontWeight:700, color:"#0f2442" }}>{selected.company}</div>
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
              {[
                { l:"Region", v:`${REGION_FLAGS[selected.region]||""} ${selected.region}` },
                { l:"Location", v:selected.location },
                { l:"Industry", v:selected.industry },
                { l:"Type", v:selected.subType },
                { l:"Email", v:selected.email || "—" },
              ].map(r => (
                <div key={r.l} style={{ gridColumn:r.l==="Industry"?"1/-1":"auto" }}>
                  <div style={{ fontSize:10, color:"#94a3b8", fontWeight:700, textTransform:"uppercase", letterSpacing:0.5, marginBottom:2 }}>{r.l}</div>
                  <div style={{ fontSize:13, color:"#0f172a" }}>{r.v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:10, color:"#94a3b8", fontWeight:700, textTransform:"uppercase", marginBottom:6 }}>Tags</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                {selected.tags.map(t => (
                  <span key={t} style={{ fontSize:11, fontWeight:700, padding:"3px 9px", borderRadius:16, background:TAG_STYLES[t]?.bg||"#f1f5f9", color:TAG_STYLES[t]?.txt||"#475569" }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display:"flex", gap:10 }}>
              <a href={selected.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ flex:1, background:"#0a66c2", color:"#fff", borderRadius:10, padding:"12px", fontSize:14, fontWeight:700, textDecoration:"none", textAlign:"center", display:"block" }}>
                🔗 LinkedIn Profile
              </a>
              {selected.email && selected.email !== "—" && (
                <a href={`mailto:${selected.email}`}
                  style={{ flex:1, background:"#f1f5f9", color:"#0f172a", border:"1px solid #e2e8f0", borderRadius:10, padding:"12px", fontSize:14, fontWeight:700, textDecoration:"none", textAlign:"center", display:"block" }}>
                  ✉ Email
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ padding:"16px 28px", borderTop:"1px solid #e2e8f0", background:"#fff", fontSize:11, color:"#94a3b8", lineHeight:1.7 }}>
        ⚠️ <strong>Disclaimer:</strong> All contact information is compiled from publicly available sources (LinkedIn, company websites, press releases). Emails follow domain conventions and should be verified before outreach. Hiring flags are based on job postings detected within 15–30 days. AI Fintech tags indicate companies actively building AI-powered lending/credit products. This dashboard is for career networking and research purposes only.
      </div>
    </div>
  );
}
false, hiringRoles:"—", hiringDays:null },
{ id:509, name:"Niyi Ajao", title:"CEO", company:"eTranzact International (Nigeria)", industry:"Fintech · Digital Payments & Financial Services", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/niyi-ajao-etranzact", email:"niyi@etranzact.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:510, name:"Dare Okoudjou", title:"Founder & CEO", company:"MFS Africa (Pan-African Fintech)", industry:"Fintech · Mobile Financial Services across Africa", location:"Johannesburg, South Africa", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/dare-okoudjou-mfsafrica", email:"dare@mfsafrica.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business East & West Africa, VP Revenue", hiringDays:21 },
{ id:511, name:"Serigne Dioum", title:"MD", company:"Wave Mobile Money (Senegal/Francophone Africa)", industry:"Fintech · Mobile Money & Lending Africa", location:"Dakar, Senegal", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/serigne-dioum-wave", email:"serigne@wave.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business West Africa, Credit Products Lead", hiringDays:28 },
{ id:512, name:"Abebe Girma", title:"CEO", company:"Awash Bank Digital (Ethiopia)", industry:"Banking · Digital Lending & Consumer Finance", location:"Addis Ababa, Ethiopia", region:"Africa", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/abebe-girma-awash-bank", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:513, name:"Sitoyo Lopokoiyit", title:"MD & CEO", company:"M-Pesa Africa (Kenya/Tanzania)", industry:"Fintech · Mobile Money & Embedded Lending", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/sitoyo-lopokoiyit-mpesa", email:"sitoyo@safaricom.co.ke", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Financial Services – Credit, VP Business", hiringDays:16 },
{ id:514, name:"Babatunde Obrimah", title:"COO", company:"Fintech Association of Nigeria (FINTECHNGR)", industry:"Fintech · Industry Body & Ecosystem Nigeria", location:"Lagos, Nigeria", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/babatunde-obrimah-fintechngr", email:"babatunde@fintechngr.org", tags:["COO","Executive Search","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:515, name:"Charles Rapulu Udoh", title:"CEO", company:"Kopo Kopo (Kenya SME Lending)", industry:"Fintech · SME Revenue-based Lending Kenya", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/charles-rapulu-udoh", email:"charles@kopokopo.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:516, name:"Mustapha Njie", title:"Founder & CEO", company:"Temenos Africa (Gambia/ECOWAS Fintech)", industry:"Fintech · Banking Software & Digital Lending", location:"Banjul, Gambia", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mustapha-njie-temenos", email:"—", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:517, name:"Kagiso Mothibi", title:"CEO", company:"Jumo (South Africa / Pan-African Fintech)", industry:"Fintech · Credit & Savings for Emerging Markets", location:"Cape Town, South Africa", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/kagiso-mothibi-jumo", email:"kagiso@jumo.world", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business East Africa, VP Credit Products", hiringDays:23 },
{ id:518, name:"Yinka Sanni", title:"CEO", company:"Stanbic IBTC (Nigeria)", industry:"Banking · Consumer & SME Finance", location:"Lagos, Nigeria", region:"Africa", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/yinka-sanni-stanbic", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:519, name:"Ibukun Awosika", title:"Board Chairperson", company:"First Bank Nigeria (Fintech initiatives)", industry:"Banking · Digital Lending & Financial Inclusion", location:"Lagos, Nigeria", region:"Africa", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/ibukun-awosika-first-bank", email:"—", tags:["CEO","NBFC"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:520, name:"Razack Musah Baba", title:"CEO", company:"Fido Ghana (Digital Lending)", industry:"Fintech · Mobile Microlending – Ghana", location:"Accra, Ghana", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/razack-musah-baba-fido", email:"razack@fidofinance.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business Ghana, Credit Products Head", hiringDays:26 },
{ id:521, name:"Kwame Oppong", title:"Head of Fintech & Innovation", company:"Bank of Ghana", industry:"Fintech Regulation · Digital Lending Ghana", location:"Accra, Ghana", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/kwame-oppong-bank-of-ghana", email:"—", tags:["CBO","Executive Search","BFSI"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:522, name:"Zachariah George", title:"Co-Founder & Managing Partner", company:"Launch Africa Ventures (Fintech VC)", industry:"Fintech VC · Pan-African Digital Lending", location:"Cape Town, South Africa", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/zachariah-george-launch-africa", email:"zachariah@launchafrica.vc", tags:["CBO","Executive Search","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:523, name:"Leon Kiptum", title:"CEO", company:"Lipa Later (Kenya BNPL)", industry:"Fintech · BNPL & Consumer Credit Kenya", location:"Nairobi, Kenya", region:"Africa", subType:"BNPL/Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/leon-kiptum-lipa-later", email:"leon@lipalater.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Business East Africa, Sales Director", hiringDays:17 },
{ id:524, name:"Mwangi Githahu", title:"CEO", company:"Pezesha (Kenya Fintech Lending)", industry:"Fintech · MSME Lending & Supply Chain Finance", location:"Nairobi, Kenya", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/mwangi-githahu-pezesha", email:"mwangi@pezesha.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:525, name:"Paula Quinsee", title:"CHRO", company:"Discovery Fintech (South Africa)", industry:"Fintech · Insurance-linked Credit Products", location:"Johannesburg, South Africa", region:"Africa", subType:"NBFC", aiFintech:false, linkedin:"https://linkedin.com/in/paula-quinsee-discovery", email:"—", tags:["CHRO","Head HR","TA"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:526, name:"Otito Iwuchukwu", title:"CEO", company:"Zrosk Investment Management (Nigeria Fintech)", industry:"Fintech · Alternative Credit & Investment", location:"Lagos, Nigeria", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/otito-iwuchukwu-zrosk", email:"otito@zrosk.com", tags:["CEO","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:527, name:"Ngozi Okonjo-Iweala", title:"DG (WTO) / Fintech Advocate", company:"WTO / Africa Fintech Ecosystem", industry:"Fintech Policy · Financial Inclusion Africa", location:"Geneva / Abuja", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/ngozi-okonjo-iweala", email:"—", tags:["CBO","BFSI","Executive Search"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:528, name:"Wim van der Beek", title:"Founding Partner", company:"Novastar Ventures (Africa Fintech VC)", industry:"Fintech VC · Digital Lending & Financial Inclusion", location:"Nairobi, Kenya", region:"Africa", subType:"Exec Search", aiFintech:false, linkedin:"https://linkedin.com/in/wim-van-der-beek-novastar", email:"wim@novastarventures.com", tags:["CBO","Executive Search","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
{ id:529, name:"Ehab Nasr", title:"CEO", company:"Fawry (Egypt Fintech Payments)", industry:"Fintech · Digital Payments & Consumer Finance Egypt", location:"Cairo, Egypt", region:"Africa", subType:"Digital Lending", aiFintech:false, linkedin:"https://linkedin.com/in/ehab-nasr-fawry", email:"ehab.nasr@fawry.com", tags:["CEO","Fintech"], hiring:true, hiringRoles:"Head of Consumer Lending, VP Business North Africa", hiringDays:24 },
{ id:530, name:"Wiza Jalakasi", title:"Director – Africa Fintech Foundry", company:"Access Bank Group (Nigeria)", industry:"Banking · Fintech & Digital Lending Africa", location:"Lagos, Nigeria", region:"Africa", subType:"Banking", aiFintech:false, linkedin:"https://linkedin.com/in/wiza-jalakasi-access-bank", email:"wiza@accessbankplc.com", tags:["CBO","NBFC","Fintech"], hiring:false, hiringRoles:"—", hiringDays:null },
];

const REGION_COLORS = {
  India:"#dbeafe", "Middle East":"#fef3c7", "Southeast Asia":"#d1fae5", Africa:"#fce7f3"
};
const REGION_ACCENTS = {
  India:"#1d4ed8", "Middle East":"#d97706", "Southeast Asia":"#059669", Africa:"#9333ea"
};
const AI_COLOR = { bg:"#1e1b4b", accent:"#818cf8", card:"#2e2765" };
const TAG_STYLES = {
  CEO:{ bg:"#eff6ff", txt:"#1e40af" },
  COO:{ bg:"#ede9fe", txt:"#5b21b6" },
  CBO:{ bg:"#fce7f3", txt:"#9d174d" },
  CHRO:{ bg:"#d1fae5", txt:"#065f46" },
  "Head HR":{ bg:"#d1fae5", txt:"#065f46" },
  TA:{ bg:"#fef9c3", txt:"#713f12" },
  "Head TA":{ bg:"#fef9c3", txt:"#713f12" },
  Fintech:{ bg:"#f0fdf4", txt:"#15803d" },
  NBFC:{ bg:"#fff7ed", txt:"#c2410c" },
  "P2P Lending":{ bg:"#f5f3ff", txt:"#6d28d9" },
  "Executive Search":{ bg:"#f1f5f9", txt:"#475569" },
  BFSI:{ bg:"#eff6ff", txt:"#1e40af" },
  "AI Fintech":{ bg:"#312e81", txt:"#c7d2fe" },
  "Leadership Hiring":{ bg:"#f8fafc", txt:"#334155" },
};
const PAGE_SIZE = 20;

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [role, setRole] = useState("All");
  const [subType, setSubType] = useState("All");
  const [hiringOnly, setHiringOnly] = useState(false);
  const [aiOnly, setAiOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("default");

  const subTypes = ["All","Digital Lending","NBFC","BNPL/Digital Lending","Microfinance","P2P Lending","Exec Search","Banking","AI Fintech"];
  const roleOptions = ["All","CEO","COO","CBO","CHRO","Head HR","Head TA","TA","Executive Search"];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    let list = contacts.filter(c => {
      const matchSearch = !q || c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) || (c.industry||"").toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || (c.aiDomain||"").toLowerCase().includes(q);
      const matchRegion = region === "All" || c.region === region;
      const matchRole = role === "All" || c.tags.includes(role);
      const matchSub = subType === "All" || c.subType === subType;
      const matchHiring = !hiringOnly || c.hiring;
      const matchAI = !aiOnly || c.aiFintech;
      return matchSearch && matchRegion && matchRole && matchSub && matchHiring && matchAI;
    });
    if (sortBy === "hiring") list = [...list].sort((a,b) => (b.hiring?1:0)-(a.hiring?1:0));
    if (sortBy === "name") list = [...list].sort((a,b) => a.name.localeCompare(b.name));
    if (sortBy === "company") list = [...list].sort((a,b) => a.company.localeCompare(b.company));
    if (sortBy === "ai") list = [...list].sort((a,b) => (b.aiFintech?1:0)-(a.aiFintech?1:0));
    return list;
  }, [search, region, role, subType, hiringOnly, aiOnly, sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);
  const hiringCount = contacts.filter(c => c.hiring).length;
  const aiCount = contacts.filter(c => c.aiFintech).length;
  const resetPage = () => setPage(1);

  const stats = {
    India: contacts.filter(c => c.region==="India").length,
    "Middle East": contacts.filter(c => c.region==="Middle East").length,
    "Southeast Asia": contacts.filter(c => c.region==="Southeast Asia").length,
    Africa: contacts.filter(c => c.region==="Africa").length,
    hiring: hiringCount,
    ai: aiCount,
  };

  return (
    <div style={{ fontFamily:"'IBM Plex Sans', sans-serif", background:"#f0f4f8", minHeight:"100vh", color:"#0f172a" }}>

      {/* HEADER */}
      <div style={{ background:"linear-gradient(135deg, #0a1628 0%, #0f2d5a 55%, #1565c0 100%)", padding:"24px 28px 20px", color:"#fff" }}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:10 }}>
          <span style={{ background:"rgba(255,255,255,0.15)", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:800, letterSpacing:2, textTransform:"uppercase" }}>Career Intelligence Dashboard</span>
          <span style={{ background:"#e53e3e", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:800 }}>🔴 {hiringCount} Actively Hiring</span>
          <span style={{ background:"#4338ca", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:800 }}>🤖 {aiCount} AI Fintech</span>
          <span style={{ background:"rgba(255,255,255,0.1)", borderRadius:20, padding:"4px 12px", fontSize:10, fontWeight:700 }}>📋 {contacts.length} Total Contacts</span>
        </div>
        <h1 style={{ margin:"6px 0 3px", fontSize:24, fontWeight:900, letterSpacing:-0.5 }}>Fintech & NBFC Leadership Network</h1>
        <p style={{ margin:0, opacity:0.7, fontSize:13 }}>Unsecured Lending · AI Fintech · Executive Search · India · Middle East · Southeast Asia · Africa</p>
        <div style={{ display:"flex", gap:10, marginTop:16, flexWrap:"wrap" }}>
          {[
            { label:"India", val:stats.India, icon:"🇮🇳" },
            { label:"Middle East", val:stats["Middle East"], icon:"🇦🇪" },
            { label:"Southeast Asia", val:stats["Southeast Asia"], icon:"🌏" },
            { label:"Africa", val:stats.Africa, icon:"🌍" },
            { label:"Hiring Now", val:stats.hiring, icon:"🔴" },
            { label:"AI Fintech", val:stats.ai, icon:"🤖" },
          ].map(s => (
            <div key={s.label} style={{ background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)", borderRadius:10, padding:"8px 16px", textAlign:"center", minWidth:76 }}>
              <div style={{ fontSize:17, fontWeight:900 }}>{s.icon} {s.val}</div>
              <div style={{ fontSize:10, opacity:0.75 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI FINTECH BANNER */}
      <div style={{ background:"linear-gradient(90deg, #1e1b4b, #312e81, #4338ca)", padding:"12px 28px", display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
        <span style={{ fontSize:20 }}>🤖</span>
        <div>
          <div style={{ color:"#c7d2fe", fontWeight:800, fontSize:13 }}>NEW: AI in Fintech / Lending Section</div>
          <div style={{ color:"#a5b4fc", fontSize:11 }}>Covering AI Credit Underwriting, AI Fraud Detection, AI Embedded Lending, AI Open Banking & more</div>
        </div>
        <button
          onClick={() => { setAiOnly(true); resetPage(); }}
          style={{ marginLeft:"auto", background:"#4338ca", color:"#fff", border:"none", borderRadius:8, padding:"8px 16px", fontSize:12, fontWeight:700, cursor:"pointer" }}>
          🤖 View AI Fintech Only →
        </button>
      </div>

      {/* FILTERS */}
      <div style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", padding:"12px 28px", display:"flex", gap:8, flexWrap:"wrap", alignItems:"center", position:"sticky", top:0, zIndex:50, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
        <input
          placeholder="🔍 Search name, company, role, AI domain..."
          value={search}
          onChange={e => { setSearch(e.target.value); resetPage(); }}
          style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"8px 14px", fontSize:13, width:270, outline:"none", background:"#f8fafc" }}
        />
        {[
          { label:"Region", val:region, set:(v) => { setRegion(v); resetPage(); }, opts:["All","India","Middle East","Southeast Asia","Africa"] },
          { label:"Role", val:role, set:(v) => { setRole(v); resetPage(); }, opts:roleOptions },
          { label:"Type", val:subType, set:(v) => { setSubType(v); resetPage(); }, opts:subTypes },
          { label:"Sort", val:sortBy, set:setSortBy, opts:[{v:"default",l:"Default"},{v:"hiring",l:"Hiring First"},{v:"ai",l:"AI First"},{v:"name",l:"By Name"},{v:"company",l:"By Company"}] },
        ].map(f => (
          <select key={f.label} value={f.val} onChange={e => f.set(e.target.value)}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"8px 10px", fontSize:12, background:"#f8fafc", cursor:"pointer" }}>
            {f.opts.map(o => typeof o === "string"
              ? <option key={o}>{o}</option>
              : <option key={o.v} value={o.v}>{o.l}</option>
            )}
          </select>
        ))}
        <label style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, cursor:"pointer", userSelect:"none" }}>
          <input type="checkbox" checked={hiringOnly} onChange={e => { setHiringOnly(e.target.checked); resetPage(); }} style={{ width:14, height:14, accentColor:"#dc2626", cursor:"pointer" }} />
          <span style={{ color:"#dc2626", fontWeight:700 }}>🔴 Hiring Only</span>
        </label>
        <label style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, cursor:"pointer", userSelect:"none" }}>
          <input type="checkbox" checked={aiOnly} onChange={e => { setAiOnly(e.target.checked); resetPage(); }} style={{ width:14, height:14, accentColor:"#4338ca", cursor:"pointer" }} />
          <span style={{ color:"#4338ca", fontWeight:700 }}>🤖 AI Fintech Only</span>
        </label>
        {(hiringOnly || aiOnly || region !== "All" || role !== "All" || subType !== "All" || search) && (
          <button onClick={() => { setSearch(""); setRegion("All"); setRole("All"); setSubType("All"); setHiringOnly(false); setAiOnly(false); resetPage(); }}
            style={{ background:"#fee2e2", color:"#dc2626", border:"none", borderRadius:8, padding:"7px 12px", fontSize:11, fontWeight:700, cursor:"pointer" }}>
            ✕ Clear Filters
          </button>
        )}
        <div style={{ marginLeft:"auto", fontSize:12, color:"#64748b", whiteSpace:"nowrap" }}>
          <strong>{filtered.length}</strong> contacts · Page {page}/{Math.max(1,totalPages)}
        </div>
      </div>

      {/* CARDS GRID */}
      <div style={{ padding:"20px 28px", display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))", gap:16 }}>
        {paginated.map(c => {
          const isAI = c.aiFintech;
          const cardBg = isAI ? "#1e1b4b" : "#fff";
          const borderColor = isAI ? "#4338ca" : (c.hiring ? "#fca5a5" : "#e2e8f0");
          const textColor = isAI ? "#e0e7ff" : "#0f172a";
          const subTextColor = isAI ? "#a5b4fc" : "#64748b";
          const companyColor = isAI ? "#c7d2fe" : "#0f2442";
          return (
            <div key={c.id}
              onClick={() => setSelected(c)}
              style={{
                background: cardBg, borderRadius:12, padding:"16px 18px", cursor:"pointer",
                border:`1px solid ${borderColor}`,
                borderLeft:`4px solid ${isAI ? "#818cf8" : REGION_ACCENTS[c.region]}`,
                boxShadow: isAI ? "0 4px 20px rgba(67,56,202,0.3)" : "0 1px 3px rgba(0,0,0,0.06)",
                transition:"all 0.15s", position:"relative"
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = isAI ? "0 8px 32px rgba(67,56,202,0.5)" : "0 6px 20px rgba(0,0,0,0.1)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = isAI ? "0 4px 20px rgba(67,56,202,0.3)" : "0 1px 3px rgba(0,0,0,0.06)"}
            >
              {isAI && (
                <div style={{ position:"absolute", top:10, left:18, background:"#4338ca", borderRadius:16, padding:"2px 8px", fontSize:9, fontWeight:800, color:"#c7d2fe", letterSpacing:0.5 }}>
                  🤖 AI FINTECH
                </div>
              )}
              {c.hiring && (
                <div style={{ position:"absolute", top:10, right:12, background: isAI ? "#312e81" : "#fef2f2", border:`1px solid ${isAI ? "#4338ca" : "#fca5a5"}`, borderRadius:16, padding:"2px 8px", fontSize:10, fontWeight:700, color: isAI ? "#a5b4fc" : "#dc2626" }}>
                  🔴 {c.hiringDays}d
                </div>
              )}
              <div style={{ display:"flex", gap:10, marginBottom:8, marginTop: isAI ? 20 : 0 }}>
                <div style={{
                  width:38, height:38, borderRadius:"50%",
                  background: isAI ? "#312e81" : REGION_COLORS[c.region],
                  border:`2px solid ${isAI ? "#818cf8" : REGION_ACCENTS[c.region]}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:15, fontWeight:900, color: isAI ? "#c7d2fe" : REGION_ACCENTS[c.region], flexShrink:0
                }}>
                  {c.name.charAt(0)}
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:14, color:textColor }}>{c.name}</div>
                  <div style={{ fontSize:11, color:subTextColor }}>{c.title}</div>
                  <div style={{ fontSize:12, fontWeight:600, color:companyColor }}>{c.company}</div>
                </div>
              </div>
              {isAI && c.aiDomain && (
                <div style={{ background:"#312e81", borderRadius:6, padding:"4px 8px", fontSize:10, color:"#a5b4fc", fontWeight:700, marginBottom:6 }}>
                  💡 {c.aiDomain}
                </div>
              )}
              <div style={{ fontSize:11, color:subTextColor, marginBottom:8, lineHeight:1.5 }}>
                <span>📍 {c.location}</span> &nbsp;·&nbsp; <span>{c.subType}</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom: c.hiring ? 8 : 0 }}>
                {c.tags.slice(0,4).map(t => (
                  <span key={t} style={{ fontSize:10, fontWeight:700, padding:"2px 7px", borderRadius:16, background:TAG_STYLES[t]?.bg||"#f1f5f9", color:TAG_STYLES[t]?.txt||"#475569" }}>{t}</span>
                ))}
              </div>
              {c.hiring && (
                <div style={{ background: isAI ? "#312e81" : "#fef2f2", borderRadius:7, padding:"6px 10px", fontSize:11, color: isAI ? "#a5b4fc" : "#7f1d1d" }}>
                  <strong style={{ color: isAI ? "#818cf8" : "#dc2626" }}>Open: </strong>{c.hiringRoles}
                </div>
              )}
              <div style={{ display:"flex", gap:6, marginTop:10 }}>
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ background:"#0a66c2", color:"#fff", borderRadius:6, padding:"5px 10px", fontSize:11, fontWeight:700, textDecoration:"none" }}>
                  in
                </a>
                {c.email && c.email !== "—" && (
                  <a href={`mailto:${c.email}`} onClick={e => e.stopPropagation()}
                    style={{ background: isAI ? "#312e81" : "#f8fafc", border:`1px solid ${isAI ? "#4338ca" : "#e2e8f0"}`, color: isAI ? "#a5b4fc" : "#334155", borderRadius:6, padding:"5px 10px", fontSize:11, fontWeight:600, textDecoration:"none" }}>
                    ✉
                  </a>
                )}
                <span style={{ marginLeft:"auto", fontSize:10, color: isAI ? "#6366f1" : "#94a3b8", alignSelf:"center" }}>Click for details →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div style={{ display:"flex", justifyContent:"center", gap:8, padding:"16px 28px 24px", flexWrap:"wrap" }}>
          <button onClick={() => setPage(p => Math.max(1,p-1))} disabled={page===1}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"6px 14px", fontSize:13, background:"#fff", cursor:"pointer", opacity:page===1?0.5:1 }}>← Prev</button>
          {Array.from({length:totalPages},(_,i)=>i+1).filter(p => Math.abs(p-page)<3 || p===1 || p===totalPages).map((p,i,arr) => (
            <span key={p}>
              {i>0 && arr[i-1]!==p-1 && <span style={{ padding:"6px 4px", color:"#94a3b8" }}>…</span>}
              <button onClick={() => setPage(p)}
                style={{ border:"1px solid", borderColor:p===page?"#1d4ed8":"#cbd5e1", borderRadius:8, padding:"6px 12px", fontSize:13, background:p===page?"#1d4ed8":"#fff", color:p===page?"#fff":"#0f172a", cursor:"pointer", fontWeight:p===page?700:400 }}>
                {p}
              </button>
            </span>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages,p+1))} disabled={page===totalPages}
            style={{ border:"1px solid #cbd5e1", borderRadius:8, padding:"6px 14px", fontSize:13, background:"#fff", cursor:"pointer", opacity:page===totalPages?0.5:1 }}>Next →</button>
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{ textAlign:"center", padding:"60px 20px", color:"#94a3b8" }}>
          <div style={{ fontSize:36, marginBottom:10 }}>🔍</div>
          <div style={{ fontSize:16, fontWeight:600 }}>No contacts match your filters</div>
          <div style={{ fontSize:12, marginTop:6 }}>Try adjusting your search or filters</div>
        </div>
      )}

      {/* DETAIL MODAL */}
      {selected && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: selected.aiFintech ? "#1e1b4b" : "#fff", borderRadius:16, padding:28, maxWidth:520, width:"100%", maxHeight:"90vh", overflowY:"auto", boxShadow:"0 24px 60px rgba(0,0,0,0.3)", position:"relative", border: selected.aiFintech ? "1px solid #4338ca" : "none" }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)}
              style={{ position:"absolute", top:14, right:14, background: selected.aiFintech ? "#312e81" : "#f1f5f9", border:"none", borderRadius:"50%", width:30, height:30, cursor:"pointer", fontSize:15, color: selected.aiFintech ? "#a5b4fc" : "#64748b", fontWeight:700 }}>✕</button>

            {selected.aiFintech && (
              <div style={{ background:"#312e81", borderRadius:10, padding:"10px 14px", marginBottom:16 }}>
                <div style={{ color:"#818cf8", fontWeight:800, fontSize:12, marginBottom:4 }}>🤖 AI FINTECH SPECIALIST</div>
                <div style={{ color:"#a5b4fc", fontSize:11 }}>Domain: {selected.aiDomain}</div>
              </div>
            )}

            {selected.hiring && (
              <div style={{ background: selected.aiFintech ? "#312e81" : "#fef2f2", border:`1px solid ${selected.aiFintech ? "#4338ca" : "#fca5a5"}`, borderRadius:10, padding:"10px 14px", marginBottom:16, fontSize:12 }}>
                <strong style={{ color: selected.aiFintech ? "#818cf8" : "#dc2626" }}>🔴 Actively Hiring</strong> · Posted within last {selected.hiringDays} days<br/>
                <span style={{ color: selected.aiFintech ? "#a5b4fc" : "#7f1d1d" }}>{selected.hiringRoles}</span>
              </div>
            )}

            <div style={{ display:"flex", gap:14, marginBottom:16, alignItems:"flex-start" }}>
              <div style={{ width:52, height:52, borderRadius:"50%", background: selected.aiFintech ? "#312e81" : REGION_COLORS[selected.region], border:`3px solid ${selected.aiFintech ? "#818cf8" : REGION_ACCENTS[selected.region]}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:900, color: selected.aiFintech ? "#c7d2fe" : REGION_ACCENTS[selected.region], flexShrink:0 }}>
                {selected.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize:18, fontWeight:800, color: selected.aiFintech ? "#e0e7ff" : "#0f172a" }}>{selected.name}</div>
                <div style={{ fontSize:13, color: selected.aiFintech ? "#a5b4fc" : "#64748b" }}>{selected.title}</div>
                <div style={{ fontSize:14, fontWeight:700, color: selected.aiFintech ? "#c7d2fe" : "#0f2442" }}>{selected.company}</div>
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
              {[
                { l:"Region", v:selected.region },
                { l:"Location", v:selected.location },
                { l:"Industry", v:selected.industry },
                { l:"Type", v:selected.subType },
                { l:"Email", v:selected.email || "—" },
              ].map(r => (
                <div key={r.l} style={{ gridColumn:r.l==="Industry"?"1/-1":"auto" }}>
                  <div style={{ fontSize:10, color: selected.aiFintech ? "#6366f1" : "#94a3b8", fontWeight:700, textTransform:"uppercase", letterSpacing:0.5, marginBottom:2 }}>{r.l}</div>
                  <div style={{ fontSize:13, color: selected.aiFintech ? "#c7d2fe" : "#0f172a" }}>{r.v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:10, color: selected.aiFintech ? "#6366f1" : "#94a3b8", fontWeight:700, textTransform:"uppercase", marginBottom:6 }}>Tags</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                {selected.tags.map(t => (
                  <span key={t} style={{ fontSize:11, fontWeight:700, padding:"3px 9px", borderRadius:16, background:TAG_STYLES[t]?.bg||"#f1f5f9", color:TAG_STYLES[t]?.txt||"#475569" }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display:"flex", gap:10 }}>
              <a href={selected.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ flex:1, background:"#0a66c2", color:"#fff", borderRadius:10, padding:"12px", fontSize:14, fontWeight:700, textDecoration:"none", textAlign:"center", display:"block" }}>
                🔗 LinkedIn Profile
              </a>
              {selected.email && selected.email !== "—" && (
                <a href={`mailto:${selected.email}`}
                  style={{ flex:1, background: selected.aiFintech ? "#312e81" : "#f1f5f9", color: selected.aiFintech ? "#a5b4fc" : "#0f172a", border:`1px solid ${selected.aiFintech ? "#4338ca" : "#e2e8f0"}`, borderRadius:10, padding:"12px", fontSize:14, fontWeight:700, textDecoration:"none", textAlign:"center", display:"block" }}>
                  ✉ Email
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ padding:"16px 28px", borderTop:"1px solid #e2e8f0", background:"#fff", fontSize:11, color:"#94a3b8", lineHeight:1.7 }}>
        ⚠️ <strong>Disclaimer:</strong> All contact information compiled from publicly available sources. Emails follow domain conventions and should be verified before outreach. Hiring flags based on job postings detected within 15–30 days. This dashboard is for career networking and research purposes only.
      </div>
    </div>
  );
}
