import { HealthUnit } from "@/types/health-units";

export const healthUnits: HealthUnit[] = [
  // UBS - Unidades Básicas de Saúde
  {
    id: "1",
    name: "UBS Alto Cafezal",
    type: "UBS",
    address: "Rua Paes Lemes, 850",
    coordinates: [-22.2133, -49.9455],
    phone: "(14) 3402-4100",
    workingHours: "07:00 - 17:00",
    status: "healthy",
    medications: [
      { id: "med1", name: "Paracetamol", dosage: "500mg", quantity: 150, status: "healthy" },
      { id: "med2", name: "Ibuprofeno", dosage: "400mg", quantity: 80, status: "normal" },
      { id: "med3", name: "Amoxicilina", dosage: "500mg", quantity: 45, status: "normal" },
      { id: "med4", name: "Dipirona", dosage: "500mg", quantity: 120, status: "healthy" }
    ]
  },
  {
    id: "2",
    name: "UBS Bandeirantes",
    type: "UBS",
    address: "Rua Albericio Mendes Pinto, 96",
    coordinates: [-22.2089, -49.9401],
    phone: "(14) 3402-4101",
    workingHours: "07:00 - 17:00",
    status: "normal",
    medications: [
      { id: "med5", name: "Paracetamol", dosage: "500mg", quantity: 90, status: "normal" },
      { id: "med6", name: "Losartana", dosage: "50mg", quantity: 25, status: "attention" },
      { id: "med7", name: "Metformina", dosage: "850mg", quantity: 60, status: "normal" }
    ]
  },
  {
    id: "3",
    name: "UBS Cascata",
    type: "UBS",
    address: "Rua Cláudio Manoel da Costa, 43",
    coordinates: [-22.2045, -49.9512],
    phone: "(14) 3402-4102",
    workingHours: "07:00 - 17:00",
    status: "attention",
    medications: [
      { id: "med8", name: "Captopril", dosage: "25mg", quantity: 15, status: "attention" },
      { id: "med9", name: "Sinvastatina", dosage: "20mg", quantity: 8, status: "attention" }
    ]
  },
  {
    id: "4",
    name: "UBS Castelo Branco",
    type: "UBS",
    address: "Rua Adamantina, 15",
    coordinates: [-22.2201, -49.9433],
    phone: "(14) 3402-4103",
    workingHours: "07:00 - 17:00",
    status: "healthy",
    medications: [
      { id: "med10", name: "Paracetamol", dosage: "500mg", quantity: 180, status: "healthy" },
      { id: "med11", name: "Ibuprofeno", dosage: "400mg", quantity: 95, status: "normal" },
      { id: "med12", name: "Amoxicilina", dosage: "500mg", quantity: 70, status: "normal" }
    ]
  },
  {
    id: "5",
    name: "UBS Chico Mendes",
    type: "UBS",
    address: "Rua Amador Bueno, 1085",
    coordinates: [-22.2178, -49.9389],
    phone: "(14) 3402-4104",
    workingHours: "07:00 - 17:00",
    status: "normal",
    medications: [
      { id: "med13", name: "Dipirona", dosage: "500mg", quantity: 110, status: "healthy" },
      { id: "med14", name: "Losartana", dosage: "50mg", quantity: 40, status: "normal" },
      { id: "med15", name: "Metformina", dosage: "850mg", quantity: 55, status: "normal" }
    ]
  },
  {
    id: "6",
    name: "UBS Costa e Silva",
    type: "UBS",
    address: "Rua Fernando Fontana, 300",
    coordinates: [-22.2156, -49.9445],
    phone: "(14) 3402-4105",
    workingHours: "07:00 - 17:00",
    status: "healthy",
    medications: [
      { id: "med16", name: "Paracetamol", dosage: "500mg", quantity: 200, status: "healthy" },
      { id: "med17", name: "Ibuprofeno", dosage: "400mg", quantity: 85, status: "normal" },
      { id: "med18", name: "Captopril", dosage: "25mg", quantity: 65, status: "normal" }
    ]
  },
  {
    id: "7",
    name: "UBS Nova Marília",
    type: "UBS",
    address: "Av. Mem de Sá, 360",
    coordinates: [-22.2167, -49.9478],
    phone: "(14) 3402-4106",
    workingHours: "07:00 - 17:00",
    status: "normal",
    medications: [
      { id: "med19", name: "Omeprazol", dosage: "20mg", quantity: 75, status: "normal" },
      { id: "med20", name: "Enalapril", dosage: "10mg", quantity: 30, status: "attention" }
    ]
  },
  {
    id: "8",
    name: "UBS Planalto",
    type: "UBS",
    address: "Rua Gildo Bonato, 207",
    coordinates: [-22.2189, -49.9356],
    phone: "(14) 3402-4107",
    workingHours: "07:00 - 17:00",
    status: "attention",
    medications: [
      { id: "med21", name: "Hidroclorotiazida", dosage: "25mg", quantity: 12, status: "attention" },
      { id: "med22", name: "Propranolol", dosage: "40mg", quantity: 8, status: "attention" }
    ]
  },
  {
    id: "9",
    name: "UBS São Judas",
    type: "UBS",
    address: "Rua Ribeirão Preto, 510",
    coordinates: [-22.2234, -49.9501],
    phone: "(14) 3402-4108",
    workingHours: "07:00 - 17:00",
    status: "healthy",
    medications: [
      { id: "med23", name: "Paracetamol", dosage: "500mg", quantity: 160, status: "healthy" },
      { id: "med24", name: "Simeticona", dosage: "40mg", quantity: 90, status: "normal" }
    ]
  },
  {
    id: "10",
    name: "UBS São Miguel",
    type: "UBS",
    address: "Rua 24 de Dezembro, 2865",
    coordinates: [-22.2098, -49.9356],
    phone: "(14) 3402-4109",
    workingHours: "07:00 - 17:00",
    status: "normal",
    medications: [
      { id: "med25", name: "Clonazepam", dosage: "2mg", quantity: 35, status: "normal" },
      { id: "med26", name: "Fluoxetina", dosage: "20mg", quantity: 45, status: "normal" }
    ]
  },
  {
    id: "11",
    name: "UBS Santa Antonieta",
    type: "UBS",
    address: "Rua Profª Berta de Camargo Vieira, 595",
    coordinates: [-22.2089, -49.9389],
    phone: "(14) 3402-4110",
    workingHours: "07:00 - 17:00",
    status: "urgent",
    medications: [
      { id: "med27", name: "Insulina NPH", dosage: "100UI/mL", quantity: 5, status: "urgent" },
      { id: "med28", name: "Glibenclamida", dosage: "5mg", quantity: 0, status: "urgent" }
    ]
  },
  // USF - Unidades de Saúde da Família
  {
    id: "12",
    name: "USF J.K. (D. Maria da Conceição Brandão)",
    type: "USF",
    address: "Rua Lucílio Coelho de Oliveira, 5",
    coordinates: [-22.2234, -49.9501],
    phone: "(14) 3402-4111",
    workingHours: "07:00 - 17:00",
    status: "healthy",
    medications: [
      { id: "med29", name: "Paracetamol", dosage: "500mg", quantity: 140, status: "healthy" },
      { id: "med30", name: "Amoxicilina", dosage: "500mg", quantity: 80, status: "normal" },
      { id: "med31", name: "Losartana", dosage: "50mg", quantity: 95, status: "normal" }
    ]
  },
  {
    id: "13",
    name: "USF Aniz Badra",
    type: "USF",
    address: "Rua Urias Avelino de Moraes, s/n",
    coordinates: [-22.2098, -49.9356],
    phone: "(14) 3402-4112",
    workingHours: "07:00 - 17:00",
    status: "normal",
    medications: [
      { id: "med32", name: "Dipirona", dosage: "500mg", quantity: 100, status: "healthy" },
      { id: "med33", name: "Metformina", dosage: "850mg", quantity: 40, status: "normal" },
      { id: "med34", name: "Captopril", dosage: "25mg", quantity: 60, status: "normal" }
    ]
  },
  {
    id: "14",
    name: "USF Parque das Nações",
    type: "USF",
    address: "Rua Antonio Spressão, 465",
    coordinates: [-22.2067, -49.9423],
    phone: "(14) 3402-4113",
    workingHours: "07:00 - 17:00",
    status: "attention",
    medications: [
      { id: "med35", name: "Paracetamol", dosage: "500mg", quantity: 25, status: "attention" },
      { id: "med36", name: "Ibuprofeno", dosage: "400mg", quantity: 15, status: "attention" }
    ]
  },
  {
    id: "15",
    name: "USF Rosália",
    type: "USF",
    address: "Rua Kaniti Yamani, s/n",
    coordinates: [-22.2189, -49.9378],
    phone: "(14) 3402-4114",
    workingHours: "07:00 - 17:00",
    status: "healthy",
    medications: [
      { id: "med37", name: "Amoxicilina", dosage: "500mg", quantity: 120, status: "healthy" },
      { id: "med38", name: "Losartana", dosage: "50mg", quantity: 85, status: "normal" },
      { id: "med39", name: "Dipirona", dosage: "500mg", quantity: 90, status: "normal" }
    ]
  },
  // UPAs - Unidades de Pronto Atendimento
  {
    id: "16",
    name: "UPA Norte (Zona Norte)",
    type: "UPA",
    address: "Rua João Caliman, 110, Parque das Nações",
    coordinates: [-22.2078, -49.9445],
    phone: "(14) 3402-9000",
    workingHours: "24h",
    status: "healthy",
    medications: [
      { id: "med40", name: "Morfina", dosage: "10mg/mL", quantity: 50, status: "healthy" },
      { id: "med41", name: "Adrenalina", dosage: "1mg/mL", quantity: 30, status: "normal" },
      { id: "med42", name: "Diazepam", dosage: "10mg", quantity: 40, status: "normal" }
    ]
  },
  {
    id: "17",
    name: "UPA Zona Sul",
    type: "UPA",
    address: "Rua Antônio Pereira da Silva, 288, Hípica Paulista",
    coordinates: [-22.2289, -49.9501],
    phone: "(14) 3402-9001",
    workingHours: "24h",
    status: "normal",
    medications: [
      { id: "med43", name: "Tramadol", dosage: "50mg", quantity: 45, status: "normal" },
      { id: "med44", name: "Omeprazol", dosage: "40mg", quantity: 60, status: "normal" },
      { id: "med45", name: "Prednisolona", dosage: "20mg", quantity: 25, status: "attention" }
    ]
  },
  // Farmácias Municipais
  {
    id: "18",
    name: "Farmácia Municipal Central",
    type: "Farmácia",
    address: "Rua Hidekichi Nomura, 170, Fragata",
    coordinates: [-22.2145, -49.9467],
    phone: "(14) 3402-8000",
    workingHours: "07:00 - 19:00",
    status: "healthy",
    medications: [
      { id: "med46", name: "Rivotril", dosage: "2mg", quantity: 200, status: "healthy" },
      { id: "med47", name: "Ritalina", dosage: "10mg", quantity: 150, status: "healthy" },
      { id: "med48", name: "Concerta", dosage: "18mg", quantity: 80, status: "normal" }
    ]
  },
  {
    id: "19",
    name: "Farmácia Municipal Zona Norte",
    type: "Farmácia",
    address: "Av. Professora Berta de Camargo Vieira, 595",
    coordinates: [-22.2089, -49.9389],
    phone: "(14) 3402-8001",
    workingHours: "07:00 - 19:00",
    status: "normal",
    medications: [
      { id: "med49", name: "Synthroid", dosage: "50mcg", quantity: 120, status: "healthy" },
      { id: "med50", name: "Puran T4", dosage: "100mcg", quantity: 90, status: "normal" }
    ]
  },
  {
    id: "20",
    name: "Farmácia Popular do Brasil - Centro",
    type: "Farmácia",
    address: "Avenida Brasil, 184, Centro",
    coordinates: [-22.2133, -49.9445],
    phone: "(14) 3402-8002",
    workingHours: "08:00 - 18:00",
    status: "healthy",
    medications: [
      { id: "med51", name: "Paracetamol", dosage: "500mg", quantity: 500, status: "healthy" },
      { id: "med52", name: "Ibuprofeno", dosage: "400mg", quantity: 300, status: "healthy" },
      { id: "med53", name: "Dipirona", dosage: "500mg", quantity: 400, status: "healthy" }
    ]
  }
];