export interface TeamMember {
  name: string;
  type: 'frontend' | 'backend' | 'management' | 'founders' | 'hr';
}

export const teamMembers: TeamMember[] = [
  { name: 'Shubham', type: 'frontend' },
  { name: 'Riddhesh', type: 'frontend' },
  { name: 'Sourabh', type: 'frontend' },
  { name: 'Tisha', type: 'frontend' },
  { name: 'Divyanshi', type: 'frontend' },
  { name: 'Aastha', type: 'frontend' },
  { name: 'Swati', type: 'frontend' },
  { name: 'Praveen', type: 'backend' },
  { name: 'Rajat', type: 'backend' },
  { name: 'Deepak', type: 'backend' },
  { name: 'Ajay', type: 'backend' },
  { name: 'Lakshya', type: 'backend' },
  { name: 'John', type: 'management' },
  { name: 'Sarah', type: 'management' },
  { name: 'Michael', type: 'management' },
  { name: 'Emily', type: 'management' },
  { name: 'Alex', type: 'founders' },
  { name: 'Jessica', type: 'founders' },
  { name: 'David', type: 'founders' },
  { name: 'Lisa', type: 'hr' },
  { name: 'Tom', type: 'hr' },
  { name: 'Rachel', type: 'hr' },
];

export const teamTypes = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend Team' },
  { id: 'backend', label: 'Backend Team' },
  { id: 'management', label: 'Management Team' },
  { id: 'founders', label: 'Founders Office' },
  { id: 'hr', label: 'HR' },
] as const;

