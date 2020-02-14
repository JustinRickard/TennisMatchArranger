export class ServiceResult {
    
    public success:boolean;
    public message:string;
/*
    constructor(success: boolean) {
        this.success = success;       
    }
*/

    constructor(success:boolean, message: string) {
        this.success = success;
        this.message = message;      
    }
}