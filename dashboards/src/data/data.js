const companyNames = [
  "Reliance Industries Ltd", "Tata Consultancy Services (TCS)", "HDFC Bank", "ICICI Bank", "Infosys",
  "Hindustan Unilever Ltd (HUL)", "ITC Ltd", "State Bank of India (SBI)", "Bharti Airtel", "Kotak Mahindra Bank",
  "Larsen & Toubro (L&T)", "Axis Bank", "Bajaj Finance", "Bajaj Finserv", "HCL Technologies",
  "Wipro", "Asian Paints", "Maruti Suzuki India", "Sun Pharmaceutical Industries", "Titan Company",
  "UltraTech Cement", "Nestlé India", "Mahindra & Mahindra (M&M)", "NTPC Ltd", "Power Grid Corporation",
  "Tata Motors", "Adani Enterprises", "Adani Ports & SEZ", "JSW Steel", "Tata Steel",
  "Coal India", "IndusInd Bank", "Dr. Reddy’s Laboratories", "Cipla", "Britannia Industries",
  "Divi’s Laboratories", "SBI Life Insurance", "HDFC Life Insurance", "Eicher Motors", "Grasim Industries",
  "Hero MotoCorp", "ONGC (Oil & Natural Gas)", "BPCL (Bharat Petroleum)", "Apollo Hospitals", "Tech Mahindra",
  "UPL Ltd", "Shriram Finance", "Trent Ltd", "Bajaj Auto", "Hindalco Industries"
];

export const watchlist = companyNames.map((name, index) => {
  // Deterministic pseudo-random values to prevent flickering on re-renders
  const hash = (index + 1) * 111;
  const price = ((hash * 7) % 3500 + 150).toFixed(2);
  const percentNum = ((hash * 3) % 7 - 3.5);
  const isDown = percentNum < 0;
  const percentStr = Math.abs(percentNum).toFixed(2);
  const formattedPercent = `${isDown ? '-' : '+'}${percentStr}%`;
  
  return { 
    name, 
    price, 
    percent: formattedPercent, 
    isDown 
  };
});

export const positions = []; // Deprecated, to be fetched dynamically
