export interface Medication {
  id: string;
  name: string;
  dosage: string;
  quantity: number;
  status: 'healthy' | 'normal' | 'attention' | 'urgent';
  expiryDate?: string;
  batchNumber?: string;
}

export interface HealthUnit {
  id: string;
  name: string;
  type: 'UBS' | 'USF' | 'UPA' | 'Farmácia';
  address: string;
  coordinates: [number, number];
  phone: string;
  workingHours: string;
  status: 'healthy' | 'normal' | 'attention' | 'urgent';
  medications: Medication[];
}

export interface AlertSummary {
  attentionItems: number;
  missingItems: number;
  expiredItems: number;
  urgentActions: string[];
}