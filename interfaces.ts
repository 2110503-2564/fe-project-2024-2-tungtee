export interface MassItem {
    id: string;
    name: string;
    picture: string;
    address: string;
    district: string;
    province: string;
    tel: string;
    hourRate: number;
    open: string
    close: string    
}

export interface BookItem {
    id : string 
    name: string
    bookDate: string 
    bookTime: string
    bookDuration: string
}

export interface MassageResponse {
  success: boolean;
  count: number;
  pagination: {}; // หรือกำหนดประเภท pagination ที่ถูกต้อง
  data: MassItem[];
}

export interface TopCardProps {
  id: string;
}