export default class Order{

    constructor(_id,_userId,_userEmail,_userName,_userAddress,_product=[],_total){
        this.Id=_id;
        this.UserId=_userId;
        this.Email=_userEmail;
        this.Name=_userName;
        this.Address=_userAddress;
        this.product=_product;
        this.Total=_total;

        
    }
}