export interface Property {
    DetailedError: any;
    ErrorMessage: any;
    Success: string;
    TransactionId: number;

    Item: {
        Address1: string
        Address2: string
        Address3: string
        City: string
        ContactPerson: string
        Email: string
        Id: number
        IsActive: boolean
        Logo: BinaryType
        Mobile: string
        Name: string
        PhoneNo: string
        Pincode: number
        RCB: number
        RCT: Date
        RUB: number
        RUT: Date
        Slogan: string
    };
}